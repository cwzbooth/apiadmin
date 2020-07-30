<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

return [
    'APP_VERSION'           => 'v4.1',
    'APP_NAME'              => 'ApiAdmin',

    //鉴权相关
    'USER_ADMINISTRATOR'    => [1],

    //安全秘钥
    'AUTH_KEY'              => '937cef45-5342-3218-7e68-d1892329f9d9',

    //后台登录状态维持时间[目前只有登录和解锁会重置登录时间]
    'ONLINE_TIME'           => 7200,
    //AccessToken失效时间
    'ACCESS_TOKEN_TIME_OUT' => 7200,
    'COMPANY_NAME'          => '幻月科技API接口开发系统',

    //跨域配置
    'CROSS_DOMAIN'          => [
        'Access-Control-Allow-Origin'      => '*',
        'Access-Control-Allow-Methods'     => 'POST,PUT,GET,DELETE',
        'Access-Control-Allow-Headers'     => 'version, access-token, user-token,token, apiAuth, User-Agent, Keep-Alive, Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With',
        'Access-Control-Allow-Credentials' => 'true'
    ],

    //后台列表默认一页显示数量
    'ADMIN_LIST_DEFAULT'    => 20,
];
