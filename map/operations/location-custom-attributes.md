<!-- Generated file — do not edit; regenerated with the SDK. -->

# LocationCustomAttributes — operations

Accessor: `client.locationCustomAttributes` · Source: `src/resources/location-custom-attributes.ts` · 11 operations · Request types: namespace `LocationCustomAttributes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bulkDeleteLocationCustomAttributes

- **Signature**: `bulkDeleteLocationCustomAttributes(request: LocationCustomAttributes.BulkDeleteLocationCustomAttributesRequestParams, options?: RequestOptions): ApiPromise<BulkDeleteLocationCustomAttributesResponse, ApiError>`
- **Wire**: `POST /v2/locations/custom-attributes/bulk-delete`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkDeleteLocationCustomAttributesResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `LocationCustomAttributes.BulkDeleteLocationCustomAttributesRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkDeleteLocationCustomAttributesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkDeleteLocationCustomAttributesRequest` | `bulkDeleteLocationCustomAttributesRequestSchema` | `src/models/bulk-delete-location-custom-attributes-request.ts` |
| `BulkDeleteLocationCustomAttributesResponse` | `bulkDeleteLocationCustomAttributesResponseSchema` | `src/models/bulk-delete-location-custom-attributes-response.ts` |

### bulkUpsertLocationCustomAttributes

- **Signature**: `bulkUpsertLocationCustomAttributes(request: LocationCustomAttributes.BulkUpsertLocationCustomAttributesRequestParams, options?: RequestOptions): ApiPromise<BulkUpsertLocationCustomAttributesResponse, ApiError>`
- **Wire**: `POST /v2/locations/custom-attributes/bulk-upsert`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkUpsertLocationCustomAttributesResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `LocationCustomAttributes.BulkUpsertLocationCustomAttributesRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkUpsertLocationCustomAttributesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkUpsertLocationCustomAttributesRequest` | `bulkUpsertLocationCustomAttributesRequestSchema` | `src/models/bulk-upsert-location-custom-attributes-request.ts` |
| `BulkUpsertLocationCustomAttributesResponse` | `bulkUpsertLocationCustomAttributesResponseSchema` | `src/models/bulk-upsert-location-custom-attributes-response.ts` |

### createLocationCustomAttributeDefinition

- **Signature**: `createLocationCustomAttributeDefinition(request: LocationCustomAttributes.CreateLocationCustomAttributeDefinitionRequestParams, options?: RequestOptions): ApiPromise<CreateLocationCustomAttributeDefinitionResponse, ApiError>`
- **Wire**: `POST /v2/locations/custom-attribute-definitions`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateLocationCustomAttributeDefinitionResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `LocationCustomAttributes.CreateLocationCustomAttributeDefinitionRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateLocationCustomAttributeDefinitionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateLocationCustomAttributeDefinitionRequest` | `createLocationCustomAttributeDefinitionRequestSchema` | `src/models/create-location-custom-attribute-definition-request.ts` |
| `CreateLocationCustomAttributeDefinitionResponse` | `createLocationCustomAttributeDefinitionResponseSchema` | `src/models/create-location-custom-attribute-definition-response.ts` |

### deleteLocationCustomAttribute

- **Signature**: `deleteLocationCustomAttribute(request: LocationCustomAttributes.DeleteLocationCustomAttributeRequest, options?: RequestOptions): ApiPromise<DeleteLocationCustomAttributeResponse, ApiError>`
- **Wire**: `DELETE /v2/locations/{location_id}/custom-attributes/{key}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteLocationCustomAttributeResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `LocationCustomAttributes.DeleteLocationCustomAttributeRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locationId` | `path` | `location_id` | `string` | yes |
| `key` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteLocationCustomAttributeResponse` | `deleteLocationCustomAttributeResponseSchema` | `src/models/delete-location-custom-attribute-response.ts` |

### deleteLocationCustomAttributeDefinition

- **Signature**: `deleteLocationCustomAttributeDefinition(request: LocationCustomAttributes.DeleteLocationCustomAttributeDefinitionRequest, options?: RequestOptions): ApiPromise<DeleteLocationCustomAttributeDefinitionResponse, ApiError>`
- **Wire**: `DELETE /v2/locations/custom-attribute-definitions/{key}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteLocationCustomAttributeDefinitionResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `LocationCustomAttributes.DeleteLocationCustomAttributeDefinitionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteLocationCustomAttributeDefinitionResponse` | `deleteLocationCustomAttributeDefinitionResponseSchema` | `src/models/delete-location-custom-attribute-definition-response.ts` |

### listLocationCustomAttributeDefinitions

- **Signature**: `listLocationCustomAttributeDefinitions(request: LocationCustomAttributes.ListLocationCustomAttributeDefinitionsRequest, options?: RequestOptions): ApiPromise<ListLocationCustomAttributeDefinitionsResponse, ApiError>`
- **Wire**: `GET /v2/locations/custom-attribute-definitions`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListLocationCustomAttributeDefinitionsResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `LocationCustomAttributes.ListLocationCustomAttributeDefinitionsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `visibilityFilter` | `query` | `visibility_filter` | `VisibilityFilter` | no |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VisibilityFilter` | `visibilityFilterSchema` | `src/models/visibility-filter.ts` |
| `ListLocationCustomAttributeDefinitionsResponse` | `listLocationCustomAttributeDefinitionsResponseSchema` | `src/models/list-location-custom-attribute-definitions-response.ts` |

