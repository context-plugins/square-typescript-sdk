import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  batchChangeInventory(
    request: Inventory.BatchChangeInventoryRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BatchChangeInventoryResponse, ResponseError> {
    return this.#rawClient.execute<BatchChangeInventoryResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/inventory/changes/batch-create"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: batchChangeInventoryRequestSchema },
      },
      {
        success: { kind: "json", schema: batchChangeInventoryResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  batchRetrieveInventoryChanges(
    request: Inventory.BatchRetrieveInventoryChangesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BatchRetrieveInventoryChangesResponse, ResponseError> {
    return this.#rawClient.execute<BatchRetrieveInventoryChangesResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/inventory/changes/batch-retrieve"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: batchRetrieveInventoryChangesRequestSchema },
      },
      {
        success: { kind: "json", schema: batchRetrieveInventoryChangesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  batchRetrieveInventoryCounts(
    request: Inventory.BatchRetrieveInventoryCountsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BatchRetrieveInventoryCountsResponse, ResponseError> {
    return this.#rawClient.execute<BatchRetrieveInventoryCountsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/inventory/counts/batch-retrieve"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: batchRetrieveInventoryCountsRequestSchema },
      },
      {
        success: { kind: "json", schema: batchRetrieveInventoryCountsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createInventoryAdjustmentReason(
    request: Inventory.CreateInventoryAdjustmentReasonRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateInventoryAdjustmentReasonResponse, ResponseError> {
    return this.#rawClient.execute<CreateInventoryAdjustmentReasonResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/inventory/adjustment-reasons/create"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createInventoryAdjustmentReasonRequestSchema },
      },
      {
        success: { kind: "json", schema: createInventoryAdjustmentReasonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteInventoryAdjustmentReason(
    request: Inventory.DeleteInventoryAdjustmentReasonRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DeleteInventoryAdjustmentReasonResponse, ResponseError> {
    return this.#rawClient.execute<DeleteInventoryAdjustmentReasonResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/inventory/adjustment-reasons/delete"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: deleteInventoryAdjustmentReasonRequestSchema },
      },
      {
        success: { kind: "json", schema: deleteInventoryAdjustmentReasonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deprecatedBatchChangeInventory(
    request: Inventory.DeprecatedBatchChangeInventoryRequest,
    options?: RequestOptions,
  ): ApiPromise<BatchChangeInventoryResponse, ResponseError> {
    return this.#rawClient.execute<BatchChangeInventoryResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/inventory/batch-change"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: batchChangeInventoryRequestSchema },
      },
      {
        success: { kind: "json", schema: batchChangeInventoryResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deprecatedBatchRetrieveInventoryChanges(
    request: Inventory.DeprecatedBatchRetrieveInventoryChangesRequest,
    options?: RequestOptions,
  ): ApiPromise<BatchRetrieveInventoryChangesResponse, ResponseError> {
    return this.#rawClient.execute<BatchRetrieveInventoryChangesResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/inventory/batch-retrieve-changes"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: batchRetrieveInventoryChangesRequestSchema },
      },
      {
        success: { kind: "json", schema: batchRetrieveInventoryChangesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deprecatedBatchRetrieveInventoryCounts(
    request: Inventory.DeprecatedBatchRetrieveInventoryCountsRequest,
    options?: RequestOptions,
  ): ApiPromise<BatchRetrieveInventoryCountsResponse, ResponseError> {
    return this.#rawClient.execute<BatchRetrieveInventoryCountsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/inventory/batch-retrieve-counts"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: batchRetrieveInventoryCountsRequestSchema },
      },
      {
        success: { kind: "json", schema: batchRetrieveInventoryCountsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deprecatedRetrieveInventoryAdjustment(
    request: Inventory.DeprecatedRetrieveInventoryAdjustmentRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveInventoryAdjustmentResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveInventoryAdjustmentResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/inventory/adjustment/{adjustment_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "adjustment_id", value: request.adjustmentId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveInventoryAdjustmentResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deprecatedRetrieveInventoryPhysicalCount(
    request: Inventory.DeprecatedRetrieveInventoryPhysicalCountRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveInventoryPhysicalCountResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveInventoryPhysicalCountResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/inventory/physical-count/{physical_count_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "physical_count_id", value: request.physicalCountId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveInventoryPhysicalCountResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listInventoryAdjustmentReasons(
    request: Inventory.ListInventoryAdjustmentReasonsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInventoryAdjustmentReasonsResponse, ResponseError> {
    return this.#rawClient.execute<ListInventoryAdjustmentReasonsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/inventory/adjustment-reasons"),
        auth: this.#auth.oauth2,
        query: [
          { name: "include_deleted", value: request.includeDeleted, schema: s.defaulted(s.boolean(), false) },
          {
            name: "include_system_codes",
            value: request.includeSystemCodes,
            schema: s.defaulted(s.boolean(), false),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInventoryAdjustmentReasonsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  restoreInventoryAdjustmentReason(
    request: Inventory.RestoreInventoryAdjustmentReasonRequestParams,
    options?: RequestOptions,
  ): ApiPromise<RestoreInventoryAdjustmentReasonResponse, ResponseError> {
    return this.#rawClient.execute<RestoreInventoryAdjustmentReasonResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/inventory/adjustment-reasons/restore"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: restoreInventoryAdjustmentReasonRequestSchema },
      },
      {
        success: { kind: "json", schema: restoreInventoryAdjustmentReasonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveInventoryAdjustment(
    request: Inventory.RetrieveInventoryAdjustmentRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveInventoryAdjustmentResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveInventoryAdjustmentResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/inventory/adjustments/{adjustment_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "adjustment_id", value: request.adjustmentId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveInventoryAdjustmentResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveInventoryAdjustmentReason(
    request: Inventory.RetrieveInventoryAdjustmentReasonRequestParams,
    options?: RequestOptions,
  ): ApiPromise<RetrieveInventoryAdjustmentReasonResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveInventoryAdjustmentReasonResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/inventory/adjustment-reasons/retrieve"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: retrieveInventoryAdjustmentReasonRequestSchema },
      },
      {
        success: { kind: "json", schema: retrieveInventoryAdjustmentReasonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveInventoryChanges(
    request: Inventory.RetrieveInventoryChangesRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveInventoryChangesResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveInventoryChangesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/inventory/{catalog_object_id}/changes"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "catalog_object_id", value: request.catalogObjectId, schema: s.string() }],
        query: [
          { name: "location_ids", value: request.locationIds, schema: s.optional(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveInventoryChangesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveInventoryCount(
    request: Inventory.RetrieveInventoryCountRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveInventoryCountResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveInventoryCountResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/inventory/{catalog_object_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "catalog_object_id", value: request.catalogObjectId, schema: s.string() }],
        query: [
          { name: "location_ids", value: request.locationIds, schema: s.optional(s.string()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveInventoryCountResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveInventoryPhysicalCount(
    request: Inventory.RetrieveInventoryPhysicalCountRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveInventoryPhysicalCountResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveInventoryPhysicalCountResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/inventory/physical-counts/{physical_count_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "physical_count_id", value: request.physicalCountId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveInventoryPhysicalCountResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateInventoryAdjustment(
    request: Inventory.UpdateInventoryAdjustmentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateInventoryAdjustmentResponse, ResponseError> {
    return this.#rawClient.execute<UpdateInventoryAdjustmentResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/inventory/adjustments/update"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: updateInventoryAdjustmentRequestSchema },
      },
      {
        success: { kind: "json", schema: updateInventoryAdjustmentResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateInventoryAdjustmentReason(
    request: Inventory.UpdateInventoryAdjustmentReasonRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateInventoryAdjustmentReasonResponse, ResponseError> {
    return this.#rawClient.execute<UpdateInventoryAdjustmentReasonResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/inventory/adjustment-reasons/update"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: updateInventoryAdjustmentReasonRequestSchema },
      },
      {
        success: { kind: "json", schema: updateInventoryAdjustmentReasonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Inventory {
  export type BatchChangeInventoryRequestParams = {
    body: BatchChangeInventoryRequest;
  };

  export type BatchRetrieveInventoryChangesRequestParams = {
    body: BatchRetrieveInventoryChangesRequest;
  };

  export type BatchRetrieveInventoryCountsRequestParams = {
    body: BatchRetrieveInventoryCountsRequest;
  };

  export type CreateInventoryAdjustmentReasonRequestParams = {
    body: CreateInventoryAdjustmentReasonRequest;
  };

  export type DeleteInventoryAdjustmentReasonRequestParams = {
    body: DeleteInventoryAdjustmentReasonRequest;
  };

  export type DeprecatedBatchChangeInventoryRequest = {
    body: BatchChangeInventoryRequest;
  };

  export type DeprecatedBatchRetrieveInventoryChangesRequest = {
    body: BatchRetrieveInventoryChangesRequest;
  };

  export type DeprecatedBatchRetrieveInventoryCountsRequest = {
    body: BatchRetrieveInventoryCountsRequest;
  };

  export type DeprecatedRetrieveInventoryAdjustmentRequest = {
    adjustmentId: string;
  };

  export type DeprecatedRetrieveInventoryPhysicalCountRequest = {
    physicalCountId: string;
  };

  export type ListInventoryAdjustmentReasonsRequest = {
    includeDeleted?: boolean;
    includeSystemCodes?: boolean;
  };

  export type RestoreInventoryAdjustmentReasonRequestParams = {
    body: RestoreInventoryAdjustmentReasonRequest;
  };

  export type RetrieveInventoryAdjustmentRequest = {
    adjustmentId: string;
  };

  export type RetrieveInventoryAdjustmentReasonRequestParams = {
    body: RetrieveInventoryAdjustmentReasonRequest;
  };

  export type RetrieveInventoryChangesRequest = {
    catalogObjectId: string;
    locationIds?: string;
    cursor?: string;
  };

  export type RetrieveInventoryCountRequest = {
    catalogObjectId: string;
    locationIds?: string;
    cursor?: string;
  };

  export type RetrieveInventoryPhysicalCountRequest = {
    physicalCountId: string;
  };

  export type UpdateInventoryAdjustmentRequestParams = {
    body: UpdateInventoryAdjustmentRequest;
  };

  export type UpdateInventoryAdjustmentReasonRequestParams = {
    body: UpdateInventoryAdjustmentReasonRequest;
  };
}
