<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.events` · Source: `src/resources/events.ts` · 4 operations · Request types: namespace `Events`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### disableEvents

- **Signature**: `disableEvents(options?: RequestOptions): ApiPromise<DisableEventsResponse, ResponseError>`
- **Wire**: `PUT /v2/events/disable`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DisableEventsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `DisableEventsResponse` | `disableEventsResponseSchema` | `src/models/disable-events-response.ts` |

### enableEvents

- **Signature**: `enableEvents(options?: RequestOptions): ApiPromise<EnableEventsResponse, ResponseError>`
- **Wire**: `PUT /v2/events/enable`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EnableEventsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `EnableEventsResponse` | `enableEventsResponseSchema` | `src/models/enable-events-response.ts` |

### listEventTypes

- **Signature**: `listEventTypes(request: Events.ListEventTypesRequest, options?: RequestOptions): ApiPromise<ListEventTypesResponse, ResponseError>`
- **Wire**: `GET /v2/events/types`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListEventTypesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Events.ListEventTypesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `apiVersion` | `query` | `api_version` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListEventTypesResponse` | `listEventTypesResponseSchema` | `src/models/list-event-types-response.ts` |

### searchEvents

- **Signature**: `searchEvents(request: Events.SearchEventsRequestParams, options?: RequestOptions): ApiPromise<SearchEventsResponse, ResponseError>`
- **Wire**: `POST /v2/events`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `SearchEventsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Events.SearchEventsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchEventsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchEventsRequest` | `searchEventsRequestSchema` | `src/models/search-events-request.ts` |
| `SearchEventsResponse` | `searchEventsResponseSchema` | `src/models/search-events-response.ts` |

