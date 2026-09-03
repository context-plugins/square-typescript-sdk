import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bankAccountCreatedEventObjectSchema,
  type BankAccountCreatedEventObject,
} from "./bank-account-created-event-object.js";

export type BankAccountCreatedEventData = {
  type?: string | null;
  id?: string;
  object?: BankAccountCreatedEventObject;
};

export const bankAccountCreatedEventDataSchema: Schema<BankAccountCreatedEventData> =
  s.object<BankAccountCreatedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => bankAccountCreatedEventObjectSchema)),
  });
