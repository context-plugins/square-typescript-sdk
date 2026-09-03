import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  batchDeleteCatalogObjects(
    request: Catalog.BatchDeleteCatalogObjectsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BatchDeleteCatalogObjectsResponse, ResponseError> {
    return this.#rawClient.execute<BatchDeleteCatalogObjectsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/catalog/batch-delete"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: batchDeleteCatalogObjectsRequestSchema },
      },
      {
        success: { kind: "json", schema: batchDeleteCatalogObjectsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  batchRetrieveCatalogObjects(
    request: Catalog.BatchRetrieveCatalogObjectsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BatchRetrieveCatalogObjectsResponse, ResponseError> {
    return this.#rawClient.execute<BatchRetrieveCatalogObjectsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/catalog/batch-retrieve"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: batchRetrieveCatalogObjectsRequestSchema },
      },
      {
        success: { kind: "json", schema: batchRetrieveCatalogObjectsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  batchUpsertCatalogObjects(
    request: Catalog.BatchUpsertCatalogObjectsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BatchUpsertCatalogObjectsResponse, ResponseError> {
    return this.#rawClient.execute<BatchUpsertCatalogObjectsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/catalog/batch-upsert"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: batchUpsertCatalogObjectsRequestSchema },
      },
      {
        success: { kind: "json", schema: batchUpsertCatalogObjectsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  catalogInfo(options?: RequestOptions): ApiPromise<CatalogInfoResponse, ResponseError> {
    return this.#rawClient.execute<CatalogInfoResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/catalog/info"),
        auth: this.#auth.oauth2,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: catalogInfoResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createCatalogImage(options?: RequestOptions): ApiPromise<CreateCatalogImageResponse, ResponseError> {
    return this.#rawClient.execute<CreateCatalogImageResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/catalog/images"),
        auth: this.#auth.oauth2,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: createCatalogImageResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteCatalogObject(
    request: Catalog.DeleteCatalogObjectRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteCatalogObjectResponse, ResponseError> {
    return this.#rawClient.execute<DeleteCatalogObjectResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/catalog/object/{object_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "object_id", value: request.objectId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteCatalogObjectResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listCatalog(
    request: Catalog.ListCatalogRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCatalogResponse, ResponseError> {
    return this.#rawClient.execute<ListCatalogResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/catalog/list"),
        auth: this.#auth.oauth2,
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "types", value: request.types, schema: s.optional(s.string()) },
          { name: "catalog_version", value: request.catalogVersion, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCatalogResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveCatalogObject(
    request: Catalog.RetrieveCatalogObjectRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveCatalogObjectResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveCatalogObjectResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/catalog/object/{object_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "object_id", value: request.objectId, schema: s.string() }],
        query: [
          {
            name: "include_related_objects",
            value: request.includeRelatedObjects,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "catalog_version", value: request.catalogVersion, schema: s.optional(s.number()) },
          {
            name: "include_category_path_to_root",
            value: request.includeCategoryPathToRoot,
            schema: s.defaulted(s.boolean(), false),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveCatalogObjectResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  searchCatalogItems(
    request: Catalog.SearchCatalogItemsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchCatalogItemsResponse, ResponseError> {
    return this.#rawClient.execute<SearchCatalogItemsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/catalog/search-catalog-items"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: searchCatalogItemsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchCatalogItemsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  searchCatalogObjects(
    request: Catalog.SearchCatalogObjectsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchCatalogObjectsResponse, ResponseError> {
    return this.#rawClient.execute<SearchCatalogObjectsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/catalog/search"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: searchCatalogObjectsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchCatalogObjectsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateCatalogImage(
    request: Catalog.UpdateCatalogImageRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateCatalogImageResponse, ResponseError> {
    return this.#rawClient.execute<UpdateCatalogImageResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/catalog/images/{image_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "image_id", value: request.imageId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: updateCatalogImageResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateItemModifierLists(
    request: Catalog.UpdateItemModifierListsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateItemModifierListsResponse, ResponseError> {
    return this.#rawClient.execute<UpdateItemModifierListsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/catalog/update-item-modifier-lists"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: updateItemModifierListsRequestSchema },
      },
      {
        success: { kind: "json", schema: updateItemModifierListsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateItemTaxes(
    request: Catalog.UpdateItemTaxesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateItemTaxesResponse, ResponseError> {
    return this.#rawClient.execute<UpdateItemTaxesResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/catalog/update-item-taxes"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: updateItemTaxesRequestSchema },
      },
      {
        success: { kind: "json", schema: updateItemTaxesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  upsertCatalogObject(
    request: Catalog.UpsertCatalogObjectRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpsertCatalogObjectResponse, ResponseError> {
    return this.#rawClient.execute<UpsertCatalogObjectResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/catalog/object"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: upsertCatalogObjectRequestSchema },
      },
      {
        success: { kind: "json", schema: upsertCatalogObjectResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Catalog {
  export type BatchDeleteCatalogObjectsRequestParams = {
    body: BatchDeleteCatalogObjectsRequest;
  };

  export type BatchRetrieveCatalogObjectsRequestParams = {
    body: BatchRetrieveCatalogObjectsRequest;
  };

  export type BatchUpsertCatalogObjectsRequestParams = {
    body: BatchUpsertCatalogObjectsRequest;
  };

  export type DeleteCatalogObjectRequest = {
    objectId: string;
  };

  export type ListCatalogRequest = {
    cursor?: string;
    types?: string;
    catalogVersion?: number;
  };

  export type RetrieveCatalogObjectRequest = {
    objectId: string;
    includeRelatedObjects?: boolean;
    catalogVersion?: number;
    includeCategoryPathToRoot?: boolean;
  };

  export type SearchCatalogItemsRequestParams = {
    body: SearchCatalogItemsRequest;
  };

  export type SearchCatalogObjectsRequestParams = {
    body: SearchCatalogObjectsRequest;
  };

  export type UpdateCatalogImageRequestParams = {
    imageId: string;
  };

  export type UpdateItemModifierListsRequestParams = {
    body: UpdateItemModifierListsRequest;
  };

  export type UpdateItemTaxesRequestParams = {
    body: UpdateItemTaxesRequest;
  };

  export type UpsertCatalogObjectRequestParams = {
    body: UpsertCatalogObjectRequest;
  };
}
