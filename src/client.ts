import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import { DEFAULT_CLIENT_OPTIONS, type ClientOptions } from "./client-options.js";
import { RawClient } from "./core/raw-client.js";
import { ApplePay } from "./resources/apple-pay.js";
import { BankAccounts } from "./resources/bank-accounts.js";
import { BookingCustomAttributes } from "./resources/booking-custom-attributes.js";
import { Bookings } from "./resources/bookings.js";
import { Cards } from "./resources/cards.js";
import { CashDrawers } from "./resources/cash-drawers.js";
import { Catalog } from "./resources/catalog.js";
import { Channels } from "./resources/channels.js";
import { CheckoutApi } from "./resources/checkout-api.js";
import { CustomerCustomAttributes } from "./resources/customer-custom-attributes.js";
import { CustomerGroups } from "./resources/customer-groups.js";
import { CustomerSegments } from "./resources/customer-segments.js";
import { Customers } from "./resources/customers.js";
import { Devices } from "./resources/devices.js";
import { Disputes } from "./resources/disputes.js";
import { Employees } from "./resources/employees.js";
import { Events } from "./resources/events.js";
import { GiftCardActivities } from "./resources/gift-card-activities.js";
import { GiftCards } from "./resources/gift-cards.js";
import { Inventory } from "./resources/inventory.js";
import { Invoices } from "./resources/invoices.js";
import { Labor } from "./resources/labor.js";
import { LocationCustomAttributes } from "./resources/location-custom-attributes.js";
import { Locations } from "./resources/locations.js";
import { Loyalty } from "./resources/loyalty.js";
import { MerchantCustomAttributes } from "./resources/merchant-custom-attributes.js";
import { Merchants } from "./resources/merchants.js";
import { OAuth } from "./resources/oauth.js";
import { OrderCustomAttributes } from "./resources/order-custom-attributes.js";
import { Orders } from "./resources/orders.js";
import { Payments } from "./resources/payments.js";
import { Payouts } from "./resources/payouts.js";
import { Refunds } from "./resources/refunds.js";
import { Sites } from "./resources/sites.js";
import { Snippets } from "./resources/snippets.js";
import { Subscriptions } from "./resources/subscriptions.js";
import { Team } from "./resources/team.js";
import { Terminal } from "./resources/terminal.js";
import { Transactions } from "./resources/transactions.js";
import { TransferOrderApi } from "./resources/transfer-order-api.js";
import { V1Transactions } from "./resources/v1-transactions.js";
import { Vendors } from "./resources/vendors.js";
import { WebhookSubscriptions } from "./resources/webhook-subscriptions.js";
import { buildServers, type Servers } from "./servers.js";

