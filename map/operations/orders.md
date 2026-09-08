<!-- Generated file — do not edit; regenerated with the SDK. -->

# Orders — operations

Accessor: `client.orders` · Source: `src/resources/orders.ts` · 8 operations · Request types: namespace `Orders`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### batchRetrieveOrders

- **Signature**: `batchRetrieveOrders(request: Orders.BatchRetrieveOrdersRequestParams, options?: RequestOptions): ApiPromise<BatchRetrieveOrdersResponse, ResponseError>`
- **Wire**: `POST /v2/orders/batch-retrieve`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BatchRetrieveOrdersResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Orders.BatchRetrieveOrdersRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BatchRetrieveOrdersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchRetrieveOrdersRequest` | `batchRetrieveOrdersRequestSchema` | `src/models/batch-retrieve-orders-request.ts` |
| `BatchRetrieveOrdersResponse` | `batchRetrieveOrdersResponseSchema` | `src/models/batch-retrieve-orders-response.ts` |

### calculateOrder

- **Signature**: `calculateOrder(request: Orders.CalculateOrderRequestParams, options?: RequestOptions): ApiPromise<CalculateOrderResponse, ResponseError>`
- **Wire**: `POST /v2/orders/calculate`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CalculateOrderResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Orders.CalculateOrderRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CalculateOrderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CalculateOrderRequest` | `calculateOrderRequestSchema` | `src/models/calculate-order-request.ts` |
| `CalculateOrderResponse` | `calculateOrderResponseSchema` | `src/models/calculate-order-response.ts` |

### cloneOrder

- **Signature**: `cloneOrder(request: Orders.CloneOrderRequestParams, options?: RequestOptions): ApiPromise<CloneOrderResponse, ResponseError>`
- **Wire**: `POST /v2/orders/clone`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CloneOrderResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Orders.CloneOrderRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CloneOrderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CloneOrderRequest` | `cloneOrderRequestSchema` | `src/models/clone-order-request.ts` |
| `CloneOrderResponse` | `cloneOrderResponseSchema` | `src/models/clone-order-response.ts` |

### createOrder

- **Signature**: `createOrder(request: Orders.CreateOrderRequestParams, options?: RequestOptions): ApiPromise<CreateOrderResponse, ResponseError>`
- **Wire**: `POST /v2/orders`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateOrderResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Orders.CreateOrderRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateOrderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateOrderRequest` | `createOrderRequestSchema` | `src/models/create-order-request.ts` |
| `CreateOrderResponse` | `createOrderResponseSchema` | `src/models/create-order-response.ts` |

### payOrder

- **Signature**: `payOrder(request: Orders.PayOrderRequestParams, options?: RequestOptions): ApiPromise<PayOrderResponse, ResponseError>`
- **Wire**: `POST /v2/orders/{order_id}/pay`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `PayOrderResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Orders.PayOrderRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orderId` | `path` | `order_id` | `string` | yes |
| `body` | `body` | — | `PayOrderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PayOrderRequest` | `payOrderRequestSchema` | `src/models/pay-order-request.ts` |
| `PayOrderResponse` | `payOrderResponseSchema` | `src/models/pay-order-response.ts` |

### retrieveOrder

- **Signature**: `retrieveOrder(request: Orders.RetrieveOrderRequest, options?: RequestOptions): ApiPromise<RetrieveOrderResponse, ResponseError>`
- **Wire**: `GET /v2/orders/{order_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveOrderResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Orders.RetrieveOrderRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orderId` | `path` | `order_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveOrderResponse` | `retrieveOrderResponseSchema` | `src/models/retrieve-order-response.ts` |

### searchOrders

- **Signature**: `searchOrders(request: Orders.SearchOrdersRequestParams, options?: RequestOptions): ApiPromise<SearchOrdersResponse, ResponseError>`
- **Wire**: `POST /v2/orders/search`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `SearchOrdersResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Orders.SearchOrdersRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchOrdersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchOrdersRequest` | `searchOrdersRequestSchema` | `src/models/search-orders-request.ts` |
| `SearchOrdersResponse` | `searchOrdersResponseSchema` | `src/models/search-orders-response.ts` |

### updateOrder

- **Signature**: `updateOrder(request: Orders.UpdateOrderRequestParams, options?: RequestOptions): ApiPromise<UpdateOrderResponse, ResponseError>`
- **Wire**: `PUT /v2/orders/{order_id}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpdateOrderResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Orders.UpdateOrderRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orderId` | `path` | `order_id` | `string` | yes |
| `body` | `body` | — | `UpdateOrderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateOrderRequest` | `updateOrderRequestSchema` | `src/models/update-order-request.ts` |
| `UpdateOrderResponse` | `updateOrderResponseSchema` | `src/models/update-order-response.ts` |

