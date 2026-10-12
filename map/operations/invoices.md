<!-- Generated file — do not edit; regenerated with the SDK. -->

# Invoices — operations

Accessor: `client.invoices` · Source: `src/resources/invoices.ts` · 10 operations · Request types: namespace `Invoices`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelInvoice

- **Signature**: `cancelInvoice(request: Invoices.CancelInvoiceRequestParams, options?: RequestOptions): ApiPromise<CancelInvoiceResponse, ApiError>`
- **Wire**: `POST /v2/invoices/{invoice_id}/cancel`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CancelInvoiceResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Invoices.CancelInvoiceRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `invoiceId` | `path` | `invoice_id` | `string` | yes |
| `body` | `body` | — | `CancelInvoiceRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelInvoiceRequest` | `cancelInvoiceRequestSchema` | `src/models/cancel-invoice-request.ts` |
| `CancelInvoiceResponse` | `cancelInvoiceResponseSchema` | `src/models/cancel-invoice-response.ts` |

### createInvoice

- **Signature**: `createInvoice(request: Invoices.CreateInvoiceRequestParams, options?: RequestOptions): ApiPromise<CreateInvoiceResponse, ApiError>`
- **Wire**: `POST /v2/invoices`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateInvoiceResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Invoices.CreateInvoiceRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateInvoiceRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateInvoiceRequest` | `createInvoiceRequestSchema` | `src/models/create-invoice-request.ts` |
| `CreateInvoiceResponse` | `createInvoiceResponseSchema` | `src/models/create-invoice-response.ts` |

### createInvoiceAttachment

- **Signature**: `createInvoiceAttachment(request: Invoices.CreateInvoiceAttachmentRequestParams, options?: RequestOptions): ApiPromise<CreateInvoiceAttachmentResponse, ApiError>`
- **Wire**: `POST /v2/invoices/{invoice_id}/attachments`
- **Auth**: `oauth2`
- **Request body**: `multipart/form-data` — every field marked `form`. `image_file` is a file part, framed as bytes rather than encoded. The platform writes the boundary, or the SDK does when a file part streams
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateInvoiceAttachmentResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Invoices.CreateInvoiceAttachmentRequestParams` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `invoiceId` | `path` | `invoice_id` | `string` | yes |
| `request` | `form` | — | `CreateInvoiceAttachmentRequest` | no |
| `imageFile` | `form` | `image_file` | `FileInput` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateInvoiceAttachmentRequest` | `createInvoiceAttachmentRequestSchema` | `src/models/create-invoice-attachment-request.ts` |
| `CreateInvoiceAttachmentResponse` | `createInvoiceAttachmentResponseSchema` | `src/models/create-invoice-attachment-response.ts` |

### deleteInvoice

- **Signature**: `deleteInvoice(request: Invoices.DeleteInvoiceRequest, options?: RequestOptions): ApiPromise<DeleteInvoiceResponse, ApiError>`
- **Wire**: `DELETE /v2/invoices/{invoice_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteInvoiceResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Invoices.DeleteInvoiceRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `invoiceId` | `path` | `invoice_id` | `string` | yes |
| `version` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteInvoiceResponse` | `deleteInvoiceResponseSchema` | `src/models/delete-invoice-response.ts` |

### deleteInvoiceAttachment

- **Signature**: `deleteInvoiceAttachment(request: Invoices.DeleteInvoiceAttachmentRequest, options?: RequestOptions): ApiPromise<DeleteInvoiceAttachmentResponse, ApiError>`
- **Wire**: `DELETE /v2/invoices/{invoice_id}/attachments/{attachment_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteInvoiceAttachmentResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Invoices.DeleteInvoiceAttachmentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `invoiceId` | `path` | `invoice_id` | `string` | yes |
| `attachmentId` | `path` | `attachment_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteInvoiceAttachmentResponse` | `deleteInvoiceAttachmentResponseSchema` | `src/models/delete-invoice-attachment-response.ts` |

### getInvoice

- **Signature**: `getInvoice(request: Invoices.GetInvoiceRequest, options?: RequestOptions): ApiPromise<GetInvoiceResponse, ApiError>`
- **Wire**: `GET /v2/invoices/{invoice_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetInvoiceResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Invoices.GetInvoiceRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `invoiceId` | `path` | `invoice_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetInvoiceResponse` | `getInvoiceResponseSchema` | `src/models/get-invoice-response.ts` |

### listInvoices

- **Signature**: `listInvoices(request: Invoices.ListInvoicesRequest, options?: RequestOptions): ApiPromise<ListInvoicesResponse, ApiError>`
- **Wire**: `GET /v2/invoices`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListInvoicesResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Invoices.ListInvoicesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locationId` | `query` | `location_id` | `string` | yes |
| `cursor` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListInvoicesResponse` | `listInvoicesResponseSchema` | `src/models/list-invoices-response.ts` |

### publishInvoice

- **Signature**: `publishInvoice(request: Invoices.PublishInvoiceRequestParams, options?: RequestOptions): ApiPromise<PublishInvoiceResponse, ApiError>`
- **Wire**: `POST /v2/invoices/{invoice_id}/publish`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublishInvoiceResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Invoices.PublishInvoiceRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `invoiceId` | `path` | `invoice_id` | `string` | yes |
| `body` | `body` | — | `PublishInvoiceRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublishInvoiceRequest` | `publishInvoiceRequestSchema` | `src/models/publish-invoice-request.ts` |
| `PublishInvoiceResponse` | `publishInvoiceResponseSchema` | `src/models/publish-invoice-response.ts` |

### searchInvoices

- **Signature**: `searchInvoices(request: Invoices.SearchInvoicesRequestParams, options?: RequestOptions): ApiPromise<SearchInvoicesResponse, ApiError>`
- **Wire**: `POST /v2/invoices/search`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SearchInvoicesResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Invoices.SearchInvoicesRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchInvoicesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchInvoicesRequest` | `searchInvoicesRequestSchema` | `src/models/search-invoices-request.ts` |
| `SearchInvoicesResponse` | `searchInvoicesResponseSchema` | `src/models/search-invoices-response.ts` |

### updateInvoice

- **Signature**: `updateInvoice(request: Invoices.UpdateInvoiceRequestParams, options?: RequestOptions): ApiPromise<UpdateInvoiceResponse, ApiError>`
- **Wire**: `PUT /v2/invoices/{invoice_id}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateInvoiceResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Invoices.UpdateInvoiceRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `invoiceId` | `path` | `invoice_id` | `string` | yes |
| `body` | `body` | — | `UpdateInvoiceRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateInvoiceRequest` | `updateInvoiceRequestSchema` | `src/models/update-invoice-request.ts` |
| `UpdateInvoiceResponse` | `updateInvoiceResponseSchema` | `src/models/update-invoice-response.ts` |

