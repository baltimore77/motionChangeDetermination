/* start the experiment */
 function startExperiment(){
  jsPsych.init({
    timeline: timeline,
    // default_iti: delayList[0],
     show_progress_bar: true,
  //  preload_images: [stimArrayForPrelikingPhase, stimArrayForAssociativeInverted, stimArrayForAssociativeTextile, longDelayForAssociative1500msPath, shortDelayForAssociative500msPath],
   });
}


/* write to data/.csv */
function saveData(name, data){
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'index.php'); // 'index.php' contains the php script described above
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({filename: name, filedata: data}));
  }

  //onbeforeunload in body
  function areYouSure() {
    return "Write something clever here...";
  }
  areYouSure();


// Checks if string is empty, null, or undefined
function isEmpty(str) {
  return (!str || !str.length);
  }

    // BELOW COURTESY OF GARY LUPYAN -- COPIED FROM
  //  http://sapir.psych.wisc.edu/wiki/index.php/MTurk
  function getParamFromURL( name ) {
    name = name.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");
    var regexS = "[\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( window.location.href );
    if( results == null )
    return "";
    else
    return results[1];
  }

// // Initial countdown
// function initialCountdown(){ // initialize timer
//   var sec = 10; // set timer in seconds
//   var timer = setInterval(function(){
//   document.getElementById('initialCountdown').innerHTML= 'The practice is about to start !' + '<br>'+sec;
//   sec--;
//   if (sec==-1){
//     jsPsych.finishTrial();
//     }
//   }, 1000);
// }

// // Countdown
// function countdown(){ // initialize timer
//   var sec = 10; // set timer in seconds
//   var percentage = ['10%','10%','20%','20%','30%','30%','40%','40%','half','half','60%','60%','70%','70%','80%','80%','90%','90%' ];
//   var timer = setInterval(function(){
//   document.getElementById('countdown').innerHTML= 'You completed '+percentage[0]+' of the experiment!' + '<br>'+sec;
//   sec--;
//   if (sec==-1){
//     jsPsych.finishTrial();
//     }
//   }, 1000);
//   percentage.shift();
// }