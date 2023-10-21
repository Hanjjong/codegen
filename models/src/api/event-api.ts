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
import { ResponseWithData } from '../../src/model';
/**
 * EventApi - axios parameter creator
 * @export
 */
export const EventApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 이벤트 param 및 당첨 결과 확인
         * @summary checkEvent API
         * @param {string} param 확인할 이벤트 param
         * @param {} [UNKNOWN_PARAMETER_NAME] key in Token
         * @param {string} [iD] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkEvent: async (param: string, UNKNOWN_PARAMETER_NAME?: , iD?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'param' is not null or undefined
            assertParamExists('checkEvent', 'param', param)
            const localVarPath = `/v3/event/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (param !== undefined) {
                localVarQueryParameter['param'] = param;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EventApi - functional programming interface
 * @export
 */
export const EventApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EventApiAxiosParamCreator(configuration)
    return {
        /**
         * 이벤트 param 및 당첨 결과 확인
         * @summary checkEvent API
         * @param {string} param 확인할 이벤트 param
         * @param {} [UNKNOWN_PARAMETER_NAME] key in Token
         * @param {string} [iD] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async checkEvent(param: string, UNKNOWN_PARAMETER_NAME?: , iD?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseWithData>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkEvent(param, UNKNOWN_PARAMETER_NAME, iD, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EventApi - factory interface
 * @export
 */
export const EventApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EventApiFp(configuration)
    return {
        /**
         * 이벤트 param 및 당첨 결과 확인
         * @summary checkEvent API
         * @param {string} param 확인할 이벤트 param
         * @param {} [UNKNOWN_PARAMETER_NAME] key in Token
         * @param {string} [iD] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkEvent(param: string, UNKNOWN_PARAMETER_NAME?: , iD?: string, options?: any): AxiosPromise<ResponseWithData> {
            return localVarFp.checkEvent(param, UNKNOWN_PARAMETER_NAME, iD, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EventApi - object-oriented interface
 * @export
 * @class EventApi
 * @extends {BaseAPI}
 */
export class EventApi extends BaseAPI {
    /**
     * 이벤트 param 및 당첨 결과 확인
     * @summary checkEvent API
     * @param {string} param 확인할 이벤트 param
     * @param {} [UNKNOWN_PARAMETER_NAME] key in Token
     * @param {string} [iD] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventApi
     */
    public checkEvent(param: string, UNKNOWN_PARAMETER_NAME?: , iD?: string, options?: AxiosRequestConfig) {
        return EventApiFp(this.configuration).checkEvent(param, UNKNOWN_PARAMETER_NAME, iD, options).then((request) => request(this.axios, this.basePath));
    }
}

