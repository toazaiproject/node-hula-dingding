const appkey = 'xx'; // 应用的唯一标识key。
const appsecret = 'xx'; // 应用的密钥。AppKey和AppSecret可在钉钉开发者后台的应用详情页面获取。

/**
 * 初始化
 * @author xutao
 * @param    {[String]}                 appkey [应用的唯一标识key。]
 * @param    {[String]}                 appsecret [应用的密钥。AppKey和AppSecret可在钉钉开发者后台的应用详情页面获取。]
 */
const dingdingClient = require('../index').initClient({
	appkey: appkey,
	appsecret: appsecret
});

// 获取企业内部应用的access_token
const getToken = function(){
    dingdingClient.getToken()
    .then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}
// getToken()

const access_token = 'xx';

// 通过免登码获取用户信息
const getUserInfo = function(access_token, code){
    dingdingClient.getUserInfo(access_token, code)
    .then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}
const code = 'xx';
// getUserInfo(access_token, code)

// 查询用户详情
const getUserDetail = function(access_token, userid){
    dingdingClient.getUserDetail(access_token, userid)
    .then(function(obj){
		console.log(obj);
	})
	.catch(function(err){
		console.log(err);
	})
}
const userid = 'xx';
// getUserDetail(access_token, userid)