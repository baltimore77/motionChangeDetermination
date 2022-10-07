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

const rdk_trial = {
    type: "rdk-change",
    correct_choice: "NONE",
    border: true,
    border_thickness: 2,
    background_color: "white",
    aperture_width: apertureWidth,
    aperture_height: apertureHeight,
    dot_color: "black",
    move_distance: 5,
    coherence: jsPsych.timelineVariable("coherence"),
    coherence_duration: coherenceDuration,
    coherence_change: jsPsych.timelineVariable("change"),
    number_of_sets: 1,
    number_of_dots: 45,
    trial_duration: jsPsych.timelineVariable("duration"),
    on_start: (trial) => {
        // $(document).ready(function () {
        //     $("body").addClass("hideCursor"); // returns cursor functionality
        // });

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
    on_start: () => {
        // $(document).ready(function () {
        //     $("body").addClass("showCursor"); // returns cursor functionality
        // });
    },
    starting_angle: () => {
        return jsPsych.data.get().last(1).values()[0].coherent_direction;
    },
    target_angle: () => {
        return jsPsych.data.get().last(1).values()[0]
            .coherent_direction_after_change;
    },
    on_finish: function (data) {
        saveData(
            "data",
            jsPsych.data.get().filter({ trial_type: "angle-response" }).csv()
        );
    },
};

const instructions0 = {
    type: "instructions",
    show_clickable_nav: true,
    pages: [
        "Hello and thank you for taking part in our experiment!",
        "In this experiment you will see dots flowing across the screen. You will use your mouse to indicate the direction towards which you think the dots are flowing.",
        "Dots will briefly appear. Try to guess which direction most of the dots are flowing. After they disappear use your mouse to adjust the red line until it matches the direction the dots were flowing.",
        "On some trials the dots will suddenly change direction halfway through the trial. Your task is to determine which direction they are flowing at the *end* of the trial.",
        "Remember, if you notice the dots change direction, please indicate the direction they change to, *not* their original direction.",
        "The following is practice.",
    ],
};

const practice_trials = [
    { block: "practice", coherence: 1, change: false, duration: 1000 },
    { block: "practice", coherence: 1, change: false, duration: 500 },
    { block: "practice", coherence: 0.35, change: true, duration: 1000 },
    { block: "practice", coherence: 0.35, change: true, duration: 1000 },
    { block: "practice", coherence: 0.35, change: true, duration: 1000 },
    { block: "practice", coherence: 0.35, change: true, duration: 1000 },
    { block: "practice", coherence: 0.35, change: false, duration: 500 },
    { block: "practice", coherence: 0.35, change: false, duration: 500 },
    { block: "practice", coherence: 0.35, change: false, duration: 1000 },
    { block: "practice", coherence: 0.35, change: false, duration: 1000 },
];

const rdk_procedure_practice = {
    timeline: [rdk_trial, response_trial],
    timeline_variables: practice_trials,
    randomize_order: true,
};

const instructions1 = {
    type: "instructions",
    show_clickable_nav: true,
    pages: [
        "That completes the practice.",
        "The main task will begin momentarily, and will last around six or seven minutes.",
        "During the task you will not receive feedback on how accurately you are responding.",
        "Please try to click as accurately as possible the direction you believe the dots were flowing.",
        "Click when you are ready to begin.",
    ],
};

const rdk_trials = [
    { block: "experiment", coherence: 1, change: true, duration: 500 },
    { block: "experiment", coherence: 1, change: true, duration: 500 },
    { block: "experiment", coherence: 1, change: false, duration: 500 },
    { block: "experiment", coherence: 1, change: false, duration: 1000 },
    { block: "experiment", coherence: 0.35, change: true, duration: 500 },
    { block: "experiment", coherence: 0.35, change: true, duration: 500 },
    { block: "experiment", coherence: 0.35, change: false, duration: 500 },
    { block: "experiment", coherence: 0.35, change: false, duration: 1000 },
    { block: "experiment", coherence: 0.35, change: true, duration: 500 },
    { block: "experiment", coherence: 0.35, change: true, duration: 500 },
    { block: "experiment", coherence: 0.35, change: false, duration: 500 },
    { block: "experiment", coherence: 0.35, change: false, duration: 1000 },
    { block: "experiment", coherence: 0.35, change: true, duration: 500 },
    { block: "experiment", coherence: 0.35, change: true, duration: 500 },
    { block: "experiment", coherence: 0.35, change: false, duration: 500 },
    { block: "experiment", coherence: 0.35, change: false, duration: 1000 },
];

const rdk_procedure = {
    timeline: [rdk_trial, response_trial],
    timeline_variables: rdk_trials,
    randomize_order: true,
    repetitions: 12,
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
            "motionChangeDetermination" + workerId,
            jsPsych.data.get().csv()
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
        "<p>To leave feedback on this task, please click the following link:</p>" +
        "<p style='color:white;'><a href=" +
        feedbackLink +
        ">Leave Task Feedback!</a></p>" +
        // "<p>Please wait for the experimenter to continue.</p>"+
        "<p><i>You may now close the expriment window at anytime.</i></p>",
    choices: jsPsych.NO_KEYS,
};

$.getScript("exp/main.js");
