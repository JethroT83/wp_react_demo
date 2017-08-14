<?php

require_once(__DIR__."/../../../wp-load.php");



if($_GET['id'] && is_numeric($_GET['id'])){

	$id = addslashes($_GET['id']);

	# update title
	if(isset($_GET['post_title'])){

		// prevent sql inejection
		$post_title = addslashes($_GET['post_title']);
		$statement = "UPDATE wp_posts SET post_title = '{$post_title}' WHERE ID = {$id}";

		echo json_encode($wpdb->get_results( $statement, OBJECT ));

	}


	# update content
	if(isset($_GET['post_content'])){

		// prevent sql inejection
		$post_content = addslashes($_GET['post_content']);
		$statement = "UPDATE wp_posts SET post_content = '{$post_content}' WHERE ID = {$id}";

		echo json_encode($wpdb->get_results( $statement, OBJECT ));
	}

}

