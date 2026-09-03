import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  customerDeletedEventEventContextMergeSchema,
  type CustomerDeletedEventEventContextMerge,
} from "./customer-deleted-event-event-context-merge.js";

export type CustomerDeletedEventEventContext = {
  merge?: CustomerDeletedEventEventContextMerge;
};

export const customerDeletedEventEventContextSchema: Schema<CustomerDeletedEventEventContext> =
  s.object<CustomerDeletedEventEventContext>({
    merge: s.optional(s.lazy(() => customerDeletedEventEventContextMergeSchema)),
  });
