<?php
// check for configuration file on server; if does not exist, set db_connection_status to false.
if (file_exists($_SERVER["DOCUMENT_ROOT"] . '/config.php')) {
  include_once ($_SERVER["DOCUMENT_ROOT"] . '/config.php');
  // echo$_SERVER["DOCUMENT_ROOT"] . '/config.php';
  $studyId = $_GET["studyId"];
  $candidateId = $_GET["candidateId"];
  $guid = $_GET["guid"];
  $groupStatus = $_GET["groupStatus"];
  $subjectKey = $_GET["subjectkey"];
  $consortId = $_GET["src_subject_id"];
  $sexAtBirth = $_GET["sex"];
  $institutionAlias = $_GET["site"];
  $ageInMonths = $_GET["interview_age"];
  } else {
    $db_connection_status = null;
    // echo$db_connection_status;
    echo '<script type="text/javascript">let db_connection = false</script>';
    $subjectKey = '';
    $consortId = '';
    $sexAtBirth = '';
    $institutionAlias = '';
    $ageInMonths = '';
    $guid = '';
    $candidateId = '';
    $studyId = '';
    $groupStatus = '';
  }
