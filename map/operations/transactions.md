<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transactions — operations

Accessor: `client.transactions` · Source: `src/resources/transactions.ts` · 4 operations · Request types: namespace `Transactions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### captureTransaction

- **Signature**: `captureTransaction(request: Transactions.CaptureTransactionRequest, options?: RequestOptions): ApiPromise<CaptureTransactionResponse, ResponseError>`
- **Wire**: `POST /v2/locations/{location_id}/transactions/{transaction_id}/capture`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CaptureTransactionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Transactions.CaptureTransactionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locationId` | `path` | `location_id` | `string` | yes |
| `transactionId` | `path` | `transaction_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CaptureTransactionResponse` | `captureTransactionResponseSchema` | `src/models/capture-transaction-response.ts` |

### listTransactions

- **Signature**: `listTransactions(request: Transactions.ListTransactionsRequest, options?: RequestOptions): ApiPromise<ListTransactionsResponse, ResponseError>`
- **Wire**: `GET /v2/locations/{location_id}/transactions`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListTransactionsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Transactions.ListTransactionsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locationId` | `path` | `location_id` | `string` | yes |
| `beginTime` | `query` | `begin_time` | `string` | no |
| `endTime` | `query` | `end_time` | `string` | no |
| `sortOrder` | `query` | `sort_order` | `SortOrder` | no |
| `cursor` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `ListTransactionsResponse` | `listTransactionsResponseSchema` | `src/models/list-transactions-response.ts` |

### retrieveTransaction

- **Signature**: `retrieveTransaction(request: Transactions.RetrieveTransactionRequest, options?: RequestOptions): ApiPromise<RetrieveTransactionResponse, ResponseError>`
- **Wire**: `GET /v2/locations/{location_id}/transactions/{transaction_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveTransactionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Transactions.RetrieveTransactionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locationId` | `path` | `location_id` | `string` | yes |
| `transactionId` | `path` | `transaction_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveTransactionResponse` | `retrieveTransactionResponseSchema` | `src/models/retrieve-transaction-response.ts` |

### voidTransaction

- **Signature**: `voidTransaction(request: Transactions.VoidTransactionRequest, options?: RequestOptions): ApiPromise<VoidTransactionResponse, ResponseError>`
- **Wire**: `POST /v2/locations/{location_id}/transactions/{transaction_id}/void`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VoidTransactionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Transactions.VoidTransactionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locationId` | `path` | `location_id` | `string` | yes |
| `transactionId` | `path` | `transaction_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VoidTransactionResponse` | `voidTransactionResponseSchema` | `src/models/void-transaction-response.ts` |

