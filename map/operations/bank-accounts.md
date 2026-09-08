<!-- Generated file — do not edit; regenerated with the SDK. -->

# BankAccounts — operations

Accessor: `client.bankAccounts` · Source: `src/resources/bank-accounts.ts` · 5 operations · Request types: namespace `BankAccounts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createBankAccount

- **Signature**: `createBankAccount(request: BankAccounts.CreateBankAccountRequestParams, options?: RequestOptions): ApiPromise<CreateBankAccountResponse, ResponseError>`
- **Wire**: `POST /v2/bank-accounts`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateBankAccountResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BankAccounts.CreateBankAccountRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateBankAccountRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateBankAccountRequest` | `createBankAccountRequestSchema` | `src/models/create-bank-account-request.ts` |
| `CreateBankAccountResponse` | `createBankAccountResponseSchema` | `src/models/create-bank-account-response.ts` |

### disableBankAccount

- **Signature**: `disableBankAccount(request: BankAccounts.DisableBankAccountRequest, options?: RequestOptions): ApiPromise<DisableBankAccountResponse, ResponseError>`
- **Wire**: `POST /v2/bank-accounts/{bank_account_id}/disable`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DisableBankAccountResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BankAccounts.DisableBankAccountRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `bankAccountId` | `path` | `bank_account_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DisableBankAccountResponse` | `disableBankAccountResponseSchema` | `src/models/disable-bank-account-response.ts` |

### getBankAccount

- **Signature**: `getBankAccount(request: BankAccounts.GetBankAccountRequest, options?: RequestOptions): ApiPromise<GetBankAccountResponse, ResponseError>`
- **Wire**: `GET /v2/bank-accounts/{bank_account_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetBankAccountResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BankAccounts.GetBankAccountRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `bankAccountId` | `path` | `bank_account_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetBankAccountResponse` | `getBankAccountResponseSchema` | `src/models/get-bank-account-response.ts` |

### getBankAccountByV1Id

- **Signature**: `getBankAccountByV1Id(request: BankAccounts.GetBankAccountByV1IdRequest, options?: RequestOptions): ApiPromise<GetBankAccountByV1IdResponse, ResponseError>`
- **Wire**: `GET /v2/bank-accounts/by-v1-id/{v1_bank_account_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetBankAccountByV1IdResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BankAccounts.GetBankAccountByV1IdRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `v1BankAccountId` | `path` | `v1_bank_account_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetBankAccountByV1IdResponse` | `getBankAccountByV1IdResponseSchema` | `src/models/get-bank-account-by-v1-id-response.ts` |

### listBankAccounts

- **Signature**: `listBankAccounts(request: BankAccounts.ListBankAccountsRequest, options?: RequestOptions): ApiPromise<ListBankAccountsResponse, ResponseError>`
- **Wire**: `GET /v2/bank-accounts`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListBankAccountsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BankAccounts.ListBankAccountsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cursor` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `locationId` | `query` | `location_id` | `string` | no |
| `customerId` | `query` | `customer_id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListBankAccountsResponse` | `listBankAccountsResponseSchema` | `src/models/list-bank-accounts-response.ts` |

