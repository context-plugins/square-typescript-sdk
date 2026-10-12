import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  batchDeleteCatalogObjectsRequestSchema,
  type BatchDeleteCatalogObjectsRequest,
} from "../models/batch-delete-catalog-objects-request.js";
import {
  batchDeleteCatalogObjectsResponseSchema,
  type BatchDeleteCatalogObjectsResponse,
} from "../models/batch-delete-catalog-objects-response.js";
import {
  batchRetrieveCatalogObjectsRequestSchema,
  type BatchRetrieveCatalogObjectsRequest,
} from "../models/batch-retrieve-catalog-objects-request.js";
import {
  batchRetrieveCatalogObjectsResponseSchema,
  type BatchRetrieveCatalogObjectsResponse,
} from "../models/batch-retrieve-catalog-objects-response.js";
import {
  batchUpsertCatalogObjectsRequestSchema,
  type BatchUpsertCatalogObjectsRequest,
} from "../models/batch-upsert-catalog-objects-request.js";
import {
  batchUpsertCatalogObjectsResponseSchema,
  type BatchUpsertCatalogObjectsResponse,
} from "../models/batch-upsert-catalog-objects-response.js";
import { catalogInfoResponseSchema, type CatalogInfoResponse } from "../models/catalog-info-response.js";
import {
  createCatalogImageRequestSchema,
  type CreateCatalogImageRequest,
} from "../models/create-catalog-image-request.js";
import {
  createCatalogImageResponseSchema,
  type CreateCatalogImageResponse,
} from "../models/create-catalog-image-response.js";
import {
  deleteCatalogObjectResponseSchema,
  type DeleteCatalogObjectResponse,
} from "../models/delete-catalog-object-response.js";
import { listCatalogResponseSchema, type ListCatalogResponse } from "../models/list-catalog-response.js";
import {
  retrieveCatalogObjectResponseSchema,
  type RetrieveCatalogObjectResponse,
} from "../models/retrieve-catalog-object-response.js";
import {
  searchCatalogItemsRequestSchema,
  type SearchCatalogItemsRequest,
} from "../models/search-catalog-items-request.js";
import {
  searchCatalogItemsResponseSchema,
  type SearchCatalogItemsResponse,
} from "../models/search-catalog-items-response.js";
import {
  searchCatalogObjectsRequestSchema,
  type SearchCatalogObjectsRequest,
} from "../models/search-catalog-objects-request.js";
import {
  searchCatalogObjectsResponseSchema,
  type SearchCatalogObjectsResponse,
} from "../models/search-catalog-objects-response.js";
import {
  updateCatalogImageRequestSchema,
  type UpdateCatalogImageRequest,
} from "../models/update-catalog-image-request.js";
import {
  updateCatalogImageResponseSchema,
  type UpdateCatalogImageResponse,
} from "../models/update-catalog-image-response.js";
import {
  updateItemModifierListsRequestSchema,
  type UpdateItemModifierListsRequest,
} from "../models/update-item-modifier-lists-request.js";
import {
  updateItemModifierListsResponseSchema,
  type UpdateItemModifierListsResponse,
} from "../models/update-item-modifier-lists-response.js";
import {
  updateItemTaxesRequestSchema,
  type UpdateItemTaxesRequest,
} from "../models/update-item-taxes-request.js";
import {
  updateItemTaxesResponseSchema,
  type UpdateItemTaxesResponse,
} from "../models/update-item-taxes-response.js";
import {
  upsertCatalogObjectRequestSchema,
  type UpsertCatalogObjectRequest,
} from "../models/upsert-catalog-object-request.js";
import {
  upsertCatalogObjectResponseSchema,
  type UpsertCatalogObjectResponse,
} from "../models/upsert-catalog-object-response.js";
import type { Servers } from "../servers.js";

