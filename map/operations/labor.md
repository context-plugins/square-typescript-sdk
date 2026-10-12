<!-- Generated file — do not edit; regenerated with the SDK. -->

# Labor — operations

Accessor: `client.labor` · Source: `src/resources/labor.ts` · 27 operations · Request types: namespace `Labor`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### bulkPublishScheduledShifts

- **Signature**: `bulkPublishScheduledShifts(request: Labor.BulkPublishScheduledShiftsRequestParams, options?: RequestOptions): ApiPromise<BulkPublishScheduledShiftsResponse, ApiError>`
- **Wire**: `POST /v2/labor/scheduled-shifts/bulk-publish`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkPublishScheduledShiftsResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Labor.BulkPublishScheduledShiftsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkPublishScheduledShiftsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkPublishScheduledShiftsRequest` | `bulkPublishScheduledShiftsRequestSchema` | `src/models/bulk-publish-scheduled-shifts-request.ts` |
| `BulkPublishScheduledShiftsResponse` | `bulkPublishScheduledShiftsResponseSchema` | `src/models/bulk-publish-scheduled-shifts-response.ts` |

### createBreakType

- **Signature**: `createBreakType(request: Labor.CreateBreakTypeRequestParams, options?: RequestOptions): ApiPromise<CreateBreakTypeResponse, ApiError>`
- **Wire**: `POST /v2/labor/break-types`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateBreakTypeResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Labor.CreateBreakTypeRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateBreakTypeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateBreakTypeRequest` | `createBreakTypeRequestSchema` | `src/models/create-break-type-request.ts` |
| `CreateBreakTypeResponse` | `createBreakTypeResponseSchema` | `src/models/create-break-type-response.ts` |

### createScheduledShift

- **Signature**: `createScheduledShift(request: Labor.CreateScheduledShiftRequestParams, options?: RequestOptions): ApiPromise<CreateScheduledShiftResponse, ApiError>`
- **Wire**: `POST /v2/labor/scheduled-shifts`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateScheduledShiftResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Labor.CreateScheduledShiftRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateScheduledShiftRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateScheduledShiftRequest` | `createScheduledShiftRequestSchema` | `src/models/create-scheduled-shift-request.ts` |
| `CreateScheduledShiftResponse` | `createScheduledShiftResponseSchema` | `src/models/create-scheduled-shift-response.ts` |

### createShift

- **Signature**: `createShift(request: Labor.CreateShiftRequestParams, options?: RequestOptions): ApiPromise<CreateShiftResponse, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /v2/labor/shifts`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateShiftResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Labor.CreateShiftRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateShiftRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateShiftRequest` | `createShiftRequestSchema` | `src/models/create-shift-request.ts` |
| `CreateShiftResponse` | `createShiftResponseSchema` | `src/models/create-shift-response.ts` |

### createTimecard

