import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  bulkRetrieveBookingsRequestSchema,
  type BulkRetrieveBookingsRequest,
} from "../models/bulk-retrieve-bookings-request.js";
import {
  bulkRetrieveBookingsResponseSchema,
  type BulkRetrieveBookingsResponse,
} from "../models/bulk-retrieve-bookings-response.js";
import {
  bulkRetrieveTeamMemberBookingProfilesRequestSchema,
  type BulkRetrieveTeamMemberBookingProfilesRequest,
} from "../models/bulk-retrieve-team-member-booking-profiles-request.js";
import {
  bulkRetrieveTeamMemberBookingProfilesResponseSchema,
  type BulkRetrieveTeamMemberBookingProfilesResponse,
} from "../models/bulk-retrieve-team-member-booking-profiles-response.js";
import { cancelBookingRequestSchema, type CancelBookingRequest } from "../models/cancel-booking-request.js";
import {
  cancelBookingResponseSchema,
  type CancelBookingResponse,
} from "../models/cancel-booking-response.js";
import { createBookingRequestSchema, type CreateBookingRequest } from "../models/create-booking-request.js";
import {
  createBookingResponseSchema,
  type CreateBookingResponse,
} from "../models/create-booking-response.js";
import { listBookingsResponseSchema, type ListBookingsResponse } from "../models/list-bookings-response.js";
import {
  listLocationBookingProfilesResponseSchema,
  type ListLocationBookingProfilesResponse,
} from "../models/list-location-booking-profiles-response.js";
import {
  listTeamMemberBookingProfilesResponseSchema,
  type ListTeamMemberBookingProfilesResponse,
} from "../models/list-team-member-booking-profiles-response.js";
import {
  retrieveBookingResponseSchema,
  type RetrieveBookingResponse,
} from "../models/retrieve-booking-response.js";
import {
  retrieveBusinessBookingProfileResponseSchema,
  type RetrieveBusinessBookingProfileResponse,
} from "../models/retrieve-business-booking-profile-response.js";
import {
  retrieveLocationBookingProfileResponseSchema,
  type RetrieveLocationBookingProfileResponse,
} from "../models/retrieve-location-booking-profile-response.js";
import {
  retrieveTeamMemberBookingProfileResponseSchema,
  type RetrieveTeamMemberBookingProfileResponse,
} from "../models/retrieve-team-member-booking-profile-response.js";
import {
  searchAvailabilityRequestSchema,
  type SearchAvailabilityRequest,
} from "../models/search-availability-request.js";
import {
  searchAvailabilityResponseSchema,
  type SearchAvailabilityResponse,
} from "../models/search-availability-response.js";
import { updateBookingRequestSchema, type UpdateBookingRequest } from "../models/update-booking-request.js";
import {
  updateBookingResponseSchema,
  type UpdateBookingResponse,
} from "../models/update-booking-response.js";
import type { Servers } from "../servers.js";

