<?php
// http://example.com?method=insert&table=user&username=joris

if ($_GET['method'] == 'insert') {
	$database->open();
	$id = $database->insert($_GET['table'], array(
		'username' => $_GET['username']
	));
	$database->close();
	echo $id;
} else echo '-1';
