<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bookings — operations

Accessor: `client.bookings` · Source: `src/resources/bookings.ts` · 13 operations · Request types: namespace `Bookings`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### bulkRetrieveBookings

- **Signature**: `bulkRetrieveBookings(request: Bookings.BulkRetrieveBookingsRequestParams, options?: RequestOptions): ApiPromise<BulkRetrieveBookingsResponse, ResponseError>`
- **Wire**: `POST /v2/bookings/bulk-retrieve`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BulkRetrieveBookingsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Bookings.BulkRetrieveBookingsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkRetrieveBookingsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkRetrieveBookingsRequest` | `bulkRetrieveBookingsRequestSchema` | `src/models/bulk-retrieve-bookings-request.ts` |
| `BulkRetrieveBookingsResponse` | `bulkRetrieveBookingsResponseSchema` | `src/models/bulk-retrieve-bookings-response.ts` |

### bulkRetrieveTeamMemberBookingProfiles

- **Signature**: `bulkRetrieveTeamMemberBookingProfiles(request: Bookings.BulkRetrieveTeamMemberBookingProfilesRequestParams, options?: RequestOptions): ApiPromise<BulkRetrieveTeamMemberBookingProfilesResponse, ResponseError>`
- **Wire**: `POST /v2/bookings/team-member-booking-profiles/bulk-retrieve`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BulkRetrieveTeamMemberBookingProfilesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Bookings.BulkRetrieveTeamMemberBookingProfilesRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkRetrieveTeamMemberBookingProfilesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkRetrieveTeamMemberBookingProfilesRequest` | `bulkRetrieveTeamMemberBookingProfilesRequestSchema` | `src/models/bulk-retrieve-team-member-booking-profiles-request.ts` |
| `BulkRetrieveTeamMemberBookingProfilesResponse` | `bulkRetrieveTeamMemberBookingProfilesResponseSchema` | `src/models/bulk-retrieve-team-member-booking-profiles-response.ts` |

### cancelBooking

- **Signature**: `cancelBooking(request: Bookings.CancelBookingRequestParams, options?: RequestOptions): ApiPromise<CancelBookingResponse, ResponseError>`
- **Wire**: `POST /v2/bookings/{booking_id}/cancel`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CancelBookingResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Bookings.CancelBookingRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `bookingId` | `path` | `booking_id` | `string` | yes |
| `body` | `body` | — | `CancelBookingRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelBookingRequest` | `cancelBookingRequestSchema` | `src/models/cancel-booking-request.ts` |
| `CancelBookingResponse` | `cancelBookingResponseSchema` | `src/models/cancel-booking-response.ts` |

### createBooking

- **Signature**: `createBooking(request: Bookings.CreateBookingRequestParams, options?: RequestOptions): ApiPromise<CreateBookingResponse, ResponseError>`
- **Wire**: `POST /v2/bookings`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateBookingResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Bookings.CreateBookingRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateBookingRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateBookingRequest` | `createBookingRequestSchema` | `src/models/create-booking-request.ts` |
| `CreateBookingResponse` | `createBookingResponseSchema` | `src/models/create-booking-response.ts` |

### listBookings

- **Signature**: `listBookings(request: Bookings.ListBookingsRequest, options?: RequestOptions): ApiPromise<ListBookingsResponse, ResponseError>`
- **Wire**: `GET /v2/bookings`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListBookingsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Bookings.ListBookingsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `customerId` | `query` | `customer_id` | `string` | no |
| `teamMemberId` | `query` | `team_member_id` | `string` | no |
| `locationId` | `query` | `location_id` | `string` | no |
| `startAtMin` | `query` | `start_at_min` | `string` | no |
| `startAtMax` | `query` | `start_at_max` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListBookingsResponse` | `listBookingsResponseSchema` | `src/models/list-bookings-response.ts` |

### listLocationBookingProfiles

