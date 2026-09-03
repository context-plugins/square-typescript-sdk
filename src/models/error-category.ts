import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ErrorCategory = {
  ApiError: "API_ERROR",
  AuthenticationError: "AUTHENTICATION_ERROR",
  InvalidRequestError: "INVALID_REQUEST_ERROR",
  RateLimitError: "RATE_LIMIT_ERROR",
  PaymentMethodError: "PAYMENT_METHOD_ERROR",
  RefundError: "REFUND_ERROR",
  MerchantSubscriptionError: "MERCHANT_SUBSCRIPTION_ERROR",
  ExternalVendorError: "EXTERNAL_VENDOR_ERROR",
} as const;
export type ErrorCategory = (typeof ErrorCategory)[keyof typeof ErrorCategory] | (string & {});

export const errorCategorySchema: EnumSchema<ErrorCategory> = s.enumOf<ErrorCategory>(ErrorCategory);
