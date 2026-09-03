<!-- Generated file — do not edit; regenerated with the SDK. -->

# Catalog — operations

Accessor: `client.catalog` · Source: `src/resources/catalog.ts` · 14 operations · Request types: namespace `Catalog`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### batchDeleteCatalogObjects

- **Signature**: `batchDeleteCatalogObjects(request: Catalog.BatchDeleteCatalogObjectsRequestParams, options?: RequestOptions): ApiPromise<BatchDeleteCatalogObjectsResponse, ResponseError>`
- **Wire**: `POST /v2/catalog/batch-delete`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BatchDeleteCatalogObjectsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Catalog.BatchDeleteCatalogObjectsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BatchDeleteCatalogObjectsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchDeleteCatalogObjectsRequest` | `batchDeleteCatalogObjectsRequestSchema` | `src/models/batch-delete-catalog-objects-request.ts` |
| `BatchDeleteCatalogObjectsResponse` | `batchDeleteCatalogObjectsResponseSchema` | `src/models/batch-delete-catalog-objects-response.ts` |

### batchRetrieveCatalogObjects

- **Signature**: `batchRetrieveCatalogObjects(request: Catalog.BatchRetrieveCatalogObjectsRequestParams, options?: RequestOptions): ApiPromise<BatchRetrieveCatalogObjectsResponse, ResponseError>`
- **Wire**: `POST /v2/catalog/batch-retrieve`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BatchRetrieveCatalogObjectsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Catalog.BatchRetrieveCatalogObjectsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BatchRetrieveCatalogObjectsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchRetrieveCatalogObjectsRequest` | `batchRetrieveCatalogObjectsRequestSchema` | `src/models/batch-retrieve-catalog-objects-request.ts` |
| `BatchRetrieveCatalogObjectsResponse` | `batchRetrieveCatalogObjectsResponseSchema` | `src/models/batch-retrieve-catalog-objects-response.ts` |

### batchUpsertCatalogObjects

- **Signature**: `batchUpsertCatalogObjects(request: Catalog.BatchUpsertCatalogObjectsRequestParams, options?: RequestOptions): ApiPromise<BatchUpsertCatalogObjectsResponse, ResponseError>`
- **Wire**: `POST /v2/catalog/batch-upsert`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BatchUpsertCatalogObjectsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Catalog.BatchUpsertCatalogObjectsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BatchUpsertCatalogObjectsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchUpsertCatalogObjectsRequest` | `batchUpsertCatalogObjectsRequestSchema` | `src/models/batch-upsert-catalog-objects-request.ts` |
| `BatchUpsertCatalogObjectsResponse` | `batchUpsertCatalogObjectsResponseSchema` | `src/models/batch-upsert-catalog-objects-response.ts` |

### catalogInfo

- **Signature**: `catalogInfo(options?: RequestOptions): ApiPromise<CatalogInfoResponse, ResponseError>`
- **Wire**: `GET /v2/catalog/info`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CatalogInfoResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `CatalogInfoResponse` | `catalogInfoResponseSchema` | `src/models/catalog-info-response.ts` |

### createCatalogImage

- **Signature**: `createCatalogImage(options?: RequestOptions): ApiPromise<CreateCatalogImageResponse, ResponseError>`
- **Wire**: `POST /v2/catalog/images`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CreateCatalogImageResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCatalogImageResponse` | `createCatalogImageResponseSchema` | `src/models/create-catalog-image-response.ts` |

### deleteCatalogObject

