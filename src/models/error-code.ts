import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the specific error that occurred during a request to a Square API. */
export const ErrorCode = {
  /** A general server error occurred. */
  InternalServerError: "INTERNAL_SERVER_ERROR",
  /** A general authorization error occurred. */
  Unauthorized: "UNAUTHORIZED",
  /** The provided access token has expired. */
  AccessTokenExpired: "ACCESS_TOKEN_EXPIRED",
  /** The provided access token has been revoked. */
  AccessTokenRevoked: "ACCESS_TOKEN_REVOKED",
  /** The provided client has been disabled. */
  ClientDisabled: "CLIENT_DISABLED",
  /** A general access error occurred. */
  Forbidden: "FORBIDDEN",
  /** The provided access token does not have permission to execute the requested action. */
  InsufficientScopes: "INSUFFICIENT_SCOPES",
  /** The calling application was disabled. */
  ApplicationDisabled: "APPLICATION_DISABLED",
  /**
   * The calling application was created prior to 2016-03-30 and is not compatible with v2 Square
   * API calls.
   */
  V1Application: "V1_APPLICATION",
  /**
   * The calling application is using an access token created prior to 2016-03-30 and is not
   * compatible with v2 Square API calls.
   */
  V1AccessToken: "V1_ACCESS_TOKEN",
  /** The location provided in the API call is not enabled for credit card processing. */
  CardProcessingNotEnabled: "CARD_PROCESSING_NOT_ENABLED",
  /** A required subscription was not found for the merchant */
  MerchantSubscriptionNotFound: "MERCHANT_SUBSCRIPTION_NOT_FOUND",
  /** A general error occurred with the request. */
  BadRequest: "BAD_REQUEST",
  /** The request is missing a required path, query, or body parameter. */
  MissingRequiredParameter: "MISSING_REQUIRED_PARAMETER",
  /**
   * The value provided in the request is the wrong type. For example, a string instead of an
   * integer.
   */
  IncorrectType: "INCORRECT_TYPE",
  /** Formatting for the provided time value is incorrect. */
  InvalidTime: "INVALID_TIME",
  /**
   * The time range provided in the request is invalid. For example, the end time is before the
   * start time.
   */
  InvalidTimeRange: "INVALID_TIME_RANGE",
  /** The provided value is invalid. For example, including `%` in a phone number. */
  InvalidValue: "INVALID_VALUE",
  /** The pagination cursor included in the request is invalid. */
  InvalidCursor: "INVALID_CURSOR",
  /** The query parameters provided is invalid for the requested endpoint. */
  UnknownQueryParameter: "UNKNOWN_QUERY_PARAMETER",
  /** One or more of the request parameters conflict with each other. */
  ConflictingParameters: "CONFLICTING_PARAMETERS",
  /** The request body is not a JSON object. */
  ExpectedJsonBody: "EXPECTED_JSON_BODY",
  /** The provided sort order is not a valid key. Currently, sort order must be `ASC` or `DESC`. */
  InvalidSortOrder: "INVALID_SORT_ORDER",
  /** The provided value does not match an expected regular expression. */
  ValueRegexMismatch: "VALUE_REGEX_MISMATCH",
  /** The provided string value is shorter than the minimum length allowed. */
  ValueTooShort: "VALUE_TOO_SHORT",
  /** The provided string value is longer than the maximum length allowed. */
  ValueTooLong: "VALUE_TOO_LONG",
  /** The provided value is less than the supported minimum. */
  ValueTooLow: "VALUE_TOO_LOW",
  /** The provided value is greater than the supported maximum. */
  ValueTooHigh: "VALUE_TOO_HIGH",
  /** The provided value has a default (empty) value such as a blank string. */
  ValueEmpty: "VALUE_EMPTY",
  /** The provided array has too many elements. */
  ArrayLengthTooLong: "ARRAY_LENGTH_TOO_LONG",
  /** The provided array has too few elements. */
  ArrayLengthTooShort: "ARRAY_LENGTH_TOO_SHORT",
  /** The provided array is empty. */
  ArrayEmpty: "ARRAY_EMPTY",
  /** The endpoint expected the provided value to be a boolean. */
  ExpectedBoolean: "EXPECTED_BOOLEAN",
  /** The endpoint expected the provided value to be an integer. */
  ExpectedInteger: "EXPECTED_INTEGER",
  /** The endpoint expected the provided value to be a float. */
  ExpectedFloat: "EXPECTED_FLOAT",
  /** The endpoint expected the provided value to be a string. */
  ExpectedString: "EXPECTED_STRING",
  /** The endpoint expected the provided value to be a JSON object. */
  ExpectedObject: "EXPECTED_OBJECT",
  /** The endpoint expected the provided value to be an array or list. */
  ExpectedArray: "EXPECTED_ARRAY",
  /** The endpoint expected the provided value to be a map or associative array. */
  ExpectedMap: "EXPECTED_MAP",
  /** The endpoint expected the provided value to be an array encoded in base64. */
  ExpectedBase64EncodedByteArray: "EXPECTED_BASE64_ENCODED_BYTE_ARRAY",
  /** One or more objects in the array does not match the array type. */
  InvalidArrayValue: "INVALID_ARRAY_VALUE",
  /** The provided static string is not valid for the field. */
  InvalidEnumValue: "INVALID_ENUM_VALUE",
  /** Invalid content type header. */
  InvalidContentType: "INVALID_CONTENT_TYPE",
  /**
   * Only relevant for applications created prior to 2016-03-30. Indicates there was an error while
   * parsing form values.
   */
  InvalidFormValue: "INVALID_FORM_VALUE",
  /** The provided customer id can't be found in the merchant's customers list. */
  CustomerNotFound: "CUSTOMER_NOT_FOUND",
  /** A general error occurred. */
  OneInstrumentExpected: "ONE_INSTRUMENT_EXPECTED",
  /** A general error occurred. */
  NoFieldsSet: "NO_FIELDS_SET",
  /** Too many entries in the map field. */
  TooManyMapEntries: "TOO_MANY_MAP_ENTRIES",
  /** The length of one of the provided keys in the map is too short. */
  MapKeyLengthTooShort: "MAP_KEY_LENGTH_TOO_SHORT",
  /** The length of one of the provided keys in the map is too long. */
  MapKeyLengthTooLong: "MAP_KEY_LENGTH_TOO_LONG",
  /** The provided customer does not have a recorded name. */
  CustomerMissingName: "CUSTOMER_MISSING_NAME",
  /** The provided customer does not have a recorded email. */
  CustomerMissingEmail: "CUSTOMER_MISSING_EMAIL",
  /** The subscription cannot be paused longer than the duration of the current phase. */
  InvalidPauseLength: "INVALID_PAUSE_LENGTH",
  /** The subscription cannot be paused/resumed on the given date. */
  InvalidDate: "INVALID_DATE",
  /** The API request references an unsupported country. */
  UnsupportedCountry: "UNSUPPORTED_COUNTRY",
  /** The API request references an unsupported currency. */
  UnsupportedCurrency: "UNSUPPORTED_CURRENCY",
  /**
   * The payment was declined by the card issuer during an Apple Tap to Pay (TTP) transaction with a
   * request for the card's PIN. This code will be returned alongside
   * `CARD_DECLINED_VERIFICATION_REQUIRED` as a supplemental error, and will include an
   * issuer-provided token in the `details` field that is needed to initiate the PIN collection flow
   * on the iOS device.
   */
  AppleTtpPinToken: "APPLE_TTP_PIN_TOKEN",
  /** The card issuer declined the request because the card is expired. */
  CardExpired: "CARD_EXPIRED",
  /**
   * The expiration date for the payment card is invalid. For example, it indicates a date in the
   * past.
   */
  InvalidExpiration: "INVALID_EXPIRATION",
  /**
   * The expiration year for the payment card is invalid. For example, it indicates a year in the
   * past or contains invalid characters.
   */
  InvalidExpirationYear: "INVALID_EXPIRATION_YEAR",
  /**
   * The expiration date for the payment card is invalid. For example, it contains invalid
   * characters.
   */
  InvalidExpirationDate: "INVALID_EXPIRATION_DATE",
  /** The credit card provided is not from a supported issuer. */
  UnsupportedCardBrand: "UNSUPPORTED_CARD_BRAND",
  /** The entry method for the credit card (swipe, dip, tap) is not supported. */
  UnsupportedEntryMethod: "UNSUPPORTED_ENTRY_METHOD",
  /** The encrypted card information is invalid. */
  InvalidEncryptedCard: "INVALID_ENCRYPTED_CARD",
  /** The credit card cannot be validated based on the provided details. */
  InvalidCard: "INVALID_CARD",
  /**
   * The payment was declined because there was a payment amount mismatch. The money amount Square
   * was expecting does not match the amount provided.
   */
  PaymentAmountMismatch: "PAYMENT_AMOUNT_MISMATCH",
  /**
   * Square received a decline without any additional information. If the payment information seems
   * correct, the buyer can contact their issuer to ask for more information.
   */
  GenericDecline: "GENERIC_DECLINE",
  /** The card issuer declined the request because the CVV value is invalid. */
  CvvFailure: "CVV_FAILURE",
  /** The card issuer declined the request because the postal code is invalid. */
  AddressVerificationFailure: "ADDRESS_VERIFICATION_FAILURE",
  /** The issuer was not able to locate the account on record. */
  InvalidAccount: "INVALID_ACCOUNT",
  /**
   * The currency associated with the payment is not valid for the provided funding source. For
   * example, a gift card funded in USD cannot be used to process payments in GBP.
   */
  CurrencyMismatch: "CURRENCY_MISMATCH",
  /** The funding source has insufficient funds to cover the payment. */
  InsufficientFunds: "INSUFFICIENT_FUNDS",
  /**
   * The Square account does not have the permissions to accept this payment. For example, Square
   * may limit which merchants are allowed to receive gift card payments.
   */
  InsufficientPermissions: "INSUFFICIENT_PERMISSIONS",
  /**
   * The card issuer has declined the transaction due to restrictions on where the card can be used.
   * For example, a gift card is limited to a single merchant.
   */
  CardholderInsufficientPermissions: "CARDHOLDER_INSUFFICIENT_PERMISSIONS",
  /**
   * The Square account cannot take payments in the specified region. A Square account can take
   * payments only from the region where the account was created.
   */
  InvalidLocation: "INVALID_LOCATION",
  /**
   * The card issuer has determined the payment amount is either too high or too low. The API
   * returns the error code mostly for credit cards (for example, the card reached the credit
   * limit). However, sometimes the issuer bank can indicate the error for debit or prepaid cards
   * (for example, card has insufficient funds).
   */
  TransactionLimit: "TRANSACTION_LIMIT",
  /**
   * The card issuer declined the request because the issuer requires voice authorization from the
   * cardholder. The seller should ask the customer to contact the card issuing bank to authorize
   * the payment.
   */
  VoiceFailure: "VOICE_FAILURE",
  /**
   * The specified card number is invalid. For example, it is of incorrect length or is incorrectly
   * formatted.
   */
  PanFailure: "PAN_FAILURE",
  /** The card expiration date is either invalid or indicates that the card is expired. */
  ExpirationFailure: "EXPIRATION_FAILURE",
  /**
   * The card is not supported either in the geographic region or by the [merchant category
   * code](https://developer.squareup.com/docs/locations-api#initialize-a-merchant-category-code)
   * (MCC).
   */
  CardNotSupported: "CARD_NOT_SUPPORTED",
  /** The Square Card Reader declined the payment for an unknown reason. */
  ReaderDeclined: "READER_DECLINED",
  /** The card issuer declined the request because the PIN is invalid. */
  InvalidPin: "INVALID_PIN",
  /** The payment is missing a required PIN. */
  MissingPin: "MISSING_PIN",
  /** The payment is missing a required ACCOUNT_TYPE parameter. */
  MissingAccountType: "MISSING_ACCOUNT_TYPE",
  /** The postal code is incorrectly formatted. */
  InvalidPostalCode: "INVALID_POSTAL_CODE",
  /** The app_fee_money on a payment is too high. */
  InvalidFees: "INVALID_FEES",
  /**
   * The card must be swiped, tapped, or dipped. Payments attempted by manually entering the card
   * number are declined.
   */
  ManuallyEnteredPaymentNotSupported: "MANUALLY_ENTERED_PAYMENT_NOT_SUPPORTED",
  /**
   * Square declined the request because the payment amount exceeded the processing limit for this
   * merchant.
   */
  PaymentLimitExceeded: "PAYMENT_LIMIT_EXCEEDED",
  /**
   * Provides the available balance on a Square gift card when a gift card payment fails due to
   * insufficient funds. This error is returned with an `INSUFFICIENT_FUNDS` error and contains the
   * balance in the smallest denomination of the applicable currency. [Learn
   * more](https://developer.squareup.com/docs/payments-api/error-codes#gift_card_available_amount)
   * about this error code.
   *
   * You can use the `accept_partial_authorization` field in a `CreatePayment` request to configure
   * a payment flow that uses the available balance and allows collecting additional payments.
   */
  GiftCardAvailableAmount: "GIFT_CARD_AVAILABLE_AMOUNT",
  /** The account provided cannot carry out transactions. */
  AccountUnusable: "ACCOUNT_UNUSABLE",
  /** Bank account rejected or was not authorized for the payment. */
  BuyerRefusedPayment: "BUYER_REFUSED_PAYMENT",
  /** The application tried to update a delayed-capture payment that has expired. */
  DelayedTransactionExpired: "DELAYED_TRANSACTION_EXPIRED",
  /** The application tried to cancel a delayed-capture payment that was already cancelled. */
  DelayedTransactionCanceled: "DELAYED_TRANSACTION_CANCELED",
  /** The application tried to capture a delayed-capture payment that was already captured. */
  DelayedTransactionCaptured: "DELAYED_TRANSACTION_CAPTURED",
  /** The application tried to update a delayed-capture payment that failed. */
  DelayedTransactionFailed: "DELAYED_TRANSACTION_FAILED",
  /** The provided card token (nonce) has expired. */
  CardTokenExpired: "CARD_TOKEN_EXPIRED",
  /** The provided card token (nonce) was already used to process the payment or refund. */
  CardTokenUsed: "CARD_TOKEN_USED",
  /** The requested payment amount is too high for the provided payment source. */
  AmountTooHigh: "AMOUNT_TOO_HIGH",
  /** The API request references an unsupported instrument type. */
  UnsupportedInstrumentType: "UNSUPPORTED_INSTRUMENT_TYPE",
  /** The requested refund amount exceeds the amount available to refund. */
  RefundAmountInvalid: "REFUND_AMOUNT_INVALID",
  /** The payment already has a pending refund. */
  RefundAlreadyPending: "REFUND_ALREADY_PENDING",
  /** The payment is not refundable. For example, the payment is too old to be refunded. */
  PaymentNotRefundable: "PAYMENT_NOT_REFUNDABLE",
  /** The payment is not refundable because it has been disputed. */
  PaymentNotRefundableDueToDispute: "PAYMENT_NOT_REFUNDABLE_DUE_TO_DISPUTE",
  /**
   * The payment is not refundable because the payment is approved and needs to be completed first
   * before the refund is issued.
   */
  RefundErrorPaymentNeedsCompletion: "REFUND_ERROR_PAYMENT_NEEDS_COMPLETION",
  /** Request failed - The card issuer declined the refund. */
  RefundDeclined: "REFUND_DECLINED",
  /** The Square account does not have the permissions to process this refund. */
  InsufficientPermissionsForRefund: "INSUFFICIENT_PERMISSIONS_FOR_REFUND",
  /** Generic error - the provided card data is invalid. */
  InvalidCardData: "INVALID_CARD_DATA",
  /** The provided source id was already used to create a card. */
  SourceUsed: "SOURCE_USED",
  /** The provided source id has expired. */
  SourceExpired: "SOURCE_EXPIRED",
  /**
   * The referenced loyalty program reward tier is not supported. This could happen if the reward
   * tier created in a first party application is incompatible with the Loyalty API.
   */
  UnsupportedLoyaltyRewardTier: "UNSUPPORTED_LOYALTY_REWARD_TIER",
  /** Generic error - the given location does not matching what is expected. */
  LocationMismatch: "LOCATION_MISMATCH",
  /** The order attempting to be returned is not yet paid and cannot be returned. */
  OrderUnpaidNotReturnable: "ORDER_UNPAID_NOT_RETURNABLE",
  /** Delay capture of a partial payment is not supported. */
  PartialPaymentDelayCaptureNotSupported: "PARTIAL_PAYMENT_DELAY_CAPTURE_NOT_SUPPORTED",
  /** The provided idempotency key has already been used. */
  IdempotencyKeyReused: "IDEMPOTENCY_KEY_REUSED",
  /** General error - the value provided was unexpected. */
  UnexpectedValue: "UNEXPECTED_VALUE",
  /** The API request is not supported in sandbox. */
  SandboxNotSupported: "SANDBOX_NOT_SUPPORTED",
  /** The provided email address is invalid. */
  InvalidEmailAddress: "INVALID_EMAIL_ADDRESS",
  /** The provided phone number is invalid. */
  InvalidPhoneNumber: "INVALID_PHONE_NUMBER",
  /** The provided checkout URL has expired. */
  CheckoutExpired: "CHECKOUT_EXPIRED",
  /** Bad certificate. */
  BadCertificate: "BAD_CERTIFICATE",
  /** The provided Square-Version is incorrectly formatted. */
  InvalidSquareVersionFormat: "INVALID_SQUARE_VERSION_FORMAT",
  /** The provided Square-Version is incompatible with the requested action. */
  ApiVersionIncompatible: "API_VERSION_INCOMPATIBLE",
  /** The transaction requires that a card be present. */
  CardPresenceRequired: "CARD_PRESENCE_REQUIRED",
  /** The API request references an unsupported source type. */
  UnsupportedSourceType: "UNSUPPORTED_SOURCE_TYPE",
  /** The provided card does not match what is expected. */
  CardMismatch: "CARD_MISMATCH",
  /** Generic plaid error */
  PlaidError: "PLAID_ERROR",
  /** Plaid error - ITEM_LOGIN_REQUIRED */
  PlaidErrorItemLoginRequired: "PLAID_ERROR_ITEM_LOGIN_REQUIRED",
  /** Plaid error - RATE_LIMIT */
  PlaidErrorRateLimit: "PLAID_ERROR_RATE_LIMIT",
  /** The provided merchant or location is not enabled to accept the requested payment source. */
  PaymentSourceNotEnabledForTarget: "PAYMENT_SOURCE_NOT_ENABLED_FOR_TARGET",
  /** The card was declined. */
  CardDeclined: "CARD_DECLINED",
  /** The CVV could not be verified. */
  VerifyCvvFailure: "VERIFY_CVV_FAILURE",
  /** The AVS could not be verified. */
  VerifyAvsFailure: "VERIFY_AVS_FAILURE",
  /** The payment card was declined with a request for the card holder to call the issuer. */
  CardDeclinedCallIssuer: "CARD_DECLINED_CALL_ISSUER",
  /** The payment card was declined with a request for additional verification. */
  CardDeclinedVerificationRequired: "CARD_DECLINED_VERIFICATION_REQUIRED",
  /** The card expiration date is either missing or incorrectly formatted. */
  BadExpiration: "BAD_EXPIRATION",
  /** The card issuer requires that the card be read using a chip reader. */
  ChipInsertionRequired: "CHIP_INSERTION_REQUIRED",
  /**
   * The card has exhausted its available pin entry retries set by the card issuer. Resolving the
   * error typically requires the card holder to contact the card issuer.
   */
  AllowablePinTriesExceeded: "ALLOWABLE_PIN_TRIES_EXCEEDED",
  /** The card issuer declined the refund. */
  ReservationDeclined: "RESERVATION_DECLINED",
  /** The body parameter is not recognized by the requested endpoint. */
  UnknownBodyParameter: "UNKNOWN_BODY_PARAMETER",
  /** Not Found - a general error occurred. */
  NotFound: "NOT_FOUND",
  /** Square could not find the associated Apple Pay certificate. */
  ApplePaymentProcessingCertificateHashNotFound: "APPLE_PAYMENT_PROCESSING_CERTIFICATE_HASH_NOT_FOUND",
  /** Method Not Allowed - a general error occurred. */
  MethodNotAllowed: "METHOD_NOT_ALLOWED",
  /** Not Acceptable - a general error occurred. */
  NotAcceptable: "NOT_ACCEPTABLE",
  /** Request Timeout - a general error occurred. */
  RequestTimeout: "REQUEST_TIMEOUT",
  /** Conflict - a general error occurred. */
  Conflict: "CONFLICT",
  /** The target resource is no longer available and this condition is likely to be permanent. */
  Gone: "GONE",
  /** Request Entity Too Large - a general error occurred. */
  RequestEntityTooLarge: "REQUEST_ENTITY_TOO_LARGE",
  /** Unsupported Media Type - a general error occurred. */
  UnsupportedMediaType: "UNSUPPORTED_MEDIA_TYPE",
  /** Unprocessable Entity - a general error occurred. */
  UnprocessableEntity: "UNPROCESSABLE_ENTITY",
  /** Rate Limited - a general error occurred. */
  RateLimited: "RATE_LIMITED",
  /** Not Implemented - a general error occurred. */
  NotImplemented: "NOT_IMPLEMENTED",
  /** Bad Gateway - a general error occurred. */
  BadGateway: "BAD_GATEWAY",
  /** Service Unavailable - a general error occurred. */
  ServiceUnavailable: "SERVICE_UNAVAILABLE",
  /**
   * A temporary internal error occurred. You can safely retry your call using the same idempotency
   * key.
   */
  TemporaryError: "TEMPORARY_ERROR",
  /** Gateway Timeout - a general error occurred. */
  GatewayTimeout: "GATEWAY_TIMEOUT",
} as const;
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode] | (string & {});

export const errorCodeSchema: EnumSchema<ErrorCode> = s.enumOf<ErrorCode>(ErrorCode);
