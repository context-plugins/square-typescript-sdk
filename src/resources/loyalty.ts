import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  accumulateLoyaltyPointsRequestSchema,
  type AccumulateLoyaltyPointsRequest,
} from "../models/accumulate-loyalty-points-request.js";
import {
  accumulateLoyaltyPointsResponseSchema,
  type AccumulateLoyaltyPointsResponse,
} from "../models/accumulate-loyalty-points-response.js";
import {
  adjustLoyaltyPointsRequestSchema,
  type AdjustLoyaltyPointsRequest,
} from "../models/adjust-loyalty-points-request.js";
import {
  adjustLoyaltyPointsResponseSchema,
  type AdjustLoyaltyPointsResponse,
} from "../models/adjust-loyalty-points-response.js";
import {
  calculateLoyaltyPointsRequestSchema,
  type CalculateLoyaltyPointsRequest,
} from "../models/calculate-loyalty-points-request.js";
import {
  calculateLoyaltyPointsResponseSchema,
  type CalculateLoyaltyPointsResponse,
} from "../models/calculate-loyalty-points-response.js";
import {
  cancelLoyaltyPromotionResponseSchema,
  type CancelLoyaltyPromotionResponse,
} from "../models/cancel-loyalty-promotion-response.js";
import {
  createLoyaltyAccountRequestSchema,
  type CreateLoyaltyAccountRequest,
} from "../models/create-loyalty-account-request.js";
import {
  createLoyaltyAccountResponseSchema,
  type CreateLoyaltyAccountResponse,
} from "../models/create-loyalty-account-response.js";
import {
  createLoyaltyPromotionRequestSchema,
  type CreateLoyaltyPromotionRequest,
} from "../models/create-loyalty-promotion-request.js";
import {
  createLoyaltyPromotionResponseSchema,
  type CreateLoyaltyPromotionResponse,
} from "../models/create-loyalty-promotion-response.js";
import {
  createLoyaltyRewardRequestSchema,
  type CreateLoyaltyRewardRequest,
} from "../models/create-loyalty-reward-request.js";
import {
  createLoyaltyRewardResponseSchema,
  type CreateLoyaltyRewardResponse,
} from "../models/create-loyalty-reward-response.js";
import {
  deleteLoyaltyRewardResponseSchema,
  type DeleteLoyaltyRewardResponse,
} from "../models/delete-loyalty-reward-response.js";
import {
  listLoyaltyProgramsResponseSchema,
  type ListLoyaltyProgramsResponse,
} from "../models/list-loyalty-programs-response.js";
import {
  listLoyaltyPromotionsResponseSchema,
  type ListLoyaltyPromotionsResponse,
} from "../models/list-loyalty-promotions-response.js";
import {
  loyaltyPromotionStatusSchema,
  type LoyaltyPromotionStatus,
} from "../models/loyalty-promotion-status.js";
import {
  redeemLoyaltyRewardRequestSchema,
  type RedeemLoyaltyRewardRequest,
} from "../models/redeem-loyalty-reward-request.js";
import {
  redeemLoyaltyRewardResponseSchema,
  type RedeemLoyaltyRewardResponse,
} from "../models/redeem-loyalty-reward-response.js";
import {
  retrieveLoyaltyAccountResponseSchema,
  type RetrieveLoyaltyAccountResponse,
} from "../models/retrieve-loyalty-account-response.js";
import {
  retrieveLoyaltyProgramResponseSchema,
  type RetrieveLoyaltyProgramResponse,
} from "../models/retrieve-loyalty-program-response.js";
import {
  retrieveLoyaltyPromotionResponseSchema,
  type RetrieveLoyaltyPromotionResponse,
} from "../models/retrieve-loyalty-promotion-response.js";
import {
  retrieveLoyaltyRewardResponseSchema,
  type RetrieveLoyaltyRewardResponse,
} from "../models/retrieve-loyalty-reward-response.js";
import {
  searchLoyaltyAccountsRequestSchema,
  type SearchLoyaltyAccountsRequest,
} from "../models/search-loyalty-accounts-request.js";
import {
  searchLoyaltyAccountsResponseSchema,
  type SearchLoyaltyAccountsResponse,
} from "../models/search-loyalty-accounts-response.js";
import {
  searchLoyaltyEventsRequestSchema,
  type SearchLoyaltyEventsRequest,
} from "../models/search-loyalty-events-request.js";
import {
  searchLoyaltyEventsResponseSchema,
  type SearchLoyaltyEventsResponse,
} from "../models/search-loyalty-events-response.js";
import {
  searchLoyaltyRewardsRequestSchema,
  type SearchLoyaltyRewardsRequest,
} from "../models/search-loyalty-rewards-request.js";
import {
  searchLoyaltyRewardsResponseSchema,
  type SearchLoyaltyRewardsResponse,
} from "../models/search-loyalty-rewards-response.js";
import type { Servers } from "../servers.js";

