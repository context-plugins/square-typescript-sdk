<!-- Generated file — do not edit; regenerated with the SDK. -->

# GiftCards — operations

Accessor: `client.giftCards` · Source: `src/resources/gift-cards.ts` · 7 operations · Request types: namespace `GiftCards`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createGiftCard

- **Signature**: `createGiftCard(request: GiftCards.CreateGiftCardRequestParams, options?: RequestOptions): ApiPromise<CreateGiftCardResponse, ApiError>`
- **Wire**: `POST /v2/gift-cards`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateGiftCardResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `GiftCards.CreateGiftCardRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateGiftCardRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateGiftCardRequest` | `createGiftCardRequestSchema` | `src/models/create-gift-card-request.ts` |
| `CreateGiftCardResponse` | `createGiftCardResponseSchema` | `src/models/create-gift-card-response.ts` |

### linkCustomerToGiftCard

- **Signature**: `linkCustomerToGiftCard(request: GiftCards.LinkCustomerToGiftCardRequestParams, options?: RequestOptions): ApiPromise<LinkCustomerToGiftCardResponse, ApiError>`
- **Wire**: `POST /v2/gift-cards/{gift_card_id}/link-customer`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `LinkCustomerToGiftCardResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `GiftCards.LinkCustomerToGiftCardRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `giftCardId` | `path` | `gift_card_id` | `string` | yes |
| `body` | `body` | — | `LinkCustomerToGiftCardRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `LinkCustomerToGiftCardRequest` | `linkCustomerToGiftCardRequestSchema` | `src/models/link-customer-to-gift-card-request.ts` |
| `LinkCustomerToGiftCardResponse` | `linkCustomerToGiftCardResponseSchema` | `src/models/link-customer-to-gift-card-response.ts` |

### listGiftCards

- **Signature**: `listGiftCards(request: GiftCards.ListGiftCardsRequest, options?: RequestOptions): ApiPromise<ListGiftCardsResponse, ApiError>`
- **Wire**: `GET /v2/gift-cards`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListGiftCardsResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `GiftCards.ListGiftCardsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `type` | `query` | — | `string` | no |
| `state` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `customerId` | `query` | `customer_id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListGiftCardsResponse` | `listGiftCardsResponseSchema` | `src/models/list-gift-cards-response.ts` |

### retrieveGiftCard

- **Signature**: `retrieveGiftCard(request: GiftCards.RetrieveGiftCardRequest, options?: RequestOptions): ApiPromise<RetrieveGiftCardResponse, ApiError>`
- **Wire**: `GET /v2/gift-cards/{id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveGiftCardResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `GiftCards.RetrieveGiftCardRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveGiftCardResponse` | `retrieveGiftCardResponseSchema` | `src/models/retrieve-gift-card-response.ts` |

### retrieveGiftCardFromGan

- **Signature**: `retrieveGiftCardFromGan(request: GiftCards.RetrieveGiftCardFromGanRequestParams, options?: RequestOptions): ApiPromise<RetrieveGiftCardFromGanResponse, ApiError>`
- **Wire**: `POST /v2/gift-cards/from-gan`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RetrieveGiftCardFromGanResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `GiftCards.RetrieveGiftCardFromGanRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RetrieveGiftCardFromGanRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveGiftCardFromGanRequest` | `retrieveGiftCardFromGanRequestSchema` | `src/models/retrieve-gift-card-from-gan-request.ts` |
| `RetrieveGiftCardFromGanResponse` | `retrieveGiftCardFromGanResponseSchema` | `src/models/retrieve-gift-card-from-gan-response.ts` |

### retrieveGiftCardFromNonce

- **Signature**: `retrieveGiftCardFromNonce(request: GiftCards.RetrieveGiftCardFromNonceRequestParams, options?: RequestOptions): ApiPromise<RetrieveGiftCardFromNonceResponse, ApiError>`
- **Wire**: `POST /v2/gift-cards/from-nonce`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RetrieveGiftCardFromNonceResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `GiftCards.RetrieveGiftCardFromNonceRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RetrieveGiftCardFromNonceRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveGiftCardFromNonceRequest` | `retrieveGiftCardFromNonceRequestSchema` | `src/models/retrieve-gift-card-from-nonce-request.ts` |
| `RetrieveGiftCardFromNonceResponse` | `retrieveGiftCardFromNonceResponseSchema` | `src/models/retrieve-gift-card-from-nonce-response.ts` |

### unlinkCustomerFromGiftCard

- **Signature**: `unlinkCustomerFromGiftCard(request: GiftCards.UnlinkCustomerFromGiftCardRequestParams, options?: RequestOptions): ApiPromise<UnlinkCustomerFromGiftCardResponse, ApiError>`
- **Wire**: `POST /v2/gift-cards/{gift_card_id}/unlink-customer`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UnlinkCustomerFromGiftCardResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `GiftCards.UnlinkCustomerFromGiftCardRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `giftCardId` | `path` | `gift_card_id` | `string` | yes |
| `body` | `body` | — | `UnlinkCustomerFromGiftCardRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UnlinkCustomerFromGiftCardRequest` | `unlinkCustomerFromGiftCardRequestSchema` | `src/models/unlink-customer-from-gift-card-request.ts` |
| `UnlinkCustomerFromGiftCardResponse` | `unlinkCustomerFromGiftCardResponseSchema` | `src/models/unlink-customer-from-gift-card-response.ts` |

