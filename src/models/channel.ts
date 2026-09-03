import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { channelStatusSchema, type ChannelStatus } from "./channel-status.js";
import { referenceSchema, type Reference } from "./reference.js";

export type Channel = {
  id?: string;
  merchantId?: string;
  name?: string | null;
  version?: number;
  reference?: Reference;
  status?: ChannelStatus;
  createdAt?: string;
  updatedAt?: string;
};

export const channelSchema: Schema<Channel> = s.object<Channel>({
  id: s.optional(s.string()),
  merchantId: s.optional(s.string()),
  name: s.optionalNullable(s.string()),
  version: s.optional(s.number()),
  reference: s.optional(s.lazy(() => referenceSchema)),
  status: s.optional(s.lazy(() => channelStatusSchema)),
  createdAt: s.optional(s.string()),
  updatedAt: s.optional(s.string()),
  _keysMap: {
    merchantId: "merchant_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
