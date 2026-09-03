<!-- Generated file — do not edit; regenerated with the SDK. -->

# Loyalty — operations

Accessor: `client.loyalty` · Source: `src/resources/loyalty.ts` · 18 operations · Request types: namespace `Loyalty`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### accumulateLoyaltyPoints

- **Signature**: `accumulateLoyaltyPoints(request: Loyalty.AccumulateLoyaltyPointsRequestParams, options?: RequestOptions): ApiPromise<AccumulateLoyaltyPointsResponse, ResponseError>`
- **Wire**: `POST /v2/loyalty/accounts/{account_id}/accumulate`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `AccumulateLoyaltyPointsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Loyalty.AccumulateLoyaltyPointsRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `account_id` | `string` | yes |
| `body` | `body` | — | `AccumulateLoyaltyPointsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccumulateLoyaltyPointsRequest` | `accumulateLoyaltyPointsRequestSchema` | `src/models/accumulate-loyalty-points-request.ts` |
| `AccumulateLoyaltyPointsResponse` | `accumulateLoyaltyPointsResponseSchema` | `src/models/accumulate-loyalty-points-response.ts` |

### adjustLoyaltyPoints

- **Signature**: `adjustLoyaltyPoints(request: Loyalty.AdjustLoyaltyPointsRequestParams, options?: RequestOptions): ApiPromise<AdjustLoyaltyPointsResponse, ResponseError>`
- **Wire**: `POST /v2/loyalty/accounts/{account_id}/adjust`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `AdjustLoyaltyPointsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Loyalty.AdjustLoyaltyPointsRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `account_id` | `string` | yes |
| `body` | `body` | — | `AdjustLoyaltyPointsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdjustLoyaltyPointsRequest` | `adjustLoyaltyPointsRequestSchema` | `src/models/adjust-loyalty-points-request.ts` |
| `AdjustLoyaltyPointsResponse` | `adjustLoyaltyPointsResponseSchema` | `src/models/adjust-loyalty-points-response.ts` |

### calculateLoyaltyPoints

- **Signature**: `calculateLoyaltyPoints(request: Loyalty.CalculateLoyaltyPointsRequestParams, options?: RequestOptions): ApiPromise<CalculateLoyaltyPointsResponse, ResponseError>`
- **Wire**: `POST /v2/loyalty/programs/{program_id}/calculate`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CalculateLoyaltyPointsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Loyalty.CalculateLoyaltyPointsRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `programId` | `path` | `program_id` | `string` | yes |
| `body` | `body` | — | `CalculateLoyaltyPointsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CalculateLoyaltyPointsRequest` | `calculateLoyaltyPointsRequestSchema` | `src/models/calculate-loyalty-points-request.ts` |
| `CalculateLoyaltyPointsResponse` | `calculateLoyaltyPointsResponseSchema` | `src/models/calculate-loyalty-points-response.ts` |

### cancelLoyaltyPromotion

- **Signature**: `cancelLoyaltyPromotion(request: Loyalty.CancelLoyaltyPromotionRequest, options?: RequestOptions): ApiPromise<CancelLoyaltyPromotionResponse, ResponseError>`
- **Wire**: `POST /v2/loyalty/programs/{program_id}/promotions/{promotion_id}/cancel`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CancelLoyaltyPromotionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Loyalty.CancelLoyaltyPromotionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `promotionId` | `path` | `promotion_id` | `string` | yes |
| `programId` | `path` | `program_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelLoyaltyPromotionResponse` | `cancelLoyaltyPromotionResponseSchema` | `src/models/cancel-loyalty-promotion-response.ts` |

### createLoyaltyAccount

