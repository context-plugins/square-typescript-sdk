<!-- Generated file — do not edit; regenerated with the SDK. -->

# Disputes — operations

Accessor: `client.disputes` · Source: `src/resources/disputes.ts` · 9 operations · Request types: namespace `Disputes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### acceptDispute

- **Signature**: `acceptDispute(request: Disputes.AcceptDisputeRequest, options?: RequestOptions): ApiPromise<AcceptDisputeResponse, ResponseError>`
- **Wire**: `POST /v2/disputes/{dispute_id}/accept`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AcceptDisputeResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Disputes.AcceptDisputeRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `disputeId` | `path` | `dispute_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AcceptDisputeResponse` | `acceptDisputeResponseSchema` | `src/models/accept-dispute-response.ts` |

### createDisputeEvidenceFile

- **Signature**: `createDisputeEvidenceFile(request: Disputes.CreateDisputeEvidenceFileRequestParams, options?: RequestOptions): ApiPromise<CreateDisputeEvidenceFileResponse, ResponseError>`
- **Wire**: `POST /v2/disputes/{dispute_id}/evidence-files`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CreateDisputeEvidenceFileResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Disputes.CreateDisputeEvidenceFileRequestParams` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `disputeId` | `path` | `dispute_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateDisputeEvidenceFileResponse` | `createDisputeEvidenceFileResponseSchema` | `src/models/create-dispute-evidence-file-response.ts` |

### createDisputeEvidenceText

- **Signature**: `createDisputeEvidenceText(request: Disputes.CreateDisputeEvidenceTextRequestParams, options?: RequestOptions): ApiPromise<CreateDisputeEvidenceTextResponse, ResponseError>`
- **Wire**: `POST /v2/disputes/{dispute_id}/evidence-text`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateDisputeEvidenceTextResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Disputes.CreateDisputeEvidenceTextRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `disputeId` | `path` | `dispute_id` | `string` | yes |
| `body` | `body` | — | `CreateDisputeEvidenceTextRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateDisputeEvidenceTextRequest` | `createDisputeEvidenceTextRequestSchema` | `src/models/create-dispute-evidence-text-request.ts` |
| `CreateDisputeEvidenceTextResponse` | `createDisputeEvidenceTextResponseSchema` | `src/models/create-dispute-evidence-text-response.ts` |

### deleteDisputeEvidence

- **Signature**: `deleteDisputeEvidence(request: Disputes.DeleteDisputeEvidenceRequest, options?: RequestOptions): ApiPromise<DeleteDisputeEvidenceResponse, ResponseError>`
- **Wire**: `DELETE /v2/disputes/{dispute_id}/evidence/{evidence_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeleteDisputeEvidenceResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Disputes.DeleteDisputeEvidenceRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `disputeId` | `path` | `dispute_id` | `string` | yes |
| `evidenceId` | `path` | `evidence_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteDisputeEvidenceResponse` | `deleteDisputeEvidenceResponseSchema` | `src/models/delete-dispute-evidence-response.ts` |

### listDisputeEvidence

- **Signature**: `listDisputeEvidence(request: Disputes.ListDisputeEvidenceRequest, options?: RequestOptions): ApiPromise<ListDisputeEvidenceResponse, ResponseError>`
- **Wire**: `GET /v2/disputes/{dispute_id}/evidence`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListDisputeEvidenceResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Disputes.ListDisputeEvidenceRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `disputeId` | `path` | `dispute_id` | `string` | yes |
| `cursor` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListDisputeEvidenceResponse` | `listDisputeEvidenceResponseSchema` | `src/models/list-dispute-evidence-response.ts` |

### listDisputes

- **Signature**: `listDisputes(request: Disputes.ListDisputesRequest, options?: RequestOptions): ApiPromise<ListDisputesResponse, ResponseError>`
- **Wire**: `GET /v2/disputes`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListDisputesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Disputes.ListDisputesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cursor` | `query` | — | `string` | no |
| `states` | `query` | — | `DisputeState` | no |
| `locationId` | `query` | `location_id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DisputeState` | `disputeStateSchema` | `src/models/dispute-state.ts` |
| `ListDisputesResponse` | `listDisputesResponseSchema` | `src/models/list-disputes-response.ts` |

### retrieveDispute

- **Signature**: `retrieveDispute(request: Disputes.RetrieveDisputeRequest, options?: RequestOptions): ApiPromise<RetrieveDisputeResponse, ResponseError>`
- **Wire**: `GET /v2/disputes/{dispute_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveDisputeResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Disputes.RetrieveDisputeRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `disputeId` | `path` | `dispute_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveDisputeResponse` | `retrieveDisputeResponseSchema` | `src/models/retrieve-dispute-response.ts` |

### retrieveDisputeEvidence

- **Signature**: `retrieveDisputeEvidence(request: Disputes.RetrieveDisputeEvidenceRequest, options?: RequestOptions): ApiPromise<RetrieveDisputeEvidenceResponse, ResponseError>`
- **Wire**: `GET /v2/disputes/{dispute_id}/evidence/{evidence_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveDisputeEvidenceResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Disputes.RetrieveDisputeEvidenceRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `disputeId` | `path` | `dispute_id` | `string` | yes |
| `evidenceId` | `path` | `evidence_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveDisputeEvidenceResponse` | `retrieveDisputeEvidenceResponseSchema` | `src/models/retrieve-dispute-evidence-response.ts` |

### submitEvidence

- **Signature**: `submitEvidence(request: Disputes.SubmitEvidenceRequest, options?: RequestOptions): ApiPromise<SubmitEvidenceResponse, ResponseError>`
- **Wire**: `POST /v2/disputes/{dispute_id}/submit-evidence`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SubmitEvidenceResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Disputes.SubmitEvidenceRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `disputeId` | `path` | `dispute_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SubmitEvidenceResponse` | `submitEvidenceResponseSchema` | `src/models/submit-evidence-response.ts` |

