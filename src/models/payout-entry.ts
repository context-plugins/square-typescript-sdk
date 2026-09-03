import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { activityTypeSchema, type ActivityType } from "./activity-type.js";
import { moneySchema, type Money } from "./money.js";
import {
  paymentBalanceActivityAppFeeRefundDetailSchema,
  type PaymentBalanceActivityAppFeeRefundDetail,
} from "./payment-balance-activity-app-fee-refund-detail.js";
import {
  paymentBalanceActivityAppFeeRevenueDetailSchema,
  type PaymentBalanceActivityAppFeeRevenueDetail,
} from "./payment-balance-activity-app-fee-revenue-detail.js";
import {
  paymentBalanceActivityAutomaticSavingsDetailSchema,
  type PaymentBalanceActivityAutomaticSavingsDetail,
} from "./payment-balance-activity-automatic-savings-detail.js";
import {
  paymentBalanceActivityAutomaticSavingsReversedDetailSchema,
  type PaymentBalanceActivityAutomaticSavingsReversedDetail,
} from "./payment-balance-activity-automatic-savings-reversed-detail.js";
import {
  paymentBalanceActivityChargeDetailSchema,
  type PaymentBalanceActivityChargeDetail,
} from "./payment-balance-activity-charge-detail.js";
import {
  paymentBalanceActivityDepositFeeDetailSchema,
  type PaymentBalanceActivityDepositFeeDetail,
} from "./payment-balance-activity-deposit-fee-detail.js";
import {
  paymentBalanceActivityDepositFeeReversedDetailSchema,
  type PaymentBalanceActivityDepositFeeReversedDetail,
} from "./payment-balance-activity-deposit-fee-reversed-detail.js";
import {
  paymentBalanceActivityDisputeDetailSchema,
  type PaymentBalanceActivityDisputeDetail,
} from "./payment-balance-activity-dispute-detail.js";
import {
  paymentBalanceActivityFeeDetailSchema,
  type PaymentBalanceActivityFeeDetail,
} from "./payment-balance-activity-fee-detail.js";
import {
  paymentBalanceActivityFreeProcessingDetailSchema,
  type PaymentBalanceActivityFreeProcessingDetail,
} from "./payment-balance-activity-free-processing-detail.js";
import {
  paymentBalanceActivityHoldAdjustmentDetailSchema,
  type PaymentBalanceActivityHoldAdjustmentDetail,
} from "./payment-balance-activity-hold-adjustment-detail.js";
import {
  paymentBalanceActivityOpenDisputeDetailSchema,
  type PaymentBalanceActivityOpenDisputeDetail,
} from "./payment-balance-activity-open-dispute-detail.js";
import {
  paymentBalanceActivityOtherAdjustmentDetailSchema,
  type PaymentBalanceActivityOtherAdjustmentDetail,
} from "./payment-balance-activity-other-adjustment-detail.js";
import {
  paymentBalanceActivityOtherDetailSchema,
  type PaymentBalanceActivityOtherDetail,
} from "./payment-balance-activity-other-detail.js";
import {
  paymentBalanceActivityRefundDetailSchema,
  type PaymentBalanceActivityRefundDetail,
} from "./payment-balance-activity-refund-detail.js";
import {
  paymentBalanceActivityReleaseAdjustmentDetailSchema,
  type PaymentBalanceActivityReleaseAdjustmentDetail,
} from "./payment-balance-activity-release-adjustment-detail.js";
import {
  paymentBalanceActivityReserveHoldDetailSchema,
  type PaymentBalanceActivityReserveHoldDetail,
} from "./payment-balance-activity-reserve-hold-detail.js";
import {
  paymentBalanceActivityReserveReleaseDetailSchema,
  type PaymentBalanceActivityReserveReleaseDetail,
} from "./payment-balance-activity-reserve-release-detail.js";
import {
  paymentBalanceActivitySquareCapitalPaymentDetailSchema,
  type PaymentBalanceActivitySquareCapitalPaymentDetail,
} from "./payment-balance-activity-square-capital-payment-detail.js";
import {
  paymentBalanceActivitySquareCapitalReversedPaymentDetailSchema,
  type PaymentBalanceActivitySquareCapitalReversedPaymentDetail,
} from "./payment-balance-activity-square-capital-reversed-payment-detail.js";
import {
  paymentBalanceActivitySquarePayrollTransferDetailSchema,
  type PaymentBalanceActivitySquarePayrollTransferDetail,
} from "./payment-balance-activity-square-payroll-transfer-detail.js";
import {
  paymentBalanceActivitySquarePayrollTransferReversedDetailSchema,
  type PaymentBalanceActivitySquarePayrollTransferReversedDetail,
} from "./payment-balance-activity-square-payroll-transfer-reversed-detail.js";
import {
  paymentBalanceActivityTaxOnFeeDetailSchema,
  type PaymentBalanceActivityTaxOnFeeDetail,
} from "./payment-balance-activity-tax-on-fee-detail.js";
import {
  paymentBalanceActivityThirdPartyFeeDetailSchema,
  type PaymentBalanceActivityThirdPartyFeeDetail,
} from "./payment-balance-activity-third-party-fee-detail.js";
import {
  paymentBalanceActivityThirdPartyFeeRefundDetailSchema,
  type PaymentBalanceActivityThirdPartyFeeRefundDetail,
} from "./payment-balance-activity-third-party-fee-refund-detail.js";

