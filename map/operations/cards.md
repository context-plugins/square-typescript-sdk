<!-- Generated file — do not edit; regenerated with the SDK. -->

# Cards — operations

Accessor: `client.cards` · Source: `src/resources/cards.ts` · 4 operations · Request types: namespace `Cards`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createCard

- **Signature**: `createCard(request: Cards.CreateCardRequestParams, options?: RequestOptions): ApiPromise<CreateCardResponse, ResponseError>`
- **Wire**: `POST /v2/cards`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateCardResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Cards.CreateCardRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateCardRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCardRequest` | `createCardRequestSchema` | `src/models/create-card-request.ts` |
| `CreateCardResponse` | `createCardResponseSchema` | `src/models/create-card-response.ts` |

### disableCard

- **Signature**: `disableCard(request: Cards.DisableCardRequest, options?: RequestOptions): ApiPromise<DisableCardResponse, ResponseError>`
- **Wire**: `POST /v2/cards/{card_id}/disable`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DisableCardResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Cards.DisableCardRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cardId` | `path` | `card_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DisableCardResponse` | `disableCardResponseSchema` | `src/models/disable-card-response.ts` |

### listCards

- **Signature**: `listCards(request: Cards.ListCardsRequest, options?: RequestOptions): ApiPromise<ListCardsResponse, ResponseError>`
- **Wire**: `GET /v2/cards`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListCardsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Cards.ListCardsRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `cursor` | `query` | — | `string` | no | — |
| `customerId` | `query` | `customer_id` | `string` | no | — |
| `includeDisabled` | `query` | `include_disabled` | `boolean` | no | `false` |
| `referenceId` | `query` | `reference_id` | `string` | no | — |
| `sortOrder` | `query` | `sort_order` | `SortOrder` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `ListCardsResponse` | `listCardsResponseSchema` | `src/models/list-cards-response.ts` |

### retrieveCard

- **Signature**: `retrieveCard(request: Cards.RetrieveCardRequest, options?: RequestOptions): ApiPromise<RetrieveCardResponse, ResponseError>`
- **Wire**: `GET /v2/cards/{card_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveCardResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Cards.RetrieveCardRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cardId` | `path` | `card_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveCardResponse` | `retrieveCardResponseSchema` | `src/models/retrieve-card-response.ts` |

