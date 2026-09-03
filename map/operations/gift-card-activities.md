<!-- Generated file — do not edit; regenerated with the SDK. -->

# GiftCardActivities — operations

Accessor: `client.giftCardActivities` · Source: `src/resources/gift-card-activities.ts` · 2 operations · Request types: namespace `GiftCardActivities`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createGiftCardActivity

- **Signature**: `createGiftCardActivity(request: GiftCardActivities.CreateGiftCardActivityRequestParams, options?: RequestOptions): ApiPromise<CreateGiftCardActivityResponse, ResponseError>`
- **Wire**: `POST /v2/gift-cards/activities`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateGiftCardActivityResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `GiftCardActivities.CreateGiftCardActivityRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateGiftCardActivityRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateGiftCardActivityRequest` | `createGiftCardActivityRequestSchema` | `src/models/create-gift-card-activity-request.ts` |
| `CreateGiftCardActivityResponse` | `createGiftCardActivityResponseSchema` | `src/models/create-gift-card-activity-response.ts` |

### listGiftCardActivities

- **Signature**: `listGiftCardActivities(request: GiftCardActivities.ListGiftCardActivitiesRequest, options?: RequestOptions): ApiPromise<ListGiftCardActivitiesResponse, ResponseError>`
- **Wire**: `GET /v2/gift-cards/activities`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListGiftCardActivitiesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `GiftCardActivities.ListGiftCardActivitiesRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `giftCardId` | `query` | `gift_card_id` | `string` | no |
| `type` | `query` | — | `string` | no |
| `locationId` | `query` | `location_id` | `string` | no |
| `beginTime` | `query` | `begin_time` | `string` | no |
| `endTime` | `query` | `end_time` | `string` | no |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `sortOrder` | `query` | `sort_order` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListGiftCardActivitiesResponse` | `listGiftCardActivitiesResponseSchema` | `src/models/list-gift-card-activities-response.ts` |