export type PayoutEntry = {
  id: string;
  payoutId: string;
  effectiveAt?: string | null;
  type?: ActivityType;
  grossAmountMoney?: Money;
  feeAmountMoney?: Money;
  netAmountMoney?: Money;
  typeAppFeeRevenueDetails?: PaymentBalanceActivityAppFeeRevenueDetail;
  typeAppFeeRefundDetails?: PaymentBalanceActivityAppFeeRefundDetail;
  typeAutomaticSavingsDetails?: PaymentBalanceActivityAutomaticSavingsDetail;
  typeAutomaticSavingsReversedDetails?: PaymentBalanceActivityAutomaticSavingsReversedDetail;
  typeChargeDetails?: PaymentBalanceActivityChargeDetail;
  typeDepositFeeDetails?: PaymentBalanceActivityDepositFeeDetail;
  typeDepositFeeReversedDetails?: PaymentBalanceActivityDepositFeeReversedDetail;
  typeDisputeDetails?: PaymentBalanceActivityDisputeDetail;
  typeFeeDetails?: PaymentBalanceActivityFeeDetail;
  typeFreeProcessingDetails?: PaymentBalanceActivityFreeProcessingDetail;
  typeHoldAdjustmentDetails?: PaymentBalanceActivityHoldAdjustmentDetail;
  typeOpenDisputeDetails?: PaymentBalanceActivityOpenDisputeDetail;
  typeOtherDetails?: PaymentBalanceActivityOtherDetail;
  typeOtherAdjustmentDetails?: PaymentBalanceActivityOtherAdjustmentDetail;
  typeRefundDetails?: PaymentBalanceActivityRefundDetail;
  typeReleaseAdjustmentDetails?: PaymentBalanceActivityReleaseAdjustmentDetail;
  typeReserveHoldDetails?: PaymentBalanceActivityReserveHoldDetail;
  typeReserveReleaseDetails?: PaymentBalanceActivityReserveReleaseDetail;
  typeSquareCapitalPaymentDetails?: PaymentBalanceActivitySquareCapitalPaymentDetail;
  typeSquareCapitalReversedPaymentDetails?: PaymentBalanceActivitySquareCapitalReversedPaymentDetail;
  typeTaxOnFeeDetails?: PaymentBalanceActivityTaxOnFeeDetail;
  typeThirdPartyFeeDetails?: PaymentBalanceActivityThirdPartyFeeDetail;
  typeThirdPartyFeeRefundDetails?: PaymentBalanceActivityThirdPartyFeeRefundDetail;
  typeSquarePayrollTransferDetails?: PaymentBalanceActivitySquarePayrollTransferDetail;
  typeSquarePayrollTransferReversedDetails?: PaymentBalanceActivitySquarePayrollTransferReversedDetail;
};

