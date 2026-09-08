<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subscriptions — operations

Accessor: `client.subscriptions` · Source: `src/resources/subscriptions.ts` · 12 operations · Request types: namespace `Subscriptions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### bulkSwapPlan

- **Signature**: `bulkSwapPlan(request: Subscriptions.BulkSwapPlanRequestParams, options?: RequestOptions): ApiPromise<BulkSwapPlanResponse, ResponseError>`
- **Wire**: `POST /v2/subscriptions/bulk-swap-plan`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BulkSwapPlanResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Subscriptions.BulkSwapPlanRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkSwapPlanRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkSwapPlanRequest` | `bulkSwapPlanRequestSchema` | `src/models/bulk-swap-plan-request.ts` |
| `BulkSwapPlanResponse` | `bulkSwapPlanResponseSchema` | `src/models/bulk-swap-plan-response.ts` |

### cancelSubscription

- **Signature**: `cancelSubscription(request: Subscriptions.CancelSubscriptionRequest, options?: RequestOptions): ApiPromise<CancelSubscriptionResponse, ResponseError>`
- **Wire**: `POST /v2/subscriptions/{subscription_id}/cancel`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CancelSubscriptionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Subscriptions.CancelSubscriptionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelSubscriptionResponse` | `cancelSubscriptionResponseSchema` | `src/models/cancel-subscription-response.ts` |

### changeBillingAnchorDate

- **Signature**: `changeBillingAnchorDate(request: Subscriptions.ChangeBillingAnchorDateRequestParams, options?: RequestOptions): ApiPromise<ChangeBillingAnchorDateResponse, ResponseError>`
- **Wire**: `POST /v2/subscriptions/{subscription_id}/billing-anchor`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `ChangeBillingAnchorDateResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Subscriptions.ChangeBillingAnchorDateRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `string` | yes |
| `body` | `body` | — | `ChangeBillingAnchorDateRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChangeBillingAnchorDateRequest` | `changeBillingAnchorDateRequestSchema` | `src/models/change-billing-anchor-date-request.ts` |
| `ChangeBillingAnchorDateResponse` | `changeBillingAnchorDateResponseSchema` | `src/models/change-billing-anchor-date-response.ts` |

### createSubscription

