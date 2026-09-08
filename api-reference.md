# Reference

> Source: [SquareClient](src/client.ts)

## OAuth

> Source: [OAuth](src/resources/oauth.ts)

<details>
<summary><code>obtainToken(request: OAuth.ObtainTokenRequestParams, options?: RequestOptions): ApiPromise&lt;ObtainTokenResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns an OAuth access token and refresh token using the `authorization_code`
or `refresh_token` grant type.

When `grant_type` is `authorization_code`:
- With the [code flow](https://developer.squareup.com/docs/oauth-api/overview#code-flow),
provide `code`, `client_id`, and `client_secret`.
- With the [PKCE flow](https://developer.squareup.com/docs/oauth-api/overview#pkce-flow),
provide `code`, `client_id`, and `code_verifier`. 

When `grant_type` is `refresh_token`:
- With the code flow, provide `refresh_token`, `client_id`, and `client_secret`.
The response returns the same refresh token provided in the request.
- With the PKCE flow, provide `refresh_token` and `client_id`. The response returns
a new refresh token.

You can use the `scopes` parameter to limit the set of permissions authorized by the
access token. You can use the `short_lived` parameter to create an access token that
expires in 24 hours.

__Important:__ OAuth tokens should be encrypted and stored on a secure server.
Application clients should never interact directly with OAuth tokens.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oAuth.obtainToken({ body });
  // TODO: Handle 'response' of type ObtainTokenResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuth.obtainToken({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ObtainTokenResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[ObtainTokenRequest](src/models/obtain-token-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuth.obtainToken(request)`

- **OnSuccess**: <code>[ObtainTokenResponse](src/models/obtain-token-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.oAuth.obtainToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ObtainTokenResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ObtainTokenResponse](src/models/obtain-token-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveTokenStatus(options?: RequestOptions): ApiPromise&lt;RetrieveTokenStatusResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns information about an [OAuth access token](https://developer.squareup.com/docs/build-basics/access-tokens#get-an-oauth-access-token) or an application’s [personal access token](https://developer.squareup.com/docs/build-basics/access-tokens#get-a-personal-access-token).

Add the access token to the Authorization header of the request.

__Important:__ The `Authorization` header you provide to this endpoint must have the following format:

```
Authorization: Bearer ACCESS_TOKEN
```

where `ACCESS_TOKEN` is a
[valid production authorization credential](https://developer.squareup.com/docs/build-basics/access-tokens).

If the access token is expired or not a valid access token, the endpoint returns an `UNAUTHORIZED` error.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oAuth.retrieveTokenStatus();
  // TODO: Handle 'response' of type RetrieveTokenStatusResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuth.retrieveTokenStatus().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveTokenStatusResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuth.retrieveTokenStatus()`

- **OnSuccess**: <code>[RetrieveTokenStatusResponse](src/models/retrieve-token-status-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.oAuth.retrieveTokenStatus().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveTokenStatusResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveTokenStatusResponse](src/models/retrieve-token-status-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>revokeToken(request: OAuth.RevokeTokenRequestParams, options?: RequestOptions): ApiPromise&lt;RevokeTokenResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Revokes an access token generated with the OAuth flow.

If an account has more than one OAuth access token for your application, this
endpoint revokes all of them, regardless of which token you specify. 

__Important:__ The `Authorization` header for this endpoint must have the
following format:

```
Authorization: Client APPLICATION_SECRET
```

Replace `APPLICATION_SECRET` with the application secret on the **OAuth**
page for your application in the Developer Dashboard.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.oAuth.revokeToken({ body });
  // TODO: Handle 'response' of type RevokeTokenResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.oAuth.revokeToken({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RevokeTokenResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RevokeTokenRequest](src/models/revoke-token-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.oAuth.revokeToken(request)`

- **OnSuccess**: <code>[RevokeTokenResponse](src/models/revoke-token-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.oAuth.revokeToken(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RevokeTokenResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RevokeTokenResponse](src/models/revoke-token-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## V1Transactions

> Source: [V1Transactions](src/resources/v1-transactions.ts)

<details>
<summary><code>v1ListOrders(request: V1Transactions.V1ListOrdersRequest, options?: RequestOptions): ApiPromise&lt;V1Order[], ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides summary information for a merchant's online store orders.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.v1Transactions.v1ListOrders({ locationId });
  // TODO: Handle 'response' of type V1Order[]
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.v1Transactions.v1ListOrders({ locationId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1Order[]
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locationId</code> | <code>string</code> | The ID of the location to list online store orders for. |
| <code>order?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | The order in which payments are listed in the response. |
| <code>limit?</code> | <code>number</code> | The maximum number of payments to return in a single response. This value cannot exceed 200. |
| <code>batchToken?</code> | <code>string</code> | A pagination cursor to retrieve the next set of results for your<br>original query to the endpoint. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.v1Transactions.v1ListOrders(request)`

- **OnSuccess**: <code>[V1Order](src/models/v1-order.ts)[]</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.v1Transactions.v1ListOrders(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1Order[], ResponseError&gt;</code>, with `result.value` of type <code>[V1Order](src/models/v1-order.ts)[]</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1RetrieveOrder(request: V1Transactions.V1RetrieveOrderRequest, options?: RequestOptions): ApiPromise&lt;V1Order, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides comprehensive information for a single online store order, including the order's history.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.v1Transactions.v1RetrieveOrder({ locationId, orderId });
  // TODO: Handle 'response' of type V1Order
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.v1Transactions.v1RetrieveOrder({ locationId, orderId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1Order
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locationId</code> | <code>string</code> | The ID of the order's associated location. |
| <code>orderId</code> | <code>string</code> | The order's Square-issued ID. You obtain this value from Order objects returned by the List Orders endpoint |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.v1Transactions.v1RetrieveOrder(request)`

- **OnSuccess**: <code>[V1Order](src/models/v1-order.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.v1Transactions.v1RetrieveOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1Order, ResponseError&gt;</code>, with `result.value` of type <code>[V1Order](src/models/v1-order.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>v1UpdateOrder(request: V1Transactions.V1UpdateOrderRequestParams, options?: RequestOptions): ApiPromise&lt;V1Order, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the details of an online store order. Every update you perform on an order corresponds to one of three actions:

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.v1Transactions.v1UpdateOrder({ locationId, orderId, body });
  // TODO: Handle 'response' of type V1Order
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.v1Transactions.v1UpdateOrder({ locationId, orderId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type V1Order
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locationId</code> | <code>string</code> | The ID of the order's associated location. |
| <code>orderId</code> | <code>string</code> | The order's Square-issued ID. You obtain this value from Order objects returned by the List Orders endpoint |
| <code>body</code> | <code>[V1UpdateOrderRequest](src/models/v1-update-order-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.v1Transactions.v1UpdateOrder(request)`

- **OnSuccess**: <code>[V1Order](src/models/v1-order.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.v1Transactions.v1UpdateOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;V1Order, ResponseError&gt;</code>, with `result.value` of type <code>[V1Order](src/models/v1-order.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## ApplePay

> Source: [ApplePay](src/resources/apple-pay.ts)

<details>
<summary><code>registerDomain(request: ApplePay.RegisterDomainRequestParams, options?: RequestOptions): ApiPromise&lt;RegisterDomainResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Activates a domain for use with Apple Pay on the Web and Square. A validation
is performed on this domain by Apple to ensure that it is properly set up as
an Apple Pay enabled domain.

This endpoint provides an easy way for platform developers to bulk activate
Apple Pay on the Web with Square for merchants using their platform.

Note: You will need to host a valid domain verification file on your domain to support Apple Pay.  The
current version of this file is always available at https://app.squareup.com/digital-wallets/apple-pay/apple-developer-merchantid-domain-association,
and should be hosted at `.well_known/apple-developer-merchantid-domain-association` on your
domain.  This file is subject to change; we strongly recommend checking for updates regularly and avoiding
long-lived caches that might not keep in sync with the correct file version.

To learn more about the Web Payments SDK and how to add Apple Pay, see [Take an Apple Pay Payment](https://developer.squareup.com/docs/web-payments/apple-pay).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.applePay.registerDomain({ body });
  // TODO: Handle 'response' of type RegisterDomainResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.applePay.registerDomain({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RegisterDomainResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RegisterDomainRequest](src/models/register-domain-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.applePay.registerDomain(request)`

- **OnSuccess**: <code>[RegisterDomainResponse](src/models/register-domain-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.applePay.registerDomain(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RegisterDomainResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RegisterDomainResponse](src/models/register-domain-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BankAccounts

> Source: [BankAccounts](src/resources/bank-accounts.ts)

<details>
<summary><code>createBankAccount(request: BankAccounts.CreateBankAccountRequestParams, options?: RequestOptions): ApiPromise&lt;CreateBankAccountResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Store a bank account on file for a square account

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bankAccounts.createBankAccount({ body });
  // TODO: Handle 'response' of type CreateBankAccountResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bankAccounts.createBankAccount({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateBankAccountResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateBankAccountRequest](src/models/create-bank-account-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bankAccounts.createBankAccount(request)`

- **OnSuccess**: <code>[CreateBankAccountResponse](src/models/create-bank-account-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bankAccounts.createBankAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateBankAccountResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateBankAccountResponse](src/models/create-bank-account-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>disableBankAccount(request: BankAccounts.DisableBankAccountRequest, options?: RequestOptions): ApiPromise&lt;DisableBankAccountResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disable a bank account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bankAccounts.disableBankAccount({ bankAccountId });
  // TODO: Handle 'response' of type DisableBankAccountResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bankAccounts.disableBankAccount({ bankAccountId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DisableBankAccountResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bankAccountId</code> | <code>string</code> | The ID of the bank account to disable. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bankAccounts.disableBankAccount(request)`

- **OnSuccess**: <code>[DisableBankAccountResponse](src/models/disable-bank-account-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bankAccounts.disableBankAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DisableBankAccountResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DisableBankAccountResponse](src/models/disable-bank-account-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBankAccount(request: BankAccounts.GetBankAccountRequest, options?: RequestOptions): ApiPromise&lt;GetBankAccountResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve details of a [BankAccount](entity:BankAccount) bank account linked to a Square account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bankAccounts.getBankAccount({ bankAccountId });
  // TODO: Handle 'response' of type GetBankAccountResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bankAccounts.getBankAccount({ bankAccountId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetBankAccountResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bankAccountId</code> | <code>string</code> | Square-issued ID of the desired `BankAccount`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bankAccounts.getBankAccount(request)`

- **OnSuccess**: <code>[GetBankAccountResponse](src/models/get-bank-account-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bankAccounts.getBankAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetBankAccountResponse, ResponseError&gt;</code>, with `result.value` of type <code>[GetBankAccountResponse](src/models/get-bank-account-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBankAccountByV1Id(request: BankAccounts.GetBankAccountByV1IdRequest, options?: RequestOptions): ApiPromise&lt;GetBankAccountByV1IdResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details of a [BankAccount](entity:BankAccount) identified by V1 bank account ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bankAccounts.getBankAccountByV1Id({ v1BankAccountId });
  // TODO: Handle 'response' of type GetBankAccountByV1IdResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bankAccounts.getBankAccountByV1Id({ v1BankAccountId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetBankAccountByV1IdResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>v1BankAccountId</code> | <code>string</code> | Connect V1 ID of the desired `BankAccount`. For more information, see <br>[Retrieve a bank account by using an ID issued by V1 Bank Accounts API](https://developer.squareup.com/docs/bank-accounts-api#retrieve-a-bank-account-by-using-an-id-issued-by-v1-bank-accounts-api). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bankAccounts.getBankAccountByV1Id(request)`

- **OnSuccess**: <code>[GetBankAccountByV1IdResponse](src/models/get-bank-account-by-v1-id-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bankAccounts.getBankAccountByV1Id(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetBankAccountByV1IdResponse, ResponseError&gt;</code>, with `result.value` of type <code>[GetBankAccountByV1IdResponse](src/models/get-bank-account-by-v1-id-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBankAccounts(request: BankAccounts.ListBankAccountsRequest, options?: RequestOptions): ApiPromise&lt;ListBankAccountsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of [BankAccount](entity:BankAccount) objects linked to a Square account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bankAccounts.listBankAccounts();
  // TODO: Handle 'response' of type ListBankAccountsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bankAccounts.listBankAccounts().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListBankAccountsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor?</code> | <code>string</code> | The pagination cursor returned by a previous call to this endpoint.<br>Use it in the next `ListBankAccounts` request to retrieve the next set<br>of results.<br><br>See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information. |
| <code>limit?</code> | <code>number</code> | Upper limit on the number of bank accounts to return in the response.<br>Currently, 1000 is the largest supported limit. You can specify a limit<br>of up to 1000 bank accounts. This is also the default limit. |
| <code>locationId?</code> | <code>string</code> | Location ID. You can specify this optional filter<br>to retrieve only the linked bank accounts belonging to a specific location. |
| <code>customerId?</code> | <code>string</code> | Customer ID. You can specify this optional filter<br>to retrieve only the linked bank accounts belonging to a specific customer. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bankAccounts.listBankAccounts(request)`

- **OnSuccess**: <code>[ListBankAccountsResponse](src/models/list-bank-accounts-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bankAccounts.listBankAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListBankAccountsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListBankAccountsResponse](src/models/list-bank-accounts-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Bookings

> Source: [Bookings](src/resources/bookings.ts)

<details>
<summary><code>bulkRetrieveBookings(request: Bookings.BulkRetrieveBookingsRequestParams, options?: RequestOptions): ApiPromise&lt;BulkRetrieveBookingsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk-Retrieves a list of bookings by booking IDs.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` for the OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bookings.bulkRetrieveBookings({ body });
  // TODO: Handle 'response' of type BulkRetrieveBookingsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bookings.bulkRetrieveBookings({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkRetrieveBookingsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkRetrieveBookingsRequest](src/models/bulk-retrieve-bookings-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bookings.bulkRetrieveBookings(request)`

- **OnSuccess**: <code>[BulkRetrieveBookingsResponse](src/models/bulk-retrieve-bookings-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bookings.bulkRetrieveBookings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkRetrieveBookingsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BulkRetrieveBookingsResponse](src/models/bulk-retrieve-bookings-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkRetrieveTeamMemberBookingProfiles(request: Bookings.BulkRetrieveTeamMemberBookingProfilesRequestParams, options?: RequestOptions): ApiPromise&lt;BulkRetrieveTeamMemberBookingProfilesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves one or more team members' booking profiles.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bookings.bulkRetrieveTeamMemberBookingProfiles({ body });
  // TODO: Handle 'response' of type BulkRetrieveTeamMemberBookingProfilesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bookings.bulkRetrieveTeamMemberBookingProfiles({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkRetrieveTeamMemberBookingProfilesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkRetrieveTeamMemberBookingProfilesRequest](src/models/bulk-retrieve-team-member-booking-profiles-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bookings.bulkRetrieveTeamMemberBookingProfiles(request)`

- **OnSuccess**: <code>[BulkRetrieveTeamMemberBookingProfilesResponse](src/models/bulk-retrieve-team-member-booking-profiles-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bookings.bulkRetrieveTeamMemberBookingProfiles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkRetrieveTeamMemberBookingProfilesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BulkRetrieveTeamMemberBookingProfilesResponse](src/models/bulk-retrieve-team-member-booking-profiles-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelBooking(request: Bookings.CancelBookingRequestParams, options?: RequestOptions): ApiPromise&lt;CancelBookingResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels an existing booking.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope.

For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to *Appointments Plus*
or *Appointments Premium*.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bookings.cancelBooking({ bookingId, body });
  // TODO: Handle 'response' of type CancelBookingResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bookings.cancelBooking({ bookingId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelBookingResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bookingId</code> | <code>string</code> | The ID of the [Booking](entity:Booking) object representing the to-be-cancelled booking. |
| <code>body</code> | <code>[CancelBookingRequest](src/models/cancel-booking-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bookings.cancelBooking(request)`

- **OnSuccess**: <code>[CancelBookingResponse](src/models/cancel-booking-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bookings.cancelBooking(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelBookingResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CancelBookingResponse](src/models/cancel-booking-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createBooking(request: Bookings.CreateBookingRequestParams, options?: RequestOptions): ApiPromise&lt;CreateBookingResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a booking.

The required input must include the following:
- `Booking.location_id`
- `Booking.start_at`
- `Booking.AppointmentSegment.team_member_id`
- `Booking.AppointmentSegment.service_variation_id`
- `Booking.AppointmentSegment.service_variation_version`

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope.

For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to *Appointments Plus*
or *Appointments Premium*.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bookings.createBooking({ body });
  // TODO: Handle 'response' of type CreateBookingResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bookings.createBooking({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateBookingResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateBookingRequest](src/models/create-booking-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bookings.createBooking(request)`

- **OnSuccess**: <code>[CreateBookingResponse](src/models/create-booking-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bookings.createBooking(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateBookingResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateBookingResponse](src/models/create-booking-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBookings(request: Bookings.ListBookingsRequest, options?: RequestOptions): ApiPromise&lt;ListBookingsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieve a collection of bookings.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` for the OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bookings.listBookings();
  // TODO: Handle 'response' of type ListBookingsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bookings.listBookings().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListBookingsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | The maximum number of results per page to return in a paged response. |
| <code>cursor?</code> | <code>string</code> | The pagination cursor from the preceding response to return the next page of the results. Do not set this when retrieving the first page of the results. |
| <code>customerId?</code> | <code>string</code> | The [customer](entity:Customer) for whom to retrieve bookings. If this is not set, bookings for all customers are retrieved. |
| <code>teamMemberId?</code> | <code>string</code> | The team member for whom to retrieve bookings. If this is not set, bookings of all members are retrieved. |
| <code>locationId?</code> | <code>string</code> | The location for which to retrieve bookings. If this is not set, all locations' bookings are retrieved. |
| <code>startAtMin?</code> | <code>string</code> | The RFC 3339 timestamp specifying the earliest of the start time. If this is not set, the current time is used. |
| <code>startAtMax?</code> | <code>string</code> | The RFC 3339 timestamp specifying the latest of the start time. If this is not set, the time of 31 days after `start_at_min` is used. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bookings.listBookings(request)`

- **OnSuccess**: <code>[ListBookingsResponse](src/models/list-bookings-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bookings.listBookings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListBookingsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListBookingsResponse](src/models/list-bookings-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listLocationBookingProfiles(request: Bookings.ListLocationBookingProfilesRequest, options?: RequestOptions): ApiPromise&lt;ListLocationBookingProfilesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists location booking profiles of a seller.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bookings.listLocationBookingProfiles();
  // TODO: Handle 'response' of type ListLocationBookingProfilesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bookings.listLocationBookingProfiles().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListLocationBookingProfilesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | The maximum number of results to return in a paged response. |
| <code>cursor?</code> | <code>string</code> | The pagination cursor from the preceding response to return the next page of the results. Do not set this when retrieving the first page of the results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bookings.listLocationBookingProfiles(request)`

- **OnSuccess**: <code>[ListLocationBookingProfilesResponse](src/models/list-location-booking-profiles-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bookings.listLocationBookingProfiles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListLocationBookingProfilesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListLocationBookingProfilesResponse](src/models/list-location-booking-profiles-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTeamMemberBookingProfiles(request: Bookings.ListTeamMemberBookingProfilesRequest, options?: RequestOptions): ApiPromise&lt;ListTeamMemberBookingProfilesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists booking profiles for team members.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bookings.listTeamMemberBookingProfiles();
  // TODO: Handle 'response' of type ListTeamMemberBookingProfilesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bookings.listTeamMemberBookingProfiles().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListTeamMemberBookingProfilesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bookableOnly?</code> | <code>boolean</code> | Indicates whether to include only bookable team members in the returned result (`true`) or not (`false`).<br>**Default**: false |
| <code>limit?</code> | <code>number</code> | The maximum number of results to return in a paged response. |
| <code>cursor?</code> | <code>string</code> | The pagination cursor from the preceding response to return the next page of the results. Do not set this when retrieving the first page of the results. |
| <code>locationId?</code> | <code>string</code> | Indicates whether to include only team members enabled at the given location in the returned result. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bookings.listTeamMemberBookingProfiles(request)`

- **OnSuccess**: <code>[ListTeamMemberBookingProfilesResponse](src/models/list-team-member-booking-profiles-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bookings.listTeamMemberBookingProfiles(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListTeamMemberBookingProfilesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListTeamMemberBookingProfilesResponse](src/models/list-team-member-booking-profiles-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveBooking(request: Bookings.RetrieveBookingRequest, options?: RequestOptions): ApiPromise&lt;RetrieveBookingResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a booking.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` for the OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bookings.retrieveBooking({ bookingId });
  // TODO: Handle 'response' of type RetrieveBookingResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bookings.retrieveBooking({ bookingId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveBookingResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bookingId</code> | <code>string</code> | The ID of the [Booking](entity:Booking) object representing the to-be-retrieved booking. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bookings.retrieveBooking(request)`

- **OnSuccess**: <code>[RetrieveBookingResponse](src/models/retrieve-booking-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bookings.retrieveBooking(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveBookingResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveBookingResponse](src/models/retrieve-booking-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveBusinessBookingProfile(options?: RequestOptions): ApiPromise&lt;RetrieveBusinessBookingProfileResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a seller's booking profile.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bookings.retrieveBusinessBookingProfile();
  // TODO: Handle 'response' of type RetrieveBusinessBookingProfileResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bookings.retrieveBusinessBookingProfile().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveBusinessBookingProfileResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bookings.retrieveBusinessBookingProfile()`

- **OnSuccess**: <code>[RetrieveBusinessBookingProfileResponse](src/models/retrieve-business-booking-profile-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bookings.retrieveBusinessBookingProfile().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveBusinessBookingProfileResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveBusinessBookingProfileResponse](src/models/retrieve-business-booking-profile-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveLocationBookingProfile(request: Bookings.RetrieveLocationBookingProfileRequest, options?: RequestOptions): ApiPromise&lt;RetrieveLocationBookingProfileResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a seller's location booking profile.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bookings.retrieveLocationBookingProfile({ locationId });
  // TODO: Handle 'response' of type RetrieveLocationBookingProfileResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bookings.retrieveLocationBookingProfile({ locationId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveLocationBookingProfileResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locationId</code> | <code>string</code> | The ID of the location to retrieve the booking profile. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bookings.retrieveLocationBookingProfile(request)`

- **OnSuccess**: <code>[RetrieveLocationBookingProfileResponse](src/models/retrieve-location-booking-profile-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bookings.retrieveLocationBookingProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveLocationBookingProfileResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveLocationBookingProfileResponse](src/models/retrieve-location-booking-profile-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveTeamMemberBookingProfile(request: Bookings.RetrieveTeamMemberBookingProfileRequest, options?: RequestOptions): ApiPromise&lt;RetrieveTeamMemberBookingProfileResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a team member's booking profile.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bookings.retrieveTeamMemberBookingProfile({ teamMemberId });
  // TODO: Handle 'response' of type RetrieveTeamMemberBookingProfileResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bookings.retrieveTeamMemberBookingProfile({ teamMemberId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveTeamMemberBookingProfileResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamMemberId</code> | <code>string</code> | The ID of the team member to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bookings.retrieveTeamMemberBookingProfile(request)`

- **OnSuccess**: <code>[RetrieveTeamMemberBookingProfileResponse](src/models/retrieve-team-member-booking-profile-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bookings.retrieveTeamMemberBookingProfile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveTeamMemberBookingProfileResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveTeamMemberBookingProfileResponse](src/models/retrieve-team-member-booking-profile-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchAvailability(request: Bookings.SearchAvailabilityRequestParams, options?: RequestOptions): ApiPromise&lt;SearchAvailabilityResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches for availabilities for booking.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` for the OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bookings.searchAvailability({ body });
  // TODO: Handle 'response' of type SearchAvailabilityResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bookings.searchAvailability({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchAvailabilityResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchAvailabilityRequest](src/models/search-availability-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bookings.searchAvailability(request)`

- **OnSuccess**: <code>[SearchAvailabilityResponse](src/models/search-availability-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bookings.searchAvailability(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchAvailabilityResponse, ResponseError&gt;</code>, with `result.value` of type <code>[SearchAvailabilityResponse](src/models/search-availability-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBooking(request: Bookings.UpdateBookingRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateBookingResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a booking.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope.

For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to *Appointments Plus*
or *Appointments Premium*.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bookings.updateBooking({ bookingId, body });
  // TODO: Handle 'response' of type UpdateBookingResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bookings.updateBooking({ bookingId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateBookingResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bookingId</code> | <code>string</code> | The ID of the [Booking](entity:Booking) object representing the to-be-updated booking. |
| <code>body</code> | <code>[UpdateBookingRequest](src/models/update-booking-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bookings.updateBooking(request)`

- **OnSuccess**: <code>[UpdateBookingResponse](src/models/update-booking-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bookings.updateBooking(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateBookingResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateBookingResponse](src/models/update-booking-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## BookingCustomAttributes

> Source: [BookingCustomAttributes](src/resources/booking-custom-attributes.ts)

<details>
<summary><code>bulkDeleteBookingCustomAttributes(request: BookingCustomAttributes.BulkDeleteBookingCustomAttributesRequestParams, options?: RequestOptions): ApiPromise&lt;BulkDeleteBookingCustomAttributesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk deletes bookings custom attributes.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope.

For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to *Appointments Plus*
or *Appointments Premium*.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bookingCustomAttributes.bulkDeleteBookingCustomAttributes({ body });
  // TODO: Handle 'response' of type BulkDeleteBookingCustomAttributesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bookingCustomAttributes.bulkDeleteBookingCustomAttributes({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkDeleteBookingCustomAttributesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkDeleteBookingCustomAttributesRequest](src/models/bulk-delete-booking-custom-attributes-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bookingCustomAttributes.bulkDeleteBookingCustomAttributes(request)`

- **OnSuccess**: <code>[BulkDeleteBookingCustomAttributesResponse](src/models/bulk-delete-booking-custom-attributes-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bookingCustomAttributes.bulkDeleteBookingCustomAttributes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkDeleteBookingCustomAttributesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BulkDeleteBookingCustomAttributesResponse](src/models/bulk-delete-booking-custom-attributes-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkUpsertBookingCustomAttributes(request: BookingCustomAttributes.BulkUpsertBookingCustomAttributesRequestParams, options?: RequestOptions): ApiPromise&lt;BulkUpsertBookingCustomAttributesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Bulk upserts bookings custom attributes.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope.

For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to *Appointments Plus*
or *Appointments Premium*.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bookingCustomAttributes.bulkUpsertBookingCustomAttributes({ body });
  // TODO: Handle 'response' of type BulkUpsertBookingCustomAttributesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bookingCustomAttributes.bulkUpsertBookingCustomAttributes({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkUpsertBookingCustomAttributesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkUpsertBookingCustomAttributesRequest](src/models/bulk-upsert-booking-custom-attributes-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bookingCustomAttributes.bulkUpsertBookingCustomAttributes(request)`

- **OnSuccess**: <code>[BulkUpsertBookingCustomAttributesResponse](src/models/bulk-upsert-booking-custom-attributes-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bookingCustomAttributes.bulkUpsertBookingCustomAttributes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkUpsertBookingCustomAttributesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BulkUpsertBookingCustomAttributesResponse](src/models/bulk-upsert-booking-custom-attributes-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createBookingCustomAttributeDefinition(request: BookingCustomAttributes.CreateBookingCustomAttributeDefinitionRequestParams, options?: RequestOptions): ApiPromise&lt;CreateBookingCustomAttributeDefinitionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a bookings custom attribute definition.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope.

For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to *Appointments Plus*
or *Appointments Premium*.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bookingCustomAttributes.createBookingCustomAttributeDefinition({ body });
  // TODO: Handle 'response' of type CreateBookingCustomAttributeDefinitionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bookingCustomAttributes.createBookingCustomAttributeDefinition({
  body,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateBookingCustomAttributeDefinitionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateBookingCustomAttributeDefinitionRequest](src/models/create-booking-custom-attribute-definition-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bookingCustomAttributes.createBookingCustomAttributeDefinition(request)`

- **OnSuccess**: <code>[CreateBookingCustomAttributeDefinitionResponse](src/models/create-booking-custom-attribute-definition-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bookingCustomAttributes.createBookingCustomAttributeDefinition(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateBookingCustomAttributeDefinitionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateBookingCustomAttributeDefinitionResponse](src/models/create-booking-custom-attribute-definition-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBookingCustomAttribute(request: BookingCustomAttributes.DeleteBookingCustomAttributeRequest, options?: RequestOptions): ApiPromise&lt;DeleteBookingCustomAttributeResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a bookings custom attribute.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope.

For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to *Appointments Plus*
or *Appointments Premium*.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bookingCustomAttributes.deleteBookingCustomAttribute({ bookingId, key });
  // TODO: Handle 'response' of type DeleteBookingCustomAttributeResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bookingCustomAttributes.deleteBookingCustomAttribute({
  bookingId,
  key,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteBookingCustomAttributeResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bookingId</code> | <code>string</code> | The ID of the target [booking](entity:Booking). |
| <code>key</code> | <code>string</code> | The key of the custom attribute to delete. This key must match the `key` of a custom<br>attribute definition in the Square seller account. If the requesting application is not the<br>definition owner, you must use the qualified key. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bookingCustomAttributes.deleteBookingCustomAttribute(request)`

- **OnSuccess**: <code>[DeleteBookingCustomAttributeResponse](src/models/delete-booking-custom-attribute-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bookingCustomAttributes.deleteBookingCustomAttribute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteBookingCustomAttributeResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DeleteBookingCustomAttributeResponse](src/models/delete-booking-custom-attribute-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBookingCustomAttributeDefinition(request: BookingCustomAttributes.DeleteBookingCustomAttributeDefinitionRequest, options?: RequestOptions): ApiPromise&lt;DeleteBookingCustomAttributeDefinitionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a bookings custom attribute definition.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope.

For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to *Appointments Plus*
or *Appointments Premium*.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bookingCustomAttributes.deleteBookingCustomAttributeDefinition({ key });
  // TODO: Handle 'response' of type DeleteBookingCustomAttributeDefinitionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bookingCustomAttributes.deleteBookingCustomAttributeDefinition({
  key,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteBookingCustomAttributeDefinitionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | The key of the custom attribute definition to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bookingCustomAttributes.deleteBookingCustomAttributeDefinition(request)`

- **OnSuccess**: <code>[DeleteBookingCustomAttributeDefinitionResponse](src/models/delete-booking-custom-attribute-definition-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bookingCustomAttributes.deleteBookingCustomAttributeDefinition(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteBookingCustomAttributeDefinitionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DeleteBookingCustomAttributeDefinitionResponse](src/models/delete-booking-custom-attribute-definition-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBookingCustomAttributeDefinitions(request: BookingCustomAttributes.ListBookingCustomAttributeDefinitionsRequest, options?: RequestOptions): ApiPromise&lt;ListBookingCustomAttributeDefinitionsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Get all bookings custom attribute definitions.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` for the OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bookingCustomAttributes.listBookingCustomAttributeDefinitions();
  // TODO: Handle 'response' of type ListBookingCustomAttributeDefinitionsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bookingCustomAttributes.listBookingCustomAttributeDefinitions().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListBookingCustomAttributeDefinitionsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | The maximum number of results to return in a single paged response. This limit is advisory.<br>The response might contain more or fewer results. The minimum value is 1 and the maximum value is 100.<br>The default value is 20. For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| <code>cursor?</code> | <code>string</code> | The cursor returned in the paged response from the previous call to this endpoint.<br>Provide this cursor to retrieve the next page of results for your original request.<br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bookingCustomAttributes.listBookingCustomAttributeDefinitions(request)`

- **OnSuccess**: <code>[ListBookingCustomAttributeDefinitionsResponse](src/models/list-booking-custom-attribute-definitions-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bookingCustomAttributes.listBookingCustomAttributeDefinitions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListBookingCustomAttributeDefinitionsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListBookingCustomAttributeDefinitionsResponse](src/models/list-booking-custom-attribute-definitions-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBookingCustomAttributes(request: BookingCustomAttributes.ListBookingCustomAttributesRequest, options?: RequestOptions): ApiPromise&lt;ListBookingCustomAttributesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists a booking's custom attributes.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` for the OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bookingCustomAttributes.listBookingCustomAttributes({ bookingId });
  // TODO: Handle 'response' of type ListBookingCustomAttributesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bookingCustomAttributes.listBookingCustomAttributes({ bookingId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListBookingCustomAttributesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bookingId</code> | <code>string</code> | The ID of the target [booking](entity:Booking). |
| <code>limit?</code> | <code>number</code> | The maximum number of results to return in a single paged response. This limit is advisory.<br>The response might contain more or fewer results. The minimum value is 1 and the maximum value is 100.<br>The default value is 20. For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| <code>cursor?</code> | <code>string</code> | The cursor returned in the paged response from the previous call to this endpoint.<br>Provide this cursor to retrieve the next page of results for your original request. For more<br>information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| <code>withDefinitions?</code> | <code>boolean</code> | Indicates whether to return the [custom attribute definition](entity:CustomAttributeDefinition) in the `definition` field of each<br>custom attribute. Set this parameter to `true` to get the name and description of each custom<br>attribute, information about the data type, or other definition details. The default value is `false`.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bookingCustomAttributes.listBookingCustomAttributes(request)`

- **OnSuccess**: <code>[ListBookingCustomAttributesResponse](src/models/list-booking-custom-attributes-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bookingCustomAttributes.listBookingCustomAttributes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListBookingCustomAttributesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListBookingCustomAttributesResponse](src/models/list-booking-custom-attributes-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveBookingCustomAttribute(request: BookingCustomAttributes.RetrieveBookingCustomAttributeRequest, options?: RequestOptions): ApiPromise&lt;RetrieveBookingCustomAttributeResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a bookings custom attribute.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` for the OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bookingCustomAttributes.retrieveBookingCustomAttribute({ bookingId, key });
  // TODO: Handle 'response' of type RetrieveBookingCustomAttributeResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bookingCustomAttributes.retrieveBookingCustomAttribute({
  bookingId,
  key,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveBookingCustomAttributeResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bookingId</code> | <code>string</code> | The ID of the target [booking](entity:Booking). |
| <code>key</code> | <code>string</code> | The key of the custom attribute to retrieve. This key must match the `key` of a custom<br>attribute definition in the Square seller account. If the requesting application is not the<br>definition owner, you must use the qualified key. |
| <code>withDefinition?</code> | <code>boolean</code> | Indicates whether to return the [custom attribute definition](entity:CustomAttributeDefinition) in the `definition` field of<br>the custom attribute. Set this parameter to `true` to get the name and description of the custom<br>attribute, information about the data type, or other definition details. The default value is `false`.<br>**Default**: false |
| <code>version?</code> | <code>number</code> | The current version of the custom attribute, which is used for strongly consistent reads to<br>guarantee that you receive the most up-to-date data. When included in the request, Square<br>returns the specified version or a higher version if one exists. If the specified version is<br>higher than the current version, Square returns a `BAD_REQUEST` error. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bookingCustomAttributes.retrieveBookingCustomAttribute(request)`

- **OnSuccess**: <code>[RetrieveBookingCustomAttributeResponse](src/models/retrieve-booking-custom-attribute-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bookingCustomAttributes.retrieveBookingCustomAttribute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveBookingCustomAttributeResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveBookingCustomAttributeResponse](src/models/retrieve-booking-custom-attribute-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveBookingCustomAttributeDefinition(request: BookingCustomAttributes.RetrieveBookingCustomAttributeDefinitionRequest, options?: RequestOptions): ApiPromise&lt;RetrieveBookingCustomAttributeDefinitionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a bookings custom attribute definition.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_READ` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_READ` and `APPOINTMENTS_READ` for the OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bookingCustomAttributes.retrieveBookingCustomAttributeDefinition({ key });
  // TODO: Handle 'response' of type RetrieveBookingCustomAttributeDefinitionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bookingCustomAttributes.retrieveBookingCustomAttributeDefinition({
  key,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveBookingCustomAttributeDefinitionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | The key of the custom attribute definition to retrieve. If the requesting application<br>is not the definition owner, you must use the qualified key. |
| <code>version?</code> | <code>number</code> | The current version of the custom attribute definition, which is used for strongly consistent<br>reads to guarantee that you receive the most up-to-date data. When included in the request,<br>Square returns the specified version or a higher version if one exists. If the specified version<br>is higher than the current version, Square returns a `BAD_REQUEST` error. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bookingCustomAttributes.retrieveBookingCustomAttributeDefinition(request)`

- **OnSuccess**: <code>[RetrieveBookingCustomAttributeDefinitionResponse](src/models/retrieve-booking-custom-attribute-definition-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bookingCustomAttributes.retrieveBookingCustomAttributeDefinition(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveBookingCustomAttributeDefinitionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveBookingCustomAttributeDefinitionResponse](src/models/retrieve-booking-custom-attribute-definition-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBookingCustomAttributeDefinition(request: BookingCustomAttributes.UpdateBookingCustomAttributeDefinitionRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateBookingCustomAttributeDefinitionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a bookings custom attribute definition.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope.

For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to *Appointments Plus*
or *Appointments Premium*.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bookingCustomAttributes.updateBookingCustomAttributeDefinition({ key, body });
  // TODO: Handle 'response' of type UpdateBookingCustomAttributeDefinitionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bookingCustomAttributes.updateBookingCustomAttributeDefinition({
  key,
  body,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateBookingCustomAttributeDefinitionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | The key of the custom attribute definition to update. |
| <code>body</code> | <code>[UpdateBookingCustomAttributeDefinitionRequest](src/models/update-booking-custom-attribute-definition-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bookingCustomAttributes.updateBookingCustomAttributeDefinition(request)`

- **OnSuccess**: <code>[UpdateBookingCustomAttributeDefinitionResponse](src/models/update-booking-custom-attribute-definition-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bookingCustomAttributes.updateBookingCustomAttributeDefinition(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateBookingCustomAttributeDefinitionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateBookingCustomAttributeDefinitionResponse](src/models/update-booking-custom-attribute-definition-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>upsertBookingCustomAttribute(request: BookingCustomAttributes.UpsertBookingCustomAttributeRequestParams, options?: RequestOptions): ApiPromise&lt;UpsertBookingCustomAttributeResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Upserts a bookings custom attribute.

To call this endpoint with buyer-level permissions, set `APPOINTMENTS_WRITE` for the OAuth scope.
To call this endpoint with seller-level permissions, set `APPOINTMENTS_ALL_WRITE` and `APPOINTMENTS_WRITE` for the OAuth scope.

For calls to this endpoint with seller-level permissions to succeed, the seller must have subscribed to *Appointments Plus*
or *Appointments Premium*.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.bookingCustomAttributes.upsertBookingCustomAttribute({
    bookingId,
    key,
    body,
  });
  // TODO: Handle 'response' of type UpsertBookingCustomAttributeResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.bookingCustomAttributes.upsertBookingCustomAttribute({
  bookingId,
  key,
  body,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpsertBookingCustomAttributeResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>bookingId</code> | <code>string</code> | The ID of the target [booking](entity:Booking). |
| <code>key</code> | <code>string</code> | The key of the custom attribute to create or update. This key must match the `key` of a<br>custom attribute definition in the Square seller account. If the requesting application is not<br>the definition owner, you must use the qualified key. |
| <code>body</code> | <code>[UpsertBookingCustomAttributeRequest](src/models/upsert-booking-custom-attribute-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.bookingCustomAttributes.upsertBookingCustomAttribute(request)`

- **OnSuccess**: <code>[UpsertBookingCustomAttributeResponse](src/models/upsert-booking-custom-attribute-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.bookingCustomAttributes.upsertBookingCustomAttribute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpsertBookingCustomAttributeResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpsertBookingCustomAttributeResponse](src/models/upsert-booking-custom-attribute-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Cards

> Source: [Cards](src/resources/cards.ts)

<details>
<summary><code>createCard(request: Cards.CreateCardRequestParams, options?: RequestOptions): ApiPromise&lt;CreateCardResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a card on file to an existing merchant.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cards.createCard({ body });
  // TODO: Handle 'response' of type CreateCardResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cards.createCard({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateCardResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateCardRequest](src/models/create-card-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cards.createCard(request)`

- **OnSuccess**: <code>[CreateCardResponse](src/models/create-card-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.cards.createCard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateCardResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateCardResponse](src/models/create-card-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>disableCard(request: Cards.DisableCardRequest, options?: RequestOptions): ApiPromise&lt;DisableCardResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disables the card, preventing any further updates or charges.
Disabling an already disabled card is allowed but has no effect.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cards.disableCard({ cardId });
  // TODO: Handle 'response' of type DisableCardResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cards.disableCard({ cardId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DisableCardResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cardId</code> | <code>string</code> | Unique ID for the desired Card. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cards.disableCard(request)`

- **OnSuccess**: <code>[DisableCardResponse](src/models/disable-card-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.cards.disableCard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DisableCardResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DisableCardResponse](src/models/disable-card-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCards(request: Cards.ListCardsRequest, options?: RequestOptions): ApiPromise&lt;ListCardsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of cards owned by the account making the request.
A max of 25 cards will be returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cards.listCards();
  // TODO: Handle 'response' of type ListCardsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cards.listCards().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListCardsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor?</code> | <code>string</code> | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for your original query.<br><br>See [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination) for more information. |
| <code>customerId?</code> | <code>string</code> | Limit results to cards associated with the customer supplied.<br>By default, all cards owned by the merchant are returned. |
| <code>includeDisabled?</code> | <code>boolean</code> | Includes disabled cards.<br>By default, all enabled cards owned by the merchant are returned.<br>**Default**: false |
| <code>referenceId?</code> | <code>string</code> | Limit results to cards associated with the reference_id supplied. |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Sorts the returned list by when the card was created with the specified order.<br>This field defaults to ASC. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cards.listCards(request)`

- **OnSuccess**: <code>[ListCardsResponse](src/models/list-cards-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.cards.listCards(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListCardsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListCardsResponse](src/models/list-cards-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveCard(request: Cards.RetrieveCardRequest, options?: RequestOptions): ApiPromise&lt;RetrieveCardResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves details for a specific Card.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cards.retrieveCard({ cardId });
  // TODO: Handle 'response' of type RetrieveCardResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cards.retrieveCard({ cardId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveCardResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cardId</code> | <code>string</code> | Unique ID for the desired Card. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cards.retrieveCard(request)`

- **OnSuccess**: <code>[RetrieveCardResponse](src/models/retrieve-card-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.cards.retrieveCard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveCardResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveCardResponse](src/models/retrieve-card-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CashDrawers

> Source: [CashDrawers](src/resources/cash-drawers.ts)

<details>
<summary><code>listCashDrawerShiftEvents(request: CashDrawers.ListCashDrawerShiftEventsRequest, options?: RequestOptions): ApiPromise&lt;ListCashDrawerShiftEventsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides a paginated list of events for a single cash drawer shift.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cashDrawers.listCashDrawerShiftEvents({ shiftId, locationId });
  // TODO: Handle 'response' of type ListCashDrawerShiftEventsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cashDrawers.listCashDrawerShiftEvents({ shiftId, locationId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListCashDrawerShiftEventsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>shiftId</code> | <code>string</code> | The shift ID. |
| <code>locationId</code> | <code>string</code> | The ID of the location to list cash drawer shifts for. |
| <code>limit?</code> | <code>number</code> | Number of resources to be returned in a page of results (200 by<br>default, 1000 max). |
| <code>cursor?</code> | <code>string</code> | Opaque cursor for fetching the next page of results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cashDrawers.listCashDrawerShiftEvents(request)`

- **OnSuccess**: <code>[ListCashDrawerShiftEventsResponse](src/models/list-cash-drawer-shift-events-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.cashDrawers.listCashDrawerShiftEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListCashDrawerShiftEventsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListCashDrawerShiftEventsResponse](src/models/list-cash-drawer-shift-events-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCashDrawerShifts(request: CashDrawers.ListCashDrawerShiftsRequest, options?: RequestOptions): ApiPromise&lt;ListCashDrawerShiftsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides the details for all of the cash drawer shifts for a location
in a date range.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cashDrawers.listCashDrawerShifts({ locationId });
  // TODO: Handle 'response' of type ListCashDrawerShiftsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cashDrawers.listCashDrawerShifts({ locationId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListCashDrawerShiftsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locationId</code> | <code>string</code> | The ID of the location to query for a list of cash drawer shifts. |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | The order in which cash drawer shifts are listed in the response,<br>based on their opened_at field. Default value: ASC |
| <code>beginTime?</code> | <code>string</code> | The inclusive start time of the query on opened_at, in ISO 8601 format. |
| <code>endTime?</code> | <code>string</code> | The exclusive end date of the query on opened_at, in ISO 8601 format. |
| <code>limit?</code> | <code>number</code> | Number of cash drawer shift events in a page of results (200 by<br>default, 1000 max). |
| <code>cursor?</code> | <code>string</code> | Opaque cursor for fetching the next page of results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cashDrawers.listCashDrawerShifts(request)`

- **OnSuccess**: <code>[ListCashDrawerShiftsResponse](src/models/list-cash-drawer-shifts-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.cashDrawers.listCashDrawerShifts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListCashDrawerShiftsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListCashDrawerShiftsResponse](src/models/list-cash-drawer-shifts-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveCashDrawerShift(request: CashDrawers.RetrieveCashDrawerShiftRequest, options?: RequestOptions): ApiPromise&lt;RetrieveCashDrawerShiftResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides the summary details for a single cash drawer shift. See
[ListCashDrawerShiftEvents](api-endpoint:CashDrawers-ListCashDrawerShiftEvents) for a list of cash drawer shift events.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.cashDrawers.retrieveCashDrawerShift({ shiftId, locationId });
  // TODO: Handle 'response' of type RetrieveCashDrawerShiftResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.cashDrawers.retrieveCashDrawerShift({ shiftId, locationId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveCashDrawerShiftResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>shiftId</code> | <code>string</code> | The shift ID. |
| <code>locationId</code> | <code>string</code> | The ID of the location to retrieve cash drawer shifts from. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.cashDrawers.retrieveCashDrawerShift(request)`

- **OnSuccess**: <code>[RetrieveCashDrawerShiftResponse](src/models/retrieve-cash-drawer-shift-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.cashDrawers.retrieveCashDrawerShift(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveCashDrawerShiftResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveCashDrawerShiftResponse](src/models/retrieve-cash-drawer-shift-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Catalog

> Source: [Catalog](src/resources/catalog.ts)

<details>
<summary><code>batchDeleteCatalogObjects(request: Catalog.BatchDeleteCatalogObjectsRequestParams, options?: RequestOptions): ApiPromise&lt;BatchDeleteCatalogObjectsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a set of [CatalogItem](entity:CatalogItem)s based on the
provided list of target IDs and returns a set of successfully deleted IDs in
the response. Deletion is a cascading event such that all children of the
targeted object are also deleted. For example, deleting a CatalogItem will
also delete all of its [CatalogItemVariation](entity:CatalogItemVariation)
children.

`BatchDeleteCatalogObjects` succeeds even if only a portion of the targeted
IDs can be deleted. The response will only include IDs that were
actually deleted.

To ensure consistency, only one delete request is processed at a time per seller account.
While one (batch or non-batch) delete request is being processed, other (batched and non-batched)
delete requests are rejected with the `429` error code.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.catalog.batchDeleteCatalogObjects({ body });
  // TODO: Handle 'response' of type BatchDeleteCatalogObjectsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.catalog.batchDeleteCatalogObjects({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchDeleteCatalogObjectsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BatchDeleteCatalogObjectsRequest](src/models/batch-delete-catalog-objects-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.catalog.batchDeleteCatalogObjects(request)`

- **OnSuccess**: <code>[BatchDeleteCatalogObjectsResponse](src/models/batch-delete-catalog-objects-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.catalog.batchDeleteCatalogObjects(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchDeleteCatalogObjectsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BatchDeleteCatalogObjectsResponse](src/models/batch-delete-catalog-objects-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>batchRetrieveCatalogObjects(request: Catalog.BatchRetrieveCatalogObjectsRequestParams, options?: RequestOptions): ApiPromise&lt;BatchRetrieveCatalogObjectsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a set of objects based on the provided ID.
Each [CatalogItem](entity:CatalogItem) returned in the set includes all of its
child information including: all of its
[CatalogItemVariation](entity:CatalogItemVariation) objects, references to
its [CatalogModifierList](entity:CatalogModifierList) objects, and the ids of
any [CatalogTax](entity:CatalogTax) objects that apply to it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.catalog.batchRetrieveCatalogObjects({ body });
  // TODO: Handle 'response' of type BatchRetrieveCatalogObjectsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.catalog.batchRetrieveCatalogObjects({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchRetrieveCatalogObjectsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BatchRetrieveCatalogObjectsRequest](src/models/batch-retrieve-catalog-objects-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.catalog.batchRetrieveCatalogObjects(request)`

- **OnSuccess**: <code>[BatchRetrieveCatalogObjectsResponse](src/models/batch-retrieve-catalog-objects-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.catalog.batchRetrieveCatalogObjects(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchRetrieveCatalogObjectsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BatchRetrieveCatalogObjectsResponse](src/models/batch-retrieve-catalog-objects-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>batchUpsertCatalogObjects(request: Catalog.BatchUpsertCatalogObjectsRequestParams, options?: RequestOptions): ApiPromise&lt;BatchUpsertCatalogObjectsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates up to 10,000 target objects based on the provided
list of objects. The target objects are grouped into batches and each batch is
inserted/updated in an all-or-nothing manner. If an object within a batch is
malformed in some way, or violates a database constraint, the entire batch
containing that item will be disregarded. However, other batches in the same
request may still succeed. Each batch may contain up to 1,000 objects, and
batches will be processed in order as long as the total object count for the
request (items, variations, modifier lists, discounts, and taxes) is no more
than 10,000.

This endpoint uses full-replacement semantics. The client must send the complete object, and any
field absent from the request is interpreted as an intentional clear. This logic applies to
nested objects as well. For example, omitting inlined children like variations will delete them.

To ensure consistency, only one update request is processed at a time per seller account.
While one (batch or non-batch) update request is being processed, other (batched and non-batched)
update requests are rejected with the `429` error code. Prefer batching related changes into a
single call rather than issuing many small writes, since each write acquires the lock separately
and parallel writes to the same seller will contend with each other, producing `429` errors.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.catalog.batchUpsertCatalogObjects({ body });
  // TODO: Handle 'response' of type BatchUpsertCatalogObjectsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.catalog.batchUpsertCatalogObjects({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchUpsertCatalogObjectsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BatchUpsertCatalogObjectsRequest](src/models/batch-upsert-catalog-objects-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.catalog.batchUpsertCatalogObjects(request)`

- **OnSuccess**: <code>[BatchUpsertCatalogObjectsResponse](src/models/batch-upsert-catalog-objects-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.catalog.batchUpsertCatalogObjects(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchUpsertCatalogObjectsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BatchUpsertCatalogObjectsResponse](src/models/batch-upsert-catalog-objects-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>catalogInfo(options?: RequestOptions): ApiPromise&lt;CatalogInfoResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves information about the Square Catalog API, such as batch size
limits that can be used by the `BatchUpsertCatalogObjects` endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.catalog.catalogInfo();
  // TODO: Handle 'response' of type CatalogInfoResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.catalog.catalogInfo().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CatalogInfoResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.catalog.catalogInfo()`

- **OnSuccess**: <code>[CatalogInfoResponse](src/models/catalog-info-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.catalog.catalogInfo().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CatalogInfoResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CatalogInfoResponse](src/models/catalog-info-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCatalogImage(options?: RequestOptions): ApiPromise&lt;CreateCatalogImageResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads an image file to be represented by a [CatalogImage](entity:CatalogImage) object that can be linked to an existing
[CatalogObject](entity:CatalogObject) instance. The resulting `CatalogImage` is unattached to any `CatalogObject` if the `object_id`
is not specified.

This `CreateCatalogImage` endpoint accepts HTTP multipart/form-data requests with a JSON part and an image file part in
JPEG, PJPEG, PNG, or GIF format. The maximum file size is 15MB.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.catalog.createCatalogImage();
  // TODO: Handle 'response' of type CreateCatalogImageResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.catalog.createCatalogImage().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateCatalogImageResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.catalog.createCatalogImage()`

- **OnSuccess**: <code>[CreateCatalogImageResponse](src/models/create-catalog-image-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.catalog.createCatalogImage().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateCatalogImageResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateCatalogImageResponse](src/models/create-catalog-image-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCatalogObject(request: Catalog.DeleteCatalogObjectRequest, options?: RequestOptions): ApiPromise&lt;DeleteCatalogObjectResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a single [CatalogObject](entity:CatalogObject) based on the
provided ID and returns the set of successfully deleted IDs in the response.
Deletion is a cascading event such that all children of the targeted object
are also deleted. For example, deleting a [CatalogItem](entity:CatalogItem)
will also delete all of its
[CatalogItemVariation](entity:CatalogItemVariation) children.

To ensure consistency, only one delete request is processed at a time per seller account.
While one (batch or non-batch) delete request is being processed, other (batched and non-batched)
delete requests are rejected with the `429` error code.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.catalog.deleteCatalogObject({ objectId });
  // TODO: Handle 'response' of type DeleteCatalogObjectResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.catalog.deleteCatalogObject({ objectId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteCatalogObjectResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>objectId</code> | <code>string</code> | The ID of the catalog object to be deleted. When an object is deleted, other<br>objects in the graph that depend on that object will be deleted as well (for example, deleting a<br>catalog item will delete its catalog item variations). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.catalog.deleteCatalogObject(request)`

- **OnSuccess**: <code>[DeleteCatalogObjectResponse](src/models/delete-catalog-object-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.catalog.deleteCatalogObject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteCatalogObjectResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DeleteCatalogObjectResponse](src/models/delete-catalog-object-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCatalog(request: Catalog.ListCatalogRequest, options?: RequestOptions): ApiPromise&lt;ListCatalogResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of all [CatalogObject](entity:CatalogObject)s of the specified types in the catalog.

The `types` parameter is specified as a comma-separated list of the [CatalogObjectType](entity:CatalogObjectType) values,
for example, "`ITEM`, `ITEM_VARIATION`, `MODIFIER`, `MODIFIER_LIST`, `CATEGORY`, `DISCOUNT`, `TAX`, `IMAGE`".
Always specify `types` explicitly. When upgrading to a newer API version, omitting `types` may
cause new object types to appear in results that were not returned under the previous version.

__Important:__ ListCatalog does not return deleted catalog items. To retrieve
deleted catalog items, use [SearchCatalogObjects](api-endpoint:Catalog-SearchCatalogObjects)
and set the `include_deleted_objects` attribute value to `true`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.catalog.listCatalog();
  // TODO: Handle 'response' of type ListCatalogResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.catalog.listCatalog().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListCatalogResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor?</code> | <code>string</code> | The pagination cursor returned in the previous response. Leave unset for an initial request.<br>The page size is currently set to be 100.<br>See [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination) for more information. |
| <code>types?</code> | <code>string</code> | An optional case-insensitive, comma-separated list of object types to retrieve.<br><br>The valid values are defined in the [CatalogObjectType](entity:CatalogObjectType) enum, for example,<br>`ITEM`, `ITEM_VARIATION`, `CATEGORY`, `DISCOUNT`, `TAX`,<br>`MODIFIER`, `MODIFIER_LIST`, `IMAGE`, etc.<br><br>If this is unspecified, the operation returns objects of all the top level types at the version<br>of the Square API used to make the request. Object types that are nested onto other object types<br>are not included in the defaults.<br><br>At the current API version the default object types are:<br>ITEM, CATEGORY, TAX, DISCOUNT, MODIFIER_LIST, <br>PRICING_RULE, PRODUCT_SET, TIME_PERIOD, MEASUREMENT_UNIT,<br>SUBSCRIPTION_PLAN, ITEM_OPTION, CUSTOM_ATTRIBUTE_DEFINITION, QUICK_AMOUNT_SETTINGS. |
| <code>catalogVersion?</code> | <code>number</code> | The specific version of the catalog objects to be included in the response.<br>This allows you to retrieve historical versions of objects. The specified version value is matched against<br>the [CatalogObject](entity:CatalogObject)s' `version` attribute.  If not included, results will be from the<br>current version of the catalog. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.catalog.listCatalog(request)`

- **OnSuccess**: <code>[ListCatalogResponse](src/models/list-catalog-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.catalog.listCatalog(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListCatalogResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListCatalogResponse](src/models/list-catalog-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveCatalogObject(request: Catalog.RetrieveCatalogObjectRequest, options?: RequestOptions): ApiPromise&lt;RetrieveCatalogObjectResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single [CatalogItem](entity:CatalogItem) as a
[CatalogObject](entity:CatalogObject) based on the provided ID. The returned
object includes all of the relevant [CatalogItem](entity:CatalogItem)
information including: [CatalogItemVariation](entity:CatalogItemVariation)
children, references to its
[CatalogModifierList](entity:CatalogModifierList) objects, and the ids of
any [CatalogTax](entity:CatalogTax) objects that apply to it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.catalog.retrieveCatalogObject({ objectId });
  // TODO: Handle 'response' of type RetrieveCatalogObjectResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.catalog.retrieveCatalogObject({ objectId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveCatalogObjectResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>objectId</code> | <code>string</code> | The object ID of any type of catalog objects to be retrieved. |
| <code>includeRelatedObjects?</code> | <code>boolean</code> | If `true`, the response will include additional objects that are related to the<br>requested objects. Related objects are defined as any objects referenced by ID by the results in the `objects` field<br>of the response. These objects are put in the `related_objects` field. Setting this to `true` is<br>helpful when the objects are needed for immediate display to a user.<br>This process only goes one level deep. Objects referenced by the related objects will not be included. For example,<br><br>if the `objects` field of the response contains a CatalogItem, its associated<br>CatalogCategory objects, CatalogTax objects, CatalogImage objects and<br>CatalogModifierLists will be returned in the `related_objects` field of the<br>response. If the `objects` field of the response contains a CatalogItemVariation,<br>its parent CatalogItem will be returned in the `related_objects` field of<br>the response.<br><br>Default value: `false`<br>**Default**: false |
| <code>catalogVersion?</code> | <code>number</code> | Requests objects as of a specific version of the catalog. This allows you to retrieve historical<br>versions of objects. The value to retrieve a specific version of an object can be found<br>in the version field of [CatalogObject](entity:CatalogObject)s. If not included, results will<br>be from the current version of the catalog. |
| <code>includeCategoryPathToRoot?</code> | <code>boolean</code> | Specifies whether or not to include the `path_to_root` list for each returned category instance. The `path_to_root` list consists<br>of `CategoryPathToRootNode` objects and specifies the path that starts with the immediate parent category of the returned category<br>and ends with its root category. If the returned category is a top-level category, the `path_to_root` list is empty and is not returned<br>in the response payload.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.catalog.retrieveCatalogObject(request)`

- **OnSuccess**: <code>[RetrieveCatalogObjectResponse](src/models/retrieve-catalog-object-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.catalog.retrieveCatalogObject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveCatalogObjectResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveCatalogObjectResponse](src/models/retrieve-catalog-object-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchCatalogItems(request: Catalog.SearchCatalogItemsRequestParams, options?: RequestOptions): ApiPromise&lt;SearchCatalogItemsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches for catalog items or item variations by matching supported search attribute values, including
custom attribute values, against one or more of the specified query filters.

This (`SearchCatalogItems`) endpoint differs from the [SearchCatalogObjects](api-endpoint:Catalog-SearchCatalogObjects)
endpoint in the following aspects:

- `SearchCatalogItems` can only search for items or item variations, whereas `SearchCatalogObjects` can search for any type of catalog objects.
- `SearchCatalogItems` supports the custom attribute query filters to return items or item variations that contain custom attribute values, where `SearchCatalogObjects` does not.
- `SearchCatalogItems` does not support the `include_deleted_objects` filter to search for deleted items or item variations, whereas `SearchCatalogObjects` does.
- The both endpoints use different call conventions, including the query filter formats.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.catalog.searchCatalogItems({ body });
  // TODO: Handle 'response' of type SearchCatalogItemsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.catalog.searchCatalogItems({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchCatalogItemsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchCatalogItemsRequest](src/models/search-catalog-items-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.catalog.searchCatalogItems(request)`

- **OnSuccess**: <code>[SearchCatalogItemsResponse](src/models/search-catalog-items-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.catalog.searchCatalogItems(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchCatalogItemsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[SearchCatalogItemsResponse](src/models/search-catalog-items-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchCatalogObjects(request: Catalog.SearchCatalogObjectsRequestParams, options?: RequestOptions): ApiPromise&lt;SearchCatalogObjectsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches for [CatalogObject](entity:CatalogObject) of any type by matching supported search attribute values,
excluding custom attribute values on items or item variations, against one or more of the specified query filters.

This (`SearchCatalogObjects`) endpoint differs from the [SearchCatalogItems](api-endpoint:Catalog-SearchCatalogItems)
endpoint in the following aspects:

- `SearchCatalogItems` can only search for items or item variations, whereas `SearchCatalogObjects` can search for any type of catalog objects.
- `SearchCatalogItems` supports the custom attribute query filters to return items or item variations that contain custom attribute values, where `SearchCatalogObjects` does not.
- `SearchCatalogItems` does not support the `include_deleted_objects` filter to search for deleted items or item variations, whereas `SearchCatalogObjects` does.
- The both endpoints have different call conventions, including the query filter formats.

The `object_types` parameter is specified as a list of [CatalogObjectType](entity:CatalogObjectType) values.
Always specify `object_types` explicitly. When upgrading to a newer API version, omitting
`object_types` may cause new object types to appear in results that were not returned under
the previous version.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.catalog.searchCatalogObjects({ body });
  // TODO: Handle 'response' of type SearchCatalogObjectsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.catalog.searchCatalogObjects({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchCatalogObjectsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchCatalogObjectsRequest](src/models/search-catalog-objects-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.catalog.searchCatalogObjects(request)`

- **OnSuccess**: <code>[SearchCatalogObjectsResponse](src/models/search-catalog-objects-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.catalog.searchCatalogObjects(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchCatalogObjectsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[SearchCatalogObjectsResponse](src/models/search-catalog-objects-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCatalogImage(request: Catalog.UpdateCatalogImageRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateCatalogImageResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads a new image file to replace the existing one in the specified [CatalogImage](entity:CatalogImage) object.

This `UpdateCatalogImage` endpoint accepts HTTP multipart/form-data requests with a JSON part and an image file part in
JPEG, PJPEG, PNG, or GIF format. The maximum file size is 15MB.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.catalog.updateCatalogImage({ imageId });
  // TODO: Handle 'response' of type UpdateCatalogImageResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.catalog.updateCatalogImage({ imageId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateCatalogImageResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>imageId</code> | <code>string</code> | The ID of the `CatalogImage` object to update the encapsulated image file. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.catalog.updateCatalogImage(request)`

- **OnSuccess**: <code>[UpdateCatalogImageResponse](src/models/update-catalog-image-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.catalog.updateCatalogImage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateCatalogImageResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateCatalogImageResponse](src/models/update-catalog-image-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateItemModifierLists(request: Catalog.UpdateItemModifierListsRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateItemModifierListsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the [CatalogModifierList](entity:CatalogModifierList) objects
that apply to the targeted [CatalogItem](entity:CatalogItem) without having
to perform an upsert on the entire item.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.catalog.updateItemModifierLists({ body });
  // TODO: Handle 'response' of type UpdateItemModifierListsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.catalog.updateItemModifierLists({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateItemModifierListsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UpdateItemModifierListsRequest](src/models/update-item-modifier-lists-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.catalog.updateItemModifierLists(request)`

- **OnSuccess**: <code>[UpdateItemModifierListsResponse](src/models/update-item-modifier-lists-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.catalog.updateItemModifierLists(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateItemModifierListsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateItemModifierListsResponse](src/models/update-item-modifier-lists-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateItemTaxes(request: Catalog.UpdateItemTaxesRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateItemTaxesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the [CatalogTax](entity:CatalogTax) objects that apply to the
targeted [CatalogItem](entity:CatalogItem) without having to perform an
upsert on the entire item.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.catalog.updateItemTaxes({ body });
  // TODO: Handle 'response' of type UpdateItemTaxesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.catalog.updateItemTaxes({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateItemTaxesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UpdateItemTaxesRequest](src/models/update-item-taxes-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.catalog.updateItemTaxes(request)`

- **OnSuccess**: <code>[UpdateItemTaxesResponse](src/models/update-item-taxes-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.catalog.updateItemTaxes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateItemTaxesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateItemTaxesResponse](src/models/update-item-taxes-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>upsertCatalogObject(request: Catalog.UpsertCatalogObjectRequestParams, options?: RequestOptions): ApiPromise&lt;UpsertCatalogObjectResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new or updates the specified [CatalogObject](entity:CatalogObject).

This endpoint uses full-replacement semantics. The client must send the complete object, and any
field absent from the request is interpreted as an intentional clear. This logic applies to
nested objects as well. For example, omitting inlined children like variations will delete them.

To ensure consistency, only one update request is processed at a time per seller account.
While one (batch or non-batch) update request is being processed, other (batched and non-batched)
update requests are rejected with the `429` error code.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.catalog.upsertCatalogObject({ body });
  // TODO: Handle 'response' of type UpsertCatalogObjectResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.catalog.upsertCatalogObject({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpsertCatalogObjectResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UpsertCatalogObjectRequest](src/models/upsert-catalog-object-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.catalog.upsertCatalogObject(request)`

- **OnSuccess**: <code>[UpsertCatalogObjectResponse](src/models/upsert-catalog-object-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.catalog.upsertCatalogObject(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpsertCatalogObjectResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpsertCatalogObjectResponse](src/models/upsert-catalog-object-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Channels

> Source: [Channels](src/resources/channels.ts)

<details>
<summary><code>bulkRetrieveChannels(request: Channels.BulkRetrieveChannelsRequestParams, options?: RequestOptions): ApiPromise&lt;BulkRetrieveChannelsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channels.bulkRetrieveChannels({ body });
  // TODO: Handle 'response' of type BulkRetrieveChannelsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channels.bulkRetrieveChannels({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkRetrieveChannelsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkRetrieveChannelsRequest](src/models/bulk-retrieve-channels-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channels.bulkRetrieveChannels(request)`

- **OnSuccess**: <code>[BulkRetrieveChannelsResponse](src/models/bulk-retrieve-channels-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.channels.bulkRetrieveChannels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkRetrieveChannelsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BulkRetrieveChannelsResponse](src/models/bulk-retrieve-channels-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listChannels(request: Channels.ListChannelsRequest, options?: RequestOptions): ApiPromise&lt;ListChannelsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channels.listChannels();
  // TODO: Handle 'response' of type ListChannelsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channels.listChannels().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListChannelsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>referenceType?</code> | <code>[ReferenceType](src/models/reference-type.ts)</code> | Type of reference associated to channel |
| <code>referenceId?</code> | <code>string</code> | id of reference associated to channel |
| <code>status?</code> | <code>[ChannelStatus](src/models/channel-status.ts)</code> | Status of channel |
| <code>cursor?</code> | <code>string</code> | Cursor to fetch the next result |
| <code>limit?</code> | <code>number</code> | Maximum number of results to return.<br>When not provided the returned results will be cap at 100 channels. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channels.listChannels(request)`

- **OnSuccess**: <code>[ListChannelsResponse](src/models/list-channels-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.channels.listChannels(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListChannelsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListChannelsResponse](src/models/list-channels-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveChannel(request: Channels.RetrieveChannelRequest, options?: RequestOptions): ApiPromise&lt;RetrieveChannelResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.channels.retrieveChannel({ channelId });
  // TODO: Handle 'response' of type RetrieveChannelResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.channels.retrieveChannel({ channelId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveChannelResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>channelId</code> | <code>string</code> | A channel id |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.channels.retrieveChannel(request)`

- **OnSuccess**: <code>[RetrieveChannelResponse](src/models/retrieve-channel-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.channels.retrieveChannel(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveChannelResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveChannelResponse](src/models/retrieve-channel-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Customers

> Source: [Customers](src/resources/customers.ts)

<details>
<summary><code>addGroupToCustomer(request: Customers.AddGroupToCustomerRequest, options?: RequestOptions): ApiPromise&lt;AddGroupToCustomerResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a group membership to a customer.

The customer is identified by the `customer_id` value
and the customer group is identified by the `group_id` value.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.addGroupToCustomer({ customerId, groupId });
  // TODO: Handle 'response' of type AddGroupToCustomerResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers.addGroupToCustomer({ customerId, groupId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AddGroupToCustomerResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>string</code> | The ID of the customer to add to a group. |
| <code>groupId</code> | <code>string</code> | The ID of the customer group to add the customer to. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.addGroupToCustomer(request)`

- **OnSuccess**: <code>[AddGroupToCustomerResponse](src/models/add-group-to-customer-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customers.addGroupToCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AddGroupToCustomerResponse, ResponseError&gt;</code>, with `result.value` of type <code>[AddGroupToCustomerResponse](src/models/add-group-to-customer-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkCreateCustomers(request: Customers.BulkCreateCustomersRequestParams, options?: RequestOptions): ApiPromise&lt;BulkCreateCustomersResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates multiple [customer profiles](entity:Customer) for a business.

This endpoint takes a map of individual create requests and returns a map of responses.

You must provide at least one of the following values in each create request:

- `given_name`
- `family_name`
- `company_name`
- `email_address`
- `phone_number`

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.bulkCreateCustomers({ body });
  // TODO: Handle 'response' of type BulkCreateCustomersResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers.bulkCreateCustomers({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkCreateCustomersResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkCreateCustomersRequest](src/models/bulk-create-customers-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.bulkCreateCustomers(request)`

- **OnSuccess**: <code>[BulkCreateCustomersResponse](src/models/bulk-create-customers-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customers.bulkCreateCustomers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkCreateCustomersResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BulkCreateCustomersResponse](src/models/bulk-create-customers-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkDeleteCustomers(request: Customers.BulkDeleteCustomersRequestParams, options?: RequestOptions): ApiPromise&lt;BulkDeleteCustomersResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes multiple customer profiles.

The endpoint takes a list of customer IDs and returns a map of responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.bulkDeleteCustomers({ body });
  // TODO: Handle 'response' of type BulkDeleteCustomersResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers.bulkDeleteCustomers({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkDeleteCustomersResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkDeleteCustomersRequest](src/models/bulk-delete-customers-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.bulkDeleteCustomers(request)`

- **OnSuccess**: <code>[BulkDeleteCustomersResponse](src/models/bulk-delete-customers-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customers.bulkDeleteCustomers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkDeleteCustomersResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BulkDeleteCustomersResponse](src/models/bulk-delete-customers-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkRetrieveCustomers(request: Customers.BulkRetrieveCustomersRequestParams, options?: RequestOptions): ApiPromise&lt;BulkRetrieveCustomersResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves multiple customer profiles.

This endpoint takes a list of customer IDs and returns a map of responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.bulkRetrieveCustomers({ body });
  // TODO: Handle 'response' of type BulkRetrieveCustomersResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers.bulkRetrieveCustomers({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkRetrieveCustomersResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkRetrieveCustomersRequest](src/models/bulk-retrieve-customers-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.bulkRetrieveCustomers(request)`

- **OnSuccess**: <code>[BulkRetrieveCustomersResponse](src/models/bulk-retrieve-customers-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customers.bulkRetrieveCustomers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkRetrieveCustomersResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BulkRetrieveCustomersResponse](src/models/bulk-retrieve-customers-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkUpdateCustomers(request: Customers.BulkUpdateCustomersRequestParams, options?: RequestOptions): ApiPromise&lt;BulkUpdateCustomersResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates multiple customer profiles.

This endpoint takes a map of individual update requests and returns a map of responses.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.bulkUpdateCustomers({ body });
  // TODO: Handle 'response' of type BulkUpdateCustomersResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers.bulkUpdateCustomers({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkUpdateCustomersResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkUpdateCustomersRequest](src/models/bulk-update-customers-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.bulkUpdateCustomers(request)`

- **OnSuccess**: <code>[BulkUpdateCustomersResponse](src/models/bulk-update-customers-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customers.bulkUpdateCustomers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkUpdateCustomersResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BulkUpdateCustomersResponse](src/models/bulk-update-customers-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCustomer(request: Customers.CreateCustomerRequestParams, options?: RequestOptions): ApiPromise&lt;CreateCustomerResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new customer for a business.

You must provide at least one of the following values in your request to this
endpoint:

- `given_name`
- `family_name`
- `company_name`
- `email_address`
- `phone_number`

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.createCustomer({ body });
  // TODO: Handle 'response' of type CreateCustomerResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers.createCustomer({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateCustomerResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateCustomerRequest](src/models/create-customer-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.createCustomer(request)`

- **OnSuccess**: <code>[CreateCustomerResponse](src/models/create-customer-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customers.createCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateCustomerResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateCustomerResponse](src/models/create-customer-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCustomerCard(request: Customers.CreateCustomerCardRequestParams, options?: RequestOptions): ApiPromise&lt;CreateCustomerCardResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a card on file to an existing customer.

As with charges, calls to `CreateCustomerCard` are idempotent. Multiple
calls with the same card nonce return the same card record that was created
with the provided nonce during the _first_ call.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.createCustomerCard({ customerId, body });
  // TODO: Handle 'response' of type CreateCustomerCardResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers.createCustomerCard({ customerId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateCustomerCardResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>string</code> | The Square ID of the customer profile the card is linked to. |
| <code>body</code> | <code>[CreateCustomerCardRequest](src/models/create-customer-card-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.createCustomerCard(request)`

- **OnSuccess**: <code>[CreateCustomerCardResponse](src/models/create-customer-card-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customers.createCustomerCard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateCustomerCardResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateCustomerCardResponse](src/models/create-customer-card-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCustomer(request: Customers.DeleteCustomerRequest, options?: RequestOptions): ApiPromise&lt;DeleteCustomerResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a customer profile from a business.

To delete a customer profile that was created by merging existing profiles, you must use the ID of the newly created profile.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.deleteCustomer({ customerId });
  // TODO: Handle 'response' of type DeleteCustomerResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers.deleteCustomer({ customerId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteCustomerResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>string</code> | The ID of the customer to delete. |
| <code>version?</code> | <code>number</code> | The current version of the customer profile.<br><br>As a best practice, you should include this parameter to enable [optimistic concurrency](https://developer.squareup.com/docs/build-basics/common-api-patterns/optimistic-concurrency) control.  For more information, see [Delete a customer profile](https://developer.squareup.com/docs/customers-api/use-the-api/keep-records#delete-customer-profile). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.deleteCustomer(request)`

- **OnSuccess**: <code>[DeleteCustomerResponse](src/models/delete-customer-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customers.deleteCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteCustomerResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DeleteCustomerResponse](src/models/delete-customer-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCustomerCard(request: Customers.DeleteCustomerCardRequest, options?: RequestOptions): ApiPromise&lt;DeleteCustomerCardResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a card on file from a customer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.deleteCustomerCard({ customerId, cardId });
  // TODO: Handle 'response' of type DeleteCustomerCardResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers.deleteCustomerCard({ customerId, cardId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteCustomerCardResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>string</code> | The ID of the customer that the card on file belongs to. |
| <code>cardId</code> | <code>string</code> | The ID of the card on file to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.deleteCustomerCard(request)`

- **OnSuccess**: <code>[DeleteCustomerCardResponse](src/models/delete-customer-card-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customers.deleteCustomerCard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteCustomerCardResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DeleteCustomerCardResponse](src/models/delete-customer-card-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomers(request: Customers.ListCustomersRequest, options?: RequestOptions): ApiPromise&lt;ListCustomersResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists customer profiles associated with a Square account.

Under normal operating conditions, newly created or updated customer profiles become available
for the listing operation in well under 30 seconds. Occasionally, propagation of the new or updated
profiles can take closer to one minute or longer, especially during network incidents and outages.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.listCustomers();
  // TODO: Handle 'response' of type ListCustomersResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers.listCustomers().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListCustomersResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor?</code> | <code>string</code> | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for your original query.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| <code>limit?</code> | <code>number</code> | The maximum number of results to return in a single page. This limit is advisory. The response might contain more or fewer results.<br>If the specified limit is less than 1 or greater than 100, Square returns a `400 VALUE_TOO_LOW` or `400 VALUE_TOO_HIGH` error. The default value is 100.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| <code>sortField?</code> | <code>[CustomerSortField](src/models/customer-sort-field.ts)</code> | Indicates how customers should be sorted.<br><br>The default value is `DEFAULT`. |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Indicates whether customers should be sorted in ascending (`ASC`) or<br>descending (`DESC`) order.<br><br>The default value is `ASC`. |
| <code>count?</code> | <code>boolean</code> | Indicates whether to return the total count of customers in the `count` field of the response.<br><br>The default value is `false`.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.listCustomers(request)`

- **OnSuccess**: <code>[ListCustomersResponse](src/models/list-customers-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customers.listCustomers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListCustomersResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListCustomersResponse](src/models/list-customers-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>removeGroupFromCustomer(request: Customers.RemoveGroupFromCustomerRequest, options?: RequestOptions): ApiPromise&lt;RemoveGroupFromCustomerResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes a group membership from a customer.

The customer is identified by the `customer_id` value
and the customer group is identified by the `group_id` value.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.removeGroupFromCustomer({ customerId, groupId });
  // TODO: Handle 'response' of type RemoveGroupFromCustomerResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers.removeGroupFromCustomer({ customerId, groupId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RemoveGroupFromCustomerResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>string</code> | The ID of the customer to remove from the group. |
| <code>groupId</code> | <code>string</code> | The ID of the customer group to remove the customer from. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.removeGroupFromCustomer(request)`

- **OnSuccess**: <code>[RemoveGroupFromCustomerResponse](src/models/remove-group-from-customer-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customers.removeGroupFromCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RemoveGroupFromCustomerResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RemoveGroupFromCustomerResponse](src/models/remove-group-from-customer-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveCustomer(request: Customers.RetrieveCustomerRequest, options?: RequestOptions): ApiPromise&lt;RetrieveCustomerResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details for a single customer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.retrieveCustomer({ customerId });
  // TODO: Handle 'response' of type RetrieveCustomerResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers.retrieveCustomer({ customerId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveCustomerResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>string</code> | The ID of the customer to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.retrieveCustomer(request)`

- **OnSuccess**: <code>[RetrieveCustomerResponse](src/models/retrieve-customer-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customers.retrieveCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveCustomerResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveCustomerResponse](src/models/retrieve-customer-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchCustomers(request: Customers.SearchCustomersRequestParams, options?: RequestOptions): ApiPromise&lt;SearchCustomersResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches the customer profiles associated with a Square account using one or more supported query filters.

Calling `SearchCustomers` without any explicit query filter returns all
customer profiles ordered alphabetically based on `given_name` and
`family_name`.

Under normal operating conditions, newly created or updated customer profiles become available
for the search operation in well under 30 seconds. Occasionally, propagation of the new or updated
profiles can take closer to one minute or longer, especially during network incidents and outages.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.searchCustomers({ body });
  // TODO: Handle 'response' of type SearchCustomersResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers.searchCustomers({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchCustomersResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchCustomersRequest](src/models/search-customers-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.searchCustomers(request)`

- **OnSuccess**: <code>[SearchCustomersResponse](src/models/search-customers-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customers.searchCustomers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchCustomersResponse, ResponseError&gt;</code>, with `result.value` of type <code>[SearchCustomersResponse](src/models/search-customers-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCustomer(request: Customers.UpdateCustomerRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateCustomerResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a customer profile. This endpoint supports sparse updates, so only new or changed fields are required in the request.
To add or update a field, specify the new value. To remove a field, specify `null`.

To update a customer profile that was created by merging existing profiles, you must use the ID of the newly created profile.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customers.updateCustomer({ customerId, body });
  // TODO: Handle 'response' of type UpdateCustomerResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customers.updateCustomer({ customerId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateCustomerResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>string</code> | The ID of the customer to update. |
| <code>body</code> | <code>[UpdateCustomerRequest](src/models/update-customer-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customers.updateCustomer(request)`

- **OnSuccess**: <code>[UpdateCustomerResponse](src/models/update-customer-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customers.updateCustomer(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateCustomerResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateCustomerResponse](src/models/update-customer-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CustomerCustomAttributes

> Source: [CustomerCustomAttributes](src/resources/customer-custom-attributes.ts)

<details>
<summary><code>bulkUpsertCustomerCustomAttributes(request: CustomerCustomAttributes.BulkUpsertCustomerCustomAttributesRequestParams, options?: RequestOptions): ApiPromise&lt;BulkUpsertCustomerCustomAttributesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates [custom attributes](entity:CustomAttribute) for customer profiles as a bulk operation.

Use this endpoint to set the value of one or more custom attributes for one or more customer profiles.
A custom attribute is based on a custom attribute definition in a Square seller account, which is
created using the [CreateCustomerCustomAttributeDefinition](api-endpoint:CustomerCustomAttributes-CreateCustomerCustomAttributeDefinition) endpoint.

This `BulkUpsertCustomerCustomAttributes` endpoint accepts a map of 1 to 25 individual upsert
requests and returns a map of individual upsert responses. Each upsert request has a unique ID
and provides a customer ID and custom attribute. Each upsert response is returned with the ID
of the corresponding request.

To create or update a custom attribute owned by another application, the `visibility` setting
must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
(also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerCustomAttributes.bulkUpsertCustomerCustomAttributes({ body });
  // TODO: Handle 'response' of type BulkUpsertCustomerCustomAttributesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerCustomAttributes.bulkUpsertCustomerCustomAttributes({
  body,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkUpsertCustomerCustomAttributesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkUpsertCustomerCustomAttributesRequest](src/models/bulk-upsert-customer-custom-attributes-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerCustomAttributes.bulkUpsertCustomerCustomAttributes(request)`

- **OnSuccess**: <code>[BulkUpsertCustomerCustomAttributesResponse](src/models/bulk-upsert-customer-custom-attributes-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customerCustomAttributes.bulkUpsertCustomerCustomAttributes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkUpsertCustomerCustomAttributesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BulkUpsertCustomerCustomAttributesResponse](src/models/bulk-upsert-customer-custom-attributes-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createCustomerCustomAttributeDefinition(request: CustomerCustomAttributes.CreateCustomerCustomAttributeDefinitionRequestParams, options?: RequestOptions): ApiPromise&lt;CreateCustomerCustomAttributeDefinitionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a customer-related [custom attribute definition](entity:CustomAttributeDefinition) for a Square seller account.
Use this endpoint to define a custom attribute that can be associated with customer profiles.

A custom attribute definition specifies the `key`, `visibility`, `schema`, and other properties
for a custom attribute. After the definition is created, you can call
[UpsertCustomerCustomAttribute](api-endpoint:CustomerCustomAttributes-UpsertCustomerCustomAttribute) or
[BulkUpsertCustomerCustomAttributes](api-endpoint:CustomerCustomAttributes-BulkUpsertCustomerCustomAttributes)
to set the custom attribute for customer profiles in the seller's Customer Directory.

Sellers can view all custom attributes in exported customer data, including those set to
`VISIBILITY_HIDDEN`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerCustomAttributes.createCustomerCustomAttributeDefinition({ body });
  // TODO: Handle 'response' of type CreateCustomerCustomAttributeDefinitionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerCustomAttributes.createCustomerCustomAttributeDefinition({
  body,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateCustomerCustomAttributeDefinitionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateCustomerCustomAttributeDefinitionRequest](src/models/create-customer-custom-attribute-definition-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerCustomAttributes.createCustomerCustomAttributeDefinition(request)`

- **OnSuccess**: <code>[CreateCustomerCustomAttributeDefinitionResponse](src/models/create-customer-custom-attribute-definition-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customerCustomAttributes.createCustomerCustomAttributeDefinition(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateCustomerCustomAttributeDefinitionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateCustomerCustomAttributeDefinitionResponse](src/models/create-customer-custom-attribute-definition-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCustomerCustomAttribute(request: CustomerCustomAttributes.DeleteCustomerCustomAttributeRequest, options?: RequestOptions): ApiPromise&lt;DeleteCustomerCustomAttributeResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a [custom attribute](entity:CustomAttribute) associated with a customer profile.

To delete a custom attribute owned by another application, the `visibility` setting must be
`VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
(also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerCustomAttributes.deleteCustomerCustomAttribute({ customerId, key });
  // TODO: Handle 'response' of type DeleteCustomerCustomAttributeResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerCustomAttributes.deleteCustomerCustomAttribute({
  customerId,
  key,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteCustomerCustomAttributeResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>string</code> | The ID of the target [customer profile](entity:Customer). |
| <code>key</code> | <code>string</code> | The key of the custom attribute to delete. This key must match the `key` of a custom<br>attribute definition in the Square seller account. If the requesting application is not the<br>definition owner, you must use the qualified key. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerCustomAttributes.deleteCustomerCustomAttribute(request)`

- **OnSuccess**: <code>[DeleteCustomerCustomAttributeResponse](src/models/delete-customer-custom-attribute-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customerCustomAttributes.deleteCustomerCustomAttribute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteCustomerCustomAttributeResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DeleteCustomerCustomAttributeResponse](src/models/delete-customer-custom-attribute-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCustomerCustomAttributeDefinition(request: CustomerCustomAttributes.DeleteCustomerCustomAttributeDefinitionRequest, options?: RequestOptions): ApiPromise&lt;DeleteCustomerCustomAttributeDefinitionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a customer-related [custom attribute definition](entity:CustomAttributeDefinition) from a Square seller account.

Deleting a custom attribute definition also deletes the corresponding custom attribute from
all customer profiles in the seller's Customer Directory.

Only the definition owner can delete a custom attribute definition.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerCustomAttributes.deleteCustomerCustomAttributeDefinition({ key });
  // TODO: Handle 'response' of type DeleteCustomerCustomAttributeDefinitionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerCustomAttributes.deleteCustomerCustomAttributeDefinition({
  key,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteCustomerCustomAttributeDefinitionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | The key of the custom attribute definition to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerCustomAttributes.deleteCustomerCustomAttributeDefinition(request)`

- **OnSuccess**: <code>[DeleteCustomerCustomAttributeDefinitionResponse](src/models/delete-customer-custom-attribute-definition-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customerCustomAttributes.deleteCustomerCustomAttributeDefinition(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteCustomerCustomAttributeDefinitionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DeleteCustomerCustomAttributeDefinitionResponse](src/models/delete-customer-custom-attribute-definition-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomerCustomAttributeDefinitions(request: CustomerCustomAttributes.ListCustomerCustomAttributeDefinitionsRequest, options?: RequestOptions): ApiPromise&lt;ListCustomerCustomAttributeDefinitionsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the customer-related [custom attribute definitions](entity:CustomAttributeDefinition) that belong to a Square seller account.

When all response pages are retrieved, the results include all custom attribute definitions
that are visible to the requesting application, including those that are created by other
applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that
seller-defined custom attributes (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerCustomAttributes.listCustomerCustomAttributeDefinitions();
  // TODO: Handle 'response' of type ListCustomerCustomAttributeDefinitionsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerCustomAttributes.listCustomerCustomAttributeDefinitions().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListCustomerCustomAttributeDefinitionsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | The maximum number of results to return in a single paged response. This limit is advisory.<br>The response might contain more or fewer results. The minimum value is 1 and the maximum value is 100.<br>The default value is 20. For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| <code>cursor?</code> | <code>string</code> | The cursor returned in the paged response from the previous call to this endpoint.<br>Provide this cursor to retrieve the next page of results for your original request.<br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerCustomAttributes.listCustomerCustomAttributeDefinitions(request)`

- **OnSuccess**: <code>[ListCustomerCustomAttributeDefinitionsResponse](src/models/list-customer-custom-attribute-definitions-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customerCustomAttributes.listCustomerCustomAttributeDefinitions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListCustomerCustomAttributeDefinitionsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListCustomerCustomAttributeDefinitionsResponse](src/models/list-customer-custom-attribute-definitions-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomerCustomAttributes(request: CustomerCustomAttributes.ListCustomerCustomAttributesRequest, options?: RequestOptions): ApiPromise&lt;ListCustomerCustomAttributesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the [custom attributes](entity:CustomAttribute) associated with a customer profile.

You can use the `with_definitions` query parameter to also retrieve custom attribute definitions
in the same call.

When all response pages are retrieved, the results include all custom attributes that are
visible to the requesting application, including those that are owned by other applications
and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerCustomAttributes.listCustomerCustomAttributes({ customerId });
  // TODO: Handle 'response' of type ListCustomerCustomAttributesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerCustomAttributes.listCustomerCustomAttributes({
  customerId,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListCustomerCustomAttributesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>string</code> | The ID of the target [customer profile](entity:Customer). |
| <code>limit?</code> | <code>number</code> | The maximum number of results to return in a single paged response. This limit is advisory.<br>The response might contain more or fewer results. The minimum value is 1 and the maximum value is 100.<br>The default value is 20. For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| <code>cursor?</code> | <code>string</code> | The cursor returned in the paged response from the previous call to this endpoint.<br>Provide this cursor to retrieve the next page of results for your original request. For more<br>information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| <code>withDefinitions?</code> | <code>boolean</code> | Indicates whether to return the [custom attribute definition](entity:CustomAttributeDefinition) in the `definition` field of each<br>custom attribute. Set this parameter to `true` to get the name and description of each custom<br>attribute, information about the data type, or other definition details. The default value is `false`.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerCustomAttributes.listCustomerCustomAttributes(request)`

- **OnSuccess**: <code>[ListCustomerCustomAttributesResponse](src/models/list-customer-custom-attributes-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customerCustomAttributes.listCustomerCustomAttributes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListCustomerCustomAttributesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListCustomerCustomAttributesResponse](src/models/list-customer-custom-attributes-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveCustomerCustomAttribute(request: CustomerCustomAttributes.RetrieveCustomerCustomAttributeRequest, options?: RequestOptions): ApiPromise&lt;RetrieveCustomerCustomAttributeResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a [custom attribute](entity:CustomAttribute) associated with a customer profile.

You can use the `with_definition` query parameter to also retrieve the custom attribute definition
in the same call.

To retrieve a custom attribute owned by another application, the `visibility` setting must be
`VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
(also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerCustomAttributes.retrieveCustomerCustomAttribute({ customerId, key });
  // TODO: Handle 'response' of type RetrieveCustomerCustomAttributeResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerCustomAttributes.retrieveCustomerCustomAttribute({
  customerId,
  key,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveCustomerCustomAttributeResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>string</code> | The ID of the target [customer profile](entity:Customer). |
| <code>key</code> | <code>string</code> | The key of the custom attribute to retrieve. This key must match the `key` of a custom<br>attribute definition in the Square seller account. If the requesting application is not the<br>definition owner, you must use the qualified key. |
| <code>withDefinition?</code> | <code>boolean</code> | Indicates whether to return the [custom attribute definition](entity:CustomAttributeDefinition) in the `definition` field of<br>the custom attribute. Set this parameter to `true` to get the name and description of the custom<br>attribute, information about the data type, or other definition details. The default value is `false`.<br>**Default**: false |
| <code>version?</code> | <code>number</code> | The current version of the custom attribute, which is used for strongly consistent reads to<br>guarantee that you receive the most up-to-date data. When included in the request, Square<br>returns the specified version or a higher version if one exists. If the specified version is<br>higher than the current version, Square returns a `BAD_REQUEST` error. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerCustomAttributes.retrieveCustomerCustomAttribute(request)`

- **OnSuccess**: <code>[RetrieveCustomerCustomAttributeResponse](src/models/retrieve-customer-custom-attribute-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customerCustomAttributes.retrieveCustomerCustomAttribute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveCustomerCustomAttributeResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveCustomerCustomAttributeResponse](src/models/retrieve-customer-custom-attribute-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveCustomerCustomAttributeDefinition(request: CustomerCustomAttributes.RetrieveCustomerCustomAttributeDefinitionRequest, options?: RequestOptions): ApiPromise&lt;RetrieveCustomerCustomAttributeDefinitionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a customer-related [custom attribute definition](entity:CustomAttributeDefinition) from a Square seller account.

To retrieve a custom attribute definition created by another application, the `visibility`
setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
(also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerCustomAttributes.retrieveCustomerCustomAttributeDefinition({ key });
  // TODO: Handle 'response' of type RetrieveCustomerCustomAttributeDefinitionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerCustomAttributes.retrieveCustomerCustomAttributeDefinition({
  key,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveCustomerCustomAttributeDefinitionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | The key of the custom attribute definition to retrieve. If the requesting application<br>is not the definition owner, you must use the qualified key. |
| <code>version?</code> | <code>number</code> | The current version of the custom attribute definition, which is used for strongly consistent<br>reads to guarantee that you receive the most up-to-date data. When included in the request,<br>Square returns the specified version or a higher version if one exists. If the specified version<br>is higher than the current version, Square returns a `BAD_REQUEST` error. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerCustomAttributes.retrieveCustomerCustomAttributeDefinition(request)`

- **OnSuccess**: <code>[RetrieveCustomerCustomAttributeDefinitionResponse](src/models/retrieve-customer-custom-attribute-definition-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customerCustomAttributes.retrieveCustomerCustomAttributeDefinition(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveCustomerCustomAttributeDefinitionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveCustomerCustomAttributeDefinitionResponse](src/models/retrieve-customer-custom-attribute-definition-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCustomerCustomAttributeDefinition(request: CustomerCustomAttributes.UpdateCustomerCustomAttributeDefinitionRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateCustomerCustomAttributeDefinitionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a customer-related [custom attribute definition](entity:CustomAttributeDefinition) for a Square seller account.

Use this endpoint to update the following fields: `name`, `description`, `visibility`, or the
`schema` for a `Selection` data type.

Only the definition owner can update a custom attribute definition. Note that sellers can view
all custom attributes in exported customer data, including those set to `VISIBILITY_HIDDEN`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerCustomAttributes.updateCustomerCustomAttributeDefinition({
    key,
    body,
  });
  // TODO: Handle 'response' of type UpdateCustomerCustomAttributeDefinitionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerCustomAttributes.updateCustomerCustomAttributeDefinition({
  key,
  body,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateCustomerCustomAttributeDefinitionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | The key of the custom attribute definition to update. |
| <code>body</code> | <code>[UpdateCustomerCustomAttributeDefinitionRequest](src/models/update-customer-custom-attribute-definition-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerCustomAttributes.updateCustomerCustomAttributeDefinition(request)`

- **OnSuccess**: <code>[UpdateCustomerCustomAttributeDefinitionResponse](src/models/update-customer-custom-attribute-definition-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customerCustomAttributes.updateCustomerCustomAttributeDefinition(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateCustomerCustomAttributeDefinitionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateCustomerCustomAttributeDefinitionResponse](src/models/update-customer-custom-attribute-definition-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>upsertCustomerCustomAttribute(request: CustomerCustomAttributes.UpsertCustomerCustomAttributeRequestParams, options?: RequestOptions): ApiPromise&lt;UpsertCustomerCustomAttributeResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates a [custom attribute](entity:CustomAttribute) for a customer profile.

Use this endpoint to set the value of a custom attribute for a specified customer profile.
A custom attribute is based on a custom attribute definition in a Square seller account, which
is created using the [CreateCustomerCustomAttributeDefinition](api-endpoint:CustomerCustomAttributes-CreateCustomerCustomAttributeDefinition) endpoint.

To create or update a custom attribute owned by another application, the `visibility` setting
must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
(also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerCustomAttributes.upsertCustomerCustomAttribute({
    customerId,
    key,
    body,
  });
  // TODO: Handle 'response' of type UpsertCustomerCustomAttributeResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerCustomAttributes.upsertCustomerCustomAttribute({
  customerId,
  key,
  body,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpsertCustomerCustomAttributeResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>customerId</code> | <code>string</code> | The ID of the target [customer profile](entity:Customer). |
| <code>key</code> | <code>string</code> | The key of the custom attribute to create or update. This key must match the `key` of a<br>custom attribute definition in the Square seller account. If the requesting application is not<br>the definition owner, you must use the qualified key. |
| <code>body</code> | <code>[UpsertCustomerCustomAttributeRequest](src/models/upsert-customer-custom-attribute-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerCustomAttributes.upsertCustomerCustomAttribute(request)`

- **OnSuccess**: <code>[UpsertCustomerCustomAttributeResponse](src/models/upsert-customer-custom-attribute-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customerCustomAttributes.upsertCustomerCustomAttribute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpsertCustomerCustomAttributeResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpsertCustomerCustomAttributeResponse](src/models/upsert-customer-custom-attribute-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CustomerGroups

> Source: [CustomerGroups](src/resources/customer-groups.ts)

<details>
<summary><code>createCustomerGroup(request: CustomerGroups.CreateCustomerGroupRequestParams, options?: RequestOptions): ApiPromise&lt;CreateCustomerGroupResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new customer group for a business.

The request must include the `name` value of the group.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerGroups.createCustomerGroup({ body });
  // TODO: Handle 'response' of type CreateCustomerGroupResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerGroups.createCustomerGroup({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateCustomerGroupResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateCustomerGroupRequest](src/models/create-customer-group-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerGroups.createCustomerGroup(request)`

- **OnSuccess**: <code>[CreateCustomerGroupResponse](src/models/create-customer-group-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customerGroups.createCustomerGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateCustomerGroupResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateCustomerGroupResponse](src/models/create-customer-group-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteCustomerGroup(request: CustomerGroups.DeleteCustomerGroupRequest, options?: RequestOptions): ApiPromise&lt;DeleteCustomerGroupResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a customer group as identified by the `group_id` value.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerGroups.deleteCustomerGroup({ groupId });
  // TODO: Handle 'response' of type DeleteCustomerGroupResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerGroups.deleteCustomerGroup({ groupId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteCustomerGroupResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupId</code> | <code>string</code> | The ID of the customer group to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerGroups.deleteCustomerGroup(request)`

- **OnSuccess**: <code>[DeleteCustomerGroupResponse](src/models/delete-customer-group-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customerGroups.deleteCustomerGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteCustomerGroupResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DeleteCustomerGroupResponse](src/models/delete-customer-group-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listCustomerGroups(request: CustomerGroups.ListCustomerGroupsRequest, options?: RequestOptions): ApiPromise&lt;ListCustomerGroupsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the list of customer groups of a business.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerGroups.listCustomerGroups();
  // TODO: Handle 'response' of type ListCustomerGroupsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerGroups.listCustomerGroups().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListCustomerGroupsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor?</code> | <code>string</code> | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for your original query.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| <code>limit?</code> | <code>number</code> | The maximum number of results to return in a single page. This limit is advisory. The response might contain more or fewer results.<br>If the limit is less than 1 or greater than 50, Square returns a `400 VALUE_TOO_LOW` or `400 VALUE_TOO_HIGH` error. The default value is 50.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerGroups.listCustomerGroups(request)`

- **OnSuccess**: <code>[ListCustomerGroupsResponse](src/models/list-customer-groups-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customerGroups.listCustomerGroups(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListCustomerGroupsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListCustomerGroupsResponse](src/models/list-customer-groups-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveCustomerGroup(request: CustomerGroups.RetrieveCustomerGroupRequest, options?: RequestOptions): ApiPromise&lt;RetrieveCustomerGroupResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific customer group as identified by the `group_id` value.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerGroups.retrieveCustomerGroup({ groupId });
  // TODO: Handle 'response' of type RetrieveCustomerGroupResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerGroups.retrieveCustomerGroup({ groupId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveCustomerGroupResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupId</code> | <code>string</code> | The ID of the customer group to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerGroups.retrieveCustomerGroup(request)`

- **OnSuccess**: <code>[RetrieveCustomerGroupResponse](src/models/retrieve-customer-group-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customerGroups.retrieveCustomerGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveCustomerGroupResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveCustomerGroupResponse](src/models/retrieve-customer-group-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateCustomerGroup(request: CustomerGroups.UpdateCustomerGroupRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateCustomerGroupResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a customer group as identified by the `group_id` value.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerGroups.updateCustomerGroup({ groupId, body });
  // TODO: Handle 'response' of type UpdateCustomerGroupResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerGroups.updateCustomerGroup({ groupId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateCustomerGroupResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>groupId</code> | <code>string</code> | The ID of the customer group to update. |
| <code>body</code> | <code>[UpdateCustomerGroupRequest](src/models/update-customer-group-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerGroups.updateCustomerGroup(request)`

- **OnSuccess**: <code>[UpdateCustomerGroupResponse](src/models/update-customer-group-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customerGroups.updateCustomerGroup(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateCustomerGroupResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateCustomerGroupResponse](src/models/update-customer-group-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CustomerSegments

> Source: [CustomerSegments](src/resources/customer-segments.ts)

<details>
<summary><code>listCustomerSegments(request: CustomerSegments.ListCustomerSegmentsRequest, options?: RequestOptions): ApiPromise&lt;ListCustomerSegmentsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the list of customer segments of a business.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerSegments.listCustomerSegments();
  // TODO: Handle 'response' of type ListCustomerSegmentsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerSegments.listCustomerSegments().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListCustomerSegmentsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor?</code> | <code>string</code> | A pagination cursor returned by previous calls to `ListCustomerSegments`.<br>This cursor is used to retrieve the next set of query results.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| <code>limit?</code> | <code>number</code> | The maximum number of results to return in a single page. This limit is advisory. The response might contain more or fewer results.<br>If the specified limit is less than 1 or greater than 50, Square returns a `400 VALUE_TOO_LOW` or `400 VALUE_TOO_HIGH` error. The default value is 50.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerSegments.listCustomerSegments(request)`

- **OnSuccess**: <code>[ListCustomerSegmentsResponse](src/models/list-customer-segments-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customerSegments.listCustomerSegments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListCustomerSegmentsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListCustomerSegmentsResponse](src/models/list-customer-segments-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveCustomerSegment(request: CustomerSegments.RetrieveCustomerSegmentRequest, options?: RequestOptions): ApiPromise&lt;RetrieveCustomerSegmentResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific customer segment as identified by the `segment_id` value.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.customerSegments.retrieveCustomerSegment({ segmentId });
  // TODO: Handle 'response' of type RetrieveCustomerSegmentResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.customerSegments.retrieveCustomerSegment({ segmentId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveCustomerSegmentResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>segmentId</code> | <code>string</code> | The Square-issued ID of the customer segment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.customerSegments.retrieveCustomerSegment(request)`

- **OnSuccess**: <code>[RetrieveCustomerSegmentResponse](src/models/retrieve-customer-segment-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.customerSegments.retrieveCustomerSegment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveCustomerSegmentResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveCustomerSegmentResponse](src/models/retrieve-customer-segment-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Devices

> Source: [Devices](src/resources/devices.ts)

<details>
<summary><code>createDeviceCode(request: Devices.CreateDeviceCodeRequestParams, options?: RequestOptions): ApiPromise&lt;CreateDeviceCodeResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a DeviceCode that can be used to login to a Square Terminal device to enter the connected
terminal mode.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.devices.createDeviceCode({ body });
  // TODO: Handle 'response' of type CreateDeviceCodeResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.devices.createDeviceCode({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateDeviceCodeResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateDeviceCodeRequest](src/models/create-device-code-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.devices.createDeviceCode(request)`

- **OnSuccess**: <code>[CreateDeviceCodeResponse](src/models/create-device-code-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.devices.createDeviceCode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateDeviceCodeResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateDeviceCodeResponse](src/models/create-device-code-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDevice(request: Devices.GetDeviceRequest, options?: RequestOptions): ApiPromise&lt;GetDeviceResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves Device with the associated `device_id`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.devices.getDevice({ deviceId });
  // TODO: Handle 'response' of type GetDeviceResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.devices.getDevice({ deviceId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetDeviceResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>deviceId</code> | <code>string</code> | The unique ID for the desired `Device`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.devices.getDevice(request)`

- **OnSuccess**: <code>[GetDeviceResponse](src/models/get-device-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.devices.getDevice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetDeviceResponse, ResponseError&gt;</code>, with `result.value` of type <code>[GetDeviceResponse](src/models/get-device-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getDeviceCode(request: Devices.GetDeviceCodeRequest, options?: RequestOptions): ApiPromise&lt;GetDeviceCodeResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves DeviceCode with the associated ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.devices.getDeviceCode({ id });
  // TODO: Handle 'response' of type GetDeviceCodeResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.devices.getDeviceCode({ id }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetDeviceCodeResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The unique identifier for the device code. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.devices.getDeviceCode(request)`

- **OnSuccess**: <code>[GetDeviceCodeResponse](src/models/get-device-code-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.devices.getDeviceCode(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetDeviceCodeResponse, ResponseError&gt;</code>, with `result.value` of type <code>[GetDeviceCodeResponse](src/models/get-device-code-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDeviceCodes(request: Devices.ListDeviceCodesRequest, options?: RequestOptions): ApiPromise&lt;ListDeviceCodesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all DeviceCodes associated with the merchant.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.devices.listDeviceCodes();
  // TODO: Handle 'response' of type ListDeviceCodesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.devices.listDeviceCodes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListDeviceCodesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor?</code> | <code>string</code> | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for your original query.<br><br>See [Paginating results](https://developer.squareup.com/docs/working-with-apis/pagination) for more information. |
| <code>locationId?</code> | <code>string</code> | If specified, only returns DeviceCodes of the specified location.<br>Returns DeviceCodes of all locations if empty. |
| <code>productType?</code> | <code>[ProductType](src/models/product-type.ts)</code> | If specified, only returns DeviceCodes targeting the specified product type.<br>Returns DeviceCodes of all product types if empty. |
| <code>status?</code> | <code>[DeviceCodeStatus](src/models/device-code-status.ts)</code> | If specified, returns DeviceCodes with the specified statuses.<br>Returns DeviceCodes of status `PAIRED` and `UNPAIRED` if empty. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.devices.listDeviceCodes(request)`

- **OnSuccess**: <code>[ListDeviceCodesResponse](src/models/list-device-codes-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.devices.listDeviceCodes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListDeviceCodesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListDeviceCodesResponse](src/models/list-device-codes-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDevices(request: Devices.ListDevicesRequest, options?: RequestOptions): ApiPromise&lt;ListDevicesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

List devices associated with the merchant. Currently, only Terminal API
devices are supported.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.devices.listDevices();
  // TODO: Handle 'response' of type ListDevicesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.devices.listDevices().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListDevicesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor?</code> | <code>string</code> | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for the original query.<br>See [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination) for more information. |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | The order in which results are listed.<br>- `ASC` - Oldest to newest.<br>- `DESC` - Newest to oldest (default). |
| <code>limit?</code> | <code>number</code> | The number of results to return in a single page. |
| <code>locationId?</code> | <code>string</code> | If present, only returns devices at the target location. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.devices.listDevices(request)`

- **OnSuccess**: <code>[ListDevicesResponse](src/models/list-devices-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.devices.listDevices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListDevicesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListDevicesResponse](src/models/list-devices-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Disputes

> Source: [Disputes](src/resources/disputes.ts)

<details>
<summary><code>acceptDispute(request: Disputes.AcceptDisputeRequest, options?: RequestOptions): ApiPromise&lt;AcceptDisputeResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Accepts the loss on a dispute. Square returns the disputed amount to the cardholder and
updates the dispute state to ACCEPTED.

Square debits the disputed amount from the seller’s Square account. If the Square account
does not have sufficient funds, Square debits the associated bank account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputes.acceptDispute({ disputeId });
  // TODO: Handle 'response' of type AcceptDisputeResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disputes.acceptDispute({ disputeId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AcceptDisputeResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>disputeId</code> | <code>string</code> | The ID of the dispute you want to accept. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disputes.acceptDispute(request)`

- **OnSuccess**: <code>[AcceptDisputeResponse](src/models/accept-dispute-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.disputes.acceptDispute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AcceptDisputeResponse, ResponseError&gt;</code>, with `result.value` of type <code>[AcceptDisputeResponse](src/models/accept-dispute-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createDisputeEvidenceFile(request: Disputes.CreateDisputeEvidenceFileRequestParams, options?: RequestOptions): ApiPromise&lt;CreateDisputeEvidenceFileResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads a file to use as evidence in a dispute challenge. The endpoint accepts HTTP
multipart/form-data file uploads in HEIC, HEIF, JPEG, PDF, PNG, and TIFF formats.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputes.createDisputeEvidenceFile({ disputeId });
  // TODO: Handle 'response' of type CreateDisputeEvidenceFileResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disputes.createDisputeEvidenceFile({ disputeId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateDisputeEvidenceFileResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>disputeId</code> | <code>string</code> | The ID of the dispute for which you want to upload evidence. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disputes.createDisputeEvidenceFile(request)`

- **OnSuccess**: <code>[CreateDisputeEvidenceFileResponse](src/models/create-dispute-evidence-file-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.disputes.createDisputeEvidenceFile(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateDisputeEvidenceFileResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateDisputeEvidenceFileResponse](src/models/create-dispute-evidence-file-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createDisputeEvidenceText(request: Disputes.CreateDisputeEvidenceTextRequestParams, options?: RequestOptions): ApiPromise&lt;CreateDisputeEvidenceTextResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads text to use as evidence for a dispute challenge.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputes.createDisputeEvidenceText({ disputeId, body });
  // TODO: Handle 'response' of type CreateDisputeEvidenceTextResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disputes.createDisputeEvidenceText({ disputeId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateDisputeEvidenceTextResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>disputeId</code> | <code>string</code> | The ID of the dispute for which you want to upload evidence. |
| <code>body</code> | <code>[CreateDisputeEvidenceTextRequest](src/models/create-dispute-evidence-text-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disputes.createDisputeEvidenceText(request)`

- **OnSuccess**: <code>[CreateDisputeEvidenceTextResponse](src/models/create-dispute-evidence-text-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.disputes.createDisputeEvidenceText(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateDisputeEvidenceTextResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateDisputeEvidenceTextResponse](src/models/create-dispute-evidence-text-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteDisputeEvidence(request: Disputes.DeleteDisputeEvidenceRequest, options?: RequestOptions): ApiPromise&lt;DeleteDisputeEvidenceResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes specified evidence from a dispute.
Square does not send the bank any evidence that is removed.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputes.deleteDisputeEvidence({ disputeId, evidenceId });
  // TODO: Handle 'response' of type DeleteDisputeEvidenceResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disputes.deleteDisputeEvidence({ disputeId, evidenceId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteDisputeEvidenceResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>disputeId</code> | <code>string</code> | The ID of the dispute from which you want to remove evidence. |
| <code>evidenceId</code> | <code>string</code> | The ID of the evidence you want to remove. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disputes.deleteDisputeEvidence(request)`

- **OnSuccess**: <code>[DeleteDisputeEvidenceResponse](src/models/delete-dispute-evidence-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.disputes.deleteDisputeEvidence(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteDisputeEvidenceResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DeleteDisputeEvidenceResponse](src/models/delete-dispute-evidence-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDisputeEvidence(request: Disputes.ListDisputeEvidenceRequest, options?: RequestOptions): ApiPromise&lt;ListDisputeEvidenceResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of evidence associated with a dispute.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputes.listDisputeEvidence({ disputeId });
  // TODO: Handle 'response' of type ListDisputeEvidenceResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disputes.listDisputeEvidence({ disputeId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListDisputeEvidenceResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>disputeId</code> | <code>string</code> | The ID of the dispute. |
| <code>cursor?</code> | <code>string</code> | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for the original query.<br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disputes.listDisputeEvidence(request)`

- **OnSuccess**: <code>[ListDisputeEvidenceResponse](src/models/list-dispute-evidence-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.disputes.listDisputeEvidence(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListDisputeEvidenceResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListDisputeEvidenceResponse](src/models/list-dispute-evidence-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listDisputes(request: Disputes.ListDisputesRequest, options?: RequestOptions): ApiPromise&lt;ListDisputesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of disputes associated with a particular account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputes.listDisputes();
  // TODO: Handle 'response' of type ListDisputesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disputes.listDisputes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListDisputesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor?</code> | <code>string</code> | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for the original query.<br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| <code>states?</code> | <code>[DisputeState](src/models/dispute-state.ts)</code> | The dispute states used to filter the result. If not specified, the endpoint returns all disputes. |
| <code>locationId?</code> | <code>string</code> | The ID of the location for which to return a list of disputes.<br>If not specified, the endpoint returns disputes associated with all locations. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disputes.listDisputes(request)`

- **OnSuccess**: <code>[ListDisputesResponse](src/models/list-disputes-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.disputes.listDisputes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListDisputesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListDisputesResponse](src/models/list-disputes-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveDispute(request: Disputes.RetrieveDisputeRequest, options?: RequestOptions): ApiPromise&lt;RetrieveDisputeResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns details about a specific dispute.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputes.retrieveDispute({ disputeId });
  // TODO: Handle 'response' of type RetrieveDisputeResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disputes.retrieveDispute({ disputeId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveDisputeResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>disputeId</code> | <code>string</code> | The ID of the dispute you want more details about. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disputes.retrieveDispute(request)`

- **OnSuccess**: <code>[RetrieveDisputeResponse](src/models/retrieve-dispute-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.disputes.retrieveDispute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveDisputeResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveDisputeResponse](src/models/retrieve-dispute-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveDisputeEvidence(request: Disputes.RetrieveDisputeEvidenceRequest, options?: RequestOptions): ApiPromise&lt;RetrieveDisputeEvidenceResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the metadata for the evidence specified in the request URL path.

You must maintain a copy of any evidence uploaded if you want to reference it later. Evidence cannot be downloaded after you upload it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputes.retrieveDisputeEvidence({ disputeId, evidenceId });
  // TODO: Handle 'response' of type RetrieveDisputeEvidenceResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disputes.retrieveDisputeEvidence({ disputeId, evidenceId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveDisputeEvidenceResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>disputeId</code> | <code>string</code> | The ID of the dispute from which you want to retrieve evidence metadata. |
| <code>evidenceId</code> | <code>string</code> | The ID of the evidence to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disputes.retrieveDisputeEvidence(request)`

- **OnSuccess**: <code>[RetrieveDisputeEvidenceResponse](src/models/retrieve-dispute-evidence-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.disputes.retrieveDisputeEvidence(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveDisputeEvidenceResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveDisputeEvidenceResponse](src/models/retrieve-dispute-evidence-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>submitEvidence(request: Disputes.SubmitEvidenceRequest, options?: RequestOptions): ApiPromise&lt;SubmitEvidenceResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Submits evidence to the cardholder's bank.

The evidence submitted by this endpoint includes evidence uploaded
using the [CreateDisputeEvidenceFile](api-endpoint:Disputes-CreateDisputeEvidenceFile) and
[CreateDisputeEvidenceText](api-endpoint:Disputes-CreateDisputeEvidenceText) endpoints and
evidence automatically provided by Square, when available. Evidence cannot be removed from
a dispute after submission.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.disputes.submitEvidence({ disputeId });
  // TODO: Handle 'response' of type SubmitEvidenceResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.disputes.submitEvidence({ disputeId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SubmitEvidenceResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>disputeId</code> | <code>string</code> | The ID of the dispute for which you want to submit evidence. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.disputes.submitEvidence(request)`

- **OnSuccess**: <code>[SubmitEvidenceResponse](src/models/submit-evidence-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.disputes.submitEvidence(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SubmitEvidenceResponse, ResponseError&gt;</code>, with `result.value` of type <code>[SubmitEvidenceResponse](src/models/submit-evidence-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Employees

> Source: [Employees](src/resources/employees.ts)

<details>
<summary><code>listEmployees(request: Employees.ListEmployeesRequest, options?: RequestOptions): ApiPromise&lt;ListEmployeesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.employees.listEmployees();
  // TODO: Handle 'response' of type ListEmployeesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.employees.listEmployees().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListEmployeesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locationId?</code> | <code>string</code> | - |
| <code>status?</code> | <code>[EmployeeStatus](src/models/employee-status.ts)</code> | Specifies the EmployeeStatus to filter the employee by. |
| <code>limit?</code> | <code>number</code> | The number of employees to be returned on each page. |
| <code>cursor?</code> | <code>string</code> | The token required to retrieve the specified page of results. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.employees.listEmployees(request)`

- **OnSuccess**: <code>[ListEmployeesResponse](src/models/list-employees-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.employees.listEmployees(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListEmployeesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListEmployeesResponse](src/models/list-employees-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveEmployee(request: Employees.RetrieveEmployeeRequest, options?: RequestOptions): ApiPromise&lt;RetrieveEmployeeResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.employees.retrieveEmployee({ id });
  // TODO: Handle 'response' of type RetrieveEmployeeResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.employees.retrieveEmployee({ id }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveEmployeeResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | UUID for the employee that was requested. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.employees.retrieveEmployee(request)`

- **OnSuccess**: <code>[RetrieveEmployeeResponse](src/models/retrieve-employee-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.employees.retrieveEmployee(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveEmployeeResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveEmployeeResponse](src/models/retrieve-employee-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Events

> Source: [Events](src/resources/events.ts)

<details>
<summary><code>disableEvents(options?: RequestOptions): ApiPromise&lt;DisableEventsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Disables events to prevent them from being searchable.
All events are disabled by default. You must enable events to make them searchable.
Disabling events for a specific time period prevents them from being searchable, even if you re-enable them later.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.disableEvents();
  // TODO: Handle 'response' of type DisableEventsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.events.disableEvents().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DisableEventsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.disableEvents()`

- **OnSuccess**: <code>[DisableEventsResponse](src/models/disable-events-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.events.disableEvents().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DisableEventsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DisableEventsResponse](src/models/disable-events-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>enableEvents(options?: RequestOptions): ApiPromise&lt;EnableEventsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enables events to make them searchable. Only events that occur while in the enabled state are searchable.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.enableEvents();
  // TODO: Handle 'response' of type EnableEventsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.events.enableEvents().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type EnableEventsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.enableEvents()`

- **OnSuccess**: <code>[EnableEventsResponse](src/models/enable-events-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.events.enableEvents().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;EnableEventsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[EnableEventsResponse](src/models/enable-events-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEventTypes(request: Events.ListEventTypesRequest, options?: RequestOptions): ApiPromise&lt;ListEventTypesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all event types that you can subscribe to as webhooks or query using the Events API.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.listEventTypes();
  // TODO: Handle 'response' of type ListEventTypesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.events.listEventTypes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListEventTypesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiVersion?</code> | <code>string</code> | The API version for which to list event types. Setting this field overrides the default version used by the application. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.listEventTypes(request)`

- **OnSuccess**: <code>[ListEventTypesResponse](src/models/list-event-types-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.events.listEventTypes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListEventTypesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListEventTypesResponse](src/models/list-event-types-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchEvents(request: Events.SearchEventsRequestParams, options?: RequestOptions): ApiPromise&lt;SearchEventsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search for Square API events that occur within a 28-day timeframe.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.events.searchEvents({ body });
  // TODO: Handle 'response' of type SearchEventsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.events.searchEvents({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchEventsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchEventsRequest](src/models/search-events-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.events.searchEvents(request)`

- **OnSuccess**: <code>[SearchEventsResponse](src/models/search-events-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.events.searchEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchEventsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[SearchEventsResponse](src/models/search-events-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## GiftCards

> Source: [GiftCards](src/resources/gift-cards.ts)

<details>
<summary><code>createGiftCard(request: GiftCards.CreateGiftCardRequestParams, options?: RequestOptions): ApiPromise&lt;CreateGiftCardResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a digital gift card or registers a physical (plastic) gift card. The resulting gift card
has a `PENDING` state. To activate a gift card so that it can be redeemed for purchases, call
[CreateGiftCardActivity](api-endpoint:GiftCardActivities-CreateGiftCardActivity) and create an `ACTIVATE`
activity with the initial balance. Alternatively, you can use [RefundPayment](api-endpoint:Refunds-RefundPayment)
to refund a payment to the new gift card.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.giftCards.createGiftCard({ body });
  // TODO: Handle 'response' of type CreateGiftCardResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.giftCards.createGiftCard({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateGiftCardResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateGiftCardRequest](src/models/create-gift-card-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.giftCards.createGiftCard(request)`

- **OnSuccess**: <code>[CreateGiftCardResponse](src/models/create-gift-card-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.giftCards.createGiftCard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateGiftCardResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateGiftCardResponse](src/models/create-gift-card-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>linkCustomerToGiftCard(request: GiftCards.LinkCustomerToGiftCardRequestParams, options?: RequestOptions): ApiPromise&lt;LinkCustomerToGiftCardResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Links a customer to a gift card, which is also referred to as adding a card on file.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.giftCards.linkCustomerToGiftCard({ giftCardId, body });
  // TODO: Handle 'response' of type LinkCustomerToGiftCardResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.giftCards.linkCustomerToGiftCard({ giftCardId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type LinkCustomerToGiftCardResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>giftCardId</code> | <code>string</code> | The ID of the gift card to be linked. |
| <code>body</code> | <code>[LinkCustomerToGiftCardRequest](src/models/link-customer-to-gift-card-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.giftCards.linkCustomerToGiftCard(request)`

- **OnSuccess**: <code>[LinkCustomerToGiftCardResponse](src/models/link-customer-to-gift-card-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.giftCards.linkCustomerToGiftCard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;LinkCustomerToGiftCardResponse, ResponseError&gt;</code>, with `result.value` of type <code>[LinkCustomerToGiftCardResponse](src/models/link-customer-to-gift-card-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listGiftCards(request: GiftCards.ListGiftCardsRequest, options?: RequestOptions): ApiPromise&lt;ListGiftCardsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all gift cards. You can specify optional filters to retrieve 
a subset of the gift cards. Results are sorted by `created_at` in ascending order.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.giftCards.listGiftCards();
  // TODO: Handle 'response' of type ListGiftCardsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.giftCards.listGiftCards().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListGiftCardsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>type?</code> | <code>string</code> | If a [type](entity:GiftCardType) is provided, the endpoint returns gift cards of the specified type.<br>Otherwise, the endpoint returns gift cards of all types. |
| <code>state?</code> | <code>string</code> | If a [state](entity:GiftCardStatus) is provided, the endpoint returns the gift cards in the specified state.<br>Otherwise, the endpoint returns the gift cards of all states. |
| <code>limit?</code> | <code>number</code> | If a limit is provided, the endpoint returns only the specified number of results per page.<br>The maximum value is 200. The default value is 30.<br>For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination). |
| <code>cursor?</code> | <code>string</code> | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for the original query.<br>If a cursor is not provided, the endpoint returns the first page of the results. <br>For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination). |
| <code>customerId?</code> | <code>string</code> | If a customer ID is provided, the endpoint returns only the gift cards linked to the specified customer. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.giftCards.listGiftCards(request)`

- **OnSuccess**: <code>[ListGiftCardsResponse](src/models/list-gift-cards-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.giftCards.listGiftCards(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListGiftCardsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListGiftCardsResponse](src/models/list-gift-cards-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveGiftCard(request: GiftCards.RetrieveGiftCardRequest, options?: RequestOptions): ApiPromise&lt;RetrieveGiftCardResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a gift card using the gift card ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.giftCards.retrieveGiftCard({ id });
  // TODO: Handle 'response' of type RetrieveGiftCardResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.giftCards.retrieveGiftCard({ id }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveGiftCardResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The ID of the gift card to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.giftCards.retrieveGiftCard(request)`

- **OnSuccess**: <code>[RetrieveGiftCardResponse](src/models/retrieve-gift-card-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.giftCards.retrieveGiftCard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveGiftCardResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveGiftCardResponse](src/models/retrieve-gift-card-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveGiftCardFromGan(request: GiftCards.RetrieveGiftCardFromGanRequestParams, options?: RequestOptions): ApiPromise&lt;RetrieveGiftCardFromGanResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a gift card using the gift card account number (GAN).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.giftCards.retrieveGiftCardFromGan({ body });
  // TODO: Handle 'response' of type RetrieveGiftCardFromGanResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.giftCards.retrieveGiftCardFromGan({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveGiftCardFromGanResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RetrieveGiftCardFromGanRequest](src/models/retrieve-gift-card-from-gan-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.giftCards.retrieveGiftCardFromGan(request)`

- **OnSuccess**: <code>[RetrieveGiftCardFromGanResponse](src/models/retrieve-gift-card-from-gan-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.giftCards.retrieveGiftCardFromGan(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveGiftCardFromGanResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveGiftCardFromGanResponse](src/models/retrieve-gift-card-from-gan-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveGiftCardFromNonce(request: GiftCards.RetrieveGiftCardFromNonceRequestParams, options?: RequestOptions): ApiPromise&lt;RetrieveGiftCardFromNonceResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a gift card using a secure payment token that represents the gift card.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.giftCards.retrieveGiftCardFromNonce({ body });
  // TODO: Handle 'response' of type RetrieveGiftCardFromNonceResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.giftCards.retrieveGiftCardFromNonce({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveGiftCardFromNonceResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RetrieveGiftCardFromNonceRequest](src/models/retrieve-gift-card-from-nonce-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.giftCards.retrieveGiftCardFromNonce(request)`

- **OnSuccess**: <code>[RetrieveGiftCardFromNonceResponse](src/models/retrieve-gift-card-from-nonce-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.giftCards.retrieveGiftCardFromNonce(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveGiftCardFromNonceResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveGiftCardFromNonceResponse](src/models/retrieve-gift-card-from-nonce-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>unlinkCustomerFromGiftCard(request: GiftCards.UnlinkCustomerFromGiftCardRequestParams, options?: RequestOptions): ApiPromise&lt;UnlinkCustomerFromGiftCardResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Unlinks a customer from a gift card, which is also referred to as removing a card on file.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.giftCards.unlinkCustomerFromGiftCard({ giftCardId, body });
  // TODO: Handle 'response' of type UnlinkCustomerFromGiftCardResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.giftCards.unlinkCustomerFromGiftCard({ giftCardId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UnlinkCustomerFromGiftCardResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>giftCardId</code> | <code>string</code> | The ID of the gift card to be unlinked. |
| <code>body</code> | <code>[UnlinkCustomerFromGiftCardRequest](src/models/unlink-customer-from-gift-card-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.giftCards.unlinkCustomerFromGiftCard(request)`

- **OnSuccess**: <code>[UnlinkCustomerFromGiftCardResponse](src/models/unlink-customer-from-gift-card-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.giftCards.unlinkCustomerFromGiftCard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UnlinkCustomerFromGiftCardResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UnlinkCustomerFromGiftCardResponse](src/models/unlink-customer-from-gift-card-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## GiftCardActivities

> Source: [GiftCardActivities](src/resources/gift-card-activities.ts)

<details>
<summary><code>createGiftCardActivity(request: GiftCardActivities.CreateGiftCardActivityRequestParams, options?: RequestOptions): ApiPromise&lt;CreateGiftCardActivityResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a gift card activity to manage the balance or state of a [gift card](entity:GiftCard).
For example, create an `ACTIVATE` activity to activate a gift card with an initial balance before first use.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.giftCardActivities.createGiftCardActivity({ body });
  // TODO: Handle 'response' of type CreateGiftCardActivityResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.giftCardActivities.createGiftCardActivity({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateGiftCardActivityResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateGiftCardActivityRequest](src/models/create-gift-card-activity-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.giftCardActivities.createGiftCardActivity(request)`

- **OnSuccess**: <code>[CreateGiftCardActivityResponse](src/models/create-gift-card-activity-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.giftCardActivities.createGiftCardActivity(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateGiftCardActivityResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateGiftCardActivityResponse](src/models/create-gift-card-activity-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listGiftCardActivities(request: GiftCardActivities.ListGiftCardActivitiesRequest, options?: RequestOptions): ApiPromise&lt;ListGiftCardActivitiesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists gift card activities. By default, you get gift card activities for all
gift cards in the seller's account. You can optionally specify query parameters to
filter the list. For example, you can get a list of gift card activities for a gift card,
for all gift cards in a specific region, or for activities within a time window.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.giftCardActivities.listGiftCardActivities();
  // TODO: Handle 'response' of type ListGiftCardActivitiesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.giftCardActivities.listGiftCardActivities().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListGiftCardActivitiesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>giftCardId?</code> | <code>string</code> | If a gift card ID is provided, the endpoint returns activities related <br>to the specified gift card. Otherwise, the endpoint returns all gift card activities for <br>the seller. |
| <code>type?</code> | <code>string</code> | If a [type](entity:GiftCardActivityType) is provided, the endpoint returns gift card activities of the specified type. <br>Otherwise, the endpoint returns all types of gift card activities. |
| <code>locationId?</code> | <code>string</code> | If a location ID is provided, the endpoint returns gift card activities for the specified location. <br>Otherwise, the endpoint returns gift card activities for all locations. |
| <code>beginTime?</code> | <code>string</code> | The timestamp for the beginning of the reporting period, in RFC 3339 format.<br>This start time is inclusive. The default value is the current time minus one year. |
| <code>endTime?</code> | <code>string</code> | The timestamp for the end of the reporting period, in RFC 3339 format.<br>This end time is inclusive. The default value is the current time. |
| <code>limit?</code> | <code>number</code> | If a limit is provided, the endpoint returns the specified number <br>of results (or fewer) per page. The maximum value is 100. The default value is 50.<br>For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination). |
| <code>cursor?</code> | <code>string</code> | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for the original query.<br>If a cursor is not provided, the endpoint returns the first page of the results.<br>For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination). |
| <code>sortOrder?</code> | <code>string</code> | The order in which the endpoint returns the activities, based on `created_at`.<br>- `ASC` - Oldest to newest.<br>- `DESC` - Newest to oldest (default). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.giftCardActivities.listGiftCardActivities(request)`

- **OnSuccess**: <code>[ListGiftCardActivitiesResponse](src/models/list-gift-card-activities-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.giftCardActivities.listGiftCardActivities(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListGiftCardActivitiesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListGiftCardActivitiesResponse](src/models/list-gift-card-activities-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Inventory

> Source: [Inventory](src/resources/inventory.ts)

<details>
<summary><code>batchChangeInventory(request: Inventory.BatchChangeInventoryRequestParams, options?: RequestOptions): ApiPromise&lt;BatchChangeInventoryResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Applies adjustments and counts to the provided item quantities.

On success: returns the current calculated counts for all objects
referenced in the request.
On failure: returns a list of related errors.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventory.batchChangeInventory({ body });
  // TODO: Handle 'response' of type BatchChangeInventoryResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventory.batchChangeInventory({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchChangeInventoryResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BatchChangeInventoryRequest](src/models/batch-change-inventory-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventory.batchChangeInventory(request)`

- **OnSuccess**: <code>[BatchChangeInventoryResponse](src/models/batch-change-inventory-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.inventory.batchChangeInventory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchChangeInventoryResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BatchChangeInventoryResponse](src/models/batch-change-inventory-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>batchRetrieveInventoryChanges(request: Inventory.BatchRetrieveInventoryChangesRequestParams, options?: RequestOptions): ApiPromise&lt;BatchRetrieveInventoryChangesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns historical physical counts and adjustments based on the
provided filter criteria.

Results are paginated and sorted in ascending order according their
`occurred_at` timestamp (oldest first).

BatchRetrieveInventoryChanges is a catch-all query endpoint for queries
that cannot be handled by other, simpler endpoints.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventory.batchRetrieveInventoryChanges({ body });
  // TODO: Handle 'response' of type BatchRetrieveInventoryChangesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventory.batchRetrieveInventoryChanges({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchRetrieveInventoryChangesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BatchRetrieveInventoryChangesRequest](src/models/batch-retrieve-inventory-changes-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventory.batchRetrieveInventoryChanges(request)`

- **OnSuccess**: <code>[BatchRetrieveInventoryChangesResponse](src/models/batch-retrieve-inventory-changes-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.inventory.batchRetrieveInventoryChanges(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchRetrieveInventoryChangesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BatchRetrieveInventoryChangesResponse](src/models/batch-retrieve-inventory-changes-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>batchRetrieveInventoryCounts(request: Inventory.BatchRetrieveInventoryCountsRequestParams, options?: RequestOptions): ApiPromise&lt;BatchRetrieveInventoryCountsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns current counts for the provided
[CatalogObject](entity:CatalogObject)s at the requested
[Location](entity:Location)s.

Results are paginated and sorted in descending order according to their
`calculated_at` timestamp (newest first).

When `updated_after` is specified, only counts that have changed since that
time (based on the server timestamp for the most recent change) are
returned. This allows clients to perform a "sync" operation, for example
in response to receiving a Webhook notification.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventory.batchRetrieveInventoryCounts({ body });
  // TODO: Handle 'response' of type BatchRetrieveInventoryCountsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventory.batchRetrieveInventoryCounts({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchRetrieveInventoryCountsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BatchRetrieveInventoryCountsRequest](src/models/batch-retrieve-inventory-counts-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventory.batchRetrieveInventoryCounts(request)`

- **OnSuccess**: <code>[BatchRetrieveInventoryCountsResponse](src/models/batch-retrieve-inventory-counts-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.inventory.batchRetrieveInventoryCounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchRetrieveInventoryCountsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BatchRetrieveInventoryCountsResponse](src/models/batch-retrieve-inventory-counts-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createInventoryAdjustmentReason(request: Inventory.CreateInventoryAdjustmentReasonRequestParams, options?: RequestOptions): ApiPromise&lt;CreateInventoryAdjustmentReasonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a custom inventory adjustment reason.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventory.createInventoryAdjustmentReason({ body });
  // TODO: Handle 'response' of type CreateInventoryAdjustmentReasonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventory.createInventoryAdjustmentReason({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateInventoryAdjustmentReasonResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateInventoryAdjustmentReasonRequest](src/models/create-inventory-adjustment-reason-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventory.createInventoryAdjustmentReason(request)`

- **OnSuccess**: <code>[CreateInventoryAdjustmentReasonResponse](src/models/create-inventory-adjustment-reason-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.inventory.createInventoryAdjustmentReason(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateInventoryAdjustmentReasonResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateInventoryAdjustmentReasonResponse](src/models/create-inventory-adjustment-reason-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteInventoryAdjustmentReason(request: Inventory.DeleteInventoryAdjustmentReasonRequestParams, options?: RequestOptions): ApiPromise&lt;DeleteInventoryAdjustmentReasonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Soft deletes a custom inventory adjustment reason.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventory.deleteInventoryAdjustmentReason({ body });
  // TODO: Handle 'response' of type DeleteInventoryAdjustmentReasonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventory.deleteInventoryAdjustmentReason({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteInventoryAdjustmentReasonResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[DeleteInventoryAdjustmentReasonRequest](src/models/delete-inventory-adjustment-reason-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventory.deleteInventoryAdjustmentReason(request)`

- **OnSuccess**: <code>[DeleteInventoryAdjustmentReasonResponse](src/models/delete-inventory-adjustment-reason-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.inventory.deleteInventoryAdjustmentReason(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteInventoryAdjustmentReasonResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DeleteInventoryAdjustmentReasonResponse](src/models/delete-inventory-adjustment-reason-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deprecatedBatchChangeInventory(request: Inventory.DeprecatedBatchChangeInventoryRequest, options?: RequestOptions): ApiPromise&lt;BatchChangeInventoryResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated version of [BatchChangeInventory](api-endpoint:Inventory-BatchChangeInventory) after the endpoint URL
is updated to conform to the standard convention.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventory.deprecatedBatchChangeInventory({ body });
  // TODO: Handle 'response' of type BatchChangeInventoryResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventory.deprecatedBatchChangeInventory({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchChangeInventoryResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BatchChangeInventoryRequest](src/models/batch-change-inventory-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventory.deprecatedBatchChangeInventory(request)`

- **OnSuccess**: <code>[BatchChangeInventoryResponse](src/models/batch-change-inventory-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.inventory.deprecatedBatchChangeInventory(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchChangeInventoryResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BatchChangeInventoryResponse](src/models/batch-change-inventory-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deprecatedBatchRetrieveInventoryChanges(request: Inventory.DeprecatedBatchRetrieveInventoryChangesRequest, options?: RequestOptions): ApiPromise&lt;BatchRetrieveInventoryChangesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated version of [BatchRetrieveInventoryChanges](api-endpoint:Inventory-BatchRetrieveInventoryChanges) after the endpoint URL
is updated to conform to the standard convention.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventory.deprecatedBatchRetrieveInventoryChanges({ body });
  // TODO: Handle 'response' of type BatchRetrieveInventoryChangesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventory.deprecatedBatchRetrieveInventoryChanges({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchRetrieveInventoryChangesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BatchRetrieveInventoryChangesRequest](src/models/batch-retrieve-inventory-changes-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventory.deprecatedBatchRetrieveInventoryChanges(request)`

- **OnSuccess**: <code>[BatchRetrieveInventoryChangesResponse](src/models/batch-retrieve-inventory-changes-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.inventory.deprecatedBatchRetrieveInventoryChanges(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchRetrieveInventoryChangesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BatchRetrieveInventoryChangesResponse](src/models/batch-retrieve-inventory-changes-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deprecatedBatchRetrieveInventoryCounts(request: Inventory.DeprecatedBatchRetrieveInventoryCountsRequest, options?: RequestOptions): ApiPromise&lt;BatchRetrieveInventoryCountsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated version of [BatchRetrieveInventoryCounts](api-endpoint:Inventory-BatchRetrieveInventoryCounts) after the endpoint URL
is updated to conform to the standard convention.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventory.deprecatedBatchRetrieveInventoryCounts({ body });
  // TODO: Handle 'response' of type BatchRetrieveInventoryCountsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventory.deprecatedBatchRetrieveInventoryCounts({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchRetrieveInventoryCountsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BatchRetrieveInventoryCountsRequest](src/models/batch-retrieve-inventory-counts-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventory.deprecatedBatchRetrieveInventoryCounts(request)`

- **OnSuccess**: <code>[BatchRetrieveInventoryCountsResponse](src/models/batch-retrieve-inventory-counts-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.inventory.deprecatedBatchRetrieveInventoryCounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchRetrieveInventoryCountsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BatchRetrieveInventoryCountsResponse](src/models/batch-retrieve-inventory-counts-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deprecatedRetrieveInventoryAdjustment(request: Inventory.DeprecatedRetrieveInventoryAdjustmentRequest, options?: RequestOptions): ApiPromise&lt;RetrieveInventoryAdjustmentResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated version of [RetrieveInventoryAdjustment](api-endpoint:Inventory-RetrieveInventoryAdjustment) after the endpoint URL
is updated to conform to the standard convention.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventory.deprecatedRetrieveInventoryAdjustment({ adjustmentId });
  // TODO: Handle 'response' of type RetrieveInventoryAdjustmentResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventory.deprecatedRetrieveInventoryAdjustment({ adjustmentId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveInventoryAdjustmentResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>adjustmentId</code> | <code>string</code> | ID of the [InventoryAdjustment](entity:InventoryAdjustment) to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventory.deprecatedRetrieveInventoryAdjustment(request)`

- **OnSuccess**: <code>[RetrieveInventoryAdjustmentResponse](src/models/retrieve-inventory-adjustment-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.inventory.deprecatedRetrieveInventoryAdjustment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveInventoryAdjustmentResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveInventoryAdjustmentResponse](src/models/retrieve-inventory-adjustment-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deprecatedRetrieveInventoryPhysicalCount(request: Inventory.DeprecatedRetrieveInventoryPhysicalCountRequest, options?: RequestOptions): ApiPromise&lt;RetrieveInventoryPhysicalCountResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deprecated version of [RetrieveInventoryPhysicalCount](api-endpoint:Inventory-RetrieveInventoryPhysicalCount) after the endpoint URL
is updated to conform to the standard convention.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventory.deprecatedRetrieveInventoryPhysicalCount({ physicalCountId });
  // TODO: Handle 'response' of type RetrieveInventoryPhysicalCountResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventory.deprecatedRetrieveInventoryPhysicalCount({
  physicalCountId,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveInventoryPhysicalCountResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>physicalCountId</code> | <code>string</code> | ID of the<br>[InventoryPhysicalCount](entity:InventoryPhysicalCount) to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventory.deprecatedRetrieveInventoryPhysicalCount(request)`

- **OnSuccess**: <code>[RetrieveInventoryPhysicalCountResponse](src/models/retrieve-inventory-physical-count-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.inventory.deprecatedRetrieveInventoryPhysicalCount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveInventoryPhysicalCountResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveInventoryPhysicalCountResponse](src/models/retrieve-inventory-physical-count-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listInventoryAdjustmentReasons(request: Inventory.ListInventoryAdjustmentReasonsRequest, options?: RequestOptions): ApiPromise&lt;ListInventoryAdjustmentReasonsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the standard and custom inventory adjustment reasons available
to the seller.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventory.listInventoryAdjustmentReasons();
  // TODO: Handle 'response' of type ListInventoryAdjustmentReasonsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventory.listInventoryAdjustmentReasons().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListInventoryAdjustmentReasonsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>includeDeleted?</code> | <code>boolean</code> | Indicates whether the response should include deleted custom inventory<br>adjustment reasons. The default value is `false`.<br>**Default**: false |
| <code>includeSystemCodes?</code> | <code>boolean</code> | Indicates whether the response should include Square-generated system<br>inventory adjustment reason codes that cannot be used to write adjustments<br>from the Connect API, such as `SALE`, `RECOUNT`, `TRANSFER`, `IN_TRANSIT`,<br>and `CANCELED_SALE`. The default value is `false`.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventory.listInventoryAdjustmentReasons(request)`

- **OnSuccess**: <code>[ListInventoryAdjustmentReasonsResponse](src/models/list-inventory-adjustment-reasons-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.inventory.listInventoryAdjustmentReasons(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListInventoryAdjustmentReasonsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListInventoryAdjustmentReasonsResponse](src/models/list-inventory-adjustment-reasons-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>restoreInventoryAdjustmentReason(request: Inventory.RestoreInventoryAdjustmentReasonRequestParams, options?: RequestOptions): ApiPromise&lt;RestoreInventoryAdjustmentReasonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Restores a soft-deleted custom inventory adjustment reason.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventory.restoreInventoryAdjustmentReason({ body });
  // TODO: Handle 'response' of type RestoreInventoryAdjustmentReasonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventory.restoreInventoryAdjustmentReason({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RestoreInventoryAdjustmentReasonResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RestoreInventoryAdjustmentReasonRequest](src/models/restore-inventory-adjustment-reason-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventory.restoreInventoryAdjustmentReason(request)`

- **OnSuccess**: <code>[RestoreInventoryAdjustmentReasonResponse](src/models/restore-inventory-adjustment-reason-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.inventory.restoreInventoryAdjustmentReason(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RestoreInventoryAdjustmentReasonResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RestoreInventoryAdjustmentReasonResponse](src/models/restore-inventory-adjustment-reason-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveInventoryAdjustment(request: Inventory.RetrieveInventoryAdjustmentRequest, options?: RequestOptions): ApiPromise&lt;RetrieveInventoryAdjustmentResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the [InventoryAdjustment](entity:InventoryAdjustment) object
with the provided `adjustment_id`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventory.retrieveInventoryAdjustment({ adjustmentId });
  // TODO: Handle 'response' of type RetrieveInventoryAdjustmentResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventory.retrieveInventoryAdjustment({ adjustmentId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveInventoryAdjustmentResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>adjustmentId</code> | <code>string</code> | ID of the [InventoryAdjustment](entity:InventoryAdjustment) to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventory.retrieveInventoryAdjustment(request)`

- **OnSuccess**: <code>[RetrieveInventoryAdjustmentResponse](src/models/retrieve-inventory-adjustment-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.inventory.retrieveInventoryAdjustment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveInventoryAdjustmentResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveInventoryAdjustmentResponse](src/models/retrieve-inventory-adjustment-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveInventoryAdjustmentReason(request: Inventory.RetrieveInventoryAdjustmentReasonRequestParams, options?: RequestOptions): ApiPromise&lt;RetrieveInventoryAdjustmentReasonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the inventory adjustment reason identified by the provided
`reason_id`. Deleted custom reasons can be retrieved by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventory.retrieveInventoryAdjustmentReason({ body });
  // TODO: Handle 'response' of type RetrieveInventoryAdjustmentReasonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventory.retrieveInventoryAdjustmentReason({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveInventoryAdjustmentReasonResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RetrieveInventoryAdjustmentReasonRequest](src/models/retrieve-inventory-adjustment-reason-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventory.retrieveInventoryAdjustmentReason(request)`

- **OnSuccess**: <code>[RetrieveInventoryAdjustmentReasonResponse](src/models/retrieve-inventory-adjustment-reason-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.inventory.retrieveInventoryAdjustmentReason(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveInventoryAdjustmentReasonResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveInventoryAdjustmentReasonResponse](src/models/retrieve-inventory-adjustment-reason-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveInventoryChanges(request: Inventory.RetrieveInventoryChangesRequest, options?: RequestOptions): ApiPromise&lt;RetrieveInventoryChangesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a set of physical counts and inventory adjustments for the
provided [CatalogObject](entity:CatalogObject) at the requested
[Location](entity:Location)s.

You can achieve the same result by calling [BatchRetrieveInventoryChanges](api-endpoint:Inventory-BatchRetrieveInventoryChanges)
and having the `catalog_object_ids` list contain a single element of the `CatalogObject` ID.

Results are paginated and sorted in descending order according to their
`occurred_at` timestamp (newest first).

There are no limits on how far back the caller can page. This endpoint can be
used to display recent changes for a specific item. For more
sophisticated queries, use a batch endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventory.retrieveInventoryChanges({ catalogObjectId });
  // TODO: Handle 'response' of type RetrieveInventoryChangesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventory.retrieveInventoryChanges({ catalogObjectId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveInventoryChangesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>catalogObjectId</code> | <code>string</code> | ID of the [CatalogObject](entity:CatalogObject) to retrieve. |
| <code>locationIds?</code> | <code>string</code> | The [Location](entity:Location) IDs to look up as a comma-separated<br>list. An empty list queries all locations. |
| <code>cursor?</code> | <code>string</code> | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for the original query.<br><br>See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventory.retrieveInventoryChanges(request)`

- **OnSuccess**: <code>[RetrieveInventoryChangesResponse](src/models/retrieve-inventory-changes-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.inventory.retrieveInventoryChanges(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveInventoryChangesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveInventoryChangesResponse](src/models/retrieve-inventory-changes-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveInventoryCount(request: Inventory.RetrieveInventoryCountRequest, options?: RequestOptions): ApiPromise&lt;RetrieveInventoryCountResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the current calculated stock count for a given
[CatalogObject](entity:CatalogObject) at a given set of
[Location](entity:Location)s. Responses are paginated and unsorted.
For more sophisticated queries, use a batch endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventory.retrieveInventoryCount({ catalogObjectId });
  // TODO: Handle 'response' of type RetrieveInventoryCountResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventory.retrieveInventoryCount({ catalogObjectId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveInventoryCountResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>catalogObjectId</code> | <code>string</code> | ID of the [CatalogObject](entity:CatalogObject) to retrieve. |
| <code>locationIds?</code> | <code>string</code> | The [Location](entity:Location) IDs to look up as a comma-separated<br>list. An empty list queries all locations. |
| <code>cursor?</code> | <code>string</code> | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for the original query.<br><br>See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventory.retrieveInventoryCount(request)`

- **OnSuccess**: <code>[RetrieveInventoryCountResponse](src/models/retrieve-inventory-count-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.inventory.retrieveInventoryCount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveInventoryCountResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveInventoryCountResponse](src/models/retrieve-inventory-count-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveInventoryPhysicalCount(request: Inventory.RetrieveInventoryPhysicalCountRequest, options?: RequestOptions): ApiPromise&lt;RetrieveInventoryPhysicalCountResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns the [InventoryPhysicalCount](entity:InventoryPhysicalCount)
object with the provided `physical_count_id`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventory.retrieveInventoryPhysicalCount({ physicalCountId });
  // TODO: Handle 'response' of type RetrieveInventoryPhysicalCountResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventory.retrieveInventoryPhysicalCount({ physicalCountId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveInventoryPhysicalCountResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>physicalCountId</code> | <code>string</code> | ID of the<br>[InventoryPhysicalCount](entity:InventoryPhysicalCount) to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventory.retrieveInventoryPhysicalCount(request)`

- **OnSuccess**: <code>[RetrieveInventoryPhysicalCountResponse](src/models/retrieve-inventory-physical-count-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.inventory.retrieveInventoryPhysicalCount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveInventoryPhysicalCountResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveInventoryPhysicalCountResponse](src/models/retrieve-inventory-physical-count-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateInventoryAdjustment(request: Inventory.UpdateInventoryAdjustmentRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateInventoryAdjustmentResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Applies an update to the provided adjustment.

On success: returns the newly updated adjustment.
On failure: returns a list of related errors.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventory.updateInventoryAdjustment({ body });
  // TODO: Handle 'response' of type UpdateInventoryAdjustmentResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventory.updateInventoryAdjustment({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateInventoryAdjustmentResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UpdateInventoryAdjustmentRequest](src/models/update-inventory-adjustment-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventory.updateInventoryAdjustment(request)`

- **OnSuccess**: <code>[UpdateInventoryAdjustmentResponse](src/models/update-inventory-adjustment-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.inventory.updateInventoryAdjustment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateInventoryAdjustmentResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateInventoryAdjustmentResponse](src/models/update-inventory-adjustment-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateInventoryAdjustmentReason(request: Inventory.UpdateInventoryAdjustmentReasonRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateInventoryAdjustmentReasonResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a custom inventory adjustment reason.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.inventory.updateInventoryAdjustmentReason({ body });
  // TODO: Handle 'response' of type UpdateInventoryAdjustmentReasonResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.inventory.updateInventoryAdjustmentReason({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateInventoryAdjustmentReasonResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UpdateInventoryAdjustmentReasonRequest](src/models/update-inventory-adjustment-reason-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.inventory.updateInventoryAdjustmentReason(request)`

- **OnSuccess**: <code>[UpdateInventoryAdjustmentReasonResponse](src/models/update-inventory-adjustment-reason-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.inventory.updateInventoryAdjustmentReason(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateInventoryAdjustmentReasonResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateInventoryAdjustmentReasonResponse](src/models/update-inventory-adjustment-reason-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Invoices

> Source: [Invoices](src/resources/invoices.ts)

<details>
<summary><code>cancelInvoice(request: Invoices.CancelInvoiceRequestParams, options?: RequestOptions): ApiPromise&lt;CancelInvoiceResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels an invoice. The seller cannot collect payments for 
the canceled invoice.

You cannot cancel an invoice in the `DRAFT` state or in a terminal state: `PAID`, `REFUNDED`, `CANCELED`, or `FAILED`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.cancelInvoice({ invoiceId, body });
  // TODO: Handle 'response' of type CancelInvoiceResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices.cancelInvoice({ invoiceId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelInvoiceResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>invoiceId</code> | <code>string</code> | The ID of the [invoice](entity:Invoice) to cancel. |
| <code>body</code> | <code>[CancelInvoiceRequest](src/models/cancel-invoice-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.cancelInvoice(request)`

- **OnSuccess**: <code>[CancelInvoiceResponse](src/models/cancel-invoice-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.invoices.cancelInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelInvoiceResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CancelInvoiceResponse](src/models/cancel-invoice-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createInvoice(request: Invoices.CreateInvoiceRequestParams, options?: RequestOptions): ApiPromise&lt;CreateInvoiceResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a draft [invoice](entity:Invoice) 
for an order created using the Orders API.

A draft invoice remains in your account and no action is taken. 
You must publish the invoice before Square can process it (send it to the customer's email address or charge the customer’s card on file).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.createInvoice({ body });
  // TODO: Handle 'response' of type CreateInvoiceResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices.createInvoice({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateInvoiceResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateInvoiceRequest](src/models/create-invoice-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.createInvoice(request)`

- **OnSuccess**: <code>[CreateInvoiceResponse](src/models/create-invoice-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.invoices.createInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateInvoiceResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateInvoiceResponse](src/models/create-invoice-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createInvoiceAttachment(request: Invoices.CreateInvoiceAttachmentRequestParams, options?: RequestOptions): ApiPromise&lt;CreateInvoiceAttachmentResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Uploads a file and attaches it to an invoice. This endpoint accepts HTTP multipart/form-data file uploads
with a JSON `request` part and a `file` part. The `file` part must be a `readable stream` that contains a file
in a supported format: GIF, JPEG, PNG, TIFF, BMP, or PDF.

Invoices can have up to 10 attachments with a total file size of 25 MB. Attachments can be added only to invoices
in the `DRAFT`, `SCHEDULED`, `UNPAID`, or `PARTIALLY_PAID` state.

__NOTE:__ When testing in the Sandbox environment, the total file size is limited to 1 KB.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.createInvoiceAttachment({ invoiceId });
  // TODO: Handle 'response' of type CreateInvoiceAttachmentResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices.createInvoiceAttachment({ invoiceId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateInvoiceAttachmentResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>invoiceId</code> | <code>string</code> | The ID of the [invoice](entity:Invoice) to attach the file to. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.createInvoiceAttachment(request)`

- **OnSuccess**: <code>[CreateInvoiceAttachmentResponse](src/models/create-invoice-attachment-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.invoices.createInvoiceAttachment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateInvoiceAttachmentResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateInvoiceAttachmentResponse](src/models/create-invoice-attachment-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteInvoice(request: Invoices.DeleteInvoiceRequest, options?: RequestOptions): ApiPromise&lt;DeleteInvoiceResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes the specified invoice. When an invoice is deleted, the 
associated order status changes to CANCELED. You can only delete a draft 
invoice (you cannot delete a published invoice, including one that is scheduled for processing).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.deleteInvoice({ invoiceId });
  // TODO: Handle 'response' of type DeleteInvoiceResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices.deleteInvoice({ invoiceId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteInvoiceResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>invoiceId</code> | <code>string</code> | The ID of the invoice to delete. |
| <code>version?</code> | <code>number</code> | The version of the [invoice](entity:Invoice) to delete.<br>If you do not know the version, you can call [GetInvoice](api-endpoint:Invoices-GetInvoice) or <br>[ListInvoices](api-endpoint:Invoices-ListInvoices). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.deleteInvoice(request)`

- **OnSuccess**: <code>[DeleteInvoiceResponse](src/models/delete-invoice-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.invoices.deleteInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteInvoiceResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DeleteInvoiceResponse](src/models/delete-invoice-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteInvoiceAttachment(request: Invoices.DeleteInvoiceAttachmentRequest, options?: RequestOptions): ApiPromise&lt;DeleteInvoiceAttachmentResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes an attachment from an invoice and permanently deletes the file. Attachments can be removed only
from invoices in the `DRAFT`, `SCHEDULED`, `UNPAID`, or `PARTIALLY_PAID` state.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.deleteInvoiceAttachment({ invoiceId, attachmentId });
  // TODO: Handle 'response' of type DeleteInvoiceAttachmentResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices.deleteInvoiceAttachment({ invoiceId, attachmentId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteInvoiceAttachmentResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>invoiceId</code> | <code>string</code> | The ID of the [invoice](entity:Invoice) to delete the attachment from. |
| <code>attachmentId</code> | <code>string</code> | The ID of the [attachment](entity:InvoiceAttachment) to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.deleteInvoiceAttachment(request)`

- **OnSuccess**: <code>[DeleteInvoiceAttachmentResponse](src/models/delete-invoice-attachment-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.invoices.deleteInvoiceAttachment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteInvoiceAttachmentResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DeleteInvoiceAttachmentResponse](src/models/delete-invoice-attachment-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getInvoice(request: Invoices.GetInvoiceRequest, options?: RequestOptions): ApiPromise&lt;GetInvoiceResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves an invoice by invoice ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.getInvoice({ invoiceId });
  // TODO: Handle 'response' of type GetInvoiceResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices.getInvoice({ invoiceId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetInvoiceResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>invoiceId</code> | <code>string</code> | The ID of the invoice to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.getInvoice(request)`

- **OnSuccess**: <code>[GetInvoiceResponse](src/models/get-invoice-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.invoices.getInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetInvoiceResponse, ResponseError&gt;</code>, with `result.value` of type <code>[GetInvoiceResponse](src/models/get-invoice-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listInvoices(request: Invoices.ListInvoicesRequest, options?: RequestOptions): ApiPromise&lt;ListInvoicesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of invoices for a given location. The response 
is paginated. If truncated, the response includes a `cursor` that you    
use in a subsequent request to retrieve the next set of invoices.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.listInvoices({ locationId });
  // TODO: Handle 'response' of type ListInvoicesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices.listInvoices({ locationId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListInvoicesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locationId</code> | <code>string</code> | The ID of the location for which to list invoices. |
| <code>cursor?</code> | <code>string</code> | A pagination cursor returned by a previous call to this endpoint. <br>Provide this cursor to retrieve the next set of results for your original query.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| <code>limit?</code> | <code>number</code> | The maximum number of invoices to return (200 is the maximum `limit`). <br>If not provided, the server uses a default limit of 100 invoices. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.listInvoices(request)`

- **OnSuccess**: <code>[ListInvoicesResponse](src/models/list-invoices-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.invoices.listInvoices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListInvoicesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListInvoicesResponse](src/models/list-invoices-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>publishInvoice(request: Invoices.PublishInvoiceRequestParams, options?: RequestOptions): ApiPromise&lt;PublishInvoiceResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publishes the specified draft invoice. 

After an invoice is published, Square 
follows up based on the invoice configuration. For example, Square 
sends the invoice to the customer's email address, charges the customer's card on file, or does 
nothing. Square also makes the invoice available on a Square-hosted invoice page. 

The invoice `status` also changes from `DRAFT` to a status 
based on the invoice configuration. For example, the status changes to `UNPAID` if 
Square emails the invoice or `PARTIALLY_PAID` if Square charges a card on file for a portion of the 
invoice amount.

In addition to the required `ORDERS_WRITE` and `INVOICES_WRITE` permissions, `CUSTOMERS_READ`
and `PAYMENTS_WRITE` are required when publishing invoices configured for card-on-file payments.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.publishInvoice({ invoiceId, body });
  // TODO: Handle 'response' of type PublishInvoiceResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices.publishInvoice({ invoiceId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublishInvoiceResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>invoiceId</code> | <code>string</code> | The ID of the invoice to publish. |
| <code>body</code> | <code>[PublishInvoiceRequest](src/models/publish-invoice-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.publishInvoice(request)`

- **OnSuccess**: <code>[PublishInvoiceResponse](src/models/publish-invoice-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.invoices.publishInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublishInvoiceResponse, ResponseError&gt;</code>, with `result.value` of type <code>[PublishInvoiceResponse](src/models/publish-invoice-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchInvoices(request: Invoices.SearchInvoicesRequestParams, options?: RequestOptions): ApiPromise&lt;SearchInvoicesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches for invoices from a location specified in 
the filter. You can optionally specify customers in the filter for whom to 
retrieve invoices. In the current implementation, you can only specify one location and 
optionally one customer.

The response is paginated. If truncated, the response includes a `cursor` 
that you use in a subsequent request to retrieve the next set of invoices.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.searchInvoices({ body });
  // TODO: Handle 'response' of type SearchInvoicesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices.searchInvoices({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchInvoicesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchInvoicesRequest](src/models/search-invoices-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.searchInvoices(request)`

- **OnSuccess**: <code>[SearchInvoicesResponse](src/models/search-invoices-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.invoices.searchInvoices(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchInvoicesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[SearchInvoicesResponse](src/models/search-invoices-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateInvoice(request: Invoices.UpdateInvoiceRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateInvoiceResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an invoice. This endpoint supports sparse updates, so you only need
to specify the fields you want to change along with the required `version` field.
Some restrictions apply to updating invoices. For example, you cannot change the
`order_id` or `location_id` field.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.invoices.updateInvoice({ invoiceId, body });
  // TODO: Handle 'response' of type UpdateInvoiceResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.invoices.updateInvoice({ invoiceId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateInvoiceResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>invoiceId</code> | <code>string</code> | The ID of the invoice to update. |
| <code>body</code> | <code>[UpdateInvoiceRequest](src/models/update-invoice-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.invoices.updateInvoice(request)`

- **OnSuccess**: <code>[UpdateInvoiceResponse](src/models/update-invoice-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.invoices.updateInvoice(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateInvoiceResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateInvoiceResponse](src/models/update-invoice-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Labor

> Source: [Labor](src/resources/labor.ts)

<details>
<summary><code>bulkPublishScheduledShifts(request: Labor.BulkPublishScheduledShiftsRequestParams, options?: RequestOptions): ApiPromise&lt;BulkPublishScheduledShiftsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publishes 1 - 100 scheduled shifts. This endpoint takes a map of individual publish
requests and returns a map of responses. When a scheduled shift is published, Square keeps
the `draft_shift_details` field as is and copies it to the `published_shift_details` field.

The minimum `start_at` and maximum `end_at` timestamps of all shifts in a
`BulkPublishScheduledShifts` request must fall within a two-week period.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labor.bulkPublishScheduledShifts({ body });
  // TODO: Handle 'response' of type BulkPublishScheduledShiftsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labor.bulkPublishScheduledShifts({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkPublishScheduledShiftsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkPublishScheduledShiftsRequest](src/models/bulk-publish-scheduled-shifts-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labor.bulkPublishScheduledShifts(request)`

- **OnSuccess**: <code>[BulkPublishScheduledShiftsResponse](src/models/bulk-publish-scheduled-shifts-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.labor.bulkPublishScheduledShifts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkPublishScheduledShiftsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BulkPublishScheduledShiftsResponse](src/models/bulk-publish-scheduled-shifts-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createBreakType(request: Labor.CreateBreakTypeRequestParams, options?: RequestOptions): ApiPromise&lt;CreateBreakTypeResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new `BreakType`.

A `BreakType` is a template for creating `Break` objects.
You must provide the following values in your request to this
endpoint:

- `location_id`
- `break_name`
- `expected_duration`
- `is_paid`

You can only have three `BreakType` instances per location. If you attempt to add a fourth
`BreakType` for a location, an `INVALID_REQUEST_ERROR` "Exceeded limit of 3 breaks per location."
is returned.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labor.createBreakType({ body });
  // TODO: Handle 'response' of type CreateBreakTypeResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labor.createBreakType({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateBreakTypeResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateBreakTypeRequest](src/models/create-break-type-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labor.createBreakType(request)`

- **OnSuccess**: <code>[CreateBreakTypeResponse](src/models/create-break-type-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.labor.createBreakType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateBreakTypeResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateBreakTypeResponse](src/models/create-break-type-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createScheduledShift(request: Labor.CreateScheduledShiftRequestParams, options?: RequestOptions): ApiPromise&lt;CreateScheduledShiftResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a scheduled shift by providing draft shift details such as job ID,
team member assignment, and start and end times.

The following `draft_shift_details` fields are required:
- `location_id`
- `job_id`
- `start_at`
- `end_at`

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labor.createScheduledShift({ body });
  // TODO: Handle 'response' of type CreateScheduledShiftResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labor.createScheduledShift({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateScheduledShiftResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateScheduledShiftRequest](src/models/create-scheduled-shift-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labor.createScheduledShift(request)`

- **OnSuccess**: <code>[CreateScheduledShiftResponse](src/models/create-scheduled-shift-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.labor.createScheduledShift(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateScheduledShiftResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateScheduledShiftResponse](src/models/create-scheduled-shift-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createShift(request: Labor.CreateShiftRequestParams, options?: RequestOptions): ApiPromise&lt;CreateShiftResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new `Shift`.

A `Shift` represents a complete workday for a single team member.
You must provide the following values in your request to this
endpoint:

- `location_id`
- `team_member_id`
- `start_at`

An attempt to create a new `Shift` can result in a `BAD_REQUEST` error when:
- The `status` of the new `Shift` is `OPEN` and the team member has another
shift with an `OPEN` status.
- The `start_at` date is in the future.
- The `start_at` or `end_at` date overlaps another shift for the same team member.
- The `Break` instances are set in the request and a break `start_at`
is before the `Shift.start_at`, a break `end_at` is after
the `Shift.end_at`, or both.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labor.createShift({ body });
  // TODO: Handle 'response' of type CreateShiftResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labor.createShift({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateShiftResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateShiftRequest](src/models/create-shift-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labor.createShift(request)`

- **OnSuccess**: <code>[CreateShiftResponse](src/models/create-shift-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.labor.createShift(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateShiftResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateShiftResponse](src/models/create-shift-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTimecard(request: Labor.CreateTimecardRequestParams, options?: RequestOptions): ApiPromise&lt;CreateTimecardResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new `Timecard`.

A `Timecard` represents a complete workday for a single team member.
You must provide the following values in your request to this
endpoint:

- `location_id`
- `team_member_id`
- `start_at`

An attempt to create a new `Timecard` can result in a `BAD_REQUEST` error when:
- The `status` of the new `Timecard` is `OPEN` and the team member has another
timecard with an `OPEN` status.
- The `start_at` date is in the future.
- The `start_at` or `end_at` date overlaps another timecard for the same team member.
- The `Break` instances are set in the request and a break `start_at`
is before the `Timecard.start_at`, a break `end_at` is after
the `Timecard.end_at`, or both.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labor.createTimecard({ body });
  // TODO: Handle 'response' of type CreateTimecardResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labor.createTimecard({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateTimecardResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateTimecardRequest](src/models/create-timecard-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labor.createTimecard(request)`

- **OnSuccess**: <code>[CreateTimecardResponse](src/models/create-timecard-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.labor.createTimecard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateTimecardResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateTimecardResponse](src/models/create-timecard-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteBreakType(request: Labor.DeleteBreakTypeRequest, options?: RequestOptions): ApiPromise&lt;DeleteBreakTypeResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an existing `BreakType`.

A `BreakType` can be deleted even if it is referenced from a `Shift`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labor.deleteBreakType({ id });
  // TODO: Handle 'response' of type DeleteBreakTypeResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labor.deleteBreakType({ id }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteBreakTypeResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The UUID for the `BreakType` being deleted. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labor.deleteBreakType(request)`

- **OnSuccess**: <code>[DeleteBreakTypeResponse](src/models/delete-break-type-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.labor.deleteBreakType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteBreakTypeResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DeleteBreakTypeResponse](src/models/delete-break-type-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteShift(request: Labor.DeleteShiftRequest, options?: RequestOptions): ApiPromise&lt;DeleteShiftResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a `Shift`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labor.deleteShift({ id });
  // TODO: Handle 'response' of type DeleteShiftResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labor.deleteShift({ id }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteShiftResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The UUID for the `Shift` being deleted. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labor.deleteShift(request)`

- **OnSuccess**: <code>[DeleteShiftResponse](src/models/delete-shift-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.labor.deleteShift(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteShiftResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DeleteShiftResponse](src/models/delete-shift-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteTimecard(request: Labor.DeleteTimecardRequest, options?: RequestOptions): ApiPromise&lt;DeleteTimecardResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a `Timecard`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labor.deleteTimecard({ id });
  // TODO: Handle 'response' of type DeleteTimecardResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labor.deleteTimecard({ id }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteTimecardResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The UUID for the `Timecard` being deleted. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labor.deleteTimecard(request)`

- **OnSuccess**: <code>[DeleteTimecardResponse](src/models/delete-timecard-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.labor.deleteTimecard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteTimecardResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DeleteTimecardResponse](src/models/delete-timecard-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getBreakType(request: Labor.GetBreakTypeRequest, options?: RequestOptions): ApiPromise&lt;GetBreakTypeResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single `BreakType` specified by `id`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labor.getBreakType({ id });
  // TODO: Handle 'response' of type GetBreakTypeResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labor.getBreakType({ id }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetBreakTypeResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The UUID for the `BreakType` being retrieved. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labor.getBreakType(request)`

- **OnSuccess**: <code>[GetBreakTypeResponse](src/models/get-break-type-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.labor.getBreakType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetBreakTypeResponse, ResponseError&gt;</code>, with `result.value` of type <code>[GetBreakTypeResponse](src/models/get-break-type-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getEmployeeWage(request: Labor.GetEmployeeWageRequest, options?: RequestOptions): ApiPromise&lt;GetEmployeeWageResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single `EmployeeWage` specified by `id`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labor.getEmployeeWage({ id });
  // TODO: Handle 'response' of type GetEmployeeWageResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labor.getEmployeeWage({ id }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetEmployeeWageResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The UUID for the `EmployeeWage` being retrieved. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labor.getEmployeeWage(request)`

- **OnSuccess**: <code>[GetEmployeeWageResponse](src/models/get-employee-wage-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.labor.getEmployeeWage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetEmployeeWageResponse, ResponseError&gt;</code>, with `result.value` of type <code>[GetEmployeeWageResponse](src/models/get-employee-wage-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getShift(request: Labor.GetShiftRequest, options?: RequestOptions): ApiPromise&lt;GetShiftResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single `Shift` specified by `id`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labor.getShift({ id });
  // TODO: Handle 'response' of type GetShiftResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labor.getShift({ id }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetShiftResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The UUID for the `Shift` being retrieved. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labor.getShift(request)`

- **OnSuccess**: <code>[GetShiftResponse](src/models/get-shift-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.labor.getShift(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetShiftResponse, ResponseError&gt;</code>, with `result.value` of type <code>[GetShiftResponse](src/models/get-shift-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTeamMemberWage(request: Labor.GetTeamMemberWageRequest, options?: RequestOptions): ApiPromise&lt;GetTeamMemberWageResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single `TeamMemberWage` specified by `id`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labor.getTeamMemberWage({ id });
  // TODO: Handle 'response' of type GetTeamMemberWageResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labor.getTeamMemberWage({ id }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetTeamMemberWageResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The UUID for the `TeamMemberWage` being retrieved. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labor.getTeamMemberWage(request)`

- **OnSuccess**: <code>[GetTeamMemberWageResponse](src/models/get-team-member-wage-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.labor.getTeamMemberWage(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetTeamMemberWageResponse, ResponseError&gt;</code>, with `result.value` of type <code>[GetTeamMemberWageResponse](src/models/get-team-member-wage-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listBreakTypes(request: Labor.ListBreakTypesRequest, options?: RequestOptions): ApiPromise&lt;ListBreakTypesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of `BreakType` instances for a business.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labor.listBreakTypes();
  // TODO: Handle 'response' of type ListBreakTypesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labor.listBreakTypes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListBreakTypesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locationId?</code> | <code>string</code> | Filter the returned `BreakType` results to only those that are associated with the<br>specified location. |
| <code>limit?</code> | <code>number</code> | The maximum number of `BreakType` results to return per page. The number can range between 1<br>and 200. The default is 200. |
| <code>cursor?</code> | <code>string</code> | A pointer to the next page of `BreakType` results to fetch. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labor.listBreakTypes(request)`

- **OnSuccess**: <code>[ListBreakTypesResponse](src/models/list-break-types-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.labor.listBreakTypes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListBreakTypesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListBreakTypesResponse](src/models/list-break-types-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listEmployeeWages(request: Labor.ListEmployeeWagesRequest, options?: RequestOptions): ApiPromise&lt;ListEmployeeWagesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of `EmployeeWage` instances for a business.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labor.listEmployeeWages();
  // TODO: Handle 'response' of type ListEmployeeWagesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labor.listEmployeeWages().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListEmployeeWagesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>employeeId?</code> | <code>string</code> | Filter the returned wages to only those that are associated with the specified employee. |
| <code>limit?</code> | <code>number</code> | The maximum number of `EmployeeWage` results to return per page. The number can range between<br>1 and 200. The default is 200. |
| <code>cursor?</code> | <code>string</code> | A pointer to the next page of `EmployeeWage` results to fetch. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labor.listEmployeeWages(request)`

- **OnSuccess**: <code>[ListEmployeeWagesResponse](src/models/list-employee-wages-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.labor.listEmployeeWages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListEmployeeWagesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListEmployeeWagesResponse](src/models/list-employee-wages-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTeamMemberWages(request: Labor.ListTeamMemberWagesRequest, options?: RequestOptions): ApiPromise&lt;ListTeamMemberWagesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of `TeamMemberWage` instances for a business.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labor.listTeamMemberWages();
  // TODO: Handle 'response' of type ListTeamMemberWagesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labor.listTeamMemberWages().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListTeamMemberWagesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamMemberId?</code> | <code>string</code> | Filter the returned wages to only those that are associated with the<br>specified team member. |
| <code>limit?</code> | <code>number</code> | The maximum number of `TeamMemberWage` results to return per page. The number can range between<br>1 and 200. The default is 200. |
| <code>cursor?</code> | <code>string</code> | A pointer to the next page of `EmployeeWage` results to fetch. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labor.listTeamMemberWages(request)`

- **OnSuccess**: <code>[ListTeamMemberWagesResponse](src/models/list-team-member-wages-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.labor.listTeamMemberWages(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListTeamMemberWagesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListTeamMemberWagesResponse](src/models/list-team-member-wages-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWorkweekConfigs(request: Labor.ListWorkweekConfigsRequest, options?: RequestOptions): ApiPromise&lt;ListWorkweekConfigsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of `WorkweekConfig` instances for a business.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labor.listWorkweekConfigs();
  // TODO: Handle 'response' of type ListWorkweekConfigsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labor.listWorkweekConfigs().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListWorkweekConfigsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>limit?</code> | <code>number</code> | The maximum number of `WorkweekConfigs` results to return per page. |
| <code>cursor?</code> | <code>string</code> | A pointer to the next page of `WorkweekConfig` results to fetch. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labor.listWorkweekConfigs(request)`

- **OnSuccess**: <code>[ListWorkweekConfigsResponse](src/models/list-workweek-configs-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.labor.listWorkweekConfigs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListWorkweekConfigsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListWorkweekConfigsResponse](src/models/list-workweek-configs-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>publishScheduledShift(request: Labor.PublishScheduledShiftRequestParams, options?: RequestOptions): ApiPromise&lt;PublishScheduledShiftResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Publishes a scheduled shift. When a scheduled shift is published, Square keeps the
`draft_shift_details` field as is and copies it to the `published_shift_details` field.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labor.publishScheduledShift({ id, body });
  // TODO: Handle 'response' of type PublishScheduledShiftResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labor.publishScheduledShift({ id, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PublishScheduledShiftResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The ID of the scheduled shift to publish. |
| <code>body</code> | <code>[PublishScheduledShiftRequest](src/models/publish-scheduled-shift-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labor.publishScheduledShift(request)`

- **OnSuccess**: <code>[PublishScheduledShiftResponse](src/models/publish-scheduled-shift-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.labor.publishScheduledShift(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PublishScheduledShiftResponse, ResponseError&gt;</code>, with `result.value` of type <code>[PublishScheduledShiftResponse](src/models/publish-scheduled-shift-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveScheduledShift(request: Labor.RetrieveScheduledShiftRequest, options?: RequestOptions): ApiPromise&lt;RetrieveScheduledShiftResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a scheduled shift by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labor.retrieveScheduledShift({ id });
  // TODO: Handle 'response' of type RetrieveScheduledShiftResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labor.retrieveScheduledShift({ id }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveScheduledShiftResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The ID of the scheduled shift to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labor.retrieveScheduledShift(request)`

- **OnSuccess**: <code>[RetrieveScheduledShiftResponse](src/models/retrieve-scheduled-shift-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.labor.retrieveScheduledShift(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveScheduledShiftResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveScheduledShiftResponse](src/models/retrieve-scheduled-shift-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveTimecard(request: Labor.RetrieveTimecardRequest, options?: RequestOptions): ApiPromise&lt;RetrieveTimecardResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a single `Timecard` specified by `id`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labor.retrieveTimecard({ id });
  // TODO: Handle 'response' of type RetrieveTimecardResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labor.retrieveTimecard({ id }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveTimecardResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The UUID for the `Timecard` being retrieved. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labor.retrieveTimecard(request)`

- **OnSuccess**: <code>[RetrieveTimecardResponse](src/models/retrieve-timecard-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.labor.retrieveTimecard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveTimecardResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveTimecardResponse](src/models/retrieve-timecard-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchScheduledShifts(request: Labor.SearchScheduledShiftsRequestParams, options?: RequestOptions): ApiPromise&lt;SearchScheduledShiftsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of scheduled shifts, with optional filter and sort settings.
By default, results are sorted by `start_at` in ascending order.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labor.searchScheduledShifts({ body });
  // TODO: Handle 'response' of type SearchScheduledShiftsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labor.searchScheduledShifts({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchScheduledShiftsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchScheduledShiftsRequest](src/models/search-scheduled-shifts-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labor.searchScheduledShifts(request)`

- **OnSuccess**: <code>[SearchScheduledShiftsResponse](src/models/search-scheduled-shifts-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.labor.searchScheduledShifts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchScheduledShiftsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[SearchScheduledShiftsResponse](src/models/search-scheduled-shifts-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchShifts(request: Labor.SearchShiftsRequestParams, options?: RequestOptions): ApiPromise&lt;SearchShiftsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of `Shift` records for a business.
The list to be returned can be filtered by:
- Location IDs
- Team member IDs
- Shift status (`OPEN` or `CLOSED`)
- Shift start
- Shift end
- Workday details

The list can be sorted by:
- `START_AT`
- `END_AT`
- `CREATED_AT`
- `UPDATED_AT`

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labor.searchShifts({ body });
  // TODO: Handle 'response' of type SearchShiftsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labor.searchShifts({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchShiftsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchShiftsRequest](src/models/search-shifts-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labor.searchShifts(request)`

- **OnSuccess**: <code>[SearchShiftsResponse](src/models/search-shifts-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.labor.searchShifts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchShiftsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[SearchShiftsResponse](src/models/search-shifts-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchTimecards(request: Labor.SearchTimecardsRequestParams, options?: RequestOptions): ApiPromise&lt;SearchTimecardsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of `Timecard` records for a business.
The list to be returned can be filtered by:
- Location IDs
- Team member IDs
- Timecard status (`OPEN` or `CLOSED`)
- Timecard start
- Timecard end
- Workday details

The list can be sorted by:
- `START_AT`
- `END_AT`
- `CREATED_AT`
- `UPDATED_AT`

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labor.searchTimecards({ body });
  // TODO: Handle 'response' of type SearchTimecardsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labor.searchTimecards({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchTimecardsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchTimecardsRequest](src/models/search-timecards-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labor.searchTimecards(request)`

- **OnSuccess**: <code>[SearchTimecardsResponse](src/models/search-timecards-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.labor.searchTimecards(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchTimecardsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[SearchTimecardsResponse](src/models/search-timecards-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateBreakType(request: Labor.UpdateBreakTypeRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateBreakTypeResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing `BreakType`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labor.updateBreakType({ id, body });
  // TODO: Handle 'response' of type UpdateBreakTypeResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labor.updateBreakType({ id, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateBreakTypeResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The UUID for the `BreakType` being updated. |
| <code>body</code> | <code>[UpdateBreakTypeRequest](src/models/update-break-type-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labor.updateBreakType(request)`

- **OnSuccess**: <code>[UpdateBreakTypeResponse](src/models/update-break-type-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.labor.updateBreakType(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateBreakTypeResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateBreakTypeResponse](src/models/update-break-type-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateScheduledShift(request: Labor.UpdateScheduledShiftRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateScheduledShiftResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the draft shift details for a scheduled shift. This endpoint supports
sparse updates, so only new, changed, or removed fields are required in the request.
You must publish the shift to make updates public.

You can make the following updates to `draft_shift_details`:
- Change the `location_id`, `job_id`, `start_at`, and `end_at` fields.
- Add, change, or clear the `team_member_id` and `notes` fields. To clear these fields,
set the value to null.
- Change the `is_deleted` field. To delete a scheduled shift, set `is_deleted` to true
and then publish the shift.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labor.updateScheduledShift({ id, body });
  // TODO: Handle 'response' of type UpdateScheduledShiftResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labor.updateScheduledShift({ id, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateScheduledShiftResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The ID of the scheduled shift to update. |
| <code>body</code> | <code>[UpdateScheduledShiftRequest](src/models/update-scheduled-shift-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labor.updateScheduledShift(request)`

- **OnSuccess**: <code>[UpdateScheduledShiftResponse](src/models/update-scheduled-shift-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.labor.updateScheduledShift(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateScheduledShiftResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateScheduledShiftResponse](src/models/update-scheduled-shift-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateShift(request: Labor.UpdateShiftRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateShiftResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing `Shift`.

When adding a `Break` to a `Shift`, any earlier `Break` instances in the `Shift` have
the `end_at` property set to a valid RFC-3339 datetime string.

When closing a `Shift`, all `Break` instances in the `Shift` must be complete with `end_at`
set on each `Break`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labor.updateShift({ id, body });
  // TODO: Handle 'response' of type UpdateShiftResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labor.updateShift({ id, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateShiftResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The ID of the object being updated. |
| <code>body</code> | <code>[UpdateShiftRequest](src/models/update-shift-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labor.updateShift(request)`

- **OnSuccess**: <code>[UpdateShiftResponse](src/models/update-shift-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.labor.updateShift(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateShiftResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateShiftResponse](src/models/update-shift-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTimecard(request: Labor.UpdateTimecardRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateTimecardResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing `Timecard`.

When adding a `Break` to a `Timecard`, any earlier `Break` instances in the `Timecard` have
the `end_at` property set to a valid RFC-3339 datetime string.

When closing a `Timecard`, all `Break` instances in the `Timecard` must be complete with `end_at`
set on each `Break`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labor.updateTimecard({ id, body });
  // TODO: Handle 'response' of type UpdateTimecardResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labor.updateTimecard({ id, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateTimecardResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The ID of the object being updated. |
| <code>body</code> | <code>[UpdateTimecardRequest](src/models/update-timecard-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labor.updateTimecard(request)`

- **OnSuccess**: <code>[UpdateTimecardResponse](src/models/update-timecard-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.labor.updateTimecard(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateTimecardResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateTimecardResponse](src/models/update-timecard-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateWorkweekConfig(request: Labor.UpdateWorkweekConfigRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateWorkweekConfigResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a `WorkweekConfig`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.labor.updateWorkweekConfig({ id, body });
  // TODO: Handle 'response' of type UpdateWorkweekConfigResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.labor.updateWorkweekConfig({ id, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateWorkweekConfigResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The UUID for the `WorkweekConfig` object being updated. |
| <code>body</code> | <code>[UpdateWorkweekConfigRequest](src/models/update-workweek-config-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.labor.updateWorkweekConfig(request)`

- **OnSuccess**: <code>[UpdateWorkweekConfigResponse](src/models/update-workweek-config-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.labor.updateWorkweekConfig(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateWorkweekConfigResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateWorkweekConfigResponse](src/models/update-workweek-config-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Locations

> Source: [Locations](src/resources/locations.ts)

<details>
<summary><code>createLocation(request: Locations.CreateLocationRequestParams, options?: RequestOptions): ApiPromise&lt;CreateLocationResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a [location](https://developer.squareup.com/docs/locations-api).
Creating new locations allows for separate configuration of receipt layouts, item prices,
and sales reports. Developers can use locations to separate sales activity through applications
that integrate with Square from sales activity elsewhere in a seller's account.
Locations created programmatically with the Locations API last forever and
are visible to the seller for their own management. Therefore, ensure that
each location has a sensible and unique name.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.locations.createLocation({ body });
  // TODO: Handle 'response' of type CreateLocationResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.locations.createLocation({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateLocationResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateLocationRequest](src/models/create-location-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.locations.createLocation(request)`

- **OnSuccess**: <code>[CreateLocationResponse](src/models/create-location-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.locations.createLocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateLocationResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateLocationResponse](src/models/create-location-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listLocations(options?: RequestOptions): ApiPromise&lt;ListLocationsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides details about all of the seller's [locations](https://developer.squareup.com/docs/locations-api),
including those with an inactive status. Locations are listed alphabetically by `name`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.locations.listLocations();
  // TODO: Handle 'response' of type ListLocationsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.locations.listLocations().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListLocationsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.locations.listLocations()`

- **OnSuccess**: <code>[ListLocationsResponse](src/models/list-locations-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.locations.listLocations().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListLocationsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListLocationsResponse](src/models/list-locations-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveLocation(request: Locations.RetrieveLocationRequest, options?: RequestOptions): ApiPromise&lt;RetrieveLocationResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves details of a single location. Specify "main"
as the location ID to retrieve details of the [main location](https://developer.squareup.com/docs/locations-api#about-the-main-location).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.locations.retrieveLocation({ locationId });
  // TODO: Handle 'response' of type RetrieveLocationResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.locations.retrieveLocation({ locationId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveLocationResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locationId</code> | <code>string</code> | The ID of the location to retrieve. Specify the string<br>"main" to return the main location. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.locations.retrieveLocation(request)`

- **OnSuccess**: <code>[RetrieveLocationResponse](src/models/retrieve-location-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.locations.retrieveLocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveLocationResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveLocationResponse](src/models/retrieve-location-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateLocation(request: Locations.UpdateLocationRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateLocationResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a [location](https://developer.squareup.com/docs/locations-api).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.locations.updateLocation({ locationId, body });
  // TODO: Handle 'response' of type UpdateLocationResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.locations.updateLocation({ locationId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateLocationResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locationId</code> | <code>string</code> | The ID of the location to update. |
| <code>body</code> | <code>[UpdateLocationRequest](src/models/update-location-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.locations.updateLocation(request)`

- **OnSuccess**: <code>[UpdateLocationResponse](src/models/update-location-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.locations.updateLocation(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateLocationResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateLocationResponse](src/models/update-location-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## LocationCustomAttributes

> Source: [LocationCustomAttributes](src/resources/location-custom-attributes.ts)

<details>
<summary><code>bulkDeleteLocationCustomAttributes(request: LocationCustomAttributes.BulkDeleteLocationCustomAttributesRequestParams, options?: RequestOptions): ApiPromise&lt;BulkDeleteLocationCustomAttributesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes [custom attributes](entity:CustomAttribute) for locations as a bulk operation.
To delete a custom attribute owned by another application, the `visibility` setting must be
`VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.locationCustomAttributes.bulkDeleteLocationCustomAttributes({ body });
  // TODO: Handle 'response' of type BulkDeleteLocationCustomAttributesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.locationCustomAttributes.bulkDeleteLocationCustomAttributes({
  body,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkDeleteLocationCustomAttributesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkDeleteLocationCustomAttributesRequest](src/models/bulk-delete-location-custom-attributes-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.locationCustomAttributes.bulkDeleteLocationCustomAttributes(request)`

- **OnSuccess**: <code>[BulkDeleteLocationCustomAttributesResponse](src/models/bulk-delete-location-custom-attributes-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.locationCustomAttributes.bulkDeleteLocationCustomAttributes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkDeleteLocationCustomAttributesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BulkDeleteLocationCustomAttributesResponse](src/models/bulk-delete-location-custom-attributes-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkUpsertLocationCustomAttributes(request: LocationCustomAttributes.BulkUpsertLocationCustomAttributesRequestParams, options?: RequestOptions): ApiPromise&lt;BulkUpsertLocationCustomAttributesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates [custom attributes](entity:CustomAttribute) for locations as a bulk operation.
Use this endpoint to set the value of one or more custom attributes for one or more locations.
A custom attribute is based on a custom attribute definition in a Square seller account, which is
created using the [CreateLocationCustomAttributeDefinition](api-endpoint:LocationCustomAttributes-CreateLocationCustomAttributeDefinition) endpoint.
This `BulkUpsertLocationCustomAttributes` endpoint accepts a map of 1 to 25 individual upsert
requests and returns a map of individual upsert responses. Each upsert request has a unique ID
and provides a location ID and custom attribute. Each upsert response is returned with the ID
of the corresponding request.
To create or update a custom attribute owned by another application, the `visibility` setting
must be `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.locationCustomAttributes.bulkUpsertLocationCustomAttributes({ body });
  // TODO: Handle 'response' of type BulkUpsertLocationCustomAttributesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.locationCustomAttributes.bulkUpsertLocationCustomAttributes({
  body,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkUpsertLocationCustomAttributesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkUpsertLocationCustomAttributesRequest](src/models/bulk-upsert-location-custom-attributes-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.locationCustomAttributes.bulkUpsertLocationCustomAttributes(request)`

- **OnSuccess**: <code>[BulkUpsertLocationCustomAttributesResponse](src/models/bulk-upsert-location-custom-attributes-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.locationCustomAttributes.bulkUpsertLocationCustomAttributes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkUpsertLocationCustomAttributesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BulkUpsertLocationCustomAttributesResponse](src/models/bulk-upsert-location-custom-attributes-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createLocationCustomAttributeDefinition(request: LocationCustomAttributes.CreateLocationCustomAttributeDefinitionRequestParams, options?: RequestOptions): ApiPromise&lt;CreateLocationCustomAttributeDefinitionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a location-related [custom attribute definition](entity:CustomAttributeDefinition) for a Square seller account.
Use this endpoint to define a custom attribute that can be associated with locations.
A custom attribute definition specifies the `key`, `visibility`, `schema`, and other properties
for a custom attribute. After the definition is created, you can call
[UpsertLocationCustomAttribute](api-endpoint:LocationCustomAttributes-UpsertLocationCustomAttribute) or
[BulkUpsertLocationCustomAttributes](api-endpoint:LocationCustomAttributes-BulkUpsertLocationCustomAttributes)
to set the custom attribute for locations.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.locationCustomAttributes.createLocationCustomAttributeDefinition({ body });
  // TODO: Handle 'response' of type CreateLocationCustomAttributeDefinitionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.locationCustomAttributes.createLocationCustomAttributeDefinition({
  body,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateLocationCustomAttributeDefinitionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateLocationCustomAttributeDefinitionRequest](src/models/create-location-custom-attribute-definition-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.locationCustomAttributes.createLocationCustomAttributeDefinition(request)`

- **OnSuccess**: <code>[CreateLocationCustomAttributeDefinitionResponse](src/models/create-location-custom-attribute-definition-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.locationCustomAttributes.createLocationCustomAttributeDefinition(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateLocationCustomAttributeDefinitionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateLocationCustomAttributeDefinitionResponse](src/models/create-location-custom-attribute-definition-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteLocationCustomAttribute(request: LocationCustomAttributes.DeleteLocationCustomAttributeRequest, options?: RequestOptions): ApiPromise&lt;DeleteLocationCustomAttributeResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a [custom attribute](entity:CustomAttribute) associated with a location.
To delete a custom attribute owned by another application, the `visibility` setting must be
`VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.locationCustomAttributes.deleteLocationCustomAttribute({ locationId, key });
  // TODO: Handle 'response' of type DeleteLocationCustomAttributeResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.locationCustomAttributes.deleteLocationCustomAttribute({
  locationId,
  key,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteLocationCustomAttributeResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locationId</code> | <code>string</code> | The ID of the target [location](entity:Location). |
| <code>key</code> | <code>string</code> | The key of the custom attribute to delete. This key must match the `key` of a custom<br>attribute definition in the Square seller account. If the requesting application is not the<br>definition owner, you must use the qualified key. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.locationCustomAttributes.deleteLocationCustomAttribute(request)`

- **OnSuccess**: <code>[DeleteLocationCustomAttributeResponse](src/models/delete-location-custom-attribute-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.locationCustomAttributes.deleteLocationCustomAttribute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteLocationCustomAttributeResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DeleteLocationCustomAttributeResponse](src/models/delete-location-custom-attribute-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteLocationCustomAttributeDefinition(request: LocationCustomAttributes.DeleteLocationCustomAttributeDefinitionRequest, options?: RequestOptions): ApiPromise&lt;DeleteLocationCustomAttributeDefinitionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a location-related [custom attribute definition](entity:CustomAttributeDefinition) from a Square seller account.
Deleting a custom attribute definition also deletes the corresponding custom attribute from
all locations.
Only the definition owner can delete a custom attribute definition.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.locationCustomAttributes.deleteLocationCustomAttributeDefinition({ key });
  // TODO: Handle 'response' of type DeleteLocationCustomAttributeDefinitionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.locationCustomAttributes.deleteLocationCustomAttributeDefinition({
  key,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteLocationCustomAttributeDefinitionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | The key of the custom attribute definition to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.locationCustomAttributes.deleteLocationCustomAttributeDefinition(request)`

- **OnSuccess**: <code>[DeleteLocationCustomAttributeDefinitionResponse](src/models/delete-location-custom-attribute-definition-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.locationCustomAttributes.deleteLocationCustomAttributeDefinition(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteLocationCustomAttributeDefinitionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DeleteLocationCustomAttributeDefinitionResponse](src/models/delete-location-custom-attribute-definition-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listLocationCustomAttributeDefinitions(request: LocationCustomAttributes.ListLocationCustomAttributeDefinitionsRequest, options?: RequestOptions): ApiPromise&lt;ListLocationCustomAttributeDefinitionsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the location-related [custom attribute definitions](entity:CustomAttributeDefinition) that belong to a Square seller account.
When all response pages are retrieved, the results include all custom attribute definitions
that are visible to the requesting application, including those that are created by other
applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.locationCustomAttributes.listLocationCustomAttributeDefinitions();
  // TODO: Handle 'response' of type ListLocationCustomAttributeDefinitionsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.locationCustomAttributes.listLocationCustomAttributeDefinitions().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListLocationCustomAttributeDefinitionsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>visibilityFilter?</code> | <code>[VisibilityFilter](src/models/visibility-filter.ts)</code> | Filters the `CustomAttributeDefinition` results by their `visibility` values. |
| <code>limit?</code> | <code>number</code> | The maximum number of results to return in a single paged response. This limit is advisory.<br>The response might contain more or fewer results. The minimum value is 1 and the maximum value is 100.<br>The default value is 20. For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| <code>cursor?</code> | <code>string</code> | The cursor returned in the paged response from the previous call to this endpoint.<br>Provide this cursor to retrieve the next page of results for your original request.<br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.locationCustomAttributes.listLocationCustomAttributeDefinitions(request)`

- **OnSuccess**: <code>[ListLocationCustomAttributeDefinitionsResponse](src/models/list-location-custom-attribute-definitions-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.locationCustomAttributes.listLocationCustomAttributeDefinitions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListLocationCustomAttributeDefinitionsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListLocationCustomAttributeDefinitionsResponse](src/models/list-location-custom-attribute-definitions-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listLocationCustomAttributes(request: LocationCustomAttributes.ListLocationCustomAttributesRequest, options?: RequestOptions): ApiPromise&lt;ListLocationCustomAttributesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the [custom attributes](entity:CustomAttribute) associated with a location.
You can use the `with_definitions` query parameter to also retrieve custom attribute definitions
in the same call.
When all response pages are retrieved, the results include all custom attributes that are
visible to the requesting application, including those that are owned by other applications
and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.locationCustomAttributes.listLocationCustomAttributes({ locationId });
  // TODO: Handle 'response' of type ListLocationCustomAttributesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.locationCustomAttributes.listLocationCustomAttributes({
  locationId,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListLocationCustomAttributesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locationId</code> | <code>string</code> | The ID of the target [location](entity:Location). |
| <code>visibilityFilter?</code> | <code>[VisibilityFilter](src/models/visibility-filter.ts)</code> | Filters the `CustomAttributeDefinition` results by their `visibility` values. |
| <code>limit?</code> | <code>number</code> | The maximum number of results to return in a single paged response. This limit is advisory.<br>The response might contain more or fewer results. The minimum value is 1 and the maximum value is 100.<br>The default value is 20. For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| <code>cursor?</code> | <code>string</code> | The cursor returned in the paged response from the previous call to this endpoint.<br>Provide this cursor to retrieve the next page of results for your original request. For more<br>information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| <code>withDefinitions?</code> | <code>boolean</code> | Indicates whether to return the [custom attribute definition](entity:CustomAttributeDefinition) in the `definition` field of each<br>custom attribute. Set this parameter to `true` to get the name and description of each custom<br>attribute, information about the data type, or other definition details. The default value is `false`.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.locationCustomAttributes.listLocationCustomAttributes(request)`

- **OnSuccess**: <code>[ListLocationCustomAttributesResponse](src/models/list-location-custom-attributes-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.locationCustomAttributes.listLocationCustomAttributes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListLocationCustomAttributesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListLocationCustomAttributesResponse](src/models/list-location-custom-attributes-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveLocationCustomAttribute(request: LocationCustomAttributes.RetrieveLocationCustomAttributeRequest, options?: RequestOptions): ApiPromise&lt;RetrieveLocationCustomAttributeResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a [custom attribute](entity:CustomAttribute) associated with a location.
You can use the `with_definition` query parameter to also retrieve the custom attribute definition
in the same call.
To retrieve a custom attribute owned by another application, the `visibility` setting must be
`VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.locationCustomAttributes.retrieveLocationCustomAttribute({ locationId, key });
  // TODO: Handle 'response' of type RetrieveLocationCustomAttributeResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.locationCustomAttributes.retrieveLocationCustomAttribute({
  locationId,
  key,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveLocationCustomAttributeResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locationId</code> | <code>string</code> | The ID of the target [location](entity:Location). |
| <code>key</code> | <code>string</code> | The key of the custom attribute to retrieve. This key must match the `key` of a custom<br>attribute definition in the Square seller account. If the requesting application is not the<br>definition owner, you must use the qualified key. |
| <code>withDefinition?</code> | <code>boolean</code> | Indicates whether to return the [custom attribute definition](entity:CustomAttributeDefinition) in the `definition` field of<br>the custom attribute. Set this parameter to `true` to get the name and description of the custom<br>attribute, information about the data type, or other definition details. The default value is `false`.<br>**Default**: false |
| <code>version?</code> | <code>number</code> | The current version of the custom attribute, which is used for strongly consistent reads to<br>guarantee that you receive the most up-to-date data. When included in the request, Square<br>returns the specified version or a higher version if one exists. If the specified version is<br>higher than the current version, Square returns a `BAD_REQUEST` error. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.locationCustomAttributes.retrieveLocationCustomAttribute(request)`

- **OnSuccess**: <code>[RetrieveLocationCustomAttributeResponse](src/models/retrieve-location-custom-attribute-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.locationCustomAttributes.retrieveLocationCustomAttribute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveLocationCustomAttributeResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveLocationCustomAttributeResponse](src/models/retrieve-location-custom-attribute-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveLocationCustomAttributeDefinition(request: LocationCustomAttributes.RetrieveLocationCustomAttributeDefinitionRequest, options?: RequestOptions): ApiPromise&lt;RetrieveLocationCustomAttributeDefinitionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a location-related [custom attribute definition](entity:CustomAttributeDefinition) from a Square seller account.
To retrieve a custom attribute definition created by another application, the `visibility`
setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.locationCustomAttributes.retrieveLocationCustomAttributeDefinition({ key });
  // TODO: Handle 'response' of type RetrieveLocationCustomAttributeDefinitionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.locationCustomAttributes.retrieveLocationCustomAttributeDefinition({
  key,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveLocationCustomAttributeDefinitionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | The key of the custom attribute definition to retrieve. If the requesting application<br>is not the definition owner, you must use the qualified key. |
| <code>version?</code> | <code>number</code> | The current version of the custom attribute definition, which is used for strongly consistent<br>reads to guarantee that you receive the most up-to-date data. When included in the request,<br>Square returns the specified version or a higher version if one exists. If the specified version<br>is higher than the current version, Square returns a `BAD_REQUEST` error. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.locationCustomAttributes.retrieveLocationCustomAttributeDefinition(request)`

- **OnSuccess**: <code>[RetrieveLocationCustomAttributeDefinitionResponse](src/models/retrieve-location-custom-attribute-definition-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.locationCustomAttributes.retrieveLocationCustomAttributeDefinition(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveLocationCustomAttributeDefinitionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveLocationCustomAttributeDefinitionResponse](src/models/retrieve-location-custom-attribute-definition-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateLocationCustomAttributeDefinition(request: LocationCustomAttributes.UpdateLocationCustomAttributeDefinitionRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateLocationCustomAttributeDefinitionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a location-related [custom attribute definition](entity:CustomAttributeDefinition) for a Square seller account.
Use this endpoint to update the following fields: `name`, `description`, `visibility`, or the
`schema` for a `Selection` data type.
Only the definition owner can update a custom attribute definition.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.locationCustomAttributes.updateLocationCustomAttributeDefinition({
    key,
    body,
  });
  // TODO: Handle 'response' of type UpdateLocationCustomAttributeDefinitionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.locationCustomAttributes.updateLocationCustomAttributeDefinition({
  key,
  body,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateLocationCustomAttributeDefinitionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | The key of the custom attribute definition to update. |
| <code>body</code> | <code>[UpdateLocationCustomAttributeDefinitionRequest](src/models/update-location-custom-attribute-definition-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.locationCustomAttributes.updateLocationCustomAttributeDefinition(request)`

- **OnSuccess**: <code>[UpdateLocationCustomAttributeDefinitionResponse](src/models/update-location-custom-attribute-definition-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.locationCustomAttributes.updateLocationCustomAttributeDefinition(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateLocationCustomAttributeDefinitionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateLocationCustomAttributeDefinitionResponse](src/models/update-location-custom-attribute-definition-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>upsertLocationCustomAttribute(request: LocationCustomAttributes.UpsertLocationCustomAttributeRequestParams, options?: RequestOptions): ApiPromise&lt;UpsertLocationCustomAttributeResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates a [custom attribute](entity:CustomAttribute) for a location.
Use this endpoint to set the value of a custom attribute for a specified location.
A custom attribute is based on a custom attribute definition in a Square seller account, which
is created using the [CreateLocationCustomAttributeDefinition](api-endpoint:LocationCustomAttributes-CreateLocationCustomAttributeDefinition) endpoint.
To create or update a custom attribute owned by another application, the `visibility` setting
must be `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.locationCustomAttributes.upsertLocationCustomAttribute({
    locationId,
    key,
    body,
  });
  // TODO: Handle 'response' of type UpsertLocationCustomAttributeResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.locationCustomAttributes.upsertLocationCustomAttribute({
  locationId,
  key,
  body,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpsertLocationCustomAttributeResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locationId</code> | <code>string</code> | The ID of the target [location](entity:Location). |
| <code>key</code> | <code>string</code> | The key of the custom attribute to create or update. This key must match the `key` of a<br>custom attribute definition in the Square seller account. If the requesting application is not<br>the definition owner, you must use the qualified key. |
| <code>body</code> | <code>[UpsertLocationCustomAttributeRequest](src/models/upsert-location-custom-attribute-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.locationCustomAttributes.upsertLocationCustomAttribute(request)`

- **OnSuccess**: <code>[UpsertLocationCustomAttributeResponse](src/models/upsert-location-custom-attribute-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.locationCustomAttributes.upsertLocationCustomAttribute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpsertLocationCustomAttributeResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpsertLocationCustomAttributeResponse](src/models/upsert-location-custom-attribute-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## CheckoutApi

> Source: [CheckoutApi](src/resources/checkout-api.ts)

<details>
<summary><code>createCheckout(request: CheckoutApi.CreateCheckoutRequestParams, options?: RequestOptions): ApiPromise&lt;CreateCheckoutResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Links a `checkoutId` to a `checkout_page_url` that customers are
directed to in order to provide their payment information using a
payment processing workflow hosted on connect.squareup.com. 


NOTE: The Checkout API has been updated with new features. 
For more information, see [Checkout API highlights](https://developer.squareup.com/docs/checkout-api#checkout-api-highlights).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checkoutApi.createCheckout({ locationId, body });
  // TODO: Handle 'response' of type CreateCheckoutResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkoutApi.createCheckout({ locationId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateCheckoutResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locationId</code> | <code>string</code> | The ID of the business location to associate the checkout with. |
| <code>body</code> | <code>[CreateCheckoutRequest](src/models/create-checkout-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkoutApi.createCheckout(request)`

- **OnSuccess**: <code>[CreateCheckoutResponse](src/models/create-checkout-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.checkoutApi.createCheckout(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateCheckoutResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateCheckoutResponse](src/models/create-checkout-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPaymentLink(request: CheckoutApi.CreatePaymentLinkRequestParams, options?: RequestOptions): ApiPromise&lt;CreatePaymentLinkResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Square-hosted checkout page. Applications can share the resulting payment link with their buyer to pay for goods and services.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checkoutApi.createPaymentLink({ body });
  // TODO: Handle 'response' of type CreatePaymentLinkResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkoutApi.createPaymentLink({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreatePaymentLinkResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreatePaymentLinkRequest](src/models/create-payment-link-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkoutApi.createPaymentLink(request)`

- **OnSuccess**: <code>[CreatePaymentLinkResponse](src/models/create-payment-link-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.checkoutApi.createPaymentLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreatePaymentLinkResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreatePaymentLinkResponse](src/models/create-payment-link-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deletePaymentLink(request: CheckoutApi.DeletePaymentLinkRequest, options?: RequestOptions): ApiPromise&lt;DeletePaymentLinkResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a payment link.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checkoutApi.deletePaymentLink({ id });
  // TODO: Handle 'response' of type DeletePaymentLinkResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkoutApi.deletePaymentLink({ id }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeletePaymentLinkResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The ID of the payment link to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkoutApi.deletePaymentLink(request)`

- **OnSuccess**: <code>[DeletePaymentLinkResponse](src/models/delete-payment-link-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.checkoutApi.deletePaymentLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeletePaymentLinkResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DeletePaymentLinkResponse](src/models/delete-payment-link-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPaymentLinks(request: CheckoutApi.ListPaymentLinksRequest, options?: RequestOptions): ApiPromise&lt;ListPaymentLinksResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all payment links.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checkoutApi.listPaymentLinks();
  // TODO: Handle 'response' of type ListPaymentLinksResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkoutApi.listPaymentLinks().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListPaymentLinksResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor?</code> | <code>string</code> | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for the original query.<br>If a cursor is not provided, the endpoint returns the first page of the results.<br>For more  information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| <code>limit?</code> | <code>number</code> | A limit on the number of results to return per page. The limit is advisory and<br>the implementation might return more or less results. If the supplied limit is negative, zero, or<br>greater than the maximum limit of 1000, it is ignored.<br><br>Default value: `100` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkoutApi.listPaymentLinks(request)`

- **OnSuccess**: <code>[ListPaymentLinksResponse](src/models/list-payment-links-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.checkoutApi.listPaymentLinks(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListPaymentLinksResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListPaymentLinksResponse](src/models/list-payment-links-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveLocationSettings(request: CheckoutApi.RetrieveLocationSettingsRequest, options?: RequestOptions): ApiPromise&lt;RetrieveLocationSettingsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the location-level settings for a Square-hosted checkout page.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checkoutApi.retrieveLocationSettings({ locationId });
  // TODO: Handle 'response' of type RetrieveLocationSettingsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkoutApi.retrieveLocationSettings({ locationId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveLocationSettingsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locationId</code> | <code>string</code> | The ID of the location for which to retrieve settings. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkoutApi.retrieveLocationSettings(request)`

- **OnSuccess**: <code>[RetrieveLocationSettingsResponse](src/models/retrieve-location-settings-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.checkoutApi.retrieveLocationSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveLocationSettingsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveLocationSettingsResponse](src/models/retrieve-location-settings-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveMerchantSettings(options?: RequestOptions): ApiPromise&lt;RetrieveMerchantSettingsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the merchant-level settings for a Square-hosted checkout page.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checkoutApi.retrieveMerchantSettings();
  // TODO: Handle 'response' of type RetrieveMerchantSettingsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkoutApi.retrieveMerchantSettings().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveMerchantSettingsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkoutApi.retrieveMerchantSettings()`

- **OnSuccess**: <code>[RetrieveMerchantSettingsResponse](src/models/retrieve-merchant-settings-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.checkoutApi.retrieveMerchantSettings().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveMerchantSettingsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveMerchantSettingsResponse](src/models/retrieve-merchant-settings-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrievePaymentLink(request: CheckoutApi.RetrievePaymentLinkRequest, options?: RequestOptions): ApiPromise&lt;RetrievePaymentLinkResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a payment link.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checkoutApi.retrievePaymentLink({ id });
  // TODO: Handle 'response' of type RetrievePaymentLinkResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkoutApi.retrievePaymentLink({ id }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrievePaymentLinkResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The ID of link to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkoutApi.retrievePaymentLink(request)`

- **OnSuccess**: <code>[RetrievePaymentLinkResponse](src/models/retrieve-payment-link-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.checkoutApi.retrievePaymentLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrievePaymentLinkResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrievePaymentLinkResponse](src/models/retrieve-payment-link-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateLocationSettings(request: CheckoutApi.UpdateLocationSettingsRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateLocationSettingsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the location-level settings for a Square-hosted checkout page.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checkoutApi.updateLocationSettings({ locationId, body });
  // TODO: Handle 'response' of type UpdateLocationSettingsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkoutApi.updateLocationSettings({ locationId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateLocationSettingsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locationId</code> | <code>string</code> | The ID of the location for which to retrieve settings. |
| <code>body</code> | <code>[UpdateLocationSettingsRequest](src/models/update-location-settings-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkoutApi.updateLocationSettings(request)`

- **OnSuccess**: <code>[UpdateLocationSettingsResponse](src/models/update-location-settings-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.checkoutApi.updateLocationSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateLocationSettingsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateLocationSettingsResponse](src/models/update-location-settings-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateMerchantSettings(request: CheckoutApi.UpdateMerchantSettingsRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateMerchantSettingsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the merchant-level settings for a Square-hosted checkout page.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checkoutApi.updateMerchantSettings({ body });
  // TODO: Handle 'response' of type UpdateMerchantSettingsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkoutApi.updateMerchantSettings({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateMerchantSettingsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[UpdateMerchantSettingsRequest](src/models/update-merchant-settings-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkoutApi.updateMerchantSettings(request)`

- **OnSuccess**: <code>[UpdateMerchantSettingsResponse](src/models/update-merchant-settings-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.checkoutApi.updateMerchantSettings(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateMerchantSettingsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateMerchantSettingsResponse](src/models/update-merchant-settings-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePaymentLink(request: CheckoutApi.UpdatePaymentLinkRequestParams, options?: RequestOptions): ApiPromise&lt;UpdatePaymentLinkResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a payment link. You can update the `payment_link` fields such as
`description`, `checkout_options`, and  `pre_populated_data`.
You cannot update other fields such as the `order_id`, `version`, `URL`, or `timestamp` field.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.checkoutApi.updatePaymentLink({ id, body });
  // TODO: Handle 'response' of type UpdatePaymentLinkResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.checkoutApi.updatePaymentLink({ id, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdatePaymentLinkResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>id</code> | <code>string</code> | The ID of the payment link to update. |
| <code>body</code> | <code>[UpdatePaymentLinkRequest](src/models/update-payment-link-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.checkoutApi.updatePaymentLink(request)`

- **OnSuccess**: <code>[UpdatePaymentLinkResponse](src/models/update-payment-link-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.checkoutApi.updatePaymentLink(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdatePaymentLinkResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdatePaymentLinkResponse](src/models/update-payment-link-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Transactions

> Source: [Transactions](src/resources/transactions.ts)

<details>
<summary><code>captureTransaction(request: Transactions.CaptureTransactionRequest, options?: RequestOptions): ApiPromise&lt;CaptureTransactionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Captures a transaction that was created with the [Charge](api-endpoint:Transactions-Charge)
endpoint with a `delay_capture` value of `true`.


See [Delayed capture transactions](https://developer.squareup.com/docs/payments/transactions/overview#delayed-capture)
for more information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.captureTransaction({ locationId, transactionId });
  // TODO: Handle 'response' of type CaptureTransactionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions.captureTransaction({ locationId, transactionId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CaptureTransactionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locationId</code> | <code>string</code> | - |
| <code>transactionId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.captureTransaction(request)`

- **OnSuccess**: <code>[CaptureTransactionResponse](src/models/capture-transaction-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.transactions.captureTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CaptureTransactionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CaptureTransactionResponse](src/models/capture-transaction-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listTransactions(request: Transactions.ListTransactionsRequest, options?: RequestOptions): ApiPromise&lt;ListTransactionsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists transactions for a particular location.

Transactions include payment information from sales and exchanges and refund
information from returns and exchanges.

Max results per [page](https://developer.squareup.com/docs/working-with-apis/pagination): 50

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.listTransactions({ locationId });
  // TODO: Handle 'response' of type ListTransactionsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions.listTransactions({ locationId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListTransactionsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locationId</code> | <code>string</code> | The ID of the location to list transactions for. |
| <code>beginTime?</code> | <code>string</code> | The beginning of the requested reporting period, in RFC 3339 format.<br><br>See [Date ranges](https://developer.squareup.com/docs/build-basics/working-with-dates) for details on date inclusivity/exclusivity.<br><br>Default value: The current time minus one year. |
| <code>endTime?</code> | <code>string</code> | The end of the requested reporting period, in RFC 3339 format.<br><br>See [Date ranges](https://developer.squareup.com/docs/build-basics/working-with-dates) for details on date inclusivity/exclusivity.<br><br>Default value: The current time. |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | The order in which results are listed in the response (`ASC` for<br>oldest first, `DESC` for newest first).<br><br>Default value: `DESC` |
| <code>cursor?</code> | <code>string</code> | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for your original query.<br><br>See [Paginating results](https://developer.squareup.com/docs/working-with-apis/pagination) for more information. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.listTransactions(request)`

- **OnSuccess**: <code>[ListTransactionsResponse](src/models/list-transactions-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.transactions.listTransactions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListTransactionsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListTransactionsResponse](src/models/list-transactions-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveTransaction(request: Transactions.RetrieveTransactionRequest, options?: RequestOptions): ApiPromise&lt;RetrieveTransactionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves details for a single transaction.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.retrieveTransaction({ locationId, transactionId });
  // TODO: Handle 'response' of type RetrieveTransactionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions.retrieveTransaction({ locationId, transactionId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveTransactionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locationId</code> | <code>string</code> | The ID of the transaction's associated location. |
| <code>transactionId</code> | <code>string</code> | The ID of the transaction to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.retrieveTransaction(request)`

- **OnSuccess**: <code>[RetrieveTransactionResponse](src/models/retrieve-transaction-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.transactions.retrieveTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveTransactionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveTransactionResponse](src/models/retrieve-transaction-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>voidTransaction(request: Transactions.VoidTransactionRequest, options?: RequestOptions): ApiPromise&lt;VoidTransactionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a transaction that was created with the [Charge](api-endpoint:Transactions-Charge)
endpoint with a `delay_capture` value of `true`.


See [Delayed capture transactions](https://developer.squareup.com/docs/payments/transactions/overview#delayed-capture)
for more information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transactions.voidTransaction({ locationId, transactionId });
  // TODO: Handle 'response' of type VoidTransactionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transactions.voidTransaction({ locationId, transactionId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type VoidTransactionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locationId</code> | <code>string</code> | - |
| <code>transactionId</code> | <code>string</code> | - |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transactions.voidTransaction(request)`

- **OnSuccess**: <code>[VoidTransactionResponse](src/models/void-transaction-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.transactions.voidTransaction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;VoidTransactionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[VoidTransactionResponse](src/models/void-transaction-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Loyalty

> Source: [Loyalty](src/resources/loyalty.ts)

<details>
<summary><code>accumulateLoyaltyPoints(request: Loyalty.AccumulateLoyaltyPointsRequestParams, options?: RequestOptions): ApiPromise&lt;AccumulateLoyaltyPointsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds points earned from a purchase to a [loyalty account](entity:LoyaltyAccount).

- If you are using the Orders API to manage orders, provide the `order_id`. Square reads the order
to compute the points earned from both the base loyalty program and an associated
[loyalty promotion](entity:LoyaltyPromotion). For purchases that qualify for multiple accrual
rules, Square computes points based on the accrual rule that grants the most points.
For purchases that qualify for multiple promotions, Square computes points based on the most
recently created promotion. A purchase must first qualify for program points to be eligible for promotion points.

- If you are not using the Orders API to manage orders, provide `points` with the number of points to add.
You must first perform a client-side computation of the points earned from the loyalty program and
loyalty promotion. For spend-based and visit-based programs, you can call [CalculateLoyaltyPoints](api-endpoint:Loyalty-CalculateLoyaltyPoints)
to compute the points earned from the base loyalty program. For information about computing points earned from a loyalty promotion, see
[Calculating promotion points](https://developer.squareup.com/docs/loyalty-api/loyalty-promotions#calculate-promotion-points).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.loyalty.accumulateLoyaltyPoints({ accountId, body });
  // TODO: Handle 'response' of type AccumulateLoyaltyPointsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.loyalty.accumulateLoyaltyPoints({ accountId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AccumulateLoyaltyPointsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountId</code> | <code>string</code> | The ID of the target [loyalty account](entity:LoyaltyAccount). |
| <code>body</code> | <code>[AccumulateLoyaltyPointsRequest](src/models/accumulate-loyalty-points-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.loyalty.accumulateLoyaltyPoints(request)`

- **OnSuccess**: <code>[AccumulateLoyaltyPointsResponse](src/models/accumulate-loyalty-points-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.loyalty.accumulateLoyaltyPoints(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AccumulateLoyaltyPointsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[AccumulateLoyaltyPointsResponse](src/models/accumulate-loyalty-points-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>adjustLoyaltyPoints(request: Loyalty.AdjustLoyaltyPointsRequestParams, options?: RequestOptions): ApiPromise&lt;AdjustLoyaltyPointsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds points to or subtracts points from a buyer's account.

Use this endpoint only when you need to manually adjust points. Otherwise, in your application flow, you call
[AccumulateLoyaltyPoints](api-endpoint:Loyalty-AccumulateLoyaltyPoints)
to add points when a buyer pays for the purchase.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.loyalty.adjustLoyaltyPoints({ accountId, body });
  // TODO: Handle 'response' of type AdjustLoyaltyPointsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.loyalty.adjustLoyaltyPoints({ accountId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type AdjustLoyaltyPointsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountId</code> | <code>string</code> | The ID of the target [loyalty account](entity:LoyaltyAccount). |
| <code>body</code> | <code>[AdjustLoyaltyPointsRequest](src/models/adjust-loyalty-points-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.loyalty.adjustLoyaltyPoints(request)`

- **OnSuccess**: <code>[AdjustLoyaltyPointsResponse](src/models/adjust-loyalty-points-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.loyalty.adjustLoyaltyPoints(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;AdjustLoyaltyPointsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[AdjustLoyaltyPointsResponse](src/models/adjust-loyalty-points-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>calculateLoyaltyPoints(request: Loyalty.CalculateLoyaltyPointsRequestParams, options?: RequestOptions): ApiPromise&lt;CalculateLoyaltyPointsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Calculates the number of points a buyer can earn from a purchase. Applications might call this endpoint
to display the points to the buyer.

- If you are using the Orders API to manage orders, provide the `order_id` and (optional) `loyalty_account_id`.
Square reads the order to compute the points earned from the base loyalty program and an associated
[loyalty promotion](entity:LoyaltyPromotion).

- If you are not using the Orders API to manage orders, provide `transaction_amount_money` with the
purchase amount. Square uses this amount to calculate the points earned from the base loyalty program,
but not points earned from a loyalty promotion. For spend-based and visit-based programs, the `tax_mode`
setting of the accrual rule indicates how taxes should be treated for loyalty points accrual.
If the purchase qualifies for program points, call
[ListLoyaltyPromotions](api-endpoint:Loyalty-ListLoyaltyPromotions) and perform a client-side computation
to calculate whether the purchase also qualifies for promotion points. For more information, see
[Calculating promotion points](https://developer.squareup.com/docs/loyalty-api/loyalty-promotions#calculate-promotion-points).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.loyalty.calculateLoyaltyPoints({ programId, body });
  // TODO: Handle 'response' of type CalculateLoyaltyPointsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.loyalty.calculateLoyaltyPoints({ programId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CalculateLoyaltyPointsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>programId</code> | <code>string</code> | The ID of the [loyalty program](entity:LoyaltyProgram), which defines the rules for accruing points. |
| <code>body</code> | <code>[CalculateLoyaltyPointsRequest](src/models/calculate-loyalty-points-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.loyalty.calculateLoyaltyPoints(request)`

- **OnSuccess**: <code>[CalculateLoyaltyPointsResponse](src/models/calculate-loyalty-points-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.loyalty.calculateLoyaltyPoints(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CalculateLoyaltyPointsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CalculateLoyaltyPointsResponse](src/models/calculate-loyalty-points-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelLoyaltyPromotion(request: Loyalty.CancelLoyaltyPromotionRequest, options?: RequestOptions): ApiPromise&lt;CancelLoyaltyPromotionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a loyalty promotion. Use this endpoint to cancel an `ACTIVE` promotion earlier than the
end date, cancel an `ACTIVE` promotion when an end date is not specified, or cancel a `SCHEDULED` promotion.
Because updating a promotion is not supported, you can also use this endpoint to cancel a promotion before
you create a new one.

This endpoint sets the loyalty promotion to the `CANCELED` state

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.loyalty.cancelLoyaltyPromotion({ promotionId, programId });
  // TODO: Handle 'response' of type CancelLoyaltyPromotionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.loyalty.cancelLoyaltyPromotion({ promotionId, programId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelLoyaltyPromotionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>promotionId</code> | <code>string</code> | The ID of the [loyalty promotion](entity:LoyaltyPromotion) to cancel. You can cancel a<br>promotion that has an `ACTIVE` or `SCHEDULED` status. |
| <code>programId</code> | <code>string</code> | The ID of the base [loyalty program](entity:LoyaltyProgram). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.loyalty.cancelLoyaltyPromotion(request)`

- **OnSuccess**: <code>[CancelLoyaltyPromotionResponse](src/models/cancel-loyalty-promotion-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.loyalty.cancelLoyaltyPromotion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelLoyaltyPromotionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CancelLoyaltyPromotionResponse](src/models/cancel-loyalty-promotion-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createLoyaltyAccount(request: Loyalty.CreateLoyaltyAccountRequestParams, options?: RequestOptions): ApiPromise&lt;CreateLoyaltyAccountResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a loyalty account. To create a loyalty account, you must provide the `program_id` and a `mapping` with the `phone_number` of the buyer.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.loyalty.createLoyaltyAccount({ body });
  // TODO: Handle 'response' of type CreateLoyaltyAccountResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.loyalty.createLoyaltyAccount({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateLoyaltyAccountResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateLoyaltyAccountRequest](src/models/create-loyalty-account-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.loyalty.createLoyaltyAccount(request)`

- **OnSuccess**: <code>[CreateLoyaltyAccountResponse](src/models/create-loyalty-account-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.loyalty.createLoyaltyAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateLoyaltyAccountResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateLoyaltyAccountResponse](src/models/create-loyalty-account-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createLoyaltyPromotion(request: Loyalty.CreateLoyaltyPromotionRequestParams, options?: RequestOptions): ApiPromise&lt;CreateLoyaltyPromotionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a loyalty promotion for a [loyalty program](entity:LoyaltyProgram). A loyalty promotion
enables buyers to earn points in addition to those earned from the base loyalty program.

This endpoint sets the loyalty promotion to the `ACTIVE` or `SCHEDULED` status, depending on the
`available_time` setting. A loyalty program can have a maximum of 10 loyalty promotions with an
`ACTIVE` or `SCHEDULED` status.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.loyalty.createLoyaltyPromotion({ programId, body });
  // TODO: Handle 'response' of type CreateLoyaltyPromotionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.loyalty.createLoyaltyPromotion({ programId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateLoyaltyPromotionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>programId</code> | <code>string</code> | The ID of the [loyalty program](entity:LoyaltyProgram) to associate with the promotion.<br>To get the program ID, call [RetrieveLoyaltyProgram](api-endpoint:Loyalty-RetrieveLoyaltyProgram)<br>using the `main` keyword. |
| <code>body</code> | <code>[CreateLoyaltyPromotionRequest](src/models/create-loyalty-promotion-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.loyalty.createLoyaltyPromotion(request)`

- **OnSuccess**: <code>[CreateLoyaltyPromotionResponse](src/models/create-loyalty-promotion-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.loyalty.createLoyaltyPromotion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateLoyaltyPromotionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateLoyaltyPromotionResponse](src/models/create-loyalty-promotion-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createLoyaltyReward(request: Loyalty.CreateLoyaltyRewardRequestParams, options?: RequestOptions): ApiPromise&lt;CreateLoyaltyRewardResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a loyalty reward. In the process, the endpoint does following:

- Uses the `reward_tier_id` in the request to determine the number of points
to lock for this reward.
- If the request includes `order_id`, it adds the reward and related discount to the order.

After a reward is created, the points are locked and
not available for the buyer to redeem another reward.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.loyalty.createLoyaltyReward({ body });
  // TODO: Handle 'response' of type CreateLoyaltyRewardResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.loyalty.createLoyaltyReward({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateLoyaltyRewardResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateLoyaltyRewardRequest](src/models/create-loyalty-reward-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.loyalty.createLoyaltyReward(request)`

- **OnSuccess**: <code>[CreateLoyaltyRewardResponse](src/models/create-loyalty-reward-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.loyalty.createLoyaltyReward(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateLoyaltyRewardResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateLoyaltyRewardResponse](src/models/create-loyalty-reward-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteLoyaltyReward(request: Loyalty.DeleteLoyaltyRewardRequest, options?: RequestOptions): ApiPromise&lt;DeleteLoyaltyRewardResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a loyalty reward by doing the following:

- Returns the loyalty points back to the loyalty account.
- If an order ID was specified when the reward was created
(see [CreateLoyaltyReward](api-endpoint:Loyalty-CreateLoyaltyReward)),
it updates the order by removing the reward and related
discounts.

You cannot delete a reward that has reached the terminal state (REDEEMED).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.loyalty.deleteLoyaltyReward({ rewardId });
  // TODO: Handle 'response' of type DeleteLoyaltyRewardResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.loyalty.deleteLoyaltyReward({ rewardId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteLoyaltyRewardResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>rewardId</code> | <code>string</code> | The ID of the [loyalty reward](entity:LoyaltyReward) to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.loyalty.deleteLoyaltyReward(request)`

- **OnSuccess**: <code>[DeleteLoyaltyRewardResponse](src/models/delete-loyalty-reward-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.loyalty.deleteLoyaltyReward(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteLoyaltyRewardResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DeleteLoyaltyRewardResponse](src/models/delete-loyalty-reward-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listLoyaltyPrograms(options?: RequestOptions): ApiPromise&lt;ListLoyaltyProgramsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a list of loyalty programs in the seller's account.
Loyalty programs define how buyers can earn points and redeem points for rewards. Square sellers can have only one loyalty program, which is created and managed from the Seller Dashboard. For more information, see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).


Replaced with [RetrieveLoyaltyProgram](api-endpoint:Loyalty-RetrieveLoyaltyProgram) when used with the keyword `main`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.loyalty.listLoyaltyPrograms();
  // TODO: Handle 'response' of type ListLoyaltyProgramsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.loyalty.listLoyaltyPrograms().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListLoyaltyProgramsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.loyalty.listLoyaltyPrograms()`

- **OnSuccess**: <code>[ListLoyaltyProgramsResponse](src/models/list-loyalty-programs-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.loyalty.listLoyaltyPrograms().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListLoyaltyProgramsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListLoyaltyProgramsResponse](src/models/list-loyalty-programs-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listLoyaltyPromotions(request: Loyalty.ListLoyaltyPromotionsRequest, options?: RequestOptions): ApiPromise&lt;ListLoyaltyPromotionsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the loyalty promotions associated with a [loyalty program](entity:LoyaltyProgram).
Results are sorted by the `created_at` date in descending order (newest to oldest).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.loyalty.listLoyaltyPromotions({ programId });
  // TODO: Handle 'response' of type ListLoyaltyPromotionsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.loyalty.listLoyaltyPromotions({ programId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListLoyaltyPromotionsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>programId</code> | <code>string</code> | The ID of the base [loyalty program](entity:LoyaltyProgram). To get the program ID,<br>call [RetrieveLoyaltyProgram](api-endpoint:Loyalty-RetrieveLoyaltyProgram) using the `main` keyword. |
| <code>status?</code> | <code>[LoyaltyPromotionStatus](src/models/loyalty-promotion-status.ts)</code> | The status to filter the results by. If a status is provided, only loyalty promotions<br>with the specified status are returned. Otherwise, all loyalty promotions associated with<br>the loyalty program are returned. |
| <code>cursor?</code> | <code>string</code> | The cursor returned in the paged response from the previous call to this endpoint.<br>Provide this cursor to retrieve the next page of results for your original request.<br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| <code>limit?</code> | <code>number</code> | The maximum number of results to return in a single paged response.<br>The minimum value is 1 and the maximum value is 30. The default value is 30.<br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.loyalty.listLoyaltyPromotions(request)`

- **OnSuccess**: <code>[ListLoyaltyPromotionsResponse](src/models/list-loyalty-promotions-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.loyalty.listLoyaltyPromotions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListLoyaltyPromotionsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListLoyaltyPromotionsResponse](src/models/list-loyalty-promotions-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>redeemLoyaltyReward(request: Loyalty.RedeemLoyaltyRewardRequestParams, options?: RequestOptions): ApiPromise&lt;RedeemLoyaltyRewardResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Redeems a loyalty reward.

The endpoint sets the reward to the `REDEEMED` terminal state.

If you are using your own order processing system (not using the
Orders API), you call this endpoint after the buyer paid for the
purchase.

After the reward reaches the terminal state, it cannot be deleted.
In other words, points used for the reward cannot be returned
to the account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.loyalty.redeemLoyaltyReward({ rewardId, body });
  // TODO: Handle 'response' of type RedeemLoyaltyRewardResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.loyalty.redeemLoyaltyReward({ rewardId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RedeemLoyaltyRewardResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>rewardId</code> | <code>string</code> | The ID of the [loyalty reward](entity:LoyaltyReward) to redeem. |
| <code>body</code> | <code>[RedeemLoyaltyRewardRequest](src/models/redeem-loyalty-reward-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.loyalty.redeemLoyaltyReward(request)`

- **OnSuccess**: <code>[RedeemLoyaltyRewardResponse](src/models/redeem-loyalty-reward-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.loyalty.redeemLoyaltyReward(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RedeemLoyaltyRewardResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RedeemLoyaltyRewardResponse](src/models/redeem-loyalty-reward-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveLoyaltyAccount(request: Loyalty.RetrieveLoyaltyAccountRequest, options?: RequestOptions): ApiPromise&lt;RetrieveLoyaltyAccountResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a loyalty account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.loyalty.retrieveLoyaltyAccount({ accountId });
  // TODO: Handle 'response' of type RetrieveLoyaltyAccountResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.loyalty.retrieveLoyaltyAccount({ accountId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveLoyaltyAccountResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>accountId</code> | <code>string</code> | The ID of the [loyalty account](entity:LoyaltyAccount) to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.loyalty.retrieveLoyaltyAccount(request)`

- **OnSuccess**: <code>[RetrieveLoyaltyAccountResponse](src/models/retrieve-loyalty-account-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.loyalty.retrieveLoyaltyAccount(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveLoyaltyAccountResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveLoyaltyAccountResponse](src/models/retrieve-loyalty-account-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveLoyaltyProgram(request: Loyalty.RetrieveLoyaltyProgramRequest, options?: RequestOptions): ApiPromise&lt;RetrieveLoyaltyProgramResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the loyalty program in a seller's account, specified by the program ID or the keyword `main`.

Loyalty programs define how buyers can earn points and redeem points for rewards. Square sellers can have only one loyalty program, which is created and managed from the Seller Dashboard. For more information, see [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.loyalty.retrieveLoyaltyProgram({ programId });
  // TODO: Handle 'response' of type RetrieveLoyaltyProgramResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.loyalty.retrieveLoyaltyProgram({ programId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveLoyaltyProgramResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>programId</code> | <code>string</code> | The ID of the loyalty program or the keyword `main`. Either value can be used to retrieve the single loyalty program that belongs to the seller. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.loyalty.retrieveLoyaltyProgram(request)`

- **OnSuccess**: <code>[RetrieveLoyaltyProgramResponse](src/models/retrieve-loyalty-program-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.loyalty.retrieveLoyaltyProgram(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveLoyaltyProgramResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveLoyaltyProgramResponse](src/models/retrieve-loyalty-program-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveLoyaltyPromotion(request: Loyalty.RetrieveLoyaltyPromotionRequest, options?: RequestOptions): ApiPromise&lt;RetrieveLoyaltyPromotionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a loyalty promotion.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.loyalty.retrieveLoyaltyPromotion({ promotionId, programId });
  // TODO: Handle 'response' of type RetrieveLoyaltyPromotionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.loyalty.retrieveLoyaltyPromotion({ promotionId, programId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveLoyaltyPromotionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>promotionId</code> | <code>string</code> | The ID of the [loyalty promotion](entity:LoyaltyPromotion) to retrieve. |
| <code>programId</code> | <code>string</code> | The ID of the base [loyalty program](entity:LoyaltyProgram). To get the program ID,<br>call [RetrieveLoyaltyProgram](api-endpoint:Loyalty-RetrieveLoyaltyProgram) using the `main` keyword. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.loyalty.retrieveLoyaltyPromotion(request)`

- **OnSuccess**: <code>[RetrieveLoyaltyPromotionResponse](src/models/retrieve-loyalty-promotion-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.loyalty.retrieveLoyaltyPromotion(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveLoyaltyPromotionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveLoyaltyPromotionResponse](src/models/retrieve-loyalty-promotion-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveLoyaltyReward(request: Loyalty.RetrieveLoyaltyRewardRequest, options?: RequestOptions): ApiPromise&lt;RetrieveLoyaltyRewardResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a loyalty reward.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.loyalty.retrieveLoyaltyReward({ rewardId });
  // TODO: Handle 'response' of type RetrieveLoyaltyRewardResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.loyalty.retrieveLoyaltyReward({ rewardId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveLoyaltyRewardResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>rewardId</code> | <code>string</code> | The ID of the [loyalty reward](entity:LoyaltyReward) to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.loyalty.retrieveLoyaltyReward(request)`

- **OnSuccess**: <code>[RetrieveLoyaltyRewardResponse](src/models/retrieve-loyalty-reward-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.loyalty.retrieveLoyaltyReward(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveLoyaltyRewardResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveLoyaltyRewardResponse](src/models/retrieve-loyalty-reward-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchLoyaltyAccounts(request: Loyalty.SearchLoyaltyAccountsRequestParams, options?: RequestOptions): ApiPromise&lt;SearchLoyaltyAccountsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches for loyalty accounts in a loyalty program.

You can search for a loyalty account using the phone number or customer ID associated with the account. To return all loyalty accounts, specify an empty `query` object or omit it entirely.

Search results are sorted by `created_at` in ascending order.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.loyalty.searchLoyaltyAccounts({ body });
  // TODO: Handle 'response' of type SearchLoyaltyAccountsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.loyalty.searchLoyaltyAccounts({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchLoyaltyAccountsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchLoyaltyAccountsRequest](src/models/search-loyalty-accounts-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.loyalty.searchLoyaltyAccounts(request)`

- **OnSuccess**: <code>[SearchLoyaltyAccountsResponse](src/models/search-loyalty-accounts-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.loyalty.searchLoyaltyAccounts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchLoyaltyAccountsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[SearchLoyaltyAccountsResponse](src/models/search-loyalty-accounts-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchLoyaltyEvents(request: Loyalty.SearchLoyaltyEventsRequestParams, options?: RequestOptions): ApiPromise&lt;SearchLoyaltyEventsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches for loyalty events.

A Square loyalty program maintains a ledger of events that occur during the lifetime of a
buyer's loyalty account. Each change in the point balance
(for example, points earned, points redeemed, and points expired) is
recorded in the ledger. Using this endpoint, you can search the ledger for events.

Search results are sorted by `created_at` in descending order.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.loyalty.searchLoyaltyEvents({ body });
  // TODO: Handle 'response' of type SearchLoyaltyEventsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.loyalty.searchLoyaltyEvents({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchLoyaltyEventsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchLoyaltyEventsRequest](src/models/search-loyalty-events-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.loyalty.searchLoyaltyEvents(request)`

- **OnSuccess**: <code>[SearchLoyaltyEventsResponse](src/models/search-loyalty-events-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.loyalty.searchLoyaltyEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchLoyaltyEventsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[SearchLoyaltyEventsResponse](src/models/search-loyalty-events-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchLoyaltyRewards(request: Loyalty.SearchLoyaltyRewardsRequestParams, options?: RequestOptions): ApiPromise&lt;SearchLoyaltyRewardsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches for loyalty rewards. This endpoint accepts a request with no query filters and returns results for all loyalty accounts.
If you include a `query` object, `loyalty_account_id` is required and `status` is  optional.

If you know a reward ID, use the
[RetrieveLoyaltyReward](api-endpoint:Loyalty-RetrieveLoyaltyReward) endpoint.

Search results are sorted by `updated_at` in descending order.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.loyalty.searchLoyaltyRewards({ body });
  // TODO: Handle 'response' of type SearchLoyaltyRewardsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.loyalty.searchLoyaltyRewards({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchLoyaltyRewardsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchLoyaltyRewardsRequest](src/models/search-loyalty-rewards-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.loyalty.searchLoyaltyRewards(request)`

- **OnSuccess**: <code>[SearchLoyaltyRewardsResponse](src/models/search-loyalty-rewards-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.loyalty.searchLoyaltyRewards(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchLoyaltyRewardsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[SearchLoyaltyRewardsResponse](src/models/search-loyalty-rewards-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Merchants

> Source: [Merchants](src/resources/merchants.ts)

<details>
<summary><code>listMerchants(request: Merchants.ListMerchantsRequest, options?: RequestOptions): ApiPromise&lt;ListMerchantsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Provides details about the merchant associated with a given access token.

The access token used to connect your application to a Square seller is associated
with a single merchant. That means that `ListMerchants` returns a list
with a single `Merchant` object. You can specify your personal access token
to get your own merchant information or specify an OAuth token to get the
information for the merchant that granted your application access.

If you know the merchant ID, you can also use the [RetrieveMerchant](api-endpoint:Merchants-RetrieveMerchant)
endpoint to retrieve the merchant information.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchants.listMerchants();
  // TODO: Handle 'response' of type ListMerchantsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchants.listMerchants().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListMerchantsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor?</code> | <code>number</code> | The cursor generated by the previous response. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchants.listMerchants(request)`

- **OnSuccess**: <code>[ListMerchantsResponse](src/models/list-merchants-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.merchants.listMerchants(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListMerchantsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListMerchantsResponse](src/models/list-merchants-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveMerchant(request: Merchants.RetrieveMerchantRequest, options?: RequestOptions): ApiPromise&lt;RetrieveMerchantResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the `Merchant` object for the given `merchant_id`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchants.retrieveMerchant({ merchantId });
  // TODO: Handle 'response' of type RetrieveMerchantResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchants.retrieveMerchant({ merchantId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveMerchantResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The ID of the merchant to retrieve. If the string "me" is supplied as the ID,<br>then retrieve the merchant that is currently accessible to this call. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchants.retrieveMerchant(request)`

- **OnSuccess**: <code>[RetrieveMerchantResponse](src/models/retrieve-merchant-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.merchants.retrieveMerchant(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveMerchantResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveMerchantResponse](src/models/retrieve-merchant-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## MerchantCustomAttributes

> Source: [MerchantCustomAttributes](src/resources/merchant-custom-attributes.ts)

<details>
<summary><code>bulkDeleteMerchantCustomAttributes(request: MerchantCustomAttributes.BulkDeleteMerchantCustomAttributesRequestParams, options?: RequestOptions): ApiPromise&lt;BulkDeleteMerchantCustomAttributesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes [custom attributes](entity:CustomAttribute) for a merchant as a bulk operation.
To delete a custom attribute owned by another application, the `visibility` setting must be
`VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchantCustomAttributes.bulkDeleteMerchantCustomAttributes({ body });
  // TODO: Handle 'response' of type BulkDeleteMerchantCustomAttributesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchantCustomAttributes.bulkDeleteMerchantCustomAttributes({
  body,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkDeleteMerchantCustomAttributesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkDeleteMerchantCustomAttributesRequest](src/models/bulk-delete-merchant-custom-attributes-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchantCustomAttributes.bulkDeleteMerchantCustomAttributes(request)`

- **OnSuccess**: <code>[BulkDeleteMerchantCustomAttributesResponse](src/models/bulk-delete-merchant-custom-attributes-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.merchantCustomAttributes.bulkDeleteMerchantCustomAttributes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkDeleteMerchantCustomAttributesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BulkDeleteMerchantCustomAttributesResponse](src/models/bulk-delete-merchant-custom-attributes-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkUpsertMerchantCustomAttributes(request: MerchantCustomAttributes.BulkUpsertMerchantCustomAttributesRequestParams, options?: RequestOptions): ApiPromise&lt;BulkUpsertMerchantCustomAttributesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates [custom attributes](entity:CustomAttribute) for a merchant as a bulk operation.
Use this endpoint to set the value of one or more custom attributes for a merchant.
A custom attribute is based on a custom attribute definition in a Square seller account, which is
created using the [CreateMerchantCustomAttributeDefinition](api-endpoint:MerchantCustomAttributes-CreateMerchantCustomAttributeDefinition) endpoint.
This `BulkUpsertMerchantCustomAttributes` endpoint accepts a map of 1 to 25 individual upsert
requests and returns a map of individual upsert responses. Each upsert request has a unique ID
and provides a merchant ID and custom attribute. Each upsert response is returned with the ID
of the corresponding request.
To create or update a custom attribute owned by another application, the `visibility` setting
must be `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchantCustomAttributes.bulkUpsertMerchantCustomAttributes({ body });
  // TODO: Handle 'response' of type BulkUpsertMerchantCustomAttributesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchantCustomAttributes.bulkUpsertMerchantCustomAttributes({
  body,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkUpsertMerchantCustomAttributesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkUpsertMerchantCustomAttributesRequest](src/models/bulk-upsert-merchant-custom-attributes-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchantCustomAttributes.bulkUpsertMerchantCustomAttributes(request)`

- **OnSuccess**: <code>[BulkUpsertMerchantCustomAttributesResponse](src/models/bulk-upsert-merchant-custom-attributes-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.merchantCustomAttributes.bulkUpsertMerchantCustomAttributes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkUpsertMerchantCustomAttributesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BulkUpsertMerchantCustomAttributesResponse](src/models/bulk-upsert-merchant-custom-attributes-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createMerchantCustomAttributeDefinition(request: MerchantCustomAttributes.CreateMerchantCustomAttributeDefinitionRequestParams, options?: RequestOptions): ApiPromise&lt;CreateMerchantCustomAttributeDefinitionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a merchant-related [custom attribute definition](entity:CustomAttributeDefinition) for a Square seller account.
Use this endpoint to define a custom attribute that can be associated with a merchant connecting to your application.
A custom attribute definition specifies the `key`, `visibility`, `schema`, and other properties
for a custom attribute. After the definition is created, you can call
[UpsertMerchantCustomAttribute](api-endpoint:MerchantCustomAttributes-UpsertMerchantCustomAttribute) or
[BulkUpsertMerchantCustomAttributes](api-endpoint:MerchantCustomAttributes-BulkUpsertMerchantCustomAttributes)
to set the custom attribute for a merchant.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchantCustomAttributes.createMerchantCustomAttributeDefinition({ body });
  // TODO: Handle 'response' of type CreateMerchantCustomAttributeDefinitionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchantCustomAttributes.createMerchantCustomAttributeDefinition({
  body,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateMerchantCustomAttributeDefinitionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateMerchantCustomAttributeDefinitionRequest](src/models/create-merchant-custom-attribute-definition-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchantCustomAttributes.createMerchantCustomAttributeDefinition(request)`

- **OnSuccess**: <code>[CreateMerchantCustomAttributeDefinitionResponse](src/models/create-merchant-custom-attribute-definition-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.merchantCustomAttributes.createMerchantCustomAttributeDefinition(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateMerchantCustomAttributeDefinitionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateMerchantCustomAttributeDefinitionResponse](src/models/create-merchant-custom-attribute-definition-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteMerchantCustomAttribute(request: MerchantCustomAttributes.DeleteMerchantCustomAttributeRequest, options?: RequestOptions): ApiPromise&lt;DeleteMerchantCustomAttributeResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a [custom attribute](entity:CustomAttribute) associated with a merchant.
To delete a custom attribute owned by another application, the `visibility` setting must be
`VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchantCustomAttributes.deleteMerchantCustomAttribute({ merchantId, key });
  // TODO: Handle 'response' of type DeleteMerchantCustomAttributeResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchantCustomAttributes.deleteMerchantCustomAttribute({
  merchantId,
  key,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteMerchantCustomAttributeResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The ID of the target [merchant](entity:Merchant). |
| <code>key</code> | <code>string</code> | The key of the custom attribute to delete. This key must match the `key` of a custom<br>attribute definition in the Square seller account. If the requesting application is not the<br>definition owner, you must use the qualified key. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchantCustomAttributes.deleteMerchantCustomAttribute(request)`

- **OnSuccess**: <code>[DeleteMerchantCustomAttributeResponse](src/models/delete-merchant-custom-attribute-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.merchantCustomAttributes.deleteMerchantCustomAttribute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteMerchantCustomAttributeResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DeleteMerchantCustomAttributeResponse](src/models/delete-merchant-custom-attribute-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteMerchantCustomAttributeDefinition(request: MerchantCustomAttributes.DeleteMerchantCustomAttributeDefinitionRequest, options?: RequestOptions): ApiPromise&lt;DeleteMerchantCustomAttributeDefinitionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a merchant-related [custom attribute definition](entity:CustomAttributeDefinition) from a Square seller account.
Deleting a custom attribute definition also deletes the corresponding custom attribute from
the merchant.
Only the definition owner can delete a custom attribute definition.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchantCustomAttributes.deleteMerchantCustomAttributeDefinition({ key });
  // TODO: Handle 'response' of type DeleteMerchantCustomAttributeDefinitionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchantCustomAttributes.deleteMerchantCustomAttributeDefinition({
  key,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteMerchantCustomAttributeDefinitionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | The key of the custom attribute definition to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchantCustomAttributes.deleteMerchantCustomAttributeDefinition(request)`

- **OnSuccess**: <code>[DeleteMerchantCustomAttributeDefinitionResponse](src/models/delete-merchant-custom-attribute-definition-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.merchantCustomAttributes.deleteMerchantCustomAttributeDefinition(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteMerchantCustomAttributeDefinitionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DeleteMerchantCustomAttributeDefinitionResponse](src/models/delete-merchant-custom-attribute-definition-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMerchantCustomAttributeDefinitions(request: MerchantCustomAttributes.ListMerchantCustomAttributeDefinitionsRequest, options?: RequestOptions): ApiPromise&lt;ListMerchantCustomAttributeDefinitionsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the merchant-related [custom attribute definitions](entity:CustomAttributeDefinition) that belong to a Square seller account.
When all response pages are retrieved, the results include all custom attribute definitions
that are visible to the requesting application, including those that are created by other
applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchantCustomAttributes.listMerchantCustomAttributeDefinitions();
  // TODO: Handle 'response' of type ListMerchantCustomAttributeDefinitionsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchantCustomAttributes.listMerchantCustomAttributeDefinitions().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListMerchantCustomAttributeDefinitionsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>visibilityFilter?</code> | <code>[VisibilityFilter](src/models/visibility-filter.ts)</code> | Filters the `CustomAttributeDefinition` results by their `visibility` values. |
| <code>limit?</code> | <code>number</code> | The maximum number of results to return in a single paged response. This limit is advisory.<br>The response might contain more or fewer results. The minimum value is 1 and the maximum value is 100.<br>The default value is 20. For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| <code>cursor?</code> | <code>string</code> | The cursor returned in the paged response from the previous call to this endpoint.<br>Provide this cursor to retrieve the next page of results for your original request.<br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchantCustomAttributes.listMerchantCustomAttributeDefinitions(request)`

- **OnSuccess**: <code>[ListMerchantCustomAttributeDefinitionsResponse](src/models/list-merchant-custom-attribute-definitions-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.merchantCustomAttributes.listMerchantCustomAttributeDefinitions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListMerchantCustomAttributeDefinitionsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListMerchantCustomAttributeDefinitionsResponse](src/models/list-merchant-custom-attribute-definitions-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listMerchantCustomAttributes(request: MerchantCustomAttributes.ListMerchantCustomAttributesRequest, options?: RequestOptions): ApiPromise&lt;ListMerchantCustomAttributesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the [custom attributes](entity:CustomAttribute) associated with a merchant.
You can use the `with_definitions` query parameter to also retrieve custom attribute definitions
in the same call.
When all response pages are retrieved, the results include all custom attributes that are
visible to the requesting application, including those that are owned by other applications
and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchantCustomAttributes.listMerchantCustomAttributes({ merchantId });
  // TODO: Handle 'response' of type ListMerchantCustomAttributesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchantCustomAttributes.listMerchantCustomAttributes({
  merchantId,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListMerchantCustomAttributesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The ID of the target [merchant](entity:Merchant). |
| <code>visibilityFilter?</code> | <code>[VisibilityFilter](src/models/visibility-filter.ts)</code> | Filters the `CustomAttributeDefinition` results by their `visibility` values. |
| <code>limit?</code> | <code>number</code> | The maximum number of results to return in a single paged response. This limit is advisory.<br>The response might contain more or fewer results. The minimum value is 1 and the maximum value is 100.<br>The default value is 20. For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| <code>cursor?</code> | <code>string</code> | The cursor returned in the paged response from the previous call to this endpoint.<br>Provide this cursor to retrieve the next page of results for your original request. For more<br>information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| <code>withDefinitions?</code> | <code>boolean</code> | Indicates whether to return the [custom attribute definition](entity:CustomAttributeDefinition) in the `definition` field of each<br>custom attribute. Set this parameter to `true` to get the name and description of each custom<br>attribute, information about the data type, or other definition details. The default value is `false`.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchantCustomAttributes.listMerchantCustomAttributes(request)`

- **OnSuccess**: <code>[ListMerchantCustomAttributesResponse](src/models/list-merchant-custom-attributes-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.merchantCustomAttributes.listMerchantCustomAttributes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListMerchantCustomAttributesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListMerchantCustomAttributesResponse](src/models/list-merchant-custom-attributes-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveMerchantCustomAttribute(request: MerchantCustomAttributes.RetrieveMerchantCustomAttributeRequest, options?: RequestOptions): ApiPromise&lt;RetrieveMerchantCustomAttributeResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a [custom attribute](entity:CustomAttribute) associated with a merchant.
You can use the `with_definition` query parameter to also retrieve the custom attribute definition
in the same call.
To retrieve a custom attribute owned by another application, the `visibility` setting must be
`VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchantCustomAttributes.retrieveMerchantCustomAttribute({ merchantId, key });
  // TODO: Handle 'response' of type RetrieveMerchantCustomAttributeResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchantCustomAttributes.retrieveMerchantCustomAttribute({
  merchantId,
  key,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveMerchantCustomAttributeResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The ID of the target [merchant](entity:Merchant). |
| <code>key</code> | <code>string</code> | The key of the custom attribute to retrieve. This key must match the `key` of a custom<br>attribute definition in the Square seller account. If the requesting application is not the<br>definition owner, you must use the qualified key. |
| <code>withDefinition?</code> | <code>boolean</code> | Indicates whether to return the [custom attribute definition](entity:CustomAttributeDefinition) in the `definition` field of<br>the custom attribute. Set this parameter to `true` to get the name and description of the custom<br>attribute, information about the data type, or other definition details. The default value is `false`.<br>**Default**: false |
| <code>version?</code> | <code>number</code> | The current version of the custom attribute, which is used for strongly consistent reads to<br>guarantee that you receive the most up-to-date data. When included in the request, Square<br>returns the specified version or a higher version if one exists. If the specified version is<br>higher than the current version, Square returns a `BAD_REQUEST` error. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchantCustomAttributes.retrieveMerchantCustomAttribute(request)`

- **OnSuccess**: <code>[RetrieveMerchantCustomAttributeResponse](src/models/retrieve-merchant-custom-attribute-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.merchantCustomAttributes.retrieveMerchantCustomAttribute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveMerchantCustomAttributeResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveMerchantCustomAttributeResponse](src/models/retrieve-merchant-custom-attribute-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveMerchantCustomAttributeDefinition(request: MerchantCustomAttributes.RetrieveMerchantCustomAttributeDefinitionRequest, options?: RequestOptions): ApiPromise&lt;RetrieveMerchantCustomAttributeDefinitionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a merchant-related [custom attribute definition](entity:CustomAttributeDefinition) from a Square seller account.
To retrieve a custom attribute definition created by another application, the `visibility`
setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchantCustomAttributes.retrieveMerchantCustomAttributeDefinition({ key });
  // TODO: Handle 'response' of type RetrieveMerchantCustomAttributeDefinitionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchantCustomAttributes.retrieveMerchantCustomAttributeDefinition({
  key,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveMerchantCustomAttributeDefinitionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | The key of the custom attribute definition to retrieve. If the requesting application<br>is not the definition owner, you must use the qualified key. |
| <code>version?</code> | <code>number</code> | The current version of the custom attribute definition, which is used for strongly consistent<br>reads to guarantee that you receive the most up-to-date data. When included in the request,<br>Square returns the specified version or a higher version if one exists. If the specified version<br>is higher than the current version, Square returns a `BAD_REQUEST` error. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchantCustomAttributes.retrieveMerchantCustomAttributeDefinition(request)`

- **OnSuccess**: <code>[RetrieveMerchantCustomAttributeDefinitionResponse](src/models/retrieve-merchant-custom-attribute-definition-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.merchantCustomAttributes.retrieveMerchantCustomAttributeDefinition(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveMerchantCustomAttributeDefinitionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveMerchantCustomAttributeDefinitionResponse](src/models/retrieve-merchant-custom-attribute-definition-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateMerchantCustomAttributeDefinition(request: MerchantCustomAttributes.UpdateMerchantCustomAttributeDefinitionRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateMerchantCustomAttributeDefinitionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a merchant-related [custom attribute definition](entity:CustomAttributeDefinition) for a Square seller account.
Use this endpoint to update the following fields: `name`, `description`, `visibility`, or the
`schema` for a `Selection` data type.
Only the definition owner can update a custom attribute definition.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchantCustomAttributes.updateMerchantCustomAttributeDefinition({
    key,
    body,
  });
  // TODO: Handle 'response' of type UpdateMerchantCustomAttributeDefinitionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchantCustomAttributes.updateMerchantCustomAttributeDefinition({
  key,
  body,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateMerchantCustomAttributeDefinitionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | The key of the custom attribute definition to update. |
| <code>body</code> | <code>[UpdateMerchantCustomAttributeDefinitionRequest](src/models/update-merchant-custom-attribute-definition-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchantCustomAttributes.updateMerchantCustomAttributeDefinition(request)`

- **OnSuccess**: <code>[UpdateMerchantCustomAttributeDefinitionResponse](src/models/update-merchant-custom-attribute-definition-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.merchantCustomAttributes.updateMerchantCustomAttributeDefinition(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateMerchantCustomAttributeDefinitionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateMerchantCustomAttributeDefinitionResponse](src/models/update-merchant-custom-attribute-definition-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>upsertMerchantCustomAttribute(request: MerchantCustomAttributes.UpsertMerchantCustomAttributeRequestParams, options?: RequestOptions): ApiPromise&lt;UpsertMerchantCustomAttributeResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates a [custom attribute](entity:CustomAttribute) for a merchant.
Use this endpoint to set the value of a custom attribute for a specified merchant.
A custom attribute is based on a custom attribute definition in a Square seller account, which
is created using the [CreateMerchantCustomAttributeDefinition](api-endpoint:MerchantCustomAttributes-CreateMerchantCustomAttributeDefinition) endpoint.
To create or update a custom attribute owned by another application, the `visibility` setting
must be `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.merchantCustomAttributes.upsertMerchantCustomAttribute({
    merchantId,
    key,
    body,
  });
  // TODO: Handle 'response' of type UpsertMerchantCustomAttributeResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.merchantCustomAttributes.upsertMerchantCustomAttribute({
  merchantId,
  key,
  body,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpsertMerchantCustomAttributeResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>merchantId</code> | <code>string</code> | The ID of the target [merchant](entity:Merchant). |
| <code>key</code> | <code>string</code> | The key of the custom attribute to create or update. This key must match the `key` of a<br>custom attribute definition in the Square seller account. If the requesting application is not<br>the definition owner, you must use the qualified key. |
| <code>body</code> | <code>[UpsertMerchantCustomAttributeRequest](src/models/upsert-merchant-custom-attribute-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.merchantCustomAttributes.upsertMerchantCustomAttribute(request)`

- **OnSuccess**: <code>[UpsertMerchantCustomAttributeResponse](src/models/upsert-merchant-custom-attribute-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.merchantCustomAttributes.upsertMerchantCustomAttribute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpsertMerchantCustomAttributeResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpsertMerchantCustomAttributeResponse](src/models/upsert-merchant-custom-attribute-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Orders

> Source: [Orders](src/resources/orders.ts)

<details>
<summary><code>batchRetrieveOrders(request: Orders.BatchRetrieveOrdersRequestParams, options?: RequestOptions): ApiPromise&lt;BatchRetrieveOrdersResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a set of [orders](entity:Order) by their IDs.

If a given order ID does not exist, the ID is ignored instead of generating an error.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.batchRetrieveOrders({ body });
  // TODO: Handle 'response' of type BatchRetrieveOrdersResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.batchRetrieveOrders({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BatchRetrieveOrdersResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BatchRetrieveOrdersRequest](src/models/batch-retrieve-orders-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.batchRetrieveOrders(request)`

- **OnSuccess**: <code>[BatchRetrieveOrdersResponse](src/models/batch-retrieve-orders-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.orders.batchRetrieveOrders(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BatchRetrieveOrdersResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BatchRetrieveOrdersResponse](src/models/batch-retrieve-orders-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>calculateOrder(request: Orders.CalculateOrderRequestParams, options?: RequestOptions): ApiPromise&lt;CalculateOrderResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enables applications to preview order pricing without creating an order.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.calculateOrder({ body });
  // TODO: Handle 'response' of type CalculateOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.calculateOrder({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CalculateOrderResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CalculateOrderRequest](src/models/calculate-order-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.calculateOrder(request)`

- **OnSuccess**: <code>[CalculateOrderResponse](src/models/calculate-order-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.orders.calculateOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CalculateOrderResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CalculateOrderResponse](src/models/calculate-order-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cloneOrder(request: Orders.CloneOrderRequestParams, options?: RequestOptions): ApiPromise&lt;CloneOrderResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new order, in the `DRAFT` state, by duplicating an existing order. The newly created order has
only the core fields (such as line items, taxes, and discounts) copied from the original order.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.cloneOrder({ body });
  // TODO: Handle 'response' of type CloneOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.cloneOrder({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CloneOrderResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CloneOrderRequest](src/models/clone-order-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.cloneOrder(request)`

- **OnSuccess**: <code>[CloneOrderResponse](src/models/clone-order-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.orders.cloneOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CloneOrderResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CloneOrderResponse](src/models/clone-order-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createOrder(request: Orders.CreateOrderRequestParams, options?: RequestOptions): ApiPromise&lt;CreateOrderResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new [order](entity:Order) that can include information about products for
purchase and settings to apply to the purchase.

To pay for a created order, see
[Pay for Orders](https://developer.squareup.com/docs/orders-api/pay-for-orders).

You can modify open orders using the [UpdateOrder](api-endpoint:Orders-UpdateOrder) endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.createOrder({ body });
  // TODO: Handle 'response' of type CreateOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.createOrder({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateOrderResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateOrderRequest](src/models/create-order-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.createOrder(request)`

- **OnSuccess**: <code>[CreateOrderResponse](src/models/create-order-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.orders.createOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateOrderResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateOrderResponse](src/models/create-order-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>payOrder(request: Orders.PayOrderRequestParams, options?: RequestOptions): ApiPromise&lt;PayOrderResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Pay for an [order](entity:Order) using one or more approved [payments](entity:Payment)
or settle an order with a total of `0`.

The total of the `payment_ids` listed in the request must be equal to the order
total. Orders with a total amount of `0` can be marked as paid by specifying an empty
array of `payment_ids` in the request.

To be used with `PayOrder`, a payment must:

- Reference the order by specifying the `order_id` when [creating the payment](api-endpoint:Payments-CreatePayment).
Any approved payments that reference the same `order_id` not specified in the
`payment_ids` is canceled.
- Be approved with [delayed capture](https://developer.squareup.com/docs/payments-api/take-payments/card-payments/delayed-capture).
Using a delayed capture payment with `PayOrder` completes the approved payment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.payOrder({ orderId, body });
  // TODO: Handle 'response' of type PayOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.payOrder({ orderId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PayOrderResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orderId</code> | <code>string</code> | The ID of the order being paid. |
| <code>body</code> | <code>[PayOrderRequest](src/models/pay-order-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.payOrder(request)`

- **OnSuccess**: <code>[PayOrderResponse](src/models/pay-order-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.orders.payOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PayOrderResponse, ResponseError&gt;</code>, with `result.value` of type <code>[PayOrderResponse](src/models/pay-order-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveOrder(request: Orders.RetrieveOrderRequest, options?: RequestOptions): ApiPromise&lt;RetrieveOrderResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves an [Order](entity:Order) by ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.retrieveOrder({ orderId });
  // TODO: Handle 'response' of type RetrieveOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.retrieveOrder({ orderId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveOrderResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orderId</code> | <code>string</code> | The ID of the order to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.retrieveOrder(request)`

- **OnSuccess**: <code>[RetrieveOrderResponse](src/models/retrieve-order-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.orders.retrieveOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveOrderResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveOrderResponse](src/models/retrieve-order-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchOrders(request: Orders.SearchOrdersRequestParams, options?: RequestOptions): ApiPromise&lt;SearchOrdersResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Search all orders for one or more locations. Orders include all sales,
returns, and exchanges regardless of how or when they entered the Square
ecosystem (such as Point of Sale, Invoices, and Connect APIs).

`SearchOrders` requests need to specify which locations to search and define a
[SearchOrdersQuery](entity:SearchOrdersQuery) object that controls
how to sort or filter the results. Your `SearchOrdersQuery` can:

  Set filter criteria.
  Set the sort order.
  Determine whether to return results as complete `Order` objects or as
[OrderEntry](entity:OrderEntry) objects.

Note that details for orders processed with Square Point of Sale while in
offline mode might not be transmitted to Square for up to 72 hours. Offline
orders have a `created_at` value that reflects the time the order was created,
not the time it was subsequently transmitted to Square.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.searchOrders({ body });
  // TODO: Handle 'response' of type SearchOrdersResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.searchOrders({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchOrdersResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchOrdersRequest](src/models/search-orders-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.searchOrders(request)`

- **OnSuccess**: <code>[SearchOrdersResponse](src/models/search-orders-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.orders.searchOrders(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchOrdersResponse, ResponseError&gt;</code>, with `result.value` of type <code>[SearchOrdersResponse](src/models/search-orders-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateOrder(request: Orders.UpdateOrderRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateOrderResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an open [order](entity:Order) by adding, replacing, or deleting
fields. Orders with a `COMPLETED` or `CANCELED` state cannot be updated.

An `UpdateOrder` request requires the following:

- The `order_id` in the endpoint path, identifying the order to update.
- The latest `version` of the order to update.
- The [sparse order](https://developer.squareup.com/docs/orders-api/manage-orders/update-orders#sparse-order-objects)
containing only the fields to update and the version to which the update is
being applied.
- If deleting fields, the [dot notation paths](https://developer.squareup.com/docs/orders-api/manage-orders/update-orders#identifying-fields-to-delete)
identifying the fields to clear.

To pay for an order, see
[Pay for Orders](https://developer.squareup.com/docs/orders-api/pay-for-orders).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orders.updateOrder({ orderId, body });
  // TODO: Handle 'response' of type UpdateOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orders.updateOrder({ orderId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateOrderResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orderId</code> | <code>string</code> | The ID of the order to update. |
| <code>body</code> | <code>[UpdateOrderRequest](src/models/update-order-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orders.updateOrder(request)`

- **OnSuccess**: <code>[UpdateOrderResponse](src/models/update-order-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.orders.updateOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateOrderResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateOrderResponse](src/models/update-order-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## OrderCustomAttributes

> Source: [OrderCustomAttributes](src/resources/order-custom-attributes.ts)

<details>
<summary><code>bulkDeleteOrderCustomAttributes(request: OrderCustomAttributes.BulkDeleteOrderCustomAttributesRequestParams, options?: RequestOptions): ApiPromise&lt;BulkDeleteOrderCustomAttributesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes order [custom attributes](entity:CustomAttribute) as a bulk operation.

Use this endpoint to delete one or more custom attributes from one or more orders.
A custom attribute is based on a custom attribute definition in a Square seller account.  (To create a
custom attribute definition, use the [CreateOrderCustomAttributeDefinition](api-endpoint:OrderCustomAttributes-CreateOrderCustomAttributeDefinition) endpoint.)

This `BulkDeleteOrderCustomAttributes` endpoint accepts a map of 1 to 25 individual delete
requests and returns a map of individual delete responses. Each delete request has a unique ID
and provides an order ID and custom attribute. Each delete response is returned with the ID
of the corresponding request.

To delete a custom attribute owned by another application, the `visibility` setting
must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
(also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orderCustomAttributes.bulkDeleteOrderCustomAttributes({ body });
  // TODO: Handle 'response' of type BulkDeleteOrderCustomAttributesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orderCustomAttributes.bulkDeleteOrderCustomAttributes({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkDeleteOrderCustomAttributesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkDeleteOrderCustomAttributesRequest](src/models/bulk-delete-order-custom-attributes-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orderCustomAttributes.bulkDeleteOrderCustomAttributes(request)`

- **OnSuccess**: <code>[BulkDeleteOrderCustomAttributesResponse](src/models/bulk-delete-order-custom-attributes-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.orderCustomAttributes.bulkDeleteOrderCustomAttributes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkDeleteOrderCustomAttributesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BulkDeleteOrderCustomAttributesResponse](src/models/bulk-delete-order-custom-attributes-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkUpsertOrderCustomAttributes(request: OrderCustomAttributes.BulkUpsertOrderCustomAttributesRequestParams, options?: RequestOptions): ApiPromise&lt;BulkUpsertOrderCustomAttributesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates order [custom attributes](entity:CustomAttribute) as a bulk operation.

Use this endpoint to delete one or more custom attributes from one or more orders.
A custom attribute is based on a custom attribute definition in a Square seller account.  (To create a
custom attribute definition, use the [CreateOrderCustomAttributeDefinition](api-endpoint:OrderCustomAttributes-CreateOrderCustomAttributeDefinition) endpoint.)

This `BulkUpsertOrderCustomAttributes` endpoint accepts a map of 1 to 25 individual upsert
requests and returns a map of individual upsert responses. Each upsert request has a unique ID
and provides an order ID and custom attribute. Each upsert response is returned with the ID
of the corresponding request.

To create or update a custom attribute owned by another application, the `visibility` setting
must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
(also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orderCustomAttributes.bulkUpsertOrderCustomAttributes({ body });
  // TODO: Handle 'response' of type BulkUpsertOrderCustomAttributesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orderCustomAttributes.bulkUpsertOrderCustomAttributes({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkUpsertOrderCustomAttributesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkUpsertOrderCustomAttributesRequest](src/models/bulk-upsert-order-custom-attributes-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orderCustomAttributes.bulkUpsertOrderCustomAttributes(request)`

- **OnSuccess**: <code>[BulkUpsertOrderCustomAttributesResponse](src/models/bulk-upsert-order-custom-attributes-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.orderCustomAttributes.bulkUpsertOrderCustomAttributes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkUpsertOrderCustomAttributesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BulkUpsertOrderCustomAttributesResponse](src/models/bulk-upsert-order-custom-attributes-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createOrderCustomAttributeDefinition(request: OrderCustomAttributes.CreateOrderCustomAttributeDefinitionRequestParams, options?: RequestOptions): ApiPromise&lt;CreateOrderCustomAttributeDefinitionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates an order-related custom attribute definition.  Use this endpoint to
define a custom attribute that can be associated with orders.

After creating a custom attribute definition, you can set the custom attribute for orders
in the Square seller account.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orderCustomAttributes.createOrderCustomAttributeDefinition({ body });
  // TODO: Handle 'response' of type CreateOrderCustomAttributeDefinitionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orderCustomAttributes.createOrderCustomAttributeDefinition({
  body,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateOrderCustomAttributeDefinitionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateOrderCustomAttributeDefinitionRequest](src/models/create-order-custom-attribute-definition-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orderCustomAttributes.createOrderCustomAttributeDefinition(request)`

- **OnSuccess**: <code>[CreateOrderCustomAttributeDefinitionResponse](src/models/create-order-custom-attribute-definition-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.orderCustomAttributes.createOrderCustomAttributeDefinition(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateOrderCustomAttributeDefinitionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateOrderCustomAttributeDefinitionResponse](src/models/create-order-custom-attribute-definition-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteOrderCustomAttribute(request: OrderCustomAttributes.DeleteOrderCustomAttributeRequest, options?: RequestOptions): ApiPromise&lt;DeleteOrderCustomAttributeResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a [custom attribute](entity:CustomAttribute) associated with a customer profile.

To delete a custom attribute owned by another application, the `visibility` setting must be
`VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
(also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orderCustomAttributes.deleteOrderCustomAttribute({
    orderId,
    customAttributeKey,
  });
  // TODO: Handle 'response' of type DeleteOrderCustomAttributeResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orderCustomAttributes.deleteOrderCustomAttribute({
  orderId,
  customAttributeKey,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteOrderCustomAttributeResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orderId</code> | <code>string</code> | The ID of the target [order](entity:Order). |
| <code>customAttributeKey</code> | <code>string</code> | The key of the custom attribute to delete.  This key must match the key of an<br>existing custom attribute definition. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orderCustomAttributes.deleteOrderCustomAttribute(request)`

- **OnSuccess**: <code>[DeleteOrderCustomAttributeResponse](src/models/delete-order-custom-attribute-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.orderCustomAttributes.deleteOrderCustomAttribute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteOrderCustomAttributeResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DeleteOrderCustomAttributeResponse](src/models/delete-order-custom-attribute-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteOrderCustomAttributeDefinition(request: OrderCustomAttributes.DeleteOrderCustomAttributeDefinitionRequest, options?: RequestOptions): ApiPromise&lt;DeleteOrderCustomAttributeDefinitionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes an order-related [custom attribute definition](entity:CustomAttributeDefinition) from a Square seller account.

Only the definition owner can delete a custom attribute definition.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orderCustomAttributes.deleteOrderCustomAttributeDefinition({ key });
  // TODO: Handle 'response' of type DeleteOrderCustomAttributeDefinitionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orderCustomAttributes.deleteOrderCustomAttributeDefinition({ key }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteOrderCustomAttributeDefinitionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | The key of the custom attribute definition to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orderCustomAttributes.deleteOrderCustomAttributeDefinition(request)`

- **OnSuccess**: <code>[DeleteOrderCustomAttributeDefinitionResponse](src/models/delete-order-custom-attribute-definition-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.orderCustomAttributes.deleteOrderCustomAttributeDefinition(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteOrderCustomAttributeDefinitionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DeleteOrderCustomAttributeDefinitionResponse](src/models/delete-order-custom-attribute-definition-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listOrderCustomAttributeDefinitions(request: OrderCustomAttributes.ListOrderCustomAttributeDefinitionsRequest, options?: RequestOptions): ApiPromise&lt;ListOrderCustomAttributeDefinitionsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the order-related [custom attribute definitions](entity:CustomAttributeDefinition) that belong to a Square seller account.

When all response pages are retrieved, the results include all custom attribute definitions
that are visible to the requesting application, including those that are created by other
applications and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that
seller-defined custom attributes (also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orderCustomAttributes.listOrderCustomAttributeDefinitions();
  // TODO: Handle 'response' of type ListOrderCustomAttributeDefinitionsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orderCustomAttributes.listOrderCustomAttributeDefinitions().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListOrderCustomAttributeDefinitionsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>visibilityFilter?</code> | <code>[VisibilityFilter](src/models/visibility-filter.ts)</code> | Requests that all of the custom attributes be returned, or only those that are read-only or read-write. |
| <code>cursor?</code> | <code>string</code> | The cursor returned in the paged response from the previous call to this endpoint. <br>Provide this cursor to retrieve the next page of results for your original request. <br>For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination). |
| <code>limit?</code> | <code>number</code> | The maximum number of results to return in a single paged response. This limit is advisory. <br>The response might contain more or fewer results. The minimum value is 1 and the maximum value is 100. <br>The default value is 20.<br>For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orderCustomAttributes.listOrderCustomAttributeDefinitions(request)`

- **OnSuccess**: <code>[ListOrderCustomAttributeDefinitionsResponse](src/models/list-order-custom-attribute-definitions-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.orderCustomAttributes.listOrderCustomAttributeDefinitions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListOrderCustomAttributeDefinitionsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListOrderCustomAttributeDefinitionsResponse](src/models/list-order-custom-attribute-definitions-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listOrderCustomAttributes(request: OrderCustomAttributes.ListOrderCustomAttributesRequest, options?: RequestOptions): ApiPromise&lt;ListOrderCustomAttributesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the [custom attributes](entity:CustomAttribute) associated with an order.

You can use the `with_definitions` query parameter to also retrieve custom attribute definitions
in the same call.

When all response pages are retrieved, the results include all custom attributes that are
visible to the requesting application, including those that are owned by other applications
and set to `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orderCustomAttributes.listOrderCustomAttributes({ orderId });
  // TODO: Handle 'response' of type ListOrderCustomAttributesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orderCustomAttributes.listOrderCustomAttributes({ orderId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListOrderCustomAttributesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orderId</code> | <code>string</code> | The ID of the target [order](entity:Order). |
| <code>visibilityFilter?</code> | <code>[VisibilityFilter](src/models/visibility-filter.ts)</code> | Requests that all of the custom attributes be returned, or only those that are read-only or read-write. |
| <code>cursor?</code> | <code>string</code> | The cursor returned in the paged response from the previous call to this endpoint. <br>Provide this cursor to retrieve the next page of results for your original request. <br>For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination). |
| <code>limit?</code> | <code>number</code> | The maximum number of results to return in a single paged response. This limit is advisory. <br>The response might contain more or fewer results. The minimum value is 1 and the maximum value is 100. <br>The default value is 20.<br>For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination). |
| <code>withDefinitions?</code> | <code>boolean</code> | Indicates whether to return the [custom attribute definition](entity:CustomAttributeDefinition) in the `definition` field of each<br>custom attribute. Set this parameter to `true` to get the name and description of each custom attribute, <br>information about the data type, or other definition details. The default value is `false`.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orderCustomAttributes.listOrderCustomAttributes(request)`

- **OnSuccess**: <code>[ListOrderCustomAttributesResponse](src/models/list-order-custom-attributes-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.orderCustomAttributes.listOrderCustomAttributes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListOrderCustomAttributesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListOrderCustomAttributesResponse](src/models/list-order-custom-attributes-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveOrderCustomAttribute(request: OrderCustomAttributes.RetrieveOrderCustomAttributeRequest, options?: RequestOptions): ApiPromise&lt;RetrieveOrderCustomAttributeResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a [custom attribute](entity:CustomAttribute) associated with an order.

You can use the `with_definition` query parameter to also retrieve the custom attribute definition
in the same call.

To retrieve a custom attribute owned by another application, the `visibility` setting must be
`VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orderCustomAttributes.retrieveOrderCustomAttribute({
    orderId,
    customAttributeKey,
  });
  // TODO: Handle 'response' of type RetrieveOrderCustomAttributeResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orderCustomAttributes.retrieveOrderCustomAttribute({
  orderId,
  customAttributeKey,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveOrderCustomAttributeResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orderId</code> | <code>string</code> | The ID of the target [order](entity:Order). |
| <code>customAttributeKey</code> | <code>string</code> | The key of the custom attribute to retrieve.  This key must match the key of an<br>existing custom attribute definition. |
| <code>version?</code> | <code>number</code> | To enable [optimistic concurrency](https://developer.squareup.com/docs/build-basics/common-api-patterns/optimistic-concurrency)<br>control, include this optional field and specify the current version of the custom attribute. |
| <code>withDefinition?</code> | <code>boolean</code> | Indicates whether to return the [custom attribute definition](entity:CustomAttributeDefinition) in the `definition` field of each <br>custom attribute. Set this parameter to `true` to get the name and description of each custom attribute, <br>information about the data type, or other definition details. The default value is `false`.<br>**Default**: false |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orderCustomAttributes.retrieveOrderCustomAttribute(request)`

- **OnSuccess**: <code>[RetrieveOrderCustomAttributeResponse](src/models/retrieve-order-custom-attribute-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.orderCustomAttributes.retrieveOrderCustomAttribute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveOrderCustomAttributeResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveOrderCustomAttributeResponse](src/models/retrieve-order-custom-attribute-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveOrderCustomAttributeDefinition(request: OrderCustomAttributes.RetrieveOrderCustomAttributeDefinitionRequest, options?: RequestOptions): ApiPromise&lt;RetrieveOrderCustomAttributeDefinitionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves an order-related [custom attribute definition](entity:CustomAttributeDefinition) from a Square seller account.

To retrieve a custom attribute definition created by another application, the `visibility`
setting must be `VISIBILITY_READ_ONLY` or `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
(also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orderCustomAttributes.retrieveOrderCustomAttributeDefinition({ key });
  // TODO: Handle 'response' of type RetrieveOrderCustomAttributeDefinitionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orderCustomAttributes.retrieveOrderCustomAttributeDefinition({
  key,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveOrderCustomAttributeDefinitionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | The key of the custom attribute definition to retrieve. |
| <code>version?</code> | <code>number</code> | To enable [optimistic concurrency](https://developer.squareup.com/docs/build-basics/common-api-patterns/optimistic-concurrency)<br>control, include this optional field and specify the current version of the custom attribute. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orderCustomAttributes.retrieveOrderCustomAttributeDefinition(request)`

- **OnSuccess**: <code>[RetrieveOrderCustomAttributeDefinitionResponse](src/models/retrieve-order-custom-attribute-definition-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.orderCustomAttributes.retrieveOrderCustomAttributeDefinition(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveOrderCustomAttributeDefinitionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveOrderCustomAttributeDefinitionResponse](src/models/retrieve-order-custom-attribute-definition-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateOrderCustomAttributeDefinition(request: OrderCustomAttributes.UpdateOrderCustomAttributeDefinitionRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateOrderCustomAttributeDefinitionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an order-related custom attribute definition for a Square seller account.

Only the definition owner can update a custom attribute definition. Note that sellers can view all custom attributes in exported customer data, including those set to `VISIBILITY_HIDDEN`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orderCustomAttributes.updateOrderCustomAttributeDefinition({ key, body });
  // TODO: Handle 'response' of type UpdateOrderCustomAttributeDefinitionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orderCustomAttributes.updateOrderCustomAttributeDefinition({
  key,
  body,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateOrderCustomAttributeDefinitionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>key</code> | <code>string</code> | The key of the custom attribute definition to update. |
| <code>body</code> | <code>[UpdateOrderCustomAttributeDefinitionRequest](src/models/update-order-custom-attribute-definition-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orderCustomAttributes.updateOrderCustomAttributeDefinition(request)`

- **OnSuccess**: <code>[UpdateOrderCustomAttributeDefinitionResponse](src/models/update-order-custom-attribute-definition-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.orderCustomAttributes.updateOrderCustomAttributeDefinition(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateOrderCustomAttributeDefinitionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateOrderCustomAttributeDefinitionResponse](src/models/update-order-custom-attribute-definition-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>upsertOrderCustomAttribute(request: OrderCustomAttributes.UpsertOrderCustomAttributeRequestParams, options?: RequestOptions): ApiPromise&lt;UpsertOrderCustomAttributeResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates a [custom attribute](entity:CustomAttribute) for an order.

Use this endpoint to set the value of a custom attribute for a specific order.
A custom attribute is based on a custom attribute definition in a Square seller account. (To create a
custom attribute definition, use the [CreateOrderCustomAttributeDefinition](api-endpoint:OrderCustomAttributes-CreateOrderCustomAttributeDefinition) endpoint.)

To create or update a custom attribute owned by another application, the `visibility` setting
must be `VISIBILITY_READ_WRITE_VALUES`. Note that seller-defined custom attributes
(also known as custom fields) are always set to `VISIBILITY_READ_WRITE_VALUES`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.orderCustomAttributes.upsertOrderCustomAttribute({
    orderId,
    customAttributeKey,
    body,
  });
  // TODO: Handle 'response' of type UpsertOrderCustomAttributeResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.orderCustomAttributes.upsertOrderCustomAttribute({
  orderId,
  customAttributeKey,
  body,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpsertOrderCustomAttributeResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>orderId</code> | <code>string</code> | The ID of the target [order](entity:Order). |
| <code>customAttributeKey</code> | <code>string</code> | The key of the custom attribute to create or update.  This key must match the key <br>of an existing custom attribute definition. |
| <code>body</code> | <code>[UpsertOrderCustomAttributeRequest](src/models/upsert-order-custom-attribute-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.orderCustomAttributes.upsertOrderCustomAttribute(request)`

- **OnSuccess**: <code>[UpsertOrderCustomAttributeResponse](src/models/upsert-order-custom-attribute-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.orderCustomAttributes.upsertOrderCustomAttribute(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpsertOrderCustomAttributeResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpsertOrderCustomAttributeResponse](src/models/upsert-order-custom-attribute-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Payments

> Source: [Payments](src/resources/payments.ts)

<details>
<summary><code>cancelPayment(request: Payments.CancelPaymentRequest, options?: RequestOptions): ApiPromise&lt;CancelPaymentResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels (voids) a payment. You can use this endpoint to cancel a payment with 
the APPROVED `status`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.cancelPayment({ paymentId });
  // TODO: Handle 'response' of type CancelPaymentResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments.cancelPayment({ paymentId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelPaymentResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentId</code> | <code>string</code> | The ID of the payment to cancel. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.cancelPayment(request)`

- **OnSuccess**: <code>[CancelPaymentResponse](src/models/cancel-payment-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.payments.cancelPayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelPaymentResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CancelPaymentResponse](src/models/cancel-payment-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelPaymentByIdempotencyKey(request: Payments.CancelPaymentByIdempotencyKeyRequestParams, options?: RequestOptions): ApiPromise&lt;CancelPaymentByIdempotencyKeyResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels (voids) a payment identified by the idempotency key that is specified in the
request.

Use this method when the status of a `CreatePayment` request is unknown (for example, after you send a
`CreatePayment` request, a network error occurs and you do not get a response). In this case, you can
direct Square to cancel the payment using this endpoint. In the request, you provide the same
idempotency key that you provided in your `CreatePayment` request that you want to cancel. After
canceling the payment, you can submit your `CreatePayment` request again.

Note that if no payment with the specified idempotency key is found, no action is taken and the endpoint
returns successfully.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.cancelPaymentByIdempotencyKey({ body });
  // TODO: Handle 'response' of type CancelPaymentByIdempotencyKeyResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments.cancelPaymentByIdempotencyKey({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelPaymentByIdempotencyKeyResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CancelPaymentByIdempotencyKeyRequest](src/models/cancel-payment-by-idempotency-key-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.cancelPaymentByIdempotencyKey(request)`

- **OnSuccess**: <code>[CancelPaymentByIdempotencyKeyResponse](src/models/cancel-payment-by-idempotency-key-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.payments.cancelPaymentByIdempotencyKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelPaymentByIdempotencyKeyResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CancelPaymentByIdempotencyKeyResponse](src/models/cancel-payment-by-idempotency-key-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>completePayment(request: Payments.CompletePaymentRequestParams, options?: RequestOptions): ApiPromise&lt;CompletePaymentResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Completes (captures) a payment.
By default, payments are set to complete immediately after they are created.

You can use this endpoint to complete a payment with the APPROVED `status`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.completePayment({ paymentId, body });
  // TODO: Handle 'response' of type CompletePaymentResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments.completePayment({ paymentId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CompletePaymentResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentId</code> | <code>string</code> | The unique ID identifying the payment to be completed. |
| <code>body</code> | <code>[CompletePaymentRequest](src/models/complete-payment-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.completePayment(request)`

- **OnSuccess**: <code>[CompletePaymentResponse](src/models/complete-payment-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.payments.completePayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CompletePaymentResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CompletePaymentResponse](src/models/complete-payment-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createPayment(request: Payments.CreatePaymentRequestParams, options?: RequestOptions): ApiPromise&lt;CreatePaymentResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a payment using the provided source. You can use this endpoint 
to charge a card (credit/debit card or    
Square gift card) or record a payment that the seller received outside of Square 
(cash payment from a buyer or a payment that an external entity 
processed on behalf of the seller).

The endpoint creates a 
`Payment` object and returns it in the response.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.createPayment({ body });
  // TODO: Handle 'response' of type CreatePaymentResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments.createPayment({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreatePaymentResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreatePaymentRequest](src/models/create-payment-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.createPayment(request)`

- **OnSuccess**: <code>[CreatePaymentResponse](src/models/create-payment-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.payments.createPayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreatePaymentResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreatePaymentResponse](src/models/create-payment-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getPayment(request: Payments.GetPaymentRequest, options?: RequestOptions): ApiPromise&lt;GetPaymentResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves details for a specific payment.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.getPayment({ paymentId });
  // TODO: Handle 'response' of type GetPaymentResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments.getPayment({ paymentId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetPaymentResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentId</code> | <code>string</code> | A unique ID for the desired payment. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.getPayment(request)`

- **OnSuccess**: <code>[GetPaymentResponse](src/models/get-payment-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.payments.getPayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetPaymentResponse, ResponseError&gt;</code>, with `result.value` of type <code>[GetPaymentResponse](src/models/get-payment-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPayments(request: Payments.ListPaymentsRequest, options?: RequestOptions): ApiPromise&lt;ListPaymentsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of payments taken by the account making the request.

Results are eventually consistent, and new payments or changes to payments might take several
seconds to appear.

The maximum results per page is 100.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.listPayments();
  // TODO: Handle 'response' of type ListPaymentsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments.listPayments().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListPaymentsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>beginTime?</code> | <code>string</code> | Indicates the start of the time range to retrieve payments for, in RFC 3339 format.<br>The range is determined using the `created_at` field for each Payment.<br>Inclusive. Default: The current time minus one year. |
| <code>endTime?</code> | <code>string</code> | Indicates the end of the time range to retrieve payments for, in RFC 3339 format.  The<br>range is determined using the `created_at` field for each Payment.<br><br>Default: The current time. |
| <code>sortOrder?</code> | <code>string</code> | The order in which results are listed by `ListPaymentsRequest.sort_field`:<br>- `ASC` - Oldest to newest.<br>- `DESC` - Newest to oldest (default). |
| <code>cursor?</code> | <code>string</code> | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for the original query.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| <code>locationId?</code> | <code>string</code> | Limit results to the location supplied. By default, results are returned<br>for the default (main) location associated with the seller. |
| <code>total?</code> | <code>number</code> | The exact amount in the `total_money` for a payment. |
| <code>last4?</code> | <code>string</code> | The last four digits of a payment card. |
| <code>cardBrand?</code> | <code>string</code> | The brand of the payment card (for example, VISA). |
| <code>limit?</code> | <code>number</code> | The maximum number of results to be returned in a single page.<br>It is possible to receive fewer results than the specified limit on a given page.<br><br>The default value of 100 is also the maximum allowed value. If the provided value is <br>greater than 100, it is ignored and the default value is used instead.<br><br>Default: `100` |
| <code>isOfflinePayment?</code> | <code>boolean</code> | Whether the payment was taken offline or not.<br>**Default**: false |
| <code>offlineBeginTime?</code> | <code>string</code> | Indicates the start of the time range for which to retrieve offline payments, in RFC 3339<br>format for timestamps. The range is determined using the<br>`offline_payment_details.client_created_at` field for each Payment. If set, payments without a<br>value set in `offline_payment_details.client_created_at` will not be returned.<br><br>Default: The current time. |
| <code>offlineEndTime?</code> | <code>string</code> | Indicates the end of the time range for which to retrieve offline payments, in RFC 3339<br>format for timestamps. The range is determined using the<br>`offline_payment_details.client_created_at` field for each Payment. If set, payments without a<br>value set in `offline_payment_details.client_created_at` will not be returned.<br><br>Default: The current time. |
| <code>updatedAtBeginTime?</code> | <code>string</code> | Indicates the start of the time range to retrieve payments for, in RFC 3339 format.  The<br>range is determined using the `updated_at` field for each Payment. |
| <code>updatedAtEndTime?</code> | <code>string</code> | Indicates the end of the time range to retrieve payments for, in RFC 3339 format.  The<br>range is determined using the `updated_at` field for each Payment. |
| <code>sortField?</code> | <code>[ListPaymentsRequestSortField](src/models/list-payments-request-sort-field.ts)</code> | The field used to sort results by. The default is `CREATED_AT`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.listPayments(request)`

- **OnSuccess**: <code>[ListPaymentsResponse](src/models/list-payments-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.payments.listPayments(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListPaymentsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListPaymentsResponse](src/models/list-payments-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updatePayment(request: Payments.UpdatePaymentRequestParams, options?: RequestOptions): ApiPromise&lt;UpdatePaymentResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a payment with the APPROVED status.
You can update the `amount_money` and `tip_money` using this endpoint.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payments.updatePayment({ paymentId, body });
  // TODO: Handle 'response' of type UpdatePaymentResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payments.updatePayment({ paymentId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdatePaymentResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>paymentId</code> | <code>string</code> | The ID of the payment to update. |
| <code>body</code> | <code>[UpdatePaymentRequest](src/models/update-payment-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payments.updatePayment(request)`

- **OnSuccess**: <code>[UpdatePaymentResponse](src/models/update-payment-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.payments.updatePayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdatePaymentResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdatePaymentResponse](src/models/update-payment-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Payouts

> Source: [Payouts](src/resources/payouts.ts)

<details>
<summary><code>getPayout(request: Payouts.GetPayoutRequest, options?: RequestOptions): ApiPromise&lt;GetPayoutResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves details of a specific payout identified by a payout ID.
To call this endpoint, set `PAYOUTS_READ` for the OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payouts.getPayout({ payoutId });
  // TODO: Handle 'response' of type GetPayoutResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payouts.getPayout({ payoutId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetPayoutResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>payoutId</code> | <code>string</code> | The ID of the payout to retrieve the information for. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payouts.getPayout(request)`

- **OnSuccess**: <code>[GetPayoutResponse](src/models/get-payout-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.payouts.getPayout(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetPayoutResponse, ResponseError&gt;</code>, with `result.value` of type <code>[GetPayoutResponse](src/models/get-payout-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPayoutEntries(request: Payouts.ListPayoutEntriesRequest, options?: RequestOptions): ApiPromise&lt;ListPayoutEntriesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of all payout entries for a specific payout.
To call this endpoint, set `PAYOUTS_READ` for the OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payouts.listPayoutEntries({ payoutId });
  // TODO: Handle 'response' of type ListPayoutEntriesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payouts.listPayoutEntries({ payoutId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListPayoutEntriesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>payoutId</code> | <code>string</code> | The ID of the payout to retrieve the information for. |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | The order in which payout entries are listed. |
| <code>cursor?</code> | <code>string</code> | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for the original query.<br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).<br>If request parameters change between requests, subsequent results may contain duplicates or missing records. |
| <code>limit?</code> | <code>number</code> | The maximum number of results to be returned in a single page.<br>It is possible to receive fewer results than the specified limit on a given page.<br>The default value of 100 is also the maximum allowed value. If the provided value is<br>greater than 100, it is ignored and the default value is used instead.<br>Default: `100` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payouts.listPayoutEntries(request)`

- **OnSuccess**: <code>[ListPayoutEntriesResponse](src/models/list-payout-entries-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.payouts.listPayoutEntries(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListPayoutEntriesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListPayoutEntriesResponse](src/models/list-payout-entries-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPayouts(request: Payouts.ListPayoutsRequest, options?: RequestOptions): ApiPromise&lt;ListPayoutsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of all payouts for the default location.
You can filter payouts by location ID, status, time range, and order them in ascending or descending order.
To call this endpoint, set `PAYOUTS_READ` for the OAuth scope.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.payouts.listPayouts();
  // TODO: Handle 'response' of type ListPayoutsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.payouts.listPayouts().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListPayoutsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>locationId?</code> | <code>string</code> | The ID of the location for which to list the payouts.<br>By default, payouts are returned for the default (main) location associated with the seller. |
| <code>status?</code> | <code>[PayoutStatus](src/models/payout-status.ts)</code> | If provided, only payouts with the given status are returned. |
| <code>beginTime?</code> | <code>string</code> | The timestamp for the beginning of the payout creation time, in RFC 3339 format.<br>Inclusive. Default: The current time minus one year. |
| <code>endTime?</code> | <code>string</code> | The timestamp for the end of the payout creation time, in RFC 3339 format.<br>Default: The current time. |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | The order in which payouts are listed. |
| <code>cursor?</code> | <code>string</code> | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for the original query.<br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).<br>If request parameters change between requests, subsequent results may contain duplicates or missing records. |
| <code>limit?</code> | <code>number</code> | The maximum number of results to be returned in a single page.<br>It is possible to receive fewer results than the specified limit on a given page.<br>The default value of 100 is also the maximum allowed value. If the provided value is<br>greater than 100, it is ignored and the default value is used instead.<br>Default: `100` |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.payouts.listPayouts(request)`

- **OnSuccess**: <code>[ListPayoutsResponse](src/models/list-payouts-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.payouts.listPayouts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListPayoutsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListPayoutsResponse](src/models/list-payouts-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Refunds

> Source: [Refunds](src/resources/refunds.ts)

<details>
<summary><code>getPaymentRefund(request: Refunds.GetPaymentRefundRequest, options?: RequestOptions): ApiPromise&lt;GetPaymentRefundResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific refund using the `refund_id`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.refunds.getPaymentRefund({ refundId });
  // TODO: Handle 'response' of type GetPaymentRefundResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.refunds.getPaymentRefund({ refundId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetPaymentRefundResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>refundId</code> | <code>string</code> | The unique ID for the desired `PaymentRefund`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.refunds.getPaymentRefund(request)`

- **OnSuccess**: <code>[GetPaymentRefundResponse](src/models/get-payment-refund-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.refunds.getPaymentRefund(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetPaymentRefundResponse, ResponseError&gt;</code>, with `result.value` of type <code>[GetPaymentRefundResponse](src/models/get-payment-refund-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listPaymentRefunds(request: Refunds.ListPaymentRefundsRequest, options?: RequestOptions): ApiPromise&lt;ListPaymentRefundsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a list of refunds for the account making the request.

Results are eventually consistent, and new refunds or changes to refunds might take several
seconds to appear.

The maximum results per page is 100.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.refunds.listPaymentRefunds();
  // TODO: Handle 'response' of type ListPaymentRefundsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.refunds.listPaymentRefunds().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListPaymentRefundsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>beginTime?</code> | <code>string</code> | Indicates the start of the time range to retrieve each `PaymentRefund` for, in RFC 3339 <br>format.  The range is determined using the `created_at` field for each `PaymentRefund`. <br><br>Default: The current time minus one year. |
| <code>endTime?</code> | <code>string</code> | Indicates the end of the time range to retrieve each `PaymentRefund` for, in RFC 3339 <br>format.  The range is determined using the `created_at` field for each `PaymentRefund`.<br><br>Default: The current time. |
| <code>sortOrder?</code> | <code>string</code> | The order in which results are listed by `PaymentRefund.created_at`:<br>- `ASC` - Oldest to newest.<br>- `DESC` - Newest to oldest (default). |
| <code>cursor?</code> | <code>string</code> | A pagination cursor returned by a previous call to this endpoint.<br>Provide this cursor to retrieve the next set of results for the original query.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| <code>locationId?</code> | <code>string</code> | Limit results to the location supplied. By default, results are returned<br>for all locations associated with the seller. |
| <code>status?</code> | <code>string</code> | If provided, only refunds with the given status are returned.<br>For a list of refund status values, see [PaymentRefund](entity:PaymentRefund).<br><br>Default: If omitted, refunds are returned regardless of their status. |
| <code>sourceType?</code> | <code>string</code> | If provided, only returns refunds whose payments have the indicated source type.<br>Current values include `CARD`, `BANK_ACCOUNT`, `WALLET`, `CASH`, and `EXTERNAL`.<br>For information about these payment source types, see<br>[Take Payments](https://developer.squareup.com/docs/payments-api/take-payments).<br><br>Default: If omitted, refunds are returned regardless of the source type. |
| <code>limit?</code> | <code>number</code> | The maximum number of results to be returned in a single page.<br><br>It is possible to receive fewer results than the specified limit on a given page.<br><br>If the supplied value is greater than 100, no more than 100 results are returned.<br><br>Default: 100 |
| <code>updatedAtBeginTime?</code> | <code>string</code> | Indicates the start of the time range to retrieve each `PaymentRefund` for, in RFC 3339<br>format.  The range is determined using the `updated_at` field for each `PaymentRefund`.<br><br>Default: If omitted, the time range starts at `begin_time`. |
| <code>updatedAtEndTime?</code> | <code>string</code> | Indicates the end of the time range to retrieve each `PaymentRefund` for, in RFC 3339<br>format.  The range is determined using the `updated_at` field for each `PaymentRefund`.<br><br>Default: The current time. |
| <code>sortField?</code> | <code>[ListPaymentRefundsRequestSortField](src/models/list-payment-refunds-request-sort-field.ts)</code> | The field used to sort results by. The default is `CREATED_AT`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.refunds.listPaymentRefunds(request)`

- **OnSuccess**: <code>[ListPaymentRefundsResponse](src/models/list-payment-refunds-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.refunds.listPaymentRefunds(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListPaymentRefundsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListPaymentRefundsResponse](src/models/list-payment-refunds-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>refundPayment(request: Refunds.RefundPaymentRequestParams, options?: RequestOptions): ApiPromise&lt;RefundPaymentResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Refunds a payment. You can refund the entire payment amount or a
portion of it. You can use this endpoint to refund a card payment or record a 
refund of a cash or external payment. For more information, see
[Refund Payment](https://developer.squareup.com/docs/payments-api/refund-payments).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.refunds.refundPayment({ body });
  // TODO: Handle 'response' of type RefundPaymentResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.refunds.refundPayment({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RefundPaymentResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[RefundPaymentRequest](src/models/refund-payment-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.refunds.refundPayment(request)`

- **OnSuccess**: <code>[RefundPaymentResponse](src/models/refund-payment-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.refunds.refundPayment(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RefundPaymentResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RefundPaymentResponse](src/models/refund-payment-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Sites

> Source: [Sites](src/resources/sites.ts)

<details>
<summary><code>listSites(options?: RequestOptions): ApiPromise&lt;ListSitesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists the Square Online sites that belong to a seller. Sites are listed in descending order by the `created_at` date.


__Note:__ Square Online APIs are publicly available as part of an early access program. For more information, see [Early access program for Square Online APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.sites.listSites();
  // TODO: Handle 'response' of type ListSitesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.sites.listSites().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListSitesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.sites.listSites()`

- **OnSuccess**: <code>[ListSitesResponse](src/models/list-sites-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.sites.listSites().asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListSitesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListSitesResponse](src/models/list-sites-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Snippets

> Source: [Snippets](src/resources/snippets.ts)

<details>
<summary><code>deleteSnippet(request: Snippets.DeleteSnippetRequest, options?: RequestOptions): ApiPromise&lt;DeleteSnippetResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Removes your snippet from a Square Online site.

You can call [ListSites](api-endpoint:Sites-ListSites) to get the IDs of the sites that belong to a seller.


__Note:__ Square Online APIs are publicly available as part of an early access program. For more information, see [Early access program for Square Online APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.snippets.deleteSnippet({ siteId });
  // TODO: Handle 'response' of type DeleteSnippetResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.snippets.deleteSnippet({ siteId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteSnippetResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>siteId</code> | <code>string</code> | The ID of the site that contains the snippet. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.snippets.deleteSnippet(request)`

- **OnSuccess**: <code>[DeleteSnippetResponse](src/models/delete-snippet-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.snippets.deleteSnippet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteSnippetResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DeleteSnippetResponse](src/models/delete-snippet-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveSnippet(request: Snippets.RetrieveSnippetRequest, options?: RequestOptions): ApiPromise&lt;RetrieveSnippetResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves your snippet from a Square Online site. A site can contain snippets from multiple snippet applications, but you can retrieve only the snippet that was added by your application.

You can call [ListSites](api-endpoint:Sites-ListSites) to get the IDs of the sites that belong to a seller.


__Note:__ Square Online APIs are publicly available as part of an early access program. For more information, see [Early access program for Square Online APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.snippets.retrieveSnippet({ siteId });
  // TODO: Handle 'response' of type RetrieveSnippetResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.snippets.retrieveSnippet({ siteId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveSnippetResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>siteId</code> | <code>string</code> | The ID of the site that contains the snippet. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.snippets.retrieveSnippet(request)`

- **OnSuccess**: <code>[RetrieveSnippetResponse](src/models/retrieve-snippet-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.snippets.retrieveSnippet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveSnippetResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveSnippetResponse](src/models/retrieve-snippet-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>upsertSnippet(request: Snippets.UpsertSnippetRequestParams, options?: RequestOptions): ApiPromise&lt;UpsertSnippetResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Adds a snippet to a Square Online site or updates the existing snippet on the site. 
The snippet code is appended to the end of the `head` element on every page of the site, except checkout pages. A snippet application can add one snippet to a given site. 

You can call [ListSites](api-endpoint:Sites-ListSites) to get the IDs of the sites that belong to a seller.


__Note:__ Square Online APIs are publicly available as part of an early access program. For more information, see [Early access program for Square Online APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.snippets.upsertSnippet({ siteId, body });
  // TODO: Handle 'response' of type UpsertSnippetResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.snippets.upsertSnippet({ siteId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpsertSnippetResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>siteId</code> | <code>string</code> | The ID of the site where you want to add or update the snippet. |
| <code>body</code> | <code>[UpsertSnippetRequest](src/models/upsert-snippet-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.snippets.upsertSnippet(request)`

- **OnSuccess**: <code>[UpsertSnippetResponse](src/models/upsert-snippet-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.snippets.upsertSnippet(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpsertSnippetResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpsertSnippetResponse](src/models/upsert-snippet-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Subscriptions

> Source: [Subscriptions](src/resources/subscriptions.ts)

<details>
<summary><code>bulkSwapPlan(request: Subscriptions.BulkSwapPlanRequestParams, options?: RequestOptions): ApiPromise&lt;BulkSwapPlanResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedules a plan variation change for all active subscriptions under a given plan
variation. For more information, see [Swap Subscription Plan Variations](https://developer.squareup.com/docs/subscriptions-api/swap-plan-variations).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.bulkSwapPlan({ body });
  // TODO: Handle 'response' of type BulkSwapPlanResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions.bulkSwapPlan({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkSwapPlanResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkSwapPlanRequest](src/models/bulk-swap-plan-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.bulkSwapPlan(request)`

- **OnSuccess**: <code>[BulkSwapPlanResponse](src/models/bulk-swap-plan-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.subscriptions.bulkSwapPlan(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkSwapPlanResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BulkSwapPlanResponse](src/models/bulk-swap-plan-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelSubscription(request: Subscriptions.CancelSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;CancelSubscriptionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedules a `CANCEL` action to cancel an active subscription. This 
sets the `canceled_date` field to the end of the active billing period. After this date, 
the subscription status changes from ACTIVE to CANCELED.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.cancelSubscription({ subscriptionId });
  // TODO: Handle 'response' of type CancelSubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions.cancelSubscription({ subscriptionId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelSubscriptionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | The ID of the subscription to cancel. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.cancelSubscription(request)`

- **OnSuccess**: <code>[CancelSubscriptionResponse](src/models/cancel-subscription-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.subscriptions.cancelSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelSubscriptionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CancelSubscriptionResponse](src/models/cancel-subscription-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>changeBillingAnchorDate(request: Subscriptions.ChangeBillingAnchorDateRequestParams, options?: RequestOptions): ApiPromise&lt;ChangeBillingAnchorDateResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes the [billing anchor date](https://developer.squareup.com/docs/subscriptions-api/subscription-billing#billing-dates)
for a subscription.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.changeBillingAnchorDate({ subscriptionId, body });
  // TODO: Handle 'response' of type ChangeBillingAnchorDateResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions.changeBillingAnchorDate({ subscriptionId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ChangeBillingAnchorDateResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | The ID of the subscription to update the billing anchor date. |
| <code>body</code> | <code>[ChangeBillingAnchorDateRequest](src/models/change-billing-anchor-date-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.changeBillingAnchorDate(request)`

- **OnSuccess**: <code>[ChangeBillingAnchorDateResponse](src/models/change-billing-anchor-date-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.subscriptions.changeBillingAnchorDate(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ChangeBillingAnchorDateResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ChangeBillingAnchorDateResponse](src/models/change-billing-anchor-date-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createSubscription(request: Subscriptions.CreateSubscriptionRequestParams, options?: RequestOptions): ApiPromise&lt;CreateSubscriptionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Enrolls a customer in a subscription.

If you provide a card on file in the request, Square charges the card for
the subscription. Otherwise, Square sends an invoice to the customer's email
address. The subscription starts immediately, unless the request includes
the optional `start_date`. Each individual subscription is associated with a particular location.

For more information, see [Create a subscription](https://developer.squareup.com/docs/subscriptions-api/manage-subscriptions#create-a-subscription).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.createSubscription({ body });
  // TODO: Handle 'response' of type CreateSubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions.createSubscription({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateSubscriptionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateSubscriptionRequest](src/models/create-subscription-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.createSubscription(request)`

- **OnSuccess**: <code>[CreateSubscriptionResponse](src/models/create-subscription-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.subscriptions.createSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateSubscriptionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateSubscriptionResponse](src/models/create-subscription-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteSubscriptionAction(request: Subscriptions.DeleteSubscriptionActionRequest, options?: RequestOptions): ApiPromise&lt;DeleteSubscriptionActionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a scheduled action for a subscription.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.deleteSubscriptionAction({ subscriptionId, actionId });
  // TODO: Handle 'response' of type DeleteSubscriptionActionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions.deleteSubscriptionAction({
  subscriptionId,
  actionId,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteSubscriptionActionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | The ID of the subscription the targeted action is to act upon. |
| <code>actionId</code> | <code>string</code> | The ID of the targeted action to be deleted. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.deleteSubscriptionAction(request)`

- **OnSuccess**: <code>[DeleteSubscriptionActionResponse](src/models/delete-subscription-action-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.subscriptions.deleteSubscriptionAction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteSubscriptionActionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DeleteSubscriptionActionResponse](src/models/delete-subscription-action-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listSubscriptionEvents(request: Subscriptions.ListSubscriptionEventsRequest, options?: RequestOptions): ApiPromise&lt;ListSubscriptionEventsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all [events](https://developer.squareup.com/docs/subscriptions-api/actions-events) for a specific subscription.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.listSubscriptionEvents({ subscriptionId });
  // TODO: Handle 'response' of type ListSubscriptionEventsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions.listSubscriptionEvents({ subscriptionId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListSubscriptionEventsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | The ID of the subscription to retrieve the events for. |
| <code>cursor?</code> | <code>string</code> | When the total number of resulting subscription events exceeds the limit of a paged response, <br>specify the cursor returned from a preceding response here to fetch the next set of results.<br>If the cursor is unset, the response contains the last page of the results.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| <code>limit?</code> | <code>number</code> | The upper limit on the number of subscription events to return<br>in a paged response. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.listSubscriptionEvents(request)`

- **OnSuccess**: <code>[ListSubscriptionEventsResponse](src/models/list-subscription-events-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.subscriptions.listSubscriptionEvents(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListSubscriptionEventsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListSubscriptionEventsResponse](src/models/list-subscription-events-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>pauseSubscription(request: Subscriptions.PauseSubscriptionRequestParams, options?: RequestOptions): ApiPromise&lt;PauseSubscriptionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedules a `PAUSE` action to pause an active subscription.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.pauseSubscription({ subscriptionId, body });
  // TODO: Handle 'response' of type PauseSubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions.pauseSubscription({ subscriptionId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type PauseSubscriptionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | The ID of the subscription to pause. |
| <code>body</code> | <code>[PauseSubscriptionRequest](src/models/pause-subscription-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.pauseSubscription(request)`

- **OnSuccess**: <code>[PauseSubscriptionResponse](src/models/pause-subscription-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.subscriptions.pauseSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;PauseSubscriptionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[PauseSubscriptionResponse](src/models/pause-subscription-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>resumeSubscription(request: Subscriptions.ResumeSubscriptionRequestParams, options?: RequestOptions): ApiPromise&lt;ResumeSubscriptionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedules a `RESUME` action to resume a paused or a deactivated subscription.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.resumeSubscription({ subscriptionId, body });
  // TODO: Handle 'response' of type ResumeSubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions.resumeSubscription({ subscriptionId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ResumeSubscriptionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | The ID of the subscription to resume. |
| <code>body</code> | <code>[ResumeSubscriptionRequest](src/models/resume-subscription-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.resumeSubscription(request)`

- **OnSuccess**: <code>[ResumeSubscriptionResponse](src/models/resume-subscription-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.subscriptions.resumeSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ResumeSubscriptionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ResumeSubscriptionResponse](src/models/resume-subscription-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveSubscription(request: Subscriptions.RetrieveSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;RetrieveSubscriptionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific subscription.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.retrieveSubscription({ subscriptionId });
  // TODO: Handle 'response' of type RetrieveSubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions.retrieveSubscription({ subscriptionId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveSubscriptionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | The ID of the subscription to retrieve. |
| <code>include?</code> | <code>string</code> | A query parameter to specify related information to be included in the response. <br><br>The supported query parameter values are: <br><br>- `actions`: to include scheduled actions on the targeted subscription. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.retrieveSubscription(request)`

- **OnSuccess**: <code>[RetrieveSubscriptionResponse](src/models/retrieve-subscription-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.subscriptions.retrieveSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveSubscriptionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveSubscriptionResponse](src/models/retrieve-subscription-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchSubscriptions(request: Subscriptions.SearchSubscriptionsRequestParams, options?: RequestOptions): ApiPromise&lt;SearchSubscriptionsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches for subscriptions.

Results are ordered chronologically by subscription creation date. If
the request specifies more than one location ID,
the endpoint orders the result
by location ID, and then by creation date within each location. If no locations are given
in the query, all locations are searched.

You can also optionally specify `customer_ids` to search by customer.
If left unset, all customers
associated with the specified locations are returned.
If the request specifies customer IDs, the endpoint orders results
first by location, within location by customer ID, and within
customer by subscription creation date.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.searchSubscriptions({ body });
  // TODO: Handle 'response' of type SearchSubscriptionsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions.searchSubscriptions({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchSubscriptionsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchSubscriptionsRequest](src/models/search-subscriptions-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.searchSubscriptions(request)`

- **OnSuccess**: <code>[SearchSubscriptionsResponse](src/models/search-subscriptions-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.subscriptions.searchSubscriptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchSubscriptionsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[SearchSubscriptionsResponse](src/models/search-subscriptions-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>swapPlan(request: Subscriptions.SwapPlanRequestParams, options?: RequestOptions): ApiPromise&lt;SwapPlanResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Schedules a `SWAP_PLAN` action to swap a subscription plan variation in an existing subscription. 
For more information, see [Swap Subscription Plan Variations](https://developer.squareup.com/docs/subscriptions-api/swap-plan-variations).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.swapPlan({ subscriptionId, body });
  // TODO: Handle 'response' of type SwapPlanResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions.swapPlan({ subscriptionId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SwapPlanResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | The ID of the subscription to swap the subscription plan for. |
| <code>body</code> | <code>[SwapPlanRequest](src/models/swap-plan-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.swapPlan(request)`

- **OnSuccess**: <code>[SwapPlanResponse](src/models/swap-plan-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.subscriptions.swapPlan(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SwapPlanResponse, ResponseError&gt;</code>, with `result.value` of type <code>[SwapPlanResponse](src/models/swap-plan-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateSubscription(request: Subscriptions.UpdateSubscriptionRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateSubscriptionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a subscription by modifying or clearing `subscription` field values.
To clear a field, set its value to `null`.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.subscriptions.updateSubscription({ subscriptionId, body });
  // TODO: Handle 'response' of type UpdateSubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.subscriptions.updateSubscription({ subscriptionId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateSubscriptionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | The ID of the subscription to update. |
| <code>body</code> | <code>[UpdateSubscriptionRequest](src/models/update-subscription-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.subscriptions.updateSubscription(request)`

- **OnSuccess**: <code>[UpdateSubscriptionResponse](src/models/update-subscription-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.subscriptions.updateSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateSubscriptionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateSubscriptionResponse](src/models/update-subscription-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Team

> Source: [Team](src/resources/team.ts)

<details>
<summary><code>bulkCreateTeamMembers(request: Team.BulkCreateTeamMembersRequestParams, options?: RequestOptions): ApiPromise&lt;BulkCreateTeamMembersResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates multiple `TeamMember` objects. The created `TeamMember` objects are returned on successful creates.
This process is non-transactional and processes as much of the request as possible. If one of the creates in
the request cannot be successfully processed, the request is not marked as failed, but the body of the response
contains explicit error information for the failed create.

Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#bulk-create-team-members).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.team.bulkCreateTeamMembers({ body });
  // TODO: Handle 'response' of type BulkCreateTeamMembersResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.team.bulkCreateTeamMembers({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkCreateTeamMembersResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkCreateTeamMembersRequest](src/models/bulk-create-team-members-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.team.bulkCreateTeamMembers(request)`

- **OnSuccess**: <code>[BulkCreateTeamMembersResponse](src/models/bulk-create-team-members-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.team.bulkCreateTeamMembers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkCreateTeamMembersResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BulkCreateTeamMembersResponse](src/models/bulk-create-team-members-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkUpdateTeamMembers(request: Team.BulkUpdateTeamMembersRequestParams, options?: RequestOptions): ApiPromise&lt;BulkUpdateTeamMembersResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates multiple `TeamMember` objects. The updated `TeamMember` objects are returned on successful updates.
This process is non-transactional and processes as much of the request as possible. If one of the updates in
the request cannot be successfully processed, the request is not marked as failed, but the body of the response
contains explicit error information for the failed update.
Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#bulk-update-team-members).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.team.bulkUpdateTeamMembers({ body });
  // TODO: Handle 'response' of type BulkUpdateTeamMembersResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.team.bulkUpdateTeamMembers({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkUpdateTeamMembersResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkUpdateTeamMembersRequest](src/models/bulk-update-team-members-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.team.bulkUpdateTeamMembers(request)`

- **OnSuccess**: <code>[BulkUpdateTeamMembersResponse](src/models/bulk-update-team-members-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.team.bulkUpdateTeamMembers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkUpdateTeamMembersResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BulkUpdateTeamMembersResponse](src/models/bulk-update-team-members-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createJob(request: Team.CreateJobRequestParams, options?: RequestOptions): ApiPromise&lt;CreateJobResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a job in a seller account. A job defines a title and tip eligibility. Note that
compensation is defined in a [job assignment](entity:JobAssignment) in a team member's wage setting.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.team.createJob({ body });
  // TODO: Handle 'response' of type CreateJobResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.team.createJob({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateJobResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateJobRequest](src/models/create-job-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.team.createJob(request)`

- **OnSuccess**: <code>[CreateJobResponse](src/models/create-job-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.team.createJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateJobResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateJobResponse](src/models/create-job-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTeamMember(request: Team.CreateTeamMemberRequestParams, options?: RequestOptions): ApiPromise&lt;CreateTeamMemberResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a single `TeamMember` object. The `TeamMember` object is returned on successful creates.
You must provide the following values in your request to this endpoint:
- `given_name`
- `family_name`

Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#createteammember).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.team.createTeamMember({ body });
  // TODO: Handle 'response' of type CreateTeamMemberResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.team.createTeamMember({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateTeamMemberResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateTeamMemberRequest](src/models/create-team-member-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.team.createTeamMember(request)`

- **OnSuccess**: <code>[CreateTeamMemberResponse](src/models/create-team-member-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.team.createTeamMember(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateTeamMemberResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateTeamMemberResponse](src/models/create-team-member-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listJobs(request: Team.ListJobsRequest, options?: RequestOptions): ApiPromise&lt;ListJobsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists jobs in a seller account. Results are sorted by title in ascending order.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.team.listJobs();
  // TODO: Handle 'response' of type ListJobsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.team.listJobs().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListJobsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor?</code> | <code>string</code> | The pagination cursor returned by the previous call to this endpoint. Provide this<br>cursor to retrieve the next page of results for your original request. For more information,<br>see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.team.listJobs(request)`

- **OnSuccess**: <code>[ListJobsResponse](src/models/list-jobs-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.team.listJobs(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListJobsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListJobsResponse](src/models/list-jobs-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveJob(request: Team.RetrieveJobRequest, options?: RequestOptions): ApiPromise&lt;RetrieveJobResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specified job.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.team.retrieveJob({ jobId });
  // TODO: Handle 'response' of type RetrieveJobResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.team.retrieveJob({ jobId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveJobResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jobId</code> | <code>string</code> | The ID of the job to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.team.retrieveJob(request)`

- **OnSuccess**: <code>[RetrieveJobResponse](src/models/retrieve-job-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.team.retrieveJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveJobResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveJobResponse](src/models/retrieve-job-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveTeamMember(request: Team.RetrieveTeamMemberRequest, options?: RequestOptions): ApiPromise&lt;RetrieveTeamMemberResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a `TeamMember` object for the given `TeamMember.id`.
Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#retrieve-a-team-member).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.team.retrieveTeamMember({ teamMemberId });
  // TODO: Handle 'response' of type RetrieveTeamMemberResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.team.retrieveTeamMember({ teamMemberId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveTeamMemberResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamMemberId</code> | <code>string</code> | The ID of the team member to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.team.retrieveTeamMember(request)`

- **OnSuccess**: <code>[RetrieveTeamMemberResponse](src/models/retrieve-team-member-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.team.retrieveTeamMember(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveTeamMemberResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveTeamMemberResponse](src/models/retrieve-team-member-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveWageSetting(request: Team.RetrieveWageSettingRequest, options?: RequestOptions): ApiPromise&lt;RetrieveWageSettingResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a `WageSetting` object for a team member specified
by `TeamMember.id`. For more information, see
[Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#retrievewagesetting).

Square recommends using [RetrieveTeamMember](api-endpoint:Team-RetrieveTeamMember) or [SearchTeamMembers](api-endpoint:Team-SearchTeamMembers)
to get this information directly from the `TeamMember.wage_setting` field.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.team.retrieveWageSetting({ teamMemberId });
  // TODO: Handle 'response' of type RetrieveWageSettingResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.team.retrieveWageSetting({ teamMemberId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveWageSettingResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamMemberId</code> | <code>string</code> | The ID of the team member for which to retrieve the wage setting. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.team.retrieveWageSetting(request)`

- **OnSuccess**: <code>[RetrieveWageSettingResponse](src/models/retrieve-wage-setting-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.team.retrieveWageSetting(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveWageSettingResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveWageSettingResponse](src/models/retrieve-wage-setting-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchTeamMembers(request: Team.SearchTeamMembersRequestParams, options?: RequestOptions): ApiPromise&lt;SearchTeamMembersResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a paginated list of `TeamMember` objects for a business. 
The list can be filtered by location IDs, `ACTIVE` or `INACTIVE` status, or whether
the team member is the Square account owner.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.team.searchTeamMembers({ body });
  // TODO: Handle 'response' of type SearchTeamMembersResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.team.searchTeamMembers({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchTeamMembersResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchTeamMembersRequest](src/models/search-team-members-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.team.searchTeamMembers(request)`

- **OnSuccess**: <code>[SearchTeamMembersResponse](src/models/search-team-members-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.team.searchTeamMembers(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchTeamMembersResponse, ResponseError&gt;</code>, with `result.value` of type <code>[SearchTeamMembersResponse](src/models/search-team-members-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateJob(request: Team.UpdateJobRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateJobResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates the title or tip eligibility of a job. Changes to the title propagate to all
`JobAssignment`, `Shift`, and `TeamMemberWage` objects that reference the job ID. Changes to
tip eligibility propagate to all `TeamMemberWage` objects that reference the job ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.team.updateJob({ jobId, body });
  // TODO: Handle 'response' of type UpdateJobResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.team.updateJob({ jobId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateJobResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>jobId</code> | <code>string</code> | The ID of the job to update. |
| <code>body</code> | <code>[UpdateJobRequest](src/models/update-job-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.team.updateJob(request)`

- **OnSuccess**: <code>[UpdateJobResponse](src/models/update-job-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.team.updateJob(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateJobResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateJobResponse](src/models/update-job-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTeamMember(request: Team.UpdateTeamMemberRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateTeamMemberResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a single `TeamMember` object. The `TeamMember` object is returned on successful updates.
Learn about [Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#update-a-team-member).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.team.updateTeamMember({ teamMemberId, body });
  // TODO: Handle 'response' of type UpdateTeamMemberResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.team.updateTeamMember({ teamMemberId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateTeamMemberResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamMemberId</code> | <code>string</code> | The ID of the team member to update. |
| <code>body</code> | <code>[UpdateTeamMemberRequest](src/models/update-team-member-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.team.updateTeamMember(request)`

- **OnSuccess**: <code>[UpdateTeamMemberResponse](src/models/update-team-member-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.team.updateTeamMember(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateTeamMemberResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateTeamMemberResponse](src/models/update-team-member-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateWageSetting(request: Team.UpdateWageSettingRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateWageSettingResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates or updates a `WageSetting` object. The object is created if a
`WageSetting` with the specified `team_member_id` doesn't exist. Otherwise,
it fully replaces the `WageSetting` object for the team member.
The `WageSetting` is returned on a successful update. For more information, see
[Troubleshooting the Team API](https://developer.squareup.com/docs/team/troubleshooting#create-or-update-a-wage-setting).

Square recommends using [CreateTeamMember](api-endpoint:Team-CreateTeamMember) or [UpdateTeamMember](api-endpoint:Team-UpdateTeamMember)
to manage the `TeamMember.wage_setting` field directly.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.team.updateWageSetting({ teamMemberId, body });
  // TODO: Handle 'response' of type UpdateWageSettingResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.team.updateWageSetting({ teamMemberId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateWageSettingResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>teamMemberId</code> | <code>string</code> | The ID of the team member for which to update the `WageSetting` object. |
| <code>body</code> | <code>[UpdateWageSettingRequest](src/models/update-wage-setting-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.team.updateWageSetting(request)`

- **OnSuccess**: <code>[UpdateWageSettingResponse](src/models/update-wage-setting-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.team.updateWageSetting(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateWageSettingResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateWageSettingResponse](src/models/update-wage-setting-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Terminal

> Source: [Terminal](src/resources/terminal.ts)

<details>
<summary><code>cancelTerminalAction(request: Terminal.CancelTerminalActionRequest, options?: RequestOptions): ApiPromise&lt;CancelTerminalActionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a Terminal action request if the status of the request permits it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminal.cancelTerminalAction({ actionId });
  // TODO: Handle 'response' of type CancelTerminalActionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.terminal.cancelTerminalAction({ actionId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelTerminalActionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>actionId</code> | <code>string</code> | Unique ID for the desired `TerminalAction`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.terminal.cancelTerminalAction(request)`

- **OnSuccess**: <code>[CancelTerminalActionResponse](src/models/cancel-terminal-action-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.terminal.cancelTerminalAction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelTerminalActionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CancelTerminalActionResponse](src/models/cancel-terminal-action-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelTerminalCheckout(request: Terminal.CancelTerminalCheckoutRequest, options?: RequestOptions): ApiPromise&lt;CancelTerminalCheckoutResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a Terminal checkout request if the status of the request permits it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminal.cancelTerminalCheckout({ checkoutId });
  // TODO: Handle 'response' of type CancelTerminalCheckoutResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.terminal.cancelTerminalCheckout({ checkoutId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelTerminalCheckoutResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>checkoutId</code> | <code>string</code> | The unique ID for the desired `TerminalCheckout`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.terminal.cancelTerminalCheckout(request)`

- **OnSuccess**: <code>[CancelTerminalCheckoutResponse](src/models/cancel-terminal-checkout-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.terminal.cancelTerminalCheckout(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelTerminalCheckoutResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CancelTerminalCheckoutResponse](src/models/cancel-terminal-checkout-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>cancelTerminalRefund(request: Terminal.CancelTerminalRefundRequest, options?: RequestOptions): ApiPromise&lt;CancelTerminalRefundResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels an Interac Terminal refund request by refund request ID if the status of the request permits it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminal.cancelTerminalRefund({ terminalRefundId });
  // TODO: Handle 'response' of type CancelTerminalRefundResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.terminal.cancelTerminalRefund({ terminalRefundId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelTerminalRefundResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>terminalRefundId</code> | <code>string</code> | The unique ID for the desired `TerminalRefund`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.terminal.cancelTerminalRefund(request)`

- **OnSuccess**: <code>[CancelTerminalRefundResponse](src/models/cancel-terminal-refund-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.terminal.cancelTerminalRefund(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelTerminalRefundResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CancelTerminalRefundResponse](src/models/cancel-terminal-refund-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTerminalAction(request: Terminal.CreateTerminalActionRequestParams, options?: RequestOptions): ApiPromise&lt;CreateTerminalActionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Terminal action request and sends it to the specified device.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminal.createTerminalAction({ body });
  // TODO: Handle 'response' of type CreateTerminalActionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.terminal.createTerminalAction({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateTerminalActionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateTerminalActionRequest](src/models/create-terminal-action-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.terminal.createTerminalAction(request)`

- **OnSuccess**: <code>[CreateTerminalActionResponse](src/models/create-terminal-action-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.terminal.createTerminalAction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateTerminalActionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateTerminalActionResponse](src/models/create-terminal-action-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTerminalCheckout(request: Terminal.CreateTerminalCheckoutRequestParams, options?: RequestOptions): ApiPromise&lt;CreateTerminalCheckoutResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a Terminal checkout request and sends it to the specified device to take a payment
for the requested amount.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminal.createTerminalCheckout({ body });
  // TODO: Handle 'response' of type CreateTerminalCheckoutResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.terminal.createTerminalCheckout({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateTerminalCheckoutResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateTerminalCheckoutRequest](src/models/create-terminal-checkout-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.terminal.createTerminalCheckout(request)`

- **OnSuccess**: <code>[CreateTerminalCheckoutResponse](src/models/create-terminal-checkout-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.terminal.createTerminalCheckout(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateTerminalCheckoutResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateTerminalCheckoutResponse](src/models/create-terminal-checkout-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTerminalRefund(request: Terminal.CreateTerminalRefundRequestParams, options?: RequestOptions): ApiPromise&lt;CreateTerminalRefundResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a request to refund an Interac payment completed on a Square Terminal. Refunds for Interac payments on a Square Terminal are supported only for Interac debit cards in Canada. Other refunds for Terminal payments should use the Refunds API. For more information, see [Refunds API](api:Refunds).

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminal.createTerminalRefund({ body });
  // TODO: Handle 'response' of type CreateTerminalRefundResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.terminal.createTerminalRefund({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateTerminalRefundResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateTerminalRefundRequest](src/models/create-terminal-refund-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.terminal.createTerminalRefund(request)`

- **OnSuccess**: <code>[CreateTerminalRefundResponse](src/models/create-terminal-refund-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.terminal.createTerminalRefund(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateTerminalRefundResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateTerminalRefundResponse](src/models/create-terminal-refund-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dismissTerminalAction(request: Terminal.DismissTerminalActionRequest, options?: RequestOptions): ApiPromise&lt;DismissTerminalActionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Dismisses a Terminal action request if the status and type of the request permits it.

See [Link and Dismiss Actions](https://developer.squareup.com/docs/terminal-api/advanced-features/custom-workflows/link-and-dismiss-actions) for more details.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminal.dismissTerminalAction({ actionId });
  // TODO: Handle 'response' of type DismissTerminalActionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.terminal.dismissTerminalAction({ actionId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DismissTerminalActionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>actionId</code> | <code>string</code> | Unique ID for the `TerminalAction` associated with the action to be dismissed. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.terminal.dismissTerminalAction(request)`

- **OnSuccess**: <code>[DismissTerminalActionResponse](src/models/dismiss-terminal-action-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.terminal.dismissTerminalAction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DismissTerminalActionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DismissTerminalActionResponse](src/models/dismiss-terminal-action-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dismissTerminalCheckout(request: Terminal.DismissTerminalCheckoutRequest, options?: RequestOptions): ApiPromise&lt;DismissTerminalCheckoutResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Dismisses a Terminal checkout request if the status and type of the request permits it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminal.dismissTerminalCheckout({ checkoutId });
  // TODO: Handle 'response' of type DismissTerminalCheckoutResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.terminal.dismissTerminalCheckout({ checkoutId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DismissTerminalCheckoutResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>checkoutId</code> | <code>string</code> | Unique ID for the `TerminalCheckout` associated with the checkout to be dismissed. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.terminal.dismissTerminalCheckout(request)`

- **OnSuccess**: <code>[DismissTerminalCheckoutResponse](src/models/dismiss-terminal-checkout-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.terminal.dismissTerminalCheckout(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DismissTerminalCheckoutResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DismissTerminalCheckoutResponse](src/models/dismiss-terminal-checkout-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>dismissTerminalRefund(request: Terminal.DismissTerminalRefundRequest, options?: RequestOptions): ApiPromise&lt;DismissTerminalRefundResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Dismisses a Terminal refund request if the status and type of the request permits it.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminal.dismissTerminalRefund({ terminalRefundId });
  // TODO: Handle 'response' of type DismissTerminalRefundResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.terminal.dismissTerminalRefund({ terminalRefundId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DismissTerminalRefundResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>terminalRefundId</code> | <code>string</code> | Unique ID for the `TerminalRefund` associated with the refund to be dismissed. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.terminal.dismissTerminalRefund(request)`

- **OnSuccess**: <code>[DismissTerminalRefundResponse](src/models/dismiss-terminal-refund-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.terminal.dismissTerminalRefund(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DismissTerminalRefundResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DismissTerminalRefundResponse](src/models/dismiss-terminal-refund-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTerminalAction(request: Terminal.GetTerminalActionRequest, options?: RequestOptions): ApiPromise&lt;GetTerminalActionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a Terminal action request by `action_id`. Terminal action requests are available for 30 days.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminal.getTerminalAction({ actionId });
  // TODO: Handle 'response' of type GetTerminalActionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.terminal.getTerminalAction({ actionId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetTerminalActionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>actionId</code> | <code>string</code> | Unique ID for the desired `TerminalAction`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.terminal.getTerminalAction(request)`

- **OnSuccess**: <code>[GetTerminalActionResponse](src/models/get-terminal-action-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.terminal.getTerminalAction(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetTerminalActionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[GetTerminalActionResponse](src/models/get-terminal-action-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTerminalCheckout(request: Terminal.GetTerminalCheckoutRequest, options?: RequestOptions): ApiPromise&lt;GetTerminalCheckoutResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a Terminal checkout request by `checkout_id`. Terminal checkout requests are available for 30 days.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminal.getTerminalCheckout({ checkoutId });
  // TODO: Handle 'response' of type GetTerminalCheckoutResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.terminal.getTerminalCheckout({ checkoutId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetTerminalCheckoutResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>checkoutId</code> | <code>string</code> | The unique ID for the desired `TerminalCheckout`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.terminal.getTerminalCheckout(request)`

- **OnSuccess**: <code>[GetTerminalCheckoutResponse](src/models/get-terminal-checkout-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.terminal.getTerminalCheckout(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetTerminalCheckoutResponse, ResponseError&gt;</code>, with `result.value` of type <code>[GetTerminalCheckoutResponse](src/models/get-terminal-checkout-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>getTerminalRefund(request: Terminal.GetTerminalRefundRequest, options?: RequestOptions): ApiPromise&lt;GetTerminalRefundResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves an Interac Terminal refund object by ID. Terminal refund objects are available for 30 days.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminal.getTerminalRefund({ terminalRefundId });
  // TODO: Handle 'response' of type GetTerminalRefundResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.terminal.getTerminalRefund({ terminalRefundId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type GetTerminalRefundResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>terminalRefundId</code> | <code>string</code> | The unique ID for the desired `TerminalRefund`. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.terminal.getTerminalRefund(request)`

- **OnSuccess**: <code>[GetTerminalRefundResponse](src/models/get-terminal-refund-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.terminal.getTerminalRefund(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;GetTerminalRefundResponse, ResponseError&gt;</code>, with `result.value` of type <code>[GetTerminalRefundResponse](src/models/get-terminal-refund-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchTerminalActions(request: Terminal.SearchTerminalActionsRequestParams, options?: RequestOptions): ApiPromise&lt;SearchTerminalActionsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a filtered list of Terminal action requests created by the account making the request. Terminal action requests are available for 30 days.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminal.searchTerminalActions({ body });
  // TODO: Handle 'response' of type SearchTerminalActionsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.terminal.searchTerminalActions({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchTerminalActionsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchTerminalActionsRequest](src/models/search-terminal-actions-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.terminal.searchTerminalActions(request)`

- **OnSuccess**: <code>[SearchTerminalActionsResponse](src/models/search-terminal-actions-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.terminal.searchTerminalActions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchTerminalActionsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[SearchTerminalActionsResponse](src/models/search-terminal-actions-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchTerminalCheckouts(request: Terminal.SearchTerminalCheckoutsRequestParams, options?: RequestOptions): ApiPromise&lt;SearchTerminalCheckoutsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Returns a filtered list of Terminal checkout requests created by the application making the request. Only Terminal checkout requests created for the merchant scoped to the OAuth token are returned. Terminal checkout requests are available for 30 days.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminal.searchTerminalCheckouts({ body });
  // TODO: Handle 'response' of type SearchTerminalCheckoutsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.terminal.searchTerminalCheckouts({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchTerminalCheckoutsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchTerminalCheckoutsRequest](src/models/search-terminal-checkouts-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.terminal.searchTerminalCheckouts(request)`

- **OnSuccess**: <code>[SearchTerminalCheckoutsResponse](src/models/search-terminal-checkouts-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.terminal.searchTerminalCheckouts(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchTerminalCheckoutsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[SearchTerminalCheckoutsResponse](src/models/search-terminal-checkouts-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchTerminalRefunds(request: Terminal.SearchTerminalRefundsRequestParams, options?: RequestOptions): ApiPromise&lt;SearchTerminalRefundsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a filtered list of Interac Terminal refund requests created by the seller making the request. Terminal refund requests are available for 30 days.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.terminal.searchTerminalRefunds({ body });
  // TODO: Handle 'response' of type SearchTerminalRefundsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.terminal.searchTerminalRefunds({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchTerminalRefundsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchTerminalRefundsRequest](src/models/search-terminal-refunds-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.terminal.searchTerminalRefunds(request)`

- **OnSuccess**: <code>[SearchTerminalRefundsResponse](src/models/search-terminal-refunds-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.terminal.searchTerminalRefunds(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchTerminalRefundsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[SearchTerminalRefundsResponse](src/models/search-terminal-refunds-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## TransferOrderApi

> Source: [TransferOrderApi](src/resources/transfer-order-api.ts)

<details>
<summary><code>cancelTransferOrder(request: TransferOrderApi.CancelTransferOrderRequestParams, options?: RequestOptions): ApiPromise&lt;CancelTransferOrderResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Cancels a transfer order in [STARTED](entity:TransferOrderStatus) or 
[PARTIALLY_RECEIVED](entity:TransferOrderStatus) status. Any unreceived quantities will no
longer be receivable and will be immediately returned to the source [Location](entity:Location)'s inventory.

Common reasons for cancellation:
- Items no longer needed at destination
- Source location needs the inventory
- Order created in error

Creates a [transfer_order.updated](webhook:transfer_order.updated) webhook event.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferOrderApi.cancelTransferOrder({ transferOrderId, body });
  // TODO: Handle 'response' of type CancelTransferOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferOrderApi.cancelTransferOrder({ transferOrderId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CancelTransferOrderResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transferOrderId</code> | <code>string</code> | The ID of the transfer order to cancel. Must be in STARTED or PARTIALLY_RECEIVED status. |
| <code>body</code> | <code>[CancelTransferOrderRequest](src/models/cancel-transfer-order-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferOrderApi.cancelTransferOrder(request)`

- **OnSuccess**: <code>[CancelTransferOrderResponse](src/models/cancel-transfer-order-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.transferOrderApi.cancelTransferOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CancelTransferOrderResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CancelTransferOrderResponse](src/models/cancel-transfer-order-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createTransferOrder(request: TransferOrderApi.CreateTransferOrderRequestParams, options?: RequestOptions): ApiPromise&lt;CreateTransferOrderResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a new transfer order in [DRAFT](entity:TransferOrderStatus) status. A transfer order represents the intent 
to move [CatalogItemVariation](entity:CatalogItemVariation)s from one [Location](entity:Location) to another. 
The source and destination locations must be different and must belong to your Square account.

In [DRAFT](entity:TransferOrderStatus) status, you can:
- Add or remove items
- Modify quantities
- Update shipping information
- Delete the entire order via [DeleteTransferOrder](api-endpoint:TransferOrders-DeleteTransferOrder)

The request requires source_location_id and destination_location_id.
Inventory levels are not affected until the order is started via 
[StartTransferOrder](api-endpoint:TransferOrders-StartTransferOrder).

Common integration points:
- Sync with warehouse management systems
- Automate regular stock transfers
- Initialize transfers from inventory optimization systems

Creates a [transfer_order.created](webhook:transfer_order.created) webhook event.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferOrderApi.createTransferOrder({ body });
  // TODO: Handle 'response' of type CreateTransferOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferOrderApi.createTransferOrder({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateTransferOrderResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateTransferOrderRequest](src/models/create-transfer-order-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferOrderApi.createTransferOrder(request)`

- **OnSuccess**: <code>[CreateTransferOrderResponse](src/models/create-transfer-order-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.transferOrderApi.createTransferOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateTransferOrderResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateTransferOrderResponse](src/models/create-transfer-order-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteTransferOrder(request: TransferOrderApi.DeleteTransferOrderRequest, options?: RequestOptions): ApiPromise&lt;DeleteTransferOrderResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a transfer order in [DRAFT](entity:TransferOrderStatus) status.
Only draft orders can be deleted. Once an order is started via 
[StartTransferOrder](api-endpoint:TransferOrders-StartTransferOrder), it can no longer be deleted.

Creates a [transfer_order.deleted](webhook:transfer_order.deleted) webhook event.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferOrderApi.deleteTransferOrder({ transferOrderId });
  // TODO: Handle 'response' of type DeleteTransferOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferOrderApi.deleteTransferOrder({ transferOrderId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteTransferOrderResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transferOrderId</code> | <code>string</code> | The ID of the transfer order to delete |
| <code>version?</code> | <code>number</code> | Version for optimistic concurrency |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferOrderApi.deleteTransferOrder(request)`

- **OnSuccess**: <code>[DeleteTransferOrderResponse](src/models/delete-transfer-order-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.transferOrderApi.deleteTransferOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteTransferOrderResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DeleteTransferOrderResponse](src/models/delete-transfer-order-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>receiveTransferOrder(request: TransferOrderApi.ReceiveTransferOrderRequestParams, options?: RequestOptions): ApiPromise&lt;ReceiveTransferOrderResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Records receipt of [CatalogItemVariation](entity:CatalogItemVariation)s for a transfer order.
This endpoint supports partial receiving - you can receive items in multiple batches.

For each line item, you can specify:
- Quantity received in good condition (added to destination inventory with [InventoryState](entity:InventoryState) of IN_STOCK)
- Quantity damaged during transit/handling (added to destination inventory with [InventoryState](entity:InventoryState) of WASTE)
- Quantity canceled (returned to source location's inventory)

The order must be in [STARTED](entity:TransferOrderStatus) or [PARTIALLY_RECEIVED](entity:TransferOrderStatus) status.
Received quantities are added to the destination [Location](entity:Location)'s inventory according to their condition.
Canceled quantities are immediately returned to the source [Location](entity:Location)'s inventory.

When all items are either received, damaged, or canceled, the order moves to
[COMPLETED](entity:TransferOrderStatus) status.

Creates a [transfer_order.updated](webhook:transfer_order.updated) webhook event.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferOrderApi.receiveTransferOrder({ transferOrderId, body });
  // TODO: Handle 'response' of type ReceiveTransferOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferOrderApi.receiveTransferOrder({ transferOrderId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ReceiveTransferOrderResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transferOrderId</code> | <code>string</code> | The ID of the transfer order to receive items for |
| <code>body</code> | <code>[ReceiveTransferOrderRequest](src/models/receive-transfer-order-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferOrderApi.receiveTransferOrder(request)`

- **OnSuccess**: <code>[ReceiveTransferOrderResponse](src/models/receive-transfer-order-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.transferOrderApi.receiveTransferOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ReceiveTransferOrderResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ReceiveTransferOrderResponse](src/models/receive-transfer-order-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveTransferOrder(request: TransferOrderApi.RetrieveTransferOrderRequest, options?: RequestOptions): ApiPromise&lt;RetrieveTransferOrderResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a specific [TransferOrder](entity:TransferOrder) by ID. Returns the complete
order details including:

- Basic information (status, dates, notes)
- Line items with ordered and received quantities
- Source and destination [Location](entity:Location)s
- Tracking information (if available)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferOrderApi.retrieveTransferOrder({ transferOrderId });
  // TODO: Handle 'response' of type RetrieveTransferOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferOrderApi.retrieveTransferOrder({ transferOrderId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveTransferOrderResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transferOrderId</code> | <code>string</code> | The ID of the transfer order to retrieve |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferOrderApi.retrieveTransferOrder(request)`

- **OnSuccess**: <code>[RetrieveTransferOrderResponse](src/models/retrieve-transfer-order-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.transferOrderApi.retrieveTransferOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveTransferOrderResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveTransferOrderResponse](src/models/retrieve-transfer-order-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchTransferOrders(request: TransferOrderApi.SearchTransferOrdersRequestParams, options?: RequestOptions): ApiPromise&lt;SearchTransferOrdersResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches for transfer orders using filters. Returns a paginated list of matching
[TransferOrder](entity:TransferOrder)s sorted by creation date.

Common search scenarios:
- Find orders for a source [Location](entity:Location)
- Find orders for a destination [Location](entity:Location)
- Find orders in a particular [TransferOrderStatus](entity:TransferOrderStatus)

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferOrderApi.searchTransferOrders({ body });
  // TODO: Handle 'response' of type SearchTransferOrdersResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferOrderApi.searchTransferOrders({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchTransferOrdersResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchTransferOrdersRequest](src/models/search-transfer-orders-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferOrderApi.searchTransferOrders(request)`

- **OnSuccess**: <code>[SearchTransferOrdersResponse](src/models/search-transfer-orders-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.transferOrderApi.searchTransferOrders(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchTransferOrdersResponse, ResponseError&gt;</code>, with `result.value` of type <code>[SearchTransferOrdersResponse](src/models/search-transfer-orders-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>startTransferOrder(request: TransferOrderApi.StartTransferOrderRequestParams, options?: RequestOptions): ApiPromise&lt;StartTransferOrderResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Changes a [DRAFT](entity:TransferOrderStatus) transfer order to [STARTED](entity:TransferOrderStatus) status.
This decrements inventory at the source [Location](entity:Location) and marks it as in-transit.

The order must be in [DRAFT](entity:TransferOrderStatus) status and have all required fields populated.
Once started, the order can no longer be deleted, but it can be canceled via 
[CancelTransferOrder](api-endpoint:TransferOrders-CancelTransferOrder).

Creates a [transfer_order.updated](webhook:transfer_order.updated) webhook event.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferOrderApi.startTransferOrder({ transferOrderId, body });
  // TODO: Handle 'response' of type StartTransferOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferOrderApi.startTransferOrder({ transferOrderId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type StartTransferOrderResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transferOrderId</code> | <code>string</code> | The ID of the transfer order to start. Must be in DRAFT status. |
| <code>body</code> | <code>[StartTransferOrderRequest](src/models/start-transfer-order-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferOrderApi.startTransferOrder(request)`

- **OnSuccess**: <code>[StartTransferOrderResponse](src/models/start-transfer-order-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.transferOrderApi.startTransferOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;StartTransferOrderResponse, ResponseError&gt;</code>, with `result.value` of type <code>[StartTransferOrderResponse](src/models/start-transfer-order-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateTransferOrder(request: TransferOrderApi.UpdateTransferOrderRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateTransferOrderResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing transfer order. This endpoint supports sparse updates,
allowing you to modify specific fields without affecting others.

Creates a [transfer_order.updated](webhook:transfer_order.updated) webhook event.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.transferOrderApi.updateTransferOrder({ transferOrderId, body });
  // TODO: Handle 'response' of type UpdateTransferOrderResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.transferOrderApi.updateTransferOrder({ transferOrderId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateTransferOrderResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>transferOrderId</code> | <code>string</code> | The ID of the transfer order to update |
| <code>body</code> | <code>[UpdateTransferOrderRequest](src/models/update-transfer-order-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.transferOrderApi.updateTransferOrder(request)`

- **OnSuccess**: <code>[UpdateTransferOrderResponse](src/models/update-transfer-order-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.transferOrderApi.updateTransferOrder(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateTransferOrderResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateTransferOrderResponse](src/models/update-transfer-order-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## Vendors

> Source: [Vendors](src/resources/vendors.ts)

<details>
<summary><code>bulkCreateVendors(request: Vendors.BulkCreateVendorsRequestParams, options?: RequestOptions): ApiPromise&lt;BulkCreateVendorsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates one or more [Vendor](entity:Vendor) objects to represent suppliers to a seller.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendors.bulkCreateVendors({ body });
  // TODO: Handle 'response' of type BulkCreateVendorsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendors.bulkCreateVendors({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkCreateVendorsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkCreateVendorsRequest](src/models/bulk-create-vendors-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendors.bulkCreateVendors(request)`

- **OnSuccess**: <code>[BulkCreateVendorsResponse](src/models/bulk-create-vendors-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.vendors.bulkCreateVendors(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkCreateVendorsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BulkCreateVendorsResponse](src/models/bulk-create-vendors-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkRetrieveVendors(request: Vendors.BulkRetrieveVendorsRequestParams, options?: RequestOptions): ApiPromise&lt;BulkRetrieveVendorsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves one or more vendors of specified [Vendor](entity:Vendor) IDs.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendors.bulkRetrieveVendors({ body });
  // TODO: Handle 'response' of type BulkRetrieveVendorsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendors.bulkRetrieveVendors({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkRetrieveVendorsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkRetrieveVendorsRequest](src/models/bulk-retrieve-vendors-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendors.bulkRetrieveVendors(request)`

- **OnSuccess**: <code>[BulkRetrieveVendorsResponse](src/models/bulk-retrieve-vendors-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.vendors.bulkRetrieveVendors(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkRetrieveVendorsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BulkRetrieveVendorsResponse](src/models/bulk-retrieve-vendors-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>bulkUpdateVendors(request: Vendors.BulkUpdateVendorsRequestParams, options?: RequestOptions): ApiPromise&lt;BulkUpdateVendorsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates one or more of existing [Vendor](entity:Vendor) objects as suppliers to a seller.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendors.bulkUpdateVendors({ body });
  // TODO: Handle 'response' of type BulkUpdateVendorsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendors.bulkUpdateVendors({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type BulkUpdateVendorsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[BulkUpdateVendorsRequest](src/models/bulk-update-vendors-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendors.bulkUpdateVendors(request)`

- **OnSuccess**: <code>[BulkUpdateVendorsResponse](src/models/bulk-update-vendors-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.vendors.bulkUpdateVendors(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;BulkUpdateVendorsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[BulkUpdateVendorsResponse](src/models/bulk-update-vendors-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>createVendor(request: Vendors.CreateVendorRequestParams, options?: RequestOptions): ApiPromise&lt;CreateVendorResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a single [Vendor](entity:Vendor) object to represent a supplier to a seller.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendors.createVendor({ body });
  // TODO: Handle 'response' of type CreateVendorResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendors.createVendor({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateVendorResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateVendorRequest](src/models/create-vendor-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendors.createVendor(request)`

- **OnSuccess**: <code>[CreateVendorResponse](src/models/create-vendor-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.vendors.createVendor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateVendorResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateVendorResponse](src/models/create-vendor-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveVendor(request: Vendors.RetrieveVendorRequest, options?: RequestOptions): ApiPromise&lt;RetrieveVendorResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves the vendor of a specified [Vendor](entity:Vendor) ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendors.retrieveVendor({ vendorId });
  // TODO: Handle 'response' of type RetrieveVendorResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendors.retrieveVendor({ vendorId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveVendorResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendorId</code> | <code>string</code> | ID of the [Vendor](entity:Vendor) to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendors.retrieveVendor(request)`

- **OnSuccess**: <code>[RetrieveVendorResponse](src/models/retrieve-vendor-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.vendors.retrieveVendor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveVendorResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveVendorResponse](src/models/retrieve-vendor-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>searchVendors(request: Vendors.SearchVendorsRequestParams, options?: RequestOptions): ApiPromise&lt;SearchVendorsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Searches for vendors using a filter against supported [Vendor](entity:Vendor) properties and a supported sorter.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendors.searchVendors({ body });
  // TODO: Handle 'response' of type SearchVendorsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendors.searchVendors({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type SearchVendorsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[SearchVendorsRequest](src/models/search-vendors-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendors.searchVendors(request)`

- **OnSuccess**: <code>[SearchVendorsResponse](src/models/search-vendors-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.vendors.searchVendors(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;SearchVendorsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[SearchVendorsResponse](src/models/search-vendors-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateVendor(request: Vendors.UpdateVendorRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateVendorResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates an existing [Vendor](entity:Vendor) object as a supplier to a seller.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.vendors.updateVendor({ vendorId, body });
  // TODO: Handle 'response' of type UpdateVendorResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.vendors.updateVendor({ vendorId, body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateVendorResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>vendorId</code> | <code>string</code> | - |
| <code>body</code> | <code>[UpdateVendorRequest](src/models/update-vendor-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.vendors.updateVendor(request)`

- **OnSuccess**: <code>[UpdateVendorResponse](src/models/update-vendor-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.vendors.updateVendor(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateVendorResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateVendorResponse](src/models/update-vendor-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

## WebhookSubscriptions

> Source: [WebhookSubscriptions](src/resources/webhook-subscriptions.ts)

<details>
<summary><code>createWebhookSubscription(request: WebhookSubscriptions.CreateWebhookSubscriptionRequestParams, options?: RequestOptions): ApiPromise&lt;CreateWebhookSubscriptionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Creates a webhook subscription.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhookSubscriptions.createWebhookSubscription({ body });
  // TODO: Handle 'response' of type CreateWebhookSubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookSubscriptions.createWebhookSubscription({ body }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type CreateWebhookSubscriptionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>body</code> | <code>[CreateWebhookSubscriptionRequest](src/models/create-webhook-subscription-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookSubscriptions.createWebhookSubscription(request)`

- **OnSuccess**: <code>[CreateWebhookSubscriptionResponse](src/models/create-webhook-subscription-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.webhookSubscriptions.createWebhookSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;CreateWebhookSubscriptionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[CreateWebhookSubscriptionResponse](src/models/create-webhook-subscription-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>deleteWebhookSubscription(request: WebhookSubscriptions.DeleteWebhookSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;DeleteWebhookSubscriptionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Deletes a webhook subscription.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhookSubscriptions.deleteWebhookSubscription({ subscriptionId });
  // TODO: Handle 'response' of type DeleteWebhookSubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookSubscriptions.deleteWebhookSubscription({ subscriptionId }).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type DeleteWebhookSubscriptionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | [REQUIRED] The ID of the [Subscription](entity:WebhookSubscription) to delete. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookSubscriptions.deleteWebhookSubscription(request)`

- **OnSuccess**: <code>[DeleteWebhookSubscriptionResponse](src/models/delete-webhook-subscription-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.webhookSubscriptions.deleteWebhookSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;DeleteWebhookSubscriptionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[DeleteWebhookSubscriptionResponse](src/models/delete-webhook-subscription-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWebhookEventTypes(request: WebhookSubscriptions.ListWebhookEventTypesRequest, options?: RequestOptions): ApiPromise&lt;ListWebhookEventTypesResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all webhook event types that can be subscribed to.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhookSubscriptions.listWebhookEventTypes();
  // TODO: Handle 'response' of type ListWebhookEventTypesResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookSubscriptions.listWebhookEventTypes().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListWebhookEventTypesResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>apiVersion?</code> | <code>string</code> | The API version for which to list event types. Setting this field overrides the default version used by the application. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookSubscriptions.listWebhookEventTypes(request)`

- **OnSuccess**: <code>[ListWebhookEventTypesResponse](src/models/list-webhook-event-types-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.webhookSubscriptions.listWebhookEventTypes(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListWebhookEventTypesResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListWebhookEventTypesResponse](src/models/list-webhook-event-types-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>listWebhookSubscriptions(request: WebhookSubscriptions.ListWebhookSubscriptionsRequest, options?: RequestOptions): ApiPromise&lt;ListWebhookSubscriptionsResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Lists all webhook subscriptions owned by your application.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhookSubscriptions.listWebhookSubscriptions();
  // TODO: Handle 'response' of type ListWebhookSubscriptionsResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookSubscriptions.listWebhookSubscriptions().asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type ListWebhookSubscriptionsResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>cursor?</code> | <code>string</code> | A pagination cursor returned by a previous call to this endpoint.<br>Provide this to retrieve the next set of results for your original query.<br><br>For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination). |
| <code>includeDisabled?</code> | <code>boolean</code> | Includes disabled [Subscription](entity:WebhookSubscription)s.<br>By default, all enabled [Subscription](entity:WebhookSubscription)s are returned.<br>**Default**: false |
| <code>sortOrder?</code> | <code>[SortOrder](src/models/sort-order.ts)</code> | Sorts the returned list by when the [Subscription](entity:WebhookSubscription) was created with the specified order.<br>This field defaults to ASC. |
| <code>limit?</code> | <code>number</code> | The maximum number of results to be returned in a single page.<br>It is possible to receive fewer results than the specified limit on a given page.<br>The default value of 100 is also the maximum allowed value.<br><br>Default: 100 |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookSubscriptions.listWebhookSubscriptions(request)`

- **OnSuccess**: <code>[ListWebhookSubscriptionsResponse](src/models/list-webhook-subscriptions-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.webhookSubscriptions.listWebhookSubscriptions(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;ListWebhookSubscriptionsResponse, ResponseError&gt;</code>, with `result.value` of type <code>[ListWebhookSubscriptionsResponse](src/models/list-webhook-subscriptions-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>retrieveWebhookSubscription(request: WebhookSubscriptions.RetrieveWebhookSubscriptionRequest, options?: RequestOptions): ApiPromise&lt;RetrieveWebhookSubscriptionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Retrieves a webhook subscription identified by its ID.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhookSubscriptions.retrieveWebhookSubscription({ subscriptionId });
  // TODO: Handle 'response' of type RetrieveWebhookSubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookSubscriptions.retrieveWebhookSubscription({
  subscriptionId,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type RetrieveWebhookSubscriptionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | [REQUIRED] The ID of the [Subscription](entity:WebhookSubscription) to retrieve. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookSubscriptions.retrieveWebhookSubscription(request)`

- **OnSuccess**: <code>[RetrieveWebhookSubscriptionResponse](src/models/retrieve-webhook-subscription-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.webhookSubscriptions.retrieveWebhookSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;RetrieveWebhookSubscriptionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[RetrieveWebhookSubscriptionResponse](src/models/retrieve-webhook-subscription-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>testWebhookSubscription(request: WebhookSubscriptions.TestWebhookSubscriptionRequestParams, options?: RequestOptions): ApiPromise&lt;TestWebhookSubscriptionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Tests a webhook subscription by sending a test event to the notification URL.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhookSubscriptions.testWebhookSubscription({ subscriptionId, body });
  // TODO: Handle 'response' of type TestWebhookSubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookSubscriptions.testWebhookSubscription({
  subscriptionId,
  body,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type TestWebhookSubscriptionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | [REQUIRED] The ID of the [Subscription](entity:WebhookSubscription) to test. |
| <code>body</code> | <code>[TestWebhookSubscriptionRequest](src/models/test-webhook-subscription-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookSubscriptions.testWebhookSubscription(request)`

- **OnSuccess**: <code>[TestWebhookSubscriptionResponse](src/models/test-webhook-subscription-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.webhookSubscriptions.testWebhookSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;TestWebhookSubscriptionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[TestWebhookSubscriptionResponse](src/models/test-webhook-subscription-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateWebhookSubscription(request: WebhookSubscriptions.UpdateWebhookSubscriptionRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateWebhookSubscriptionResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a webhook subscription.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhookSubscriptions.updateWebhookSubscription({ subscriptionId, body });
  // TODO: Handle 'response' of type UpdateWebhookSubscriptionResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookSubscriptions.updateWebhookSubscription({
  subscriptionId,
  body,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateWebhookSubscriptionResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | [REQUIRED] The ID of the [Subscription](entity:WebhookSubscription) to update. |
| <code>body</code> | <code>[UpdateWebhookSubscriptionRequest](src/models/update-webhook-subscription-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookSubscriptions.updateWebhookSubscription(request)`

- **OnSuccess**: <code>[UpdateWebhookSubscriptionResponse](src/models/update-webhook-subscription-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.webhookSubscriptions.updateWebhookSubscription(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateWebhookSubscriptionResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateWebhookSubscriptionResponse](src/models/update-webhook-subscription-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

<details>
<summary><code>updateWebhookSubscriptionSignatureKey(request: WebhookSubscriptions.UpdateWebhookSubscriptionSignatureKeyRequestParams, options?: RequestOptions): ApiPromise&lt;UpdateWebhookSubscriptionSignatureKeyResponse, ResponseError&gt;</code></summary>

<dl>
<dd>

### Description

<dl>
<dd>

Updates a webhook subscription by replacing the existing signature key with a new one.

</dd>
</dl>

### Direct Usage

<dl>
<dd>

```ts
try {
  const response = await client.webhookSubscriptions.updateWebhookSubscriptionSignatureKey({
    subscriptionId,
    body,
  });
  // TODO: Handle 'response' of type UpdateWebhookSubscriptionSignatureKeyResponse
} catch (err) {
  // TODO: Handle 'err' of type ResponseError, where 'err.payload' is of type Undeclared
}
```

</dd>
</dl>

### Usage as ApiResult

<dl>
<dd>

```ts
const result = await client.webhookSubscriptions.updateWebhookSubscriptionSignatureKey({
  subscriptionId,
  body,
}).asApiResult();
// TODO: Use 'result.status' and 'result.headers' to read the raw response status and headers
if (result.ok) {
  // TODO: Use 'result.value' of type UpdateWebhookSubscriptionSignatureKeyResponse
} else {
  // TODO: Use 'result.errorMessage' and 'result.error' of type Undeclared
}
```

</dd>
</dl>

### Parameters

<dl>
<dd>

| Name | Type | Description |
| --- | --- | --- |
| <code>subscriptionId</code> | <code>string</code> | [REQUIRED] The ID of the [Subscription](entity:WebhookSubscription) to update. |
| <code>body</code> | <code>[UpdateWebhookSubscriptionSignatureKeyRequest](src/models/update-webhook-subscription-signature-key-request.ts)</code> | An object containing the fields to POST for the request.<br><br>See the corresponding object definition for field details. |

</dd>
</dl>

### Response

<dl>
<dd>

**Direct**: `await client.webhookSubscriptions.updateWebhookSubscriptionSignatureKey(request)`

- **OnSuccess**: <code>[UpdateWebhookSubscriptionSignatureKeyResponse](src/models/update-webhook-subscription-signature-key-response.ts)</code>
- **OnError**: throws <code>[ResponseError](src/core/response-error.ts)</code>, with `err.payload` of type <code>[Undeclared](src/core/response-error.ts)</code>

**As ApiResult**: `await client.webhookSubscriptions.updateWebhookSubscriptionSignatureKey(request).asApiResult()`

- **OnSuccess**: <code>[ApiResult](src/core/api-promise.ts)&lt;UpdateWebhookSubscriptionSignatureKeyResponse, ResponseError&gt;</code>, with `result.value` of type <code>[UpdateWebhookSubscriptionSignatureKeyResponse](src/models/update-webhook-subscription-signature-key-response.ts)</code>
- **OnError**: `result.error` of type <code>[Undeclared](src/core/response-error.ts)</code>, with `result.errorMessage`

**Always thrown**: <code>[SquareError](src/core/errors.ts)</code>

</dd>
</dl>

</dd>
</dl>

</details>

