
define(['app'],function(app){
	app.service('conService',[function(){
		this.version = function(){
			return 'lingmall scaffolding version 0.1.0';
		};

		this.getMenu = function(name){
			var dict = {};
			// 公司简介
			dict['company_profile'] = {
				title:{cn:'公司简介',en:'COMPANY PROFILE'}, 
				list:[
					{cn:'关于绿浪', en:'ABOUT US',url:'/aboutus'},
					{cn:'公司荣誉', en:'HONORS',url:'/honor'},
					{cn:'成员公司', en:'MEMBERS',url:'/companyList'},
					{cn:'成长之路', en:'GROWTH PATH',url:'/growing'}
				],
				bigTitle:{
					cn:'立即加入绿浪',
					bigcn:'与我们一起开启数字商品新连接',
					en:'IMMEDIATELY JOIN THE GREENSEA'
				}
			};

			// 新闻中心
			dict['news_center'] = {
				title:{cn:'新闻中心',en:'NEWS CENTER'}, 
				list:[
					{cn:'公司动态', en:'GROUP', url : '/newsCenterPage'},
					{cn:'行业动态', en:'INDUSTRY', url : '/industryPage'},
					{cn:'媒体报道', en:'MEDIA', url : '/noticePage'},
					{cn:'业务动态', en:'BUSINESS', url :'/businessPage'}
				],
				bigTitle:{
					cn :'绿浪深耕电商领域',
					bigcn:'发现数字商品未来与机遇',
					en:'DIGITAL COMMODITIES IN THE FUTURE AND OPPORTUNITIES',
				}
			};

			// 主营业务
			dict['main_business'] = {
				title:{cn:'主营业务',en:'MAIN BUSINESS'}, 
				list:[
					{cn:'商品数据服务', en:'INFO', url:'/infoService'},
					{cn:'在线教育制作', en:'EDU', url:'/edu'},
					{cn:'电商视觉服务', en:'VISUAL', url:'/visualServicePage'},
					{cn:'电商教育培训', en:'TRAIN', url:'/trainPage'}
				],
				bigTitle:{
					cn:'绿浪专注数字商品未来',
					bigcn:'开启数字商品新连接',
					en:'NEW CONNECTION OF DIGITAL GOODS'
				}
			};

			// 人才发展
			dict['talent_development'] = {
				title:{cn:'人才发展',en:'TALENT DEVELOPMENT'}, 
				list:[
					{cn:'人才理念', en:'TALENT IDEA', url:'/talentPage'},
					{cn:'招聘岗位', en:'RECRUITMENT', url:'/joinUsPage'},
				],
				bigTitle:{
					cn :'立即加入绿浪',
					bigcn:'搭上未来发展的航班',
					en:'ON THE FUTURE DEVELOPMENT OF FLIGHT',
				}
			};

			return dict[name];
		};
	}]);
});
	