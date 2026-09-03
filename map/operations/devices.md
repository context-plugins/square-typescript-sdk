<!-- Generated file — do not edit; regenerated with the SDK. -->

# Devices — operations

Accessor: `client.devices` · Source: `src/resources/devices.ts` · 5 operations · Request types: namespace `Devices`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createDeviceCode

- **Signature**: `createDeviceCode(request: Devices.CreateDeviceCodeRequestParams, options?: RequestOptions): ApiPromise<CreateDeviceCodeResponse, ResponseError>`
- **Wire**: `POST /v2/devices/codes`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateDeviceCodeResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Devices.CreateDeviceCodeRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateDeviceCodeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateDeviceCodeRequest` | `createDeviceCodeRequestSchema` | `src/models/create-device-code-request.ts` |
| `CreateDeviceCodeResponse` | `createDeviceCodeResponseSchema` | `src/models/create-device-code-response.ts` |

### getDevice

- **Signature**: `getDevice(request: Devices.GetDeviceRequest, options?: RequestOptions): ApiPromise<GetDeviceResponse, ResponseError>`
- **Wire**: `GET /v2/devices/{device_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetDeviceResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Devices.GetDeviceRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `deviceId` | `path` | `device_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetDeviceResponse` | `getDeviceResponseSchema` | `src/models/get-device-response.ts` |

### getDeviceCode

- **Signature**: `getDeviceCode(request: Devices.GetDeviceCodeRequest, options?: RequestOptions): ApiPromise<GetDeviceCodeResponse, ResponseError>`
- **Wire**: `GET /v2/devices/codes/{id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetDeviceCodeResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Devices.GetDeviceCodeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetDeviceCodeResponse` | `getDeviceCodeResponseSchema` | `src/models/get-device-code-response.ts` |

### listDeviceCodes

- **Signature**: `listDeviceCodes(request: Devices.ListDeviceCodesRequest, options?: RequestOptions): ApiPromise<ListDeviceCodesResponse, ResponseError>`
- **Wire**: `GET /v2/devices/codes`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListDeviceCodesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Devices.ListDeviceCodesRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cursor` | `query` | — | `string` | no |
| `locationId` | `query` | `location_id` | `string` | no |
| `productType` | `query` | `product_type` | `ProductType` | no |
| `status` | `query` | — | `DeviceCodeStatus` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProductType` | `productTypeSchema` | `src/models/product-type.ts` |
| `DeviceCodeStatus` | `deviceCodeStatusSchema` | `src/models/device-code-status.ts` |
| `ListDeviceCodesResponse` | `listDeviceCodesResponseSchema` | `src/models/list-device-codes-response.ts` |

### listDevices

- **Signature**: `listDevices(request: Devices.ListDevicesRequest, options?: RequestOptions): ApiPromise<ListDevicesResponse, ResponseError>`
- **Wire**: `GET /v2/devices`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListDevicesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Devices.ListDevicesRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `cursor` | `query` | — | `string` | no |
| `sortOrder` | `query` | `sort_order` | `SortOrder` | no |
| `limit` | `query` | — | `number` | no |
| `locationId` | `query` | `location_id` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `ListDevicesResponse` | `listDevicesResponseSchema` | `src/models/list-devices-response.ts` |

