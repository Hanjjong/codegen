/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../../base';
// @ts-ignore
import { ErrorResponse } from '../../src/model';
// @ts-ignore
import { Response } from '../../src/model';
/**
 * AuthApi - axios parameter creator
 * @export
 */
export const AuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 동의 페이지 접근 가능 여부
         * @summary permission API
         * @param {} [UNKNOWN_PARAMETER_NAME] key in Token
         * @param {string} [iD] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkAgree: async (UNKNOWN_PARAMETER_NAME?: , iD?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v3/auth/permission`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 비로그인, 세션없는 유저 로그인 확인
         * @summary login API
         * @param {} [UNKNOWN_PARAMETER_NAME] key in Token
         * @param {string} [iD] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login: async (UNKNOWN_PARAMETER_NAME?: , iD?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v3/auth/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 로그아웃
         * @summary logout API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logout: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v3/auth/auth/logout`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 42api Access Token발급
         * @summary makeToken API
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        makeToken: async (body: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            assertParamExists('makeToken', 'body', body)
            const localVarPath = `/v3/auth/token`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthApi - functional programming interface
 * @export
 */
export const AuthApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthApiAxiosParamCreator(configuration)
    return {
        /**
         * 동의 페이지 접근 가능 여부
         * @summary permission API
         * @param {} [UNKNOWN_PARAMETER_NAME] key in Token
         * @param {string} [iD] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async checkAgree(UNKNOWN_PARAMETER_NAME?: , iD?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkAgree(UNKNOWN_PARAMETER_NAME, iD, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 비로그인, 세션없는 유저 로그인 확인
         * @summary login API
         * @param {} [UNKNOWN_PARAMETER_NAME] key in Token
         * @param {string} [iD] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async login(UNKNOWN_PARAMETER_NAME?: , iD?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.login(UNKNOWN_PARAMETER_NAME, iD, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 로그아웃
         * @summary logout API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async logout(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.logout(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 42api Access Token발급
         * @summary makeToken API
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async makeToken(body: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.makeToken(body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthApi - factory interface
 * @export
 */
export const AuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthApiFp(configuration)
    return {
        /**
         * 동의 페이지 접근 가능 여부
         * @summary permission API
         * @param {} [UNKNOWN_PARAMETER_NAME] key in Token
         * @param {string} [iD] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkAgree(UNKNOWN_PARAMETER_NAME?: , iD?: string, options?: any): AxiosPromise<Response> {
            return localVarFp.checkAgree(UNKNOWN_PARAMETER_NAME, iD, options).then((request) => request(axios, basePath));
        },
        /**
         * 비로그인, 세션없는 유저 로그인 확인
         * @summary login API
         * @param {} [UNKNOWN_PARAMETER_NAME] key in Token
         * @param {string} [iD] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        login(UNKNOWN_PARAMETER_NAME?: , iD?: string, options?: any): AxiosPromise<Response> {
            return localVarFp.login(UNKNOWN_PARAMETER_NAME, iD, options).then((request) => request(axios, basePath));
        },
        /**
         * 로그아웃
         * @summary logout API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logout(options?: any): AxiosPromise<Response> {
            return localVarFp.logout(options).then((request) => request(axios, basePath));
        },
        /**
         * 42api Access Token발급
         * @summary makeToken API
         * @param {string} body 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        makeToken(body: string, options?: any): AxiosPromise<Response> {
            return localVarFp.makeToken(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export class AuthApi extends BaseAPI {
    /**
     * 동의 페이지 접근 가능 여부
     * @summary permission API
     * @param {} [UNKNOWN_PARAMETER_NAME] key in Token
     * @param {string} [iD] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public checkAgree(UNKNOWN_PARAMETER_NAME?: , iD?: string, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).checkAgree(UNKNOWN_PARAMETER_NAME, iD, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 비로그인, 세션없는 유저 로그인 확인
     * @summary login API
     * @param {} [UNKNOWN_PARAMETER_NAME] key in Token
     * @param {string} [iD] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public login(UNKNOWN_PARAMETER_NAME?: , iD?: string, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).login(UNKNOWN_PARAMETER_NAME, iD, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 로그아웃
     * @summary logout API
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public logout(options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).logout(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 42api Access Token발급
     * @summary makeToken API
     * @param {string} body 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    public makeToken(body: string, options?: AxiosRequestConfig) {
        return AuthApiFp(this.configuration).makeToken(body, options).then((request) => request(this.axios, this.basePath));
    }
}

