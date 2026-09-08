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

  /**
   * CancelInvoice
   *
   * @remarks
   * Cancels an invoice. The seller cannot collect payments for the canceled invoice.
   *
   * You cannot cancel an invoice in the `DRAFT` state or in a terminal state: `PAID`, `REFUNDED`,
   * `CANCELED`, or `FAILED`.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * CreateInvoice
   *
   * @remarks
   * Creates a draft [invoice](entity:Invoice) for an order created using the Orders API.
   *
   * A draft invoice remains in your account and no action is taken. You must publish the invoice
   * before Square can process it (send it to the customer's email address or charge the customer’s
   * card on file).
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * CreateInvoiceAttachment
   *
   * @remarks
   * Uploads a file and attaches it to an invoice. This endpoint accepts HTTP multipart/form-data
   * file uploads with a JSON `request` part and a `file` part. The `file` part must be a `readable
   * stream` that contains a file in a supported format: GIF, JPEG, PNG, TIFF, BMP, or PDF.
   *
   * Invoices can have up to 10 attachments with a total file size of 25 MB. Attachments can be
   * added only to invoices in the `DRAFT`, `SCHEDULED`, `UNPAID`, or `PARTIALLY_PAID` state.
   *
   * __NOTE:__ When testing in the Sandbox environment, the total file size is limited to 1 KB.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * DeleteInvoice
   *
   * @remarks
   * Deletes the specified invoice. When an invoice is deleted, the associated order status changes
   * to CANCELED. You can only delete a draft invoice (you cannot delete a published invoice,
   * including one that is scheduled for processing).
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * DeleteInvoiceAttachment
   *
   * @remarks
   * Removes an attachment from an invoice and permanently deletes the file. Attachments can be
   * removed only from invoices in the `DRAFT`, `SCHEDULED`, `UNPAID`, or `PARTIALLY_PAID` state.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * GetInvoice
   *
   * @remarks
   * Retrieves an invoice by invoice ID.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * ListInvoices
   *
   * @remarks
   * Returns a list of invoices for a given location. The response is paginated. If truncated, the
   * response includes a `cursor` that you use in a subsequent request to retrieve the next set of
   * invoices.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * PublishInvoice
   *
   * @remarks
   * Publishes the specified draft invoice.
   *
   * After an invoice is published, Square follows up based on the invoice configuration. For
   * example, Square sends the invoice to the customer's email address, charges the customer's card
   * on file, or does nothing. Square also makes the invoice available on a Square-hosted invoice
   * page.
   *
   * The invoice `status` also changes from `DRAFT` to a status based on the invoice configuration.
   * For example, the status changes to `UNPAID` if Square emails the invoice or `PARTIALLY_PAID` if
   * Square charges a card on file for a portion of the invoice amount.
   *
   * In addition to the required `ORDERS_WRITE` and `INVOICES_WRITE` permissions, `CUSTOMERS_READ`
   * and `PAYMENTS_WRITE` are required when publishing invoices configured for card-on-file
   * payments.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * SearchInvoices
   *
   * @remarks
   * Searches for invoices from a location specified in the filter. You can optionally specify
   * customers in the filter for whom to retrieve invoices. In the current implementation, you can
   * only specify one location and optionally one customer.
   *
   * The response is paginated. If truncated, the response includes a `cursor` that you use in a
   * subsequent request to retrieve the next set of invoices.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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

  /**
   * UpdateInvoice
   *
   * @remarks
   * Updates an invoice. This endpoint supports sparse updates, so you only need to specify the
   * fields you want to change along with the required `version` field. Some restrictions apply to
   * updating invoices. For example, you cannot change the `order_id` or `location_id` field.
   *
   * @returns Success
   *
   * @throws {@link ResponseError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, an abort, a schema violation, or a credential that could not be obtained
   */
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
    /** The ID of the [invoice](entity:Invoice) to cancel. */
    invoiceId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CancelInvoiceRequest;
  };

  export type CreateInvoiceRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateInvoiceRequest;
  };

  export type CreateInvoiceAttachmentRequestParams = {
    /** The ID of the [invoice](entity:Invoice) to attach the file to. */
    invoiceId: string;
  };

  export type DeleteInvoiceRequest = {
    /** The ID of the invoice to delete. */
    invoiceId: string;
    /**
     * The version of the [invoice](entity:Invoice) to delete. If you do not know the version, you
     * can call [GetInvoice](api-endpoint:Invoices-GetInvoice) or
     * [ListInvoices](api-endpoint:Invoices-ListInvoices).
     */
    version?: number;
  };

  export type DeleteInvoiceAttachmentRequest = {
    /** The ID of the [invoice](entity:Invoice) to delete the attachment from. */
    invoiceId: string;
    /** The ID of the [attachment](entity:InvoiceAttachment) to delete. */
    attachmentId: string;
  };

  export type GetInvoiceRequest = {
    /** The ID of the invoice to retrieve. */
    invoiceId: string;
  };

  export type ListInvoicesRequest = {
    /** The ID of the location for which to list invoices. */
    locationId: string;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this cursor to
     * retrieve the next set of results for your original query.
     *
     * For more information, see
     * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
    /**
     * The maximum number of invoices to return (200 is the maximum `limit`). If not provided, the
     * server uses a default limit of 100 invoices.
     */
    limit?: number;
  };

  export type PublishInvoiceRequestParams = {
    /** The ID of the invoice to publish. */
    invoiceId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: PublishInvoiceRequest;
  };

  export type SearchInvoicesRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: SearchInvoicesRequest;
  };

  export type UpdateInvoiceRequestParams = {
    /** The ID of the invoice to update. */
    invoiceId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: UpdateInvoiceRequest;
  };
}
