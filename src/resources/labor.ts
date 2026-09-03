import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  bulkPublishScheduledShiftsRequestSchema,
  type BulkPublishScheduledShiftsRequest,
} from "../models/bulk-publish-scheduled-shifts-request.js";
import {
  bulkPublishScheduledShiftsResponseSchema,
  type BulkPublishScheduledShiftsResponse,
} from "../models/bulk-publish-scheduled-shifts-response.js";
import {
  createBreakTypeRequestSchema,
  type CreateBreakTypeRequest,
} from "../models/create-break-type-request.js";
import {
  createBreakTypeResponseSchema,
  type CreateBreakTypeResponse,
} from "../models/create-break-type-response.js";
import {
  createScheduledShiftRequestSchema,
  type CreateScheduledShiftRequest,
} from "../models/create-scheduled-shift-request.js";
import {
  createScheduledShiftResponseSchema,
  type CreateScheduledShiftResponse,
} from "../models/create-scheduled-shift-response.js";
import { createShiftRequestSchema, type CreateShiftRequest } from "../models/create-shift-request.js";
import { createShiftResponseSchema, type CreateShiftResponse } from "../models/create-shift-response.js";
import {
  createTimecardRequestSchema,
  type CreateTimecardRequest,
} from "../models/create-timecard-request.js";
import {
  createTimecardResponseSchema,
  type CreateTimecardResponse,
} from "../models/create-timecard-response.js";
import {
  deleteBreakTypeResponseSchema,
  type DeleteBreakTypeResponse,
} from "../models/delete-break-type-response.js";
import { deleteShiftResponseSchema, type DeleteShiftResponse } from "../models/delete-shift-response.js";
import {
  deleteTimecardResponseSchema,
  type DeleteTimecardResponse,
} from "../models/delete-timecard-response.js";
import { getBreakTypeResponseSchema, type GetBreakTypeResponse } from "../models/get-break-type-response.js";
import {
  getEmployeeWageResponseSchema,
  type GetEmployeeWageResponse,
} from "../models/get-employee-wage-response.js";
import { getShiftResponseSchema, type GetShiftResponse } from "../models/get-shift-response.js";
import {
  getTeamMemberWageResponseSchema,
  type GetTeamMemberWageResponse,
} from "../models/get-team-member-wage-response.js";
import {
  listBreakTypesResponseSchema,
  type ListBreakTypesResponse,
} from "../models/list-break-types-response.js";
import {
  listEmployeeWagesResponseSchema,
  type ListEmployeeWagesResponse,
} from "../models/list-employee-wages-response.js";
import {
  listTeamMemberWagesResponseSchema,
  type ListTeamMemberWagesResponse,
} from "../models/list-team-member-wages-response.js";
import {
  listWorkweekConfigsResponseSchema,
  type ListWorkweekConfigsResponse,
} from "../models/list-workweek-configs-response.js";
import {
  publishScheduledShiftRequestSchema,
  type PublishScheduledShiftRequest,
} from "../models/publish-scheduled-shift-request.js";
import {
  publishScheduledShiftResponseSchema,
  type PublishScheduledShiftResponse,
} from "../models/publish-scheduled-shift-response.js";
import {
  retrieveScheduledShiftResponseSchema,
  type RetrieveScheduledShiftResponse,
} from "../models/retrieve-scheduled-shift-response.js";
import {
  retrieveTimecardResponseSchema,
  type RetrieveTimecardResponse,
} from "../models/retrieve-timecard-response.js";
import {
  searchScheduledShiftsRequestSchema,
  type SearchScheduledShiftsRequest,
} from "../models/search-scheduled-shifts-request.js";
import {
  searchScheduledShiftsResponseSchema,
  type SearchScheduledShiftsResponse,
} from "../models/search-scheduled-shifts-response.js";
import { searchShiftsRequestSchema, type SearchShiftsRequest } from "../models/search-shifts-request.js";
import { searchShiftsResponseSchema, type SearchShiftsResponse } from "../models/search-shifts-response.js";
import {
  searchTimecardsRequestSchema,
  type SearchTimecardsRequest,
} from "../models/search-timecards-request.js";
import {
  searchTimecardsResponseSchema,
  type SearchTimecardsResponse,
} from "../models/search-timecards-response.js";
import {
  updateBreakTypeRequestSchema,
  type UpdateBreakTypeRequest,
} from "../models/update-break-type-request.js";
import {
  updateBreakTypeResponseSchema,
  type UpdateBreakTypeResponse,
} from "../models/update-break-type-response.js";
import {
  updateScheduledShiftRequestSchema,
  type UpdateScheduledShiftRequest,
} from "../models/update-scheduled-shift-request.js";
import {
  updateScheduledShiftResponseSchema,
  type UpdateScheduledShiftResponse,
} from "../models/update-scheduled-shift-response.js";
import { updateShiftRequestSchema, type UpdateShiftRequest } from "../models/update-shift-request.js";
import { updateShiftResponseSchema, type UpdateShiftResponse } from "../models/update-shift-response.js";
import {
  updateTimecardRequestSchema,
  type UpdateTimecardRequest,
} from "../models/update-timecard-request.js";
import {
  updateTimecardResponseSchema,
  type UpdateTimecardResponse,
} from "../models/update-timecard-response.js";
import {
  updateWorkweekConfigRequestSchema,
  type UpdateWorkweekConfigRequest,
} from "../models/update-workweek-config-request.js";
import {
  updateWorkweekConfigResponseSchema,
  type UpdateWorkweekConfigResponse,
} from "../models/update-workweek-config-response.js";
import type { Servers } from "../servers.js";

