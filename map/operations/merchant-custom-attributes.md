<!-- Generated file — do not edit; regenerated with the SDK. -->

# MerchantCustomAttributes — operations

Accessor: `client.merchantCustomAttributes` · Source: `src/resources/merchant-custom-attributes.ts` · 11 operations · Request types: namespace `MerchantCustomAttributes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### bulkDeleteMerchantCustomAttributes

- **Signature**: `bulkDeleteMerchantCustomAttributes(request: MerchantCustomAttributes.BulkDeleteMerchantCustomAttributesRequestParams, options?: RequestOptions): ApiPromise<BulkDeleteMerchantCustomAttributesResponse, ResponseError>`
- **Wire**: `POST /v2/merchants/custom-attributes/bulk-delete`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BulkDeleteMerchantCustomAttributesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MerchantCustomAttributes.BulkDeleteMerchantCustomAttributesRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkDeleteMerchantCustomAttributesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkDeleteMerchantCustomAttributesRequest` | `bulkDeleteMerchantCustomAttributesRequestSchema` | `src/models/bulk-delete-merchant-custom-attributes-request.ts` |
| `BulkDeleteMerchantCustomAttributesResponse` | `bulkDeleteMerchantCustomAttributesResponseSchema` | `src/models/bulk-delete-merchant-custom-attributes-response.ts` |

### bulkUpsertMerchantCustomAttributes

- **Signature**: `bulkUpsertMerchantCustomAttributes(request: MerchantCustomAttributes.BulkUpsertMerchantCustomAttributesRequestParams, options?: RequestOptions): ApiPromise<BulkUpsertMerchantCustomAttributesResponse, ResponseError>`
- **Wire**: `POST /v2/merchants/custom-attributes/bulk-upsert`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BulkUpsertMerchantCustomAttributesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MerchantCustomAttributes.BulkUpsertMerchantCustomAttributesRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkUpsertMerchantCustomAttributesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkUpsertMerchantCustomAttributesRequest` | `bulkUpsertMerchantCustomAttributesRequestSchema` | `src/models/bulk-upsert-merchant-custom-attributes-request.ts` |
| `BulkUpsertMerchantCustomAttributesResponse` | `bulkUpsertMerchantCustomAttributesResponseSchema` | `src/models/bulk-upsert-merchant-custom-attributes-response.ts` |

### createMerchantCustomAttributeDefinition

- **Signature**: `createMerchantCustomAttributeDefinition(request: MerchantCustomAttributes.CreateMerchantCustomAttributeDefinitionRequestParams, options?: RequestOptions): ApiPromise<CreateMerchantCustomAttributeDefinitionResponse, ResponseError>`
- **Wire**: `POST /v2/merchants/custom-attribute-definitions`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateMerchantCustomAttributeDefinitionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MerchantCustomAttributes.CreateMerchantCustomAttributeDefinitionRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateMerchantCustomAttributeDefinitionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateMerchantCustomAttributeDefinitionRequest` | `createMerchantCustomAttributeDefinitionRequestSchema` | `src/models/create-merchant-custom-attribute-definition-request.ts` |
| `CreateMerchantCustomAttributeDefinitionResponse` | `createMerchantCustomAttributeDefinitionResponseSchema` | `src/models/create-merchant-custom-attribute-definition-response.ts` |

### deleteMerchantCustomAttribute

- **Signature**: `deleteMerchantCustomAttribute(request: MerchantCustomAttributes.DeleteMerchantCustomAttributeRequest, options?: RequestOptions): ApiPromise<DeleteMerchantCustomAttributeResponse, ResponseError>`
- **Wire**: `DELETE /v2/merchants/{merchant_id}/custom-attributes/{key}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeleteMerchantCustomAttributeResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MerchantCustomAttributes.DeleteMerchantCustomAttributeRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `merchantId` | `path` | `merchant_id` | `string` | yes |
| `key` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteMerchantCustomAttributeResponse` | `deleteMerchantCustomAttributeResponseSchema` | `src/models/delete-merchant-custom-attribute-response.ts` |

### deleteMerchantCustomAttributeDefinition

- **Signature**: `deleteMerchantCustomAttributeDefinition(request: MerchantCustomAttributes.DeleteMerchantCustomAttributeDefinitionRequest, options?: RequestOptions): ApiPromise<DeleteMerchantCustomAttributeDefinitionResponse, ResponseError>`
- **Wire**: `DELETE /v2/merchants/custom-attribute-definitions/{key}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeleteMerchantCustomAttributeDefinitionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MerchantCustomAttributes.DeleteMerchantCustomAttributeDefinitionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteMerchantCustomAttributeDefinitionResponse` | `deleteMerchantCustomAttributeDefinitionResponseSchema` | `src/models/delete-merchant-custom-attribute-definition-response.ts` |

### listMerchantCustomAttributeDefinitions

