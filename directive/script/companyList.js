
define(['app',
	// 'bmap',
	'leftMenu',
	'path',
	'bigTitle',
	'conService'
	],function(app){
	app.directive('companyList',['conService',function(conService){
		return {
			restrict:'E',
			replace:false,
			templateUrl:'../directive/html/companyList.html',
			link:function(scope,elements,attrs){
				var menu = conService.getMenu('company_profile');
				scope.menuList = {title: menu.title, list: menu.list };
				scope.bigTitle = menu.bigTitle;

				scope.menuIndex = 2;

				scope.pills = ['首页','公司简介','成员公司'];

				var map;
				var local;
				scope.initMap = function(){
					var map = new BMap.Map("mapCanvas");  
					map.centerAndZoom('嘉兴', 15);  
					// map.centerAndZoom("北京",15);
					map.enableScrollWheelZoom();  
					// map.setCurrentCity('上海');
					var options = {
						onSearchComplete: function(results) {
							// 判断状态是否正确
							if (local.getStatus() == BMAP_STATUS_SUCCESS || local.getStatus() == BMAP_STATUS_CITY_LIST) {
								var first = results.getPoi(0);
								console.log(first);
								var point = first.point;
								var marker = new BMap.Marker(point);  // 创建标注
								map.addOverlay(marker);
								var label = new BMap.Label(scope.info.text,{offset:new BMap.Size(20,-10)});
								marker.setLabel(label);
								// map.centerAndZoom(new BMap.Point(point.lat, point.lng),15);
								map.centerAndZoom(point,18);
							}else{
								console.log(local.getStatus());
							}
						}
					};
					local = new BMap.LocalSearch(map,options);
					// local.search("绿浪视觉");
					return map;
				};

				var dict = {};
				dict['shlm'] = {
					city:'上海',
					keyword:'上海徐汇区虹桥路808号加华广场D2-501室',
					text:'上海零猫信息技术有限公司'
				};
				dict['hzll']={
					city:'杭州',
					keyword:'浙江杭州江干区下沙学源街972号国际交流中心传媒文化创意产业园L楼A104室',
					text:'杭州绿浪网络科技优先公司'
				};
				dict['zjll'] = {
					city:'嘉兴',
					keyword:'浙江省嘉兴市昌盛南路36号嘉兴智慧产业创新园1号楼601室',
					text:'浙江绿浪信息技术有限公司'
				};
				dict['jxzx'] = {
					city:'嘉兴',
					keyword:'浙江省嘉兴市昌盛南路36号嘉兴智慧产业创新园1号楼201室',
					text:'嘉兴掌心通讯科技有限公司'
				};
				dict['jxyt'] = {
					city:'嘉兴',
					keyword:'浙江省嘉兴市昌盛南路36号嘉兴智慧产业创新园1号楼201室',
					text:'嘉兴云图信息科技有限公司'
				};
				dict['jxdc'] = {
					city:'嘉兴',
					keyword:'浙江省嘉兴市昌盛南路36号嘉兴智慧产业创新园1号楼201室',
					text:'嘉兴东臣信息科技有限公司'
				};
				dict['jxdr'] = {
					city:'嘉兴',
					keyword:'浙江省嘉兴市昌盛南路36号嘉兴智慧产业创新园1号楼201室',
					text:'嘉兴东软软件培训学校'
				};
				dict['njzx'] = {
					city:'南京',
					keyword:'南京江宁区科学园湖山路天元吉第85栋3单元605室',
					text:'南京掌心文化传媒有限公司'
				};
				dict['tzxx'] = {
					city:'台州',
					keyword:'浙江台州椒江洪西路1号星星电子商务产业园a5栋118号',
					text:'台州星星绿浪信息技术有限公司'
				};
				dict['bjbsc'] = {
					city:'北京',
					keyword:'',
					text:'北京办事处'
				};
				scope.currComp =  null;
				scope.map = function(name){
					scope.currComp = name;

					var info = scope.info = dict[name];
					map.clearOverlays();      
					map.setCurrentCity(info.city);
					local.search(info.keyword.length==0?info.text:info.keyword);

				};
				

				map = scope.initMap();
				scope.map('zjll');

				window.map = map;
			}
		};
	}]);
});
	