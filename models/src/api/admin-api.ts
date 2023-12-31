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
import { AdminInfo } from '../../src/model';
// @ts-ignore
import { AdminLoginFailException } from '../../src/model';
// @ts-ignore
import { KeyValueInfo } from '../../src/model';
// @ts-ignore
import { ResponseWithData } from '../../src/model';
// @ts-ignore
import { SessionExpiredException } from '../../src/model';
/**
 * AdminApi - axios parameter creator
 * @export
 */
export const AdminApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 관리자 42api application code 획득용 주소
         * @summary get 42api code API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        adminAuthLogin: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v3/admin/auth/code`;
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
         * 관리자 로그인 및 세션 생성
         * @summary admin login API
         * @param {AdminInfo} adminInfo 관리자 로그인용 Id 및 PWD
         * @param {} [UNKNOWN_PARAMETER_NAME] 관리자 세션 생성용 세션
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        adminLogin: async (adminInfo: AdminInfo, UNKNOWN_PARAMETER_NAME?: , options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'adminInfo' is not null or undefined
            assertParamExists('adminLogin', 'adminInfo', adminInfo)
            const localVarPath = `/v3/admin/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (UNKNOWN_PARAMETER_NAME !== undefined) {
                localVarQueryParameter['session'] = UNKNOWN_PARAMETER_NAME;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(adminInfo, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 관리자 로그아웃(세션 삭제)
         * @summary admin logout API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        adminLogout: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v3/admin/logout`;
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
         * 멤버 삭제시 사용하며 그룹 친구 정보 등 모두 삭제
         * @summary delete member API
         * @param {string} name 삭제할 멤버 이름
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteMember: async (name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteMember', 'name', name)
            const localVarPath = `/v3/admin/member`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 클러스터 아이맥에 로그인 해 있는 모든 카뎃들의 정보 갱신
         * @summary update all cadet in cluster API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAllInClusterCadet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v3/admin/incluster`;
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
         * 모든 카뎃들의 피신 시작일 삽입
         * @summary insert all cadet\'s piscine start date API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllCadetCreateAt: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v3/admin/createdAt`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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
         * 블랙홀 인원 제외 모든 카뎃들의 이미지 url 갱신 (새로운 기수 들어올 시 필수)
         * @summary reset all cadet\'s image API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllCadetImages: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v3/admin/image`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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
         * 관리자 access token DB 저장
         * @summary insert admin token API
         * @param {KeyValueInfo} keyValueInfo 42api 요청용 code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        insertAdminToken: async (keyValueInfo: KeyValueInfo, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'keyValueInfo' is not null or undefined
            assertParamExists('insertAdminToken', 'keyValueInfo', keyValueInfo)
            const localVarPath = `/v3/admin/auth/token`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(keyValueInfo, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 24hane access token DB 저장. 토큰 만료 시 24hane 담당자(현재 joopark)에게 연락하여 갱신
         * @summary insert 24hane token API
         * @param {KeyValueInfo} keyValueInfo 갱신할 토큰
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        insertHane: async (keyValueInfo: KeyValueInfo, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'keyValueInfo' is not null or undefined
            assertParamExists('insertHane', 'keyValueInfo', keyValueInfo)
            const localVarPath = `/v3/admin/hane/token`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(keyValueInfo, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 모든 플래시 데이터 초기화
         * @summary reset flash data API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetFlash: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v3/admin/flash`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * 관리자용 42api secret_id DB 갱신
         * @summary update secret_id for admin API
         * @param {KeyValueInfo} keyValueInfo 갱신할 secret id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAdminServerSecret: async (keyValueInfo: KeyValueInfo, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'keyValueInfo' is not null or undefined
            assertParamExists('updateAdminServerSecret', 'keyValueInfo', keyValueInfo)
            const localVarPath = `/v3/admin/secret-admin`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(keyValueInfo, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 사용자용 42api secret_id DB 갱신
         * @summary update secret_id for user API
         * @param {KeyValueInfo} keyValueInfo 갱신할 secret id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateServerSecret: async (keyValueInfo: KeyValueInfo, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'keyValueInfo' is not null or undefined
            assertParamExists('updateServerSecret', 'keyValueInfo', keyValueInfo)
            const localVarPath = `/v3/admin/secret-member`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(keyValueInfo, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AdminApi - functional programming interface
 * @export
 */
export const AdminApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AdminApiAxiosParamCreator(configuration)
    return {
        /**
         * 관리자 42api application code 획득용 주소
         * @summary get 42api code API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async adminAuthLogin(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.adminAuthLogin(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 관리자 로그인 및 세션 생성
         * @summary admin login API
         * @param {AdminInfo} adminInfo 관리자 로그인용 Id 및 PWD
         * @param {} [UNKNOWN_PARAMETER_NAME] 관리자 세션 생성용 세션
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async adminLogin(adminInfo: AdminInfo, UNKNOWN_PARAMETER_NAME?: , options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseWithData>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.adminLogin(adminInfo, UNKNOWN_PARAMETER_NAME, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 관리자 로그아웃(세션 삭제)
         * @summary admin logout API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async adminLogout(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseWithData>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.adminLogout(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 멤버 삭제시 사용하며 그룹 친구 정보 등 모두 삭제
         * @summary delete member API
         * @param {string} name 삭제할 멤버 이름
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteMember(name: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseWithData>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteMember(name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 클러스터 아이맥에 로그인 해 있는 모든 카뎃들의 정보 갱신
         * @summary update all cadet in cluster API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findAllInClusterCadet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseWithData>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findAllInClusterCadet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 모든 카뎃들의 피신 시작일 삽입
         * @summary insert all cadet\'s piscine start date API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllCadetCreateAt(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseWithData>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllCadetCreateAt(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 블랙홀 인원 제외 모든 카뎃들의 이미지 url 갱신 (새로운 기수 들어올 시 필수)
         * @summary reset all cadet\'s image API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllCadetImages(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseWithData>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllCadetImages(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 관리자 access token DB 저장
         * @summary insert admin token API
         * @param {KeyValueInfo} keyValueInfo 42api 요청용 code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async insertAdminToken(keyValueInfo: KeyValueInfo, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseWithData>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.insertAdminToken(keyValueInfo, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 24hane access token DB 저장. 토큰 만료 시 24hane 담당자(현재 joopark)에게 연락하여 갱신
         * @summary insert 24hane token API
         * @param {KeyValueInfo} keyValueInfo 갱신할 토큰
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async insertHane(keyValueInfo: KeyValueInfo, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseWithData>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.insertHane(keyValueInfo, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 모든 플래시 데이터 초기화
         * @summary reset flash data API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async resetFlash(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseWithData>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.resetFlash(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 관리자용 42api secret_id DB 갱신
         * @summary update secret_id for admin API
         * @param {KeyValueInfo} keyValueInfo 갱신할 secret id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateAdminServerSecret(keyValueInfo: KeyValueInfo, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseWithData>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateAdminServerSecret(keyValueInfo, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 사용자용 42api secret_id DB 갱신
         * @summary update secret_id for user API
         * @param {KeyValueInfo} keyValueInfo 갱신할 secret id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateServerSecret(keyValueInfo: KeyValueInfo, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseWithData>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateServerSecret(keyValueInfo, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AdminApi - factory interface
 * @export
 */
export const AdminApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AdminApiFp(configuration)
    return {
        /**
         * 관리자 42api application code 획득용 주소
         * @summary get 42api code API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        adminAuthLogin(options?: any): AxiosPromise<string> {
            return localVarFp.adminAuthLogin(options).then((request) => request(axios, basePath));
        },
        /**
         * 관리자 로그인 및 세션 생성
         * @summary admin login API
         * @param {AdminInfo} adminInfo 관리자 로그인용 Id 및 PWD
         * @param {} [UNKNOWN_PARAMETER_NAME] 관리자 세션 생성용 세션
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        adminLogin(adminInfo: AdminInfo, UNKNOWN_PARAMETER_NAME?: , options?: any): AxiosPromise<ResponseWithData> {
            return localVarFp.adminLogin(adminInfo, UNKNOWN_PARAMETER_NAME, options).then((request) => request(axios, basePath));
        },
        /**
         * 관리자 로그아웃(세션 삭제)
         * @summary admin logout API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        adminLogout(options?: any): AxiosPromise<ResponseWithData> {
            return localVarFp.adminLogout(options).then((request) => request(axios, basePath));
        },
        /**
         * 멤버 삭제시 사용하며 그룹 친구 정보 등 모두 삭제
         * @summary delete member API
         * @param {string} name 삭제할 멤버 이름
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteMember(name: string, options?: any): AxiosPromise<ResponseWithData> {
            return localVarFp.deleteMember(name, options).then((request) => request(axios, basePath));
        },
        /**
         * 클러스터 아이맥에 로그인 해 있는 모든 카뎃들의 정보 갱신
         * @summary update all cadet in cluster API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAllInClusterCadet(options?: any): AxiosPromise<ResponseWithData> {
            return localVarFp.findAllInClusterCadet(options).then((request) => request(axios, basePath));
        },
        /**
         * 모든 카뎃들의 피신 시작일 삽입
         * @summary insert all cadet\'s piscine start date API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllCadetCreateAt(options?: any): AxiosPromise<ResponseWithData> {
            return localVarFp.getAllCadetCreateAt(options).then((request) => request(axios, basePath));
        },
        /**
         * 블랙홀 인원 제외 모든 카뎃들의 이미지 url 갱신 (새로운 기수 들어올 시 필수)
         * @summary reset all cadet\'s image API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllCadetImages(options?: any): AxiosPromise<ResponseWithData> {
            return localVarFp.getAllCadetImages(options).then((request) => request(axios, basePath));
        },
        /**
         * 관리자 access token DB 저장
         * @summary insert admin token API
         * @param {KeyValueInfo} keyValueInfo 42api 요청용 code
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        insertAdminToken(keyValueInfo: KeyValueInfo, options?: any): AxiosPromise<ResponseWithData> {
            return localVarFp.insertAdminToken(keyValueInfo, options).then((request) => request(axios, basePath));
        },
        /**
         * 24hane access token DB 저장. 토큰 만료 시 24hane 담당자(현재 joopark)에게 연락하여 갱신
         * @summary insert 24hane token API
         * @param {KeyValueInfo} keyValueInfo 갱신할 토큰
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        insertHane(keyValueInfo: KeyValueInfo, options?: any): AxiosPromise<ResponseWithData> {
            return localVarFp.insertHane(keyValueInfo, options).then((request) => request(axios, basePath));
        },
        /**
         * 모든 플래시 데이터 초기화
         * @summary reset flash data API
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        resetFlash(options?: any): AxiosPromise<ResponseWithData> {
            return localVarFp.resetFlash(options).then((request) => request(axios, basePath));
        },
        /**
         * 관리자용 42api secret_id DB 갱신
         * @summary update secret_id for admin API
         * @param {KeyValueInfo} keyValueInfo 갱신할 secret id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAdminServerSecret(keyValueInfo: KeyValueInfo, options?: any): AxiosPromise<ResponseWithData> {
            return localVarFp.updateAdminServerSecret(keyValueInfo, options).then((request) => request(axios, basePath));
        },
        /**
         * 사용자용 42api secret_id DB 갱신
         * @summary update secret_id for user API
         * @param {KeyValueInfo} keyValueInfo 갱신할 secret id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateServerSecret(keyValueInfo: KeyValueInfo, options?: any): AxiosPromise<ResponseWithData> {
            return localVarFp.updateServerSecret(keyValueInfo, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AdminApi - object-oriented interface
 * @export
 * @class AdminApi
 * @extends {BaseAPI}
 */
export class AdminApi extends BaseAPI {
    /**
     * 관리자 42api application code 획득용 주소
     * @summary get 42api code API
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminApi
     */
    public adminAuthLogin(options?: AxiosRequestConfig) {
        return AdminApiFp(this.configuration).adminAuthLogin(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 관리자 로그인 및 세션 생성
     * @summary admin login API
     * @param {AdminInfo} adminInfo 관리자 로그인용 Id 및 PWD
     * @param {} [UNKNOWN_PARAMETER_NAME] 관리자 세션 생성용 세션
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminApi
     */
    public adminLogin(adminInfo: AdminInfo, UNKNOWN_PARAMETER_NAME?: , options?: AxiosRequestConfig) {
        return AdminApiFp(this.configuration).adminLogin(adminInfo, UNKNOWN_PARAMETER_NAME, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 관리자 로그아웃(세션 삭제)
     * @summary admin logout API
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminApi
     */
    public adminLogout(options?: AxiosRequestConfig) {
        return AdminApiFp(this.configuration).adminLogout(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 멤버 삭제시 사용하며 그룹 친구 정보 등 모두 삭제
     * @summary delete member API
     * @param {string} name 삭제할 멤버 이름
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminApi
     */
    public deleteMember(name: string, options?: AxiosRequestConfig) {
        return AdminApiFp(this.configuration).deleteMember(name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 클러스터 아이맥에 로그인 해 있는 모든 카뎃들의 정보 갱신
     * @summary update all cadet in cluster API
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminApi
     */
    public findAllInClusterCadet(options?: AxiosRequestConfig) {
        return AdminApiFp(this.configuration).findAllInClusterCadet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 모든 카뎃들의 피신 시작일 삽입
     * @summary insert all cadet\'s piscine start date API
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminApi
     */
    public getAllCadetCreateAt(options?: AxiosRequestConfig) {
        return AdminApiFp(this.configuration).getAllCadetCreateAt(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 블랙홀 인원 제외 모든 카뎃들의 이미지 url 갱신 (새로운 기수 들어올 시 필수)
     * @summary reset all cadet\'s image API
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminApi
     */
    public getAllCadetImages(options?: AxiosRequestConfig) {
        return AdminApiFp(this.configuration).getAllCadetImages(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 관리자 access token DB 저장
     * @summary insert admin token API
     * @param {KeyValueInfo} keyValueInfo 42api 요청용 code
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminApi
     */
    public insertAdminToken(keyValueInfo: KeyValueInfo, options?: AxiosRequestConfig) {
        return AdminApiFp(this.configuration).insertAdminToken(keyValueInfo, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 24hane access token DB 저장. 토큰 만료 시 24hane 담당자(현재 joopark)에게 연락하여 갱신
     * @summary insert 24hane token API
     * @param {KeyValueInfo} keyValueInfo 갱신할 토큰
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminApi
     */
    public insertHane(keyValueInfo: KeyValueInfo, options?: AxiosRequestConfig) {
        return AdminApiFp(this.configuration).insertHane(keyValueInfo, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 모든 플래시 데이터 초기화
     * @summary reset flash data API
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminApi
     */
    public resetFlash(options?: AxiosRequestConfig) {
        return AdminApiFp(this.configuration).resetFlash(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 관리자용 42api secret_id DB 갱신
     * @summary update secret_id for admin API
     * @param {KeyValueInfo} keyValueInfo 갱신할 secret id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminApi
     */
    public updateAdminServerSecret(keyValueInfo: KeyValueInfo, options?: AxiosRequestConfig) {
        return AdminApiFp(this.configuration).updateAdminServerSecret(keyValueInfo, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 사용자용 42api secret_id DB 갱신
     * @summary update secret_id for user API
     * @param {KeyValueInfo} keyValueInfo 갱신할 secret id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AdminApi
     */
    public updateServerSecret(keyValueInfo: KeyValueInfo, options?: AxiosRequestConfig) {
        return AdminApiFp(this.configuration).updateServerSecret(keyValueInfo, options).then((request) => request(this.axios, this.basePath));
    }
}

