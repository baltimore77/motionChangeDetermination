/* start the experiment */
function startExperiment() {
    jsPsych.init({
        timeline: timeline,
        show_progress_bar: true,
        auto_update_progress_bar: false,
        message_progress_bar: '',
        on_interaction_data_update: function (data) {
          console.log(JSON.stringify(data));
          if (forceFullScreen) {
            if (JSON.stringify(data).includes('fullscreenexit')) {
              // if (confirm("Oops, you may have switched tabs, clicked outside of the browser, or exited full screen mode. When you are ready, click Okay to resume the task in full screen mode.")) {
                openFullscreen();
              // }
            }
          }
        },
    });
}

/* write to data/.csv */
function saveData(name, data) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "index.php"); // 'index.php' contains the php script described above
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({ filename: name, filedata: data }));
}

//onbeforeunload in body
function areYouSure() {
    return "Write something clever here...";
}
areYouSure();

// Popup to alert participant not to close window
function isEmpty(str) {
    return !str || !str.length;
}

// BELOW COURTESY OF GARY LUPYAN -- COPIED FROM
//  http://sapir.psych.wisc.edu/wiki/index.php/MTurk
function getParamFromURL(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regexS = "[?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null) return "";
    else return results[1];
}
