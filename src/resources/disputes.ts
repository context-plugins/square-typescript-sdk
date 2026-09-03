import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  acceptDisputeResponseSchema,
  type AcceptDisputeResponse,
} from "../models/accept-dispute-response.js";
import {
  createDisputeEvidenceFileResponseSchema,
  type CreateDisputeEvidenceFileResponse,
} from "../models/create-dispute-evidence-file-response.js";
import {
  createDisputeEvidenceTextRequestSchema,
  type CreateDisputeEvidenceTextRequest,
} from "../models/create-dispute-evidence-text-request.js";
import {
  createDisputeEvidenceTextResponseSchema,
  type CreateDisputeEvidenceTextResponse,
} from "../models/create-dispute-evidence-text-response.js";
import {
  deleteDisputeEvidenceResponseSchema,
  type DeleteDisputeEvidenceResponse,
} from "../models/delete-dispute-evidence-response.js";
import { disputeStateSchema, type DisputeState } from "../models/dispute-state.js";
import {
  listDisputeEvidenceResponseSchema,
  type ListDisputeEvidenceResponse,
} from "../models/list-dispute-evidence-response.js";
import { listDisputesResponseSchema, type ListDisputesResponse } from "../models/list-disputes-response.js";
import {
  retrieveDisputeEvidenceResponseSchema,
  type RetrieveDisputeEvidenceResponse,
} from "../models/retrieve-dispute-evidence-response.js";
import {
  retrieveDisputeResponseSchema,
  type RetrieveDisputeResponse,
} from "../models/retrieve-dispute-response.js";
import {
  submitEvidenceResponseSchema,
  type SubmitEvidenceResponse,
} from "../models/submit-evidence-response.js";
import type { Servers } from "../servers.js";

export class Disputes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  acceptDispute(
    request: Disputes.AcceptDisputeRequest,
    options?: RequestOptions,
  ): ApiPromise<AcceptDisputeResponse, ResponseError> {
    return this.#rawClient.execute<AcceptDisputeResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/disputes/{dispute_id}/accept"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "dispute_id", value: request.disputeId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: acceptDisputeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createDisputeEvidenceFile(
    request: Disputes.CreateDisputeEvidenceFileRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateDisputeEvidenceFileResponse, ResponseError> {
    return this.#rawClient.execute<CreateDisputeEvidenceFileResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/disputes/{dispute_id}/evidence-files"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "dispute_id", value: request.disputeId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: createDisputeEvidenceFileResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createDisputeEvidenceText(
    request: Disputes.CreateDisputeEvidenceTextRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateDisputeEvidenceTextResponse, ResponseError> {
    return this.#rawClient.execute<CreateDisputeEvidenceTextResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/disputes/{dispute_id}/evidence-text"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "dispute_id", value: request.disputeId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createDisputeEvidenceTextRequestSchema },
      },
      {
        success: { kind: "json", schema: createDisputeEvidenceTextResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteDisputeEvidence(
    request: Disputes.DeleteDisputeEvidenceRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteDisputeEvidenceResponse, ResponseError> {
    return this.#rawClient.execute<DeleteDisputeEvidenceResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/disputes/{dispute_id}/evidence/{evidence_id}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "dispute_id", value: request.disputeId, schema: s.string() },
          { name: "evidence_id", value: request.evidenceId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteDisputeEvidenceResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listDisputeEvidence(
    request: Disputes.ListDisputeEvidenceRequest,
    options?: RequestOptions,
  ): ApiPromise<ListDisputeEvidenceResponse, ResponseError> {
    return this.#rawClient.execute<ListDisputeEvidenceResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/disputes/{dispute_id}/evidence"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "dispute_id", value: request.disputeId, schema: s.string() }],
        query: [{ name: "cursor", value: request.cursor, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listDisputeEvidenceResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listDisputes(
    request: Disputes.ListDisputesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListDisputesResponse, ResponseError> {
    return this.#rawClient.execute<ListDisputesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/disputes"),
        auth: this.#auth.oauth2,
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "states", value: request.states, schema: s.optional(s.lazy(() => disputeStateSchema)) },
          { name: "location_id", value: request.locationId, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listDisputesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveDispute(
    request: Disputes.RetrieveDisputeRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveDisputeResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveDisputeResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/disputes/{dispute_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "dispute_id", value: request.disputeId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveDisputeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveDisputeEvidence(
    request: Disputes.RetrieveDisputeEvidenceRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveDisputeEvidenceResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveDisputeEvidenceResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/disputes/{dispute_id}/evidence/{evidence_id}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "dispute_id", value: request.disputeId, schema: s.string() },
          { name: "evidence_id", value: request.evidenceId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveDisputeEvidenceResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  submitEvidence(
    request: Disputes.SubmitEvidenceRequest,
    options?: RequestOptions,
  ): ApiPromise<SubmitEvidenceResponse, ResponseError> {
    return this.#rawClient.execute<SubmitEvidenceResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/disputes/{dispute_id}/submit-evidence"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "dispute_id", value: request.disputeId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: submitEvidenceResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Disputes {
  export type AcceptDisputeRequest = {
    disputeId: string;
  };

  export type CreateDisputeEvidenceFileRequestParams = {
    disputeId: string;
  };

  export type CreateDisputeEvidenceTextRequestParams = {
    disputeId: string;
    body: CreateDisputeEvidenceTextRequest;
  };

  export type DeleteDisputeEvidenceRequest = {
    disputeId: string;
    evidenceId: string;
  };

  export type ListDisputeEvidenceRequest = {
    disputeId: string;
    cursor?: string;
  };

  export type ListDisputesRequest = {
    cursor?: string;
    states?: DisputeState;
    locationId?: string;
  };

  export type RetrieveDisputeRequest = {
    disputeId: string;
  };

  export type RetrieveDisputeEvidenceRequest = {
    disputeId: string;
    evidenceId: string;
  };

  export type SubmitEvidenceRequest = {
    disputeId: string;
  };
}
