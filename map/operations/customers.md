<!-- Generated file — do not edit; regenerated with the SDK. -->

# Customers — operations

Accessor: `client.customers` · Source: `src/resources/customers.ts` · 14 operations · Request types: namespace `Customers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### addGroupToCustomer

- **Signature**: `addGroupToCustomer(request: Customers.AddGroupToCustomerRequest, options?: RequestOptions): ApiPromise<AddGroupToCustomerResponse, ResponseError>`
- **Wire**: `PUT /v2/customers/{customer_id}/groups/{group_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AddGroupToCustomerResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.AddGroupToCustomerRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customer_id` | `string` | yes |
| `groupId` | `path` | `group_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AddGroupToCustomerResponse` | `addGroupToCustomerResponseSchema` | `src/models/add-group-to-customer-response.ts` |

### bulkCreateCustomers

- **Signature**: `bulkCreateCustomers(request: Customers.BulkCreateCustomersRequestParams, options?: RequestOptions): ApiPromise<BulkCreateCustomersResponse, ResponseError>`
- **Wire**: `POST /v2/customers/bulk-create`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BulkCreateCustomersResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.BulkCreateCustomersRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkCreateCustomersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkCreateCustomersRequest` | `bulkCreateCustomersRequestSchema` | `src/models/bulk-create-customers-request.ts` |
| `BulkCreateCustomersResponse` | `bulkCreateCustomersResponseSchema` | `src/models/bulk-create-customers-response.ts` |

### bulkDeleteCustomers

- **Signature**: `bulkDeleteCustomers(request: Customers.BulkDeleteCustomersRequestParams, options?: RequestOptions): ApiPromise<BulkDeleteCustomersResponse, ResponseError>`
- **Wire**: `POST /v2/customers/bulk-delete`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BulkDeleteCustomersResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.BulkDeleteCustomersRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkDeleteCustomersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkDeleteCustomersRequest` | `bulkDeleteCustomersRequestSchema` | `src/models/bulk-delete-customers-request.ts` |
| `BulkDeleteCustomersResponse` | `bulkDeleteCustomersResponseSchema` | `src/models/bulk-delete-customers-response.ts` |

### bulkRetrieveCustomers

- **Signature**: `bulkRetrieveCustomers(request: Customers.BulkRetrieveCustomersRequestParams, options?: RequestOptions): ApiPromise<BulkRetrieveCustomersResponse, ResponseError>`
- **Wire**: `POST /v2/customers/bulk-retrieve`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BulkRetrieveCustomersResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.BulkRetrieveCustomersRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkRetrieveCustomersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkRetrieveCustomersRequest` | `bulkRetrieveCustomersRequestSchema` | `src/models/bulk-retrieve-customers-request.ts` |
| `BulkRetrieveCustomersResponse` | `bulkRetrieveCustomersResponseSchema` | `src/models/bulk-retrieve-customers-response.ts` |

### bulkUpdateCustomers

- **Signature**: `bulkUpdateCustomers(request: Customers.BulkUpdateCustomersRequestParams, options?: RequestOptions): ApiPromise<BulkUpdateCustomersResponse, ResponseError>`
- **Wire**: `POST /v2/customers/bulk-update`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BulkUpdateCustomersResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.BulkUpdateCustomersRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkUpdateCustomersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkUpdateCustomersRequest` | `bulkUpdateCustomersRequestSchema` | `src/models/bulk-update-customers-request.ts` |
| `BulkUpdateCustomersResponse` | `bulkUpdateCustomersResponseSchema` | `src/models/bulk-update-customers-response.ts` |

### createCustomer

- **Signature**: `createCustomer(request: Customers.CreateCustomerRequestParams, options?: RequestOptions): ApiPromise<CreateCustomerResponse, ResponseError>`
- **Wire**: `POST /v2/customers`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateCustomerResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.CreateCustomerRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateCustomerRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCustomerRequest` | `createCustomerRequestSchema` | `src/models/create-customer-request.ts` |
| `CreateCustomerResponse` | `createCustomerResponseSchema` | `src/models/create-customer-response.ts` |

### createCustomerCard

- **Signature**: `createCustomerCard(request: Customers.CreateCustomerCardRequestParams, options?: RequestOptions): ApiPromise<CreateCustomerCardResponse, ResponseError>`
- **Wire**: `POST /v2/customers/{customer_id}/cards`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateCustomerCardResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

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

- **Signature**: `deleteCustomer(request: Customers.DeleteCustomerRequest, options?: RequestOptions): ApiPromise<DeleteCustomerResponse, ResponseError>`
- **Wire**: `DELETE /v2/customers/{customer_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeleteCustomerResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.DeleteCustomerRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customer_id` | `string` | yes |
| `version` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteCustomerResponse` | `deleteCustomerResponseSchema` | `src/models/delete-customer-response.ts` |

### deleteCustomerCard

- **Signature**: `deleteCustomerCard(request: Customers.DeleteCustomerCardRequest, options?: RequestOptions): ApiPromise<DeleteCustomerCardResponse, ResponseError>`
- **Wire**: `DELETE /v2/customers/{customer_id}/cards/{card_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeleteCustomerCardResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.DeleteCustomerCardRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customer_id` | `string` | yes |
| `cardId` | `path` | `card_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteCustomerCardResponse` | `deleteCustomerCardResponseSchema` | `src/models/delete-customer-card-response.ts` |

### listCustomers

- **Signature**: `listCustomers(request: Customers.ListCustomersRequest, options?: RequestOptions): ApiPromise<ListCustomersResponse, ResponseError>`
- **Wire**: `GET /v2/customers`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListCustomersResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

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

- **Signature**: `removeGroupFromCustomer(request: Customers.RemoveGroupFromCustomerRequest, options?: RequestOptions): ApiPromise<RemoveGroupFromCustomerResponse, ResponseError>`
- **Wire**: `DELETE /v2/customers/{customer_id}/groups/{group_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RemoveGroupFromCustomerResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.RemoveGroupFromCustomerRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customer_id` | `string` | yes |
| `groupId` | `path` | `group_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RemoveGroupFromCustomerResponse` | `removeGroupFromCustomerResponseSchema` | `src/models/remove-group-from-customer-response.ts` |

### retrieveCustomer

- **Signature**: `retrieveCustomer(request: Customers.RetrieveCustomerRequest, options?: RequestOptions): ApiPromise<RetrieveCustomerResponse, ResponseError>`
- **Wire**: `GET /v2/customers/{customer_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveCustomerResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.RetrieveCustomerRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customer_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveCustomerResponse` | `retrieveCustomerResponseSchema` | `src/models/retrieve-customer-response.ts` |

### searchCustomers

- **Signature**: `searchCustomers(request: Customers.SearchCustomersRequestParams, options?: RequestOptions): ApiPromise<SearchCustomersResponse, ResponseError>`
- **Wire**: `POST /v2/customers/search`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `SearchCustomersResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.SearchCustomersRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchCustomersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchCustomersRequest` | `searchCustomersRequestSchema` | `src/models/search-customers-request.ts` |
| `SearchCustomersResponse` | `searchCustomersResponseSchema` | `src/models/search-customers-response.ts` |

### updateCustomer

- **Signature**: `updateCustomer(request: Customers.UpdateCustomerRequestParams, options?: RequestOptions): ApiPromise<UpdateCustomerResponse, ResponseError>`
- **Wire**: `PUT /v2/customers/{customer_id}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpdateCustomerResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.UpdateCustomerRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customer_id` | `string` | yes |
| `body` | `body` | — | `UpdateCustomerRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCustomerRequest` | `updateCustomerRequestSchema` | `src/models/update-customer-request.ts` |
| `UpdateCustomerResponse` | `updateCustomerResponseSchema` | `src/models/update-customer-response.ts` |

