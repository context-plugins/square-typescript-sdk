<!-- Generated file — do not edit; regenerated with the SDK. -->

# Employees — operations

Accessor: `client.employees` · Source: `src/resources/employees.ts` · 2 operations · Request types: namespace `Employees`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### listEmployees

- **Signature**: `listEmployees(request: Employees.ListEmployeesRequest, options?: RequestOptions): ApiPromise<ListEmployeesResponse, ResponseError>`
- **Wire**: `GET /v2/employees`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListEmployeesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Employees.ListEmployeesRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `locationId` | `query` | `location_id` | `string` | no |
| `status` | `query` | — | `EmployeeStatus` | no |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EmployeeStatus` | `employeeStatusSchema` | `src/models/employee-status.ts` |
| `ListEmployeesResponse` | `listEmployeesResponseSchema` | `src/models/list-employees-response.ts` |

### retrieveEmployee

- **Signature**: `retrieveEmployee(request: Employees.RetrieveEmployeeRequest, options?: RequestOptions): ApiPromise<RetrieveEmployeeResponse, ResponseError>`
- **Wire**: `GET /v2/employees/{id}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveEmployeeResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Employees.RetrieveEmployeeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveEmployeeResponse` | `retrieveEmployeeResponseSchema` | `src/models/retrieve-employee-response.ts` |

