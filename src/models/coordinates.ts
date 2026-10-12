import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Latitude and longitude coordinates. */
export type Coordinates = {
  /** The latitude of the coordinate expressed in degrees. */
  latitude?: number | null;
  /** The longitude of the coordinate expressed in degrees. */
  longitude?: number | null;
};

export const coordinatesSchema: Schema<Coordinates> = s.object<Coordinates>({
  latitude: s.optionalNullable(s.float64()),
  longitude: s.optionalNullable(s.float64()),
});
