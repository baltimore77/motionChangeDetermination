// leave this here!
let timeline = [];

let test = {
  type: "html-keyboard-response",
  stimulus: jsPsych.timelineVariable('stimulus'),
  choices: [32]
};

let instructions0 = {
  type: "html-keyboard-response",
  choices: [32],
  on_finish: function() {
    testTrial.pop(); // pops the 9th item
  },
  stimulus:
    "<p>Hello and thank you for taking part in our experiment!</p>"+
    "<p>In this experiment you will see dots flowing across the screen.</p>"+
    "<p>Using your mouse indicate the direction towards which you think the dots are flowing.</p>"+
    "<p> <i> Press spacebar to continue</i> </p>"
};

let ITI = 500; //Inter Trial Interval
let bkgCol = "white"; //background color
let dotCol = "black"; //dots color
let rdkType = 3; //1-6 define different types of built-in rdks available in the plugin
let apertureType = 1; //whether aperture is circle or ellipse, etc.
let aperatureDuration = 6000; //total length of rdk display, sum of first half (baseline motion) and second half (change or nochange from baseline)
let aperatureRadiusPixels = 300; //radius of dots array in pixels
let dotRadiusPixels = 2; //radius of each dot in pixels
let dotLifespanFrameRefreshes = -1; //-1 is for the duration of the aperture
let dotSpeedPixelsPerFrame = 1; //how many pixels does the dot move from one frame to the next
let dotsQuantity = 30; //number of dots visible on any given frame
//let coherenceVector = [0,15,30,45,60,75,90,105,120,135,150,165,180,195,210,225,240,255,270,285,300,315,330,345]; //orientations at which coherent dots flow
//let coherenceChange = [-90,90]; //degrees difference between first orientation flow, and final orientation flow, could be applied clockwise or counterclockwise by adding or subtracting from original coherenceVector
let coherencePercent = 0.35; //what percent of dots flow in same direction (whereas others flow randomly)

