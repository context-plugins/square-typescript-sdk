import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const GiftCardStatus = {
  Active: "ACTIVE",
  Deactivated: "DEACTIVATED",
  Blocked: "BLOCKED",
  Pending: "PENDING",
} as const;
export type GiftCardStatus = (typeof GiftCardStatus)[keyof typeof GiftCardStatus] | (string & {});

export const giftCardStatusSchema: EnumSchema<GiftCardStatus> = s.enumOf<GiftCardStatus>(GiftCardStatus);
