<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomerSegments — operations

Accessor: `client.customerSegments` · Source: `src/resources/customer-segments.ts` · 2 operations · Request types: namespace `CustomerSegments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### listCustomerSegments

- **Signature**: `listCustomerSegments(request: CustomerSegments.ListCustomerSegmentsRequest, options?: RequestOptions): ApiPromise<ListCustomerSegmentsResponse, ResponseError>`
- **Wire**: `GET /v2/customers/segments`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListCustomerSegmentsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CustomerSegments.ListCustomerSegmentsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `cursor` | `query` | `string` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListCustomerSegmentsResponse` | `listCustomerSegmentsResponseSchema` | `src/models/list-customer-segments-response.ts` |

### retrieveCustomerSegment

- **Signature**: `retrieveCustomerSegment(request: CustomerSegments.RetrieveCustomerSegmentRequest, options?: RequestOptions): ApiPromise<RetrieveCustomerSegmentResponse, ResponseError>`
- **Wire**: `GET /v2/customers/segments/{segment_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveCustomerSegmentResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CustomerSegments.RetrieveCustomerSegmentRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `segmentId` | `path` | `segment_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveCustomerSegmentResponse` | `retrieveCustomerSegmentResponseSchema` | `src/models/retrieve-customer-segment-response.ts` |

