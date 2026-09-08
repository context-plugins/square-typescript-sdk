<!-- Generated file — do not edit; regenerated with the SDK. -->

# CashDrawers — operations

Accessor: `client.cashDrawers` · Source: `src/resources/cash-drawers.ts` · 3 operations · Request types: namespace `CashDrawers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### listCashDrawerShiftEvents

- **Signature**: `listCashDrawerShiftEvents(request: CashDrawers.ListCashDrawerShiftEventsRequest, options?: RequestOptions): ApiPromise<ListCashDrawerShiftEventsResponse, ResponseError>`
- **Wire**: `GET /v2/cash-drawers/shifts/{shift_id}/events`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListCashDrawerShiftEventsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CashDrawers.ListCashDrawerShiftEventsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `shiftId` | `path` | `shift_id` | `string` | yes |
| `locationId` | `query` | `location_id` | `string` | yes |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListCashDrawerShiftEventsResponse` | `listCashDrawerShiftEventsResponseSchema` | `src/models/list-cash-drawer-shift-events-response.ts` |

### listCashDrawerShifts

- **Signature**: `listCashDrawerShifts(request: CashDrawers.ListCashDrawerShiftsRequest, options?: RequestOptions): ApiPromise<ListCashDrawerShiftsResponse, ResponseError>`
- **Wire**: `GET /v2/cash-drawers/shifts`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListCashDrawerShiftsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CashDrawers.ListCashDrawerShiftsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locationId` | `query` | `location_id` | `string` | yes |
| `sortOrder` | `query` | `sort_order` | `SortOrder` | no |
| `beginTime` | `query` | `begin_time` | `string` | no |
| `endTime` | `query` | `end_time` | `string` | no |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `ListCashDrawerShiftsResponse` | `listCashDrawerShiftsResponseSchema` | `src/models/list-cash-drawer-shifts-response.ts` |

### retrieveCashDrawerShift

- **Signature**: `retrieveCashDrawerShift(request: CashDrawers.RetrieveCashDrawerShiftRequest, options?: RequestOptions): ApiPromise<RetrieveCashDrawerShiftResponse, ResponseError>`
- **Wire**: `GET /v2/cash-drawers/shifts/{shift_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveCashDrawerShiftResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CashDrawers.RetrieveCashDrawerShiftRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `shiftId` | `path` | `shift_id` | `string` | yes |
| `locationId` | `query` | `location_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveCashDrawerShiftResponse` | `retrieveCashDrawerShiftResponseSchema` | `src/models/retrieve-cash-drawer-shift-response.ts` |

