"use strict";

const Karix = require("../lib");

var client = new Karix({
    accountId: process.env.KARIX_ACCOUNT_ID
  , accountToken: process.env.KARIX_ACCOUNT_TOKEN

    // This is optional
  , host: process.env.KARIX_HOST || "https://api.karix.io/"
});

client.getSubaccount({},(err, data) => {
    console.log(err || data);
    // =>
    // {
    //  "objects": [
    //      {
    //      "name": "Beth Smith",
    //      "status": "enabled",
    //      "uid": "7fea9708-ea28-42e9-871f-a07fe7cef72f",
    //      "token": "e664221d-4aed-415b-929b-7edf887e4680",
    //      "is_parent": false,
    //      "created_time": "2017-08-04T09:59:29.660Z",
    //      "updated_time": "2017-08-05T09:59:29.660Z",
    //      "account_type": "prepaid",
    //      "credit_balance": "127.33",
    //      "auto_recharge": false
    //      }
    //  ],
    //  "meta": {
    //      "request_uuid": "e54b13f5-0831-40f1-959f-e9c5a8ff2957",
    //      "next": "https://api.karix.co/<resource>/?limit=10&offset=10",
    //      "previous": "string",
    //      "total": 1
    //  }
    //  }
});

client.getSubaccountById("7fea9708-ea28-42e9-871f-a07fe7cef72f", (err, data) => {
    console.log(err || data);
    // =>
    //  {
    //      "meta": {
    //          "request_uuid": "e54b13f5-0831-40f1-959f-e9c5a8ff2957"
    //      },
    //      "data": {
    //          "name": "Beth Smith",
    //          "status": "enabled",
    //          "uid": "7fea9708-ea28-42e9-871f-a07fe7cef72f",
    //          "token": "e664221d-4aed-415b-929b-7edf887e4680",
    //          "is_parent": false,
    //          "created_time": "2017-08-04T09:59:29.660Z",
    //          "updated_time": "2017-08-05T09:59:29.660Z",
    //          "account_type": "prepaid",
    //          "credit_balance": "127.33",
    //          "auto_recharge": false
    //      }
    //  }
});