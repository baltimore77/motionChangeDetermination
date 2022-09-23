// leave this here!
let timeline = [];

// let test = {
//   type: "html-keyboard-response",
//   stimulus: jsPsych.timelineVariable('stimulus'),
//   choices: [32]
// };

let instructions0 = {
  type: "html-keyboard-response",
  choices: [32],
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
let aperatureDuration = 1000; //total length of rdk display, sum of first half (baseline motion) and second half (change or nochange from baseline)
let aperatureRadiusPixels = 300; //radius of dots array in pixels
let dotRadiusPixels = 2; //radius of each dot in pixels
let dotLifespanFrameRefreshes = -1; //-1 is for the duration of the aperture
let dotSpeedPixelsPerFrame = 5; //how many pixels does the dot move from one frame to the next
let dotsQuantity = 30; //number of dots visible on any given frame
let coherencePercent = 0.35; //what percent of dots flow in same direction (whereas others flow randomly)
let orientationsArray = [5,20,35,50,65,80,95,110,125,140,155,170,185,200,215,230,245,260,275,290,305,320,335,350];

var rdkChange_practiceBlock = {
    timeline: [
        {
            type: "html-keyboard-response",
            stimulus: '',
            choices: "NO_KEYS",
            correct_choice: "NONE",
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
            choices: "NO_KEYS",
//            correct_choice: "NO_KEYS",
            correct_choice: "NONE",
            coherent_direction: jsPsych.timelineVariable('coherenceStart'),
            coherent_direction_after_change: jsPsych.timelineVariable('coherenceStop'),
            trialType: jsPsych.timelineVariable('trialType'),
            trialSubtype: jsPsych.timelineVariable('trialSubtype')
          },
          {
            type: "angle-response",
            target_angle: jsPsych.timelineVariable('coherenceStop'),
          },
          // {
          //   type: "html-keyboard-response",
          //   stimulus:
          //     function(){
          //       var html=
          //         "<svg viewBox="+-aperatureRadiusPixels/2+" "+-aperatureRadiusPixels/2+" "+aperatureRadiusPixels/2+" "+aperatureRadiusPixels/2+" stroke='purple' stroke-width='5' >"+
          //           "<circle r="+aperatureRadiusPixels/2+" stroke='purple' stroke-width='5' fill='pink' />"+
          //           "<line x1="+screen.width/2+" y1="+screen.height/2+" x2="+(screen.width/2-aperatureRadiusPixels)+" y2="+(screen.width/2-aperatureRadiusPixels)+" style='stroke:rgb(8, 112, 177);stroke-width:3' />"+
          //         "</svg>"
          //       return html;
          //     },
          //   choices: "NO_KEYS",
          //   trial_duration: 200,
          //   response_ends_trial: true,
          //   //data: jsPsych.timelineVariable('data'),
          //   post_trial_gap: 200,
          // },
    ],
    timeline_variables: [
      { coherenceStart: 5, coherenceStop: 95, color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray }, //change clockwise
      { coherenceStart: 20, coherenceStop: 110 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 35, coherenceStop: 125 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 50, coherenceStop: 140 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 65, coherenceStop: 155 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 80, coherenceStop: 170 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 95, coherenceStop: 185 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 110, coherenceStop: 200 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 125, coherenceStop: 215 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 140, coherenceStop: 230 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 155, coherenceStop: 245 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 170, coherenceStop: 260 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 185, coherenceStop: 275 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 200, coherenceStop: 290 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 215, coherenceStop: 305 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      { coherenceStart: 230, coherenceStop: 320 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 245, coherenceStop: 335 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 260, coherenceStop: 350 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 275, coherenceStop: 5 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 290, coherenceStop: 20 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 305, coherenceStop: 35 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 320, coherenceStop: 50 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 335, coherenceStop: 65 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 350, coherenceStop: 80 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      { coherenceStart: 5, coherenceStop: 275, color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray }, //change counter-clockwise
      { coherenceStart: 20, coherenceStop: 290 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 35, coherenceStop: 305 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 50, coherenceStop: 320 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 65, coherenceStop: 335 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 80, coherenceStop: 350 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 95, coherenceStop: 5 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 110, coherenceStop: 20 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 125, coherenceStop: 35 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      { coherenceStart: 140, coherenceStop: 50 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 155, coherenceStop: 65 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 170, coherenceStop: 80 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 185, coherenceStop: 95 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 200, coherenceStop: 110 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 215, coherenceStop: 125 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 230, coherenceStop: 140 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 245, coherenceStop: 155 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 260, coherenceStop: 170 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 275, coherenceStop: 185 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 290, coherenceStop: 200 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 305, coherenceStop: 215 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 320, coherenceStop: 230 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 335, coherenceStop: 245 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 350, coherenceStop: 260, color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      // { coherenceStart: 5, coherenceStop: 5, color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray }, //no-change
      // { coherenceStart: 20, coherenceStop: 20 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      // { coherenceStart: 35, coherenceStop: 35 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      // { coherenceStart: 50, coherenceStop: 50 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      // { coherenceStart: 65, coherenceStop: 65 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      // { coherenceStart: 80, coherenceStop: 80 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      // { coherenceStart: 95, coherenceStop: 95 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      // { coherenceStart: 110, coherenceStop: 110 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      // { coherenceStart: 125, coherenceStop: 125 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      // { coherenceStart: 140, coherenceStop: 140 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      { coherenceStart: 155, coherenceStop: 155 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      // { coherenceStart: 170, coherenceStop: 170 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      // { coherenceStart: 185, coherenceStop: 185 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      // { coherenceStart: 200, coherenceStop: 200 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      // { coherenceStart: 215, coherenceStop: 215 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      // { coherenceStart: 230, coherenceStop: 230 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      // { coherenceStart: 245, coherenceStop: 245 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      { coherenceStart: 260, coherenceStop: 260 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      // { coherenceStart: 275, coherenceStop: 275 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      // { coherenceStart: 290, coherenceStop: 290 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      // { coherenceStart: 305, coherenceStop: 305 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      // { coherenceStart: 320, coherenceStop: 320 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      { coherenceStart: 335, coherenceStop: 335 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      { coherenceStart: 350, coherenceStop: 350, color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray }
    ],
    randomize_order: true
}

var rdkChange_trialBlock = {
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
            coherent_direction_after_change: jsPsych.timelineVariable('coherenceStop'),
            trialType: jsPsych.timelineVariable('trialType'),
            trialSubtype: jsPsych.timelineVariable('trialSubtype')
          }
    ],
    timeline_variables: [
      { coherenceStart: 5, coherenceStop: 95, color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray }, //change clockwise
      { coherenceStart: 20, coherenceStop: 110 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      { coherenceStart: 35, coherenceStop: 125 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      { coherenceStart: 50, coherenceStop: 140 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      { coherenceStart: 65, coherenceStop: 155 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      { coherenceStart: 80, coherenceStop: 170 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      { coherenceStart: 95, coherenceStop: 185 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      { coherenceStart: 110, coherenceStop: 200 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      { coherenceStart: 125, coherenceStop: 215 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      { coherenceStart: 140, coherenceStop: 230 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      { coherenceStart: 155, coherenceStop: 245 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      { coherenceStart: 170, coherenceStop: 260 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      { coherenceStart: 185, coherenceStop: 275 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      { coherenceStart: 200, coherenceStop: 290 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      { coherenceStart: 215, coherenceStop: 305 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      { coherenceStart: 230, coherenceStop: 320 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      { coherenceStart: 245, coherenceStop: 335 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      { coherenceStart: 260, coherenceStop: 350 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      { coherenceStart: 275, coherenceStop: 5 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      { coherenceStart: 290, coherenceStop: 20 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      { coherenceStart: 305, coherenceStop: 35 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      { coherenceStart: 320, coherenceStop: 50 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      { coherenceStart: 335, coherenceStop: 65 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      { coherenceStart: 350, coherenceStop: 80 , color: dotCol, trialType: 'change', trialSubtype: 'clockwise' , clickBins: orientationsArray },
      { coherenceStart: 5, coherenceStop: 275, color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray }, //change counter-clockwise
      { coherenceStart: 20, coherenceStop: 290 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      { coherenceStart: 35, coherenceStop: 305 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      { coherenceStart: 50, coherenceStop: 320 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      { coherenceStart: 65, coherenceStop: 335 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      { coherenceStart: 80, coherenceStop: 350 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      { coherenceStart: 95, coherenceStop: 5 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      { coherenceStart: 110, coherenceStop: 20 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      { coherenceStart: 125, coherenceStop: 35 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      { coherenceStart: 140, coherenceStop: 50 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      { coherenceStart: 155, coherenceStop: 65 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      { coherenceStart: 170, coherenceStop: 80 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      { coherenceStart: 185, coherenceStop: 95 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      { coherenceStart: 200, coherenceStop: 110 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      { coherenceStart: 215, coherenceStop: 125 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      { coherenceStart: 230, coherenceStop: 140 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      { coherenceStart: 245, coherenceStop: 155 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      { coherenceStart: 260, coherenceStop: 170 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      { coherenceStart: 275, coherenceStop: 185 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      { coherenceStart: 290, coherenceStop: 200 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      { coherenceStart: 305, coherenceStop: 215 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      { coherenceStart: 320, coherenceStop: 230 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      { coherenceStart: 335, coherenceStop: 245 , color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      { coherenceStart: 350, coherenceStop: 260, color: dotCol, trialType: 'change', trialSubtype: 'counter-clockwise' , clickBins: orientationsArray },
      { coherenceStart: 5, coherenceStop: 5, color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray }, //no-change
      { coherenceStart: 20, coherenceStop: 20 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      { coherenceStart: 35, coherenceStop: 35 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      { coherenceStart: 50, coherenceStop: 50 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      { coherenceStart: 65, coherenceStop: 65 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      { coherenceStart: 80, coherenceStop: 80 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      { coherenceStart: 95, coherenceStop: 95 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      { coherenceStart: 110, coherenceStop: 110 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      { coherenceStart: 125, coherenceStop: 125 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      { coherenceStart: 140, coherenceStop: 140 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      { coherenceStart: 155, coherenceStop: 155 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      { coherenceStart: 170, coherenceStop: 170 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      { coherenceStart: 185, coherenceStop: 185 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      { coherenceStart: 200, coherenceStop: 200 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      { coherenceStart: 215, coherenceStop: 215 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      { coherenceStart: 230, coherenceStop: 230 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      { coherenceStart: 245, coherenceStop: 245 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      { coherenceStart: 260, coherenceStop: 260 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      { coherenceStart: 275, coherenceStop: 275 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      { coherenceStart: 290, coherenceStop: 290 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      { coherenceStart: 305, coherenceStop: 305 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      { coherenceStart: 320, coherenceStop: 320 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      { coherenceStart: 335, coherenceStop: 335 , color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray },
      { coherenceStart: 350, coherenceStop: 350, color: dotCol, trialType: 'no-change', trialSubtype: 'NA' , clickBins: orientationsArray }
    ],
    randomize_order: true
}

let save_data = {
  type: "html-keyboard-response",
  stimulus: "<p>Data saving...</p>"+
  '<div class="sk-cube-grid">'+
'<div class="sk-cube sk-cube1"></div>'+
'<div class="sk-cube sk-cube2"></div>'+
'<div class="sk-cube sk-cube3"></div>'+
'<div class="sk-cube sk-cube4"></div>'+
'<div class="sk-cube sk-cube5"></div>'+
'<div class="sk-cube sk-cube6"></div>'+
'<div class="sk-cube sk-cube7"></div>'+
'<div class="sk-cube sk-cube8"></div>'+
'<div class="sk-cube sk-cube9"></div>'+
'</div>'+
  "<p>Do not close this window until the text dissapears.</p>",

  choices: jsPsych.NO_KEYS,
  trial_duration: 5000,
  on_finish: function(){
    saveData("motionChangeDetermination" + workerId, jsPsych.data.get().csv());
    document.getElementById("unload").onbeforeunload='';
    $(document).ready(function(){
    $("body").addClass("showCursor"); // returns cursor functionality
});
  }
};

let end = {
  type: "html-keyboard-response",
  stimulus:   "<p>Thank you!</p>"+
  "<p>You have successfully completed the experiment and your data has been saved.</p>"+
  "<p>To leave feedback on this task, please click the following link:</p>"+
  "<p style='color:white;'><a href="+feedbackLink+">Leave Task Feedback!</a></p>"+
  // "<p>Please wait for the experimenter to continue.</p>"+
  "<p><i>You may now close the expriment window at anytime.</i></p>",
  choices: jsPsych.NO_KEYS,
};

$.getScript("exp/main.js");
