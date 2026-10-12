import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createBankAccountRequestSchema,
  type CreateBankAccountRequest,
} from "../models/create-bank-account-request.js";
import {
  createBankAccountResponseSchema,
  type CreateBankAccountResponse,
} from "../models/create-bank-account-response.js";
import {
  disableBankAccountResponseSchema,
  type DisableBankAccountResponse,
} from "../models/disable-bank-account-response.js";
import {
  getBankAccountByV1IdResponseSchema,
  type GetBankAccountByV1IdResponse,
} from "../models/get-bank-account-by-v1-id-response.js";
import {
  getBankAccountResponseSchema,
  type GetBankAccountResponse,
} from "../models/get-bank-account-response.js";
import {
  listBankAccountsResponseSchema,
  type ListBankAccountsResponse,
} from "../models/list-bank-accounts-response.js";
import type { Servers } from "../servers.js";

export class BankAccounts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * CreateBankAccount
   *
   * @remarks
   * Store a bank account on file for a square account
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBankAccount(
    request: BankAccounts.CreateBankAccountRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateBankAccountResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/bank-accounts"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createBankAccountRequestSchema },
      },
      {
        success: { kind: "json", schema: createBankAccountResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * DisableBankAccount
   *
   * @remarks
   * Disable a bank account.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  disableBankAccount(
    request: BankAccounts.DisableBankAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<DisableBankAccountResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/bank-accounts/{bank_account_id}/disable"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "bank_account_id", value: request.bankAccountId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: disableBankAccountResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * GetBankAccount
   *
   * @remarks
   * Retrieve details of a [BankAccount](entity:BankAccount) bank account linked to a Square
   * account.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBankAccount(
    request: BankAccounts.GetBankAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<GetBankAccountResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/bank-accounts/{bank_account_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "bank_account_id", value: request.bankAccountId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getBankAccountResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * GetBankAccountByV1Id
   *
   * @remarks
   * Returns details of a [BankAccount](entity:BankAccount) identified by V1 bank account ID.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getBankAccountByV1Id(
    request: BankAccounts.GetBankAccountByV1IdRequest,
    options?: RequestOptions,
  ): ApiPromise<GetBankAccountByV1IdResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/bank-accounts/by-v1-id/{v1_bank_account_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "v1_bank_account_id", value: request.v1BankAccountId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getBankAccountByV1IdResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * ListBankAccounts
   *
   * @remarks
   * Returns a list of [BankAccount](entity:BankAccount) objects linked to a Square account.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBankAccounts(
    request: BankAccounts.ListBankAccountsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListBankAccountsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/bank-accounts"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "location_id", value: request.locationId, schema: s.optional(s.string()) },
          { name: "customer_id", value: request.customerId, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listBankAccountsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace BankAccounts {
  export type CreateBankAccountRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateBankAccountRequest;
  };

  export type DisableBankAccountRequest = {
    /** The ID of the bank account to disable. */
    bankAccountId: string;
  };

  export type GetBankAccountRequest = {
    /** Square-issued ID of the desired `BankAccount`. */
    bankAccountId: string;
  };

  export type GetBankAccountByV1IdRequest = {
    /**
     * Connect V1 ID of the desired `BankAccount`. For more information, see [Retrieve a bank
     * account by using an ID issued by V1 Bank Accounts
     * API](https://developer.squareup.com/docs/bank-accounts-api#retrieve-a-bank-account-by-using-an-id-issued-by-v1-bank-accounts-api).
     */
    v1BankAccountId: string;
  };

  export type ListBankAccountsRequest = {
    /**
     * The pagination cursor returned by a previous call to this endpoint. Use it in the next
     * `ListBankAccounts` request to retrieve the next set of results.
     *
     * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide
     * for more information.
     */
    cursor?: string;
    /**
     * Upper limit on the number of bank accounts to return in the response. Currently, 1000 is the
     * largest supported limit. You can specify a limit of up to 1000 bank accounts. This is also
     * the default limit.
     */
    limit?: number;
    /**
     * Location ID. You can specify this optional filter to retrieve only the linked bank accounts
     * belonging to a specific location.
     */
    locationId?: string;
    /**
     * Customer ID. You can specify this optional filter to retrieve only the linked bank accounts
     * belonging to a specific customer.
     */
    customerId?: string;
  };
}