- **Signature**: `createLoyaltyAccount(request: Loyalty.CreateLoyaltyAccountRequestParams, options?: RequestOptions): ApiPromise<CreateLoyaltyAccountResponse, ResponseError>`
- **Wire**: `POST /v2/loyalty/accounts`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateLoyaltyAccountResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Loyalty.CreateLoyaltyAccountRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateLoyaltyAccountRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateLoyaltyAccountRequest` | `createLoyaltyAccountRequestSchema` | `src/models/create-loyalty-account-request.ts` |
| `CreateLoyaltyAccountResponse` | `createLoyaltyAccountResponseSchema` | `src/models/create-loyalty-account-response.ts` |

### createLoyaltyPromotion

- **Signature**: `createLoyaltyPromotion(request: Loyalty.CreateLoyaltyPromotionRequestParams, options?: RequestOptions): ApiPromise<CreateLoyaltyPromotionResponse, ResponseError>`
- **Wire**: `POST /v2/loyalty/programs/{program_id}/promotions`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateLoyaltyPromotionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Loyalty.CreateLoyaltyPromotionRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `programId` | `path` | `program_id` | `string` | yes |
| `body` | `body` | — | `CreateLoyaltyPromotionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateLoyaltyPromotionRequest` | `createLoyaltyPromotionRequestSchema` | `src/models/create-loyalty-promotion-request.ts` |
| `CreateLoyaltyPromotionResponse` | `createLoyaltyPromotionResponseSchema` | `src/models/create-loyalty-promotion-response.ts` |

### createLoyaltyReward

- **Signature**: `createLoyaltyReward(request: Loyalty.CreateLoyaltyRewardRequestParams, options?: RequestOptions): ApiPromise<CreateLoyaltyRewardResponse, ResponseError>`
- **Wire**: `POST /v2/loyalty/rewards`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateLoyaltyRewardResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Loyalty.CreateLoyaltyRewardRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateLoyaltyRewardRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateLoyaltyRewardRequest` | `createLoyaltyRewardRequestSchema` | `src/models/create-loyalty-reward-request.ts` |
| `CreateLoyaltyRewardResponse` | `createLoyaltyRewardResponseSchema` | `src/models/create-loyalty-reward-response.ts` |

### deleteLoyaltyReward

- **Signature**: `deleteLoyaltyReward(request: Loyalty.DeleteLoyaltyRewardRequest, options?: RequestOptions): ApiPromise<DeleteLoyaltyRewardResponse, ResponseError>`
- **Wire**: `DELETE /v2/loyalty/rewards/{reward_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeleteLoyaltyRewardResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Loyalty.DeleteLoyaltyRewardRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `rewardId` | `path` | `reward_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteLoyaltyRewardResponse` | `deleteLoyaltyRewardResponseSchema` | `src/models/delete-loyalty-reward-response.ts` |

### listLoyaltyPrograms

- **Signature**: `listLoyaltyPrograms(options?: RequestOptions): ApiPromise<ListLoyaltyProgramsResponse, ResponseError>`
- **Wire**: `GET /v2/loyalty/programs`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListLoyaltyProgramsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `ListLoyaltyProgramsResponse` | `listLoyaltyProgramsResponseSchema` | `src/models/list-loyalty-programs-response.ts` |

### listLoyaltyPromotions

- **Signature**: `listLoyaltyPromotions(request: Loyalty.ListLoyaltyPromotionsRequest, options?: RequestOptions): ApiPromise<ListLoyaltyPromotionsResponse, ResponseError>`
- **Wire**: `GET /v2/loyalty/programs/{program_id}/promotions`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListLoyaltyPromotionsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Loyalty.ListLoyaltyPromotionsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `programId` | `path` | `program_id` | `string` | yes |
| `status` | `query` | — | `LoyaltyPromotionStatus` | no |
| `cursor` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LoyaltyPromotionStatus` | `loyaltyPromotionStatusSchema` | `src/models/loyalty-promotion-status.ts` |
| `ListLoyaltyPromotionsResponse` | `listLoyaltyPromotionsResponseSchema` | `src/models/list-loyalty-promotions-response.ts` |

### redeemLoyaltyReward

