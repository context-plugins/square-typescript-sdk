<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomerCustomAttributes — operations

Accessor: `client.customerCustomAttributes` · Source: `src/resources/customer-custom-attributes.ts` · 10 operations · Request types: namespace `CustomerCustomAttributes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `square`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### bulkUpsertCustomerCustomAttributes

- **Signature**: `bulkUpsertCustomerCustomAttributes(request: CustomerCustomAttributes.BulkUpsertCustomerCustomAttributesRequestParams, options?: RequestOptions): ApiPromise<BulkUpsertCustomerCustomAttributesResponse, ResponseError>`
- **Wire**: `POST /v2/customers/custom-attributes/bulk-upsert`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `BulkUpsertCustomerCustomAttributesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CustomerCustomAttributes.BulkUpsertCustomerCustomAttributesRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BulkUpsertCustomerCustomAttributesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkUpsertCustomerCustomAttributesRequest` | `bulkUpsertCustomerCustomAttributesRequestSchema` | `src/models/bulk-upsert-customer-custom-attributes-request.ts` |
| `BulkUpsertCustomerCustomAttributesResponse` | `bulkUpsertCustomerCustomAttributesResponseSchema` | `src/models/bulk-upsert-customer-custom-attributes-response.ts` |

### createCustomerCustomAttributeDefinition

- **Signature**: `createCustomerCustomAttributeDefinition(request: CustomerCustomAttributes.CreateCustomerCustomAttributeDefinitionRequestParams, options?: RequestOptions): ApiPromise<CreateCustomerCustomAttributeDefinitionResponse, ResponseError>`
- **Wire**: `POST /v2/customers/custom-attribute-definitions`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `CreateCustomerCustomAttributeDefinitionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CustomerCustomAttributes.CreateCustomerCustomAttributeDefinitionRequestParams` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CreateCustomerCustomAttributeDefinitionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCustomerCustomAttributeDefinitionRequest` | `createCustomerCustomAttributeDefinitionRequestSchema` | `src/models/create-customer-custom-attribute-definition-request.ts` |
| `CreateCustomerCustomAttributeDefinitionResponse` | `createCustomerCustomAttributeDefinitionResponseSchema` | `src/models/create-customer-custom-attribute-definition-response.ts` |

### deleteCustomerCustomAttribute

- **Signature**: `deleteCustomerCustomAttribute(request: CustomerCustomAttributes.DeleteCustomerCustomAttributeRequest, options?: RequestOptions): ApiPromise<DeleteCustomerCustomAttributeResponse, ResponseError>`
- **Wire**: `DELETE /v2/customers/{customer_id}/custom-attributes/{key}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeleteCustomerCustomAttributeResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CustomerCustomAttributes.DeleteCustomerCustomAttributeRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customer_id` | `string` | yes |
| `key` | `path` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteCustomerCustomAttributeResponse` | `deleteCustomerCustomAttributeResponseSchema` | `src/models/delete-customer-custom-attribute-response.ts` |

### deleteCustomerCustomAttributeDefinition

- **Signature**: `deleteCustomerCustomAttributeDefinition(request: CustomerCustomAttributes.DeleteCustomerCustomAttributeDefinitionRequest, options?: RequestOptions): ApiPromise<DeleteCustomerCustomAttributeDefinitionResponse, ResponseError>`
- **Wire**: `DELETE /v2/customers/custom-attribute-definitions/{key}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DeleteCustomerCustomAttributeDefinitionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CustomerCustomAttributes.DeleteCustomerCustomAttributeDefinitionRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteCustomerCustomAttributeDefinitionResponse` | `deleteCustomerCustomAttributeDefinitionResponseSchema` | `src/models/delete-customer-custom-attribute-definition-response.ts` |

### listCustomerCustomAttributeDefinitions

- **Signature**: `listCustomerCustomAttributeDefinitions(request: CustomerCustomAttributes.ListCustomerCustomAttributeDefinitionsRequest, options?: RequestOptions): ApiPromise<ListCustomerCustomAttributeDefinitionsResponse, ResponseError>`
- **Wire**: `GET /v2/customers/custom-attribute-definitions`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListCustomerCustomAttributeDefinitionsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CustomerCustomAttributes.ListCustomerCustomAttributeDefinitionsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `limit` | `query` | `number` | no |
| `cursor` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListCustomerCustomAttributeDefinitionsResponse` | `listCustomerCustomAttributeDefinitionsResponseSchema` | `src/models/list-customer-custom-attribute-definitions-response.ts` |

### listCustomerCustomAttributes