export class Catalog {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * BatchDeleteCatalogObjects
   *
   * @remarks
   * Deletes a set of [CatalogItem](entity:CatalogItem)s based on the provided list of target IDs
   * and returns a set of successfully deleted IDs in the response. Deletion is a cascading event
   * such that all children of the targeted object are also deleted. For example, deleting a
   * CatalogItem will also delete all of its [CatalogItemVariation](entity:CatalogItemVariation)
   * children.
   *
   * `BatchDeleteCatalogObjects` succeeds even if only a portion of the targeted IDs can be deleted.
   * The response will only include IDs that were actually deleted.
   *
   * To ensure consistency, only one delete request is processed at a time per seller account. While
   * one (batch or non-batch) delete request is being processed, other (batched and non-batched)
   * delete requests are rejected with the `429` error code.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchDeleteCatalogObjects(
    request: Catalog.BatchDeleteCatalogObjectsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BatchDeleteCatalogObjectsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/catalog/batch-delete"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchDeleteCatalogObjectsRequestSchema },
      },
      {
        success: { kind: "json", schema: batchDeleteCatalogObjectsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * BatchRetrieveCatalogObjects
   *
   * @remarks
   * Returns a set of objects based on the provided ID. Each [CatalogItem](entity:CatalogItem)
   * returned in the set includes all of its child information including: all of its
   * [CatalogItemVariation](entity:CatalogItemVariation) objects, references to its
   * [CatalogModifierList](entity:CatalogModifierList) objects, and the ids of any
   * [CatalogTax](entity:CatalogTax) objects that apply to it.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchRetrieveCatalogObjects(
    request: Catalog.BatchRetrieveCatalogObjectsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BatchRetrieveCatalogObjectsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/catalog/batch-retrieve"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchRetrieveCatalogObjectsRequestSchema },
      },
      {
        success: { kind: "json", schema: batchRetrieveCatalogObjectsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * BatchUpsertCatalogObjects
   *
   * @remarks
   * Creates or updates up to 10,000 target objects based on the provided list of objects. The
   * target objects are grouped into batches and each batch is inserted/updated in an all-or-nothing
   * manner. If an object within a batch is malformed in some way, or violates a database
   * constraint, the entire batch containing that item will be disregarded. However, other batches
   * in the same request may still succeed. Each batch may contain up to 1,000 objects, and batches
   * will be processed in order as long as the total object count for the request (items,
   * variations, modifier lists, discounts, and taxes) is no more than 10,000.
   *
   * This endpoint uses full-replacement semantics. The client must send the complete object, and
   * any field absent from the request is interpreted as an intentional clear. This logic applies to
   * nested objects as well. For example, omitting inlined children like variations will delete
   * them.
   *
   * To ensure consistency, only one update request is processed at a time per seller account. While
   * one (batch or non-batch) update request is being processed, other (batched and non-batched)
   * update requests are rejected with the `429` error code. Prefer batching related changes into a
   * single call rather than issuing many small writes, since each write acquires the lock
   * separately and parallel writes to the same seller will contend with each other, producing `429`
   * errors.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  batchUpsertCatalogObjects(
    request: Catalog.BatchUpsertCatalogObjectsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BatchUpsertCatalogObjectsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/catalog/batch-upsert"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: batchUpsertCatalogObjectsRequestSchema },
      },
      {
        success: { kind: "json", schema: batchUpsertCatalogObjectsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * CatalogInfo
   *
   * @remarks
   * Retrieves information about the Square Catalog API, such as batch size limits that can be used
   * by the `BatchUpsertCatalogObjects` endpoint.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  catalogInfo(options?: RequestOptions): ApiPromise<CatalogInfoResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/catalog/info"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: catalogInfoResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * CreateCatalogImage
   *
   * @remarks
   * Uploads an image file to be represented by a [CatalogImage](entity:CatalogImage) object that
   * can be linked to an existing [CatalogObject](entity:CatalogObject) instance. The resulting
   * `CatalogImage` is unattached to any `CatalogObject` if the `object_id` is not specified.
   *
   * This `CreateCatalogImage` endpoint accepts HTTP multipart/form-data requests with a JSON part
   * and an image file part in JPEG, PJPEG, PNG, or GIF format. The maximum file size is 15MB.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCatalogImage(
    request: Catalog.CreateCatalogImageRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateCatalogImageResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/catalog/images"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            {
              kind: "text",
              name: "request",
              value: request.request,
              schema: s.optional(s.lazy(() => createCatalogImageRequestSchema)),
            },
            { kind: "file", name: "image_file", value: request.imageFile },
          ],
        },
      },
      {
        success: { kind: "json", schema: createCatalogImageResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * DeleteCatalogObject
   *
   * @remarks
   * Deletes a single [CatalogObject](entity:CatalogObject) based on the provided ID and returns the
   * set of successfully deleted IDs in the response. Deletion is a cascading event such that all
   * children of the targeted object are also deleted. For example, deleting a
   * [CatalogItem](entity:CatalogItem) will also delete all of its
   * [CatalogItemVariation](entity:CatalogItemVariation) children.
   *
   * To ensure consistency, only one delete request is processed at a time per seller account. While
   * one (batch or non-batch) delete request is being processed, other (batched and non-batched)
   * delete requests are rejected with the `429` error code.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCatalogObject(
    request: Catalog.DeleteCatalogObjectRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteCatalogObjectResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/catalog/object/{object_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "object_id", value: request.objectId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteCatalogObjectResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * ListCatalog
   *
   * @remarks
   * Returns a list of all [CatalogObject](entity:CatalogObject)s of the specified types in the
   * catalog.
   *
   * The `types` parameter is specified as a comma-separated list of the
   * [CatalogObjectType](entity:CatalogObjectType) values, for example, "`ITEM`, `ITEM_VARIATION`,
   * `MODIFIER`, `MODIFIER_LIST`, `CATEGORY`, `DISCOUNT`, `TAX`, `IMAGE`". Always specify `types`
   * explicitly. When upgrading to a newer API version, omitting `types` may cause new object types
   * to appear in results that were not returned under the previous version.
   *
   * __Important:__ ListCatalog does not return deleted catalog items. To retrieve deleted catalog
   * items, use [SearchCatalogObjects](api-endpoint:Catalog-SearchCatalogObjects) and set the
   * `include_deleted_objects` attribute value to `true`.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCatalog(
    request: Catalog.ListCatalogRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCatalogResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/catalog/list"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "types", value: request.types, schema: s.optional(s.string()) },
          { name: "catalog_version", value: request.catalogVersion, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCatalogResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveCatalogObject
   *
   * @remarks
   * Returns a single [CatalogItem](entity:CatalogItem) as a [CatalogObject](entity:CatalogObject)
   * based on the provided ID. The returned object includes all of the relevant
   * [CatalogItem](entity:CatalogItem) information including:
   * [CatalogItemVariation](entity:CatalogItemVariation) children, references to its
   * [CatalogModifierList](entity:CatalogModifierList) objects, and the ids of any
   * [CatalogTax](entity:CatalogTax) objects that apply to it.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveCatalogObject(
    request: Catalog.RetrieveCatalogObjectRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveCatalogObjectResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/catalog/object/{object_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "object_id", value: request.objectId, schema: s.string() }],
        query: [
          {
            name: "include_related_objects",
            value: request.includeRelatedObjects,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "catalog_version", value: request.catalogVersion, schema: s.optional(s.int()) },
          {
            name: "include_category_path_to_root",
            value: request.includeCategoryPathToRoot,
            schema: s.defaulted(s.boolean(), false),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveCatalogObjectResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * SearchCatalogItems
   *
   * @remarks
   * Searches for catalog items or item variations by matching supported search attribute values,
   * including custom attribute values, against one or more of the specified query filters.
   *
   * This (`SearchCatalogItems`) endpoint differs from the
   * [SearchCatalogObjects](api-endpoint:Catalog-SearchCatalogObjects) endpoint in the following
   * aspects:
   *
   * - `SearchCatalogItems` can only search for items or item variations, whereas
   *   `SearchCatalogObjects` can search for any type of catalog objects.
   * - `SearchCatalogItems` supports the custom attribute query filters to return items or item
   *   variations that contain custom attribute values, where `SearchCatalogObjects` does not.
   * - `SearchCatalogItems` does not support the `include_deleted_objects` filter to search for
   *   deleted items or item variations, whereas `SearchCatalogObjects` does.
   * - The both endpoints use different call conventions, including the query filter formats.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchCatalogItems(
    request: Catalog.SearchCatalogItemsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchCatalogItemsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/catalog/search-catalog-items"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchCatalogItemsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchCatalogItemsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * SearchCatalogObjects
   *
   * @remarks
   * Searches for [CatalogObject](entity:CatalogObject) of any type by matching supported search
   * attribute values, excluding custom attribute values on items or item variations, against one or
   * more of the specified query filters.
   *
   * This (`SearchCatalogObjects`) endpoint differs from the
   * [SearchCatalogItems](api-endpoint:Catalog-SearchCatalogItems) endpoint in the following
   * aspects:
   *
   * - `SearchCatalogItems` can only search for items or item variations, whereas
   *   `SearchCatalogObjects` can search for any type of catalog objects.
   * - `SearchCatalogItems` supports the custom attribute query filters to return items or item
   *   variations that contain custom attribute values, where `SearchCatalogObjects` does not.
   * - `SearchCatalogItems` does not support the `include_deleted_objects` filter to search for
   *   deleted items or item variations, whereas `SearchCatalogObjects` does.
   * - The both endpoints have different call conventions, including the query filter formats.
   *
   * The `object_types` parameter is specified as a list of
   * [CatalogObjectType](entity:CatalogObjectType) values. Always specify `object_types` explicitly.
   * When upgrading to a newer API version, omitting `object_types` may cause new object types to
   * appear in results that were not returned under the previous version.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchCatalogObjects(
    request: Catalog.SearchCatalogObjectsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchCatalogObjectsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/catalog/search"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchCatalogObjectsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchCatalogObjectsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * UpdateCatalogImage
   *
   * @remarks
   * Uploads a new image file to replace the existing one in the specified
   * [CatalogImage](entity:CatalogImage) object.
   *
   * This `UpdateCatalogImage` endpoint accepts HTTP multipart/form-data requests with a JSON part
   * and an image file part in JPEG, PJPEG, PNG, or GIF format. The maximum file size is 15MB.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCatalogImage(
    request: Catalog.UpdateCatalogImageRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateCatalogImageResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v2/catalog/images/{image_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "image_id", value: request.imageId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            {
              kind: "text",
              name: "request",
              value: request.request,
              schema: s.optional(s.lazy(() => updateCatalogImageRequestSchema)),
            },
            { kind: "file", name: "image_file", value: request.imageFile },
          ],
        },
      },
      {
        success: { kind: "json", schema: updateCatalogImageResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * UpdateItemModifierLists
   *
   * @remarks
   * Updates the [CatalogModifierList](entity:CatalogModifierList) objects that apply to the
   * targeted [CatalogItem](entity:CatalogItem) without having to perform an upsert on the entire
   * item.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateItemModifierLists(
    request: Catalog.UpdateItemModifierListsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateItemModifierListsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/catalog/update-item-modifier-lists"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateItemModifierListsRequestSchema },
      },
      {
        success: { kind: "json", schema: updateItemModifierListsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * UpdateItemTaxes
   *
   * @remarks
   * Updates the [CatalogTax](entity:CatalogTax) objects that apply to the targeted
   * [CatalogItem](entity:CatalogItem) without having to perform an upsert on the entire item.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateItemTaxes(
    request: Catalog.UpdateItemTaxesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateItemTaxesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/catalog/update-item-taxes"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateItemTaxesRequestSchema },
      },
      {
        success: { kind: "json", schema: updateItemTaxesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * UpsertCatalogObject
   *
   * @remarks
   * Creates a new or updates the specified [CatalogObject](entity:CatalogObject).
   *
   * This endpoint uses full-replacement semantics. The client must send the complete object, and
   * any field absent from the request is interpreted as an intentional clear. This logic applies to
   * nested objects as well. For example, omitting inlined children like variations will delete
   * them.
   *
   * To ensure consistency, only one update request is processed at a time per seller account. While
   * one (batch or non-batch) update request is being processed, other (batched and non-batched)
   * update requests are rejected with the `429` error code.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  upsertCatalogObject(
    request: Catalog.UpsertCatalogObjectRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpsertCatalogObjectResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/catalog/object"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: upsertCatalogObjectRequestSchema },
      },
      {
        success: { kind: "json", schema: upsertCatalogObjectResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Catalog {
  export type BatchDeleteCatalogObjectsRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BatchDeleteCatalogObjectsRequest;
  };

  export type BatchRetrieveCatalogObjectsRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BatchRetrieveCatalogObjectsRequest;
  };

  export type BatchUpsertCatalogObjectsRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: BatchUpsertCatalogObjectsRequest;
  };

  export type CreateCatalogImageRequestParams = {
    request?: CreateCatalogImageRequest;
    imageFile?: FileInput;
  };

  export type DeleteCatalogObjectRequest = {
    /**
     * The ID of the catalog object to be deleted. When an object is deleted, other objects in the
     * graph that depend on that object will be deleted as well (for example, deleting a catalog
     * item will delete its catalog item variations).
     */
    objectId: string;
  };

  export type ListCatalogRequest = {
    /**
     * The pagination cursor returned in the previous response. Leave unset for an initial request.
     * The page size is currently set to be 100. See
     * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination)
     * for more information.
     */
    cursor?: string;
    /**
     * An optional case-insensitive, comma-separated list of object types to retrieve.
     *
     * The valid values are defined in the [CatalogObjectType](entity:CatalogObjectType) enum, for
     * example, `ITEM`, `ITEM_VARIATION`, `CATEGORY`, `DISCOUNT`, `TAX`, `MODIFIER`,
     * `MODIFIER_LIST`, `IMAGE`, etc.
     *
     * If this is unspecified, the operation returns objects of all the top level types at the
     * version of the Square API used to make the request. Object types that are nested onto other
     * object types are not included in the defaults.
     *
     * At the current API version the default object types are: ITEM, CATEGORY, TAX, DISCOUNT,
     * MODIFIER_LIST, PRICING_RULE, PRODUCT_SET, TIME_PERIOD, MEASUREMENT_UNIT, SUBSCRIPTION_PLAN,
     * ITEM_OPTION, CUSTOM_ATTRIBUTE_DEFINITION, QUICK_AMOUNT_SETTINGS.
     */
    types?: string;
    /**
     * The specific version of the catalog objects to be included in the response. This allows you
     * to retrieve historical versions of objects. The specified version value is matched against
     * the [CatalogObject](entity:CatalogObject)s' `version` attribute. If not included, results
     * will be from the current version of the catalog.
     */
    catalogVersion?: number;
  };

  export type RetrieveCatalogObjectRequest = {
    /** The object ID of any type of catalog objects to be retrieved. */
    objectId: string;
    /**
     * If `true`, the response will include additional objects that are related to the requested
     * objects. Related objects are defined as any objects referenced by ID by the results in the
     * `objects` field of the response. These objects are put in the `related_objects` field.
     * Setting this to `true` is helpful when the objects are needed for immediate display to a
     * user. This process only goes one level deep. Objects referenced by the related objects will
     * not be included. For example,
     *
     * if the `objects` field of the response contains a CatalogItem, its associated CatalogCategory
     * objects, CatalogTax objects, CatalogImage objects and CatalogModifierLists will be returned
     * in the `related_objects` field of the response. If the `objects` field of the response
     * contains a CatalogItemVariation, its parent CatalogItem will be returned in the
     * `related_objects` field of the response.
     *
     * Default value: `false`
     *
     * @default false
     */
    includeRelatedObjects?: boolean;
    /**
     * Requests objects as of a specific version of the catalog. This allows you to retrieve
     * historical versions of objects. The value to retrieve a specific version of an object can be
     * found in the version field of [CatalogObject](entity:CatalogObject)s. If not included,
     * results will be from the current version of the catalog.
     */
    catalogVersion?: number;
    /**
     * Specifies whether or not to include the `path_to_root` list for each returned category
     * instance. The `path_to_root` list consists of `CategoryPathToRootNode` objects and specifies
     * the path that starts with the immediate parent category of the returned category and ends
     * with its root category. If the returned category is a top-level category, the `path_to_root`
     * list is empty and is not returned in the response payload.
     *
     * @default false
     */
    includeCategoryPathToRoot?: boolean;
  };

  export type SearchCatalogItemsRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: SearchCatalogItemsRequest;
  };

  export type SearchCatalogObjectsRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: SearchCatalogObjectsRequest;
  };

  export type UpdateCatalogImageRequestParams = {
    /** The ID of the `CatalogImage` object to update the encapsulated image file. */
    imageId: string;
    request?: UpdateCatalogImageRequest;
    imageFile?: FileInput;
  };

  export type UpdateItemModifierListsRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateItemModifierListsRequest;
  };

  export type UpdateItemTaxesRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateItemTaxesRequest;
  };

  export type UpsertCatalogObjectRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpsertCatalogObjectRequest;
  };
}
