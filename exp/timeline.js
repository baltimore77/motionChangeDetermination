// leave this here!
const timeline = [];
const rdkType = 3; //1-6 define different types of built-in rdks available in the plugin
const apertureType = 1; //whether aperture is circle or ellipse, etc.
const apertureWidth = 300;
const apertureHeight = apertureWidth;
const coherenceDuration = 500;
const changeDegrees = 90;

/*

85% of trials: 35% coherent in any direction
15% of trials: 100% coherent in any direction

half of no-change trials: 500ms
other half: 1000ms

192 change
192 no change

24 catch trials
*/
const offsetForCountdownTimer = 48;

const rdk_trial = {
    type: "rdk-change",
    correct_choice: "NONE",
    border: true,
    border_thickness: 1,
    border_color: "black",
    background_color: "white",
    aperture_color: "black",
    aperture_width: apertureWidth,
    aperture_height: apertureHeight,
    aperture_center_y: (screen.height-offsetForCountdownTimer) / 2,
    dot_color: "black",
    move_distance: 5,
    coherence: jsPsych.timelineVariable("coherence"),
    coherence_duration: coherenceDuration,
    coherence_change: jsPsych.timelineVariable("change"),
    number_of_sets: 1,
    number_of_dots: 45,
    trial_duration: jsPsych.timelineVariable("duration"),
    on_start: (trial) => {
        const angle1 = Math.floor(Math.random() * 360);
        var angle2 = angle1;
        if (jsPsych.timelineVariable("change", true)) {
            const directionChange = Math.random();
            if (directionChange <= 0.5) {
                angle2 = angle1 - 90;
            } else {
                angle2 = angle1 + 90;
            }
            if (angle2 > 360) {
                angle2 = angle2 - 360;
            }
            if (angle2 < 0) {
                angle2 = angle2 + 360;
            }
            trial.data = {
                direction_of_change: directionChange * changeDegrees,
            };
        }
        trial.coherent_direction = angle1;
        trial.coherent_direction_after_change = angle2;
        trial.data = {
            coherent_direction: angle1,
            coherent_direction_after_change: angle2,
        };
    },
  };

const response_trial = {
    type: "angle-response",
    diameter: apertureWidth,
    block: jsPsych.timelineVariable("block"),
    coherence: jsPsych.timelineVariable("coherence"),
    change: jsPsych.timelineVariable("change"),
    duration: jsPsych.timelineVariable("duration"),
    post_trial_gap: jsPsych.timelineVariable("iti"),
    starting_angle: () => {
        return jsPsych.data.get().last(1).values()[0].coherent_direction;
    },
    target_angle: () => {
        return jsPsych.data.get().last(1).values()[0]
            .coherent_direction_after_change;
    },
    data: jsPsych.timelineVariable("data"),
    on_finish: function (data) {
        "use strict";
        data.subjectkey = GUID;
        // data.src_subject_id = subjectID;
        data.src_subject_id = workerId;
        data.site = siteNumber;
        data.interview_date = today;
        data.interview_age = ageAtAssessment;
        data.sex = sexAtBirth;
        data.handedness = handedness;
        data.index = trialIterator;
    },
    // on_finish: function (data) {
    //     saveData(
    //         "mcd_" + workerId,
    //         jsPsych.data.get().filter({ trial_type: "angle-response" }).csv()
    //     );
    // },
};

const instructions0 = {
    type: "instructions",
    show_clickable_nav: true,
    pages: [
        "Hello and thank you for taking part in our experiment!",
        "In this task, you will see a bunch of dots flow across a portion of the screen.<br /><br /><i>Sometimes all the dots flow in the same direction</i>:",
    ],
    message_progress_bar: '',
    on_start: function() {
        // set progress bar to 0 at the start of experiment
        jsPsych.setProgressBar(0);
    }
};

const demo0_variables = [
    { block: "demo0", coherence: 1, change: false, duration: 3000, iti: 0 },
];

const demo0 = {
    timeline: [rdk_trial],
    timeline_variables: demo0_variables,
    message_progress_bar: '',
    on_start: function() {
        // set progress bar to 0 at the start of experiment
        jsPsych.setProgressBar(0);
    }
};

const instructions0b = {
    type: "instructions",
    show_clickable_nav: true,
    pages: [
        "More often, many of the dots will move in the same direction, while <i>the remaining dots move in many different directions</i>:",
    ],
    message_progress_bar: '',
    on_start: function() {
        // set progress bar to 0 at the start of experiment
        jsPsych.setProgressBar(0);
    }
};

const demo0b_variables = [
    { block: "demo0", coherence: 0.35, change: false, duration: 3000, iti: 0 },
];

const demo0b = {
    timeline: [rdk_trial],
    timeline_variables: demo0b_variables,
    message_progress_bar: '',
    on_start: function() {
        // set progress bar to 0 at the start of experiment
        jsPsych.setProgressBar(0);
    }
};

