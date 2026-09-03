<!-- Generated file — do not edit; regenerated with the SDK. -->

# V1Transactions — operations

Accessor: `client.v1Transactions` · Source: `src/resources/v1-transactions.ts` · 3 operations · Request types: namespace `V1Transactions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### v1ListOrders

- **Signature**: `v1ListOrders(request: V1Transactions.V1ListOrdersRequest, options?: RequestOptions): ApiPromise<V1Order[], ResponseError>`
- **Wire**: `GET /v1/{location_id}/orders`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1Order[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `V1Transactions.V1ListOrdersRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locationId` | `path` | `location_id` | `string` | yes |
| `order` | `query` | — | `SortOrder` | no |
| `limit` | `query` | — | `number` | no |
| `batchToken` | `query` | `batch_token` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `V1Order` | `v1OrderSchema` | `src/models/v1-order.ts` |

### v1RetrieveOrder

- **Signature**: `v1RetrieveOrder(request: V1Transactions.V1RetrieveOrderRequest, options?: RequestOptions): ApiPromise<V1Order, ResponseError>`
- **Wire**: `GET /v1/{location_id}/orders/{order_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V1Order`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `V1Transactions.V1RetrieveOrderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locationId` | `path` | `location_id` | `string` | yes |
| `orderId` | `path` | `order_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1Order` | `v1OrderSchema` | `src/models/v1-order.ts` |

### v1UpdateOrder

- **Signature**: `v1UpdateOrder(request: V1Transactions.V1UpdateOrderRequestParams, options?: RequestOptions): ApiPromise<V1Order, ResponseError>`
- **Wire**: `PUT /v1/{location_id}/orders/{order_id}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `V1Order`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `V1Transactions.V1UpdateOrderRequestParams` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locationId` | `path` | `location_id` | `string` | yes |
| `orderId` | `path` | `order_id` | `string` | yes |
| `body` | `body` | — | `V1UpdateOrderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1UpdateOrderRequest` | `v1UpdateOrderRequestSchema` | `src/models/v1-update-order-request.ts` |
| `V1Order` | `v1OrderSchema` | `src/models/v1-order.ts` |