- **Signature**: `redeemLoyaltyReward(request: Loyalty.RedeemLoyaltyRewardRequestParams, options?: RequestOptions): ApiPromise<RedeemLoyaltyRewardResponse, ResponseError>`
- **Wire**: `POST /v2/loyalty/rewards/{reward_id}/redeem`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `RedeemLoyaltyRewardResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Loyalty.RedeemLoyaltyRewardRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `rewardId` | `path` | `reward_id` | `string` | yes |
| `body` | `body` | — | `RedeemLoyaltyRewardRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RedeemLoyaltyRewardRequest` | `redeemLoyaltyRewardRequestSchema` | `src/models/redeem-loyalty-reward-request.ts` |
| `RedeemLoyaltyRewardResponse` | `redeemLoyaltyRewardResponseSchema` | `src/models/redeem-loyalty-reward-response.ts` |

### retrieveLoyaltyAccount

- **Signature**: `retrieveLoyaltyAccount(request: Loyalty.RetrieveLoyaltyAccountRequest, options?: RequestOptions): ApiPromise<RetrieveLoyaltyAccountResponse, ResponseError>`
- **Wire**: `GET /v2/loyalty/accounts/{account_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveLoyaltyAccountResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Loyalty.RetrieveLoyaltyAccountRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountId` | `path` | `account_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveLoyaltyAccountResponse` | `retrieveLoyaltyAccountResponseSchema` | `src/models/retrieve-loyalty-account-response.ts` |

### retrieveLoyaltyProgram

- **Signature**: `retrieveLoyaltyProgram(request: Loyalty.RetrieveLoyaltyProgramRequest, options?: RequestOptions): ApiPromise<RetrieveLoyaltyProgramResponse, ResponseError>`
- **Wire**: `GET /v2/loyalty/programs/{program_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveLoyaltyProgramResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Loyalty.RetrieveLoyaltyProgramRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `programId` | `path` | `program_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveLoyaltyProgramResponse` | `retrieveLoyaltyProgramResponseSchema` | `src/models/retrieve-loyalty-program-response.ts` |

### retrieveLoyaltyPromotion

- **Signature**: `retrieveLoyaltyPromotion(request: Loyalty.RetrieveLoyaltyPromotionRequest, options?: RequestOptions): ApiPromise<RetrieveLoyaltyPromotionResponse, ResponseError>`
- **Wire**: `GET /v2/loyalty/programs/{program_id}/promotions/{promotion_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveLoyaltyPromotionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Loyalty.RetrieveLoyaltyPromotionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `promotionId` | `path` | `promotion_id` | `string` | yes |
| `programId` | `path` | `program_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveLoyaltyPromotionResponse` | `retrieveLoyaltyPromotionResponseSchema` | `src/models/retrieve-loyalty-promotion-response.ts` |

### retrieveLoyaltyReward

- **Signature**: `retrieveLoyaltyReward(request: Loyalty.RetrieveLoyaltyRewardRequest, options?: RequestOptions): ApiPromise<RetrieveLoyaltyRewardResponse, ResponseError>`
- **Wire**: `GET /v2/loyalty/rewards/{reward_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveLoyaltyRewardResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Loyalty.RetrieveLoyaltyRewardRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `rewardId` | `path` | `reward_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveLoyaltyRewardResponse` | `retrieveLoyaltyRewardResponseSchema` | `src/models/retrieve-loyalty-reward-response.ts` |

### searchLoyaltyAccounts

- **Signature**: `searchLoyaltyAccounts(request: Loyalty.SearchLoyaltyAccountsRequestParams, options?: RequestOptions): ApiPromise<SearchLoyaltyAccountsResponse, ResponseError>`
- **Wire**: `POST /v2/loyalty/accounts/search`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `SearchLoyaltyAccountsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Loyalty.SearchLoyaltyAccountsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchLoyaltyAccountsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchLoyaltyAccountsRequest` | `searchLoyaltyAccountsRequestSchema` | `src/models/search-loyalty-accounts-request.ts` |
| `SearchLoyaltyAccountsResponse` | `searchLoyaltyAccountsResponseSchema` | `src/models/search-loyalty-accounts-response.ts` |

### searchLoyaltyEvents

- **Signature**: `searchLoyaltyEvents(request: Loyalty.SearchLoyaltyEventsRequestParams, options?: RequestOptions): ApiPromise<SearchLoyaltyEventsResponse, ResponseError>`
- **Wire**: `POST /v2/loyalty/events/search`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `SearchLoyaltyEventsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Loyalty.SearchLoyaltyEventsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchLoyaltyEventsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchLoyaltyEventsRequest` | `searchLoyaltyEventsRequestSchema` | `src/models/search-loyalty-events-request.ts` |
| `SearchLoyaltyEventsResponse` | `searchLoyaltyEventsResponseSchema` | `src/models/search-loyalty-events-response.ts` |

### searchLoyaltyRewards

- **Signature**: `searchLoyaltyRewards(request: Loyalty.SearchLoyaltyRewardsRequestParams, options?: RequestOptions): ApiPromise<SearchLoyaltyRewardsResponse, ResponseError>`
- **Wire**: `POST /v2/loyalty/rewards/search`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `SearchLoyaltyRewardsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Loyalty.SearchLoyaltyRewardsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchLoyaltyRewardsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchLoyaltyRewardsRequest` | `searchLoyaltyRewardsRequestSchema` | `src/models/search-loyalty-rewards-request.ts` |
| `SearchLoyaltyRewardsResponse` | `searchLoyaltyRewardsResponseSchema` | `src/models/search-loyalty-rewards-response.ts` |

