<!-- Generated file — do not edit; regenerated with the SDK. -->

# Payments — operations

Accessor: `client.payments` · Source: `src/resources/payments.ts` · 7 operations · Request types: namespace `Payments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### cancelPayment

- **Signature**: `cancelPayment(request: Payments.CancelPaymentRequest, options?: RequestOptions): ApiPromise<CancelPaymentResponse, ResponseError>`
- **Wire**: `POST /v2/payments/{payment_id}/cancel`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CancelPaymentResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Payments.CancelPaymentRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentId` | `path` | `payment_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelPaymentResponse` | `cancelPaymentResponseSchema` | `src/models/cancel-payment-response.ts` |

### cancelPaymentByIdempotencyKey

- **Signature**: `cancelPaymentByIdempotencyKey(request: Payments.CancelPaymentByIdempotencyKeyRequestParams, options?: RequestOptions): ApiPromise<CancelPaymentByIdempotencyKeyResponse, ResponseError>`
- **Wire**: `POST /v2/payments/cancel`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CancelPaymentByIdempotencyKeyResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Payments.CancelPaymentByIdempotencyKeyRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CancelPaymentByIdempotencyKeyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CancelPaymentByIdempotencyKeyRequest` | `cancelPaymentByIdempotencyKeyRequestSchema` | `src/models/cancel-payment-by-idempotency-key-request.ts` |
| `CancelPaymentByIdempotencyKeyResponse` | `cancelPaymentByIdempotencyKeyResponseSchema` | `src/models/cancel-payment-by-idempotency-key-response.ts` |

### completePayment

- **Signature**: `completePayment(request: Payments.CompletePaymentRequestParams, options?: RequestOptions): ApiPromise<CompletePaymentResponse, ResponseError>`
- **Wire**: `POST /v2/payments/{payment_id}/complete`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CompletePaymentResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Payments.CompletePaymentRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentId` | `path` | `payment_id` | `string` | yes |
| `body` | `body` | — | `CompletePaymentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompletePaymentRequest` | `completePaymentRequestSchema` | `src/models/complete-payment-request.ts` |
| `CompletePaymentResponse` | `completePaymentResponseSchema` | `src/models/complete-payment-response.ts` |

### createPayment

- **Signature**: `createPayment(request: Payments.CreatePaymentRequestParams, options?: RequestOptions): ApiPromise<CreatePaymentResponse, ResponseError>`
- **Wire**: `POST /v2/payments`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreatePaymentResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Payments.CreatePaymentRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreatePaymentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreatePaymentRequest` | `createPaymentRequestSchema` | `src/models/create-payment-request.ts` |
| `CreatePaymentResponse` | `createPaymentResponseSchema` | `src/models/create-payment-response.ts` |

### getPayment

- **Signature**: `getPayment(request: Payments.GetPaymentRequest, options?: RequestOptions): ApiPromise<GetPaymentResponse, ResponseError>`
- **Wire**: `GET /v2/payments/{payment_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetPaymentResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Payments.GetPaymentRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentId` | `path` | `payment_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetPaymentResponse` | `getPaymentResponseSchema` | `src/models/get-payment-response.ts` |

### listPayments

- **Signature**: `listPayments(request: Payments.ListPaymentsRequest, options?: RequestOptions): ApiPromise<ListPaymentsResponse, ResponseError>`
- **Wire**: `GET /v2/payments`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListPaymentsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Payments.ListPaymentsRequest` (15):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `beginTime` | `query` | `begin_time` | `string` | no | — |
| `endTime` | `query` | `end_time` | `string` | no | — |
| `sortOrder` | `query` | `sort_order` | `string` | no | — |
| `cursor` | `query` | — | `string` | no | — |
| `locationId` | `query` | `location_id` | `string` | no | — |
| `total` | `query` | — | `number` | no | — |
| `last4` | `query` | `last_4` | `string` | no | — |
| `cardBrand` | `query` | `card_brand` | `string` | no | — |
| `limit` | `query` | — | `number` | no | — |
| `isOfflinePayment` | `query` | `is_offline_payment` | `boolean` | no | `false` |
| `offlineBeginTime` | `query` | `offline_begin_time` | `string` | no | — |
| `offlineEndTime` | `query` | `offline_end_time` | `string` | no | — |
| `updatedAtBeginTime` | `query` | `updated_at_begin_time` | `string` | no | — |
| `updatedAtEndTime` | `query` | `updated_at_end_time` | `string` | no | — |
| `sortField` | `query` | `sort_field` | `ListPaymentsRequestSortField` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListPaymentsRequestSortField` | `listPaymentsRequestSortFieldSchema` | `src/models/list-payments-request-sort-field.ts` |
| `ListPaymentsResponse` | `listPaymentsResponseSchema` | `src/models/list-payments-response.ts` |

### updatePayment

- **Signature**: `updatePayment(request: Payments.UpdatePaymentRequestParams, options?: RequestOptions): ApiPromise<UpdatePaymentResponse, ResponseError>`
- **Wire**: `PUT /v2/payments/{payment_id}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpdatePaymentResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Payments.UpdatePaymentRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentId` | `path` | `payment_id` | `string` | yes |
| `body` | `body` | — | `UpdatePaymentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdatePaymentRequest` | `updatePaymentRequestSchema` | `src/models/update-payment-request.ts` |
| `UpdatePaymentResponse` | `updatePaymentResponseSchema` | `src/models/update-payment-response.ts` |

