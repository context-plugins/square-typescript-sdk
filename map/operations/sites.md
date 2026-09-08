<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sites — operations

Accessor: `client.sites` · Source: `src/resources/sites.ts` · 1 operation · Request types: namespace `Sites`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### listSites

- **Signature**: `listSites(options?: RequestOptions): ApiPromise<ListSitesResponse, ResponseError>`
- **Wire**: `GET /v2/sites`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSitesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSitesResponse` | `listSitesResponseSchema` | `src/models/list-sites-response.ts` |