- **Signature**: `listCustomerCustomAttributes(request: CustomerCustomAttributes.ListCustomerCustomAttributesRequest, options?: RequestOptions): ApiPromise<ListCustomerCustomAttributesResponse, ResponseError>`
- **Wire**: `GET /v2/customers/{customer_id}/custom-attributes`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListCustomerCustomAttributesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CustomerCustomAttributes.ListCustomerCustomAttributesRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `customerId` | `path` | `customer_id` | `string` | yes | — |
| `limit` | `query` | — | `number` | no | — |
| `cursor` | `query` | — | `string` | no | — |
| `withDefinitions` | `query` | `with_definitions` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListCustomerCustomAttributesResponse` | `listCustomerCustomAttributesResponseSchema` | `src/models/list-customer-custom-attributes-response.ts` |

### retrieveCustomerCustomAttribute

- **Signature**: `retrieveCustomerCustomAttribute(request: CustomerCustomAttributes.RetrieveCustomerCustomAttributeRequest, options?: RequestOptions): ApiPromise<RetrieveCustomerCustomAttributeResponse, ResponseError>`
- **Wire**: `GET /v2/customers/{customer_id}/custom-attributes/{key}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveCustomerCustomAttributeResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CustomerCustomAttributes.RetrieveCustomerCustomAttributeRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `customerId` | `path` | `customer_id` | `string` | yes | — |
| `key` | `path` | — | `string` | yes | — |
| `withDefinition` | `query` | `with_definition` | `boolean` | no | `false` |
| `version` | `query` | — | `number` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveCustomerCustomAttributeResponse` | `retrieveCustomerCustomAttributeResponseSchema` | `src/models/retrieve-customer-custom-attribute-response.ts` |

### retrieveCustomerCustomAttributeDefinition

- **Signature**: `retrieveCustomerCustomAttributeDefinition(request: CustomerCustomAttributes.RetrieveCustomerCustomAttributeDefinitionRequest, options?: RequestOptions): ApiPromise<RetrieveCustomerCustomAttributeDefinitionResponse, ResponseError>`
- **Wire**: `GET /v2/customers/custom-attribute-definitions/{key}`
- **Auth**: `oauth2`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RetrieveCustomerCustomAttributeDefinitionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CustomerCustomAttributes.RetrieveCustomerCustomAttributeDefinitionRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `version` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RetrieveCustomerCustomAttributeDefinitionResponse` | `retrieveCustomerCustomAttributeDefinitionResponseSchema` | `src/models/retrieve-customer-custom-attribute-definition-response.ts` |

### updateCustomerCustomAttributeDefinition

- **Signature**: `updateCustomerCustomAttributeDefinition(request: CustomerCustomAttributes.UpdateCustomerCustomAttributeDefinitionRequestParams, options?: RequestOptions): ApiPromise<UpdateCustomerCustomAttributeDefinitionResponse, ResponseError>`
- **Wire**: `PUT /v2/customers/custom-attribute-definitions/{key}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpdateCustomerCustomAttributeDefinitionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CustomerCustomAttributes.UpdateCustomerCustomAttributeDefinitionRequestParams` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `key` | `path` | `string` | yes |
| `body` | `body` | `UpdateCustomerCustomAttributeDefinitionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCustomerCustomAttributeDefinitionRequest` | `updateCustomerCustomAttributeDefinitionRequestSchema` | `src/models/update-customer-custom-attribute-definition-request.ts` |
| `UpdateCustomerCustomAttributeDefinitionResponse` | `updateCustomerCustomAttributeDefinitionResponseSchema` | `src/models/update-customer-custom-attribute-definition-response.ts` |

### upsertCustomerCustomAttribute

- **Signature**: `upsertCustomerCustomAttribute(request: CustomerCustomAttributes.UpsertCustomerCustomAttributeRequestParams, options?: RequestOptions): ApiPromise<UpsertCustomerCustomAttributeResponse, ResponseError>`
- **Wire**: `POST /v2/customers/{customer_id}/custom-attributes/{key}`
- **Auth**: `oauth2`
- **Request body**: `application/json` — the `body` field
- **Returns**: `UpsertCustomerCustomAttributeResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `CustomerCustomAttributes.UpsertCustomerCustomAttributeRequestParams` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `customer_id` | `string` | yes |
| `key` | `path` | — | `string` | yes |
| `body` | `body` | — | `UpsertCustomerCustomAttributeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpsertCustomerCustomAttributeRequest` | `upsertCustomerCustomAttributeRequestSchema` | `src/models/upsert-customer-custom-attribute-request.ts` |
| `UpsertCustomerCustomAttributeResponse` | `upsertCustomerCustomAttributeResponseSchema` | `src/models/upsert-customer-custom-attribute-response.ts` |

