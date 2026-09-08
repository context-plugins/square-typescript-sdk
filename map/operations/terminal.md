<!-- Generated file — do not edit; regenerated with the SDK. -->

# Terminal — operations

Accessor: `client.terminal` · Source: `src/resources/terminal.ts` · 15 operations · Request types: namespace `Terminal`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### cancelTerminalAction

- **Signature**: `cancelTerminalAction(request: Terminal.CancelTerminalActionRequest, options?: RequestOptions): ApiPromise<CancelTerminalActionResponse, ResponseError>`
- **Wire**: `POST /v2/terminals/actions/{action_id}/cancel`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CancelTerminalActionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Terminal.CancelTerminalActionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `actionId` | `path` | `action_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelTerminalActionResponse` | `cancelTerminalActionResponseSchema` | `src/models/cancel-terminal-action-response.ts` |

### cancelTerminalCheckout

- **Signature**: `cancelTerminalCheckout(request: Terminal.CancelTerminalCheckoutRequest, options?: RequestOptions): ApiPromise<CancelTerminalCheckoutResponse, ResponseError>`
- **Wire**: `POST /v2/terminals/checkouts/{checkout_id}/cancel`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CancelTerminalCheckoutResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Terminal.CancelTerminalCheckoutRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `checkoutId` | `path` | `checkout_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelTerminalCheckoutResponse` | `cancelTerminalCheckoutResponseSchema` | `src/models/cancel-terminal-checkout-response.ts` |

### cancelTerminalRefund

- **Signature**: `cancelTerminalRefund(request: Terminal.CancelTerminalRefundRequest, options?: RequestOptions): ApiPromise<CancelTerminalRefundResponse, ResponseError>`
- **Wire**: `POST /v2/terminals/refunds/{terminal_refund_id}/cancel`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CancelTerminalRefundResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Terminal.CancelTerminalRefundRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `terminalRefundId` | `path` | `terminal_refund_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelTerminalRefundResponse` | `cancelTerminalRefundResponseSchema` | `src/models/cancel-terminal-refund-response.ts` |

### createTerminalAction

- **Signature**: `createTerminalAction(request: Terminal.CreateTerminalActionRequestParams, options?: RequestOptions): ApiPromise<CreateTerminalActionResponse, ResponseError>`
- **Wire**: `POST /v2/terminals/actions`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateTerminalActionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Terminal.CreateTerminalActionRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateTerminalActionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateTerminalActionRequest` | `createTerminalActionRequestSchema` | `src/models/create-terminal-action-request.ts` |
| `CreateTerminalActionResponse` | `createTerminalActionResponseSchema` | `src/models/create-terminal-action-response.ts` |

### createTerminalCheckout

- **Signature**: `createTerminalCheckout(request: Terminal.CreateTerminalCheckoutRequestParams, options?: RequestOptions): ApiPromise<CreateTerminalCheckoutResponse, ResponseError>`
- **Wire**: `POST /v2/terminals/checkouts`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateTerminalCheckoutResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Terminal.CreateTerminalCheckoutRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateTerminalCheckoutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateTerminalCheckoutRequest` | `createTerminalCheckoutRequestSchema` | `src/models/create-terminal-checkout-request.ts` |
| `CreateTerminalCheckoutResponse` | `createTerminalCheckoutResponseSchema` | `src/models/create-terminal-checkout-response.ts` |

### createTerminalRefund

