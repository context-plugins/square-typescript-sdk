<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomerGroups — operations

Accessor: `client.customerGroups` · Source: `src/resources/customer-groups.ts` · 5 operations · Request types: namespace `CustomerGroups`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createCustomerGroup

- **Signature**: `createCustomerGroup(request: CustomerGroups.CreateCustomerGroupRequestParams, options?: RequestOptions): ApiPromise<CreateCustomerGroupResponse, ResponseError>`
- **Wire**: `POST /v2/customers/groups`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateCustomerGroupResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CustomerGroups.CreateCustomerGroupRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateCustomerGroupRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCustomerGroupRequest` | `createCustomerGroupRequestSchema` | `src/models/create-customer-group-request.ts` |
| `CreateCustomerGroupResponse` | `createCustomerGroupResponseSchema` | `src/models/create-customer-group-response.ts` |

### deleteCustomerGroup

- **Signature**: `deleteCustomerGroup(request: CustomerGroups.DeleteCustomerGroupRequest, options?: RequestOptions): ApiPromise<DeleteCustomerGroupResponse, ResponseError>`
- **Wire**: `DELETE /v2/customers/groups/{group_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeleteCustomerGroupResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CustomerGroups.DeleteCustomerGroupRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupId` | `path` | `group_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteCustomerGroupResponse` | `deleteCustomerGroupResponseSchema` | `src/models/delete-customer-group-response.ts` |

### listCustomerGroups

- **Signature**: `listCustomerGroups(request: CustomerGroups.ListCustomerGroupsRequest, options?: RequestOptions): ApiPromise<ListCustomerGroupsResponse, ResponseError>`
- **Wire**: `GET /v2/customers/groups`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListCustomerGroupsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CustomerGroups.ListCustomerGroupsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `cursor` | `query` | `string` | no |
| `limit` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListCustomerGroupsResponse` | `listCustomerGroupsResponseSchema` | `src/models/list-customer-groups-response.ts` |

### retrieveCustomerGroup

- **Signature**: `retrieveCustomerGroup(request: CustomerGroups.RetrieveCustomerGroupRequest, options?: RequestOptions): ApiPromise<RetrieveCustomerGroupResponse, ResponseError>`
- **Wire**: `GET /v2/customers/groups/{group_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveCustomerGroupResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CustomerGroups.RetrieveCustomerGroupRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupId` | `path` | `group_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveCustomerGroupResponse` | `retrieveCustomerGroupResponseSchema` | `src/models/retrieve-customer-group-response.ts` |

### updateCustomerGroup

- **Signature**: `updateCustomerGroup(request: CustomerGroups.UpdateCustomerGroupRequestParams, options?: RequestOptions): ApiPromise<UpdateCustomerGroupResponse, ResponseError>`
- **Wire**: `PUT /v2/customers/groups/{group_id}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpdateCustomerGroupResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CustomerGroups.UpdateCustomerGroupRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `groupId` | `path` | `group_id` | `string` | yes |
| `body` | `body` | — | `UpdateCustomerGroupRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCustomerGroupRequest` | `updateCustomerGroupRequestSchema` | `src/models/update-customer-group-request.ts` |
| `UpdateCustomerGroupResponse` | `updateCustomerGroupResponseSchema` | `src/models/update-customer-group-response.ts` |

