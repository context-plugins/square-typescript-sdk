<!-- Generated file — do not edit; regenerated with the SDK. -->

# OrderCustomAttributes — operations

Accessor: `client.orderCustomAttributes` · Source: `src/resources/order-custom-attributes.ts` · 11 operations · Request types: namespace `OrderCustomAttributes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### bulkDeleteOrderCustomAttributes

- **Signature**: `bulkDeleteOrderCustomAttributes(request: OrderCustomAttributes.BulkDeleteOrderCustomAttributesRequestParams, options?: RequestOptions): ApiPromise<BulkDeleteOrderCustomAttributesResponse, ResponseError>`
- **Wire**: `POST /v2/orders/custom-attributes/bulk-delete`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BulkDeleteOrderCustomAttributesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `OrderCustomAttributes.BulkDeleteOrderCustomAttributesRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkDeleteOrderCustomAttributesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkDeleteOrderCustomAttributesRequest` | `bulkDeleteOrderCustomAttributesRequestSchema` | `src/models/bulk-delete-order-custom-attributes-request.ts` |
| `BulkDeleteOrderCustomAttributesResponse` | `bulkDeleteOrderCustomAttributesResponseSchema` | `src/models/bulk-delete-order-custom-attributes-response.ts` |

### bulkUpsertOrderCustomAttributes

- **Signature**: `bulkUpsertOrderCustomAttributes(request: OrderCustomAttributes.BulkUpsertOrderCustomAttributesRequestParams, options?: RequestOptions): ApiPromise<BulkUpsertOrderCustomAttributesResponse, ResponseError>`
- **Wire**: `POST /v2/orders/custom-attributes/bulk-upsert`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BulkUpsertOrderCustomAttributesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `OrderCustomAttributes.BulkUpsertOrderCustomAttributesRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkUpsertOrderCustomAttributesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkUpsertOrderCustomAttributesRequest` | `bulkUpsertOrderCustomAttributesRequestSchema` | `src/models/bulk-upsert-order-custom-attributes-request.ts` |
| `BulkUpsertOrderCustomAttributesResponse` | `bulkUpsertOrderCustomAttributesResponseSchema` | `src/models/bulk-upsert-order-custom-attributes-response.ts` |

### createOrderCustomAttributeDefinition

- **Signature**: `createOrderCustomAttributeDefinition(request: OrderCustomAttributes.CreateOrderCustomAttributeDefinitionRequestParams, options?: RequestOptions): ApiPromise<CreateOrderCustomAttributeDefinitionResponse, ResponseError>`
- **Wire**: `POST /v2/orders/custom-attribute-definitions`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateOrderCustomAttributeDefinitionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `OrderCustomAttributes.CreateOrderCustomAttributeDefinitionRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateOrderCustomAttributeDefinitionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateOrderCustomAttributeDefinitionRequest` | `createOrderCustomAttributeDefinitionRequestSchema` | `src/models/create-order-custom-attribute-definition-request.ts` |
| `CreateOrderCustomAttributeDefinitionResponse` | `createOrderCustomAttributeDefinitionResponseSchema` | `src/models/create-order-custom-attribute-definition-response.ts` |

### deleteOrderCustomAttribute

- **Signature**: `deleteOrderCustomAttribute(request: OrderCustomAttributes.DeleteOrderCustomAttributeRequest, options?: RequestOptions): ApiPromise<DeleteOrderCustomAttributeResponse, ResponseError>`
- **Wire**: `DELETE /v2/orders/{order_id}/custom-attributes/{custom_attribute_key}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeleteOrderCustomAttributeResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `OrderCustomAttributes.DeleteOrderCustomAttributeRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orderId` | `path` | `order_id` | `string` | yes |
| `customAttributeKey` | `path` | `custom_attribute_key` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteOrderCustomAttributeResponse` | `deleteOrderCustomAttributeResponseSchema` | `src/models/delete-order-custom-attribute-response.ts` |

### deleteOrderCustomAttributeDefinition

- **Signature**: `deleteOrderCustomAttributeDefinition(request: OrderCustomAttributes.DeleteOrderCustomAttributeDefinitionRequest, options?: RequestOptions): ApiPromise<DeleteOrderCustomAttributeDefinitionResponse, ResponseError>`
- **Wire**: `DELETE /v2/orders/custom-attribute-definitions/{key}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeleteOrderCustomAttributeDefinitionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `OrderCustomAttributes.DeleteOrderCustomAttributeDefinitionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteOrderCustomAttributeDefinitionResponse` | `deleteOrderCustomAttributeDefinitionResponseSchema` | `src/models/delete-order-custom-attribute-definition-response.ts` |

### listOrderCustomAttributeDefinitions