const instructions0c = {
    type: "instructions",
    show_clickable_nav: true,
    pages: [
        "On some trials, the dots will start moving in one direction, but then <i>suddenly change direction</i> at some point during the trial:",
    ],
    message_progress_bar: '',
    on_start: function() {
        // set progress bar to 0 at the start of experiment
        jsPsych.setProgressBar(0);
    }
};

const demo0c_variables = [
    { block: "demo0c", coherence: 1, change: true, duration: 2000, iti: 0 },
];

const demo0c = {
    timeline: [rdk_trial],
    timeline_variables: demo0c_variables,
    message_progress_bar: '',
    on_start: function() {
        // set progress bar to 0 at the start of experiment
        jsPsych.setProgressBar(0);
    }
};

const instructions0d = {
    type: "instructions",
    show_clickable_nav: true,
    pages: [
        "<strong>Your task is to indicate which direction <i>most of the dots</i> appear to be moving at the <u>end of the trial</u>.<br /><br />" +
            "To do that, use your mouse or trackpad to indicate <i>the direction towards which you think the dots were flowing.<i/></strong>",
        "On each trial, after the dots disappear, you will see a <span style='color:red'>red dot</span> at the center of the screen.<br /><br />When you click on the dot a <span style='color:red'>red line</span> will appear allowing you to indicate the direction of dot flow.",
        "Use your mouse to:<br />" +
            "1. click on the central <span style='color:red'>red dot</span>, then use your mouse or trackpad to<br />" +
            "2. adjust the <span style='color:red'>red line</span>, and finally<br />" +
            "3. click your mouse or trackpad a second time when you are satisfied that the <span style='color:red'>red line</span> matches the direction of flow:",
    ],
    message_progress_bar: '',
    on_start: function() {
        // set progress bar to 0 at the start of experiment
        jsPsych.setProgressBar(0);
    }
};

const demo0d_variables = [
    { block: "demo0d", coherence: 1, change: true, duration: 1000, iti: 0 },
];

const demo0d = {
    timeline: [rdk_trial, response_trial],
    timeline_variables: demo0d_variables,
    message_progress_bar: '',
    on_start: function() {
        // set progress bar to 0 at the start of experiment
        jsPsych.setProgressBar(0);
    }
};

const instructions0e = {
    type: "instructions",
    show_clickable_nav: true,
    pages: [
        "During the practice, after you click to indicate the direction the dots were moving," +
            "<p>we will draw a <span style='color:lime'>green line</span> to indicate what the correct response should have been (the direction the dots were actually flowing).</p>",
        "Here are some examples showing the <span style='color:lime'>green line</span>:",
    ],
    message_progress_bar: '',
    on_start: function() {
        // set progress bar to 0 at the start of experiment
        jsPsych.setProgressBar(0);
    }
};

const demo0e_variables = [
    { block: "practice", coherence: 1, change: true, duration: 1000, iti: 500 },
    { block: "practice", coherence: 0.35, change: false, duration: 500, iti: 500 },
    { block: "practice", coherence: 0.35, change: true, duration: 1000, iti: 500 },
];

const demo0e = {
    timeline: [rdk_trial, response_trial],
    timeline_variables: demo0e_variables,
    message_progress_bar: '',
    on_start: function() {
        // set progress bar to 0 at the start of experiment
        jsPsych.setProgressBar(0);
    }
};

const instructions0f = {
    type: "instructions",
    show_clickable_nav: true,
    pages: [
        "Very good. During the task, please respond as <i>precisely</i> as possible!<br />The following is practice:",
    ],
    message_progress_bar: '',
    on_start: function() {
        // set progress bar to 0 at the start of experiment
        jsPsych.setProgressBar(0);
    }
};

const practice_trials = [
    { block: "practice", coherence: 1, change: false, duration: 1000, iti: 500 },
    { block: "practice", coherence: 1, change: false, duration: 500, iti: 500 },
    { block: "practice", coherence: 0.35, change: true, duration: 1000, iti: 500 },
    { block: "practice", coherence: 0.35, change: true, duration: 1000, iti: 500 },
    { block: "practice", coherence: 0.35, change: true, duration: 1000, iti: 500 },
    { block: "practice", coherence: 0.35, change: true, duration: 1000, iti: 500 },
    { block: "practice", coherence: 0.35, change: false, duration: 500, iti: 500 },
    { block: "practice", coherence: 0.35, change: false, duration: 500, iti: 500 },
    { block: "practice", coherence: 0.35, change: false, duration: 1000, iti: 500 },
    { block: "practice", coherence: 0.35, change: false, duration: 1000, iti: 500 },
];

var sizePBar = practice_trials.length
console.log(sizePBar)

