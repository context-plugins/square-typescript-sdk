import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChannelStatus = {
  Active: "ACTIVE",
  Inactive: "INACTIVE",
} as const;
export type ChannelStatus = (typeof ChannelStatus)[keyof typeof ChannelStatus] | (string & {});

export const channelStatusSchema: EnumSchema<ChannelStatus> = s.enumOf<ChannelStatus>(ChannelStatus);
