const request = require('request');
const url = 'https://oapi.dingtalk.com';
const methodUrl = {
	getToken: '/gettoken', // 获取企业内部应用的access_token
	getUserInfo: '/topapi/v2/user/getuserinfo', // 通过免登码获取用户信息
	getUserDetail: '/topapi/v2/user/get', // 查询用户详情

};
let appkey = ''; // 应用的唯一标识key。
let appsecret = ''; // 应用的密钥。AppKey和AppSecret可在钉钉开发者后台的应用详情页面获取。

//获取企业内部应用的access_token
const getToken = function(){
	const options = {
		url: `${url}${methodUrl.getToken}?appkey=${appkey}&appsecret=${appsecret}`,
		method:"get",
		headers:{"Content-Type":"application/json"},
		json:true
	};

	return new Promise((reslove, reject) => {
		return request(options,function(error, response, body){
			if(error){
				return reject(error);
			}else{
				return reslove(body);
			}
		});
	})
}

//通过免登码获取用户信息
/**
 * 
 * @param {String} access_token [调用该API的应用凭证]
 * @param {String} code [免登授权码]
*/
const getUserInfo = function(access_token, code){
	const options = {
		url: `${url}${methodUrl.getUserInfo}?access_token=${access_token}`,
		method: "post",
		headers: {"Content-Type": "application/json"},
		body:{
			code: code
		},
		json:true
	};
	console.log(options, "options");

	return new Promise((reslove, reject) => {
		return request(options,function(error, response, body){
			if(error){
				return reject(error);
			}else{
				return reslove(body);
			}
		});
	})
}

//查询用户详情
/**
 * 
 * @param {String} access_token [调用该API的应用凭证]
 * @param {String} userid [用户的userId。]
*/
const getUserDetail = function(access_token, userid){
	const options = {
		url: `${url}${methodUrl.getUserDetail}?access_token=${access_token}`,
		method:"post",
		headers:{"Content-Type":"application/json"},
		body:{
			userid: userid
		},
		json:true
	};

	return new Promise((reslove, reject) => {
		return request(options,function(error, response, body){
			if(error){
				return reject(error);
			}else{
				return reslove(body);
			}
		});
	})
}

/**
 * 初始化
 * @author xutao
 * @param    {[String]}                 appkey [应用的唯一标识key。]
 * @param    {[String]}                 appsecret [应用的密钥。AppKey和AppSecret可在钉钉开发者后台的应用详情页面获取。]
 */
exports.initClient = function (params){
	if(!params){
		return ;
	}
	if(!params.appkey){
		return ;
	}
	if(!params.appsecret){
		return ;
	}

	appkey = params.appkey;
	appsecret = params.appsecret;

	return {
        getToken: getToken, // 获取企业内部应用的access_token
		getUserInfo: getUserInfo, // 通过免登码获取用户信息
		getUserDetail: getUserDetail, // 查询用户详情
	};
};