export class Loyalty {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  accumulateLoyaltyPoints(
    request: Loyalty.AccumulateLoyaltyPointsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AccumulateLoyaltyPointsResponse, ResponseError> {
    return this.#rawClient.execute<AccumulateLoyaltyPointsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/loyalty/accounts/{account_id}/accumulate"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "account_id", value: request.accountId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: accumulateLoyaltyPointsRequestSchema },
      },
      {
        success: { kind: "json", schema: accumulateLoyaltyPointsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  adjustLoyaltyPoints(
    request: Loyalty.AdjustLoyaltyPointsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AdjustLoyaltyPointsResponse, ResponseError> {
    return this.#rawClient.execute<AdjustLoyaltyPointsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/loyalty/accounts/{account_id}/adjust"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "account_id", value: request.accountId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: adjustLoyaltyPointsRequestSchema },
      },
      {
        success: { kind: "json", schema: adjustLoyaltyPointsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  calculateLoyaltyPoints(
    request: Loyalty.CalculateLoyaltyPointsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CalculateLoyaltyPointsResponse, ResponseError> {
    return this.#rawClient.execute<CalculateLoyaltyPointsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/loyalty/programs/{program_id}/calculate"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "program_id", value: request.programId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: calculateLoyaltyPointsRequestSchema },
      },
      {
        success: { kind: "json", schema: calculateLoyaltyPointsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  cancelLoyaltyPromotion(
    request: Loyalty.CancelLoyaltyPromotionRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelLoyaltyPromotionResponse, ResponseError> {
    return this.#rawClient.execute<CancelLoyaltyPromotionResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/loyalty/programs/{program_id}/promotions/{promotion_id}/cancel"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "promotion_id", value: request.promotionId, schema: s.string() },
          { name: "program_id", value: request.programId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelLoyaltyPromotionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createLoyaltyAccount(
    request: Loyalty.CreateLoyaltyAccountRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateLoyaltyAccountResponse, ResponseError> {
    return this.#rawClient.execute<CreateLoyaltyAccountResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/loyalty/accounts"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createLoyaltyAccountRequestSchema },
      },
      {
        success: { kind: "json", schema: createLoyaltyAccountResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createLoyaltyPromotion(
    request: Loyalty.CreateLoyaltyPromotionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateLoyaltyPromotionResponse, ResponseError> {
    return this.#rawClient.execute<CreateLoyaltyPromotionResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/loyalty/programs/{program_id}/promotions"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "program_id", value: request.programId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createLoyaltyPromotionRequestSchema },
      },
      {
        success: { kind: "json", schema: createLoyaltyPromotionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createLoyaltyReward(
    request: Loyalty.CreateLoyaltyRewardRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateLoyaltyRewardResponse, ResponseError> {
    return this.#rawClient.execute<CreateLoyaltyRewardResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/loyalty/rewards"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createLoyaltyRewardRequestSchema },
      },
      {
        success: { kind: "json", schema: createLoyaltyRewardResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteLoyaltyReward(
    request: Loyalty.DeleteLoyaltyRewardRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteLoyaltyRewardResponse, ResponseError> {
    return this.#rawClient.execute<DeleteLoyaltyRewardResponse, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/v2/loyalty/rewards/{reward_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "reward_id", value: request.rewardId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteLoyaltyRewardResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listLoyaltyPrograms(options?: RequestOptions): ApiPromise<ListLoyaltyProgramsResponse, ResponseError> {
    return this.#rawClient.execute<ListLoyaltyProgramsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/loyalty/programs"),
        auth: this.#auth.oauth2,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listLoyaltyProgramsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listLoyaltyPromotions(
    request: Loyalty.ListLoyaltyPromotionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListLoyaltyPromotionsResponse, ResponseError> {
    return this.#rawClient.execute<ListLoyaltyPromotionsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/loyalty/programs/{program_id}/promotions"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "program_id", value: request.programId, schema: s.string() }],
        query: [
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => loyaltyPromotionStatusSchema)),
          },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listLoyaltyPromotionsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  redeemLoyaltyReward(
    request: Loyalty.RedeemLoyaltyRewardRequestParams,
    options?: RequestOptions,
  ): ApiPromise<RedeemLoyaltyRewardResponse, ResponseError> {
    return this.#rawClient.execute<RedeemLoyaltyRewardResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/loyalty/rewards/{reward_id}/redeem"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "reward_id", value: request.rewardId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: redeemLoyaltyRewardRequestSchema },
      },
      {
        success: { kind: "json", schema: redeemLoyaltyRewardResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveLoyaltyAccount(
    request: Loyalty.RetrieveLoyaltyAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveLoyaltyAccountResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveLoyaltyAccountResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/loyalty/accounts/{account_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "account_id", value: request.accountId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveLoyaltyAccountResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveLoyaltyProgram(
    request: Loyalty.RetrieveLoyaltyProgramRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveLoyaltyProgramResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveLoyaltyProgramResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/loyalty/programs/{program_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "program_id", value: request.programId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveLoyaltyProgramResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveLoyaltyPromotion(
    request: Loyalty.RetrieveLoyaltyPromotionRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveLoyaltyPromotionResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveLoyaltyPromotionResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/loyalty/programs/{program_id}/promotions/{promotion_id}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "promotion_id", value: request.promotionId, schema: s.string() },
          { name: "program_id", value: request.programId, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveLoyaltyPromotionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveLoyaltyReward(
    request: Loyalty.RetrieveLoyaltyRewardRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveLoyaltyRewardResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveLoyaltyRewardResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/loyalty/rewards/{reward_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "reward_id", value: request.rewardId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveLoyaltyRewardResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  searchLoyaltyAccounts(
    request: Loyalty.SearchLoyaltyAccountsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchLoyaltyAccountsResponse, ResponseError> {
    return this.#rawClient.execute<SearchLoyaltyAccountsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/loyalty/accounts/search"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: searchLoyaltyAccountsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchLoyaltyAccountsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  searchLoyaltyEvents(
    request: Loyalty.SearchLoyaltyEventsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchLoyaltyEventsResponse, ResponseError> {
    return this.#rawClient.execute<SearchLoyaltyEventsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/loyalty/events/search"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: searchLoyaltyEventsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchLoyaltyEventsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  searchLoyaltyRewards(
    request: Loyalty.SearchLoyaltyRewardsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchLoyaltyRewardsResponse, ResponseError> {
    return this.#rawClient.execute<SearchLoyaltyRewardsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/loyalty/rewards/search"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: searchLoyaltyRewardsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchLoyaltyRewardsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Loyalty {
  export type AccumulateLoyaltyPointsRequestParams = {
    accountId: string;
    body: AccumulateLoyaltyPointsRequest;
  };

  export type AdjustLoyaltyPointsRequestParams = {
    accountId: string;
    body: AdjustLoyaltyPointsRequest;
  };

  export type CalculateLoyaltyPointsRequestParams = {
    programId: string;
    body: CalculateLoyaltyPointsRequest;
  };

  export type CancelLoyaltyPromotionRequest = {
    promotionId: string;
    programId: string;
  };

  export type CreateLoyaltyAccountRequestParams = {
    body: CreateLoyaltyAccountRequest;
  };

  export type CreateLoyaltyPromotionRequestParams = {
    programId: string;
    body: CreateLoyaltyPromotionRequest;
  };

  export type CreateLoyaltyRewardRequestParams = {
    body: CreateLoyaltyRewardRequest;
  };

  export type DeleteLoyaltyRewardRequest = {
    rewardId: string;
  };

  export type ListLoyaltyPromotionsRequest = {
    programId: string;
    status?: LoyaltyPromotionStatus;
    cursor?: string;
    limit?: number;
  };

  export type RedeemLoyaltyRewardRequestParams = {
    rewardId: string;
    body: RedeemLoyaltyRewardRequest;
  };

  export type RetrieveLoyaltyAccountRequest = {
    accountId: string;
  };

  export type RetrieveLoyaltyProgramRequest = {
    programId: string;
  };

  export type RetrieveLoyaltyPromotionRequest = {
    promotionId: string;
    programId: string;
  };

  export type RetrieveLoyaltyRewardRequest = {
    rewardId: string;
  };

  export type SearchLoyaltyAccountsRequestParams = {
    body: SearchLoyaltyAccountsRequest;
  };

  export type SearchLoyaltyEventsRequestParams = {
    body: SearchLoyaltyEventsRequest;
  };

  export type SearchLoyaltyRewardsRequestParams = {
    body: SearchLoyaltyRewardsRequest;
  };
}
