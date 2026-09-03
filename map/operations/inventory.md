<!-- Generated file — do not edit; regenerated with the SDK. -->

# Inventory — operations

Accessor: `client.inventory` · Source: `src/resources/inventory.ts` · 19 operations · Request types: namespace `Inventory`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### batchChangeInventory

- **Signature**: `batchChangeInventory(request: Inventory.BatchChangeInventoryRequestParams, options?: RequestOptions): ApiPromise<BatchChangeInventoryResponse, ResponseError>`
- **Wire**: `POST /v2/inventory/changes/batch-create`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BatchChangeInventoryResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Inventory.BatchChangeInventoryRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BatchChangeInventoryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchChangeInventoryRequest` | `batchChangeInventoryRequestSchema` | `src/models/batch-change-inventory-request.ts` |
| `BatchChangeInventoryResponse` | `batchChangeInventoryResponseSchema` | `src/models/batch-change-inventory-response.ts` |

### batchRetrieveInventoryChanges

- **Signature**: `batchRetrieveInventoryChanges(request: Inventory.BatchRetrieveInventoryChangesRequestParams, options?: RequestOptions): ApiPromise<BatchRetrieveInventoryChangesResponse, ResponseError>`
- **Wire**: `POST /v2/inventory/changes/batch-retrieve`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BatchRetrieveInventoryChangesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Inventory.BatchRetrieveInventoryChangesRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BatchRetrieveInventoryChangesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchRetrieveInventoryChangesRequest` | `batchRetrieveInventoryChangesRequestSchema` | `src/models/batch-retrieve-inventory-changes-request.ts` |
| `BatchRetrieveInventoryChangesResponse` | `batchRetrieveInventoryChangesResponseSchema` | `src/models/batch-retrieve-inventory-changes-response.ts` |

### batchRetrieveInventoryCounts

- **Signature**: `batchRetrieveInventoryCounts(request: Inventory.BatchRetrieveInventoryCountsRequestParams, options?: RequestOptions): ApiPromise<BatchRetrieveInventoryCountsResponse, ResponseError>`
- **Wire**: `POST /v2/inventory/counts/batch-retrieve`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BatchRetrieveInventoryCountsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Inventory.BatchRetrieveInventoryCountsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BatchRetrieveInventoryCountsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchRetrieveInventoryCountsRequest` | `batchRetrieveInventoryCountsRequestSchema` | `src/models/batch-retrieve-inventory-counts-request.ts` |
| `BatchRetrieveInventoryCountsResponse` | `batchRetrieveInventoryCountsResponseSchema` | `src/models/batch-retrieve-inventory-counts-response.ts` |

### createInventoryAdjustmentReason

- **Signature**: `createInventoryAdjustmentReason(request: Inventory.CreateInventoryAdjustmentReasonRequestParams, options?: RequestOptions): ApiPromise<CreateInventoryAdjustmentReasonResponse, ResponseError>`
- **Wire**: `POST /v2/inventory/adjustment-reasons/create`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateInventoryAdjustmentReasonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Inventory.CreateInventoryAdjustmentReasonRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateInventoryAdjustmentReasonRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateInventoryAdjustmentReasonRequest` | `createInventoryAdjustmentReasonRequestSchema` | `src/models/create-inventory-adjustment-reason-request.ts` |
| `CreateInventoryAdjustmentReasonResponse` | `createInventoryAdjustmentReasonResponseSchema` | `src/models/create-inventory-adjustment-reason-response.ts` |

### deleteInventoryAdjustmentReason

- **Signature**: `deleteInventoryAdjustmentReason(request: Inventory.DeleteInventoryAdjustmentReasonRequestParams, options?: RequestOptions): ApiPromise<DeleteInventoryAdjustmentReasonResponse, ResponseError>`
- **Wire**: `POST /v2/inventory/adjustment-reasons/delete`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `DeleteInventoryAdjustmentReasonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Inventory.DeleteInventoryAdjustmentReasonRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DeleteInventoryAdjustmentReasonRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteInventoryAdjustmentReasonRequest` | `deleteInventoryAdjustmentReasonRequestSchema` | `src/models/delete-inventory-adjustment-reason-request.ts` |
| `DeleteInventoryAdjustmentReasonResponse` | `deleteInventoryAdjustmentReasonResponseSchema` | `src/models/delete-inventory-adjustment-reason-response.ts` |

### deprecatedBatchChangeInventory

