<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransferOrderApi — operations

Accessor: `client.transferOrderApi` · Source: `src/resources/transfer-order-api.ts` · 8 operations · Request types: namespace `TransferOrderApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### cancelTransferOrder

- **Signature**: `cancelTransferOrder(request: TransferOrderApi.CancelTransferOrderRequestParams, options?: RequestOptions): ApiPromise<CancelTransferOrderResponse, ResponseError>`
- **Wire**: `POST /v2/transfer-orders/{transfer_order_id}/cancel`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CancelTransferOrderResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TransferOrderApi.CancelTransferOrderRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `transferOrderId` | `path` | `transfer_order_id` | `string` | yes |
| `body` | `body` | — | `CancelTransferOrderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelTransferOrderRequest` | `cancelTransferOrderRequestSchema` | `src/models/cancel-transfer-order-request.ts` |
| `CancelTransferOrderResponse` | `cancelTransferOrderResponseSchema` | `src/models/cancel-transfer-order-response.ts` |

### createTransferOrder

- **Signature**: `createTransferOrder(request: TransferOrderApi.CreateTransferOrderRequestParams, options?: RequestOptions): ApiPromise<CreateTransferOrderResponse, ResponseError>`
- **Wire**: `POST /v2/transfer-orders`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateTransferOrderResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TransferOrderApi.CreateTransferOrderRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateTransferOrderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateTransferOrderRequest` | `createTransferOrderRequestSchema` | `src/models/create-transfer-order-request.ts` |
| `CreateTransferOrderResponse` | `createTransferOrderResponseSchema` | `src/models/create-transfer-order-response.ts` |

### deleteTransferOrder

- **Signature**: `deleteTransferOrder(request: TransferOrderApi.DeleteTransferOrderRequest, options?: RequestOptions): ApiPromise<DeleteTransferOrderResponse, ResponseError>`
- **Wire**: `DELETE /v2/transfer-orders/{transfer_order_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeleteTransferOrderResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TransferOrderApi.DeleteTransferOrderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `transferOrderId` | `path` | `transfer_order_id` | `string` | yes |
| `version` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteTransferOrderResponse` | `deleteTransferOrderResponseSchema` | `src/models/delete-transfer-order-response.ts` |

### receiveTransferOrder

- **Signature**: `receiveTransferOrder(request: TransferOrderApi.ReceiveTransferOrderRequestParams, options?: RequestOptions): ApiPromise<ReceiveTransferOrderResponse, ResponseError>`
- **Wire**: `POST /v2/transfer-orders/{transfer_order_id}/receive`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `ReceiveTransferOrderResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TransferOrderApi.ReceiveTransferOrderRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `transferOrderId` | `path` | `transfer_order_id` | `string` | yes |
| `body` | `body` | — | `ReceiveTransferOrderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReceiveTransferOrderRequest` | `receiveTransferOrderRequestSchema` | `src/models/receive-transfer-order-request.ts` |
| `ReceiveTransferOrderResponse` | `receiveTransferOrderResponseSchema` | `src/models/receive-transfer-order-response.ts` |

### retrieveTransferOrder

- **Signature**: `retrieveTransferOrder(request: TransferOrderApi.RetrieveTransferOrderRequest, options?: RequestOptions): ApiPromise<RetrieveTransferOrderResponse, ResponseError>`
- **Wire**: `GET /v2/transfer-orders/{transfer_order_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveTransferOrderResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TransferOrderApi.RetrieveTransferOrderRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `transferOrderId` | `path` | `transfer_order_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveTransferOrderResponse` | `retrieveTransferOrderResponseSchema` | `src/models/retrieve-transfer-order-response.ts` |

### searchTransferOrders

- **Signature**: `searchTransferOrders(request: TransferOrderApi.SearchTransferOrdersRequestParams, options?: RequestOptions): ApiPromise<SearchTransferOrdersResponse, ResponseError>`
- **Wire**: `POST /v2/transfer-orders/search`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `SearchTransferOrdersResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TransferOrderApi.SearchTransferOrdersRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchTransferOrdersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchTransferOrdersRequest` | `searchTransferOrdersRequestSchema` | `src/models/search-transfer-orders-request.ts` |
| `SearchTransferOrdersResponse` | `searchTransferOrdersResponseSchema` | `src/models/search-transfer-orders-response.ts` |

### startTransferOrder

- **Signature**: `startTransferOrder(request: TransferOrderApi.StartTransferOrderRequestParams, options?: RequestOptions): ApiPromise<StartTransferOrderResponse, ResponseError>`
- **Wire**: `POST /v2/transfer-orders/{transfer_order_id}/start`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `StartTransferOrderResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TransferOrderApi.StartTransferOrderRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `transferOrderId` | `path` | `transfer_order_id` | `string` | yes |
| `body` | `body` | — | `StartTransferOrderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StartTransferOrderRequest` | `startTransferOrderRequestSchema` | `src/models/start-transfer-order-request.ts` |
| `StartTransferOrderResponse` | `startTransferOrderResponseSchema` | `src/models/start-transfer-order-response.ts` |

### updateTransferOrder

- **Signature**: `updateTransferOrder(request: TransferOrderApi.UpdateTransferOrderRequestParams, options?: RequestOptions): ApiPromise<UpdateTransferOrderResponse, ResponseError>`
- **Wire**: `PUT /v2/transfer-orders/{transfer_order_id}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpdateTransferOrderResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TransferOrderApi.UpdateTransferOrderRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `transferOrderId` | `path` | `transfer_order_id` | `string` | yes |
| `body` | `body` | — | `UpdateTransferOrderRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateTransferOrderRequest` | `updateTransferOrderRequestSchema` | `src/models/update-transfer-order-request.ts` |
| `UpdateTransferOrderResponse` | `updateTransferOrderResponseSchema` | `src/models/update-transfer-order-response.ts` |

