// leave this here!
let timeline = [];

let instructions0 = {
  type: "html-keyboard-response",
  stimulus: "<p> Hello and thank you for taking part in our experiment!</p>"+
  "<p>In this experiment you will see dots flowing across the screen.</p>"+
  "<p>Using your mouse indicate the direction towrds which you think the dots are flowing.</p>"+
  "<p> <i> Press spacebar to continue</i> </p>",
  choices: [32],
  on_finish: function() {
    // this needs to be wrapped in a while loop
    // checks against other protyotype vals to ensure inconrugency
    if (randomizedLists[0].prototype === Anger.prototype) {
      randomizedLists.push(randomizedLists.shift());
      console.log("shifted");
    } else {
      console.log("not shifted");
    }
    testTrial.pop(); // pops the 9th item
    testTrial.pop(); // pops the 8th item
    testTrial.push({stimulus: randomizedLists[0].prototype, data: {test_part:"test", stim: randomizedLists[0].prototype}}); // pushes 8th item prototype
    testTrial.push({stimulus: "TONE2"}); // pushes 9th item tone2

  }
};

// let bkgCol = "white"; //background color
// let dotCol = "black"; //dots color
// let rdkType = 1; //1-6 define different types of built-in rdks available in the plugin
// let apertureType = 1; //whether aperture is circle or ellipse, etc.
// let aperatureDuration = 1000; //total length of rdk display, sum of first half (baseline motion) and second half (change or nochange from baseline)
// let aperatureRadiusPixels = 300; //radius of dots array in pixels
// let dotRadiusPixels = 1; //radius of each dot in pixels
// let dotLifespanFrameRefreshes = -1; //-1 is for the duration of the aperture
// let dotSpeedPixelsPerFrame = 1; //how many pixels does the dot move from one frame to the next
// let dotsQuantity = 10; //number of dots visible on any given frame
// let coherenceVector = [0,15,30,45,60,75,90,105,120,135,150,165,180,195,210,225,240,255,270,285,300,315,330,345]; //orientations at which coherent dots flow
// let coherenceChange = 90; //degrees difference between first orientation flow, and final orientation flow, could be applied clockwise or counterclockwise by adding or subtracting from original coherenceVector
// let coherencePercent = 0.35; //what percent of dots flow in same direction (whereas others flow randomly)
// let rdkStandard = {
//     type: "rdk",
//     RDK_type: 3,
//     aperture_type: 1,
//     aperture_width: 300,
//     dot_life: -1,
//     move_distance: 1,
//     trial_duration: 5000,
//     background_color: "black",
//     dot_color: "white",
//     dot_radius: 2,
//     number_of_dots: 15,
//     coherence: 0.35,
//     border: true,
//     border_color: "white",
//     choices: [32],
//     correct_choice: [32]
// };
var rdk_nochange = {
    timeline: [
        {
            type: "html-keyboard-response",
            stimulus: '',
            choices: "NO_KEYS",
            trial_duration: 100
        },
        {
            type: "rdk",
            RDK_type: 3,
            aperture_type: 1,
            aperture_width: 300,
            dot_life: -1,
            move_distance: 1,
            trial_duration: 500,
            background_color: "black",
            dot_color: "white",
            dot_radius: 2,
            number_of_dots: 30,
            coherence: 0.35,
            border: true,
            border_color: "white",
            choices: [32],
            correct_choice: [32],
            coherent_direction: jsPsych.timelineVariable('coherenceStart')
        },
        {
            type: "rdk",
            RDK_type: 3,
            aperture_type: 1,
            aperture_width: 300,
            dot_life: -1,
            move_distance: 1,
            trial_duration: 500,
            background_color: "black",
            dot_color: "white",
            dot_radius: 2,
            number_of_dots: 30,
            coherence: 0.35,
            border: true,
            border_color: "white",
            choices: [32],
            correct_choice: [32],
            coherent_direction: jsPsych.timelineVariable('coherenceStop')
        }
    ],
    timeline_variables: [
        { coherenceStart: 0, coherenceStop: 0 },
        { coherenceStart: 15, coherenceStop: 15 },
        { coherenceStart: 30, coherenceStop: 30 },
        { coherenceStart: 45, coherenceStop: 45 },
        { coherenceStart: 60, coherenceStop: 60 },
        { coherenceStart: 75, coherenceStop: 75 },
        { coherenceStart: 90, coherenceStop: 90 },
        { coherenceStart: 105, coherenceStop: 105 },
        { coherenceStart: 120, coherenceStop: 120 },
        { coherenceStart: 135, coherenceStop: 135 },
        { coherenceStart: 150, coherenceStop: 150 },
        { coherenceStart: 165, coherenceStop: 165 },
        { coherenceStart: 180, coherenceStop: 180 },
        { coherenceStart: 195, coherenceStop: 195 },
        { coherenceStart: 210, coherenceStop: 210 },
        { coherenceStart: 225, coherenceStop: 225 },
        { coherenceStart: 240, coherenceStop: 240 },
        { coherenceStart: 255, coherenceStop: 255 },
        { coherenceStart: 270, coherenceStop: 270 },
        { coherenceStart: 285, coherenceStop: 285 },
        { coherenceStart: 300, coherenceStop: 300 },
        { coherenceStart: 315, coherenceStop: 315 },
        { coherenceStart: 330, coherenceStop: 330 },
        { coherenceStart: 345, coherenceStop: 345 }
    ]
}

