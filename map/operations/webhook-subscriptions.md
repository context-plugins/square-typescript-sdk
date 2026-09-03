<!-- Generated file — do not edit; regenerated with the SDK. -->

# WebhookSubscriptions — operations

Accessor: `client.webhookSubscriptions` · Source: `src/resources/webhook-subscriptions.ts` · 8 operations · Request types: namespace `WebhookSubscriptions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createWebhookSubscription

- **Signature**: `createWebhookSubscription(request: WebhookSubscriptions.CreateWebhookSubscriptionRequestParams, options?: RequestOptions): ApiPromise<CreateWebhookSubscriptionResponse, ResponseError>`
- **Wire**: `POST /v2/webhooks/subscriptions`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateWebhookSubscriptionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `WebhookSubscriptions.CreateWebhookSubscriptionRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateWebhookSubscriptionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateWebhookSubscriptionRequest` | `createWebhookSubscriptionRequestSchema` | `src/models/create-webhook-subscription-request.ts` |
| `CreateWebhookSubscriptionResponse` | `createWebhookSubscriptionResponseSchema` | `src/models/create-webhook-subscription-response.ts` |

### deleteWebhookSubscription

- **Signature**: `deleteWebhookSubscription(request: WebhookSubscriptions.DeleteWebhookSubscriptionRequest, options?: RequestOptions): ApiPromise<DeleteWebhookSubscriptionResponse, ResponseError>`
- **Wire**: `DELETE /v2/webhooks/subscriptions/{subscription_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeleteWebhookSubscriptionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `WebhookSubscriptions.DeleteWebhookSubscriptionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteWebhookSubscriptionResponse` | `deleteWebhookSubscriptionResponseSchema` | `src/models/delete-webhook-subscription-response.ts` |

### listWebhookEventTypes

- **Signature**: `listWebhookEventTypes(request: WebhookSubscriptions.ListWebhookEventTypesRequest, options?: RequestOptions): ApiPromise<ListWebhookEventTypesResponse, ResponseError>`
- **Wire**: `GET /v2/webhooks/event-types`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListWebhookEventTypesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `WebhookSubscriptions.ListWebhookEventTypesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `apiVersion` | `query` | `api_version` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListWebhookEventTypesResponse` | `listWebhookEventTypesResponseSchema` | `src/models/list-webhook-event-types-response.ts` |

### listWebhookSubscriptions

- **Signature**: `listWebhookSubscriptions(request: WebhookSubscriptions.ListWebhookSubscriptionsRequest, options?: RequestOptions): ApiPromise<ListWebhookSubscriptionsResponse, ResponseError>`
- **Wire**: `GET /v2/webhooks/subscriptions`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListWebhookSubscriptionsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `WebhookSubscriptions.ListWebhookSubscriptionsRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `cursor` | `query` | — | `string` | no | — |
| `includeDisabled` | `query` | `include_disabled` | `boolean` | no | `false` |
| `sortOrder` | `query` | `sort_order` | `SortOrder` | no | — |
| `limit` | `query` | — | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `ListWebhookSubscriptionsResponse` | `listWebhookSubscriptionsResponseSchema` | `src/models/list-webhook-subscriptions-response.ts` |

### retrieveWebhookSubscription

- **Signature**: `retrieveWebhookSubscription(request: WebhookSubscriptions.RetrieveWebhookSubscriptionRequest, options?: RequestOptions): ApiPromise<RetrieveWebhookSubscriptionResponse, ResponseError>`
- **Wire**: `GET /v2/webhooks/subscriptions/{subscription_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveWebhookSubscriptionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `WebhookSubscriptions.RetrieveWebhookSubscriptionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveWebhookSubscriptionResponse` | `retrieveWebhookSubscriptionResponseSchema` | `src/models/retrieve-webhook-subscription-response.ts` |

### testWebhookSubscription

- **Signature**: `testWebhookSubscription(request: WebhookSubscriptions.TestWebhookSubscriptionRequestParams, options?: RequestOptions): ApiPromise<TestWebhookSubscriptionResponse, ResponseError>`
- **Wire**: `POST /v2/webhooks/subscriptions/{subscription_id}/test`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `TestWebhookSubscriptionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `WebhookSubscriptions.TestWebhookSubscriptionRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `string` | yes |
| `body` | `body` | — | `TestWebhookSubscriptionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TestWebhookSubscriptionRequest` | `testWebhookSubscriptionRequestSchema` | `src/models/test-webhook-subscription-request.ts` |
| `TestWebhookSubscriptionResponse` | `testWebhookSubscriptionResponseSchema` | `src/models/test-webhook-subscription-response.ts` |

### updateWebhookSubscription

- **Signature**: `updateWebhookSubscription(request: WebhookSubscriptions.UpdateWebhookSubscriptionRequestParams, options?: RequestOptions): ApiPromise<UpdateWebhookSubscriptionResponse, ResponseError>`
- **Wire**: `PUT /v2/webhooks/subscriptions/{subscription_id}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpdateWebhookSubscriptionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `WebhookSubscriptions.UpdateWebhookSubscriptionRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `string` | yes |
| `body` | `body` | — | `UpdateWebhookSubscriptionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateWebhookSubscriptionRequest` | `updateWebhookSubscriptionRequestSchema` | `src/models/update-webhook-subscription-request.ts` |
| `UpdateWebhookSubscriptionResponse` | `updateWebhookSubscriptionResponseSchema` | `src/models/update-webhook-subscription-response.ts` |

### updateWebhookSubscriptionSignatureKey

- **Signature**: `updateWebhookSubscriptionSignatureKey(request: WebhookSubscriptions.UpdateWebhookSubscriptionSignatureKeyRequestParams, options?: RequestOptions): ApiPromise<UpdateWebhookSubscriptionSignatureKeyResponse, ResponseError>`
- **Wire**: `POST /v2/webhooks/subscriptions/{subscription_id}/signature-key`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpdateWebhookSubscriptionSignatureKeyResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `WebhookSubscriptions.UpdateWebhookSubscriptionSignatureKeyRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subscriptionId` | `path` | `subscription_id` | `string` | yes |
| `body` | `body` | — | `UpdateWebhookSubscriptionSignatureKeyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateWebhookSubscriptionSignatureKeyRequest` | `updateWebhookSubscriptionSignatureKeyRequestSchema` | `src/models/update-webhook-subscription-signature-key-request.ts` |
| `UpdateWebhookSubscriptionSignatureKeyResponse` | `updateWebhookSubscriptionSignatureKeyResponseSchema` | `src/models/update-webhook-subscription-signature-key-response.ts` |

