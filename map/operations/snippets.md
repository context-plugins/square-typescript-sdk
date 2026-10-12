<!-- Generated file — do not edit; regenerated with the SDK. -->

# Snippets — operations

Accessor: `client.snippets` · Source: `src/resources/snippets.ts` · 3 operations · Request types: namespace `Snippets`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteSnippet

- **Signature**: `deleteSnippet(request: Snippets.DeleteSnippetRequest, options?: RequestOptions): ApiPromise<DeleteSnippetResponse, ApiError>`
- **Wire**: `DELETE /v2/sites/{site_id}/snippet`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteSnippetResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Snippets.DeleteSnippetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `siteId` | `path` | `site_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteSnippetResponse` | `deleteSnippetResponseSchema` | `src/models/delete-snippet-response.ts` |

### retrieveSnippet

- **Signature**: `retrieveSnippet(request: Snippets.RetrieveSnippetRequest, options?: RequestOptions): ApiPromise<RetrieveSnippetResponse, ApiError>`
- **Wire**: `GET /v2/sites/{site_id}/snippet`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveSnippetResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Snippets.RetrieveSnippetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `siteId` | `path` | `site_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveSnippetResponse` | `retrieveSnippetResponseSchema` | `src/models/retrieve-snippet-response.ts` |

### upsertSnippet

- **Signature**: `upsertSnippet(request: Snippets.UpsertSnippetRequestParams, options?: RequestOptions): ApiPromise<UpsertSnippetResponse, ApiError>`
- **Wire**: `POST /v2/sites/{site_id}/snippet`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpsertSnippetResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Snippets.UpsertSnippetRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `siteId` | `path` | `site_id` | `string` | yes |
| `body` | `body` | — | `UpsertSnippetRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpsertSnippetRequest` | `upsertSnippetRequestSchema` | `src/models/upsert-snippet-request.ts` |
| `UpsertSnippetResponse` | `upsertSnippetResponseSchema` | `src/models/upsert-snippet-response.ts` |

