## Documentation

You can see below the API reference of this module.

### `Karix(options)`
Creates the instance of the `Karix` class.

#### Params

- **Object** `options`: An object containing:
 - `accountId` (String): Karix Account ID (mandatory).
 - `accountToken` (String): Karix Account Token  (mandatory)
 - `host` (String): The `karix.io` host (default: `https://api.karix.io/`).

### `createSubaccount(data, cb)`
Create a new subaccount

#### Params

- **Object** `data`: The Subaccount object as documented [here](http://docs.karix.io/v2/#operation/createSubaccount).
- **Function** `cb`: The callback function.

### `getSubaccount(params, cb)`
Get a list of details of all subaccounts, including the main account.

#### Params

- **Object** `params`: The query params as documented [here](http://docs.karix.io/v2/#operation/getSubaccount).
- **Function** `cb`: The callback function.

### `getSubaccountById(uid, cb)`
Get details of an account by its uid. Both main account and subaccounts can be fetched using their uids.

#### Params

- **String** `uid`: Alphanumeric ID of the subaccount to get.
- **Function** `cb`: The callback function.

### `patchSubaccount(uid, data, cb)`
Edit details of your account or its subaccount

#### Params

- **String** `uid`: Alphanumeric ID of the subaccount to edit.
- **Object** `data`: The Subaccount object (documented [here](http://docs.karix.io/v2/#operation/patchSubaccount)).
- **Function** `cb`: The callback function.

### `sendMessage(data, cb)`
Send a message to a list of destinations.

#### Params

- **Object** `data`: The Create Message object data (documented [here](http://docs.karix.io/v2/#operation/sendMessage)).
- **Function** `cb`: The callback function.

### `getMessage(params, cb)`
Get list of messages sent or received. Sorted by descending order of created_time (latest messages are first)

#### Params

- **Object** `params`: The query params (documented [here](http://docs.karix.io/v2/#operation/getMessage)).
- **Function** `cb`: The callback function.

### `getMessageById(uid, cb)`
Get message details by id.

#### Params

- **String** `uid`: Alphanumeric ID of the message to get.
- **Function** `cb`: The callback function.

### `getMedia(uid, cb)`
Download or Stream media by id

#### Params

- **String** `uid`: Alphanumeric ID of the media to get.
- **Function** `cb`: The callback function.

### `createWebhook(data, cb)`
Create webhooks to receive Message

#### Params

- **Object** `data`: The Create Webhook object (documented [here](http://docs.karix.io/v2/#operation/createWebhook)).
- **Function** `cb`: The callback function.

### `getWebhook(params, cb)`
Get a list of your webhooks

#### Params

- **Object** `params`: The query params (documented [here](http://docs.karix.io/v2/#operation/getWebhook)).
- **Function** `cb`: The callback function.

### `getWebhookById(uid, cb)`
Get a webhook by ID

#### Params

- **Object** `params`: Alphanumeric ID of the webhook to get.
- **Function** `cb`: The callback function.

### `patchWebhook(uid, data, cb)`
Edit a webhook

#### Params

- **String** `uid`: Alphanumeric ID of the webhook to edit.
- **Object** `data`: The request body (documented [here](http://docs.karix.io/v2/#operation/patchWebhook)).
- **Function** `cb`: The callback function.

### `deleteWebhookById(uid, cb)`
Delete a webhook by ID

#### Params

- **String** `uid`: Alphanumeric ID of the webhook to delete.
- **Function** `cb`: The callback function.

### `numberSearch(params, cb)`
Query for phone numbers in our inventory.

#### Params

- **Object** `params`: The query params (documented [here](http://docs.karix.io/v2/#tag/NumberSearch%2Fpaths%2F~1numbersearch~1%2Fget)).
- **Function** `cb`: The callback function.

### `rentNumber(data, cb)`
Rent a phone number

#### Params

- **Object** `data`: The Rent Details object (documented [here](http://docs.karix.io/v2/#operation/rentNumber)).
- **Function** `cb`: The callback function.

### `getNumber(params, cb)`
Get details of all phone numbers linked to your account.

#### Params

- **Object** `params`: The query params data (documented [here](http://docs.karix.io/v2/#operation/getNumber)).
- **Function** `cb`: The callback function.

### `number(number, cb)`
Get details of a number

#### Params

- **Integer** `number`: Number for which details need to be fetched.
- **Function** `cb`: The callback function.

### `patchNumber(number, data, cb)`
Edit phone number belonging to your account

#### Params

- **Integer** `number`: Number which needs to be edited.
- **Object** `data`: The request body object (documented [here](http://docs.karix.io/v2/#tag/Number%2Fpaths%2F~1number~1%7Bnum%7D~1%2Fget)).
- **Function** `cb`: The callback function.

### `unrentNumber(number, cb)`
Unrent number from your account

#### Params

- **Integer** `number`: Number which needs to be unrented.
- **Function** `cb`: The callback function.

