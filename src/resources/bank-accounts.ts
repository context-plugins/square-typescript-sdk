import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createBankAccount(
    request: BankAccounts.CreateBankAccountRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateBankAccountResponse, ResponseError> {
    return this.#rawClient.execute<CreateBankAccountResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/bank-accounts"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createBankAccountRequestSchema },
      },
      {
        success: { kind: "json", schema: createBankAccountResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  disableBankAccount(
    request: BankAccounts.DisableBankAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<DisableBankAccountResponse, ResponseError> {
    return this.#rawClient.execute<DisableBankAccountResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/bank-accounts/{bank_account_id}/disable"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "bank_account_id", value: request.bankAccountId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: disableBankAccountResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getBankAccount(
    request: BankAccounts.GetBankAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<GetBankAccountResponse, ResponseError> {
    return this.#rawClient.execute<GetBankAccountResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/bank-accounts/{bank_account_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "bank_account_id", value: request.bankAccountId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getBankAccountResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  getBankAccountByV1Id(
    request: BankAccounts.GetBankAccountByV1IdRequest,
    options?: RequestOptions,
  ): ApiPromise<GetBankAccountByV1IdResponse, ResponseError> {
    return this.#rawClient.execute<GetBankAccountByV1IdResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/bank-accounts/by-v1-id/{v1_bank_account_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "v1_bank_account_id", value: request.v1BankAccountId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getBankAccountByV1IdResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listBankAccounts(
    request: BankAccounts.ListBankAccountsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListBankAccountsResponse, ResponseError> {
    return this.#rawClient.execute<ListBankAccountsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/bank-accounts"),
        auth: this.#auth.oauth2,
        query: [
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "location_id", value: request.locationId, schema: s.optional(s.string()) },
          { name: "customer_id", value: request.customerId, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listBankAccountsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace BankAccounts {
  export type CreateBankAccountRequestParams = {
    body: CreateBankAccountRequest;
  };

  export type DisableBankAccountRequest = {
    bankAccountId: string;
  };

  export type GetBankAccountRequest = {
    bankAccountId: string;
  };

  export type GetBankAccountByV1IdRequest = {
    v1BankAccountId: string;
  };

  export type ListBankAccountsRequest = {
    cursor?: string;
    limit?: number;
    locationId?: string;
    customerId?: string;
  };
}
