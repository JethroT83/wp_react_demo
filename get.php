<?php

require_once(__DIR__."/../../../wp-load.php");

$statement = "SELECT `ID`, `post_author`, `post_date`, `post_content`, `post_title` ,
				case 
					WHEN `post_mime_type` = 'image/jpeg' THEN `guid` 
					ELSE NULL
					END as `media_url`
				FROM `wp_posts` wp
		        LEFT JOIN wp_postmeta wpm ON wp.ID = wpm.post_id
		        WHERE `post_mime_type` = 'image/jpeg'
		    	GROUP BY ID
				Order by `post_date` desc
				limit 0,5";

$results = json_encode($wpdb->get_results( $statement, OBJECT ));
echo str_replace('<div id="root"></div>','',$results);
