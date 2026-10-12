import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  acceptDisputeResponseSchema,
  type AcceptDisputeResponse,
} from "../models/accept-dispute-response.js";
import {
  createDisputeEvidenceFileRequestSchema,
  type CreateDisputeEvidenceFileRequest,
} from "../models/create-dispute-evidence-file-request.js";
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

  /**
   * AcceptDispute
   *
   * @remarks
   * Accepts the loss on a dispute. Square returns the disputed amount to the cardholder and updates
   * the dispute state to ACCEPTED.
   *
   * Square debits the disputed amount from the seller’s Square account. If the Square account does
   * not have sufficient funds, Square debits the associated bank account.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  acceptDispute(
    request: Disputes.AcceptDisputeRequest,
    options?: RequestOptions,
  ): ApiPromise<AcceptDisputeResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/disputes/{dispute_id}/accept"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "dispute_id", value: request.disputeId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: acceptDisputeResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * CreateDisputeEvidenceFile
   *
   * @remarks
   * Uploads a file to use as evidence in a dispute challenge. The endpoint accepts HTTP
   * multipart/form-data file uploads in HEIC, HEIF, JPEG, PDF, PNG, and TIFF formats.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createDisputeEvidenceFile(
    request: Disputes.CreateDisputeEvidenceFileRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateDisputeEvidenceFileResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/disputes/{dispute_id}/evidence-files"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "dispute_id", value: request.disputeId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            {
              kind: "text",
              name: "request",
              value: request.request,
              schema: s.optional(s.lazy(() => createDisputeEvidenceFileRequestSchema)),
            },
            { kind: "file", name: "image_file", value: request.imageFile },
          ],
        },
      },
      {
        success: { kind: "json", schema: createDisputeEvidenceFileResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * CreateDisputeEvidenceText
   *
   * @remarks
   * Uploads text to use as evidence for a dispute challenge.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createDisputeEvidenceText(
    request: Disputes.CreateDisputeEvidenceTextRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateDisputeEvidenceTextResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/disputes/{dispute_id}/evidence-text"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "dispute_id", value: request.disputeId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createDisputeEvidenceTextRequestSchema },
      },
      {
        success: { kind: "json", schema: createDisputeEvidenceTextResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * DeleteDisputeEvidence
   *
   * @remarks
   * Removes specified evidence from a dispute. Square does not send the bank any evidence that is
   * removed.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteDisputeEvidence(
    request: Disputes.DeleteDisputeEvidenceRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteDisputeEvidenceResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/disputes/{dispute_id}/evidence/{evidence_id}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "dispute_id", value: request.disputeId, schema: s.string() },
          { name: "evidence_id", value: request.evidenceId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteDisputeEvidenceResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * ListDisputeEvidence
   *
   * @remarks
   * Returns a list of evidence associated with a dispute.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDisputeEvidence(
    request: Disputes.ListDisputeEvidenceRequest,
    options?: RequestOptions,
  ): ApiPromise<ListDisputeEvidenceResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/disputes/{dispute_id}/evidence"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "dispute_id", value: request.disputeId, schema: s.string() }],
        query: [{ name: "cursor", value: request.cursor, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listDisputeEvidenceResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * ListDisputes
   *
   * @remarks
   * Returns a list of disputes associated with a particular account.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDisputes(
    request: Disputes.ListDisputesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListDisputesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/disputes"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "states", value: request.states, schema: s.optional(s.lazy(() => disputeStateSchema)) },
          { name: "location_id", value: request.locationId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listDisputesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveDispute
   *
   * @remarks
   * Returns details about a specific dispute.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveDispute(
    request: Disputes.RetrieveDisputeRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveDisputeResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/disputes/{dispute_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "dispute_id", value: request.disputeId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveDisputeResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveDisputeEvidence
   *
   * @remarks
   * Returns the metadata for the evidence specified in the request URL path.
   *
   * You must maintain a copy of any evidence uploaded if you want to reference it later. Evidence
   * cannot be downloaded after you upload it.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveDisputeEvidence(
    request: Disputes.RetrieveDisputeEvidenceRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveDisputeEvidenceResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/disputes/{dispute_id}/evidence/{evidence_id}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "dispute_id", value: request.disputeId, schema: s.string() },
          { name: "evidence_id", value: request.evidenceId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveDisputeEvidenceResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * SubmitEvidence
   *
   * @remarks
   * Submits evidence to the cardholder's bank.
   *
   * The evidence submitted by this endpoint includes evidence uploaded using the
   * [CreateDisputeEvidenceFile](api-endpoint:Disputes-CreateDisputeEvidenceFile) and
   * [CreateDisputeEvidenceText](api-endpoint:Disputes-CreateDisputeEvidenceText) endpoints and
   * evidence automatically provided by Square, when available. Evidence cannot be removed from a
   * dispute after submission.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  submitEvidence(
    request: Disputes.SubmitEvidenceRequest,
    options?: RequestOptions,
  ): ApiPromise<SubmitEvidenceResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/disputes/{dispute_id}/submit-evidence"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "dispute_id", value: request.disputeId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: submitEvidenceResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Disputes {
  export type AcceptDisputeRequest = {
    /** The ID of the dispute you want to accept. */
    disputeId: string;
  };

  export type CreateDisputeEvidenceFileRequestParams = {
    /** The ID of the dispute for which you want to upload evidence. */
    disputeId: string;
    /** Defines the parameters for a `CreateDisputeEvidenceFile` request. */
    request?: CreateDisputeEvidenceFileRequest;
    imageFile?: FileInput;
  };

  export type CreateDisputeEvidenceTextRequestParams = {
    /** The ID of the dispute for which you want to upload evidence. */
    disputeId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateDisputeEvidenceTextRequest;
  };

  export type DeleteDisputeEvidenceRequest = {
    /** The ID of the dispute from which you want to remove evidence. */
    disputeId: string;
    /** The ID of the evidence you want to remove. */
    evidenceId: string;
  };

  export type ListDisputeEvidenceRequest = {
    /** The ID of the dispute. */
    disputeId: string;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this cursor to
     * retrieve the next set of results for the original query. For more information, see
     * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
  };

  export type ListDisputesRequest = {
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this cursor to
     * retrieve the next set of results for the original query. For more information, see
     * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
    /**
     * The dispute states used to filter the result. If not specified, the endpoint returns all
     * disputes.
     */
    states?: DisputeState;
    /**
     * The ID of the location for which to return a list of disputes. If not specified, the endpoint
     * returns disputes associated with all locations.
     */
    locationId?: string;
  };

  export type RetrieveDisputeRequest = {
    /** The ID of the dispute you want more details about. */
    disputeId: string;
  };

  export type RetrieveDisputeEvidenceRequest = {
    /** The ID of the dispute from which you want to retrieve evidence metadata. */
    disputeId: string;
    /** The ID of the evidence to retrieve. */
    evidenceId: string;
  };

  export type SubmitEvidenceRequest = {
    /** The ID of the dispute for which you want to submit evidence. */
    disputeId: string;
  };
}