- **Signature**: `listMerchantCustomAttributeDefinitions(request: MerchantCustomAttributes.ListMerchantCustomAttributeDefinitionsRequest, options?: RequestOptions): ApiPromise<ListMerchantCustomAttributeDefinitionsResponse, ResponseError>`
- **Wire**: `GET /v2/merchants/custom-attribute-definitions`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListMerchantCustomAttributeDefinitionsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MerchantCustomAttributes.ListMerchantCustomAttributeDefinitionsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `visibilityFilter` | `query` | `visibility_filter` | `VisibilityFilter` | no |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VisibilityFilter` | `visibilityFilterSchema` | `src/models/visibility-filter.ts` |
| `ListMerchantCustomAttributeDefinitionsResponse` | `listMerchantCustomAttributeDefinitionsResponseSchema` | `src/models/list-merchant-custom-attribute-definitions-response.ts` |

### listMerchantCustomAttributes

- **Signature**: `listMerchantCustomAttributes(request: MerchantCustomAttributes.ListMerchantCustomAttributesRequest, options?: RequestOptions): ApiPromise<ListMerchantCustomAttributesResponse, ResponseError>`
- **Wire**: `GET /v2/merchants/{merchant_id}/custom-attributes`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListMerchantCustomAttributesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MerchantCustomAttributes.ListMerchantCustomAttributesRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `merchantId` | `path` | `merchant_id` | `string` | yes | — |
| `visibilityFilter` | `query` | `visibility_filter` | `VisibilityFilter` | no | — |
| `limit` | `query` | — | `number` | no | — |
| `cursor` | `query` | — | `string` | no | — |
| `withDefinitions` | `query` | `with_definitions` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `VisibilityFilter` | `visibilityFilterSchema` | `src/models/visibility-filter.ts` |
| `ListMerchantCustomAttributesResponse` | `listMerchantCustomAttributesResponseSchema` | `src/models/list-merchant-custom-attributes-response.ts` |

### retrieveMerchantCustomAttribute

- **Signature**: `retrieveMerchantCustomAttribute(request: MerchantCustomAttributes.RetrieveMerchantCustomAttributeRequest, options?: RequestOptions): ApiPromise<RetrieveMerchantCustomAttributeResponse, ResponseError>`
- **Wire**: `GET /v2/merchants/{merchant_id}/custom-attributes/{key}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveMerchantCustomAttributeResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MerchantCustomAttributes.RetrieveMerchantCustomAttributeRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `merchantId` | `path` | `merchant_id` | `string` | yes | — |
| `key` | `path` | — | `string` | yes | — |
| `withDefinition` | `query` | `with_definition` | `boolean` | no | `false` |
| `version` | `query` | — | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveMerchantCustomAttributeResponse` | `retrieveMerchantCustomAttributeResponseSchema` | `src/models/retrieve-merchant-custom-attribute-response.ts` |

### retrieveMerchantCustomAttributeDefinition

- **Signature**: `retrieveMerchantCustomAttributeDefinition(request: MerchantCustomAttributes.RetrieveMerchantCustomAttributeDefinitionRequest, options?: RequestOptions): ApiPromise<RetrieveMerchantCustomAttributeDefinitionResponse, ResponseError>`
- **Wire**: `GET /v2/merchants/custom-attribute-definitions/{key}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveMerchantCustomAttributeDefinitionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MerchantCustomAttributes.RetrieveMerchantCustomAttributeDefinitionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `version` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveMerchantCustomAttributeDefinitionResponse` | `retrieveMerchantCustomAttributeDefinitionResponseSchema` | `src/models/retrieve-merchant-custom-attribute-definition-response.ts` |

### updateMerchantCustomAttributeDefinition

- **Signature**: `updateMerchantCustomAttributeDefinition(request: MerchantCustomAttributes.UpdateMerchantCustomAttributeDefinitionRequestParams, options?: RequestOptions): ApiPromise<UpdateMerchantCustomAttributeDefinitionResponse, ResponseError>`
- **Wire**: `PUT /v2/merchants/custom-attribute-definitions/{key}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpdateMerchantCustomAttributeDefinitionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MerchantCustomAttributes.UpdateMerchantCustomAttributeDefinitionRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `body` | `body` | `UpdateMerchantCustomAttributeDefinitionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateMerchantCustomAttributeDefinitionRequest` | `updateMerchantCustomAttributeDefinitionRequestSchema` | `src/models/update-merchant-custom-attribute-definition-request.ts` |
| `UpdateMerchantCustomAttributeDefinitionResponse` | `updateMerchantCustomAttributeDefinitionResponseSchema` | `src/models/update-merchant-custom-attribute-definition-response.ts` |

### upsertMerchantCustomAttribute

- **Signature**: `upsertMerchantCustomAttribute(request: MerchantCustomAttributes.UpsertMerchantCustomAttributeRequestParams, options?: RequestOptions): ApiPromise<UpsertMerchantCustomAttributeResponse, ResponseError>`
- **Wire**: `POST /v2/merchants/{merchant_id}/custom-attributes/{key}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpsertMerchantCustomAttributeResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MerchantCustomAttributes.UpsertMerchantCustomAttributeRequestParams` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `merchantId` | `path` | `merchant_id` | `string` | yes |
| `key` | `path` | — | `string` | yes |
| `body` | `body` | — | `UpsertMerchantCustomAttributeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpsertMerchantCustomAttributeRequest` | `upsertMerchantCustomAttributeRequestSchema` | `src/models/upsert-merchant-custom-attribute-request.ts` |
| `UpsertMerchantCustomAttributeResponse` | `upsertMerchantCustomAttributeResponseSchema` | `src/models/upsert-merchant-custom-attribute-response.ts` |

