import axios from 'axios';

const http = {
    request(config) {
        return axios.request(config);
    },

    get(url, data = {}, successCb = null, errorCb = null) {
        return axios.get(url, {
            params: data
        }).then(successCb).catch(errorCb);
    },

    post(url, data, successCb = null, errorCb = null) {
        return axios.post(url, data).then(successCb).catch(errorCb);
    },

    put(url, data, successCb = null, errorCb = null) {
        return axios.put(url, data).then(successCb).catch(errorCb);
    },

    delete(url, data = {}, successCb = null, errorCb = null) {
        return axios.delete(url, {
            data: data
        }).then(successCb).catch(errorCb);
    },

    init() {
        axios.defaults.timeout = 20000;
        axios.defaults.baseURL = '/api'

        // Intercept the request to make sure the token is injected into the header.
        axios.interceptors.request.use(config => {
            if (config.method == 'get') {
                config.data = true
            }
            config.headers['Content-Type'] = 'application/json';
            config.headers.Authorization = `Bearer ${JSON.parse(window.localStorage.getItem('token'))}`;
            config.headers['X-Requested-With'] = 'XMLHttpRequest';
            return config
        }, err => {
            return Promise.reject(err);
        })

        axios.interceptors.response.use(response => {
            const token = response.headers['bearer-token'];
            if (token) {
                window.localStorage.setItem('token', JSON.stringify(token));
            }

            return response
        }, error => {
            //  1.判断请求超时
            if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
                alert('请求超时，请检查网络是否畅通~');
            }
            // NProgress.done()
            // Also, if we receive a Bad Request / Unauthorized error
            if (error.response && error.response.status && error.response.status === 401) {
                // and we're not trying to login
                let url = window.location.href;
                let hasParam = url.lastIndexOf("?");
                let shareParams = "";
                hasParam > -1 && (shareParams = "?" + url.substring(hasParam + 1));
                sessionStorage.loginFrom = window.location.pathname + shareParams;
                if (!(error.config.method === 'post' && /\/api\/token\/?$/.test(error.config.url)) && !(error.config.url === '/api/wechat-token')) {
                    // the token must have expired. Log out.
                    window.localStorage.removeItem('token');
                    window.location.href = '/login' + shareParams;
                }
            }
            return Promise.reject(error)
        })
    }
}

export default http;
