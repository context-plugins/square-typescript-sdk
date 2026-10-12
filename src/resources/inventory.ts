import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  batchChangeInventoryRequestSchema,
  type BatchChangeInventoryRequest,
} from "../models/batch-change-inventory-request.js";
import {
  batchChangeInventoryResponseSchema,
  type BatchChangeInventoryResponse,
} from "../models/batch-change-inventory-response.js";
import {
  batchRetrieveInventoryChangesRequestSchema,
  type BatchRetrieveInventoryChangesRequest,
} from "../models/batch-retrieve-inventory-changes-request.js";
import {
  batchRetrieveInventoryChangesResponseSchema,
  type BatchRetrieveInventoryChangesResponse,
} from "../models/batch-retrieve-inventory-changes-response.js";
import {
  batchRetrieveInventoryCountsRequestSchema,
  type BatchRetrieveInventoryCountsRequest,
} from "../models/batch-retrieve-inventory-counts-request.js";
import {
  batchRetrieveInventoryCountsResponseSchema,
  type BatchRetrieveInventoryCountsResponse,
} from "../models/batch-retrieve-inventory-counts-response.js";
import {
  createInventoryAdjustmentReasonRequestSchema,
  type CreateInventoryAdjustmentReasonRequest,
} from "../models/create-inventory-adjustment-reason-request.js";
import {
  createInventoryAdjustmentReasonResponseSchema,
  type CreateInventoryAdjustmentReasonResponse,
} from "../models/create-inventory-adjustment-reason-response.js";
import {
  deleteInventoryAdjustmentReasonRequestSchema,
  type DeleteInventoryAdjustmentReasonRequest,
} from "../models/delete-inventory-adjustment-reason-request.js";
import {
  deleteInventoryAdjustmentReasonResponseSchema,
  type DeleteInventoryAdjustmentReasonResponse,
} from "../models/delete-inventory-adjustment-reason-response.js";
import {
  listInventoryAdjustmentReasonsResponseSchema,
  type ListInventoryAdjustmentReasonsResponse,
} from "../models/list-inventory-adjustment-reasons-response.js";
import {
  restoreInventoryAdjustmentReasonRequestSchema,
  type RestoreInventoryAdjustmentReasonRequest,
} from "../models/restore-inventory-adjustment-reason-request.js";
import {
  restoreInventoryAdjustmentReasonResponseSchema,
  type RestoreInventoryAdjustmentReasonResponse,
} from "../models/restore-inventory-adjustment-reason-response.js";
import {
  retrieveInventoryAdjustmentReasonRequestSchema,
  type RetrieveInventoryAdjustmentReasonRequest,
} from "../models/retrieve-inventory-adjustment-reason-request.js";
import {
  retrieveInventoryAdjustmentReasonResponseSchema,
  type RetrieveInventoryAdjustmentReasonResponse,
} from "../models/retrieve-inventory-adjustment-reason-response.js";
import {
  retrieveInventoryAdjustmentResponseSchema,
  type RetrieveInventoryAdjustmentResponse,
} from "../models/retrieve-inventory-adjustment-response.js";
import {
  retrieveInventoryChangesResponseSchema,
  type RetrieveInventoryChangesResponse,
} from "../models/retrieve-inventory-changes-response.js";
import {
  retrieveInventoryCountResponseSchema,
  type RetrieveInventoryCountResponse,
} from "../models/retrieve-inventory-count-response.js";
import {
  retrieveInventoryPhysicalCountResponseSchema,
  type RetrieveInventoryPhysicalCountResponse,
} from "../models/retrieve-inventory-physical-count-response.js";
import {
  updateInventoryAdjustmentReasonRequestSchema,
  type UpdateInventoryAdjustmentReasonRequest,
} from "../models/update-inventory-adjustment-reason-request.js";
import {
  updateInventoryAdjustmentReasonResponseSchema,
  type UpdateInventoryAdjustmentReasonResponse,
} from "../models/update-inventory-adjustment-reason-response.js";
import {
  updateInventoryAdjustmentRequestSchema,
  type UpdateInventoryAdjustmentRequest,
} from "../models/update-inventory-adjustment-request.js";
import {
  updateInventoryAdjustmentResponseSchema,
  type UpdateInventoryAdjustmentResponse,
} from "../models/update-inventory-adjustment-response.js";
import type { Servers } from "../servers.js";

