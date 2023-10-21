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


// May contain unused imports in some cases
// @ts-ignore
import { SessionExpiredExceptionCause } from './session-expired-exception-cause';
// May contain unused imports in some cases
// @ts-ignore
import { SessionExpiredExceptionCauseStackTraceInner } from './session-expired-exception-cause-stack-trace-inner';
// May contain unused imports in some cases
// @ts-ignore
import { SessionExpiredExceptionCauseSuppressedInner } from './session-expired-exception-cause-suppressed-inner';

/**
 * 
 * @export
 * @interface SessionExpiredException
 */
export interface SessionExpiredException {
    /**
     * 
     * @type {SessionExpiredExceptionCause}
     * @memberof SessionExpiredException
     */
    'cause'?: SessionExpiredExceptionCause;
    /**
     * 
     * @type {Array<SessionExpiredExceptionCauseStackTraceInner>}
     * @memberof SessionExpiredException
     */
    'stackTrace'?: Array<SessionExpiredExceptionCauseStackTraceInner>;
    /**
     * 
     * @type {number}
     * @memberof SessionExpiredException
     */
    'errorCode'?: number;
    /**
     * 
     * @type {string}
     * @memberof SessionExpiredException
     */
    'message'?: string;
    /**
     * 
     * @type {Array<SessionExpiredExceptionCauseSuppressedInner>}
     * @memberof SessionExpiredException
     */
    'suppressed'?: Array<SessionExpiredExceptionCauseSuppressedInner>;
    /**
     * 
     * @type {string}
     * @memberof SessionExpiredException
     */
    'localizedMessage'?: string;
}

