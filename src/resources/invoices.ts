import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { cancelInvoiceRequestSchema, type CancelInvoiceRequest } from "../models/cancel-invoice-request.js";
import {
  cancelInvoiceResponseSchema,
  type CancelInvoiceResponse,
} from "../models/cancel-invoice-response.js";
import {
  createInvoiceAttachmentResponseSchema,
  type CreateInvoiceAttachmentResponse,
} from "../models/create-invoice-attachment-response.js";
import { createInvoiceRequestSchema, type CreateInvoiceRequest } from "../models/create-invoice-request.js";
import {
  createInvoiceResponseSchema,
  type CreateInvoiceResponse,
} from "../models/create-invoice-response.js";
import {
  deleteInvoiceAttachmentResponseSchema,
  type DeleteInvoiceAttachmentResponse,
} from "../models/delete-invoice-attachment-response.js";
import {
  deleteInvoiceResponseSchema,
  type DeleteInvoiceResponse,
} from "../models/delete-invoice-response.js";
import { getInvoiceResponseSchema, type GetInvoiceResponse } from "../models/get-invoice-response.js";
import { listInvoicesResponseSchema, type ListInvoicesResponse } from "../models/list-invoices-response.js";
import {
  publishInvoiceRequestSchema,
  type PublishInvoiceRequest,
} from "../models/publish-invoice-request.js";
import {
  publishInvoiceResponseSchema,
  type PublishInvoiceResponse,
} from "../models/publish-invoice-response.js";
import {
  searchInvoicesRequestSchema,
  type SearchInvoicesRequest,
} from "../models/search-invoices-request.js";
import {
  searchInvoicesResponseSchema,
  type SearchInvoicesResponse,
} from "../models/search-invoices-response.js";
import { updateInvoiceRequestSchema, type UpdateInvoiceRequest } from "../models/update-invoice-request.js";
import {
  updateInvoiceResponseSchema,
  type UpdateInvoiceResponse,
} from "../models/update-invoice-response.js";
import type { Servers } from "../servers.js";

export class Invoices {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  cancelInvoice(
    request: Invoices.CancelInvoiceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CancelInvoiceResponse, ResponseError> {
    return this.#rawClient.execute<CancelInvoiceResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/invoices/{invoice_id}/cancel"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "invoice_id", value: request.invoiceId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: cancelInvoiceRequestSchema },
      },
      {
        success: { kind: "json", schema: cancelInvoiceResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createInvoice(
    request: Invoices.CreateInvoiceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateInvoiceResponse, ResponseError> {
    return this.#rawClient.execute<CreateInvoiceResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/invoices"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createInvoiceRequestSchema },
      },
      {
        success: { kind: "json", schema: createInvoiceResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createInvoiceAttachment(
    request: Invoices.CreateInvoiceAttachmentRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateInvoiceAttachmentResponse, ResponseError> {
    return this.#rawClient.execute<CreateInvoiceAttachmentResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/invoices/{invoice_id}/attachments"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "invoice_id", value: request.invoiceId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: createInvoiceAttachmentResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteInvoice(
    request: Invoices.DeleteInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteInvoiceResponse, ResponseError> {
    return this.#rawClient.execute<DeleteInvoiceResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/invoices/{invoice_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "invoice_id", value: request.invoiceId, schema: s.string() }],
        query: [{ name: "version", value: request.version, schema: s.optional(s.number()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteInvoiceResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteInvoiceAttachment(
    request: Invoices.DeleteInvoiceAttachmentRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteInvoiceAttachmentResponse, ResponseError> {
    return this.#rawClient.execute<DeleteInvoiceAttachmentResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/invoices/{invoice_id}/attachments/{attachment_id}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "invoice_id", value: request.invoiceId, schema: s.string() },
          { name: "attachment_id", value: request.attachmentId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteInvoiceAttachmentResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getInvoice(
    request: Invoices.GetInvoiceRequest,
    options?: RequestOptions,
  ): ApiPromise<GetInvoiceResponse, ResponseError> {
    return this.#rawClient.execute<GetInvoiceResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/invoices/{invoice_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "invoice_id", value: request.invoiceId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getInvoiceResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listInvoices(
    request: Invoices.ListInvoicesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListInvoicesResponse, ResponseError> {
    return this.#rawClient.execute<ListInvoicesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/invoices"),
        auth: this.#auth.oauth2,
        query: [
          { name: "location_id", value: request.locationId, schema: s.string() },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listInvoicesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  publishInvoice(
    request: Invoices.PublishInvoiceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<PublishInvoiceResponse, ResponseError> {
    return this.#rawClient.execute<PublishInvoiceResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/invoices/{invoice_id}/publish"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "invoice_id", value: request.invoiceId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: publishInvoiceRequestSchema },
      },
      {
        success: { kind: "json", schema: publishInvoiceResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  searchInvoices(
    request: Invoices.SearchInvoicesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchInvoicesResponse, ResponseError> {
    return this.#rawClient.execute<SearchInvoicesResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/invoices/search"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: searchInvoicesRequestSchema },
      },
      {
        success: { kind: "json", schema: searchInvoicesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateInvoice(
    request: Invoices.UpdateInvoiceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateInvoiceResponse, ResponseError> {
    return this.#rawClient.execute<UpdateInvoiceResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/invoices/{invoice_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "invoice_id", value: request.invoiceId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateInvoiceRequestSchema },
      },
      {
        success: { kind: "json", schema: updateInvoiceResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Invoices {
  export type CancelInvoiceRequestParams = {
    invoiceId: string;
    body: CancelInvoiceRequest;
  };

  export type CreateInvoiceRequestParams = {
    body: CreateInvoiceRequest;
  };

  export type CreateInvoiceAttachmentRequestParams = {
    invoiceId: string;
  };

  export type DeleteInvoiceRequest = {
    invoiceId: string;
    version?: number;
  };

  export type DeleteInvoiceAttachmentRequest = {
    invoiceId: string;
    attachmentId: string;
  };

  export type GetInvoiceRequest = {
    invoiceId: string;
  };

  export type ListInvoicesRequest = {
    locationId: string;
    cursor?: string;
    limit?: number;
  };

  export type PublishInvoiceRequestParams = {
    invoiceId: string;
    body: PublishInvoiceRequest;
  };

  export type SearchInvoicesRequestParams = {
    body: SearchInvoicesRequest;
  };

  export type UpdateInvoiceRequestParams = {
    invoiceId: string;
    body: UpdateInvoiceRequest;
  };
}