export class SquareClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #oAuth?: OAuth;
  #v1Transactions?: V1Transactions;
  #applePay?: ApplePay;
  #bankAccounts?: BankAccounts;
  #bookings?: Bookings;
  #bookingCustomAttributes?: BookingCustomAttributes;
  #cards?: Cards;
  #cashDrawers?: CashDrawers;
  #catalog?: Catalog;
  #channels?: Channels;
  #customers?: Customers;
  #customerCustomAttributes?: CustomerCustomAttributes;
  #customerGroups?: CustomerGroups;
  #customerSegments?: CustomerSegments;
  #devices?: Devices;
  #disputes?: Disputes;
  #employees?: Employees;
  #events?: Events;
  #giftCards?: GiftCards;
  #giftCardActivities?: GiftCardActivities;
  #inventory?: Inventory;
  #invoices?: Invoices;
  #labor?: Labor;
  #locations?: Locations;
  #locationCustomAttributes?: LocationCustomAttributes;
  #checkoutApi?: CheckoutApi;
  #transactions?: Transactions;
  #loyalty?: Loyalty;
  #merchants?: Merchants;
  #merchantCustomAttributes?: MerchantCustomAttributes;
  #orders?: Orders;
  #orderCustomAttributes?: OrderCustomAttributes;
  #payments?: Payments;
  #payouts?: Payouts;
  #refunds?: Refunds;
  #sites?: Sites;
  #snippets?: Snippets;
  #subscriptions?: Subscriptions;
  #team?: Team;
  #terminal?: Terminal;
  #transferOrderApi?: TransferOrderApi;
  #vendors?: Vendors;
  #webhookSubscriptions?: WebhookSubscriptions;

  constructor(clientOptions: Partial<ClientOptions> = {}) {
    const options = { ...DEFAULT_CLIENT_OPTIONS, ...clientOptions };

    this.#rawClient = new RawClient({
      timeout: options.timeout,
      defaultHeaders: [],
      defaultQuery: [],
      defaultPathParams: [],
      fetch: options.fetch,
    });

    this.#servers = buildServers(options.serverEnvironment, options.serverOptions);

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  get oAuth(): OAuth {
    return (this.#oAuth ??= new OAuth(this.#rawClient, this.#servers, this.#auth));
  }

  get v1Transactions(): V1Transactions {
    return (this.#v1Transactions ??= new V1Transactions(this.#rawClient, this.#servers, this.#auth));
  }

  get applePay(): ApplePay {
    return (this.#applePay ??= new ApplePay(this.#rawClient, this.#servers, this.#auth));
  }

  get bankAccounts(): BankAccounts {
    return (this.#bankAccounts ??= new BankAccounts(this.#rawClient, this.#servers, this.#auth));
  }

  get bookings(): Bookings {
    return (this.#bookings ??= new Bookings(this.#rawClient, this.#servers, this.#auth));
  }

  get bookingCustomAttributes(): BookingCustomAttributes {
    return (this.#bookingCustomAttributes ??= new BookingCustomAttributes(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get cards(): Cards {
    return (this.#cards ??= new Cards(this.#rawClient, this.#servers, this.#auth));
  }

  get cashDrawers(): CashDrawers {
    return (this.#cashDrawers ??= new CashDrawers(this.#rawClient, this.#servers, this.#auth));
  }

  get catalog(): Catalog {
    return (this.#catalog ??= new Catalog(this.#rawClient, this.#servers, this.#auth));
  }

  get channels(): Channels {
    return (this.#channels ??= new Channels(this.#rawClient, this.#servers, this.#auth));
  }

  get customers(): Customers {
    return (this.#customers ??= new Customers(this.#rawClient, this.#servers, this.#auth));
  }

  get customerCustomAttributes(): CustomerCustomAttributes {
    return (this.#customerCustomAttributes ??= new CustomerCustomAttributes(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get customerGroups(): CustomerGroups {
    return (this.#customerGroups ??= new CustomerGroups(this.#rawClient, this.#servers, this.#auth));
  }

  get customerSegments(): CustomerSegments {
    return (this.#customerSegments ??= new CustomerSegments(this.#rawClient, this.#servers, this.#auth));
  }

  get devices(): Devices {
    return (this.#devices ??= new Devices(this.#rawClient, this.#servers, this.#auth));
  }

  get disputes(): Disputes {
    return (this.#disputes ??= new Disputes(this.#rawClient, this.#servers, this.#auth));
  }

  get employees(): Employees {
    return (this.#employees ??= new Employees(this.#rawClient, this.#servers, this.#auth));
  }

  get events(): Events {
    return (this.#events ??= new Events(this.#rawClient, this.#servers, this.#auth));
  }

  get giftCards(): GiftCards {
    return (this.#giftCards ??= new GiftCards(this.#rawClient, this.#servers, this.#auth));
  }

  get giftCardActivities(): GiftCardActivities {
    return (this.#giftCardActivities ??= new GiftCardActivities(this.#rawClient, this.#servers, this.#auth));
  }

  get inventory(): Inventory {
    return (this.#inventory ??= new Inventory(this.#rawClient, this.#servers, this.#auth));
  }

  get invoices(): Invoices {
    return (this.#invoices ??= new Invoices(this.#rawClient, this.#servers, this.#auth));
  }

  get labor(): Labor {
    return (this.#labor ??= new Labor(this.#rawClient, this.#servers, this.#auth));
  }

  get locations(): Locations {
    return (this.#locations ??= new Locations(this.#rawClient, this.#servers, this.#auth));
  }

  get locationCustomAttributes(): LocationCustomAttributes {
    return (this.#locationCustomAttributes ??= new LocationCustomAttributes(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get checkoutApi(): CheckoutApi {
    return (this.#checkoutApi ??= new CheckoutApi(this.#rawClient, this.#servers, this.#auth));
  }

  get transactions(): Transactions {
    return (this.#transactions ??= new Transactions(this.#rawClient, this.#servers, this.#auth));
  }

  get loyalty(): Loyalty {
    return (this.#loyalty ??= new Loyalty(this.#rawClient, this.#servers, this.#auth));
  }

  get merchants(): Merchants {
    return (this.#merchants ??= new Merchants(this.#rawClient, this.#servers, this.#auth));
  }

  get merchantCustomAttributes(): MerchantCustomAttributes {
    return (this.#merchantCustomAttributes ??= new MerchantCustomAttributes(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get orders(): Orders {
    return (this.#orders ??= new Orders(this.#rawClient, this.#servers, this.#auth));
  }

  get orderCustomAttributes(): OrderCustomAttributes {
    return (this.#orderCustomAttributes ??= new OrderCustomAttributes(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get payments(): Payments {
    return (this.#payments ??= new Payments(this.#rawClient, this.#servers, this.#auth));
  }

  get payouts(): Payouts {
    return (this.#payouts ??= new Payouts(this.#rawClient, this.#servers, this.#auth));
  }

  get refunds(): Refunds {
    return (this.#refunds ??= new Refunds(this.#rawClient, this.#servers, this.#auth));
  }

  get sites(): Sites {
    return (this.#sites ??= new Sites(this.#rawClient, this.#servers, this.#auth));
  }

  get snippets(): Snippets {
    return (this.#snippets ??= new Snippets(this.#rawClient, this.#servers, this.#auth));
  }

  get subscriptions(): Subscriptions {
    return (this.#subscriptions ??= new Subscriptions(this.#rawClient, this.#servers, this.#auth));
  }

  get team(): Team {
    return (this.#team ??= new Team(this.#rawClient, this.#servers, this.#auth));
  }

  get terminal(): Terminal {
    return (this.#terminal ??= new Terminal(this.#rawClient, this.#servers, this.#auth));
  }

  get transferOrderApi(): TransferOrderApi {
    return (this.#transferOrderApi ??= new TransferOrderApi(this.#rawClient, this.#servers, this.#auth));
  }

  get vendors(): Vendors {
    return (this.#vendors ??= new Vendors(this.#rawClient, this.#servers, this.#auth));
  }

  get webhookSubscriptions(): WebhookSubscriptions {
    return (this.#webhookSubscriptions ??= new WebhookSubscriptions(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }
}
