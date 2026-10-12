<!-- Generated file — do not edit; regenerated with the SDK. -->

# Catalog — operations

Accessor: `client.catalog` · Source: `src/resources/catalog.ts` · 14 operations · Request types: namespace `Catalog`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### batchDeleteCatalogObjects

- **Signature**: `batchDeleteCatalogObjects(request: Catalog.BatchDeleteCatalogObjectsRequestParams, options?: RequestOptions): ApiPromise<BatchDeleteCatalogObjectsResponse, ApiError>`
- **Wire**: `POST /v2/catalog/batch-delete`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BatchDeleteCatalogObjectsResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Catalog.BatchDeleteCatalogObjectsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BatchDeleteCatalogObjectsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchDeleteCatalogObjectsRequest` | `batchDeleteCatalogObjectsRequestSchema` | `src/models/batch-delete-catalog-objects-request.ts` |
| `BatchDeleteCatalogObjectsResponse` | `batchDeleteCatalogObjectsResponseSchema` | `src/models/batch-delete-catalog-objects-response.ts` |

### batchRetrieveCatalogObjects

- **Signature**: `batchRetrieveCatalogObjects(request: Catalog.BatchRetrieveCatalogObjectsRequestParams, options?: RequestOptions): ApiPromise<BatchRetrieveCatalogObjectsResponse, ApiError>`
- **Wire**: `POST /v2/catalog/batch-retrieve`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BatchRetrieveCatalogObjectsResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Catalog.BatchRetrieveCatalogObjectsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BatchRetrieveCatalogObjectsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchRetrieveCatalogObjectsRequest` | `batchRetrieveCatalogObjectsRequestSchema` | `src/models/batch-retrieve-catalog-objects-request.ts` |
| `BatchRetrieveCatalogObjectsResponse` | `batchRetrieveCatalogObjectsResponseSchema` | `src/models/batch-retrieve-catalog-objects-response.ts` |

### batchUpsertCatalogObjects

