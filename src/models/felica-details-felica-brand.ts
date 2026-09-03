import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FelicaDetailsFelicaBrand = {
  Unknown: "UNKNOWN",
  FelicaId: "FELICA_ID",
  FelicaTransportation: "FELICA_TRANSPORTATION",
  FelicaQp: "FELICA_QP",
} as const;
export type FelicaDetailsFelicaBrand =
  | (typeof FelicaDetailsFelicaBrand)[keyof typeof FelicaDetailsFelicaBrand]
  | (string & {});

export const felicaDetailsFelicaBrandSchema: EnumSchema<FelicaDetailsFelicaBrand> =
  s.enumOf<FelicaDetailsFelicaBrand>(FelicaDetailsFelicaBrand);
