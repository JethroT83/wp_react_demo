<?php

require_once(__DIR__."/../../../wp-load.php");


if($GET['id'] && is_numeric($GET['id'])){
	$id = addslashes($GET['id']);
	echo wp_delete_post($id, true);
}
