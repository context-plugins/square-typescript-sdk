<!-- Generated file — do not edit; regenerated with the SDK. -->

# Customers — operations

Accessor: `client.customers` · Source: `src/resources/customers.ts` · 14 operations · Request types: namespace `Customers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### addGroupToCustomer

- **Signature**: `addGroupToCustomer(request: Customers.AddGroupToCustomerRequest, options?: RequestOptions): ApiPromise<AddGroupToCustomerResponse, ApiError>`
- **Wire**: `PUT /v2/customers/{customer_id}/groups/{group_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `AddGroupToCustomerResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.AddGroupToCustomerRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customer_id` | `string` | yes |
| `groupId` | `path` | `group_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AddGroupToCustomerResponse` | `addGroupToCustomerResponseSchema` | `src/models/add-group-to-customer-response.ts` |

### bulkCreateCustomers

- **Signature**: `bulkCreateCustomers(request: Customers.BulkCreateCustomersRequestParams, options?: RequestOptions): ApiPromise<BulkCreateCustomersResponse, ApiError>`
- **Wire**: `POST /v2/customers/bulk-create`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkCreateCustomersResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.BulkCreateCustomersRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkCreateCustomersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkCreateCustomersRequest` | `bulkCreateCustomersRequestSchema` | `src/models/bulk-create-customers-request.ts` |
| `BulkCreateCustomersResponse` | `bulkCreateCustomersResponseSchema` | `src/models/bulk-create-customers-response.ts` |

### bulkDeleteCustomers

- **Signature**: `bulkDeleteCustomers(request: Customers.BulkDeleteCustomersRequestParams, options?: RequestOptions): ApiPromise<BulkDeleteCustomersResponse, ApiError>`
- **Wire**: `POST /v2/customers/bulk-delete`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkDeleteCustomersResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.BulkDeleteCustomersRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkDeleteCustomersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkDeleteCustomersRequest` | `bulkDeleteCustomersRequestSchema` | `src/models/bulk-delete-customers-request.ts` |
| `BulkDeleteCustomersResponse` | `bulkDeleteCustomersResponseSchema` | `src/models/bulk-delete-customers-response.ts` |

### bulkRetrieveCustomers

- **Signature**: `bulkRetrieveCustomers(request: Customers.BulkRetrieveCustomersRequestParams, options?: RequestOptions): ApiPromise<BulkRetrieveCustomersResponse, ApiError>`
- **Wire**: `POST /v2/customers/bulk-retrieve`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkRetrieveCustomersResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.BulkRetrieveCustomersRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkRetrieveCustomersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkRetrieveCustomersRequest` | `bulkRetrieveCustomersRequestSchema` | `src/models/bulk-retrieve-customers-request.ts` |
| `BulkRetrieveCustomersResponse` | `bulkRetrieveCustomersResponseSchema` | `src/models/bulk-retrieve-customers-response.ts` |

### bulkUpdateCustomers

- **Signature**: `bulkUpdateCustomers(request: Customers.BulkUpdateCustomersRequestParams, options?: RequestOptions): ApiPromise<BulkUpdateCustomersResponse, ApiError>`
- **Wire**: `POST /v2/customers/bulk-update`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkUpdateCustomersResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.BulkUpdateCustomersRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkUpdateCustomersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkUpdateCustomersRequest` | `bulkUpdateCustomersRequestSchema` | `src/models/bulk-update-customers-request.ts` |
| `BulkUpdateCustomersResponse` | `bulkUpdateCustomersResponseSchema` | `src/models/bulk-update-customers-response.ts` |

### createCustomer

- **Signature**: `createCustomer(request: Customers.CreateCustomerRequestParams, options?: RequestOptions): ApiPromise<CreateCustomerResponse, ApiError>`
- **Wire**: `POST /v2/customers`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateCustomerResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.CreateCustomerRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateCustomerRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCustomerRequest` | `createCustomerRequestSchema` | `src/models/create-customer-request.ts` |
| `CreateCustomerResponse` | `createCustomerResponseSchema` | `src/models/create-customer-response.ts` |

### createCustomerCard

- **Signature**: `createCustomerCard(request: Customers.CreateCustomerCardRequestParams, options?: RequestOptions): ApiPromise<CreateCustomerCardResponse, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /v2/customers/{customer_id}/cards`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateCustomerCardResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.CreateCustomerCardRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customer_id` | `string` | yes |
| `body` | `body` | — | `CreateCustomerCardRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCustomerCardRequest` | `createCustomerCardRequestSchema` | `src/models/create-customer-card-request.ts` |
| `CreateCustomerCardResponse` | `createCustomerCardResponseSchema` | `src/models/create-customer-card-response.ts` |

### deleteCustomer

- **Signature**: `deleteCustomer(request: Customers.DeleteCustomerRequest, options?: RequestOptions): ApiPromise<DeleteCustomerResponse, ApiError>`
- **Wire**: `DELETE /v2/customers/{customer_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteCustomerResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.DeleteCustomerRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customer_id` | `string` | yes |
| `version` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteCustomerResponse` | `deleteCustomerResponseSchema` | `src/models/delete-customer-response.ts` |

### deleteCustomerCard

- **Signature**: `deleteCustomerCard(request: Customers.DeleteCustomerCardRequest, options?: RequestOptions): ApiPromise<DeleteCustomerCardResponse, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `DELETE /v2/customers/{customer_id}/cards/{card_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteCustomerCardResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.DeleteCustomerCardRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customer_id` | `string` | yes |
| `cardId` | `path` | `card_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteCustomerCardResponse` | `deleteCustomerCardResponseSchema` | `src/models/delete-customer-card-response.ts` |

### listCustomers

- **Signature**: `listCustomers(request: Customers.ListCustomersRequest, options?: RequestOptions): ApiPromise<ListCustomersResponse, ApiError>`
- **Wire**: `GET /v2/customers`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListCustomersResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.ListCustomersRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `cursor` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | — |
| `sortField` | `query` | `sort_field` | `CustomerSortField` | no | — |
| `sortOrder` | `query` | `sort_order` | `SortOrder` | no | — |
| `count` | `query` | — | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerSortField` | `customerSortFieldSchema` | `src/models/customer-sort-field.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `ListCustomersResponse` | `listCustomersResponseSchema` | `src/models/list-customers-response.ts` |

### removeGroupFromCustomer

- **Signature**: `removeGroupFromCustomer(request: Customers.RemoveGroupFromCustomerRequest, options?: RequestOptions): ApiPromise<RemoveGroupFromCustomerResponse, ApiError>`
- **Wire**: `DELETE /v2/customers/{customer_id}/groups/{group_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RemoveGroupFromCustomerResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.RemoveGroupFromCustomerRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customer_id` | `string` | yes |
| `groupId` | `path` | `group_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RemoveGroupFromCustomerResponse` | `removeGroupFromCustomerResponseSchema` | `src/models/remove-group-from-customer-response.ts` |

### retrieveCustomer

- **Signature**: `retrieveCustomer(request: Customers.RetrieveCustomerRequest, options?: RequestOptions): ApiPromise<RetrieveCustomerResponse, ApiError>`
- **Wire**: `GET /v2/customers/{customer_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveCustomerResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.RetrieveCustomerRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customer_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveCustomerResponse` | `retrieveCustomerResponseSchema` | `src/models/retrieve-customer-response.ts` |

### searchCustomers

- **Signature**: `searchCustomers(request: Customers.SearchCustomersRequestParams, options?: RequestOptions): ApiPromise<SearchCustomersResponse, ApiError>`
- **Wire**: `POST /v2/customers/search`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SearchCustomersResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.SearchCustomersRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchCustomersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchCustomersRequest` | `searchCustomersRequestSchema` | `src/models/search-customers-request.ts` |
| `SearchCustomersResponse` | `searchCustomersResponseSchema` | `src/models/search-customers-response.ts` |

### updateCustomer

- **Signature**: `updateCustomer(request: Customers.UpdateCustomerRequestParams, options?: RequestOptions): ApiPromise<UpdateCustomerResponse, ApiError>`
- **Wire**: `PUT /v2/customers/{customer_id}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateCustomerResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.UpdateCustomerRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customer_id` | `string` | yes |
| `body` | `body` | — | `UpdateCustomerRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCustomerRequest` | `updateCustomerRequestSchema` | `src/models/update-customer-request.ts` |
| `UpdateCustomerResponse` | `updateCustomerResponseSchema` | `src/models/update-customer-response.ts` |

