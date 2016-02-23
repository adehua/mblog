$(".title-click li").on("click",function(event){
    var _this = $(this);
    _this.parent().children("li").each(function(){
    	$(this).children("a").removeClass("title-ul-li-1");
    });
    _this.children("a").addClass("title-ul-li-1");
    _this.parent().parent().next("div").children("div").each(function(){
    	$(this).hide();
    });
    $("."+_this.children("a").data('name')).show();
});

$(".triangle-more a").on("click",function(event){
	if($(this).hasClass("triangle_border_up")){
		$(this).removeClass("triangle_border_up").addClass("triangle_border_down");
		$(this).parent().parent().parent().children(".nav-hide").slideUp(500);
		$(this).text("更多");
	}else{
		$(this).removeClass("triangle_border_down").addClass("triangle_border_up");
		$(this).parent().parent().parent().children(".nav-hide").slideDown(500);
		$(this).text("收起");
	}
})

//  在线咨询和定时弹窗
$(function(){var data={siteid:'7874357',root:'http://qiao.baidu.com/v3/',baseUrl:''||('http://qiao.baidu.com/v3/'+'asset/mobile/'),chatUrl:'http://webim.qiao.baidu.com//im/index'||'http://webim.qiao.baidu.com//im/gateway',ucid:'18364419',icon:{enable:+'1',type:+'1',theme:'bar'||'bar',bgColor:'#BC1212'||'#0F78B5',color:'#FFFFFF'||'#FFFFFF',size:+'1.2'||1,top:+'50',left:+'5',pos:'right'||'left',bgUrl:''||'',width:+'',height:+''},invite:{enable:+'1',type:+'1',bgColor:'#359DFF'||'#FFFFFF',bdColor:'#CCCCCC'||'#CCCCCC',color:'#FFFFFF'||'#333333',btnBgColor:'#BC1212'||'#0F78B5',btnColor:'#FFFFFF'||'#FFFFFF',width:+'54',height:+'18.5',text:'2016年湖南自考、成考、远程教育招生报名进行中.错过等半年~~',bgUrl:''||''}};var item=document.getElementById('globalMobileBridgeJSLoad');if(item){return;}
if(window.bd_bridge_show_hidden==='hidden'){data.icon.enable=0;data.invite.enable=0;}
var openModules=''+data.icon.enable+data.invite.enable+1;var MODULES=['icon','invite','api'];var loadModules=[];var script=document.createElement('script');script.charset='utf-8';script.id="globalMobileBridgeJSLoad";for(var i=0,len=openModules.length;i<len;i++){item=openModules.charAt(i);if(item!=='0'&&MODULES[i]){item=MODULES[i];loadModules.push(item);}}
loadModules=loadModules.join('.');script.onload=function(){qiao.config({baseUrl:data.baseUrl});var req='entry/mobile'+(loadModules?('.'+loadModules):'');qiao.require([req],function(mobile){mobile.init(data);});}
script.src=data.baseUrl+'qiao'+(loadModules?'.'+loadModules:'')+'.js?v='+'20150303ll';var head=document.getElementsByTagName('head')[0];head.appendChild(script);});

