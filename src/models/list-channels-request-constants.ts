import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ListChannelsRequestConstants = {
  MaxPageSize: "MAX_PAGE_SIZE",
} as const;
export type ListChannelsRequestConstants =
  | (typeof ListChannelsRequestConstants)[keyof typeof ListChannelsRequestConstants]
  | (string & {});

export const listChannelsRequestConstantsSchema: EnumSchema<ListChannelsRequestConstants> =
  s.enumOf<ListChannelsRequestConstants>(ListChannelsRequestConstants);
