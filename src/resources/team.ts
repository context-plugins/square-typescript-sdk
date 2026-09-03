import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  bulkCreateTeamMembersRequestSchema,
  type BulkCreateTeamMembersRequest,
} from "../models/bulk-create-team-members-request.js";
import {
  bulkCreateTeamMembersResponseSchema,
  type BulkCreateTeamMembersResponse,
} from "../models/bulk-create-team-members-response.js";
import {
  bulkUpdateTeamMembersRequestSchema,
  type BulkUpdateTeamMembersRequest,
} from "../models/bulk-update-team-members-request.js";
import {
  bulkUpdateTeamMembersResponseSchema,
  type BulkUpdateTeamMembersResponse,
} from "../models/bulk-update-team-members-response.js";
import { createJobRequestSchema, type CreateJobRequest } from "../models/create-job-request.js";
import { createJobResponseSchema, type CreateJobResponse } from "../models/create-job-response.js";
import {
  createTeamMemberRequestSchema,
  type CreateTeamMemberRequest,
} from "../models/create-team-member-request.js";
import {
  createTeamMemberResponseSchema,
  type CreateTeamMemberResponse,
} from "../models/create-team-member-response.js";
import { listJobsResponseSchema, type ListJobsResponse } from "../models/list-jobs-response.js";
import { retrieveJobResponseSchema, type RetrieveJobResponse } from "../models/retrieve-job-response.js";
import {
  retrieveTeamMemberResponseSchema,
  type RetrieveTeamMemberResponse,
} from "../models/retrieve-team-member-response.js";
import {
  retrieveWageSettingResponseSchema,
  type RetrieveWageSettingResponse,
} from "../models/retrieve-wage-setting-response.js";
import {
  searchTeamMembersRequestSchema,
  type SearchTeamMembersRequest,
} from "../models/search-team-members-request.js";
import {
  searchTeamMembersResponseSchema,
  type SearchTeamMembersResponse,
} from "../models/search-team-members-response.js";
import { updateJobRequestSchema, type UpdateJobRequest } from "../models/update-job-request.js";
import { updateJobResponseSchema, type UpdateJobResponse } from "../models/update-job-response.js";
import {
  updateTeamMemberRequestSchema,
  type UpdateTeamMemberRequest,
} from "../models/update-team-member-request.js";
import {
  updateTeamMemberResponseSchema,
  type UpdateTeamMemberResponse,
} from "../models/update-team-member-response.js";
import {
  updateWageSettingRequestSchema,
  type UpdateWageSettingRequest,
} from "../models/update-wage-setting-request.js";
import {
  updateWageSettingResponseSchema,
  type UpdateWageSettingResponse,
} from "../models/update-wage-setting-response.js";
import type { Servers } from "../servers.js";

export class Team {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  bulkCreateTeamMembers(
    request: Team.BulkCreateTeamMembersRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkCreateTeamMembersResponse, ResponseError> {
    return this.#rawClient.execute<BulkCreateTeamMembersResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/team-members/bulk-create"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: bulkCreateTeamMembersRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkCreateTeamMembersResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  bulkUpdateTeamMembers(
    request: Team.BulkUpdateTeamMembersRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkUpdateTeamMembersResponse, ResponseError> {
    return this.#rawClient.execute<BulkUpdateTeamMembersResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/team-members/bulk-update"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: bulkUpdateTeamMembersRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkUpdateTeamMembersResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createJob(
    request: Team.CreateJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateJobResponse, ResponseError> {
    return this.#rawClient.execute<CreateJobResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/team-members/jobs"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createJobRequestSchema },
      },
      {
        success: { kind: "json", schema: createJobResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createTeamMember(
    request: Team.CreateTeamMemberRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateTeamMemberResponse, ResponseError> {
    return this.#rawClient.execute<CreateTeamMemberResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/team-members"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createTeamMemberRequestSchema },
      },
      {
        success: { kind: "json", schema: createTeamMemberResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listJobs(
    request: Team.ListJobsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListJobsResponse, ResponseError> {
    return this.#rawClient.execute<ListJobsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/team-members/jobs"),
        auth: this.#auth.oauth2,
        query: [{ name: "cursor", value: request.cursor, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listJobsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveJob(
    request: Team.RetrieveJobRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveJobResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveJobResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/team-members/jobs/{job_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "job_id", value: request.jobId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveJobResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveTeamMember(
    request: Team.RetrieveTeamMemberRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveTeamMemberResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveTeamMemberResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/team-members/{team_member_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "team_member_id", value: request.teamMemberId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveTeamMemberResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveWageSetting(
    request: Team.RetrieveWageSettingRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveWageSettingResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveWageSettingResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/team-members/{team_member_id}/wage-setting"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "team_member_id", value: request.teamMemberId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveWageSettingResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  searchTeamMembers(
    request: Team.SearchTeamMembersRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchTeamMembersResponse, ResponseError> {
    return this.#rawClient.execute<SearchTeamMembersResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/team-members/search"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: searchTeamMembersRequestSchema },
      },
      {
        success: { kind: "json", schema: searchTeamMembersResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateJob(
    request: Team.UpdateJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateJobResponse, ResponseError> {
    return this.#rawClient.execute<UpdateJobResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/team-members/jobs/{job_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "job_id", value: request.jobId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateJobRequestSchema },
      },
      {
        success: { kind: "json", schema: updateJobResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateTeamMember(
    request: Team.UpdateTeamMemberRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateTeamMemberResponse, ResponseError> {
    return this.#rawClient.execute<UpdateTeamMemberResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/team-members/{team_member_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "team_member_id", value: request.teamMemberId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateTeamMemberRequestSchema },
      },
      {
        success: { kind: "json", schema: updateTeamMemberResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateWageSetting(
    request: Team.UpdateWageSettingRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateWageSettingResponse, ResponseError> {
    return this.#rawClient.execute<UpdateWageSettingResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/team-members/{team_member_id}/wage-setting"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "team_member_id", value: request.teamMemberId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateWageSettingRequestSchema },
      },
      {
        success: { kind: "json", schema: updateWageSettingResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Team {
  export type BulkCreateTeamMembersRequestParams = {
    body: BulkCreateTeamMembersRequest;
  };

  export type BulkUpdateTeamMembersRequestParams = {
    body: BulkUpdateTeamMembersRequest;
  };

  export type CreateJobRequestParams = {
    body: CreateJobRequest;
  };

  export type CreateTeamMemberRequestParams = {
    body: CreateTeamMemberRequest;
  };

  export type ListJobsRequest = {
    cursor?: string;
  };

  export type RetrieveJobRequest = {
    jobId: string;
  };

  export type RetrieveTeamMemberRequest = {
    teamMemberId: string;
  };

  export type RetrieveWageSettingRequest = {
    teamMemberId: string;
  };

  export type SearchTeamMembersRequestParams = {
    body: SearchTeamMembersRequest;
  };

  export type UpdateJobRequestParams = {
    jobId: string;
    body: UpdateJobRequest;
  };

  export type UpdateTeamMemberRequestParams = {
    teamMemberId: string;
    body: UpdateTeamMemberRequest;
  };

  export type UpdateWageSettingRequestParams = {
    teamMemberId: string;
    body: UpdateWageSettingRequest;
  };
}