- **Signature**: `batchUpsertCatalogObjects(request: Catalog.BatchUpsertCatalogObjectsRequestParams, options?: RequestOptions): ApiPromise<BatchUpsertCatalogObjectsResponse, ApiError>`
- **Wire**: `POST /v2/catalog/batch-upsert`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BatchUpsertCatalogObjectsResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Catalog.BatchUpsertCatalogObjectsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BatchUpsertCatalogObjectsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchUpsertCatalogObjectsRequest` | `batchUpsertCatalogObjectsRequestSchema` | `src/models/batch-upsert-catalog-objects-request.ts` |
| `BatchUpsertCatalogObjectsResponse` | `batchUpsertCatalogObjectsResponseSchema` | `src/models/batch-upsert-catalog-objects-response.ts` |

### catalogInfo

- **Signature**: `catalogInfo(options?: RequestOptions): ApiPromise<CatalogInfoResponse, ApiError>`
- **Wire**: `GET /v2/catalog/info`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CatalogInfoResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `CatalogInfoResponse` | `catalogInfoResponseSchema` | `src/models/catalog-info-response.ts` |

### createCatalogImage

- **Signature**: `createCatalogImage(request: Catalog.CreateCatalogImageRequestParams, options?: RequestOptions): ApiPromise<CreateCatalogImageResponse, ApiError>`
- **Wire**: `POST /v2/catalog/images`
- **Auth**: `oauth2`
- **Request body**: `multipart/form-data` — every field marked `form`. `image_file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateCatalogImageResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Catalog.CreateCatalogImageRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `request` | `form` | — | `CreateCatalogImageRequest` | no |
| `imageFile` | `form` | `image_file` | `FileInput` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCatalogImageRequest` | `createCatalogImageRequestSchema` | `src/models/create-catalog-image-request.ts` |
| `CreateCatalogImageResponse` | `createCatalogImageResponseSchema` | `src/models/create-catalog-image-response.ts` |

### deleteCatalogObject

- **Signature**: `deleteCatalogObject(request: Catalog.DeleteCatalogObjectRequest, options?: RequestOptions): ApiPromise<DeleteCatalogObjectResponse, ApiError>`
- **Wire**: `DELETE /v2/catalog/object/{object_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteCatalogObjectResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Catalog.DeleteCatalogObjectRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `objectId` | `path` | `object_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteCatalogObjectResponse` | `deleteCatalogObjectResponseSchema` | `src/models/delete-catalog-object-response.ts` |

### listCatalog

- **Signature**: `listCatalog(request: Catalog.ListCatalogRequest, options?: RequestOptions): ApiPromise<ListCatalogResponse, ApiError>`
- **Wire**: `GET /v2/catalog/list`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListCatalogResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Catalog.ListCatalogRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cursor` | `query` | — | `string` | no |
| `types` | `query` | — | `string` | no |
| `catalogVersion` | `query` | `catalog_version` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListCatalogResponse` | `listCatalogResponseSchema` | `src/models/list-catalog-response.ts` |

### retrieveCatalogObject

- **Signature**: `retrieveCatalogObject(request: Catalog.RetrieveCatalogObjectRequest, options?: RequestOptions): ApiPromise<RetrieveCatalogObjectResponse, ApiError>`
- **Wire**: `GET /v2/catalog/object/{object_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveCatalogObjectResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Catalog.RetrieveCatalogObjectRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `objectId` | `path` | `object_id` | `string` | yes | — |
| `includeRelatedObjects` | `query` | `include_related_objects` | `boolean` | no | `false` |
| `catalogVersion` | `query` | `catalog_version` | `number` | no | — |
| `includeCategoryPathToRoot` | `query` | `include_category_path_to_root` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveCatalogObjectResponse` | `retrieveCatalogObjectResponseSchema` | `src/models/retrieve-catalog-object-response.ts` |

### searchCatalogItems

- **Signature**: `searchCatalogItems(request: Catalog.SearchCatalogItemsRequestParams, options?: RequestOptions): ApiPromise<SearchCatalogItemsResponse, ApiError>`
- **Wire**: `POST /v2/catalog/search-catalog-items`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SearchCatalogItemsResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Catalog.SearchCatalogItemsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchCatalogItemsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchCatalogItemsRequest` | `searchCatalogItemsRequestSchema` | `src/models/search-catalog-items-request.ts` |
| `SearchCatalogItemsResponse` | `searchCatalogItemsResponseSchema` | `src/models/search-catalog-items-response.ts` |

### searchCatalogObjects

- **Signature**: `searchCatalogObjects(request: Catalog.SearchCatalogObjectsRequestParams, options?: RequestOptions): ApiPromise<SearchCatalogObjectsResponse, ApiError>`
- **Wire**: `POST /v2/catalog/search`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SearchCatalogObjectsResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Catalog.SearchCatalogObjectsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchCatalogObjectsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchCatalogObjectsRequest` | `searchCatalogObjectsRequestSchema` | `src/models/search-catalog-objects-request.ts` |
| `SearchCatalogObjectsResponse` | `searchCatalogObjectsResponseSchema` | `src/models/search-catalog-objects-response.ts` |

### updateCatalogImage

- **Signature**: `updateCatalogImage(request: Catalog.UpdateCatalogImageRequestParams, options?: RequestOptions): ApiPromise<UpdateCatalogImageResponse, ApiError>`
- **Wire**: `PUT /v2/catalog/images/{image_id}`
- **Auth**: `oauth2`
- **Request body**: `multipart/form-data` — every field marked `form`. `image_file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateCatalogImageResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Catalog.UpdateCatalogImageRequestParams` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `imageId` | `path` | `image_id` | `string` | yes |
| `request` | `form` | — | `UpdateCatalogImageRequest` | no |
| `imageFile` | `form` | `image_file` | `FileInput` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCatalogImageRequest` | `updateCatalogImageRequestSchema` | `src/models/update-catalog-image-request.ts` |
| `UpdateCatalogImageResponse` | `updateCatalogImageResponseSchema` | `src/models/update-catalog-image-response.ts` |

### updateItemModifierLists

- **Signature**: `updateItemModifierLists(request: Catalog.UpdateItemModifierListsRequestParams, options?: RequestOptions): ApiPromise<UpdateItemModifierListsResponse, ApiError>`
- **Wire**: `POST /v2/catalog/update-item-modifier-lists`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateItemModifierListsResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Catalog.UpdateItemModifierListsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UpdateItemModifierListsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateItemModifierListsRequest` | `updateItemModifierListsRequestSchema` | `src/models/update-item-modifier-lists-request.ts` |
| `UpdateItemModifierListsResponse` | `updateItemModifierListsResponseSchema` | `src/models/update-item-modifier-lists-response.ts` |

### updateItemTaxes

- **Signature**: `updateItemTaxes(request: Catalog.UpdateItemTaxesRequestParams, options?: RequestOptions): ApiPromise<UpdateItemTaxesResponse, ApiError>`
- **Wire**: `POST /v2/catalog/update-item-taxes`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateItemTaxesResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Catalog.UpdateItemTaxesRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UpdateItemTaxesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateItemTaxesRequest` | `updateItemTaxesRequestSchema` | `src/models/update-item-taxes-request.ts` |
| `UpdateItemTaxesResponse` | `updateItemTaxesResponseSchema` | `src/models/update-item-taxes-response.ts` |

### upsertCatalogObject

- **Signature**: `upsertCatalogObject(request: Catalog.UpsertCatalogObjectRequestParams, options?: RequestOptions): ApiPromise<UpsertCatalogObjectResponse, ApiError>`
- **Wire**: `POST /v2/catalog/object`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpsertCatalogObjectResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Catalog.UpsertCatalogObjectRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UpsertCatalogObjectRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpsertCatalogObjectRequest` | `upsertCatalogObjectRequestSchema` | `src/models/upsert-catalog-object-request.ts` |
| `UpsertCatalogObjectResponse` | `upsertCatalogObjectResponseSchema` | `src/models/upsert-catalog-object-response.ts` |

