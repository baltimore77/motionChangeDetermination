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
      if (isset($_GET["src_subject_id"])) {
        include_once "include/nda.php";
        // echo'<br>';
        // echo'connected';
      } else if (isset($_GET["workerId"])) {
        include_once "include/consent.php";
        // echo'<br>';
        // echo'not connected';
      } else {
        include_once "include/intake.php";
      }
    ?>
  </body>
  <footer>
    <script type="text/javascript" src="exp/fn.js"></script>
    <script type="text/javascript" src="exp/conf.js"></script>
    <script type="text/javascript" src="exp/var.js"></script>
    <script type="text/javascript">
      // declare NDA required variables
      let GUID;
      let subjectID;
      let sexAtBirth;
      let siteNumber;
      let ageAtAssessment;
      let groupStatus;
      let visit;
      let feedbackLink;

      
        GUID = "<?php echo $subjectKey?>";
        subjectID = "<?php echo $consortId?>";
        sexAtBirth = "<?php echo $sexAtBirth?>";
        siteNumber = "<?php echo $institutionAlias?>";
        ageAtAssessment = "<?php echo $ageInMonths?>";
        groupStatus = "<?php echo $groupStatus?>";
        visit = "<?php echo $visit?>";
        feedbackLink = "https://belieflab.yale.edu/omnibus/eCRFs/feedback/tasks/kamin.php?candidateId=<?php echo $candidateId?>&studyId=<?php echo $studyId?>";
    </script>
  </footer>
</html>
