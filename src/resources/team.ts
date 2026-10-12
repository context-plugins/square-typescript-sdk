import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * BulkCreateTeamMembers
   *
   * @remarks
   * Creates multiple `TeamMember` objects. The created `TeamMember` objects are returned on
   * successful creates. This process is non-transactional and processes as much of the request as
   * possible. If one of the creates in the request cannot be successfully processed, the request is
   * not marked as failed, but the body of the response contains explicit error information for the
   * failed create.
   *
   * Learn about [Troubleshooting the Team
   * API](https://developer.squareup.com/docs/team/troubleshooting#bulk-create-team-members).
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkCreateTeamMembers(
    request: Team.BulkCreateTeamMembersRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkCreateTeamMembersResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/team-members/bulk-create"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bulkCreateTeamMembersRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkCreateTeamMembersResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * BulkUpdateTeamMembers
   *
   * @remarks
   * Updates multiple `TeamMember` objects. The updated `TeamMember` objects are returned on
   * successful updates. This process is non-transactional and processes as much of the request as
   * possible. If one of the updates in the request cannot be successfully processed, the request is
   * not marked as failed, but the body of the response contains explicit error information for the
   * failed update. Learn about [Troubleshooting the Team
   * API](https://developer.squareup.com/docs/team/troubleshooting#bulk-update-team-members).
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  bulkUpdateTeamMembers(
    request: Team.BulkUpdateTeamMembersRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkUpdateTeamMembersResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/team-members/bulk-update"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: bulkUpdateTeamMembersRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkUpdateTeamMembersResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * CreateJob
   *
   * @remarks
   * Creates a job in a seller account. A job defines a title and tip eligibility. Note that
   * compensation is defined in a [job assignment](entity:JobAssignment) in a team member's wage
   * setting.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createJob(
    request: Team.CreateJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateJobResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/team-members/jobs"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createJobRequestSchema },
      },
      {
        success: { kind: "json", schema: createJobResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * CreateTeamMember
   *
   * @remarks
   * Creates a single `TeamMember` object. The `TeamMember` object is returned on successful
   * creates. You must provide the following values in your request to this endpoint:
   * - `given_name`
   * - `family_name`
   *
   * Learn about [Troubleshooting the Team
   * API](https://developer.squareup.com/docs/team/troubleshooting#createteammember).
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTeamMember(
    request: Team.CreateTeamMemberRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateTeamMemberResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/team-members"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createTeamMemberRequestSchema },
      },
      {
        success: { kind: "json", schema: createTeamMemberResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * ListJobs
   *
   * @remarks
   * Lists jobs in a seller account. Results are sorted by title in ascending order.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listJobs(request: Team.ListJobsRequest, options?: RequestOptions): ApiPromise<ListJobsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/team-members/jobs"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [{ name: "cursor", value: request.cursor, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listJobsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveJob
   *
   * @remarks
   * Retrieves a specified job.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveJob(
    request: Team.RetrieveJobRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveJobResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/team-members/jobs/{job_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "job_id", value: request.jobId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveJobResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveTeamMember
   *
   * @remarks
   * Retrieves a `TeamMember` object for the given `TeamMember.id`. Learn about [Troubleshooting the
   * Team API](https://developer.squareup.com/docs/team/troubleshooting#retrieve-a-team-member).
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveTeamMember(
    request: Team.RetrieveTeamMemberRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveTeamMemberResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/team-members/{team_member_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "team_member_id", value: request.teamMemberId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveTeamMemberResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveWageSetting
   *
   * @remarks
   * Retrieves a `WageSetting` object for a team member specified by `TeamMember.id`. For more
   * information, see [Troubleshooting the Team
   * API](https://developer.squareup.com/docs/team/troubleshooting#retrievewagesetting).
   *
   * Square recommends using [RetrieveTeamMember](api-endpoint:Team-RetrieveTeamMember) or
   * [SearchTeamMembers](api-endpoint:Team-SearchTeamMembers) to get this information directly from
   * the `TeamMember.wage_setting` field.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveWageSetting(
    request: Team.RetrieveWageSettingRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveWageSettingResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/team-members/{team_member_id}/wage-setting"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "team_member_id", value: request.teamMemberId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveWageSettingResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * SearchTeamMembers
   *
   * @remarks
   * Returns a paginated list of `TeamMember` objects for a business. The list can be filtered by
   * location IDs, `ACTIVE` or `INACTIVE` status, or whether the team member is the Square account
   * owner.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchTeamMembers(
    request: Team.SearchTeamMembersRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchTeamMembersResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/team-members/search"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchTeamMembersRequestSchema },
      },
      {
        success: { kind: "json", schema: searchTeamMembersResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * UpdateJob
   *
   * @remarks
   * Updates the title or tip eligibility of a job. Changes to the title propagate to all
   * `JobAssignment`, `Shift`, and `TeamMemberWage` objects that reference the job ID. Changes to
   * tip eligibility propagate to all `TeamMemberWage` objects that reference the job ID.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateJob(
    request: Team.UpdateJobRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateJobResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v2/team-members/jobs/{job_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "job_id", value: request.jobId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateJobRequestSchema },
      },
      {
        success: { kind: "json", schema: updateJobResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * UpdateTeamMember
   *
   * @remarks
   * Updates a single `TeamMember` object. The `TeamMember` object is returned on successful
   * updates. Learn about [Troubleshooting the Team
   * API](https://developer.squareup.com/docs/team/troubleshooting#update-a-team-member).
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateTeamMember(
    request: Team.UpdateTeamMemberRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateTeamMemberResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v2/team-members/{team_member_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "team_member_id", value: request.teamMemberId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateTeamMemberRequestSchema },
      },
      {
        success: { kind: "json", schema: updateTeamMemberResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * UpdateWageSetting
   *
   * @remarks
   * Creates or updates a `WageSetting` object. The object is created if a `WageSetting` with the
   * specified `team_member_id` doesn't exist. Otherwise, it fully replaces the `WageSetting` object
   * for the team member. The `WageSetting` is returned on a successful update. For more
   * information, see [Troubleshooting the Team
   * API](https://developer.squareup.com/docs/team/troubleshooting#create-or-update-a-wage-setting).
   *
   * Square recommends using [CreateTeamMember](api-endpoint:Team-CreateTeamMember) or
   * [UpdateTeamMember](api-endpoint:Team-UpdateTeamMember) to manage the `TeamMember.wage_setting`
   * field directly.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateWageSetting(
    request: Team.UpdateWageSettingRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateWageSettingResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v2/team-members/{team_member_id}/wage-setting"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "team_member_id", value: request.teamMemberId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateWageSettingRequestSchema },
      },
      {
        success: { kind: "json", schema: updateWageSettingResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Team {
  export type BulkCreateTeamMembersRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BulkCreateTeamMembersRequest;
  };

  export type BulkUpdateTeamMembersRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BulkUpdateTeamMembersRequest;
  };

  export type CreateJobRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateJobRequest;
  };

  export type CreateTeamMemberRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateTeamMemberRequest;
  };

  export type ListJobsRequest = {
    /**
     * The pagination cursor returned by the previous call to this endpoint. Provide this cursor to
     * retrieve the next page of results for your original request. For more information, see
     * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
  };

  export type RetrieveJobRequest = {
    /** The ID of the job to retrieve. */
    jobId: string;
  };

  export type RetrieveTeamMemberRequest = {
    /** The ID of the team member to retrieve. */
    teamMemberId: string;
  };

  export type RetrieveWageSettingRequest = {
    /** The ID of the team member for which to retrieve the wage setting. */
    teamMemberId: string;
  };

  export type SearchTeamMembersRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: SearchTeamMembersRequest;
  };

  export type UpdateJobRequestParams = {
    /** The ID of the job to update. */
    jobId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateJobRequest;
  };

  export type UpdateTeamMemberRequestParams = {
    /** The ID of the team member to update. */
    teamMemberId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateTeamMemberRequest;
  };

  export type UpdateWageSettingRequestParams = {
    /** The ID of the team member for which to update the `WageSetting` object. */
    teamMemberId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateWageSettingRequest;
  };
}
