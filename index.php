<?php
  require_once 'db/data.php';
  require_once 'db/config.php';
?>

<!DOCTYPE html>
<html>
  <head>
    <title>Motion Change Determination</title>
    <script type="text/javascript" src="db/validate.js"></script>
    <script type="text/javascript" src="js/jquery-3.5.1.min.js"></script>
    <script type="text/javascript" src="jsPsych/jspsych.js"></script>
   <!-- loads in jspsych plugins -->
    <script src="jspsych-rdk-change.js"></script>
    <script src="jspsych-angle-response.js"></script>
    <script type="text/javascript" src="jsPsych/plugins/jspsych-instructions.js"></script>
    <script type="text/javascript" src="jsPsych/plugins/jspsych-fullscreen.js"></script>
    <script type="text/javascript" src="jsPsych/plugins/jspsych-rdk.js"></script>
    <script type="text/javascript" src="jsPsych/plugins/jspsych-html-keyboard-response.js"></script>
    <script type="text/javascript" src="jsPsych/plugins/jspsych-html-button-response.js"></script>
    <script type="text/javascript" src="jsPsych/plugins/jspsych-call-function.js"></script>
    <script type="text/javascript" src="jsPsych/plugins/jspsych-image-keyboard-response.js"></script>
    <script type="text/javascript" src="jsPsych/plugins/jspsych-audio-keyboard-response.js"></script>

    <link href="jsPsych/css/jspsych.css" rel="stylesheet" type="text/css"></link>
    <link rel="stylesheet" type="text/css" href="css/style.css">
  </head>
  <body id='unload' onbeforeunload="return areYouSure()">
    <?php
      if ($db_connection_status == true) {
        include_once "include/nda.php";
        // echo'<br>';
        // echo'connected';
      } else if ($db_connection_status == false) {
       // include_once "include/intake.php";
        include_once "include/nda.php";
        // echo'<br>';
        // echo'not connected';
      };
    ?>
  </body>
  <footer>
    <script type="text/javascript" src="exp/fn.js"></script>
    <script type="text/javascript" src="exp/conf.js"></script>
    <script type="text/javascript" src="exp/var.js"></script>
    <script type="text/javascript">
      // declare NDA required variables
      let guid;
      let subjectID;
      let sexAtBirth;
      let siteNumber;
      let ageAtAssessment;
      let groupStatus;
      let feedbackLink;

      if (db_connection === false) {
        guid = "";
        subjectID = "";
        sexAtBirth = "";
        siteNumber = "";
        ageAtAssessment = "";
        groupStatus = "";
        feedbackLink = "";
      } else if (db_connection === true) {
        guid = "<?php echo $subjectKey?>";
        subjectID = "<?php echo $consortId?>";
        sexAtBirth = "<?php echo $sexAtBirth?>";
        siteNumber = "<?php echo $institutionAlias?>";
        ageAtAssessment = "<?php echo $ageInMonths?>";
        groupStatus = "<?php echo $groupStatus?>";
        feedbackLink = "https://belieflab.yale.edu/omnibus/eCRFs/feedback/tasks/motion.php?candidateId=<?php echo $candidateId?>&studyId=<?php echo $studyId?>";
      }
    </script>
  </footer>
</html>
