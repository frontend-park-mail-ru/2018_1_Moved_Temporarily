'use strict';

const baseUrl = `${window.location.protocol}//${window.location.host}`;

/**
 * Модуль, предоставляющий методы для выполнения HTTP-запросов
 * @module Http
 */
class Http
{
    /**
     * Выполняет GET-запрос по указанному адресу с использованием fetch
     * @param {string} address - адрес запроса
     * @return {Promise}
     */
    static FetchGet(address)
    {
        const url = (Http.BaseUrl || baseUrl) + address;
        return fetch(url,
            {
                method: 'GET',
                mode: 'cors',
                credentials: 'include'
            })
            .then(function (response)
            {
                if (response.status >= 400) {
                    throw response;
                }
                return response.json();
            });
    }

    /**
     * Выполняет POST-запрос по указанному адресу с использованием fetch
     * @param {string} address - адрес запроса
     * @param {*} body - тело запроса (объект)
     * @return {Promise}
     */
    static FetchPost(address, body)
    {
        const url = (Http.BaseUrl || baseUrl) + address;
        return fetch(url,
            {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                body: JSON.stringify(body),
                headers:
                    {
                        'Content-Type': 'application/json; charset=utf-8'
                    }
            }).then(function (response)
        {
            if (response.status >= 400) {
                throw response;
            }
            return response.json();
        });
    }

    /**
     * Выполняет PUT-запрос по указанному адресу с использованием fetch
     * @param {string} address - адрес запроса
     * @param {*} body - тело запроса (объект)
     * @return {Promise}
     */
    static FetchPut(address, body)
    {
        const url = (Http.BaseUrl || baseUrl) + address;
        return fetch(url,
            {
                method: 'PUT',
                mode: 'cors',
                credentials: 'include',
                body: JSON.stringify(body),
                headers:
                    {
                        'Content-Type': 'application/json; charset=utf-8'
                    }
            }).then(function (response)
        {
            if (response.status >= 400) {
                throw response;
            }
            return response.json();
        });
    }

    /**
     * Выполняет DELETE-запрос по указанному адресу с использованием fetch
     * @param {string} address - адрес запроса
     * @param {*} body - тело запроса (объект)
     * @return {Promise}
     */
    static FetchDelete(address, body)
    {
        const url = (Http.BaseUrl || baseUrl) + address;
        return fetch(url,
            {
                method: 'DELETE',
                mode: 'cors',
                credentials: 'include',
                body: JSON.stringify(body),
                headers:
                    {
                        'Content-Type': 'application/json; charset=utf-8'
                    }
            }).then(function (response)
        {
            if (response.status >= 400) {
                throw response;
            }
            return response.json();
        });
    }
}

Http.BaseUrl = undefined;//"http://sea-battle-back.herokuapp.com/api";

export default Http;
