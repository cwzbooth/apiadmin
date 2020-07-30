<?php

namespace app\api\controller;

use think\facade\App;

class GetReply extends Base {

    public function index() {		
		$param = $this->request->param();
		$apiUrl = getUrl($param['APP_CONF_DETAIL']['app_apiUrl'], request()->controller());
		$get = ihttp_get($apiUrl);
		print_r( $content);exit;
		$content = @json_decode($get['content'], true);
		
		print_r( $content);
		//print_r( request() );
		
        return $this->buildSuccess([
            'ToYou'   => "幻月科技"
        ]);
    }
}