- **Signature**: `listOrderCustomAttributeDefinitions(request: OrderCustomAttributes.ListOrderCustomAttributeDefinitionsRequest, options?: RequestOptions): ApiPromise<ListOrderCustomAttributeDefinitionsResponse, ResponseError>`
- **Wire**: `GET /v2/orders/custom-attribute-definitions`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListOrderCustomAttributeDefinitionsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `OrderCustomAttributes.ListOrderCustomAttributeDefinitionsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `visibilityFilter` | `query` | `visibility_filter` | `VisibilityFilter` | no |
| `cursor` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VisibilityFilter` | `visibilityFilterSchema` | `src/models/visibility-filter.ts` |
| `ListOrderCustomAttributeDefinitionsResponse` | `listOrderCustomAttributeDefinitionsResponseSchema` | `src/models/list-order-custom-attribute-definitions-response.ts` |

### listOrderCustomAttributes

- **Signature**: `listOrderCustomAttributes(request: OrderCustomAttributes.ListOrderCustomAttributesRequest, options?: RequestOptions): ApiPromise<ListOrderCustomAttributesResponse, ResponseError>`
- **Wire**: `GET /v2/orders/{order_id}/custom-attributes`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListOrderCustomAttributesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `OrderCustomAttributes.ListOrderCustomAttributesRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `orderId` | `path` | `order_id` | `string` | yes | — |
| `visibilityFilter` | `query` | `visibility_filter` | `VisibilityFilter` | no | — |
| `cursor` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | — |
| `withDefinitions` | `query` | `with_definitions` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `VisibilityFilter` | `visibilityFilterSchema` | `src/models/visibility-filter.ts` |
| `ListOrderCustomAttributesResponse` | `listOrderCustomAttributesResponseSchema` | `src/models/list-order-custom-attributes-response.ts` |

### retrieveOrderCustomAttribute

- **Signature**: `retrieveOrderCustomAttribute(request: OrderCustomAttributes.RetrieveOrderCustomAttributeRequest, options?: RequestOptions): ApiPromise<RetrieveOrderCustomAttributeResponse, ResponseError>`
- **Wire**: `GET /v2/orders/{order_id}/custom-attributes/{custom_attribute_key}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveOrderCustomAttributeResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `OrderCustomAttributes.RetrieveOrderCustomAttributeRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `orderId` | `path` | `order_id` | `string` | yes | — |
| `customAttributeKey` | `path` | `custom_attribute_key` | `string` | yes | — |
| `version` | `query` | — | `number` | no | — |
| `withDefinition` | `query` | `with_definition` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveOrderCustomAttributeResponse` | `retrieveOrderCustomAttributeResponseSchema` | `src/models/retrieve-order-custom-attribute-response.ts` |

### retrieveOrderCustomAttributeDefinition

- **Signature**: `retrieveOrderCustomAttributeDefinition(request: OrderCustomAttributes.RetrieveOrderCustomAttributeDefinitionRequest, options?: RequestOptions): ApiPromise<RetrieveOrderCustomAttributeDefinitionResponse, ResponseError>`
- **Wire**: `GET /v2/orders/custom-attribute-definitions/{key}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveOrderCustomAttributeDefinitionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `OrderCustomAttributes.RetrieveOrderCustomAttributeDefinitionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `version` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveOrderCustomAttributeDefinitionResponse` | `retrieveOrderCustomAttributeDefinitionResponseSchema` | `src/models/retrieve-order-custom-attribute-definition-response.ts` |

### updateOrderCustomAttributeDefinition

- **Signature**: `updateOrderCustomAttributeDefinition(request: OrderCustomAttributes.UpdateOrderCustomAttributeDefinitionRequestParams, options?: RequestOptions): ApiPromise<UpdateOrderCustomAttributeDefinitionResponse, ResponseError>`
- **Wire**: `PUT /v2/orders/custom-attribute-definitions/{key}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpdateOrderCustomAttributeDefinitionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `OrderCustomAttributes.UpdateOrderCustomAttributeDefinitionRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `body` | `body` | `UpdateOrderCustomAttributeDefinitionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateOrderCustomAttributeDefinitionRequest` | `updateOrderCustomAttributeDefinitionRequestSchema` | `src/models/update-order-custom-attribute-definition-request.ts` |
| `UpdateOrderCustomAttributeDefinitionResponse` | `updateOrderCustomAttributeDefinitionResponseSchema` | `src/models/update-order-custom-attribute-definition-response.ts` |

### upsertOrderCustomAttribute

- **Signature**: `upsertOrderCustomAttribute(request: OrderCustomAttributes.UpsertOrderCustomAttributeRequestParams, options?: RequestOptions): ApiPromise<UpsertOrderCustomAttributeResponse, ResponseError>`
- **Wire**: `POST /v2/orders/{order_id}/custom-attributes/{custom_attribute_key}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpsertOrderCustomAttributeResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `OrderCustomAttributes.UpsertOrderCustomAttributeRequestParams` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `orderId` | `path` | `order_id` | `string` | yes |
| `customAttributeKey` | `path` | `custom_attribute_key` | `string` | yes |
| `body` | `body` | — | `UpsertOrderCustomAttributeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpsertOrderCustomAttributeRequest` | `upsertOrderCustomAttributeRequestSchema` | `src/models/upsert-order-custom-attribute-request.ts` |
| `UpsertOrderCustomAttributeResponse` | `upsertOrderCustomAttributeResponseSchema` | `src/models/upsert-order-custom-attribute-response.ts` |

