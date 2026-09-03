import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BusinessAppointmentSettingsCancellationPolicy = {
  CancellationTreatedAsNoShow: "CANCELLATION_TREATED_AS_NO_SHOW",
  CustomPolicy: "CUSTOM_POLICY",
} as const;
export type BusinessAppointmentSettingsCancellationPolicy =
  | (typeof BusinessAppointmentSettingsCancellationPolicy)[keyof typeof BusinessAppointmentSettingsCancellationPolicy]
  | (string & {});

export const businessAppointmentSettingsCancellationPolicySchema: EnumSchema<BusinessAppointmentSettingsCancellationPolicy> =
  s.enumOf<BusinessAppointmentSettingsCancellationPolicy>(BusinessAppointmentSettingsCancellationPolicy);
