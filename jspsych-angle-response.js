/**
 * jspsych-angle-response
 * Josh de Leeuw
 *
 * documentation: www.jspsych.org
 *
 **/

jsPsych.plugins["angle-response"] = (function () {
  var plugin = {};

  plugin.info = {
    name: "angle-response",
    description: "",
    parameters: {
      diameter: {
        type: jsPsych.plugins.parameterType.INT,
        default: 200,
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        default: null,
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        default: null,
      },
      border_color: {
        type: jsPsych.plugins.parameterType.STRING,
        default: "#222",
      },
      line_color: {
        type: jsPsych.plugins.parameterType.STRING,
        default: "#ff0000",
      },
      feedback_color: {
        type: jsPsych.plugins.parameterType.STRING,
        default: "#00ff00",
      },
      center_dot_color: {
        type: jsPsych.plugins.parameterType.STRING,
        default: "#ff0000",
      },
      starting_angle: {
        type: jsPsych.plugins.parameterType.FLOAT,
      },
      target_angle: {
        type: jsPsych.plugins.parameterType.FLOAT,
      },
      block: {
        type: jsPsych.plugins.parameterType.STRING,
        default: '',
      },
      feedback_duration: {
        type: jsPsych.plugins.parameterType.INT,
        default: 500,
      },
      coherence: {
        type: jsPsych.plugins.parameterType.FLOAT,
        default: 0.5,
      },
      coherence_change: {
        type: jsPsych.plugins.parameterType.BOOL,
        default: false,
      },
      coherence_duration: {
        type: jsPsych.plugins.parameterType.INT,
        default: 500,
      },
    },
  };

  plugin.trial = function (display_element, trial) {
    let rt = null;
    let response = null;

    let html = `
      <style>
      body {
        background-color: gray;
      }
      #angle-response-border {
        width: ${trial.diameter}px;
        height: ${trial.diameter}px;
        border-radius: 50%;
        background-color: black;
        position: relative;
      }
      .angle-response-line {
        height: 2px;
        width: 50%;
        position: absolute;
        top: calc(50% - 1px);
        left: 50%;
        transform-origin: left;
      }
      #angle-response-line {
        visibility: hidden;
        background-color: ${trial.line_color};
      }
      #angle-response-feedback {
        visibility: hidden;
        background-color: ${trial.feedback_color};
      }
      #angle-response-center-dot {
        position: absolute;
        top: calc(50% - 8px);
        left: calc(50% - 8px);
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: ${trial.center_dot_color};
        cursor: pointer;
      }
      .dot {
        position: absolute;
        left: calc(100% - 2px);
        top: -2px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: inherit;
      }
      </style>
      <div id="angle-response-border">
        <div id="angle-response-line" class="angle-response-line"><div class="dot"></div></div>
        <div id="angle-response-feedback" class="angle-response-line"><div class="dot"></div></div>
        <div id="angle-response-center-dot"></div>
      </div>
    `;

    if (trial.prompt !== null) {
      html += trial.prompt;
    }

    display_element.innerHTML = html;

    const start_time = performance.now();

    const circle = display_element.querySelector("#angle-response-border");
    const line = display_element.querySelector("#angle-response-line");
    const feedback = display_element.querySelector(
      "#angle-response-feedback"
    );

    const calcAngle = (x, y) => {
      const circle_box = circle.getBoundingClientRect();
      const cx = circle_box.left + circle_box.width / 2;
      const cy = circle_box.top + circle_box.height / 2;

      const angle = Math.atan2(-(y - cy), x - cx);

      return angle;
    };

    const showFeedback = () => {
      feedback.style.transform = `rotate(${-trial.target_angle}deg)`;
      feedback.style.visibility = "visible";


      if (is_dot_clicked){
          jsPsych.pluginAPI.setTimeout(end_trial, trial.feedback_duration);
      }

    };

    const showLine = (e) => {
      e.stopPropagation();
      is_dot_clicked = true;
      line.style.visibility = "visible";

      document.querySelector("#angle-response-center-dot").removeEventListener('click', showLine);
      document.querySelector("#angle-response-center-dot").style.cursor = 'default';
      document.addEventListener('click', handleResponse);
    };

    const handleResponse = async (e) => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleResponse);
      // return response in degrees, with right = 0, top = 90, left = 180, bottom = 270
      angle = Math.round((180 * calcAngle(e.clientX, e.clientY)) / Math.PI);
      if (angle < 0) {
        response = 360 + angle;
      } else {
        response = angle;
      }
      rt = Math.round(performance.now() - start_time);
      if (trial.block == 'practice') { showFeedback(); }
      else { if (is_dot_clicked){ jsPsych.pluginAPI.setTimeout(end_trial, trial.feedback_duration); } }
    };

    let is_dot_clicked = false;
    const startResponseWindow = () => {
      document
        .querySelector("#angle-response-center-dot")
        .addEventListener("click", showLine);
    };

    startResponseWindow();

    const handleMouseMove = (e) => {
      const angle = calcAngle(e.clientX, e.clientY);
      line.style.transform = `rotate(${-angle}rad)`;
    }

    document.addEventListener("mousemove", handleMouseMove);

    const end_trial = () => {
      jsPsych.pluginAPI.clearAllTimeouts();

      let error = response - trial.target_angle;
      if (error > 180) {
        error = -(360 - (response - trial.target_angle));
      }
      if (error < -180) {
        error = (360 + (response - trial.target_angle));
      }

      let change = trial.target_angle - trial.starting_angle;
      if (change > 180) {
        change = (360 - (trial.target_angle - trial.starting_angle));
      }
      if (change < -180) {
        change = (360 + (trial.target_angle - trial.starting_angle));
      }

      // gather the data to store for the trial
      const trial_data = {
        block: trial.block,
        coherence: trial.coherence,
        coherence_change: trial.change,
        coherence_duration: trial.duration,
        coherent_direction_start: trial.starting_angle,
        coherent_direction_change: change,
        coherent_direction_finish: trial.target_angle,
        response: response,
        error: error,
        rt: rt,
      };

      // clear the display
      display_element.innerHTML = "";

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

    // end trial if trial_duration is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(end_trial, trial.trial_duration);
    }
  };

  return plugin;
})();
