import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";

export type PrePopulatedData = {
  buyerEmail?: string | null;
  buyerPhoneNumber?: string | null;
  buyerAddress?: Address;
};

export const prePopulatedDataSchema: Schema<PrePopulatedData> = s.object<PrePopulatedData>({
  buyerEmail: s.optionalNullable(s.string()),
  buyerPhoneNumber: s.optionalNullable(s.string()),
  buyerAddress: s.optional(s.lazy(() => addressSchema)),
  _keysMap: {
    buyerEmail: "buyer_email",
    buyerPhoneNumber: "buyer_phone_number",
    buyerAddress: "buyer_address",
  },
});