export class Bookings {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  bulkRetrieveBookings(
    request: Bookings.BulkRetrieveBookingsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkRetrieveBookingsResponse, ResponseError> {
    return this.#rawClient.execute<BulkRetrieveBookingsResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/bookings/bulk-retrieve"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: bulkRetrieveBookingsRequestSchema },
      },
      {
        success: { kind: "json", schema: bulkRetrieveBookingsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  bulkRetrieveTeamMemberBookingProfiles(
    request: Bookings.BulkRetrieveTeamMemberBookingProfilesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<BulkRetrieveTeamMemberBookingProfilesResponse, ResponseError> {
    return this.#rawClient.execute<BulkRetrieveTeamMemberBookingProfilesResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/bookings/team-member-booking-profiles/bulk-retrieve"),
        auth: this.#auth.oauth2,
        body: {
          kind: "json",
          value: request.body,
          schema: bulkRetrieveTeamMemberBookingProfilesRequestSchema,
        },
      },
      {
        success: { kind: "json", schema: bulkRetrieveTeamMemberBookingProfilesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  cancelBooking(
    request: Bookings.CancelBookingRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CancelBookingResponse, ResponseError> {
    return this.#rawClient.execute<CancelBookingResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/bookings/{booking_id}/cancel"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "booking_id", value: request.bookingId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: cancelBookingRequestSchema },
      },
      {
        success: { kind: "json", schema: cancelBookingResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createBooking(
    request: Bookings.CreateBookingRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateBookingResponse, ResponseError> {
    return this.#rawClient.execute<CreateBookingResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/bookings"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: createBookingRequestSchema },
      },
      {
        success: { kind: "json", schema: createBookingResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listBookings(
    request: Bookings.ListBookingsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListBookingsResponse, ResponseError> {
    return this.#rawClient.execute<ListBookingsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/bookings"),
        auth: this.#auth.oauth2,
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "customer_id", value: request.customerId, schema: s.optional(s.string()) },
          { name: "team_member_id", value: request.teamMemberId, schema: s.optional(s.string()) },
          { name: "location_id", value: request.locationId, schema: s.optional(s.string()) },
          { name: "start_at_min", value: request.startAtMin, schema: s.optional(s.string()) },
          { name: "start_at_max", value: request.startAtMax, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listBookingsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listLocationBookingProfiles(
    request: Bookings.ListLocationBookingProfilesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListLocationBookingProfilesResponse, ResponseError> {
    return this.#rawClient.execute<ListLocationBookingProfilesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/bookings/location-booking-profiles"),
        auth: this.#auth.oauth2,
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listLocationBookingProfilesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listTeamMemberBookingProfiles(
    request: Bookings.ListTeamMemberBookingProfilesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTeamMemberBookingProfilesResponse, ResponseError> {
    return this.#rawClient.execute<ListTeamMemberBookingProfilesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/bookings/team-member-booking-profiles"),
        auth: this.#auth.oauth2,
        query: [
          { name: "bookable_only", value: request.bookableOnly, schema: s.defaulted(s.boolean(), false) },
          { name: "limit", value: request.limit, schema: s.optional(s.number()) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "location_id", value: request.locationId, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTeamMemberBookingProfilesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveBooking(
    request: Bookings.RetrieveBookingRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveBookingResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveBookingResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/bookings/{booking_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "booking_id", value: request.bookingId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveBookingResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveBusinessBookingProfile(
    options?: RequestOptions,
  ): ApiPromise<RetrieveBusinessBookingProfileResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveBusinessBookingProfileResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/bookings/business-booking-profile"),
        auth: this.#auth.oauth2,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveBusinessBookingProfileResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveLocationBookingProfile(
    request: Bookings.RetrieveLocationBookingProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveLocationBookingProfileResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveLocationBookingProfileResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/bookings/location-booking-profiles/{location_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "location_id", value: request.locationId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveLocationBookingProfileResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  retrieveTeamMemberBookingProfile(
    request: Bookings.RetrieveTeamMemberBookingProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrieveTeamMemberBookingProfileResponse, ResponseError> {
    return this.#rawClient.execute<RetrieveTeamMemberBookingProfileResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/v2/bookings/team-member-booking-profiles/{team_member_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "team_member_id", value: request.teamMemberId, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrieveTeamMemberBookingProfileResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  searchAvailability(
    request: Bookings.SearchAvailabilityRequestParams,
    options?: RequestOptions,
  ): ApiPromise<SearchAvailabilityResponse, ResponseError> {
    return this.#rawClient.execute<SearchAvailabilityResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/v2/bookings/availability/search"),
        auth: this.#auth.oauth2,
        body: { kind: "json", value: request.body, schema: searchAvailabilityRequestSchema },
      },
      {
        success: { kind: "json", schema: searchAvailabilityResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateBooking(
    request: Bookings.UpdateBookingRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateBookingResponse, ResponseError> {
    return this.#rawClient.execute<UpdateBookingResponse, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default("/v2/bookings/{booking_id}"),
        auth: this.#auth.oauth2,
        pathParams: [{ name: "booking_id", value: request.bookingId, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateBookingRequestSchema },
      },
      {
        success: { kind: "json", schema: updateBookingResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Bookings {
  export type BulkRetrieveBookingsRequestParams = {
    body: BulkRetrieveBookingsRequest;
  };

  export type BulkRetrieveTeamMemberBookingProfilesRequestParams = {
    body: BulkRetrieveTeamMemberBookingProfilesRequest;
  };

  export type CancelBookingRequestParams = {
    bookingId: string;
    body: CancelBookingRequest;
  };

  export type CreateBookingRequestParams = {
    body: CreateBookingRequest;
  };

  export type ListBookingsRequest = {
    limit?: number;
    cursor?: string;
    customerId?: string;
    teamMemberId?: string;
    locationId?: string;
    startAtMin?: string;
    startAtMax?: string;
  };

  export type ListLocationBookingProfilesRequest = {
    limit?: number;
    cursor?: string;
  };

  export type ListTeamMemberBookingProfilesRequest = {
    bookableOnly?: boolean;
    limit?: number;
    cursor?: string;
    locationId?: string;
  };

  export type RetrieveBookingRequest = {
    bookingId: string;
  };

  export type RetrieveLocationBookingProfileRequest = {
    locationId: string;
  };

  export type RetrieveTeamMemberBookingProfileRequest = {
    teamMemberId: string;
  };

  export type SearchAvailabilityRequestParams = {
    body: SearchAvailabilityRequest;
  };

  export type UpdateBookingRequestParams = {
    bookingId: string;
    body: UpdateBookingRequest;
  };
}
