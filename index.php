<?php

/*
Plugin Name: wp_react_demo
Plugin URI:
Description:
Author: Jed Lynch
Author URI:
Verision: 0.1
*/


#HELPER
function getBuildFile($files = array(),$q = 'js'){
	foreach($files as $i => $file){
		$l = strlen($q) * -1;
		if(substr($file,$l) == $q){
			return $file;
		}
	}
}


# CSS
$build_dir = __DIR__."/build/static/css";
$files = scandir($build_dir);
$build_file = "/build/static/css/" .getBuildFile($files, 'css');

#echo $build_file;

// add the CSS file to the header
wp_enqueue_style( 'prefix-style', plugins_url($build_file, __FILE__) );




# JAVASCRIPT
$build_dir = __DIR__."/build/static/js";
$files = scandir($build_dir);
$build_file = "/build/static/js/" .getBuildFile($files);

// add the JS file to the footer - true as the last parameter
wp_enqueue_script( 'plugin-scripts', plugins_url($build_file,__FILE__),array(),'1.0',true);


echo '<div id="root"></div>';
