<!-- Generated file — do not edit; regenerated with the SDK. -->

# Locations — operations

Accessor: `client.locations` · Source: `src/resources/locations.ts` · 4 operations · Request types: namespace `Locations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createLocation

- **Signature**: `createLocation(request: Locations.CreateLocationRequestParams, options?: RequestOptions): ApiPromise<CreateLocationResponse, ResponseError>`
- **Wire**: `POST /v2/locations`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateLocationResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Locations.CreateLocationRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateLocationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateLocationRequest` | `createLocationRequestSchema` | `src/models/create-location-request.ts` |
| `CreateLocationResponse` | `createLocationResponseSchema` | `src/models/create-location-response.ts` |

### listLocations

- **Signature**: `listLocations(options?: RequestOptions): ApiPromise<ListLocationsResponse, ResponseError>`
- **Wire**: `GET /v2/locations`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListLocationsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `ListLocationsResponse` | `listLocationsResponseSchema` | `src/models/list-locations-response.ts` |

### retrieveLocation

- **Signature**: `retrieveLocation(request: Locations.RetrieveLocationRequest, options?: RequestOptions): ApiPromise<RetrieveLocationResponse, ResponseError>`
- **Wire**: `GET /v2/locations/{location_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveLocationResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Locations.RetrieveLocationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locationId` | `path` | `location_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveLocationResponse` | `retrieveLocationResponseSchema` | `src/models/retrieve-location-response.ts` |

### updateLocation

- **Signature**: `updateLocation(request: Locations.UpdateLocationRequestParams, options?: RequestOptions): ApiPromise<UpdateLocationResponse, ResponseError>`
- **Wire**: `PUT /v2/locations/{location_id}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpdateLocationResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Locations.UpdateLocationRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locationId` | `path` | `location_id` | `string` | yes |
| `body` | `body` | — | `UpdateLocationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateLocationRequest` | `updateLocationRequestSchema` | `src/models/update-location-request.ts` |
| `UpdateLocationResponse` | `updateLocationResponseSchema` | `src/models/update-location-response.ts` |

