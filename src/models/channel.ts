import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { channelStatusSchema, type ChannelStatus } from "./channel-status.js";
import { referenceSchema, type Reference } from "./reference.js";

export type Channel = {
  /** The channel's unique ID. */
  id?: string;
  /** The unique ID of the merchant this channel belongs to. */
  merchantId?: string;
  /** The name of the channel. */
  name?: string | null;
  /** The version number which is incremented each time an update is made to the channel. */
  version?: number;
  reference?: Reference;
  status?: ChannelStatus;
  /**
   * The timestamp for when the channel was created, in RFC 3339 format (for example,
   * "2016-09-04T23:59:33.123Z"). For more information, see [Working with
   * Dates](https://developer.squareup.com/docs/build-basics/working-with-dates).
   */
  createdAt?: string;
  /**
   * The timestamp for when the channel was last updated, in RFC 3339 format (for example,
   * "2016-09-04T23:59:33.123Z"). For more information, see [Working with
   * Dates](https://developer.squareup.com/docs/build-basics/working-with-dates).
   */
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
