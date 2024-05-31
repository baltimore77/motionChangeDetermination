<?php
// check for configuration file on server; if does not exist, set db_connection_status to false.
// if (file_exists($_SERVER["DOCUMENT_ROOT"] . '/config.php')) {
//   include_once ($_SERVER["DOCUMENT_ROOT"] . '/config.php');
//   // echo$_SERVER["DOCUMENT_ROOT"] . '/config.php';
if ($_GET["src_subject_id"]) {
  // if this line of code is commented out, the stimulus styling gets shifted down which makes the task un-playable
  echo '<script type="text/javascript">let db_connection = false</script>';
  $studyId = $_GET["studyId"];
  $candidateId = $_GET["candidateId"];
  $guid = $_GET["subjectkey"];
  $groupStatus = $_GET["phenotype"];
  $subjectKey = $_GET["subjectkey"];
  $consortId = $_GET["src_subject_id"];
  $sexAtBirth = $_GET["sex"];
  $institutionAlias = $_GET["site"];
  $ageInMonths = $_GET["interview_age"];
  } 
    // $db_connection_status = null;
    // echo$db_connection_status;
    // echo '<script type="text/javascript">let db_connection = false</script>';
    // $subjectKey = '';
    // $consortId = '';
    // $sexAtBirth = '';
    // $institutionAlias = '';
    // $ageInMonths = '';
    // $guid = '';
    // $candidateId = '';
    // $studyId = '';
    // $groupStatus = '';
  // }