const rdk_procedure_practice = {
    timeline: [rdk_trial, response_trial],
    timeline_variables: practice_trials,
    randomize_order: true,
    message_progress_bar: '',
    on_finish: function() {
        // at the end of each trial, update the progress bar
        // based on the current value and the proportion to update for each trial
        var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(curr_progress_bar_value + (1/sizePBar));
    }
};

const instructions1 = {
    type: "instructions",
    show_clickable_nav: true,
    pages: [
        "That completes the practice.<br /><br />The main task will begin momentarily and should take up to <i>ten minutes</i> to complete.<br /><br />Please try to complete it in a single session.<br /><br />During the real task, you will no longer see the the <span style='color:lime'>green line</span> to give feedback on how accurately you are responding.<br /><br /><strong>Please try to indicate as precisely as possible the direction you believe the dots were flowing at the <u>end</iu> of the trial</strong>.<br />",
        "Click 'Next' when you are ready to begin the main task.",
    ],
    on_start: function() {
        // set progress bar to 0 at the start of experiment
        jsPsych.setProgressBar(0);
    }
};

const rdk_trials = [
    { block: "experiment", coherence: 1, change: true, duration: 500, iti: 500 },
    { block: "experiment", coherence: 1, change: true, duration: 500, iti: 500 },
    { block: "experiment", coherence: 1, change: false, duration: 500, iti: 500 },
    { block: "experiment", coherence: 1, change: false, duration: 1000, iti: 500 },
    { block: "experiment", coherence: 0.35, change: true, duration: 500, iti: 500 },
    { block: "experiment", coherence: 0.35, change: true, duration: 500, iti: 500 },
    { block: "experiment", coherence: 0.35, change: false, duration: 500, iti: 500 },
    { block: "experiment", coherence: 0.35, change: false, duration: 1000, iti: 500 },
    { block: "experiment", coherence: 0.35, change: true, duration: 500, iti: 500 },
    { block: "experiment", coherence: 0.35, change: true, duration: 500, iti: 500 },
    { block: "experiment", coherence: 0.35, change: false, duration: 500, iti: 500 },
    { block: "experiment", coherence: 0.35, change: false, duration: 1000, iti: 500 },
    { block: "experiment", coherence: 0.35, change: true, duration: 500, iti: 500 },
    { block: "experiment", coherence: 0.35, change: true, duration: 500, iti: 500 },
    { block: "experiment", coherence: 0.35, change: false, duration: 500, iti: 500 },
    { block: "experiment", coherence: 0.35, change: false, duration: 1000, iti: 500 },
];

sizePBar = rdk_trials.length
var numRepetitions = 12

const rdk_procedure = {
    timeline: [rdk_trial, response_trial],
    timeline_variables: rdk_trials,
    randomize_order: true,
    repetitions: numRepetitions,
    on_finish: function() {
        // at the end of each trial, update the progress bar
        // based on the current value and the proportion to update for each trial
        var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(curr_progress_bar_value + (1/(numRepetitions*sizePBar)));
    }
};

let save_data = {
    type: "html-keyboard-response",
    stimulus:
        "<p>Data saving...</p>" +
        '<div class="sk-cube-grid">' +
        '<div class="sk-cube sk-cube1"></div>' +
        '<div class="sk-cube sk-cube2"></div>' +
        '<div class="sk-cube sk-cube3"></div>' +
        '<div class="sk-cube sk-cube4"></div>' +
        '<div class="sk-cube sk-cube5"></div>' +
        '<div class="sk-cube sk-cube6"></div>' +
        '<div class="sk-cube sk-cube7"></div>' +
        '<div class="sk-cube sk-cube8"></div>' +
        '<div class="sk-cube sk-cube9"></div>' +
        "</div>" +
        "<p>Do not close this window until the text dissapears.</p>",

    choices: jsPsych.NO_KEYS,
    trial_duration: 5000,
    on_finish: function () {
        saveData(
            "mcd_" + workerId,
            jsPsych.data.get().filter({ trial_type: "angle-response" }).csv()
        );
        document.getElementById("unload").onbeforeunload = "";
        $(document).ready(function () {
            $("body").addClass("showCursor"); // returns cursor functionality
            closeFullscreen(); // kill fullscreen
        });
    },
};

let end = {
    type: "html-keyboard-response",
    stimulus:
        "<p>Thank you!</p>" +
        "<p>You have successfully completed the experiment and your data has been saved.</p>" +
        // "<p>To leave feedback on this task, please click the following link:</p>" +
        // "<p style='color:white;'><a href=" +
        // feedbackLink +
        // ">Leave Task Feedback!</a></p>" +
        // "<p>Please wait for the experimenter to continue.</p>"+
        "<p><i>You may now close the expriment window at anytime.</i></p>",
    choices: jsPsych.NO_KEYS,
};

$.getScript("exp/main.js");
