<!-- Generated file — do not edit; regenerated with the SDK. -->

# CheckoutApi — operations

Accessor: `client.checkoutApi` · Source: `src/resources/checkout-api.ts` · 10 operations · Request types: namespace `CheckoutApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createCheckout

- **Signature**: `createCheckout(request: CheckoutApi.CreateCheckoutRequestParams, options?: RequestOptions): ApiPromise<CreateCheckoutResponse, ResponseError>`
- **Wire**: `POST /v2/locations/{location_id}/checkouts`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateCheckoutResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CheckoutApi.CreateCheckoutRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locationId` | `path` | `location_id` | `string` | yes |
| `body` | `body` | — | `CreateCheckoutRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCheckoutRequest` | `createCheckoutRequestSchema` | `src/models/create-checkout-request.ts` |
| `CreateCheckoutResponse` | `createCheckoutResponseSchema` | `src/models/create-checkout-response.ts` |

### createPaymentLink

- **Signature**: `createPaymentLink(request: CheckoutApi.CreatePaymentLinkRequestParams, options?: RequestOptions): ApiPromise<CreatePaymentLinkResponse, ResponseError>`
- **Wire**: `POST /v2/online-checkout/payment-links`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreatePaymentLinkResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CheckoutApi.CreatePaymentLinkRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreatePaymentLinkRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreatePaymentLinkRequest` | `createPaymentLinkRequestSchema` | `src/models/create-payment-link-request.ts` |
| `CreatePaymentLinkResponse` | `createPaymentLinkResponseSchema` | `src/models/create-payment-link-response.ts` |

### deletePaymentLink

- **Signature**: `deletePaymentLink(request: CheckoutApi.DeletePaymentLinkRequest, options?: RequestOptions): ApiPromise<DeletePaymentLinkResponse, ResponseError>`
- **Wire**: `DELETE /v2/online-checkout/payment-links/{id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeletePaymentLinkResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CheckoutApi.DeletePaymentLinkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeletePaymentLinkResponse` | `deletePaymentLinkResponseSchema` | `src/models/delete-payment-link-response.ts` |

### listPaymentLinks

- **Signature**: `listPaymentLinks(request: CheckoutApi.ListPaymentLinksRequest, options?: RequestOptions): ApiPromise<ListPaymentLinksResponse, ResponseError>`
- **Wire**: `GET /v2/online-checkout/payment-links`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListPaymentLinksResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CheckoutApi.ListPaymentLinksRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `cursor` | `query` | `string` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListPaymentLinksResponse` | `listPaymentLinksResponseSchema` | `src/models/list-payment-links-response.ts` |

### retrieveLocationSettings

- **Signature**: `retrieveLocationSettings(request: CheckoutApi.RetrieveLocationSettingsRequest, options?: RequestOptions): ApiPromise<RetrieveLocationSettingsResponse, ResponseError>`
- **Wire**: `GET /v2/online-checkout/location-settings/{location_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveLocationSettingsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CheckoutApi.RetrieveLocationSettingsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locationId` | `path` | `location_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveLocationSettingsResponse` | `retrieveLocationSettingsResponseSchema` | `src/models/retrieve-location-settings-response.ts` |

### retrieveMerchantSettings

- **Signature**: `retrieveMerchantSettings(options?: RequestOptions): ApiPromise<RetrieveMerchantSettingsResponse, ResponseError>`
- **Wire**: `GET /v2/online-checkout/merchant-settings`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveMerchantSettingsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveMerchantSettingsResponse` | `retrieveMerchantSettingsResponseSchema` | `src/models/retrieve-merchant-settings-response.ts` |

### retrievePaymentLink

- **Signature**: `retrievePaymentLink(request: CheckoutApi.RetrievePaymentLinkRequest, options?: RequestOptions): ApiPromise<RetrievePaymentLinkResponse, ResponseError>`
- **Wire**: `GET /v2/online-checkout/payment-links/{id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrievePaymentLinkResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CheckoutApi.RetrievePaymentLinkRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrievePaymentLinkResponse` | `retrievePaymentLinkResponseSchema` | `src/models/retrieve-payment-link-response.ts` |

### updateLocationSettings

- **Signature**: `updateLocationSettings(request: CheckoutApi.UpdateLocationSettingsRequestParams, options?: RequestOptions): ApiPromise<UpdateLocationSettingsResponse, ResponseError>`
- **Wire**: `PUT /v2/online-checkout/location-settings/{location_id}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpdateLocationSettingsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CheckoutApi.UpdateLocationSettingsRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locationId` | `path` | `location_id` | `string` | yes |
| `body` | `body` | — | `UpdateLocationSettingsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateLocationSettingsRequest` | `updateLocationSettingsRequestSchema` | `src/models/update-location-settings-request.ts` |
| `UpdateLocationSettingsResponse` | `updateLocationSettingsResponseSchema` | `src/models/update-location-settings-response.ts` |

### updateMerchantSettings

- **Signature**: `updateMerchantSettings(request: CheckoutApi.UpdateMerchantSettingsRequestParams, options?: RequestOptions): ApiPromise<UpdateMerchantSettingsResponse, ResponseError>`
- **Wire**: `PUT /v2/online-checkout/merchant-settings`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpdateMerchantSettingsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CheckoutApi.UpdateMerchantSettingsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `UpdateMerchantSettingsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateMerchantSettingsRequest` | `updateMerchantSettingsRequestSchema` | `src/models/update-merchant-settings-request.ts` |
| `UpdateMerchantSettingsResponse` | `updateMerchantSettingsResponseSchema` | `src/models/update-merchant-settings-response.ts` |

### updatePaymentLink

- **Signature**: `updatePaymentLink(request: CheckoutApi.UpdatePaymentLinkRequestParams, options?: RequestOptions): ApiPromise<UpdatePaymentLinkResponse, ResponseError>`
- **Wire**: `PUT /v2/online-checkout/payment-links/{id}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpdatePaymentLinkResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CheckoutApi.UpdatePaymentLinkRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `UpdatePaymentLinkRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdatePaymentLinkRequest` | `updatePaymentLinkRequestSchema` | `src/models/update-payment-link-request.ts` |
| `UpdatePaymentLinkResponse` | `updatePaymentLinkResponseSchema` | `src/models/update-payment-link-response.ts` |

