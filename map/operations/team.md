<!-- Generated file — do not edit; regenerated with the SDK. -->

# Team — operations

Accessor: `client.team` · Source: `src/resources/team.ts` · 12 operations · Request types: namespace `Team`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### bulkCreateTeamMembers

- **Signature**: `bulkCreateTeamMembers(request: Team.BulkCreateTeamMembersRequestParams, options?: RequestOptions): ApiPromise<BulkCreateTeamMembersResponse, ResponseError>`
- **Wire**: `POST /v2/team-members/bulk-create`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BulkCreateTeamMembersResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Team.BulkCreateTeamMembersRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkCreateTeamMembersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkCreateTeamMembersRequest` | `bulkCreateTeamMembersRequestSchema` | `src/models/bulk-create-team-members-request.ts` |
| `BulkCreateTeamMembersResponse` | `bulkCreateTeamMembersResponseSchema` | `src/models/bulk-create-team-members-response.ts` |

### bulkUpdateTeamMembers

- **Signature**: `bulkUpdateTeamMembers(request: Team.BulkUpdateTeamMembersRequestParams, options?: RequestOptions): ApiPromise<BulkUpdateTeamMembersResponse, ResponseError>`
- **Wire**: `POST /v2/team-members/bulk-update`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BulkUpdateTeamMembersResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Team.BulkUpdateTeamMembersRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkUpdateTeamMembersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkUpdateTeamMembersRequest` | `bulkUpdateTeamMembersRequestSchema` | `src/models/bulk-update-team-members-request.ts` |
| `BulkUpdateTeamMembersResponse` | `bulkUpdateTeamMembersResponseSchema` | `src/models/bulk-update-team-members-response.ts` |

### createJob

- **Signature**: `createJob(request: Team.CreateJobRequestParams, options?: RequestOptions): ApiPromise<CreateJobResponse, ResponseError>`
- **Wire**: `POST /v2/team-members/jobs`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateJobResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Team.CreateJobRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateJobRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateJobRequest` | `createJobRequestSchema` | `src/models/create-job-request.ts` |
| `CreateJobResponse` | `createJobResponseSchema` | `src/models/create-job-response.ts` |

### createTeamMember

- **Signature**: `createTeamMember(request: Team.CreateTeamMemberRequestParams, options?: RequestOptions): ApiPromise<CreateTeamMemberResponse, ResponseError>`
- **Wire**: `POST /v2/team-members`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateTeamMemberResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Team.CreateTeamMemberRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateTeamMemberRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateTeamMemberRequest` | `createTeamMemberRequestSchema` | `src/models/create-team-member-request.ts` |
| `CreateTeamMemberResponse` | `createTeamMemberResponseSchema` | `src/models/create-team-member-response.ts` |

### listJobs

- **Signature**: `listJobs(request: Team.ListJobsRequest, options?: RequestOptions): ApiPromise<ListJobsResponse, ResponseError>`
- **Wire**: `GET /v2/team-members/jobs`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListJobsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Team.ListJobsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `cursor` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListJobsResponse` | `listJobsResponseSchema` | `src/models/list-jobs-response.ts` |

### retrieveJob

- **Signature**: `retrieveJob(request: Team.RetrieveJobRequest, options?: RequestOptions): ApiPromise<RetrieveJobResponse, ResponseError>`
- **Wire**: `GET /v2/team-members/jobs/{job_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveJobResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Team.RetrieveJobRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `jobId` | `path` | `job_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveJobResponse` | `retrieveJobResponseSchema` | `src/models/retrieve-job-response.ts` |

### retrieveTeamMember

- **Signature**: `retrieveTeamMember(request: Team.RetrieveTeamMemberRequest, options?: RequestOptions): ApiPromise<RetrieveTeamMemberResponse, ResponseError>`
- **Wire**: `GET /v2/team-members/{team_member_id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveTeamMemberResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Team.RetrieveTeamMemberRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `teamMemberId` | `path` | `team_member_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveTeamMemberResponse` | `retrieveTeamMemberResponseSchema` | `src/models/retrieve-team-member-response.ts` |

### retrieveWageSetting

- **Signature**: `retrieveWageSetting(request: Team.RetrieveWageSettingRequest, options?: RequestOptions): ApiPromise<RetrieveWageSettingResponse, ResponseError>`
- **Wire**: `GET /v2/team-members/{team_member_id}/wage-setting`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveWageSettingResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Team.RetrieveWageSettingRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `teamMemberId` | `path` | `team_member_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveWageSettingResponse` | `retrieveWageSettingResponseSchema` | `src/models/retrieve-wage-setting-response.ts` |

### searchTeamMembers

- **Signature**: `searchTeamMembers(request: Team.SearchTeamMembersRequestParams, options?: RequestOptions): ApiPromise<SearchTeamMembersResponse, ResponseError>`
- **Wire**: `POST /v2/team-members/search`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `SearchTeamMembersResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Team.SearchTeamMembersRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchTeamMembersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchTeamMembersRequest` | `searchTeamMembersRequestSchema` | `src/models/search-team-members-request.ts` |
| `SearchTeamMembersResponse` | `searchTeamMembersResponseSchema` | `src/models/search-team-members-response.ts` |

### updateJob

- **Signature**: `updateJob(request: Team.UpdateJobRequestParams, options?: RequestOptions): ApiPromise<UpdateJobResponse, ResponseError>`
- **Wire**: `PUT /v2/team-members/jobs/{job_id}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpdateJobResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Team.UpdateJobRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `jobId` | `path` | `job_id` | `string` | yes |
| `body` | `body` | — | `UpdateJobRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateJobRequest` | `updateJobRequestSchema` | `src/models/update-job-request.ts` |
| `UpdateJobResponse` | `updateJobResponseSchema` | `src/models/update-job-response.ts` |

### updateTeamMember

- **Signature**: `updateTeamMember(request: Team.UpdateTeamMemberRequestParams, options?: RequestOptions): ApiPromise<UpdateTeamMemberResponse, ResponseError>`
- **Wire**: `PUT /v2/team-members/{team_member_id}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpdateTeamMemberResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Team.UpdateTeamMemberRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `teamMemberId` | `path` | `team_member_id` | `string` | yes |
| `body` | `body` | — | `UpdateTeamMemberRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateTeamMemberRequest` | `updateTeamMemberRequestSchema` | `src/models/update-team-member-request.ts` |
| `UpdateTeamMemberResponse` | `updateTeamMemberResponseSchema` | `src/models/update-team-member-response.ts` |

### updateWageSetting

- **Signature**: `updateWageSetting(request: Team.UpdateWageSettingRequestParams, options?: RequestOptions): ApiPromise<UpdateWageSettingResponse, ResponseError>`
- **Wire**: `PUT /v2/team-members/{team_member_id}/wage-setting`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpdateWageSettingResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Team.UpdateWageSettingRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `teamMemberId` | `path` | `team_member_id` | `string` | yes |
| `body` | `body` | — | `UpdateWageSettingRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateWageSettingRequest` | `updateWageSettingRequestSchema` | `src/models/update-wage-setting-request.ts` |
| `UpdateWageSettingResponse` | `updateWageSettingResponseSchema` | `src/models/update-wage-setting-response.ts` |