export class Labor {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  bulkPublishScheduledShifts(
    request: Labor.BulkPublishScheduledShiftsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkPublishScheduledShiftsResponse, ResponseError> {
    return this.#rawClient.execute<BulkPublishScheduledShiftsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/labor/scheduled-shifts/bulk-publish"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: bulkPublishScheduledShiftsRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkPublishScheduledShiftsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createBreakType(
    request: Labor.CreateBreakTypeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateBreakTypeResponse, ResponseError> {
    return this.#rawClient.execute<CreateBreakTypeResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/labor/break-types"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createBreakTypeRequestSchema },
      },
      {
        success: { kind: "json", schema: createBreakTypeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createScheduledShift(
    request: Labor.CreateScheduledShiftRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateScheduledShiftResponse, ResponseError> {
    return this.#rawClient.execute<CreateScheduledShiftResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/labor/scheduled-shifts"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createScheduledShiftRequestSchema },
      },
      {
        success: { kind: "json", schema: createScheduledShiftResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createShift(
    request: Labor.CreateShiftRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateShiftResponse, ResponseError> {
    return this.#rawClient.execute<CreateShiftResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/labor/shifts"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createShiftRequestSchema },
      },
      {
        success: { kind: "json", schema: createShiftResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createTimecard(
    request: Labor.CreateTimecardRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateTimecardResponse, ResponseError> {
    return this.#rawClient.execute<CreateTimecardResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/labor/timecards"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createTimecardRequestSchema },
      },
      {
        success: { kind: "json", schema: createTimecardResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteBreakType(
    request: Labor.DeleteBreakTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteBreakTypeResponse, ResponseError> {
    return this.#rawClient.execute<DeleteBreakTypeResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/labor/break-types/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteBreakTypeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteShift(
    request: Labor.DeleteShiftRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteShiftResponse, ResponseError> {
    return this.#rawClient.execute<DeleteShiftResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/labor/shifts/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteShiftResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteTimecard(
    request: Labor.DeleteTimecardRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteTimecardResponse, ResponseError> {
    return this.#rawClient.execute<DeleteTimecardResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/labor/timecards/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteTimecardResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getBreakType(
    request: Labor.GetBreakTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<GetBreakTypeResponse, ResponseError> {
    return this.#rawClient.execute<GetBreakTypeResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/labor/break-types/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getBreakTypeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getEmployeeWage(
    request: Labor.GetEmployeeWageRequest,
    options?: RequestOptions,
  ): ApiPromise<GetEmployeeWageResponse, ResponseError> {
    return this.#rawClient.execute<GetEmployeeWageResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/labor/employee-wages/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getEmployeeWageResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getShift(
    request: Labor.GetShiftRequest,
    options?: RequestOptions,
  ): ApiPromise<GetShiftResponse, ResponseError> {
    return this.#rawClient.execute<GetShiftResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/labor/shifts/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getShiftResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getTeamMemberWage(
    request: Labor.GetTeamMemberWageRequest,
    options?: RequestOptions,
  ): ApiPromise<GetTeamMemberWageResponse, ResponseError> {
    return this.#rawClient.execute<GetTeamMemberWageResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/labor/team-member-wages/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getTeamMemberWageResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listBreakTypes(
    request: Labor.ListBreakTypesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListBreakTypesResponse, ResponseError> {
    return this.#rawClient.execute<ListBreakTypesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/labor/break-types"),
        auth: this.#auth.oauth2,
        query: [
          { name: "location_id", value: request.locationId, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listBreakTypesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listEmployeeWages(
    request: Labor.ListEmployeeWagesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListEmployeeWagesResponse, ResponseError> {
    return this.#rawClient.execute<ListEmployeeWagesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/labor/employee-wages"),
        auth: this.#auth.oauth2,
        query: [
          { name: "employee_id", value: request.employeeId, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listEmployeeWagesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listTeamMemberWages(
    request: Labor.ListTeamMemberWagesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTeamMemberWagesResponse, ResponseError> {
    return this.#rawClient.execute<ListTeamMemberWagesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/labor/team-member-wages"),
        auth: this.#auth.oauth2,
        query: [
          { name: "team_member_id", value: request.teamMemberId, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTeamMemberWagesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listWorkweekConfigs(
    request: Labor.ListWorkweekConfigsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListWorkweekConfigsResponse, ResponseError> {
    return this.#rawClient.execute<ListWorkweekConfigsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/labor/workweek-configs"),
        auth: this.#auth.oauth2,
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listWorkweekConfigsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  publishScheduledShift(
    request: Labor.PublishScheduledShiftRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PublishScheduledShiftResponse, ResponseError> {
    return this.#rawClient.execute<PublishScheduledShiftResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/labor/scheduled-shifts/{id}/publish"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publishScheduledShiftRequestSchema },
      },
      {
        success: { kind: "json", schema: publishScheduledShiftResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveScheduledShift(
    request: Labor.RetrieveScheduledShiftRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveScheduledShiftResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveScheduledShiftResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/labor/scheduled-shifts/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveScheduledShiftResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveTimecard(
    request: Labor.RetrieveTimecardRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveTimecardResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveTimecardResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/labor/timecards/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveTimecardResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  searchScheduledShifts(
    request: Labor.SearchScheduledShiftsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchScheduledShiftsResponse, ResponseError> {
    return this.#rawClient.execute<SearchScheduledShiftsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/labor/scheduled-shifts/search"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: searchScheduledShiftsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchScheduledShiftsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  searchShifts(
    request: Labor.SearchShiftsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchShiftsResponse, ResponseError> {
    return this.#rawClient.execute<SearchShiftsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/labor/shifts/search"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: searchShiftsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchShiftsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  searchTimecards(
    request: Labor.SearchTimecardsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchTimecardsResponse, ResponseError> {
    return this.#rawClient.execute<SearchTimecardsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/labor/timecards/search"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: searchTimecardsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchTimecardsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateBreakType(
    request: Labor.UpdateBreakTypeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateBreakTypeResponse, ResponseError> {
    return this.#rawClient.execute<UpdateBreakTypeResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/labor/break-types/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateBreakTypeRequestSchema },
      },
      {
        success: { kind: "json", schema: updateBreakTypeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateScheduledShift(
    request: Labor.UpdateScheduledShiftRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateScheduledShiftResponse, ResponseError> {
    return this.#rawClient.execute<UpdateScheduledShiftResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/labor/scheduled-shifts/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateScheduledShiftRequestSchema },
      },
      {
        success: { kind: "json", schema: updateScheduledShiftResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateShift(
    request: Labor.UpdateShiftRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateShiftResponse, ResponseError> {
    return this.#rawClient.execute<UpdateShiftResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/labor/shifts/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateShiftRequestSchema },
      },
      {
        success: { kind: "json", schema: updateShiftResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateTimecard(
    request: Labor.UpdateTimecardRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateTimecardResponse, ResponseError> {
    return this.#rawClient.execute<UpdateTimecardResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/labor/timecards/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateTimecardRequestSchema },
      },
      {
        success: { kind: "json", schema: updateTimecardResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateWorkweekConfig(
    request: Labor.UpdateWorkweekConfigRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateWorkweekConfigResponse, ResponseError> {
    return this.#rawClient.execute<UpdateWorkweekConfigResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/labor/workweek-configs/{id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateWorkweekConfigRequestSchema },
      },
      {
        success: { kind: "json", schema: updateWorkweekConfigResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Labor {
  export type BulkPublishScheduledShiftsRequestParams = {
    body: BulkPublishScheduledShiftsRequest;
  };

  export type CreateBreakTypeRequestParams = {
    body: CreateBreakTypeRequest;
  };

  export type CreateScheduledShiftRequestParams = {
    body: CreateScheduledShiftRequest;
  };

  export type CreateShiftRequestParams = {
    body: CreateShiftRequest;
  };

  export type CreateTimecardRequestParams = {
    body: CreateTimecardRequest;
  };

  export type DeleteBreakTypeRequest = {
    id: string;
  };

  export type DeleteShiftRequest = {
    id: string;
  };

  export type DeleteTimecardRequest = {
    id: string;
  };

  export type GetBreakTypeRequest = {
    id: string;
  };

  export type GetEmployeeWageRequest = {
    id: string;
  };

  export type GetShiftRequest = {
    id: string;
  };

  export type GetTeamMemberWageRequest = {
    id: string;
  };

  export type ListBreakTypesRequest = {
    locationId?: string;
    limit?: number;
    cursor?: string;
  };

  export type ListEmployeeWagesRequest = {
    employeeId?: string;
    limit?: number;
    cursor?: string;
  };

  export type ListTeamMemberWagesRequest = {
    teamMemberId?: string;
    limit?: number;
    cursor?: string;
  };

  export type ListWorkweekConfigsRequest = {
    limit?: number;
    cursor?: string;
  };

  export type PublishScheduledShiftRequestParams = {
    id: string;
    body: PublishScheduledShiftRequest;
  };

  export type RetrieveScheduledShiftRequest = {
    id: string;
  };

  export type RetrieveTimecardRequest = {
    id: string;
  };

  export type SearchScheduledShiftsRequestParams = {
    body: SearchScheduledShiftsRequest;
  };

  export type SearchShiftsRequestParams = {
    body: SearchShiftsRequest;
  };

  export type SearchTimecardsRequestParams = {
    body: SearchTimecardsRequest;
  };

  export type UpdateBreakTypeRequestParams = {
    id: string;
    body: UpdateBreakTypeRequest;
  };

  export type UpdateScheduledShiftRequestParams = {
    id: string;
    body: UpdateScheduledShiftRequest;
  };

  export type UpdateShiftRequestParams = {
    id: string;
    body: UpdateShiftRequest;
  };

  export type UpdateTimecardRequestParams = {
    id: string;
    body: UpdateTimecardRequest;
  };

  export type UpdateWorkweekConfigRequestParams = {
    id: string;
    body: UpdateWorkweekConfigRequest;
  };
}
