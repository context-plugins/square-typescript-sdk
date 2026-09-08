<!-- Generated file — do not edit; regenerated with the SDK. -->

# Refunds — operations

Accessor: `client.refunds` · Source: `src/resources/refunds.ts` · 3 operations · Request types: namespace `Refunds`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getPaymentRefund

- **Signature**: `getPaymentRefund(request: Refunds.GetPaymentRefundRequest, options?: RequestOptions): ApiPromise<GetPaymentRefundResponse, ResponseError>`
- **Wire**: `GET /v2/refunds/{refund_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetPaymentRefundResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Refunds.GetPaymentRefundRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `refundId` | `path` | `refund_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetPaymentRefundResponse` | `getPaymentRefundResponseSchema` | `src/models/get-payment-refund-response.ts` |

### listPaymentRefunds

- **Signature**: `listPaymentRefunds(request: Refunds.ListPaymentRefundsRequest, options?: RequestOptions): ApiPromise<ListPaymentRefundsResponse, ResponseError>`
- **Wire**: `GET /v2/refunds`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListPaymentRefundsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Refunds.ListPaymentRefundsRequest` (11):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `beginTime` | `query` | `begin_time` | `string` | no |
| `endTime` | `query` | `end_time` | `string` | no |
| `sortOrder` | `query` | `sort_order` | `string` | no |
| `cursor` | `query` | — | `string` | no |
| `locationId` | `query` | `location_id` | `string` | no |
| `status` | `query` | — | `string` | no |
| `sourceType` | `query` | `source_type` | `string` | no |
| `limit` | `query` | — | `number` | no |
| `updatedAtBeginTime` | `query` | `updated_at_begin_time` | `string` | no |
| `updatedAtEndTime` | `query` | `updated_at_end_time` | `string` | no |
| `sortField` | `query` | `sort_field` | `ListPaymentRefundsRequestSortField` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListPaymentRefundsRequestSortField` | `listPaymentRefundsRequestSortFieldSchema` | `src/models/list-payment-refunds-request-sort-field.ts` |
| `ListPaymentRefundsResponse` | `listPaymentRefundsResponseSchema` | `src/models/list-payment-refunds-response.ts` |

### refundPayment

- **Signature**: `refundPayment(request: Refunds.RefundPaymentRequestParams, options?: RequestOptions): ApiPromise<RefundPaymentResponse, ResponseError>`
- **Wire**: `POST /v2/refunds`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `RefundPaymentResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Refunds.RefundPaymentRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RefundPaymentRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RefundPaymentRequest` | `refundPaymentRequestSchema` | `src/models/refund-payment-request.ts` |
| `RefundPaymentResponse` | `refundPaymentResponseSchema` | `src/models/refund-payment-response.ts` |