- **Signature**: `deprecatedBatchChangeInventory(request: Inventory.DeprecatedBatchChangeInventoryRequest, options?: RequestOptions): ApiPromise<BatchChangeInventoryResponse, ResponseError>`
- **Wire**: `POST /v2/inventory/batch-change`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BatchChangeInventoryResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Inventory.DeprecatedBatchChangeInventoryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BatchChangeInventoryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchChangeInventoryRequest` | `batchChangeInventoryRequestSchema` | `src/models/batch-change-inventory-request.ts` |
| `BatchChangeInventoryResponse` | `batchChangeInventoryResponseSchema` | `src/models/batch-change-inventory-response.ts` |

### deprecatedBatchRetrieveInventoryChanges

- **Signature**: `deprecatedBatchRetrieveInventoryChanges(request: Inventory.DeprecatedBatchRetrieveInventoryChangesRequest, options?: RequestOptions): ApiPromise<BatchRetrieveInventoryChangesResponse, ResponseError>`
- **Wire**: `POST /v2/inventory/batch-retrieve-changes`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BatchRetrieveInventoryChangesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Inventory.DeprecatedBatchRetrieveInventoryChangesRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BatchRetrieveInventoryChangesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchRetrieveInventoryChangesRequest` | `batchRetrieveInventoryChangesRequestSchema` | `src/models/batch-retrieve-inventory-changes-request.ts` |
| `BatchRetrieveInventoryChangesResponse` | `batchRetrieveInventoryChangesResponseSchema` | `src/models/batch-retrieve-inventory-changes-response.ts` |

### deprecatedBatchRetrieveInventoryCounts