- **Signature**: `createTimecard(request: Labor.CreateTimecardRequestParams, options?: RequestOptions): ApiPromise<CreateTimecardResponse, ApiError>`
- **Wire**: `POST /v2/labor/timecards`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CreateTimecardResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Labor.CreateTimecardRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateTimecardRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateTimecardRequest` | `createTimecardRequestSchema` | `src/models/create-timecard-request.ts` |
| `CreateTimecardResponse` | `createTimecardResponseSchema` | `src/models/create-timecard-response.ts` |

### deleteBreakType

- **Signature**: `deleteBreakType(request: Labor.DeleteBreakTypeRequest, options?: RequestOptions): ApiPromise<DeleteBreakTypeResponse, ApiError>`
- **Wire**: `DELETE /v2/labor/break-types/{id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteBreakTypeResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Labor.DeleteBreakTypeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteBreakTypeResponse` | `deleteBreakTypeResponseSchema` | `src/models/delete-break-type-response.ts` |

### deleteShift

- **Signature**: `deleteShift(request: Labor.DeleteShiftRequest, options?: RequestOptions): ApiPromise<DeleteShiftResponse, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `DELETE /v2/labor/shifts/{id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteShiftResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Labor.DeleteShiftRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteShiftResponse` | `deleteShiftResponseSchema` | `src/models/delete-shift-response.ts` |

### deleteTimecard

- **Signature**: `deleteTimecard(request: Labor.DeleteTimecardRequest, options?: RequestOptions): ApiPromise<DeleteTimecardResponse, ApiError>`
- **Wire**: `DELETE /v2/labor/timecards/{id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DeleteTimecardResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Labor.DeleteTimecardRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteTimecardResponse` | `deleteTimecardResponseSchema` | `src/models/delete-timecard-response.ts` |

### getBreakType

- **Signature**: `getBreakType(request: Labor.GetBreakTypeRequest, options?: RequestOptions): ApiPromise<GetBreakTypeResponse, ApiError>`
- **Wire**: `GET /v2/labor/break-types/{id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetBreakTypeResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Labor.GetBreakTypeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetBreakTypeResponse` | `getBreakTypeResponseSchema` | `src/models/get-break-type-response.ts` |

### getEmployeeWage

- **Signature**: `getEmployeeWage(request: Labor.GetEmployeeWageRequest, options?: RequestOptions): ApiPromise<GetEmployeeWageResponse, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /v2/labor/employee-wages/{id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetEmployeeWageResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Labor.GetEmployeeWageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetEmployeeWageResponse` | `getEmployeeWageResponseSchema` | `src/models/get-employee-wage-response.ts` |

### getShift

- **Signature**: `getShift(request: Labor.GetShiftRequest, options?: RequestOptions): ApiPromise<GetShiftResponse, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /v2/labor/shifts/{id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetShiftResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Labor.GetShiftRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetShiftResponse` | `getShiftResponseSchema` | `src/models/get-shift-response.ts` |

### getTeamMemberWage

- **Signature**: `getTeamMemberWage(request: Labor.GetTeamMemberWageRequest, options?: RequestOptions): ApiPromise<GetTeamMemberWageResponse, ApiError>`
- **Wire**: `GET /v2/labor/team-member-wages/{id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GetTeamMemberWageResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Labor.GetTeamMemberWageRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `GetTeamMemberWageResponse` | `getTeamMemberWageResponseSchema` | `src/models/get-team-member-wage-response.ts` |

### listBreakTypes

- **Signature**: `listBreakTypes(request: Labor.ListBreakTypesRequest, options?: RequestOptions): ApiPromise<ListBreakTypesResponse, ApiError>`
- **Wire**: `GET /v2/labor/break-types`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListBreakTypesResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Labor.ListBreakTypesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locationId` | `query` | `location_id` | `string` | no |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListBreakTypesResponse` | `listBreakTypesResponseSchema` | `src/models/list-break-types-response.ts` |

### listEmployeeWages

- **Signature**: `listEmployeeWages(request: Labor.ListEmployeeWagesRequest, options?: RequestOptions): ApiPromise<ListEmployeeWagesResponse, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `GET /v2/labor/employee-wages`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListEmployeeWagesResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Labor.ListEmployeeWagesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `employeeId` | `query` | `employee_id` | `string` | no |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListEmployeeWagesResponse` | `listEmployeeWagesResponseSchema` | `src/models/list-employee-wages-response.ts` |

### listTeamMemberWages

- **Signature**: `listTeamMemberWages(request: Labor.ListTeamMemberWagesRequest, options?: RequestOptions): ApiPromise<ListTeamMemberWagesResponse, ApiError>`
- **Wire**: `GET /v2/labor/team-member-wages`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListTeamMemberWagesResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Labor.ListTeamMemberWagesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `teamMemberId` | `query` | `team_member_id` | `string` | no |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListTeamMemberWagesResponse` | `listTeamMemberWagesResponseSchema` | `src/models/list-team-member-wages-response.ts` |

### listWorkweekConfigs

- **Signature**: `listWorkweekConfigs(request: Labor.ListWorkweekConfigsRequest, options?: RequestOptions): ApiPromise<ListWorkweekConfigsResponse, ApiError>`
- **Wire**: `GET /v2/labor/workweek-configs`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListWorkweekConfigsResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Labor.ListWorkweekConfigsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `limit` | `query` | `number` | no |
| `cursor` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListWorkweekConfigsResponse` | `listWorkweekConfigsResponseSchema` | `src/models/list-workweek-configs-response.ts` |

### publishScheduledShift

- **Signature**: `publishScheduledShift(request: Labor.PublishScheduledShiftRequestParams, options?: RequestOptions): ApiPromise<PublishScheduledShiftResponse, ApiError>`
- **Wire**: `POST /v2/labor/scheduled-shifts/{id}/publish`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PublishScheduledShiftResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Labor.PublishScheduledShiftRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `PublishScheduledShiftRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublishScheduledShiftRequest` | `publishScheduledShiftRequestSchema` | `src/models/publish-scheduled-shift-request.ts` |
| `PublishScheduledShiftResponse` | `publishScheduledShiftResponseSchema` | `src/models/publish-scheduled-shift-response.ts` |

### retrieveScheduledShift

- **Signature**: `retrieveScheduledShift(request: Labor.RetrieveScheduledShiftRequest, options?: RequestOptions): ApiPromise<RetrieveScheduledShiftResponse, ApiError>`
- **Wire**: `GET /v2/labor/scheduled-shifts/{id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveScheduledShiftResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Labor.RetrieveScheduledShiftRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveScheduledShiftResponse` | `retrieveScheduledShiftResponseSchema` | `src/models/retrieve-scheduled-shift-response.ts` |

### retrieveTimecard

- **Signature**: `retrieveTimecard(request: Labor.RetrieveTimecardRequest, options?: RequestOptions): ApiPromise<RetrieveTimecardResponse, ApiError>`
- **Wire**: `GET /v2/labor/timecards/{id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveTimecardResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Labor.RetrieveTimecardRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveTimecardResponse` | `retrieveTimecardResponseSchema` | `src/models/retrieve-timecard-response.ts` |

### searchScheduledShifts

- **Signature**: `searchScheduledShifts(request: Labor.SearchScheduledShiftsRequestParams, options?: RequestOptions): ApiPromise<SearchScheduledShiftsResponse, ApiError>`
- **Wire**: `POST /v2/labor/scheduled-shifts/search`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SearchScheduledShiftsResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Labor.SearchScheduledShiftsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchScheduledShiftsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchScheduledShiftsRequest` | `searchScheduledShiftsRequestSchema` | `src/models/search-scheduled-shifts-request.ts` |
| `SearchScheduledShiftsResponse` | `searchScheduledShiftsResponseSchema` | `src/models/search-scheduled-shifts-response.ts` |

### searchShifts

- **Signature**: `searchShifts(request: Labor.SearchShiftsRequestParams, options?: RequestOptions): ApiPromise<SearchShiftsResponse, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `POST /v2/labor/shifts/search`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SearchShiftsResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Labor.SearchShiftsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchShiftsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchShiftsRequest` | `searchShiftsRequestSchema` | `src/models/search-shifts-request.ts` |
| `SearchShiftsResponse` | `searchShiftsResponseSchema` | `src/models/search-shifts-response.ts` |

### searchTimecards

- **Signature**: `searchTimecards(request: Labor.SearchTimecardsRequestParams, options?: RequestOptions): ApiPromise<SearchTimecardsResponse, ApiError>`
- **Wire**: `POST /v2/labor/timecards/search`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SearchTimecardsResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Labor.SearchTimecardsRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SearchTimecardsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchTimecardsRequest` | `searchTimecardsRequestSchema` | `src/models/search-timecards-request.ts` |
| `SearchTimecardsResponse` | `searchTimecardsResponseSchema` | `src/models/search-timecards-response.ts` |

### updateBreakType

- **Signature**: `updateBreakType(request: Labor.UpdateBreakTypeRequestParams, options?: RequestOptions): ApiPromise<UpdateBreakTypeResponse, ApiError>`
- **Wire**: `PUT /v2/labor/break-types/{id}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateBreakTypeResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Labor.UpdateBreakTypeRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `UpdateBreakTypeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateBreakTypeRequest` | `updateBreakTypeRequestSchema` | `src/models/update-break-type-request.ts` |
| `UpdateBreakTypeResponse` | `updateBreakTypeResponseSchema` | `src/models/update-break-type-response.ts` |

### updateScheduledShift

- **Signature**: `updateScheduledShift(request: Labor.UpdateScheduledShiftRequestParams, options?: RequestOptions): ApiPromise<UpdateScheduledShiftResponse, ApiError>`
- **Wire**: `PUT /v2/labor/scheduled-shifts/{id}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateScheduledShiftResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Labor.UpdateScheduledShiftRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `UpdateScheduledShiftRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateScheduledShiftRequest` | `updateScheduledShiftRequestSchema` | `src/models/update-scheduled-shift-request.ts` |
| `UpdateScheduledShiftResponse` | `updateScheduledShiftResponseSchema` | `src/models/update-scheduled-shift-response.ts` |

### updateShift

- **Signature**: `updateShift(request: Labor.UpdateShiftRequestParams, options?: RequestOptions): ApiPromise<UpdateShiftResponse, ApiError>`
- **Deprecated**: the method carries `@deprecated`, so an IDE strikes the call site through; it still works
- **Wire**: `PUT /v2/labor/shifts/{id}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateShiftResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Labor.UpdateShiftRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `UpdateShiftRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateShiftRequest` | `updateShiftRequestSchema` | `src/models/update-shift-request.ts` |
| `UpdateShiftResponse` | `updateShiftResponseSchema` | `src/models/update-shift-response.ts` |

### updateTimecard

- **Signature**: `updateTimecard(request: Labor.UpdateTimecardRequestParams, options?: RequestOptions): ApiPromise<UpdateTimecardResponse, ApiError>`
- **Wire**: `PUT /v2/labor/timecards/{id}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateTimecardResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Labor.UpdateTimecardRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `UpdateTimecardRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateTimecardRequest` | `updateTimecardRequestSchema` | `src/models/update-timecard-request.ts` |
| `UpdateTimecardResponse` | `updateTimecardResponseSchema` | `src/models/update-timecard-response.ts` |

### updateWorkweekConfig

- **Signature**: `updateWorkweekConfig(request: Labor.UpdateWorkweekConfigRequestParams, options?: RequestOptions): ApiPromise<UpdateWorkweekConfigResponse, ApiError>`
- **Wire**: `PUT /v2/labor/workweek-configs/{id}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UpdateWorkweekConfigResponse`
- **Error**: `SquareError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Labor.UpdateWorkweekConfigRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `UpdateWorkweekConfigRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateWorkweekConfigRequest` | `updateWorkweekConfigRequestSchema` | `src/models/update-workweek-config-request.ts` |
| `UpdateWorkweekConfigResponse` | `updateWorkweekConfigResponseSchema` | `src/models/update-workweek-config-response.ts` |

