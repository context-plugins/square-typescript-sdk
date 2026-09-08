<!-- Generated file — do not edit; regenerated with the SDK. -->

# Payouts — operations

Accessor: `client.payouts` · Source: `src/resources/payouts.ts` · 3 operations · Request types: namespace `Payouts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### getPayout

- **Signature**: `getPayout(request: Payouts.GetPayoutRequest, options?: RequestOptions): ApiPromise<GetPayoutResponse, ResponseError>`
- **Wire**: `GET /v2/payouts/{payout_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetPayoutResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Payouts.GetPayoutRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `payoutId` | `path` | `payout_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetPayoutResponse` | `getPayoutResponseSchema` | `src/models/get-payout-response.ts` |

### listPayoutEntries

- **Signature**: `listPayoutEntries(request: Payouts.ListPayoutEntriesRequest, options?: RequestOptions): ApiPromise<ListPayoutEntriesResponse, ResponseError>`
- **Wire**: `GET /v2/payouts/{payout_id}/payout-entries`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListPayoutEntriesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Payouts.ListPayoutEntriesRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `payoutId` | `path` | `payout_id` | `string` | yes |
| `sortOrder` | `query` | `sort_order` | `SortOrder` | no |
| `cursor` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `ListPayoutEntriesResponse` | `listPayoutEntriesResponseSchema` | `src/models/list-payout-entries-response.ts` |

### listPayouts

- **Signature**: `listPayouts(request: Payouts.ListPayoutsRequest, options?: RequestOptions): ApiPromise<ListPayoutsResponse, ResponseError>`
- **Wire**: `GET /v2/payouts`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListPayoutsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Payouts.ListPayoutsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locationId` | `query` | `location_id` | `string` | no |
| `status` | `query` | — | `PayoutStatus` | no |
| `beginTime` | `query` | `begin_time` | `string` | no |
| `endTime` | `query` | `end_time` | `string` | no |
| `sortOrder` | `query` | `sort_order` | `SortOrder` | no |
| `cursor` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PayoutStatus` | `payoutStatusSchema` | `src/models/payout-status.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `ListPayoutsResponse` | `listPayoutsResponseSchema` | `src/models/list-payouts-response.ts` |

