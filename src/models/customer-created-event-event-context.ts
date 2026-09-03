import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customerCreatedEventEventContextMergeSchema,
  type CustomerCreatedEventEventContextMerge,
} from "./customer-created-event-event-context-merge.js";

export type CustomerCreatedEventEventContext = {
  merge?: CustomerCreatedEventEventContextMerge;
};

export const customerCreatedEventEventContextSchema: Schema<CustomerCreatedEventEventContext> =
  s.object<CustomerCreatedEventEventContext>({
    merge: s.optional(s.lazy(() => customerCreatedEventEventContextMergeSchema)),
  });
