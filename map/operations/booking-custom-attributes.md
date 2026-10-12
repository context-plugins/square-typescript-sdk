<!-- Generated file — do not edit; regenerated with the SDK. -->

# BookingCustomAttributes — operations

Accessor: `client.bookingCustomAttributes` · Source: `src/resources/booking-custom-attributes.ts` · 11 operations · Request types: namespace `BookingCustomAttributes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bulkDeleteBookingCustomAttributes

- **Signature**: `bulkDeleteBookingCustomAttributes(request: BookingCustomAttributes.BulkDeleteBookingCustomAttributesRequestParams, options?: RequestOptions): ApiPromise<BulkDeleteBookingCustomAttributesResponse, ApiError>`
- **Wire**: `POST /v2/bookings/custom-attributes/bulk-delete`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkDeleteBookingCustomAttributesResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BookingCustomAttributes.BulkDeleteBookingCustomAttributesRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkDeleteBookingCustomAttributesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkDeleteBookingCustomAttributesRequest` | `bulkDeleteBookingCustomAttributesRequestSchema` | `src/models/bulk-delete-booking-custom-attributes-request.ts` |
| `BulkDeleteBookingCustomAttributesResponse` | `bulkDeleteBookingCustomAttributesResponseSchema` | `src/models/bulk-delete-booking-custom-attributes-response.ts` |

### bulkUpsertBookingCustomAttributes

- **Signature**: `bulkUpsertBookingCustomAttributes(request: BookingCustomAttributes.BulkUpsertBookingCustomAttributesRequestParams, options?: RequestOptions): ApiPromise<BulkUpsertBookingCustomAttributesResponse, ApiError>`
- **Wire**: `POST /v2/bookings/custom-attributes/bulk-upsert`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkUpsertBookingCustomAttributesResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BookingCustomAttributes.BulkUpsertBookingCustomAttributesRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkUpsertBookingCustomAttributesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkUpsertBookingCustomAttributesRequest` | `bulkUpsertBookingCustomAttributesRequestSchema` | `src/models/bulk-upsert-booking-custom-attributes-request.ts` |
| `BulkUpsertBookingCustomAttributesResponse` | `bulkUpsertBookingCustomAttributesResponseSchema` | `src/models/bulk-upsert-booking-custom-attributes-response.ts` |

### createBookingCustomAttributeDefinition

- **Signature**: `createBookingCustomAttributeDefinition(request: BookingCustomAttributes.CreateBookingCustomAttributeDefinitionRequestParams, options?: RequestOptions): ApiPromise<CreateBookingCustomAttributeDefinitionResponse, ApiError>`
- **Wire**: `POST /v2/bookings/custom-attribute-definitions`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateBookingCustomAttributeDefinitionResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BookingCustomAttributes.CreateBookingCustomAttributeDefinitionRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateBookingCustomAttributeDefinitionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateBookingCustomAttributeDefinitionRequest` | `createBookingCustomAttributeDefinitionRequestSchema` | `src/models/create-booking-custom-attribute-definition-request.ts` |
| `CreateBookingCustomAttributeDefinitionResponse` | `createBookingCustomAttributeDefinitionResponseSchema` | `src/models/create-booking-custom-attribute-definition-response.ts` |

### deleteBookingCustomAttribute

- **Signature**: `deleteBookingCustomAttribute(request: BookingCustomAttributes.DeleteBookingCustomAttributeRequest, options?: RequestOptions): ApiPromise<DeleteBookingCustomAttributeResponse, ApiError>`
- **Wire**: `DELETE /v2/bookings/{booking_id}/custom-attributes/{key}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteBookingCustomAttributeResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BookingCustomAttributes.DeleteBookingCustomAttributeRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `bookingId` | `path` | `booking_id` | `string` | yes |
| `key` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteBookingCustomAttributeResponse` | `deleteBookingCustomAttributeResponseSchema` | `src/models/delete-booking-custom-attribute-response.ts` |

### deleteBookingCustomAttributeDefinition

- **Signature**: `deleteBookingCustomAttributeDefinition(request: BookingCustomAttributes.DeleteBookingCustomAttributeDefinitionRequest, options?: RequestOptions): ApiPromise<DeleteBookingCustomAttributeDefinitionResponse, ApiError>`
- **Wire**: `DELETE /v2/bookings/custom-attribute-definitions/{key}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteBookingCustomAttributeDefinitionResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BookingCustomAttributes.DeleteBookingCustomAttributeDefinitionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteBookingCustomAttributeDefinitionResponse` | `deleteBookingCustomAttributeDefinitionResponseSchema` | `src/models/delete-booking-custom-attribute-definition-response.ts` |

### listBookingCustomAttributeDefinitions

