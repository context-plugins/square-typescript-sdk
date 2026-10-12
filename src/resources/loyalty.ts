import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * AccumulateLoyaltyPoints
   *
   * @remarks
   * Adds points earned from a purchase to a [loyalty account](entity:LoyaltyAccount).
   *
   * - If you are using the Orders API to manage orders, provide the `order_id`. Square reads the
   *   order to compute the points earned from both the base loyalty program and an associated
   *   [loyalty promotion](entity:LoyaltyPromotion). For purchases that qualify for multiple accrual
   *   rules, Square computes points based on the accrual rule that grants the most points. For
   *   purchases that qualify for multiple promotions, Square computes points based on the most
   *   recently created promotion. A purchase must first qualify for program points to be eligible
   *   for promotion points.
   *
   * - If you are not using the Orders API to manage orders, provide `points` with the number of
   *   points to add. You must first perform a client-side computation of the points earned from the
   *   loyalty program and loyalty promotion. For spend-based and visit-based programs, you can call
   *   [CalculateLoyaltyPoints](api-endpoint:Loyalty-CalculateLoyaltyPoints) to compute the points
   *   earned from the base loyalty program. For information about computing points earned from a
   *   loyalty promotion, see [Calculating promotion
   *   points](https://developer.squareup.com/docs/loyalty-api/loyalty-promotions#calculate-promotion-points).
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  accumulateLoyaltyPoints(
    request: Loyalty.AccumulateLoyaltyPointsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AccumulateLoyaltyPointsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/loyalty/accounts/{account_id}/accumulate"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "account_id", value: request.accountId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: accumulateLoyaltyPointsRequestSchema },
      },
      {
        success: { kind: "json", schema: accumulateLoyaltyPointsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * AdjustLoyaltyPoints
   *
   * @remarks
   * Adds points to or subtracts points from a buyer's account.
   *
   * Use this endpoint only when you need to manually adjust points. Otherwise, in your application
   * flow, you call [AccumulateLoyaltyPoints](api-endpoint:Loyalty-AccumulateLoyaltyPoints) to add
   * points when a buyer pays for the purchase.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  adjustLoyaltyPoints(
    request: Loyalty.AdjustLoyaltyPointsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<AdjustLoyaltyPointsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/loyalty/accounts/{account_id}/adjust"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "account_id", value: request.accountId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: adjustLoyaltyPointsRequestSchema },
      },
      {
        success: { kind: "json", schema: adjustLoyaltyPointsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * CalculateLoyaltyPoints
   *
   * @remarks
   * Calculates the number of points a buyer can earn from a purchase. Applications might call this
   * endpoint to display the points to the buyer.
   *
   * - If you are using the Orders API to manage orders, provide the `order_id` and (optional)
   *   `loyalty_account_id`. Square reads the order to compute the points earned from the base
   *   loyalty program and an associated [loyalty promotion](entity:LoyaltyPromotion).
   *
   * - If you are not using the Orders API to manage orders, provide `transaction_amount_money` with
   *   the purchase amount. Square uses this amount to calculate the points earned from the base
   *   loyalty program, but not points earned from a loyalty promotion. For spend-based and
   *   visit-based programs, the `tax_mode` setting of the accrual rule indicates how taxes should
   *   be treated for loyalty points accrual. If the purchase qualifies for program points, call
   *   [ListLoyaltyPromotions](api-endpoint:Loyalty-ListLoyaltyPromotions) and perform a client-side
   *   computation to calculate whether the purchase also qualifies for promotion points. For more
   *   information, see [Calculating promotion
   *   points](https://developer.squareup.com/docs/loyalty-api/loyalty-promotions#calculate-promotion-points).
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  calculateLoyaltyPoints(
    request: Loyalty.CalculateLoyaltyPointsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CalculateLoyaltyPointsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/loyalty/programs/{program_id}/calculate"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "program_id", value: request.programId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: calculateLoyaltyPointsRequestSchema },
      },
      {
        success: { kind: "json", schema: calculateLoyaltyPointsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * CancelLoyaltyPromotion
   *
   * @remarks
   * Cancels a loyalty promotion. Use this endpoint to cancel an `ACTIVE` promotion earlier than the
   * end date, cancel an `ACTIVE` promotion when an end date is not specified, or cancel a
   * `SCHEDULED` promotion. Because updating a promotion is not supported, you can also use this
   * endpoint to cancel a promotion before you create a new one.
   *
   * This endpoint sets the loyalty promotion to the `CANCELED` state
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelLoyaltyPromotion(
    request: Loyalty.CancelLoyaltyPromotionRequest,
    options?: RequestOptions,
  ): ApiPromise<CancelLoyaltyPromotionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/v2/loyalty/programs/{program_id}/promotions/{promotion_id}/cancel",
        ),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "promotion_id", value: request.promotionId, schema: s.string() },
          { name: "program_id", value: request.programId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cancelLoyaltyPromotionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * CreateLoyaltyAccount
   *
   * @remarks
   * Creates a loyalty account. To create a loyalty account, you must provide the `program_id` and a
   * `mapping` with the `phone_number` of the buyer.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLoyaltyAccount(
    request: Loyalty.CreateLoyaltyAccountRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateLoyaltyAccountResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/loyalty/accounts"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createLoyaltyAccountRequestSchema },
      },
      {
        success: { kind: "json", schema: createLoyaltyAccountResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * CreateLoyaltyPromotion
   *
   * @remarks
   * Creates a loyalty promotion for a [loyalty program](entity:LoyaltyProgram). A loyalty promotion
   * enables buyers to earn points in addition to those earned from the base loyalty program.
   *
   * This endpoint sets the loyalty promotion to the `ACTIVE` or `SCHEDULED` status, depending on
   * the `available_time` setting. A loyalty program can have a maximum of 10 loyalty promotions
   * with an `ACTIVE` or `SCHEDULED` status.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLoyaltyPromotion(
    request: Loyalty.CreateLoyaltyPromotionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateLoyaltyPromotionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/loyalty/programs/{program_id}/promotions"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "program_id", value: request.programId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createLoyaltyPromotionRequestSchema },
      },
      {
        success: { kind: "json", schema: createLoyaltyPromotionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * CreateLoyaltyReward
   *
   * @remarks
   * Creates a loyalty reward. In the process, the endpoint does following:
   *
   * - Uses the `reward_tier_id` in the request to determine the number of points to lock for this
   *   reward.
   * - If the request includes `order_id`, it adds the reward and related discount to the order.
   *
   * After a reward is created, the points are locked and not available for the buyer to redeem
   * another reward.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLoyaltyReward(
    request: Loyalty.CreateLoyaltyRewardRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateLoyaltyRewardResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/loyalty/rewards"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createLoyaltyRewardRequestSchema },
      },
      {
        success: { kind: "json", schema: createLoyaltyRewardResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * DeleteLoyaltyReward
   *
   * @remarks
   * Deletes a loyalty reward by doing the following:
   *
   * - Returns the loyalty points back to the loyalty account.
   * - If an order ID was specified when the reward was created (see
   *   [CreateLoyaltyReward](api-endpoint:Loyalty-CreateLoyaltyReward)), it updates the order by
   *   removing the reward and related discounts.
   *
   * You cannot delete a reward that has reached the terminal state (REDEEMED).
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteLoyaltyReward(
    request: Loyalty.DeleteLoyaltyRewardRequest,
    options?: RequestOptions,
  ): ApiPromise<DeleteLoyaltyRewardResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/loyalty/rewards/{reward_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "reward_id", value: request.rewardId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: deleteLoyaltyRewardResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * ListLoyaltyPrograms
   *
   * @remarks
   * Returns a list of loyalty programs in the seller's account. Loyalty programs define how buyers
   * can earn points and redeem points for rewards. Square sellers can have only one loyalty
   * program, which is created and managed from the Seller Dashboard. For more information, see
   * [Loyalty Program Overview](https://developer.squareup.com/docs/loyalty/overview).
   *
   *
   * Replaced with [RetrieveLoyaltyProgram](api-endpoint:Loyalty-RetrieveLoyaltyProgram) when used
   * with the keyword `main`.
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
  listLoyaltyPrograms(options?: RequestOptions): ApiPromise<ListLoyaltyProgramsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/loyalty/programs"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listLoyaltyProgramsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * ListLoyaltyPromotions
   *
   * @remarks
   * Lists the loyalty promotions associated with a [loyalty program](entity:LoyaltyProgram).
   * Results are sorted by the `created_at` date in descending order (newest to oldest).
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listLoyaltyPromotions(
    request: Loyalty.ListLoyaltyPromotionsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListLoyaltyPromotionsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/loyalty/programs/{program_id}/promotions"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "program_id", value: request.programId, schema: s.string() }],
        query: [
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => loyaltyPromotionStatusSchema)),
          },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listLoyaltyPromotionsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RedeemLoyaltyReward
   *
   * @remarks
   * Redeems a loyalty reward.
   *
   * The endpoint sets the reward to the `REDEEMED` terminal state.
   *
   * If you are using your own order processing system (not using the Orders API), you call this
   * endpoint after the buyer paid for the purchase.
   *
   * After the reward reaches the terminal state, it cannot be deleted. In other words, points used
   * for the reward cannot be returned to the account.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  redeemLoyaltyReward(
    request: Loyalty.RedeemLoyaltyRewardRequestParams,
    options?: RequestOptions,
  ): ApiPromise<RedeemLoyaltyRewardResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/loyalty/rewards/{reward_id}/redeem"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "reward_id", value: request.rewardId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: redeemLoyaltyRewardRequestSchema },
      },
      {
        success: { kind: "json", schema: redeemLoyaltyRewardResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveLoyaltyAccount
   *
   * @remarks
   * Retrieves a loyalty account.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveLoyaltyAccount(
    request: Loyalty.RetrieveLoyaltyAccountRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveLoyaltyAccountResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/loyalty/accounts/{account_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "account_id", value: request.accountId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveLoyaltyAccountResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveLoyaltyProgram
   *
   * @remarks
   * Retrieves the loyalty program in a seller's account, specified by the program ID or the keyword
   * `main`.
   *
   * Loyalty programs define how buyers can earn points and redeem points for rewards. Square
   * sellers can have only one loyalty program, which is created and managed from the Seller
   * Dashboard. For more information, see [Loyalty Program
   * Overview](https://developer.squareup.com/docs/loyalty/overview).
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveLoyaltyProgram(
    request: Loyalty.RetrieveLoyaltyProgramRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveLoyaltyProgramResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/loyalty/programs/{program_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "program_id", value: request.programId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveLoyaltyProgramResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveLoyaltyPromotion
   *
   * @remarks
   * Retrieves a loyalty promotion.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveLoyaltyPromotion(
    request: Loyalty.RetrieveLoyaltyPromotionRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveLoyaltyPromotionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/loyalty/programs/{program_id}/promotions/{promotion_id}"),
        auth: this.#auth.oauth2,
        pathParams: [
          { name: "promotion_id", value: request.promotionId, schema: s.string() },
          { name: "program_id", value: request.programId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveLoyaltyPromotionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * RetrieveLoyaltyReward
   *
   * @remarks
   * Retrieves a loyalty reward.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  retrieveLoyaltyReward(
    request: Loyalty.RetrieveLoyaltyRewardRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveLoyaltyRewardResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/loyalty/rewards/{reward_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "reward_id", value: request.rewardId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveLoyaltyRewardResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * SearchLoyaltyAccounts
   *
   * @remarks
   * Searches for loyalty accounts in a loyalty program.
   *
   * You can search for a loyalty account using the phone number or customer ID associated with the
   * account. To return all loyalty accounts, specify an empty `query` object or omit it entirely.
   *
   * Search results are sorted by `created_at` in ascending order.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchLoyaltyAccounts(
    request: Loyalty.SearchLoyaltyAccountsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchLoyaltyAccountsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/loyalty/accounts/search"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchLoyaltyAccountsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchLoyaltyAccountsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * SearchLoyaltyEvents
   *
   * @remarks
   * Searches for loyalty events.
   *
   * A Square loyalty program maintains a ledger of events that occur during the lifetime of a
   * buyer's loyalty account. Each change in the point balance (for example, points earned, points
   * redeemed, and points expired) is recorded in the ledger. Using this endpoint, you can search
   * the ledger for events.
   *
   * Search results are sorted by `created_at` in descending order.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchLoyaltyEvents(
    request: Loyalty.SearchLoyaltyEventsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchLoyaltyEventsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/loyalty/events/search"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchLoyaltyEventsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchLoyaltyEventsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * SearchLoyaltyRewards
   *
   * @remarks
   * Searches for loyalty rewards. This endpoint accepts a request with no query filters and returns
   * results for all loyalty accounts. If you include a `query` object, `loyalty_account_id` is
   * required and `status` is optional.
   *
   * If you know a reward ID, use the
   * [RetrieveLoyaltyReward](api-endpoint:Loyalty-RetrieveLoyaltyReward) endpoint.
   *
   * Search results are sorted by `updated_at` in descending order.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link SquareError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchLoyaltyRewards(
    request: Loyalty.SearchLoyaltyRewardsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchLoyaltyRewardsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/loyalty/rewards/search"),
        auth: this.#auth.oauth2,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: searchLoyaltyRewardsRequestSchema },
      },
      {
        success: { kind: "json", schema: searchLoyaltyRewardsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Loyalty {
  export type AccumulateLoyaltyPointsRequestParams = {
    /** The ID of the target [loyalty account](entity:LoyaltyAccount). */
    accountId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: AccumulateLoyaltyPointsRequest;
  };

  export type AdjustLoyaltyPointsRequestParams = {
    /** The ID of the target [loyalty account](entity:LoyaltyAccount). */
    accountId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: AdjustLoyaltyPointsRequest;
  };

  export type CalculateLoyaltyPointsRequestParams = {
    /**
     * The ID of the [loyalty program](entity:LoyaltyProgram), which defines the rules for accruing
     * points.
     */
    programId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CalculateLoyaltyPointsRequest;
  };

  export type CancelLoyaltyPromotionRequest = {
    /**
     * The ID of the [loyalty promotion](entity:LoyaltyPromotion) to cancel. You can cancel a
     * promotion that has an `ACTIVE` or `SCHEDULED` status.
     */
    promotionId: string;
    /** The ID of the base [loyalty program](entity:LoyaltyProgram). */
    programId: string;
  };

  export type CreateLoyaltyAccountRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateLoyaltyAccountRequest;
  };

  export type CreateLoyaltyPromotionRequestParams = {
    /**
     * The ID of the [loyalty program](entity:LoyaltyProgram) to associate with the promotion. To
     * get the program ID, call
     * [RetrieveLoyaltyProgram](api-endpoint:Loyalty-RetrieveLoyaltyProgram) using the `main`
     * keyword.
     */
    programId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateLoyaltyPromotionRequest;
  };

  export type CreateLoyaltyRewardRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: CreateLoyaltyRewardRequest;
  };

  export type DeleteLoyaltyRewardRequest = {
    /** The ID of the [loyalty reward](entity:LoyaltyReward) to delete. */
    rewardId: string;
  };

  export type ListLoyaltyPromotionsRequest = {
    /**
     * The ID of the base [loyalty program](entity:LoyaltyProgram). To get the program ID, call
     * [RetrieveLoyaltyProgram](api-endpoint:Loyalty-RetrieveLoyaltyProgram) using the `main`
     * keyword.
     */
    programId: string;
    /**
     * The status to filter the results by. If a status is provided, only loyalty promotions with
     * the specified status are returned. Otherwise, all loyalty promotions associated with the
     * loyalty program are returned.
     */
    status?: LoyaltyPromotionStatus;
    /**
     * The cursor returned in the paged response from the previous call to this endpoint. Provide
     * this cursor to retrieve the next page of results for your original request. For more
     * information, see
     * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
    /**
     * The maximum number of results to return in a single paged response. The minimum value is 1
     * and the maximum value is 30. The default value is 30. For more information, see
     * [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    limit?: number;
  };

  export type RedeemLoyaltyRewardRequestParams = {
    /** The ID of the [loyalty reward](entity:LoyaltyReward) to redeem. */
    rewardId: string;
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: RedeemLoyaltyRewardRequest;
  };

  export type RetrieveLoyaltyAccountRequest = {
    /** The ID of the [loyalty account](entity:LoyaltyAccount) to retrieve. */
    accountId: string;
  };

  export type RetrieveLoyaltyProgramRequest = {
    /**
     * The ID of the loyalty program or the keyword `main`. Either value can be used to retrieve the
     * single loyalty program that belongs to the seller.
     */
    programId: string;
  };

  export type RetrieveLoyaltyPromotionRequest = {
    /** The ID of the [loyalty promotion](entity:LoyaltyPromotion) to retrieve. */
    promotionId: string;
    /**
     * The ID of the base [loyalty program](entity:LoyaltyProgram). To get the program ID, call
     * [RetrieveLoyaltyProgram](api-endpoint:Loyalty-RetrieveLoyaltyProgram) using the `main`
     * keyword.
     */
    programId: string;
  };

  export type RetrieveLoyaltyRewardRequest = {
    /** The ID of the [loyalty reward](entity:LoyaltyReward) to retrieve. */
    rewardId: string;
  };

  export type SearchLoyaltyAccountsRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: SearchLoyaltyAccountsRequest;
  };

  export type SearchLoyaltyEventsRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: SearchLoyaltyEventsRequest;
  };

  export type SearchLoyaltyRewardsRequestParams = {
    /**
     * An object containing the fields to POST for the request.
     *
     * See the corresponding object definition for field details.
     */
    body: SearchLoyaltyRewardsRequest;
  };
}