function filledCirc(canvas, radius, color) {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(150, 150, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

var rdk_change = {
    timeline: [
        {
            type: "html-keyboard-response",
            stimulus: '',
            choices: "NO_KEYS",
            trial_duration: ITI
        },
        {
            type: "rdk-change",
            RDK_type: rdkType,
            aperture_type: apertureType,
            aperture_width: aperatureRadiusPixels,
            dot_life: dotLifespanFrameRefreshes,
            move_distance: dotSpeedPixelsPerFrame,
            trial_duration: aperatureDuration,
            background_color: bkgCol,
            dot_color: dotCol,
            dot_radius: dotRadiusPixels,
            number_of_dots: dotsQuantity,
            coherence: coherencePercent,
            border: true,
            border_color: dotCol,
            choices: [32],
            correct_choice: [32],
            coherent_direction: jsPsych.timelineVariable('coherenceStart'),
            coherent_direction_after_change: jsPsych.timelineVariable('coherenceStop')
        },
        {
            type: 'canvas-button-response',
            stimulus: function(c) {
                filledCirc(c, aperatureRadiusPixels, bkgCol);
              },
            canvas_size: [aperatureRadiusPixels, aperatureRadiusPixels],
            choices: ['Red', 'Green', 'Blue'],
            prompt: '<p>What color is the circle?</p>',
            data: {trialType: 'change', angle: jsPsych.timelineVariable('coherenceStop')}
          }
    ],
    timeline_variables: [
      { coherenceStart: 5, coherenceStop: 95, color: dotCol}, //change clockwise
      // { coherenceStart: 20, coherenceStop: 110 },
      // { coherenceStart: 35, coherenceStop: 125 },
      // { coherenceStart: 50, coherenceStop: 140 },
      // { coherenceStart: 65, coherenceStop: 155 },
      // { coherenceStart: 80, coherenceStop: 170 },
      // { coherenceStart: 95, coherenceStop: 185 },
      // { coherenceStart: 110, coherenceStop: 200 },
      // { coherenceStart: 125, coherenceStop: 215 },
      // { coherenceStart: 140, coherenceStop: 230 },
      // { coherenceStart: 155, coherenceStop: 245 },
      // { coherenceStart: 170, coherenceStop: 260 },
      // { coherenceStart: 185, coherenceStop: 275 },
      // { coherenceStart: 200, coherenceStop: 290 },
      // { coherenceStart: 215, coherenceStop: 305 },
      // { coherenceStart: 230, coherenceStop: 320 },
      // { coherenceStart: 245, coherenceStop: 335 },
      // { coherenceStart: 260, coherenceStop: 350 },
      // { coherenceStart: 275, coherenceStop: 5 },
      // { coherenceStart: 290, coherenceStop: 20 },
      // { coherenceStart: 305, coherenceStop: 35 },
      // { coherenceStart: 320, coherenceStop: 50 },
      // { coherenceStart: 335, coherenceStop: 65 },
      // { coherenceStart: 350, coherenceStop: 80 },
      // { coherenceStart: 5, coherenceStop: 275 }, //change anti-clockwise
      // { coherenceStart: 20, coherenceStop: 290 },
      // { coherenceStart: 35, coherenceStop: 305 },
      // { coherenceStart: 50, coherenceStop: 320 },
      // { coherenceStart: 65, coherenceStop: 335 },
      // { coherenceStart: 80, coherenceStop: 350 },
      // { coherenceStart: 95, coherenceStop: 5 },
      // { coherenceStart: 110, coherenceStop: 20 },
      // { coherenceStart: 125, coherenceStop: 35 },
      // { coherenceStart: 140, coherenceStop: 50 },
      // { coherenceStart: 155, coherenceStop: 65 },
      // { coherenceStart: 170, coherenceStop: 80 },
      // { coherenceStart: 185, coherenceStop: 95 },
      // { coherenceStart: 200, coherenceStop: 110 },
      // { coherenceStart: 215, coherenceStop: 125 },
      // { coherenceStart: 230, coherenceStop: 140 },
      // { coherenceStart: 245, coherenceStop: 155 },
      // { coherenceStart: 260, coherenceStop: 170 },
      // { coherenceStart: 275, coherenceStop: 185 },
      // { coherenceStart: 290, coherenceStop: 200 },
      // { coherenceStart: 305, coherenceStop: 215 },
      // { coherenceStart: 320, coherenceStop: 230 },
      // { coherenceStart: 335, coherenceStop: 245 },
      // { coherenceStart: 350, coherenceStop: 260 }
    ]
}

var rdk_nochange = {
    timeline: [
        {
            type: "html-keyboard-response",
            stimulus: '',
            choices: "NO_KEYS",
            trial_duration: ITI
        },
        {
            type: "rdk",
            RDK_type: rdkType,
            aperture_type: apertureType,
            aperture_width: aperatureRadiusPixels,
            dot_life: dotLifespanFrameRefreshes,
            move_distance: dotSpeedPixelsPerFrame,
            trial_duration: aperatureDuration,
            background_color: bkgCol,
            dot_color: dotCol,
            dot_radius: dotRadiusPixels,
            number_of_dots: dotsQuantity,
            coherence: coherencePercent,
            border: true,
            border_color: dotCol,
            choices: [32],
            correct_choice: [32],
            coherent_direction: jsPsych.timelineVariable('coherenceStart')
        }
    ],
    timeline_variables: [
      { coherenceStart: 5, coherenceStop: 5 },
      // { coherenceStart: 20, coherenceStop: 20 },
      // { coherenceStart: 35, coherenceStop: 35 },
      // { coherenceStart: 50, coherenceStop: 50 },
      // { coherenceStart: 65, coherenceStop: 65 },
      // { coherenceStart: 80, coherenceStop: 80 },
      // { coherenceStart: 95, coherenceStop: 95 },
      // { coherenceStart: 110, coherenceStop: 110 },
      // { coherenceStart: 125, coherenceStop: 125 },
      // { coherenceStart: 140, coherenceStop: 140 },
      // { coherenceStart: 155, coherenceStop: 155 },
      // { coherenceStart: 170, coherenceStop: 170 },
      // { coherenceStart: 185, coherenceStop: 185 },
      // { coherenceStart: 200, coherenceStop: 200 },
      // { coherenceStart: 215, coherenceStop: 215 },
      // { coherenceStart: 230, coherenceStop: 230 },
      // { coherenceStart: 245, coherenceStop: 245 },
      // { coherenceStart: 260, coherenceStop: 260 },
      // { coherenceStart: 275, coherenceStop: 275 },
      // { coherenceStart: 290, coherenceStop: 290 },
      // { coherenceStart: 305, coherenceStop: 305 },
      // { coherenceStart: 320, coherenceStop: 320 },
      // { coherenceStart: 335, coherenceStop: 335 },
      // { coherenceStart: 350, coherenceStop: 350 }
    ]
}


$.getScript("exp/main.js");