- **Signature**: `deprecatedBatchRetrieveInventoryCounts(request: Inventory.DeprecatedBatchRetrieveInventoryCountsRequest, options?: RequestOptions): ApiPromise<BatchRetrieveInventoryCountsResponse, ResponseError>`
- **Wire**: `POST /v2/inventory/batch-retrieve-counts`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BatchRetrieveInventoryCountsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Inventory.DeprecatedBatchRetrieveInventoryCountsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BatchRetrieveInventoryCountsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BatchRetrieveInventoryCountsRequest` | `batchRetrieveInventoryCountsRequestSchema` | `src/models/batch-retrieve-inventory-counts-request.ts` |
| `BatchRetrieveInventoryCountsResponse` | `batchRetrieveInventoryCountsResponseSchema` | `src/models/batch-retrieve-inventory-counts-response.ts` |

### deprecatedRetrieveInventoryAdjustment

- **Signature**: `deprecatedRetrieveInventoryAdjustment(request: Inventory.DeprecatedRetrieveInventoryAdjustmentRequest, options?: RequestOptions): ApiPromise<RetrieveInventoryAdjustmentResponse, ResponseError>`
- **Wire**: `GET /v2/inventory/adjustment/{adjustment_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveInventoryAdjustmentResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Inventory.DeprecatedRetrieveInventoryAdjustmentRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `adjustmentId` | `path` | `adjustment_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveInventoryAdjustmentResponse` | `retrieveInventoryAdjustmentResponseSchema` | `src/models/retrieve-inventory-adjustment-response.ts` |

### deprecatedRetrieveInventoryPhysicalCount

- **Signature**: `deprecatedRetrieveInventoryPhysicalCount(request: Inventory.DeprecatedRetrieveInventoryPhysicalCountRequest, options?: RequestOptions): ApiPromise<RetrieveInventoryPhysicalCountResponse, ResponseError>`
- **Wire**: `GET /v2/inventory/physical-count/{physical_count_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveInventoryPhysicalCountResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Inventory.DeprecatedRetrieveInventoryPhysicalCountRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `physicalCountId` | `path` | `physical_count_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveInventoryPhysicalCountResponse` | `retrieveInventoryPhysicalCountResponseSchema` | `src/models/retrieve-inventory-physical-count-response.ts` |

### listInventoryAdjustmentReasons

- **Signature**: `listInventoryAdjustmentReasons(request: Inventory.ListInventoryAdjustmentReasonsRequest, options?: RequestOptions): ApiPromise<ListInventoryAdjustmentReasonsResponse, ResponseError>`
- **Wire**: `GET /v2/inventory/adjustment-reasons`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListInventoryAdjustmentReasonsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Inventory.ListInventoryAdjustmentReasonsRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `includeDeleted` | `query` | `include_deleted` | `boolean` | no | `false` |
| `includeSystemCodes` | `query` | `include_system_codes` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListInventoryAdjustmentReasonsResponse` | `listInventoryAdjustmentReasonsResponseSchema` | `src/models/list-inventory-adjustment-reasons-response.ts` |

### restoreInventoryAdjustmentReason

- **Signature**: `restoreInventoryAdjustmentReason(request: Inventory.RestoreInventoryAdjustmentReasonRequestParams, options?: RequestOptions): ApiPromise<RestoreInventoryAdjustmentReasonResponse, ResponseError>`
- **Wire**: `POST /v2/inventory/adjustment-reasons/restore`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `RestoreInventoryAdjustmentReasonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Inventory.RestoreInventoryAdjustmentReasonRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RestoreInventoryAdjustmentReasonRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RestoreInventoryAdjustmentReasonRequest` | `restoreInventoryAdjustmentReasonRequestSchema` | `src/models/restore-inventory-adjustment-reason-request.ts` |
| `RestoreInventoryAdjustmentReasonResponse` | `restoreInventoryAdjustmentReasonResponseSchema` | `src/models/restore-inventory-adjustment-reason-response.ts` |

### retrieveInventoryAdjustment

- **Signature**: `retrieveInventoryAdjustment(request: Inventory.RetrieveInventoryAdjustmentRequest, options?: RequestOptions): ApiPromise<RetrieveInventoryAdjustmentResponse, ResponseError>`
- **Wire**: `GET /v2/inventory/adjustments/{adjustment_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveInventoryAdjustmentResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Inventory.RetrieveInventoryAdjustmentRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `adjustmentId` | `path` | `adjustment_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveInventoryAdjustmentResponse` | `retrieveInventoryAdjustmentResponseSchema` | `src/models/retrieve-inventory-adjustment-response.ts` |

### retrieveInventoryAdjustmentReason

- **Signature**: `retrieveInventoryAdjustmentReason(request: Inventory.RetrieveInventoryAdjustmentReasonRequestParams, options?: RequestOptions): ApiPromise<RetrieveInventoryAdjustmentReasonResponse, ResponseError>`
- **Wire**: `POST /v2/inventory/adjustment-reasons/retrieve`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `RetrieveInventoryAdjustmentReasonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Inventory.RetrieveInventoryAdjustmentReasonRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RetrieveInventoryAdjustmentReasonRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveInventoryAdjustmentReasonRequest` | `retrieveInventoryAdjustmentReasonRequestSchema` | `src/models/retrieve-inventory-adjustment-reason-request.ts` |
| `RetrieveInventoryAdjustmentReasonResponse` | `retrieveInventoryAdjustmentReasonResponseSchema` | `src/models/retrieve-inventory-adjustment-reason-response.ts` |

### retrieveInventoryChanges

- **Signature**: `retrieveInventoryChanges(request: Inventory.RetrieveInventoryChangesRequest, options?: RequestOptions): ApiPromise<RetrieveInventoryChangesResponse, ResponseError>`
- **Wire**: `GET /v2/inventory/{catalog_object_id}/changes`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveInventoryChangesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Inventory.RetrieveInventoryChangesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `catalogObjectId` | `path` | `catalog_object_id` | `string` | yes |
| `locationIds` | `query` | `location_ids` | `string` | no |
| `cursor` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveInventoryChangesResponse` | `retrieveInventoryChangesResponseSchema` | `src/models/retrieve-inventory-changes-response.ts` |

### retrieveInventoryCount

- **Signature**: `retrieveInventoryCount(request: Inventory.RetrieveInventoryCountRequest, options?: RequestOptions): ApiPromise<RetrieveInventoryCountResponse, ResponseError>`
- **Wire**: `GET /v2/inventory/{catalog_object_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveInventoryCountResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Inventory.RetrieveInventoryCountRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `catalogObjectId` | `path` | `catalog_object_id` | `string` | yes |
| `locationIds` | `query` | `location_ids` | `string` | no |
| `cursor` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveInventoryCountResponse` | `retrieveInventoryCountResponseSchema` | `src/models/retrieve-inventory-count-response.ts` |

### retrieveInventoryPhysicalCount

- **Signature**: `retrieveInventoryPhysicalCount(request: Inventory.RetrieveInventoryPhysicalCountRequest, options?: RequestOptions): ApiPromise<RetrieveInventoryPhysicalCountResponse, ResponseError>`
- **Wire**: `GET /v2/inventory/physical-counts/{physical_count_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveInventoryPhysicalCountResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Inventory.RetrieveInventoryPhysicalCountRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `physicalCountId` | `path` | `physical_count_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveInventoryPhysicalCountResponse` | `retrieveInventoryPhysicalCountResponseSchema` | `src/models/retrieve-inventory-physical-count-response.ts` |

### updateInventoryAdjustment

- **Signature**: `updateInventoryAdjustment(request: Inventory.UpdateInventoryAdjustmentRequestParams, options?: RequestOptions): ApiPromise<UpdateInventoryAdjustmentResponse, ResponseError>`
- **Wire**: `PUT /v2/inventory/adjustments/update`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpdateInventoryAdjustmentResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Inventory.UpdateInventoryAdjustmentRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UpdateInventoryAdjustmentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateInventoryAdjustmentRequest` | `updateInventoryAdjustmentRequestSchema` | `src/models/update-inventory-adjustment-request.ts` |
| `UpdateInventoryAdjustmentResponse` | `updateInventoryAdjustmentResponseSchema` | `src/models/update-inventory-adjustment-response.ts` |

### updateInventoryAdjustmentReason

- **Signature**: `updateInventoryAdjustmentReason(request: Inventory.UpdateInventoryAdjustmentReasonRequestParams, options?: RequestOptions): ApiPromise<UpdateInventoryAdjustmentReasonResponse, ResponseError>`
- **Wire**: `PUT /v2/inventory/adjustment-reasons/update`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpdateInventoryAdjustmentReasonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Inventory.UpdateInventoryAdjustmentReasonRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UpdateInventoryAdjustmentReasonRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateInventoryAdjustmentReasonRequest` | `updateInventoryAdjustmentReasonRequestSchema` | `src/models/update-inventory-adjustment-reason-request.ts` |
| `UpdateInventoryAdjustmentReasonResponse` | `updateInventoryAdjustmentReasonResponseSchema` | `src/models/update-inventory-adjustment-reason-response.ts` |