- **Signature**: `createSubscription(request: Subscriptions.CreateSubscriptionRequestParams, options?: RequestOptions): ApiPromise<CreateSubscriptionResponse, ResponseError>`
- **Wire**: `POST /v2/subscriptions`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateSubscriptionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Subscriptions.CreateSubscriptionRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateSubscriptionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateSubscriptionRequest` | `createSubscriptionRequestSchema` | `src/models/create-subscription-request.ts` |
| `CreateSubscriptionResponse` | `createSubscriptionResponseSchema` | `src/models/create-subscription-response.ts` |

### deleteSubscriptionAction

- **Signature**: `deleteSubscriptionAction(request: Subscriptions.DeleteSubscriptionActionRequest, options?: RequestOptions): ApiPromise<DeleteSubscriptionActionResponse, ResponseError>`
- **Wire**: `DELETE /v2/subscriptions/{subscription_id}/actions/{action_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeleteSubscriptionActionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Subscriptions.DeleteSubscriptionActionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `string` | yes |
| `actionId` | `path` | `action_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteSubscriptionActionResponse` | `deleteSubscriptionActionResponseSchema` | `src/models/delete-subscription-action-response.ts` |

### listSubscriptionEvents

- **Signature**: `listSubscriptionEvents(request: Subscriptions.ListSubscriptionEventsRequest, options?: RequestOptions): ApiPromise<ListSubscriptionEventsResponse, ResponseError>`
- **Wire**: `GET /v2/subscriptions/{subscription_id}/events`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSubscriptionEventsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Subscriptions.ListSubscriptionEventsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `string` | yes |
| `cursor` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSubscriptionEventsResponse` | `listSubscriptionEventsResponseSchema` | `src/models/list-subscription-events-response.ts` |

### pauseSubscription

- **Signature**: `pauseSubscription(request: Subscriptions.PauseSubscriptionRequestParams, options?: RequestOptions): ApiPromise<PauseSubscriptionResponse, ResponseError>`
- **Wire**: `POST /v2/subscriptions/{subscription_id}/pause`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `PauseSubscriptionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Subscriptions.PauseSubscriptionRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `string` | yes |
| `body` | `body` | — | `PauseSubscriptionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PauseSubscriptionRequest` | `pauseSubscriptionRequestSchema` | `src/models/pause-subscription-request.ts` |
| `PauseSubscriptionResponse` | `pauseSubscriptionResponseSchema` | `src/models/pause-subscription-response.ts` |

### resumeSubscription

- **Signature**: `resumeSubscription(request: Subscriptions.ResumeSubscriptionRequestParams, options?: RequestOptions): ApiPromise<ResumeSubscriptionResponse, ResponseError>`
- **Wire**: `POST /v2/subscriptions/{subscription_id}/resume`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `ResumeSubscriptionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Subscriptions.ResumeSubscriptionRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `string` | yes |
| `body` | `body` | — | `ResumeSubscriptionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ResumeSubscriptionRequest` | `resumeSubscriptionRequestSchema` | `src/models/resume-subscription-request.ts` |
| `ResumeSubscriptionResponse` | `resumeSubscriptionResponseSchema` | `src/models/resume-subscription-response.ts` |

### retrieveSubscription

- **Signature**: `retrieveSubscription(request: Subscriptions.RetrieveSubscriptionRequest, options?: RequestOptions): ApiPromise<RetrieveSubscriptionResponse, ResponseError>`
- **Wire**: `GET /v2/subscriptions/{subscription_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveSubscriptionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Subscriptions.RetrieveSubscriptionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `string` | yes |
| `include` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveSubscriptionResponse` | `retrieveSubscriptionResponseSchema` | `src/models/retrieve-subscription-response.ts` |

### searchSubscriptions

- **Signature**: `searchSubscriptions(request: Subscriptions.SearchSubscriptionsRequestParams, options?: RequestOptions): ApiPromise<SearchSubscriptionsResponse, ResponseError>`
- **Wire**: `POST /v2/subscriptions/search`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `SearchSubscriptionsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Subscriptions.SearchSubscriptionsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchSubscriptionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchSubscriptionsRequest` | `searchSubscriptionsRequestSchema` | `src/models/search-subscriptions-request.ts` |
| `SearchSubscriptionsResponse` | `searchSubscriptionsResponseSchema` | `src/models/search-subscriptions-response.ts` |

### swapPlan

- **Signature**: `swapPlan(request: Subscriptions.SwapPlanRequestParams, options?: RequestOptions): ApiPromise<SwapPlanResponse, ResponseError>`
- **Wire**: `POST /v2/subscriptions/{subscription_id}/swap-plan`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `SwapPlanResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Subscriptions.SwapPlanRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `string` | yes |
| `body` | `body` | — | `SwapPlanRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SwapPlanRequest` | `swapPlanRequestSchema` | `src/models/swap-plan-request.ts` |
| `SwapPlanResponse` | `swapPlanResponseSchema` | `src/models/swap-plan-response.ts` |

### updateSubscription

- **Signature**: `updateSubscription(request: Subscriptions.UpdateSubscriptionRequestParams, options?: RequestOptions): ApiPromise<UpdateSubscriptionResponse, ResponseError>`
- **Wire**: `PUT /v2/subscriptions/{subscription_id}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpdateSubscriptionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Subscriptions.UpdateSubscriptionRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `string` | yes |
| `body` | `body` | — | `UpdateSubscriptionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateSubscriptionRequest` | `updateSubscriptionRequestSchema` | `src/models/update-subscription-request.ts` |
| `UpdateSubscriptionResponse` | `updateSubscriptionResponseSchema` | `src/models/update-subscription-response.ts` |

