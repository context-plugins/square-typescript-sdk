<!-- Generated file — do not edit; regenerated with the SDK. -->

# Merchants — operations

Accessor: `client.merchants` · Source: `src/resources/merchants.ts` · 2 operations · Request types: namespace `Merchants`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### listMerchants

- **Signature**: `listMerchants(request: Merchants.ListMerchantsRequest, options?: RequestOptions): ApiPromise<ListMerchantsResponse, ResponseError>`
- **Wire**: `GET /v2/merchants`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListMerchantsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Merchants.ListMerchantsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `cursor` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListMerchantsResponse` | `listMerchantsResponseSchema` | `src/models/list-merchants-response.ts` |

### retrieveMerchant

- **Signature**: `retrieveMerchant(request: Merchants.RetrieveMerchantRequest, options?: RequestOptions): ApiPromise<RetrieveMerchantResponse, ResponseError>`
- **Wire**: `GET /v2/merchants/{merchant_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveMerchantResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Merchants.RetrieveMerchantRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `merchantId` | `path` | `merchant_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveMerchantResponse` | `retrieveMerchantResponseSchema` | `src/models/retrieve-merchant-response.ts` |

