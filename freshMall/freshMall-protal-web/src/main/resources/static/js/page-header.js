document.writeln("		<!-- 公共页面头部样式开始 -->");
document.writeln("		<style type=\'text/css\'>");
document.writeln("		/*!");
document.writeln("		 * 功能：捷径栏");
document.writeln("		 */.shortcut{width:100%;height:36px;background:#f9f9f9}.shortcut .fresh-left,.shortcut .fresh-right{width:30%;height:36px;line-height:36px}.shortcut .fresh-right{width:70%;}.shortcut li{position:relative;float:left;padding:0 8px}.shortcut li a{color:#a0a0a0}.shortcut li:before{position:absolute;top:13px;left:0;display:block;width:1px;height:10px;background:#d3d3d3;content:\'\'}.shortcut .fresh-left li:first-child:before,.shortcut .fresh-right li:first-child:before{display:none}.shortcut .fresh-left li:first-child a{padding-left:1pc}.shortcut .fresh-left li:first-child a:before{position:absolute;top:10px;left:7px;display:block;width:14px;height:14px;background:url(img/page-index/home.png) no-repeat;content:\'\';line-height:9pt}.shortcut .fresh-left li:first-child:hover a,.shortcut a:hover{color:#c61722}.shortcut .fresh-left li:first-child:hover a:before{background:url(img/page-index/home-red.png) no-repeat}.shortcut .fresh-right ul{float:right}.shortcut .fresh-right li:first-child+li:before{display:none}.search-bar .search-bar-form:after,.search-bar .search-bar-key a .icon-fire:before,.shortcut .dropdown-code .code-info span:before,.shortcut .dropdown-navs .dropdown-navs-icon span:before,.shortcut .s-dropdown .icon-dropdown:before,.shortcut .s-dropdown .icon-minicart:before,.shortcut .s-dropdown .minicart-pro-empty .icon-minicart:before{background:url(img/page-index/icon-common.svg) no-repeat}.shortcut .s-dropdown{position:relative;z-index:310;margin:0 -9px;height:36px}.shortcut .s-dropdown .icon-minicart:before{position:absolute;top:11px;left:-3px;display:block;width:20px;height:9pt;background-position:-99px -4px;content:\'\';line-height:9pt}.shortcut .s-dropdown .icon-dropdown{position:relative;padding-right:10px}.shortcut .s-dropdown .icon-dropdown:before{position:absolute;top:0;right:-5px;display:block;width:14px;height:14px;background-position:-71px 0;content:\'\'}.shortcut .s-dropdown .h{position:relative;padding:0 9pt 0 10px;height:36px}.shortcut .s-dropdown:hover{z-index:9999999;margin:0 -9px;box-shadow:0 2px 36px 0 rgba(0,0,0,.07)}.shortcut .s-dropdown:hover .icon-dropdown:before{background-position:-85px 0}.shortcut .s-dropdown:hover .h{z-index:100;background:#fff}.shortcut .s-dropdown:hover .h a{position:relative;color:#cb242b}.shortcut .s-dropdown:hover .b{display:block}.shortcut .s-dropdown .b{position:absolute;top:36px;right:0;display:none;border-radius:8px 0 8px 8px;background:#fff;box-shadow:0 2px 36px 0 rgba(0,0,0,.07)}.shortcut .s-dropdown-link .b{border-radius:0 0 8px 8px}.shortcut .s-dropdown-minicart{background:#f2f2f2}.shortcut .dropdown-more{padding:6px 0 9pt;width:5pc;text-align:center;line-height:2pc}.shortcut .dropdown-more.w-119{width:119px}.shortcut .dropdown-more a{color:#777}.shortcut .dropdown-more a:hover{color:#ca151d}.shortcut .dropdown-code{padding:20px 0;width:244px}.shortcut .dropdown-code .dropdown-code-detail{overflow:hidden;margin-bottom:20px;padding-bottom:20px;padding-left:24px;border-bottom:1px solid #e5e5e5}.shortcut .dropdown-code .dropdown-code-detail a{cursor:default}.shortcut .dropdown-code .dropdown-code-detail:first-child a{cursor:pointer}.shortcut .dropdown-code .dropdown-code-detail:last-child{margin-bottom:0;padding-bottom:0;border-bottom:0}.shortcut .dropdown-code .code-img{float:left;margin-right:9pt;width:90px;height:90px}.shortcut .dropdown-code .code-info{float:left;line-height:18px}.shortcut .dropdown-code .code-info h2{margin-bottom:2px;font-weight:700;font-size:14px}.shortcut .dropdown-code .code-info p{margin:0;color:#777}.shortcut .dropdown-code .code-info span{display:block;margin-top:5px;width:2pc;height:2pc}.shortcut .dropdown-code .code-info span:before{display:block;margin-top:1px;width:30px;height:30px;content:\'\'}.shortcut .dropdown-code .code-info span.icon-andrid:before{background-position:0 0}.shortcut .dropdown-code .code-info span.icon-wechat:before{background-position:-30px 0}.shortcut .dropdown-code .code-info .red{color:#cb242b!important;line-height:1pc}.shortcut .dropdown-minicart{color:#3a3a3a}.shortcut .dropdown-i-mall{width:340px;color:#3a3a3a}.shortcut .dropdown-navs{width:893px;color:#777;line-height:20px}.shortcut .dropdown-navs .dropdown-navs-icon{float:left;margin:37px 46px 0 49px;width:50px;color:#777;text-align:center}.shortcut .dropdown-navs .dropdown-navs-icon span{display:block;margin-bottom:3px;width:50px;height:50px}.shortcut .dropdown-navs .dropdown-navs-icon span:before{display:block;width:50px;height:50px;background-position:-202px 0;content:\'\'}.shortcut .dropdown-navs .dropdown-navs-icon:hover{color:#cb242b}.shortcut .dropdown-navs dl{float:left;margin-top:22px;margin-bottom:20px;width:185px}.shortcut .dropdown-navs dl dt{margin-bottom:8px;color:#333;font-weight:700;font-size:1pc}.shortcut .dropdown-navs dl dd:after,.shortcut .dropdown-navs dl dd:before{display:table;content:\'\'}.shortcut .dropdown-navs dl dd:after{clear:both}.shortcut .dropdown-navs dl .item{float:left;overflow:hidden;margin-bottom:4px;width:5pc;text-overflow:ellipsis;white-space:nowrap}.shortcut .dropdown-navs dl a{color:#777}.shortcut .dropdown-navs dl a:hover{color:#cb242b}.shortcut .s-dropdown .icon-minicart{position:relative;display:block;padding-left:18px;white-space:nowrap}.shortcut .s-dropdown .minicart-pro-empty .icon-minicart:before{position:static;display:block;width:75pt;height:75pt;background-position:-262px 0;content:\'\'}.shortcut .s-dropdown:hover .icon-minicart:before{background-position:-119px -4px}.minicart-pro-empty{padding:20px 0;width:460px;color:#3a3a3a;color:#a4a4a4;text-align:center;font-size:14px;line-height:1}.minicart-pro-empty a{display:block;margin:0 auto;margin-top:20px;width:148px;height:38px;border:1px solid #a4a4a4;border-radius:2px;color:#ca141d;color:#3a3a3a;line-height:38px}.minicart-pro-empty a:hover{border-color:#ca141d;color:#ca141d}.minicart-pro-empty .icon-minicart{display:block;margin:0 auto;margin-bottom:1pc;width:75pt;height:75pt}.minicart-pro-empty-index{padding:50px 0}.minicart-pro-empty-index a{display:none}.shortcut .s-dropdown .minicart-pro-empty .icon-minicart:before{position:static;display:block;width:75pt;height:75pt;background:url(img/page-index/icon-common.svg) no-repeat;background-position:-262px 0;content:\'\'}.minicart-pro-list{margin-bottom:60px;width:460px;min-height:168px}.minicart-pro-list li{float:none}.minicart-pro-list li,.minicart-pro-list li:first-child{padding:20px 20px 0 9pt}.minicart-pro-list li:before{display:none}.minicart-pro-list-scroll{overflow-x:hidden;overflow-y:auto;width:477px;max-height:458px}.minicart-pro-item{position:relative;border-bottom:1px solid #eee;vertical-align:top}.minicart-pro-item .pro-info{padding-bottom:20px}.minicart-pro-item .pro-tags{position:absolute;top:-25px;left:-1px;width:50px;height:22px;border:1px solid #eaeaea;border-radius:0 0 1pc 0;background:#f6f6f6;color:#666;text-align:center;font-size:14px}.minicart-pro-item .pro-tips{top:66px;left:42px;overflow:hidden;width:60px;color:#ca151d;text-overflow:ellipsis;white-space:nowrap;font-size:9pt}.minicart-pro-item .pro-tips:hover{width:auto}.minicart-pro-item .p-choose{float:left;margin:23px 1pc 0 9pt;width:20px;height:20px}.minicart-pro-item .p-choose i{position:relative;display:block;width:20px;height:20px}.minicart-pro-item .p-choose i.icon-choose:before{position:absolute;top:0;left:0;color:#ca141d;font-size:20px;line-height:20px}.minicart-pro-item .p-choose i.icon-choose-normal{width:18px;height:18px;border:1px solid #979797;border-radius:10px}.minicart-pro-item .p-img{float:left;width:4pc;height:4pc}.minicart-pro-item .p-img img{width:4pc;height:4pc;vertical-align:top}.minicart-pro-item .p-name{float:left;padding:0 0 0 9px;width:298px}.minicart-pro-item .p-name a{display:block;overflow:hidden;width:100%;color:#3a3a3a;text-overflow:ellipsis;white-space:nowrap;font-size:14px;line-height:22px}.minicart-pro-item .p-name a:hover{color:#ca151d;text-decoration:none}.minicart-pro-item .p-dec{float:left;overflow:hidden;padding:0 0 0 9px;width:298px;height:20px;color:#a4a4a4;text-overflow:ellipsis;white-space:nowrap;line-height:20px}.minicart-pro-item .p-status{float:left;padding-left:9px;width:298px}.minicart-pro-item .p-price{float:right;text-align:right;font-size:14px;line-height:19px}.minicart-pro-item .p-price s{display:inline-block;color:#a4a4a4}.minicart-pro-item .p-price b{display:inline-block;margin-right:7px;margin-left:7px;min-width:4pc;color:#333;font-weight:400}.minicart-pro-item .p-price em{margin:0 2px 0 0;color:#3a3a3a}.minicart-pro-item .p-price span{color:#3a3a3a}.minicart-pro-item .p-price strong{display:inline-block;min-width:2pc;font-weight:400}.minicart-pro-item .p-tags{position:relative;float:left;padding-left:17px;color:#ca141d;line-height:20px}.minicart-pro-item .p-tags:before{position:absolute;top:0;left:0;color:#ca141d;font-size:9pt}.minicart-pro-item .p-pack{position:relative;overflow:hidden;margin-top:6px;margin-bottom:10px;margin-left:9pt;padding-top:4px;padding-left:51px;text-overflow:ellipsis;white-space:nowrap;line-height:17px}.minicart-pro-item .p-pack .p-mini-tag-suit{position:absolute;top:4px;left:0;display:block;width:42px;height:17px;border-radius:2px;background:#ca141d;color:#fff;text-align:center;line-height:17px}.minicart-pro-item .p-pack a{color:#3a3a3a;cursor:default}.minicart-pro-item .p-pack a:hover{color:#3a3a3a!important}.minicart-pro-item .p-pack span.disabled,.minicart-pro-item .p-pack.disabled,.minicart-pro-item .p-pack.disabled a{color:#a4a4a4}.minicart-pro-item .p-pack.disabled a:hover,.minicart-pro-item .p-pack.disabled:hover{color:#a4a4a4!important}.minicart-pro-item .pro-other{margin-top:5px;margin-bottom:10px;margin-left:9pt}.minicart-pro-item .pro-other li{overflow:hidden;margin-top:5px;padding:0}.minicart-pro-item .pro-other li:after,.minicart-pro-item .pro-other li:before{display:table;content:\'\'}.minicart-pro-item .pro-other li:after{clear:both}.minicart-pro-item .pro-other li.disabled .p-title{color:#a4a4a4}.minicart-pro-item .pro-other li.disabled .p-title span{border-color:#e58a8f;color:#e58a8f}.minicart-pro-item .pro-other li.disabled .p-price b,.minicart-pro-item .pro-other li.disabled .p-price em,.minicart-pro-item .pro-other li.disabled .p-price span{color:#a4a4a4}.minicart-pro-item .pro-other .p-title{position:relative;float:left;overflow:hidden;padding-left:60px;max-width:210px;color:#3a3a3a;text-overflow:ellipsis;white-space:nowrap;line-height:17px}.minicart-pro-item .pro-other .p-title span{position:absolute;top:0;left:0;display:block;width:52px;height:15px;border:1px solid #ca141d;border-radius:2px;background:#fff;color:#ca141d;text-align:center;line-height:15px}.minicart-pro-item .pro-other .p-title-wide{width:23pc}.minicart-pro-item .pro-other .p-title-wide a{color:#3a3a3a;cursor:default}.minicart-pro-item .pro-other .p-price{float:right;font-size:9pt;line-height:17px}.minicart-pro-item .pro-other .p-add{width:180px}.minicart-pro-item.disabled .p-name a{color:#a4a4a4}.minicart-pro-item.disabled .p-name a:hover{color:#a4a4a4!important}.minicart-pro-item.disabled .p-price b,.minicart-pro-item.disabled .p-price em,.minicart-pro-item.disabled .p-price span,.minicart-pro-item.disabled .pro-other .p-title{color:#a4a4a4}.minicart-pro-item.disabled .pro-other .p-title span{border-color:#e58a8f;color:#e58a8f}.minicart-pro-item.disabled .p-pack,.minicart-pro-item.disabled .p-pack a{color:#a4a4a4}.minicart-pro-item.disabled .p-pack a:hover{color:#a4a4a4!important}.minicart-pro-item.disabled i.icon-choose,.minicart-pro-item.disabled i.icon-choose-normal{width:18px;height:18px;border:1px solid #e1e1e1;border-radius:10px;background:#f7f7f7;cursor:not-allowed}.minicart-pro-item.disabled i.icon-choose-normal:before,.minicart-pro-item.disabled i.icon-choose:before{display:none}.minicart-pro-settleup{position:absolute;bottom:0;width:100%;height:60px;border-radius:0 0 8px 8px;background:#f0f0f0}.minicart-pro-settleup p{float:left;margin-top:10px;margin-left:23px;color:#3a3a3a;font-size:14px}.minicart-pro-settleup span{display:block;line-height:1.2}.minicart-pro-settleup span:first-child{color:#888;font-size:9pt}.minicart-pro-settleup b{margin-right:7px;color:#ca141d;font-weight:400;font-size:24px}.minicart-pro-settleup s{position:relative;top:-4px;color:#333;font-size:14px}.minicart-pro-settleup .button-minicart{float:right;margin:10px 20px 0 0;width:150px;height:40px;border-radius:2px;background-color:#ca151e;color:#fff;text-align:center;font-size:1pc;line-height:40px}.minicart-pro-settleup .button-minicart:hover{background:#d5444b;color:#fff}.minicart-pro-settleup .button-minicart.disabled{background:#e5aeb0;cursor:not-allowed}");
document.writeln("		/*!");
document.writeln("		 * 功能：头部栏");
document.writeln("		 */.header{position:relative;padding:20px 0;background:#fff;box-shadow:0 0 46px rgba(0,0,0,.03);font-family:Helvetica Neue,Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif;line-height:1.5}.header .fresh-left,.header .fresh-right,.logo{height:41px}.logo{float:left;margin-right:40px}.logo img{margin-left:22px;height:41px;outline:0;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;-khtml-user-select:none;user-select:none}.logo a{float:left;height:41px}.search-bar{margin-top:5px;border-radius:1pc 1pc 0 0;background:#fff}.search-bar .search-bar-form{position:relative;z-index:310;width:370px;height:2pc;border:1px solid #f0f0f0;border-radius:15px;background:#f9f9f9;line-height:1}.search-bar .search-bar-form:after{position:absolute;top:4px;right:9pt;display:block;width:20px;height:20px;background-position:-139px 0;content:\'\'}.search-bar .search-bar-form.hover,.search-bar .search-bar-form:hover{border-color:#c9c9c9}.search-bar .search-bar-form.hover:after,.search-bar .search-bar-form:hover:after{background-position:-159px 0;cursor:pointer}.search-bar .search-bar-form .text{float:left;width:330px;height:30px;outline:0;border:0;background:0 0;color:#3a3a3a;text-indent:15px;line-height:28px}.search-bar .search-bar-form .text::-ms-clear{display:none}.search-bar .search-bar-form .button{position:absolute;top:0;right:0;z-index:10;overflow:hidden;padding-right:10px;width:35px;height:30px;outline:0;border:0;background:0 0;color:#353535;font-size:0;cursor:pointer}.search-bar .search-bar-form .button:hover{color:#787878}");
document.writeln("		</style>");
document.writeln("		<!-- 公共页面头部样式结束 -->");
document.writeln("");
document.writeln("		<!-- 公共页面头部代码开始 -->");
document.writeln("		<!-- 捷径栏开始 -->");
document.writeln("		<div class=\'fresh-main-fluid shortcut\'>");
document.writeln("			<div class=\'fresh-main fresh-center fresh-clearfix\'>");
document.writeln("				<div class=\'fresh-left\'>");
document.writeln("					<ul>");
document.writeln("						<li>");
document.writeln("							<a href=\'index.html'>首页</a>");
document.writeln("						</li>");
document.writeln("					</ul>");
document.writeln("				</div>");
document.writeln("				<div class=\'fresh-right\'>");
document.writeln("					<ul>");
document.writeln("						<li>");
document.writeln("							<a href=\'login.html'>您好，请登录</a>");
document.writeln("						</li>");
document.writeln("						<li>");
document.writeln("							<a href=\'register.html\'>免费注册</a>");
document.writeln("						</li>");
document.writeln("						<li>");
document.writeln("							<a href=\'home-order.html\'>我的订单</a>");
document.writeln("						</li>");
document.writeln("						<li>");
document.writeln("							<a href=\'home-person-footprint.html\'>我的足迹</a>");
document.writeln("						</li>");
document.writeln("						<li>");
document.writeln("							<a href=\'#\'>网站导航</a>");
document.writeln("						</li>");
document.writeln("						<li>");
document.writeln("							<div class=\'s-dropdown\'>");
document.writeln("								<div class=\'h\'>");
document.writeln("									<a class=\'icon-dropdown\'>手机版</a>");
document.writeln("								</div>");
document.writeln("								<div class=\'b\'>");
document.writeln("									<div class=\'dropdown-code\'>");
document.writeln("										<div class=\'fresh-clearfix dropdown-code-detail\'>");
document.writeln("											<a><img class=\'code-img\' src=\'img/page-index/qrcode.jpg\'></a>");
document.writeln("											<div class=\'code-info\'>");
document.writeln("												<h2>新鲜生活公众号</h2>");
document.writeln("												<p>微信扫一扫</p>");
document.writeln("												<span class=\'icon-wechat\'></span>");
document.writeln("											</div>");
document.writeln("										</div>");
document.writeln("										<div class=\'fresh-clearfix dropdown-code-detail\'>");
document.writeln("											<a><img class=\'code-img\' src=\'img/page-index/qrcode.jpg\'></a>");
document.writeln("											<div class=\'code-info\'>");
document.writeln("												<h2>新鲜生活小程序</h2>");
document.writeln("												<p>微信扫一扫</p>");
document.writeln("												<span class=\'icon-wechat\'></span>");
document.writeln("											</div>");
document.writeln("										</div>");
document.writeln("									</div>");
document.writeln("								</div>");
document.writeln("							</div>");
document.writeln("						</li>");
document.writeln("						<li>");
document.writeln("							<div class=\'s-dropdown s-dropdown-minicart\'>");
document.writeln("								<div class=\'h h-wide\' id=\'header-toolbar-minicart\'>");
document.writeln("									<a href=\'cart.html' class=\'icon-minicart\' target=\'blank\'>");
document.writeln("										<span>购物车(<span id=\'header-cart-total\'>0</span>)</span>");
document.writeln("									</a>");
document.writeln("								</div>");
document.writeln("								<div class=\'b\' id=\'header-toolbar-minicart-content\'>");
document.writeln("									<div class=\'dropdown-minicart\'>");
document.writeln("										<div class=\'minicart-pro-empty minicart-pro-empty-index\' id=\'minicart-pro-empty\'>");
document.writeln("											<p>");
document.writeln("												<span class=\'icon-minicart\'></span>");
document.writeln("											</p>");
document.writeln("											<p id=\'cartInfo\'>您的购物车是空的，赶紧去选购吧~</p>");
document.writeln("										</div>");
document.writeln("									</div>");
document.writeln("								</div>");
document.writeln("							</div>");
document.writeln("						</li>");
document.writeln("					</ul>");
document.writeln("				</div>");
document.writeln("			</div>");
document.writeln("		</div>");
document.writeln("		<!-- 捷径栏结束 -->");
document.writeln("");
document.writeln("		<!-- 头部栏开始 -->");
document.writeln("		<div class=\'fresh-main-fluid header\'>");
document.writeln("			<div class=\'fresh-main fresh-center fresh-clearfix\'>");
document.writeln("				<div class=\'fresh-left\'>");
document.writeln("					<div class=\'logo\'>");
document.writeln("						<a href=\'index.html\' title=\'果然新鲜\'> <img src=\'img/page-index/logo.png\' /> </a>");
document.writeln("					</div>");
document.writeln("				</div>");
document.writeln("				<div class=\'fresh-right\'>");
document.writeln("					<div class=\'search-bar relative\' id=\'searchBar-area\'>");
document.writeln("						<div class=\'search-bar-form hover\' id=\'search-bar-form\'>");
document.writeln("							<form method=\'get\' action=\'search.html\'>");
document.writeln("								<input type=\'text\' class=\'text\' maxlength=\'200\' name=\'keyword\' id=\'searchBtn\' autocomplete=\'off\' placeholder=\'请输入您要搜索的商品名称\' />");
document.writeln("								<input type=\'submit\' class=\'button iconfont\' value=\'\' />");
document.writeln("							</form>");
document.writeln("						</div>");
document.writeln("					</div>");
document.writeln("				</div>");
document.writeln("				");
document.writeln("				<!-- Script -->");
document.writeln("				<script type=\'text/javascript\'>");
document.writeln("						// 添加特效：当单机文本框时候，外框变成红色，离开时候，回复本色");
document.writeln("						document.getElementById(\'searchBtn\').onfocus = function() {");
document.writeln("							document.getElementById(\'searchBtn\').setAttribute(\'style\', \'border-color: #c61722;width: 390px;-webkit-transition: all .75s;-moz-transition: all .75s;-ms-transition: all .75s;-o-transition: all .75s;transition: all .75s;\');");
document.writeln("							document.getElementById(\'search-bar-form\').setAttribute(\'style\', \'border-color: #c61722;width: 430px;-webkit-transition: all .75s;-moz-transition: all .75s;-ms-transition: all .75s;-o-transition: all .75s;transition: all .75s;\');");
document.writeln("						};");
document.writeln("						// 添加特效：当单机文本框时候，外框变成变长，离开时候，回复原长");
document.writeln("						document.getElementById(\'searchBtn\').onblur = function() {");
document.writeln("							document.getElementById(\'searchBtn\').setAttribute(\'style\', \'border-color: #C9C9C9;width: 330px;-webkit-transition: all .75s;-moz-transition: all .75s;-ms-transition: all .75s;-o-transition: all .75s;transition: all .75s;\');");
document.writeln("							document.getElementById(\'search-bar-form\').setAttribute(\'style\', \'border-color: #C9C9C9;width: 370px;-webkit-transition: all .75s;-moz-transition: all .75s;-ms-transition: all .75s;-o-transition: all .75s;transition: all .75s;\');");
document.writeln("						};");
document.writeln("				</script>");
document.writeln("			</div>");
document.writeln("		</div>");
document.writeln("		<!-- 头部栏结束 -->");
document.writeln("		<!-- 公共页面头部代码结束 -->");