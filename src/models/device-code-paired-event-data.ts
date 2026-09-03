import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  deviceCodePairedEventObjectSchema,
  type DeviceCodePairedEventObject,
} from "./device-code-paired-event-object.js";

export type DeviceCodePairedEventData = {
  type?: string | null;
  id?: string;
  object?: DeviceCodePairedEventObject;
};

export const deviceCodePairedEventDataSchema: Schema<DeviceCodePairedEventData> =
  s.object<DeviceCodePairedEventData>({
    type: s.optionalNullable(s.string()),
    id: s.optional(s.string()),
    object: s.optional(s.lazy(() => deviceCodePairedEventObjectSchema)),
  });