export class Inventory {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * BatchChangeInventory
   *
   * @remarks
   * Applies adjustments and counts to the provided item quantities.
   *
   * On success: returns the current calculated counts for all objects referenced in the request. On
   * failure: returns a list of related errors.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchChangeInventory(
    request: Inventory.BatchChangeInventoryRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BatchChangeInventoryResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/inventory/changes/batch-create"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchChangeInventoryRequestSchema },
      },
      {
        success: { kind: "json", schema: batchChangeInventoryResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * BatchRetrieveInventoryChanges
   *
   * @remarks
   * Returns historical physical counts and adjustments based on the provided filter criteria.
   *
   * Results are paginated and sorted in ascending order according their `occurred_at` timestamp
   * (oldest first).
   *
   * BatchRetrieveInventoryChanges is a catch-all query endpoint for queries that cannot be handled
   * by other, simpler endpoints.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchRetrieveInventoryChanges(
    request: Inventory.BatchRetrieveInventoryChangesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BatchRetrieveInventoryChangesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/inventory/changes/batch-retrieve"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchRetrieveInventoryChangesRequestSchema },
      },
      {
        success: { kind: "json", schema: batchRetrieveInventoryChangesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * BatchRetrieveInventoryCounts
   *
   * @remarks
   * Returns current counts for the provided [CatalogObject](entity:CatalogObject)s at the requested
   * [Location](entity:Location)s.
   *
   * Results are paginated and sorted in descending order according to their `calculated_at`
   * timestamp (newest first).
   *
   * When `updated_after` is specified, only counts that have changed since that time (based on the
   * server timestamp for the most recent change) are returned. This allows clients to perform a
   * "sync" operation, for example in response to receiving a Webhook notification.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchRetrieveInventoryCounts(
    request: Inventory.BatchRetrieveInventoryCountsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BatchRetrieveInventoryCountsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/inventory/counts/batch-retrieve"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchRetrieveInventoryCountsRequestSchema },
      },
      {
        success: { kind: "json", schema: batchRetrieveInventoryCountsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * CreateInventoryAdjustmentReason
   *
   * @remarks
   * Creates a custom inventory adjustment reason.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createInventoryAdjustmentReason(
    request: Inventory.CreateInventoryAdjustmentReasonRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateInventoryAdjustmentReasonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/inventory/adjustment-reasons/create"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createInventoryAdjustmentReasonRequestSchema },
      },
      {
        success: { kind: "json", schema: createInventoryAdjustmentReasonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * DeleteInventoryAdjustmentReason
   *
   * @remarks
   * Soft deletes a custom inventory adjustment reason.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteInventoryAdjustmentReason(
    request: Inventory.DeleteInventoryAdjustmentReasonRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DeleteInventoryAdjustmentReasonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/inventory/adjustment-reasons/delete"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deleteInventoryAdjustmentReasonRequestSchema },
      },
      {
        success: { kind: "json", schema: deleteInventoryAdjustmentReasonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * DeprecatedBatchChangeInventory
   *
   * @remarks
   * Deprecated version of [BatchChangeInventory](api-endpoint:Inventory-BatchChangeInventory) after
   * the endpoint URL is updated to conform to the standard convention.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  deprecatedBatchChangeInventory(
    request: Inventory.DeprecatedBatchChangeInventoryRequest,
    options?: RequestOptions,
  ): ApiPromise<BatchChangeInventoryResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/inventory/batch-change"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchChangeInventoryRequestSchema },
      },
      {
        success: { kind: "json", schema: batchChangeInventoryResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * DeprecatedBatchRetrieveInventoryChanges
   *
   * @remarks
   * Deprecated version of
   * [BatchRetrieveInventoryChanges](api-endpoint:Inventory-BatchRetrieveInventoryChanges) after the
   * endpoint URL is updated to conform to the standard convention.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  deprecatedBatchRetrieveInventoryChanges(
    request: Inventory.DeprecatedBatchRetrieveInventoryChangesRequest,
    options?: RequestOptions,
  ): ApiPromise<BatchRetrieveInventoryChangesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/inventory/batch-retrieve-changes"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchRetrieveInventoryChangesRequestSchema },
      },
      {
        success: { kind: "json", schema: batchRetrieveInventoryChangesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * DeprecatedBatchRetrieveInventoryCounts
   *
   * @remarks
   * Deprecated version of
   * [BatchRetrieveInventoryCounts](api-endpoint:Inventory-BatchRetrieveInventoryCounts) after the
   * endpoint URL is updated to conform to the standard convention.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  deprecatedBatchRetrieveInventoryCounts(
    request: Inventory.DeprecatedBatchRetrieveInventoryCountsRequest,
    options?: RequestOptions,
  ): ApiPromise<BatchRetrieveInventoryCountsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/inventory/batch-retrieve-counts"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchRetrieveInventoryCountsRequestSchema },
      },
      {
        success: { kind: "json", schema: batchRetrieveInventoryCountsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * DeprecatedRetrieveInventoryAdjustment
   *
   * @remarks
   * Deprecated version of
   * [RetrieveInventoryAdjustment](api-endpoint:Inventory-RetrieveInventoryAdjustment) after the
   * endpoint URL is updated to conform to the standard convention.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  deprecatedRetrieveInventoryAdjustment(
    request: Inventory.DeprecatedRetrieveInventoryAdjustmentRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveInventoryAdjustmentResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/inventory/adjustment/{adjustment_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "adjustment_id", value: request.adjustmentId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveInventoryAdjustmentResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * DeprecatedRetrieveInventoryPhysicalCount
   *
   * @remarks
   * Deprecated version of
   * [RetrieveInventoryPhysicalCount](api-endpoint:Inventory-RetrieveInventoryPhysicalCount) after
   * the endpoint URL is updated to conform to the standard convention.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  deprecatedRetrieveInventoryPhysicalCount(
    request: Inventory.DeprecatedRetrieveInventoryPhysicalCountRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveInventoryPhysicalCountResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/inventory/physical-count/{physical_count_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "physical_count_id", value: request.physicalCountId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveInventoryPhysicalCountResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * ListInventoryAdjustmentReasons
   *
   * @remarks
   * Returns the standard and custom inventory adjustment reasons available to the seller.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listInventoryAdjustmentReasons(
    request: Inventory.ListInventoryAdjustmentReasonsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInventoryAdjustmentReasonsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/inventory/adjustment-reasons"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "include_deleted", value: request.includeDeleted, schema: s.defaulted(s.boolean(), false) },
          {
            name: "include_system_codes",
            value: request.includeSystemCodes,
            schema: s.defaulted(s.boolean(), false),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInventoryAdjustmentReasonsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RestoreInventoryAdjustmentReason
   *
   * @remarks
   * Restores a soft-deleted custom inventory adjustment reason.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  restoreInventoryAdjustmentReason(
    request: Inventory.RestoreInventoryAdjustmentReasonRequestParams,
    options?: RequestOptions,
  ): ApiPromise<RestoreInventoryAdjustmentReasonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/inventory/adjustment-reasons/restore"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: restoreInventoryAdjustmentReasonRequestSchema },
      },
      {
        success: { kind: "json", schema: restoreInventoryAdjustmentReasonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveInventoryAdjustment
   *
   * @remarks
   * Returns the [InventoryAdjustment](entity:InventoryAdjustment) object with the provided
   * `adjustment_id`.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveInventoryAdjustment(
    request: Inventory.RetrieveInventoryAdjustmentRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveInventoryAdjustmentResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/inventory/adjustments/{adjustment_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "adjustment_id", value: request.adjustmentId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveInventoryAdjustmentResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveInventoryAdjustmentReason
   *
   * @remarks
   * Returns the inventory adjustment reason identified by the provided `reason_id`. Deleted custom
   * reasons can be retrieved by ID.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveInventoryAdjustmentReason(
    request: Inventory.RetrieveInventoryAdjustmentReasonRequestParams,
    options?: RequestOptions,
  ): ApiPromise<RetrieveInventoryAdjustmentReasonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/inventory/adjustment-reasons/retrieve"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: retrieveInventoryAdjustmentReasonRequestSchema },
      },
      {
        success: { kind: "json", schema: retrieveInventoryAdjustmentReasonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveInventoryChanges
   *
   * @remarks
   * Returns a set of physical counts and inventory adjustments for the provided
   * [CatalogObject](entity:CatalogObject) at the requested [Location](entity:Location)s.
   *
   * You can achieve the same result by calling
   * [BatchRetrieveInventoryChanges](api-endpoint:Inventory-BatchRetrieveInventoryChanges) and
   * having the `catalog_object_ids` list contain a single element of the `CatalogObject` ID.
   *
   * Results are paginated and sorted in descending order according to their `occurred_at` timestamp
   * (newest first).
   *
   * There are no limits on how far back the caller can page. This endpoint can be used to display
   * recent changes for a specific item. For more sophisticated queries, use a batch endpoint.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   *
   * @deprecated
   */
  retrieveInventoryChanges(
    request: Inventory.RetrieveInventoryChangesRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveInventoryChangesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/inventory/{catalog_object_id}/changes"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "catalog_object_id", value: request.catalogObjectId, schema: s.string() }],
        query: [
          { name: "location_ids", value: request.locationIds, schema: s.optional(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveInventoryChangesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveInventoryCount
   *
   * @remarks
   * Retrieves the current calculated stock count for a given [CatalogObject](entity:CatalogObject)
   * at a given set of [Location](entity:Location)s. Responses are paginated and unsorted. For more
   * sophisticated queries, use a batch endpoint.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveInventoryCount(
    request: Inventory.RetrieveInventoryCountRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveInventoryCountResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/inventory/{catalog_object_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "catalog_object_id", value: request.catalogObjectId, schema: s.string() }],
        query: [
          { name: "location_ids", value: request.locationIds, schema: s.optional(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveInventoryCountResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveInventoryPhysicalCount
   *
   * @remarks
   * Returns the [InventoryPhysicalCount](entity:InventoryPhysicalCount) object with the provided
   * `physical_count_id`.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveInventoryPhysicalCount(
    request: Inventory.RetrieveInventoryPhysicalCountRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveInventoryPhysicalCountResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/inventory/physical-counts/{physical_count_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "physical_count_id", value: request.physicalCountId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveInventoryPhysicalCountResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * UpdateInventoryAdjustment
   *
   * @remarks
   * Applies an update to the provided adjustment.
   *
   * On success: returns the newly updated adjustment. On failure: returns a list of related errors.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateInventoryAdjustment(
    request: Inventory.UpdateInventoryAdjustmentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateInventoryAdjustmentResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v2/inventory/adjustments/update"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateInventoryAdjustmentRequestSchema },
      },
      {
        success: { kind: "json", schema: updateInventoryAdjustmentResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * UpdateInventoryAdjustmentReason
   *
   * @remarks
   * Updates a custom inventory adjustment reason.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateInventoryAdjustmentReason(
    request: Inventory.UpdateInventoryAdjustmentReasonRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateInventoryAdjustmentReasonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v2/inventory/adjustment-reasons/update"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateInventoryAdjustmentReasonRequestSchema },
      },
      {
        success: { kind: "json", schema: updateInventoryAdjustmentReasonResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Inventory {
  export type BatchChangeInventoryRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BatchChangeInventoryRequest;
  };

  export type BatchRetrieveInventoryChangesRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BatchRetrieveInventoryChangesRequest;
  };

  export type BatchRetrieveInventoryCountsRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BatchRetrieveInventoryCountsRequest;
  };

  export type CreateInventoryAdjustmentReasonRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateInventoryAdjustmentReasonRequest;
  };

  export type DeleteInventoryAdjustmentReasonRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: DeleteInventoryAdjustmentReasonRequest;
  };

  export type DeprecatedBatchChangeInventoryRequest = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BatchChangeInventoryRequest;
  };

  export type DeprecatedBatchRetrieveInventoryChangesRequest = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BatchRetrieveInventoryChangesRequest;
  };

  export type DeprecatedBatchRetrieveInventoryCountsRequest = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BatchRetrieveInventoryCountsRequest;
  };

  export type DeprecatedRetrieveInventoryAdjustmentRequest = {
    /** ID of the [InventoryAdjustment](entity:InventoryAdjustment) to retrieve. */
    adjustmentId: string;
  };

  export type DeprecatedRetrieveInventoryPhysicalCountRequest = {
    /** ID of the [InventoryPhysicalCount](entity:InventoryPhysicalCount) to retrieve. */
    physicalCountId: string;
  };

  export type ListInventoryAdjustmentReasonsRequest = {
    /**
     * Indicates whether the response should include deleted custom inventory adjustment reasons.
     * The default value is `false`.
     *
     * @default false
     */
    includeDeleted?: boolean;
    /**
     * Indicates whether the response should include Square-generated system inventory adjustment
     * reason codes that cannot be used to write adjustments from the Connect API, such as `SALE`,
     * `RECOUNT`, `TRANSFER`, `IN_TRANSIT`, and `CANCELED_SALE`. The default value is `false`.
     *
     * @default false
     */
    includeSystemCodes?: boolean;
  };

  export type RestoreInventoryAdjustmentReasonRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: RestoreInventoryAdjustmentReasonRequest;
  };

  export type RetrieveInventoryAdjustmentRequest = {
    /** ID of the [InventoryAdjustment](entity:InventoryAdjustment) to retrieve. */
    adjustmentId: string;
  };

  export type RetrieveInventoryAdjustmentReasonRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: RetrieveInventoryAdjustmentReasonRequest;
  };

  export type RetrieveInventoryChangesRequest = {
    /** ID of the [CatalogObject](entity:CatalogObject) to retrieve. */
    catalogObjectId: string;
    /**
     * The [Location](entity:Location) IDs to look up as a comma-separated list. An empty list
     * queries all locations.
     */
    locationIds?: string;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve
     * the next set of results for the original query.
     *
     * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide
     * for more information.
     */
    cursor?: string;
  };

  export type RetrieveInventoryCountRequest = {
    /** ID of the [CatalogObject](entity:CatalogObject) to retrieve. */
    catalogObjectId: string;
    /**
     * The [Location](entity:Location) IDs to look up as a comma-separated list. An empty list
     * queries all locations.
     */
    locationIds?: string;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve
     * the next set of results for the original query.
     *
     * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide
     * for more information.
     */
    cursor?: string;
  };

  export type RetrieveInventoryPhysicalCountRequest = {
    /** ID of the [InventoryPhysicalCount](entity:InventoryPhysicalCount) to retrieve. */
    physicalCountId: string;
  };

  export type UpdateInventoryAdjustmentRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateInventoryAdjustmentRequest;
  };

  export type UpdateInventoryAdjustmentReasonRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateInventoryAdjustmentReasonRequest;
  };
}
