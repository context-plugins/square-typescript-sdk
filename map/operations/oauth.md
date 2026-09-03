<!-- Generated file — do not edit; regenerated with the SDK. -->

# OAuth — operations

Accessor: `client.oAuth` · Source: `src/resources/oauth.ts` · 3 operations · Request types: namespace `OAuth`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### obtainToken

- **Signature**: `obtainToken(request: OAuth.ObtainTokenRequestParams, options?: RequestOptions): ApiPromise<ObtainTokenResponse, ResponseError>`
- **Wire**: `POST /oauth2/token`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `ObtainTokenResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `OAuth.ObtainTokenRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ObtainTokenRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ObtainTokenRequest` | `obtainTokenRequestSchema` | `src/models/obtain-token-request.ts` |
| `ObtainTokenResponse` | `obtainTokenResponseSchema` | `src/models/obtain-token-response.ts` |

### retrieveTokenStatus

- **Signature**: `retrieveTokenStatus(options?: RequestOptions): ApiPromise<RetrieveTokenStatusResponse, ResponseError>`
- **Wire**: `POST /oauth2/token/status`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveTokenStatusResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveTokenStatusResponse` | `retrieveTokenStatusResponseSchema` | `src/models/retrieve-token-status-response.ts` |

### revokeToken

- **Signature**: `revokeToken(request: OAuth.RevokeTokenRequestParams, options?: RequestOptions): ApiPromise<RevokeTokenResponse, ResponseError>`
- **Wire**: `POST /oauth2/revoke`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **Returns**: `RevokeTokenResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `OAuth.RevokeTokenRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `RevokeTokenRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RevokeTokenRequest` | `revokeTokenRequestSchema` | `src/models/revoke-token-request.ts` |
| `RevokeTokenResponse` | `revokeTokenResponseSchema` | `src/models/revoke-token-response.ts` |

