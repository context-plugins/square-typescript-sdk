import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { componentComponentTypeSchema, type ComponentComponentType } from "./component-component-type.js";
import {
  deviceComponentDetailsApplicationDetailsSchema,
  type DeviceComponentDetailsApplicationDetails,
} from "./device-component-details-application-details.js";
import {
  deviceComponentDetailsBatteryDetailsSchema,
  type DeviceComponentDetailsBatteryDetails,
} from "./device-component-details-battery-details.js";
import {
  deviceComponentDetailsCardReaderDetailsSchema,
  type DeviceComponentDetailsCardReaderDetails,
} from "./device-component-details-card-reader-details.js";
import {
  deviceComponentDetailsEthernetDetailsSchema,
  type DeviceComponentDetailsEthernetDetails,
} from "./device-component-details-ethernet-details.js";
import {
  deviceComponentDetailsWiFiDetailsSchema,
  type DeviceComponentDetailsWiFiDetails,
} from "./device-component-details-wi-fi-details.js";

export type Component = {
  type: ComponentComponentType;
  applicationDetails?: DeviceComponentDetailsApplicationDetails;
  cardReaderDetails?: DeviceComponentDetailsCardReaderDetails;
  batteryDetails?: DeviceComponentDetailsBatteryDetails;
  wifiDetails?: DeviceComponentDetailsWiFiDetails;
  ethernetDetails?: DeviceComponentDetailsEthernetDetails;
};

export const componentSchema: Schema<Component> = s.object<Component>({
  type: componentComponentTypeSchema,
  applicationDetails: s.optional(s.lazy(() => deviceComponentDetailsApplicationDetailsSchema)),
  cardReaderDetails: s.optional(s.lazy(() => deviceComponentDetailsCardReaderDetailsSchema)),
  batteryDetails: s.optional(s.lazy(() => deviceComponentDetailsBatteryDetailsSchema)),
  wifiDetails: s.optional(s.lazy(() => deviceComponentDetailsWiFiDetailsSchema)),
  ethernetDetails: s.optional(s.lazy(() => deviceComponentDetailsEthernetDetailsSchema)),
  _keysMap: {
    applicationDetails: "application_details",
    cardReaderDetails: "card_reader_details",
    batteryDetails: "battery_details",
    wifiDetails: "wifi_details",
    ethernetDetails: "ethernet_details",
  },
});
