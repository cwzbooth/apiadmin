<?php
/**
 * Api路由
 */

use think\facade\Route;

Route::group('api', function() {
    Route::rule('GetReply/index','api/GetReply/index', 'GET')->middleware(['ApiAuth', 'ApiPermission', 'RequestFilter', 'ApiLog']);
    Route::rule('5f2161d2846de','api/GetDisplay', 'GET')->middleware(['ApiAuth', 'ApiPermission', 'RequestFilter', 'ApiLog']);
    Route::rule('5f2173335c7ac','api/diy', 'GET')->middleware(['ApiAuth', 'ApiPermission', 'RequestFilter', 'ApiLog']);
    //MISS路由定义
    Route::miss('api/Miss/index');
})->middleware('ApiResponse');
