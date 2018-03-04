{php}
$currentFile = $_SERVER["PHP_SELF"];
    $parts = Explode('/', $currentFile);
    $page = $parts[count($parts) - 1];

	if ($page =="cart.php") {
          $gid = $_GET['gid'];
          if ($gid == 'renewals') {
              echo '<script type="text/javascript" src="templates/six/js/renewdomains.js"></script>';
          }
    }

    if ($page =="clientarea.php") {
          $gid = $_GET['action'];
          if ($gid == 'domains') {
              echo '<script type="text/javascript" src="templates/six/js/renewdomains.js"></script>';
          }
    }

{/php}