- **Signature**: `listLocationBookingProfiles(request: Bookings.ListLocationBookingProfilesRequest, options?: RequestOptions): ApiPromise<ListLocationBookingProfilesResponse, ResponseError>`
- **Wire**: `GET /v2/bookings/location-booking-profiles`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListLocationBookingProfilesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Bookings.ListLocationBookingProfilesRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `limit` | `query` | `number` | no |
| `cursor` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListLocationBookingProfilesResponse` | `listLocationBookingProfilesResponseSchema` | `src/models/list-location-booking-profiles-response.ts` |

### listTeamMemberBookingProfiles

- **Signature**: `listTeamMemberBookingProfiles(request: Bookings.ListTeamMemberBookingProfilesRequest, options?: RequestOptions): ApiPromise<ListTeamMemberBookingProfilesResponse, ResponseError>`
- **Wire**: `GET /v2/bookings/team-member-booking-profiles`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListTeamMemberBookingProfilesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Bookings.ListTeamMemberBookingProfilesRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `bookableOnly` | `query` | `bookable_only` | `boolean` | no | `false` |
| `limit` | `query` | — | `number` | no | — |
| `cursor` | `query` | — | `string` | no | — |
| `locationId` | `query` | `location_id` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListTeamMemberBookingProfilesResponse` | `listTeamMemberBookingProfilesResponseSchema` | `src/models/list-team-member-booking-profiles-response.ts` |

### retrieveBooking

- **Signature**: `retrieveBooking(request: Bookings.RetrieveBookingRequest, options?: RequestOptions): ApiPromise<RetrieveBookingResponse, ResponseError>`
- **Wire**: `GET /v2/bookings/{booking_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveBookingResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Bookings.RetrieveBookingRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `bookingId` | `path` | `booking_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveBookingResponse` | `retrieveBookingResponseSchema` | `src/models/retrieve-booking-response.ts` |

### retrieveBusinessBookingProfile

- **Signature**: `retrieveBusinessBookingProfile(options?: RequestOptions): ApiPromise<RetrieveBusinessBookingProfileResponse, ResponseError>`
- **Wire**: `GET /v2/bookings/business-booking-profile`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveBusinessBookingProfileResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveBusinessBookingProfileResponse` | `retrieveBusinessBookingProfileResponseSchema` | `src/models/retrieve-business-booking-profile-response.ts` |

### retrieveLocationBookingProfile

- **Signature**: `retrieveLocationBookingProfile(request: Bookings.RetrieveLocationBookingProfileRequest, options?: RequestOptions): ApiPromise<RetrieveLocationBookingProfileResponse, ResponseError>`
- **Wire**: `GET /v2/bookings/location-booking-profiles/{location_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveLocationBookingProfileResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Bookings.RetrieveLocationBookingProfileRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locationId` | `path` | `location_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveLocationBookingProfileResponse` | `retrieveLocationBookingProfileResponseSchema` | `src/models/retrieve-location-booking-profile-response.ts` |

### retrieveTeamMemberBookingProfile

- **Signature**: `retrieveTeamMemberBookingProfile(request: Bookings.RetrieveTeamMemberBookingProfileRequest, options?: RequestOptions): ApiPromise<RetrieveTeamMemberBookingProfileResponse, ResponseError>`
- **Wire**: `GET /v2/bookings/team-member-booking-profiles/{team_member_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveTeamMemberBookingProfileResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Bookings.RetrieveTeamMemberBookingProfileRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `teamMemberId` | `path` | `team_member_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveTeamMemberBookingProfileResponse` | `retrieveTeamMemberBookingProfileResponseSchema` | `src/models/retrieve-team-member-booking-profile-response.ts` |

### searchAvailability

- **Signature**: `searchAvailability(request: Bookings.SearchAvailabilityRequestParams, options?: RequestOptions): ApiPromise<SearchAvailabilityResponse, ResponseError>`
- **Wire**: `POST /v2/bookings/availability/search`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `SearchAvailabilityResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Bookings.SearchAvailabilityRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchAvailabilityRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchAvailabilityRequest` | `searchAvailabilityRequestSchema` | `src/models/search-availability-request.ts` |
| `SearchAvailabilityResponse` | `searchAvailabilityResponseSchema` | `src/models/search-availability-response.ts` |

### updateBooking

- **Signature**: `updateBooking(request: Bookings.UpdateBookingRequestParams, options?: RequestOptions): ApiPromise<UpdateBookingResponse, ResponseError>`
- **Wire**: `PUT /v2/bookings/{booking_id}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpdateBookingResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Bookings.UpdateBookingRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `bookingId` | `path` | `booking_id` | `string` | yes |
| `body` | `body` | — | `UpdateBookingRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateBookingRequest` | `updateBookingRequestSchema` | `src/models/update-booking-request.ts` |
| `UpdateBookingResponse` | `updateBookingResponseSchema` | `src/models/update-booking-response.ts` |

