import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ComponentComponentType = {
  Application: "APPLICATION",
  CardReader: "CARD_READER",
  Battery: "BATTERY",
  Wifi: "WIFI",
  Ethernet: "ETHERNET",
  Printer: "PRINTER",
} as const;
export type ComponentComponentType =
  | (typeof ComponentComponentType)[keyof typeof ComponentComponentType]
  | (string & {});

export const componentComponentTypeSchema: EnumSchema<ComponentComponentType> =
  s.enumOf<ComponentComponentType>(ComponentComponentType);