export const payoutEntrySchema: Schema<PayoutEntry> = s.object<PayoutEntry>({
  id: s.string(),
  payoutId: s.string(),
  effectiveAt: s.optionalNullable(s.string()),
  type: s.optional(s.lazy(() => activityTypeSchema)),
  grossAmountMoney: s.optional(s.lazy(() => moneySchema)),
  feeAmountMoney: s.optional(s.lazy(() => moneySchema)),
  netAmountMoney: s.optional(s.lazy(() => moneySchema)),
  typeAppFeeRevenueDetails: s.optional(s.lazy(() => paymentBalanceActivityAppFeeRevenueDetailSchema)),
  typeAppFeeRefundDetails: s.optional(s.lazy(() => paymentBalanceActivityAppFeeRefundDetailSchema)),
  typeAutomaticSavingsDetails: s.optional(s.lazy(() => paymentBalanceActivityAutomaticSavingsDetailSchema)),
  typeAutomaticSavingsReversedDetails: s.optional(
    s.lazy(() => paymentBalanceActivityAutomaticSavingsReversedDetailSchema),
  ),
  typeChargeDetails: s.optional(s.lazy(() => paymentBalanceActivityChargeDetailSchema)),
  typeDepositFeeDetails: s.optional(s.lazy(() => paymentBalanceActivityDepositFeeDetailSchema)),
  typeDepositFeeReversedDetails: s.optional(
    s.lazy(() => paymentBalanceActivityDepositFeeReversedDetailSchema),
  ),
  typeDisputeDetails: s.optional(s.lazy(() => paymentBalanceActivityDisputeDetailSchema)),
  typeFeeDetails: s.optional(s.lazy(() => paymentBalanceActivityFeeDetailSchema)),
  typeFreeProcessingDetails: s.optional(s.lazy(() => paymentBalanceActivityFreeProcessingDetailSchema)),
  typeHoldAdjustmentDetails: s.optional(s.lazy(() => paymentBalanceActivityHoldAdjustmentDetailSchema)),
  typeOpenDisputeDetails: s.optional(s.lazy(() => paymentBalanceActivityOpenDisputeDetailSchema)),
  typeOtherDetails: s.optional(s.lazy(() => paymentBalanceActivityOtherDetailSchema)),
  typeOtherAdjustmentDetails: s.optional(s.lazy(() => paymentBalanceActivityOtherAdjustmentDetailSchema)),
  typeRefundDetails: s.optional(s.lazy(() => paymentBalanceActivityRefundDetailSchema)),
  typeReleaseAdjustmentDetails: s.optional(s.lazy(() => paymentBalanceActivityReleaseAdjustmentDetailSchema)),
  typeReserveHoldDetails: s.optional(s.lazy(() => paymentBalanceActivityReserveHoldDetailSchema)),
  typeReserveReleaseDetails: s.optional(s.lazy(() => paymentBalanceActivityReserveReleaseDetailSchema)),
  typeSquareCapitalPaymentDetails: s.optional(
    s.lazy(() => paymentBalanceActivitySquareCapitalPaymentDetailSchema),
  ),
  typeSquareCapitalReversedPaymentDetails: s.optional(
    s.lazy(() => paymentBalanceActivitySquareCapitalReversedPaymentDetailSchema),
  ),
  typeTaxOnFeeDetails: s.optional(s.lazy(() => paymentBalanceActivityTaxOnFeeDetailSchema)),
  typeThirdPartyFeeDetails: s.optional(s.lazy(() => paymentBalanceActivityThirdPartyFeeDetailSchema)),
  typeThirdPartyFeeRefundDetails: s.optional(
    s.lazy(() => paymentBalanceActivityThirdPartyFeeRefundDetailSchema),
  ),
  typeSquarePayrollTransferDetails: s.optional(
    s.lazy(() => paymentBalanceActivitySquarePayrollTransferDetailSchema),
  ),
  typeSquarePayrollTransferReversedDetails: s.optional(
    s.lazy(() => paymentBalanceActivitySquarePayrollTransferReversedDetailSchema),
  ),
  _keysMap: {
    payoutId: "payout_id",
    effectiveAt: "effective_at",
    grossAmountMoney: "gross_amount_money",
    feeAmountMoney: "fee_amount_money",
    netAmountMoney: "net_amount_money",
    typeAppFeeRevenueDetails: "type_app_fee_revenue_details",
    typeAppFeeRefundDetails: "type_app_fee_refund_details",
    typeAutomaticSavingsDetails: "type_automatic_savings_details",
    typeAutomaticSavingsReversedDetails: "type_automatic_savings_reversed_details",
    typeChargeDetails: "type_charge_details",
    typeDepositFeeDetails: "type_deposit_fee_details",
    typeDepositFeeReversedDetails: "type_deposit_fee_reversed_details",
    typeDisputeDetails: "type_dispute_details",
    typeFeeDetails: "type_fee_details",
    typeFreeProcessingDetails: "type_free_processing_details",
    typeHoldAdjustmentDetails: "type_hold_adjustment_details",
    typeOpenDisputeDetails: "type_open_dispute_details",
    typeOtherDetails: "type_other_details",
    typeOtherAdjustmentDetails: "type_other_adjustment_details",
    typeRefundDetails: "type_refund_details",
    typeReleaseAdjustmentDetails: "type_release_adjustment_details",
    typeReserveHoldDetails: "type_reserve_hold_details",
    typeReserveReleaseDetails: "type_reserve_release_details",
    typeSquareCapitalPaymentDetails: "type_square_capital_payment_details",
    typeSquareCapitalReversedPaymentDetails: "type_square_capital_reversed_payment_details",
    typeTaxOnFeeDetails: "type_tax_on_fee_details",
    typeThirdPartyFeeDetails: "type_third_party_fee_details",
    typeThirdPartyFeeRefundDetails: "type_third_party_fee_refund_details",
    typeSquarePayrollTransferDetails: "type_square_payroll_transfer_details",
    typeSquarePayrollTransferReversedDetails: "type_square_payroll_transfer_reversed_details",
  },
});