- **Signature**: `listBookingCustomAttributeDefinitions(request: BookingCustomAttributes.ListBookingCustomAttributeDefinitionsRequest, options?: RequestOptions): ApiPromise<ListBookingCustomAttributeDefinitionsResponse, ApiError>`
- **Wire**: `GET /v2/bookings/custom-attribute-definitions`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListBookingCustomAttributeDefinitionsResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BookingCustomAttributes.ListBookingCustomAttributeDefinitionsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `limit` | `query` | `number` | no |
| `cursor` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListBookingCustomAttributeDefinitionsResponse` | `listBookingCustomAttributeDefinitionsResponseSchema` | `src/models/list-booking-custom-attribute-definitions-response.ts` |

### listBookingCustomAttributes

- **Signature**: `listBookingCustomAttributes(request: BookingCustomAttributes.ListBookingCustomAttributesRequest, options?: RequestOptions): ApiPromise<ListBookingCustomAttributesResponse, ApiError>`
- **Wire**: `GET /v2/bookings/{booking_id}/custom-attributes`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListBookingCustomAttributesResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BookingCustomAttributes.ListBookingCustomAttributesRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `bookingId` | `path` | `booking_id` | `string` | yes | — |
| `limit` | `query` | — | `number` | no | — |
| `cursor` | `query` | — | `string` | no | — |
| `withDefinitions` | `query` | `with_definitions` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListBookingCustomAttributesResponse` | `listBookingCustomAttributesResponseSchema` | `src/models/list-booking-custom-attributes-response.ts` |

### retrieveBookingCustomAttribute

- **Signature**: `retrieveBookingCustomAttribute(request: BookingCustomAttributes.RetrieveBookingCustomAttributeRequest, options?: RequestOptions): ApiPromise<RetrieveBookingCustomAttributeResponse, ApiError>`
- **Wire**: `GET /v2/bookings/{booking_id}/custom-attributes/{key}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveBookingCustomAttributeResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BookingCustomAttributes.RetrieveBookingCustomAttributeRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `bookingId` | `path` | `booking_id` | `string` | yes | — |
| `key` | `path` | — | `string` | yes | — |
| `withDefinition` | `query` | `with_definition` | `boolean` | no | `false` |
| `version` | `query` | — | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveBookingCustomAttributeResponse` | `retrieveBookingCustomAttributeResponseSchema` | `src/models/retrieve-booking-custom-attribute-response.ts` |

### retrieveBookingCustomAttributeDefinition

- **Signature**: `retrieveBookingCustomAttributeDefinition(request: BookingCustomAttributes.RetrieveBookingCustomAttributeDefinitionRequest, options?: RequestOptions): ApiPromise<RetrieveBookingCustomAttributeDefinitionResponse, ApiError>`
- **Wire**: `GET /v2/bookings/custom-attribute-definitions/{key}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveBookingCustomAttributeDefinitionResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BookingCustomAttributes.RetrieveBookingCustomAttributeDefinitionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `version` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveBookingCustomAttributeDefinitionResponse` | `retrieveBookingCustomAttributeDefinitionResponseSchema` | `src/models/retrieve-booking-custom-attribute-definition-response.ts` |

### updateBookingCustomAttributeDefinition

- **Signature**: `updateBookingCustomAttributeDefinition(request: BookingCustomAttributes.UpdateBookingCustomAttributeDefinitionRequestParams, options?: RequestOptions): ApiPromise<UpdateBookingCustomAttributeDefinitionResponse, ApiError>`
- **Wire**: `PUT /v2/bookings/custom-attribute-definitions/{key}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateBookingCustomAttributeDefinitionResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BookingCustomAttributes.UpdateBookingCustomAttributeDefinitionRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `body` | `body` | `UpdateBookingCustomAttributeDefinitionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateBookingCustomAttributeDefinitionRequest` | `updateBookingCustomAttributeDefinitionRequestSchema` | `src/models/update-booking-custom-attribute-definition-request.ts` |
| `UpdateBookingCustomAttributeDefinitionResponse` | `updateBookingCustomAttributeDefinitionResponseSchema` | `src/models/update-booking-custom-attribute-definition-response.ts` |

### upsertBookingCustomAttribute

- **Signature**: `upsertBookingCustomAttribute(request: BookingCustomAttributes.UpsertBookingCustomAttributeRequestParams, options?: RequestOptions): ApiPromise<UpsertBookingCustomAttributeResponse, ApiError>`
- **Wire**: `PUT /v2/bookings/{booking_id}/custom-attributes/{key}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpsertBookingCustomAttributeResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `BookingCustomAttributes.UpsertBookingCustomAttributeRequestParams` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `bookingId` | `path` | `booking_id` | `string` | yes |
| `key` | `path` | — | `string` | yes |
| `body` | `body` | — | `UpsertBookingCustomAttributeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpsertBookingCustomAttributeRequest` | `upsertBookingCustomAttributeRequestSchema` | `src/models/upsert-booking-custom-attribute-request.ts` |
| `UpsertBookingCustomAttributeResponse` | `upsertBookingCustomAttributeResponseSchema` | `src/models/upsert-booking-custom-attribute-response.ts` |