var rdk_change = {
    timeline: [
        {
            type: "html-keyboard-response",
            stimulus: '',
            choices: "NO_KEYS",
            trial_duration: 100
        },
        {
            type: "rdk",
            RDK_type: 3,
            aperture_type: 1,
            aperture_width: 300,
            dot_life: -1,
            move_distance: 1,
            trial_duration: 500,
            background_color: "black",
            dot_color: "white",
            dot_radius: 2,
            number_of_dots: 30,
            coherence: 0.35,
            border: true,
            border_color: "white",
            choices: [32],
            correct_choice: [32],
            coherent_direction: jsPsych.timelineVariable('coherenceStart')
        },
        {
            type: "rdk",
            RDK_type: 3,
            aperture_type: 1,
            aperture_width: 300,
            dot_life: -1,
            move_distance: 1,
            trial_duration: 500,
            background_color: "black",
            dot_color: "white",
            dot_radius: 2,
            number_of_dots: 30,
            coherence: 0.35,
            border: true,
            border_color: "white",
            choices: [32],
            correct_choice: [32],
            coherent_direction: jsPsych.timelineVariable('coherenceStop')
        }
    ],
    timeline_variables: [
        { coherenceStart: 0, coherenceStop: 90 },
        { coherenceStart: 15, coherenceStop: 105 },
        { coherenceStart: 30, coherenceStop: 120 },
        { coherenceStart: 45, coherenceStop: 135 },
        { coherenceStart: 60, coherenceStop: 150 },
        { coherenceStart: 75, coherenceStop: 165 },
        { coherenceStart: 90, coherenceStop: 180 },
        { coherenceStart: 105, coherenceStop: 195 },
        { coherenceStart: 120, coherenceStop: 210 },
        { coherenceStart: 135, coherenceStop: 225 },
        { coherenceStart: 150, coherenceStop: 240 },
        { coherenceStart: 165, coherenceStop: 255 },
        { coherenceStart: 180, coherenceStop: 270 },
        { coherenceStart: 195, coherenceStop: 285 },
        { coherenceStart: 210, coherenceStop: 300 },
        { coherenceStart: 225, coherenceStop: 315 },
        { coherenceStart: 240, coherenceStop: 330 },
        { coherenceStart: 255, coherenceStop: 345 },
        { coherenceStart: 270, coherenceStop: 0 },
        { coherenceStart: 285, coherenceStop: 15 },
        { coherenceStart: 300, coherenceStop: 30 },
        { coherenceStart: 315, coherenceStop: 45 },
        { coherenceStart: 330, coherenceStop: 60 },
        { coherenceStart: 345, coherenceStop: 75 },
        { coherenceStart: 0, coherenceStop: 270 },
        { coherenceStart: 15, coherenceStop: 285 },
        { coherenceStart: 30, coherenceStop: 300 },
        { coherenceStart: 45, coherenceStop: 315 },
        { coherenceStart: 60, coherenceStop: 330 },
        { coherenceStart: 75, coherenceStop: 345 },
        { coherenceStart: 90, coherenceStop: 0 },
        { coherenceStart: 105, coherenceStop: 15 },
        { coherenceStart: 120, coherenceStop: 30 },
        { coherenceStart: 135, coherenceStop: 45 },
        { coherenceStart: 150, coherenceStop: 60 },
        { coherenceStart: 165, coherenceStop: 75 },
        { coherenceStart: 180, coherenceStop: 90 },
        { coherenceStart: 195, coherenceStop: 105 },
        { coherenceStart: 210, coherenceStop: 120 },
        { coherenceStart: 225, coherenceStop: 135 },
        { coherenceStart: 240, coherenceStop: 150 },
        { coherenceStart: 255, coherenceStop: 165 },
        { coherenceStart: 270, coherenceStop: 180 },
        { coherenceStart: 285, coherenceStop: 195 },
        { coherenceStart: 300, coherenceStop: 210 },
        { coherenceStart: 315, coherenceStop: 225 },
        { coherenceStart: 330, coherenceStop: 240 },
        { coherenceStart: 345, coherenceStop: 255 }

    ]
}

let test = {
  type: "html-keyboard-response",
  stimulus: jsPsych.timelineVariable('stimulus'),
  choices: [32]
};


let instructions1 = {
  type: 'audio-keyboard-response',
  stimulus: 'stim/audio_instructions/DRM_instructions_1.mp3',
  choices: "NO_KEYS",
  trial_ends_after_audio: true
};


$.getScript("exp/main.js");
