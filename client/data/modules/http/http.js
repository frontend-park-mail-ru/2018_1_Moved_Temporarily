'use strict';

const baseUrl = `${window.location.protocol}//${window.location.host}`;

/**
 * Модуль, предоставляющий методы для выполнения HTTP-запросов
 * @module Http
 */
class Http {
    /**
     * Выполняет GET-запрос по указанному адресу с использованием fetch
     * @param {string} address - адрес запроса
     * @return {Promise}
     */
    static fetchGet(address) {
        const url = (Http.BaseUrl || baseUrl) + address;
        //const url = Http.BaseUrl + address;
        return fetch(url,
            {method: 'GET', mode: 'cors', credentials: 'include'}).then(function (response) {
            if (response.status >= 400) {
                throw response;
            }
            return response.json();
        }).catch(function (error) {
            console.log(error.toString());
            console.log("fetch get error");
        });
    }

    /**
     * Выполняет POST-запрос по указанному адресу с использованием fetch
     * @param {string} address - адрес запроса
     * @param {*} body - тело запроса (объект)
     * @return {Promise}
     */
    static fetchPost(address, body) {
        const url = (Http.BaseUrl || baseUrl) + address;
        return fetch(url,
            {
                method: 'POST', mode: 'cors', credentials: 'include', body: JSON.stringify(body), headers:
                    {'Content-Type': 'application/json; charset=utf-8'}
            }).then(function (response) {
            if (response.status >= 400) {
                throw response;
            }
            return response.json();
        }).catch(function (error) {
            console.log(error.toString());
            console.log("fetch post error");
        });
    }

    static fetchPut(address, body) {
        const url = (Http.BaseUrl || baseUrl) + address;
        return fetch(url,
            {
                method: 'PUT', mode: 'cors', credentials: 'include', body: JSON.stringify(body), headers:
                    {'Content-Type': 'application/json; charset=utf-8'}
            }).then(function (response) {
            if (response.status >= 400) {
                throw response;
            }
            return response.json();
        }).catch(function (error) {
            console.log(error.toString());
            console.log("fetch put error");
        });
    }

     static fetchDelete(address, body) {
        const url = (Http.BaseUrl || baseUrl) + address;
        return fetch(url,
            {
                method: 'DELETE', mode: 'cors', credentials: 'include', body: JSON.stringify(body), headers:
                    {'Content-Type': 'application/json; charset=utf-8'}
            }).then(function (response) {
            if (response.status >= 400) {
                throw response;
            }
            return response.json();
        }).catch(function (error) {
            console.log(error.toString());
            console.log("fetch delete error");
        });
    }
}
Http.BaseUrl = undefined;

export default Http;
