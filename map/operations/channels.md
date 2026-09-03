<!-- Generated file — do not edit; regenerated with the SDK. -->

# Channels — operations

Accessor: `client.channels` · Source: `src/resources/channels.ts` · 3 operations · Request types: namespace `Channels`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### bulkRetrieveChannels

- **Signature**: `bulkRetrieveChannels(request: Channels.BulkRetrieveChannelsRequestParams, options?: RequestOptions): ApiPromise<BulkRetrieveChannelsResponse, ResponseError>`
- **Wire**: `POST /v2/channels/bulk-retrieve`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BulkRetrieveChannelsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Channels.BulkRetrieveChannelsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkRetrieveChannelsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkRetrieveChannelsRequest` | `bulkRetrieveChannelsRequestSchema` | `src/models/bulk-retrieve-channels-request.ts` |
| `BulkRetrieveChannelsResponse` | `bulkRetrieveChannelsResponseSchema` | `src/models/bulk-retrieve-channels-response.ts` |

### listChannels

- **Signature**: `listChannels(request: Channels.ListChannelsRequest, options?: RequestOptions): ApiPromise<ListChannelsResponse, ResponseError>`
- **Wire**: `GET /v2/channels`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListChannelsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Channels.ListChannelsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `referenceType` | `query` | `reference_type` | `ReferenceType` | no |
| `referenceId` | `query` | `reference_id` | `string` | no |
| `status` | `query` | — | `ChannelStatus` | no |
| `cursor` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReferenceType` | `referenceTypeSchema` | `src/models/reference-type.ts` |
| `ChannelStatus` | `channelStatusSchema` | `src/models/channel-status.ts` |
| `ListChannelsResponse` | `listChannelsResponseSchema` | `src/models/list-channels-response.ts` |

### retrieveChannel

- **Signature**: `retrieveChannel(request: Channels.RetrieveChannelRequest, options?: RequestOptions): ApiPromise<RetrieveChannelResponse, ResponseError>`
- **Wire**: `GET /v2/channels/{channel_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveChannelResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Channels.RetrieveChannelRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channelId` | `path` | `channel_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveChannelResponse` | `retrieveChannelResponseSchema` | `src/models/retrieve-channel-response.ts` |

