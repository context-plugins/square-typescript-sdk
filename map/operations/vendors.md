<!-- Generated file — do not edit; regenerated with the SDK. -->

# Vendors — operations

Accessor: `client.vendors` · Source: `src/resources/vendors.ts` · 7 operations · Request types: namespace `Vendors`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### bulkCreateVendors

- **Signature**: `bulkCreateVendors(request: Vendors.BulkCreateVendorsRequestParams, options?: RequestOptions): ApiPromise<BulkCreateVendorsResponse, ResponseError>`
- **Wire**: `POST /v2/vendors/bulk-create`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BulkCreateVendorsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Vendors.BulkCreateVendorsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkCreateVendorsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkCreateVendorsRequest` | `bulkCreateVendorsRequestSchema` | `src/models/bulk-create-vendors-request.ts` |
| `BulkCreateVendorsResponse` | `bulkCreateVendorsResponseSchema` | `src/models/bulk-create-vendors-response.ts` |

### bulkRetrieveVendors

- **Signature**: `bulkRetrieveVendors(request: Vendors.BulkRetrieveVendorsRequestParams, options?: RequestOptions): ApiPromise<BulkRetrieveVendorsResponse, ResponseError>`
- **Wire**: `POST /v2/vendors/bulk-retrieve`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BulkRetrieveVendorsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Vendors.BulkRetrieveVendorsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkRetrieveVendorsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkRetrieveVendorsRequest` | `bulkRetrieveVendorsRequestSchema` | `src/models/bulk-retrieve-vendors-request.ts` |
| `BulkRetrieveVendorsResponse` | `bulkRetrieveVendorsResponseSchema` | `src/models/bulk-retrieve-vendors-response.ts` |

### bulkUpdateVendors

- **Signature**: `bulkUpdateVendors(request: Vendors.BulkUpdateVendorsRequestParams, options?: RequestOptions): ApiPromise<BulkUpdateVendorsResponse, ResponseError>`
- **Wire**: `PUT /v2/vendors/bulk-update`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BulkUpdateVendorsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Vendors.BulkUpdateVendorsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkUpdateVendorsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkUpdateVendorsRequest` | `bulkUpdateVendorsRequestSchema` | `src/models/bulk-update-vendors-request.ts` |
| `BulkUpdateVendorsResponse` | `bulkUpdateVendorsResponseSchema` | `src/models/bulk-update-vendors-response.ts` |

### createVendor

- **Signature**: `createVendor(request: Vendors.CreateVendorRequestParams, options?: RequestOptions): ApiPromise<CreateVendorResponse, ResponseError>`
- **Wire**: `POST /v2/vendors/create`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateVendorResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Vendors.CreateVendorRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateVendorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateVendorRequest` | `createVendorRequestSchema` | `src/models/create-vendor-request.ts` |
| `CreateVendorResponse` | `createVendorResponseSchema` | `src/models/create-vendor-response.ts` |

### retrieveVendor

- **Signature**: `retrieveVendor(request: Vendors.RetrieveVendorRequest, options?: RequestOptions): ApiPromise<RetrieveVendorResponse, ResponseError>`
- **Wire**: `GET /v2/vendors/{vendor_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveVendorResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Vendors.RetrieveVendorRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vendorId` | `path` | `vendor_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveVendorResponse` | `retrieveVendorResponseSchema` | `src/models/retrieve-vendor-response.ts` |

### searchVendors

- **Signature**: `searchVendors(request: Vendors.SearchVendorsRequestParams, options?: RequestOptions): ApiPromise<SearchVendorsResponse, ResponseError>`
- **Wire**: `POST /v2/vendors/search`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `SearchVendorsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Vendors.SearchVendorsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchVendorsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchVendorsRequest` | `searchVendorsRequestSchema` | `src/models/search-vendors-request.ts` |
| `SearchVendorsResponse` | `searchVendorsResponseSchema` | `src/models/search-vendors-response.ts` |

### updateVendor

- **Signature**: `updateVendor(request: Vendors.UpdateVendorRequestParams, options?: RequestOptions): ApiPromise<UpdateVendorResponse, ResponseError>`
- **Wire**: `PUT /v2/vendors/{vendor_id}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpdateVendorResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Vendors.UpdateVendorRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `vendorId` | `path` | `vendor_id` | `string` | yes |
| `body` | `body` | — | `UpdateVendorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateVendorRequest` | `updateVendorRequestSchema` | `src/models/update-vendor-request.ts` |
| `UpdateVendorResponse` | `updateVendorResponseSchema` | `src/models/update-vendor-response.ts` |

