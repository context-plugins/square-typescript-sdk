import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The category of the seller’s cancellation policy. */
export const BusinessAppointmentSettingsCancellationPolicy = {
  /**
   * Cancellations are treated as no shows and may incur a fee as specified by
   * `cancellation_fee_money`.
   */
  CancellationTreatedAsNoShow: "CANCELLATION_TREATED_AS_NO_SHOW",
  /**
   * Cancellations follow the seller-specified policy that is described in free-form text and not
   * enforced automatically by Square.
   */
  CustomPolicy: "CUSTOM_POLICY",
} as const;
export type BusinessAppointmentSettingsCancellationPolicy =
  | (typeof BusinessAppointmentSettingsCancellationPolicy)[keyof typeof BusinessAppointmentSettingsCancellationPolicy]
  | (string & {});

export const businessAppointmentSettingsCancellationPolicySchema: EnumSchema<BusinessAppointmentSettingsCancellationPolicy> =
  s.enumOf<BusinessAppointmentSettingsCancellationPolicy>(BusinessAppointmentSettingsCancellationPolicy);
