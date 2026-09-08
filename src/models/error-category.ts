import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates which high-level category of error has occurred during a request to the Connect API.
 */
export const ErrorCategory = {
  /** An error occurred with the Connect API itself. */
  ApiError: "API_ERROR",
  /**
   * An authentication error occurred. Most commonly, the request had a missing, malformed, or
   * otherwise invalid `Authorization` header.
   */
  AuthenticationError: "AUTHENTICATION_ERROR",
  /**
   * The request was invalid. Most commonly, a required parameter was missing, or a provided
   * parameter had an invalid value.
   */
  InvalidRequestError: "INVALID_REQUEST_ERROR",
  /**
   * Your application reached the Square API rate limit. You might receive this error if your
   * application sends a high number of requests to Square APIs in a short period of time.
   *
   * Your application should monitor responses for `429 RATE_LIMITED` errors and use a retry
   * mechanism with an [exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff)
   * schedule to resend the requests at an increasingly slower rate. It is also a good practice to
   * use a randomized delay (jitter) in your retry schedule.
   */
  RateLimitError: "RATE_LIMIT_ERROR",
  /**
   * An error occurred while processing a payment method. Most commonly, the details of the payment
   * method were invalid (such as a card's CVV or expiration date).
   */
  PaymentMethodError: "PAYMENT_METHOD_ERROR",
  /** An error occurred while attempting to process a refund. */
  RefundError: "REFUND_ERROR",
  /** An error occurred when checking a merchant subscription status */
  MerchantSubscriptionError: "MERCHANT_SUBSCRIPTION_ERROR",
  /** An error that is returned from an external vendor's API */
  ExternalVendorError: "EXTERNAL_VENDOR_ERROR",
} as const;
export type ErrorCategory = (typeof ErrorCategory)[keyof typeof ErrorCategory] | (string & {});

export const errorCategorySchema: EnumSchema<ErrorCategory> = s.enumOf<ErrorCategory>(ErrorCategory);