### listLocationCustomAttributes

- **Signature**: `listLocationCustomAttributes(request: LocationCustomAttributes.ListLocationCustomAttributesRequest, options?: RequestOptions): ApiPromise<ListLocationCustomAttributesResponse, ApiError>`
- **Wire**: `GET /v2/locations/{location_id}/custom-attributes`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListLocationCustomAttributesResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `LocationCustomAttributes.ListLocationCustomAttributesRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `locationId` | `path` | `location_id` | `string` | yes | — |
| `visibilityFilter` | `query` | `visibility_filter` | `VisibilityFilter` | no | — |
| `limit` | `query` | — | `number` | no | — |
| `cursor` | `query` | — | `string` | no | — |
| `withDefinitions` | `query` | `with_definitions` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `VisibilityFilter` | `visibilityFilterSchema` | `src/models/visibility-filter.ts` |
| `ListLocationCustomAttributesResponse` | `listLocationCustomAttributesResponseSchema` | `src/models/list-location-custom-attributes-response.ts` |

### retrieveLocationCustomAttribute

- **Signature**: `retrieveLocationCustomAttribute(request: LocationCustomAttributes.RetrieveLocationCustomAttributeRequest, options?: RequestOptions): ApiPromise<RetrieveLocationCustomAttributeResponse, ApiError>`
- **Wire**: `GET /v2/locations/{location_id}/custom-attributes/{key}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveLocationCustomAttributeResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `LocationCustomAttributes.RetrieveLocationCustomAttributeRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `locationId` | `path` | `location_id` | `string` | yes | — |
| `key` | `path` | — | `string` | yes | — |
| `withDefinition` | `query` | `with_definition` | `boolean` | no | `false` |
| `version` | `query` | — | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveLocationCustomAttributeResponse` | `retrieveLocationCustomAttributeResponseSchema` | `src/models/retrieve-location-custom-attribute-response.ts` |

### retrieveLocationCustomAttributeDefinition

- **Signature**: `retrieveLocationCustomAttributeDefinition(request: LocationCustomAttributes.RetrieveLocationCustomAttributeDefinitionRequest, options?: RequestOptions): ApiPromise<RetrieveLocationCustomAttributeDefinitionResponse, ApiError>`
- **Wire**: `GET /v2/locations/custom-attribute-definitions/{key}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveLocationCustomAttributeDefinitionResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `LocationCustomAttributes.RetrieveLocationCustomAttributeDefinitionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `version` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveLocationCustomAttributeDefinitionResponse` | `retrieveLocationCustomAttributeDefinitionResponseSchema` | `src/models/retrieve-location-custom-attribute-definition-response.ts` |

### updateLocationCustomAttributeDefinition

- **Signature**: `updateLocationCustomAttributeDefinition(request: LocationCustomAttributes.UpdateLocationCustomAttributeDefinitionRequestParams, options?: RequestOptions): ApiPromise<UpdateLocationCustomAttributeDefinitionResponse, ApiError>`
- **Wire**: `PUT /v2/locations/custom-attribute-definitions/{key}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateLocationCustomAttributeDefinitionResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `LocationCustomAttributes.UpdateLocationCustomAttributeDefinitionRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `body` | `body` | `UpdateLocationCustomAttributeDefinitionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateLocationCustomAttributeDefinitionRequest` | `updateLocationCustomAttributeDefinitionRequestSchema` | `src/models/update-location-custom-attribute-definition-request.ts` |
| `UpdateLocationCustomAttributeDefinitionResponse` | `updateLocationCustomAttributeDefinitionResponseSchema` | `src/models/update-location-custom-attribute-definition-response.ts` |

### upsertLocationCustomAttribute

- **Signature**: `upsertLocationCustomAttribute(request: LocationCustomAttributes.UpsertLocationCustomAttributeRequestParams, options?: RequestOptions): ApiPromise<UpsertLocationCustomAttributeResponse, ApiError>`
- **Wire**: `POST /v2/locations/{location_id}/custom-attributes/{key}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpsertLocationCustomAttributeResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `LocationCustomAttributes.UpsertLocationCustomAttributeRequestParams` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locationId` | `path` | `location_id` | `string` | yes |
| `key` | `path` | — | `string` | yes |
| `body` | `body` | — | `UpsertLocationCustomAttributeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpsertLocationCustomAttributeRequest` | `upsertLocationCustomAttributeRequestSchema` | `src/models/upsert-location-custom-attribute-request.ts` |
| `UpsertLocationCustomAttributeResponse` | `upsertLocationCustomAttributeResponseSchema` | `src/models/upsert-location-custom-attribute-response.ts` |

