"use strict";

const request = require("request")
    , querystring = require("querystring")
    ;

module.exports = class Karix {
    /**
     * Karix
     * Creates the instance of the `Karix` class.
     *
     * @name Karix
     * @function
     * @param {Object} options An object containing:
     *
     *  - `accountId` (String): Karix Account ID (mandatory).
     *  - `accountToken` (String): Karix Account Token (mandatory)
     *  - `host` (String): The `karix.io` host (default: `https://api.karix.io/`).
     */
    constructor (options) {
        this.options = options;
        this.accountId = options.accountId;
        this.accountToken = options.accountToken;
        this.host = options.host || "https://api.karix.io/";
        this.version = options.version || "2.0";
    }

    /**
     * createSubaccount
     * Create a new subaccount
     *
     * @name createSubaccount
     * @function
     * @param {Object} data The Subaccount object as documented [here](http://docs.karix.io/v2/#operation/createSubaccount).
     * @param {Function} cb The callback function.
     */
    createSubaccount (data, cb) {
        return this._request({
            url: "account"
          , method: "POST"
          , data: data
        }, cb);
    }

    /**
     * getSubaccount
     * Get a list of details of all subaccounts
     *
     * @name getSubaccount
     * @function
     * @param {Object} params The query params as documented [here](http://docs.karix.io/v2/#operation/getSubaccount).
     * @param {Function} cb The callback function.
     */
    getSubaccount (params, cb) {
        return this._request({
            url: "account"
          , method: "GET"
          , params: params
        }, cb);
    }

    /**
     * getSubaccountById
     * Get details of an account by its uid.
     *
     * @name getSubaccountById
     * @function
     * @param {Integer} uid Alphanumeric ID of the subaccount to get.
     * @param {Function} cb The callback function.
     */
    getSubaccountById (uid, cb) {
        return this._request({
            url: `account/${uid}`
          , method: "GET"
        }, cb);
    }

    /**
     * patchSubaccount
     * Edit details of your account or its subaccount
     *
     * @name patchSubaccount
     * @function
     * @param {String} uid Alphanumeric ID of the subaccount to edit.
     * @param {Object} data The Subaccount object as documented [here](http://docs.karix.io/v2/#operation/createSubaccount).
     * @param {Function} cb The callback function.
     */
    patchSubaccount (uid, data, cb) {
        return this._request({
            url: `account/${uid}`
          , method: "PATCH"
          , data: data
        }, cb);
    }

    /**
     * sendMessage
     * Send a message to a list of destinations.
     *
     * @name sendMessage
     * @function
     * @param {Object} data The Create Message object data (documented [here](http://docs.karix.io/v2/#operation/sendMessage)).
     * @param {Function} cb The callback function.
    */
    sendMessage (data, cb) {
        return this._request({
            url: 'message'
          , method: "POST"
          , data: data
        }, cb);
    }

    /**
     * getMessage
     * Get list of messages sent or received.
     *
     * @name getMessage
     * @function
     * @param {Object} params The query params as documented [here](http://docs.karix.io/v2/#operation/getMessage).
     * @param {Function} cb The callback function.
     */
    getMessage (params, cb) {
        return this._request({
            url: "message"
          , method: "GET"
          , params: params
        }, cb);
    }

    /**
     * getMessageById
     * Get details of an account by its uid.
     *
     * @name getMessageById
     * @function
     * @param {Integer} uid Alphanumeric ID of the message to get.
     * @param {Function} cb The callback function.
     */
    getMessageById (uid, cb) {
        return this._request({
            url: `message/${uid}`
          , method: "GET"
        }, cb);
    }

    /**
     * getMedia
     * Download or Stream media by id
     *
     * @name getMedia
     * @function
     * @param {Integer} uid Alphanumeric ID of the media to get.
     * @param {Function} cb The callback function.
     */
    getMedia (uid, cb) {
        return this._request({
            url: `media/${uid}`
          , method: "GET"
        }, cb);
    }

    /**
     * createWebhook
     * Create webhooks to receive Message.
     *
     * @name createWebhook
     * @function
     * @param {Object} data The Create Webhook object data (documented [here](http://docs.karix.io/v2/#operation/createWebhook)).
     * @param {Function} cb The callback function.
    */
    createWebhook (data, cb) {
        return this._request({
            url: 'webhook'
          , method: "POST"
          , data: data
        }, cb);
    }

    /**
     * getWebhook
     * Get a list of your webhooks
     *
     * @name getWebhook
     * @function
     * @param {Object} params The query params as documented [here](http://docs.karix.io/v2/#operation/getWebhook).
     * @param {Function} cb The callback function.
     */
    getWebhook (params, cb) {
        return this._request({
            url: "webhook"
          , method: "GET"
          , params: params
        }, cb);
    }

    /**
     * getWebhookById
     * Get a webhook by ID
     *
     * @name getWebhookById
     * @function
     * @param {Integer} uid Alphanumeric ID of the webhook to get.
     * @param {Function} cb The callback function.
     */
    getWebhookById (uid, cb) {
        return this._request({
            url: `webhook/${uid}`
          , method: "GET"
        }, cb);
    }

    /**
     * patchWebhook
     * Edit a webhook
     *
     * @name patchWebhook
     * @function
     * @param {String} uid Alphanumeric ID of the webhook to edit.
     * @param {Object} data The webhook object as documented [here](http://docs.karix.io/v2/#operation/patchWebhook).
     * @param {Function} cb The callback function.
     */
    patchWebhook (uid, data, cb) {
        return this._request({
            url: `webhook/${uid}`
          , method: "PATCH"
          , data: data
        }, cb);
    }

    /**
     * deleteWebhookById
     * Delete a webhook by ID.
     *
     * @name deleteWebhookById
     * @function
     * @param {Integer} uid Alphanumeric ID of the webhook to delete.
     * @param {Function} cb The callback function.
     */
    deleteWebhookById (uid, cb) {
        return this._request({
            url: `webhook/${uid}`
          , method: "DELETE"
        }, cb);
    }

    /**
     * numberSearch
     * Query for phone numbers in our inventory.
     *
     * @name numberSearch
     * @function
     * @param {Object} params The query params (documented [here](http://docs.karix.io/v2/#tag/NumberSearch%2Fpaths%2F~1numbersearch~1%2Fget)).
     * @param {Function} cb The callback function.
     */
    numberSearch (params, cb) {
        return this._request({
            url: "numbersearch"
          , method: "GET"
          , params: params
        }, cb);
    }

    /**
     * rentNumber
     * Rent a phone number
     *
     * @name rentNumber
     * @function
     * @param {Object} data The Rent Details object (documented [here](http://docs.karix.io/v2/#operation/rentNumber)).
     * @param {Function} cb The callback function.
    */
    rentNumber (data, cb) {
        return this._request({
            url: 'number'
          , method: "POST"
          , data: data
        }, cb);
    }

    /**
     * getNumber
     * Get details of all phone numbers linked to your account.
     *
     * @name getNumber
     * @function
     * @param {Object} params The query params (documented [here](http://docs.karix.io/v2/#operation/getNumber)).
     * @param {Function} cb The callback function.
     */
    getNumber (params, cb) {
        return this._request({
            url: "number"
          , method: "GET"
          , params: params
        }, cb);
    }

     /**
     * number
     * Get details of a number
     *
     * @name number
     * @function
     * @param {Integer} number Number for which details need to be fetched.
     * @param {Function} cb The callback function.
     */
    number (number, cb) {
        return this._request({
            url: `number/${number}`
          , method: "GET"
        }, cb);
    }

    /**
     * patchNumber
     * Edit phone number belonging to your account
     *
     * @name patchNumber
     * @function
     * @param {Integer} number Number for which details need to be fetched.
     * @param {Object} data The Account Number object as documented [here](http://docs.karix.io/v2/#operation/patchNumber).
     * @param {Function} cb The callback function.
     */
    patchNumber (number, data, cb) {
        return this._request({
            url: `number/${number}`
          , method: "PATCH"
          , data: data
        }, cb);
    }

    /**
     * unrentNumber
     * Unrent number from your account

     *
     * @name unrentNumber
     * @function
     * @param {Integer} number Number for which need to be unrented.
     * @param {Function} cb The callback function.
     */
    unrentNumber (number, cb) {
        return this._request({
            url: `number/${number}`
          , method: "GET"
        }, cb);
    }



    /**
     * _request
     * Low level function for making requests to the API endpoints.
     *
     * @name _request
     * @function
     * @param {Object} options An object containing the following fields:
     *
     *  - `url` (String): The api endpoint.
     *  - `method` (String): The request method (default: `get`).
     *  - `params` (Object): The params object.
     *  - `data` (Object): The POST data object.
     *  - `version` (String): API Version. If not specified your pinned verison is used.
     *
     * @param {Function} cb The callback function.
     */
    _request (options, cb) {

        let _url = options.url
          , auth = 'Basic ' + new Buffer(this.accountId + ':' + this.accountToken).toString('base64')
          , method = options.method || "get"
          , params = options.params || {}
          , data = options.data
          , qs = querystring.stringify(params)
          , removeTrailingSlash = options.removeTrailingSlash || false
          , url = this.host+ "/" + _url + (removeTrailingSlash ? "" : "/") + (qs ? "?" + qs : "")
          ;

        return request({
            url: url
          , method: method
          , headers: {
              'api-version': this.version
            , 'Authorization': auth
            , 'Content-Type': 'application/json'
            }
          , json: data ? data : true
        }, (err, res) => {
            if (res.body && res.body.error) {
                err = new Error(res.body.error.message);
            }
            if (err) { return cb(err, null, res); }
            cb(null, res.body, res);
        })
    }
};