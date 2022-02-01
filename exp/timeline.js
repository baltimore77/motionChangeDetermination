let timeline = [];

let instructions0 = {
  type: "html-keyboard-response",
  stimulus: "<p> Hello and thank you for taking part in our experiment!</p>"+
  "<p>It should take about 30 minutes.</p>"+
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