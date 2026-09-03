<!-- Generated file — do not edit; regenerated with the SDK. -->

# ApplePay — operations

Accessor: `client.applePay` · Source: `src/resources/apple-pay.ts` · 1 operation · Request types: namespace `ApplePay`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### registerDomain

- **Signature**: `registerDomain(request: ApplePay.RegisterDomainRequestParams, options?: RequestOptions): ApiPromise<RegisterDomainResponse, ResponseError>`
- **Wire**: `POST /v2/apple-pay/domains`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `RegisterDomainResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ApplePay.RegisterDomainRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RegisterDomainRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RegisterDomainRequest` | `registerDomainRequestSchema` | `src/models/register-domain-request.ts` |
| `RegisterDomainResponse` | `registerDomainResponseSchema` | `src/models/register-domain-response.ts` |

