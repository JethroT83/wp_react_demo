<?php

require_once(__DIR__."/../../../wp-load.php");



if($_GET['id'] && is_numeric($_GET['id'])){

	$id = add_slashes($_GET['id']);

	# update title
	if(isset($_GET['post_title'])){

		// prevent sql inejection
		$post_title = add_slashes($_GET['post_title']);
		$statement = "UPDATE wp_post SET post_title = '{$post_title}' WHERE ID = {$id}";

		$results = json_encode($wpdb->get_results( $statement, OBJECT ));
		echo str_replace('<div id="root"></div>','',$results);

	}


	# update content
	if(isset($_GET['post_content'])){

		// prevent sql inejection
		$post_content = add_slashes($_GET['post_content']);
		$statement = "UPDATE wp_post SET post_content = '{$post_content}' WHERE ID = {$id}";

		$results = json_encode($wpdb->get_results( $statement, OBJECT ));
		echo str_replace('<div id="root"></div>','',$results);

	}

}
