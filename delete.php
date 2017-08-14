<?php

require_once(__DIR__."/../../../wp-load.php");

//var_dump($_GET);

if(isset($_GET['id']) && is_numeric($_GET['id'])){

	$id = addslashes($_GET['id']);
	$statement = "DELETE FROM wp_posts WHERE ID = {$id}";
	echo json_encode($wpdb->get_results( $statement, OBJECT ));

}