- **Signature**: `deleteCatalogObject(request: Catalog.DeleteCatalogObjectRequest, options?: RequestOptions): ApiPromise<DeleteCatalogObjectResponse, ResponseError>`
- **Wire**: `DELETE /v2/catalog/object/{object_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeleteCatalogObjectResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Catalog.DeleteCatalogObjectRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `objectId` | `path` | `object_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteCatalogObjectResponse` | `deleteCatalogObjectResponseSchema` | `src/models/delete-catalog-object-response.ts` |

### listCatalog

- **Signature**: `listCatalog(request: Catalog.ListCatalogRequest, options?: RequestOptions): ApiPromise<ListCatalogResponse, ResponseError>`
- **Wire**: `GET /v2/catalog/list`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListCatalogResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

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

- **Signature**: `retrieveCatalogObject(request: Catalog.RetrieveCatalogObjectRequest, options?: RequestOptions): ApiPromise<RetrieveCatalogObjectResponse, ResponseError>`
- **Wire**: `GET /v2/catalog/object/{object_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveCatalogObjectResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

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

- **Signature**: `searchCatalogItems(request: Catalog.SearchCatalogItemsRequestParams, options?: RequestOptions): ApiPromise<SearchCatalogItemsResponse, ResponseError>`
- **Wire**: `POST /v2/catalog/search-catalog-items`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `SearchCatalogItemsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Catalog.SearchCatalogItemsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchCatalogItemsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchCatalogItemsRequest` | `searchCatalogItemsRequestSchema` | `src/models/search-catalog-items-request.ts` |
| `SearchCatalogItemsResponse` | `searchCatalogItemsResponseSchema` | `src/models/search-catalog-items-response.ts` |

### searchCatalogObjects

- **Signature**: `searchCatalogObjects(request: Catalog.SearchCatalogObjectsRequestParams, options?: RequestOptions): ApiPromise<SearchCatalogObjectsResponse, ResponseError>`
- **Wire**: `POST /v2/catalog/search`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `SearchCatalogObjectsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Catalog.SearchCatalogObjectsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchCatalogObjectsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchCatalogObjectsRequest` | `searchCatalogObjectsRequestSchema` | `src/models/search-catalog-objects-request.ts` |
| `SearchCatalogObjectsResponse` | `searchCatalogObjectsResponseSchema` | `src/models/search-catalog-objects-response.ts` |

### updateCatalogImage

- **Signature**: `updateCatalogImage(request: Catalog.UpdateCatalogImageRequestParams, options?: RequestOptions): ApiPromise<UpdateCatalogImageResponse, ResponseError>`
- **Wire**: `PUT /v2/catalog/images/{image_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UpdateCatalogImageResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Catalog.UpdateCatalogImageRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `imageId` | `path` | `image_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCatalogImageResponse` | `updateCatalogImageResponseSchema` | `src/models/update-catalog-image-response.ts` |

### updateItemModifierLists

- **Signature**: `updateItemModifierLists(request: Catalog.UpdateItemModifierListsRequestParams, options?: RequestOptions): ApiPromise<UpdateItemModifierListsResponse, ResponseError>`
- **Wire**: `POST /v2/catalog/update-item-modifier-lists`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpdateItemModifierListsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Catalog.UpdateItemModifierListsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UpdateItemModifierListsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateItemModifierListsRequest` | `updateItemModifierListsRequestSchema` | `src/models/update-item-modifier-lists-request.ts` |
| `UpdateItemModifierListsResponse` | `updateItemModifierListsResponseSchema` | `src/models/update-item-modifier-lists-response.ts` |

### updateItemTaxes

- **Signature**: `updateItemTaxes(request: Catalog.UpdateItemTaxesRequestParams, options?: RequestOptions): ApiPromise<UpdateItemTaxesResponse, ResponseError>`
- **Wire**: `POST /v2/catalog/update-item-taxes`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpdateItemTaxesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Catalog.UpdateItemTaxesRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UpdateItemTaxesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateItemTaxesRequest` | `updateItemTaxesRequestSchema` | `src/models/update-item-taxes-request.ts` |
| `UpdateItemTaxesResponse` | `updateItemTaxesResponseSchema` | `src/models/update-item-taxes-response.ts` |

### upsertCatalogObject

- **Signature**: `upsertCatalogObject(request: Catalog.UpsertCatalogObjectRequestParams, options?: RequestOptions): ApiPromise<UpsertCatalogObjectResponse, ResponseError>`
- **Wire**: `POST /v2/catalog/object`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpsertCatalogObjectResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Catalog.UpsertCatalogObjectRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UpsertCatalogObjectRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpsertCatalogObjectRequest` | `upsertCatalogObjectRequestSchema` | `src/models/upsert-catalog-object-request.ts` |
| `UpsertCatalogObjectResponse` | `upsertCatalogObjectResponseSchema` | `src/models/upsert-catalog-object-response.ts` |