- **Signature**: `createTerminalRefund(request: Terminal.CreateTerminalRefundRequestParams, options?: RequestOptions): ApiPromise<CreateTerminalRefundResponse, ResponseError>`
- **Wire**: `POST /v2/terminals/refunds`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateTerminalRefundResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Terminal.CreateTerminalRefundRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateTerminalRefundRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateTerminalRefundRequest` | `createTerminalRefundRequestSchema` | `src/models/create-terminal-refund-request.ts` |
| `CreateTerminalRefundResponse` | `createTerminalRefundResponseSchema` | `src/models/create-terminal-refund-response.ts` |

### dismissTerminalAction

- **Signature**: `dismissTerminalAction(request: Terminal.DismissTerminalActionRequest, options?: RequestOptions): ApiPromise<DismissTerminalActionResponse, ResponseError>`
- **Wire**: `POST /v2/terminals/actions/{action_id}/dismiss`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DismissTerminalActionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Terminal.DismissTerminalActionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `actionId` | `path` | `action_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DismissTerminalActionResponse` | `dismissTerminalActionResponseSchema` | `src/models/dismiss-terminal-action-response.ts` |

### dismissTerminalCheckout

- **Signature**: `dismissTerminalCheckout(request: Terminal.DismissTerminalCheckoutRequest, options?: RequestOptions): ApiPromise<DismissTerminalCheckoutResponse, ResponseError>`
- **Wire**: `POST /v2/terminals/checkouts/{checkout_id}/dismiss`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DismissTerminalCheckoutResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Terminal.DismissTerminalCheckoutRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `checkoutId` | `path` | `checkout_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DismissTerminalCheckoutResponse` | `dismissTerminalCheckoutResponseSchema` | `src/models/dismiss-terminal-checkout-response.ts` |

### dismissTerminalRefund

- **Signature**: `dismissTerminalRefund(request: Terminal.DismissTerminalRefundRequest, options?: RequestOptions): ApiPromise<DismissTerminalRefundResponse, ResponseError>`
- **Wire**: `POST /v2/terminals/refunds/{terminal_refund_id}/dismiss`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DismissTerminalRefundResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Terminal.DismissTerminalRefundRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `terminalRefundId` | `path` | `terminal_refund_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DismissTerminalRefundResponse` | `dismissTerminalRefundResponseSchema` | `src/models/dismiss-terminal-refund-response.ts` |

### getTerminalAction

- **Signature**: `getTerminalAction(request: Terminal.GetTerminalActionRequest, options?: RequestOptions): ApiPromise<GetTerminalActionResponse, ResponseError>`
- **Wire**: `GET /v2/terminals/actions/{action_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetTerminalActionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Terminal.GetTerminalActionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `actionId` | `path` | `action_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetTerminalActionResponse` | `getTerminalActionResponseSchema` | `src/models/get-terminal-action-response.ts` |

### getTerminalCheckout

- **Signature**: `getTerminalCheckout(request: Terminal.GetTerminalCheckoutRequest, options?: RequestOptions): ApiPromise<GetTerminalCheckoutResponse, ResponseError>`
- **Wire**: `GET /v2/terminals/checkouts/{checkout_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetTerminalCheckoutResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Terminal.GetTerminalCheckoutRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `checkoutId` | `path` | `checkout_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetTerminalCheckoutResponse` | `getTerminalCheckoutResponseSchema` | `src/models/get-terminal-checkout-response.ts` |

### getTerminalRefund

- **Signature**: `getTerminalRefund(request: Terminal.GetTerminalRefundRequest, options?: RequestOptions): ApiPromise<GetTerminalRefundResponse, ResponseError>`
- **Wire**: `GET /v2/terminals/refunds/{terminal_refund_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetTerminalRefundResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Terminal.GetTerminalRefundRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `terminalRefundId` | `path` | `terminal_refund_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetTerminalRefundResponse` | `getTerminalRefundResponseSchema` | `src/models/get-terminal-refund-response.ts` |

### searchTerminalActions

- **Signature**: `searchTerminalActions(request: Terminal.SearchTerminalActionsRequestParams, options?: RequestOptions): ApiPromise<SearchTerminalActionsResponse, ResponseError>`
- **Wire**: `POST /v2/terminals/actions/search`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `SearchTerminalActionsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Terminal.SearchTerminalActionsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchTerminalActionsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchTerminalActionsRequest` | `searchTerminalActionsRequestSchema` | `src/models/search-terminal-actions-request.ts` |
| `SearchTerminalActionsResponse` | `searchTerminalActionsResponseSchema` | `src/models/search-terminal-actions-response.ts` |

### searchTerminalCheckouts

- **Signature**: `searchTerminalCheckouts(request: Terminal.SearchTerminalCheckoutsRequestParams, options?: RequestOptions): ApiPromise<SearchTerminalCheckoutsResponse, ResponseError>`
- **Wire**: `POST /v2/terminals/checkouts/search`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `SearchTerminalCheckoutsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Terminal.SearchTerminalCheckoutsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchTerminalCheckoutsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchTerminalCheckoutsRequest` | `searchTerminalCheckoutsRequestSchema` | `src/models/search-terminal-checkouts-request.ts` |
| `SearchTerminalCheckoutsResponse` | `searchTerminalCheckoutsResponseSchema` | `src/models/search-terminal-checkouts-response.ts` |

### searchTerminalRefunds

- **Signature**: `searchTerminalRefunds(request: Terminal.SearchTerminalRefundsRequestParams, options?: RequestOptions): ApiPromise<SearchTerminalRefundsResponse, ResponseError>`
- **Wire**: `POST /v2/terminals/refunds/search`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `SearchTerminalRefundsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Terminal.SearchTerminalRefundsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchTerminalRefundsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchTerminalRefundsRequest` | `searchTerminalRefundsRequestSchema` | `src/models/search-terminal-refunds-request.ts` |
| `SearchTerminalRefundsResponse` | `searchTerminalRefundsResponseSchema` | `src/models/search-terminal-refunds-response.ts` |

