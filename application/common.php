<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 流年 <liu21st@gmail.com>
// +----------------------------------------------------------------------

// 应用公共文件
//加载请求
require_once 'communication.php';
function getUrl($rurl, $do = '', $type = 1) {
	switch ($type) {
		case 1:
			$apiurl = $rurl.$do;
		break;
		
		default:
			$apiurl = $rurl.$do;
	}
	
	return $apiurl;
}