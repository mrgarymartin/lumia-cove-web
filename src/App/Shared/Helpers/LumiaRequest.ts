import axios from 'axios';

const DEBUG = process.env.REACT_APP_LOCAL;

export const URLS = {
	base: DEBUG ? 'http://localhost:7650' : 'https://api.lumiacove.com',
	api: DEBUG ? 'http://localhost:7650/api' : 'https://api.lumiacove.com/api',
	oauth: DEBUG ? 'http://localhost:7650/oauth' : 'https://api.lumiacove.com/oauth',
};

export const getRequest = (endpoint: string, headers = {}, rootUrl = URLS.api): Promise<any> => {
	return new Promise((resolve, reject) => {
		axios.get(`${rootUrl}/${endpoint}`, headers)
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};

export const postRequest = (endpoint: string, body = {}, headers = {}, rootUrl = URLS.api): Promise<any> => {
	return new Promise((resolve, reject) => {
		axios.post(`${rootUrl}/${endpoint}`, body, headers)
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};

export const oauthPostRequest = (endpoint: string, body = {}, headers = {}, rootUrl = URLS.oauth) => {
	return new Promise((resolve, reject) => {
		axios.post(`${rootUrl}/${endpoint}`, body, headers)
			.then((res) => resolve(res))
			.catch((err) => reject(err));
	});
};

export default { get: getRequest, getRequest, post: postRequest, postRequest };