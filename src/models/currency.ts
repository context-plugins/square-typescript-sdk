import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the associated currency for an amount of money. Values correspond to [ISO
 * 4217](https://wikipedia.org/wiki/ISO_4217).
 */
export const Currency = {
  /** Unknown currency */
  UnknownCurrency: "UNKNOWN_CURRENCY",
  /** United Arab Emirates dirham */
  Aed: "AED",
  /** Afghan afghani */
  Afn: "AFN",
  /** Albanian lek */
  All: "ALL",
  /** Armenian dram */
  Amd: "AMD",
  /** Netherlands Antillean guilder */
  Ang: "ANG",
  /** Angolan kwanza */
  Aoa: "AOA",
  /** Argentine peso */
  Ars: "ARS",
  /** Australian dollar */
  Aud: "AUD",
  /** Aruban florin */
  Awg: "AWG",
  /** Azerbaijani manat */
  Azn: "AZN",
  /** Bosnia and Herzegovina convertible mark */
  Bam: "BAM",
  /** Barbados dollar */
  Bbd: "BBD",
  /** Bangladeshi taka */
  Bdt: "BDT",
  /** Bulgarian lev */
  Bgn: "BGN",
  /** Bahraini dinar */
  Bhd: "BHD",
  /** Burundian franc */
  Bif: "BIF",
  /** Bermudian dollar */
  Bmd: "BMD",
  /** Brunei dollar */
  Bnd: "BND",
  /** Boliviano */
  Bob: "BOB",
  /** Bolivian Mvdol */
  Bov: "BOV",
  /** Brazilian real */
  Brl: "BRL",
  /** Bahamian dollar */
  Bsd: "BSD",
  /** Bhutanese ngultrum */
  Btn: "BTN",
  /** Botswana pula */
  Bwp: "BWP",
  /** Belarusian ruble */
  Byr: "BYR",
  /** Belize dollar */
  Bzd: "BZD",
  /** Canadian dollar */
  Cad: "CAD",
  /** Congolese franc */
  Cdf: "CDF",
  /** WIR Euro */
  Che: "CHE",
  /** Swiss franc */
  Chf: "CHF",
  /** WIR Franc */
  Chw: "CHW",
  /** Unidad de Fomento */
  Clf: "CLF",
  /** Chilean peso */
  Clp: "CLP",
  /** Chinese yuan */
  Cny: "CNY",
  /** Colombian peso */
  Cop: "COP",
  /** Unidad de Valor Real */
  Cou: "COU",
  /** Costa Rican colon */
  Crc: "CRC",
  /** Cuban convertible peso */
  Cuc: "CUC",
  /** Cuban peso */
  Cup: "CUP",
  /** Cape Verdean escudo */
  Cve: "CVE",
  /** Czech koruna */
  Czk: "CZK",
  /** Djiboutian franc */
  Djf: "DJF",
  /** Danish krone */
  Dkk: "DKK",
  /** Dominican peso */
  Dop: "DOP",
  /** Algerian dinar */
  Dzd: "DZD",
  /** Egyptian pound */
  Egp: "EGP",
  /** Eritrean nakfa */
  Ern: "ERN",
  /** Ethiopian birr */
  Etb: "ETB",
  /** Euro */
  Eur: "EUR",
  /** Fiji dollar */
  Fjd: "FJD",
  /** Falkland Islands pound */
  Fkp: "FKP",
  /** Pound sterling */
  Gbp: "GBP",
  /** Georgian lari */
  Gel: "GEL",
  /** Ghanaian cedi */
  Ghs: "GHS",
  /** Gibraltar pound */
  Gip: "GIP",
  /** Gambian dalasi */
  Gmd: "GMD",
  /** Guinean franc */
  Gnf: "GNF",
  /** Guatemalan quetzal */
  Gtq: "GTQ",
  /** Guyanese dollar */
  Gyd: "GYD",
  /** Hong Kong dollar */
  Hkd: "HKD",
  /** Honduran lempira */
  Hnl: "HNL",
  /** Croatian kuna */
  Hrk: "HRK",
  /** Haitian gourde */
  Htg: "HTG",
  /** Hungarian forint */
  Huf: "HUF",
  /** Indonesian rupiah */
  Idr: "IDR",
  /** Israeli new shekel */
  Ils: "ILS",
  /** Indian rupee */
  Inr: "INR",
  /** Iraqi dinar */
  Iqd: "IQD",
  /** Iranian rial */
  Irr: "IRR",
  /** Icelandic króna */
  Isk: "ISK",
  /** Jamaican dollar */
  Jmd: "JMD",
  /** Jordanian dinar */
  Jod: "JOD",
  /** Japanese yen */
  Jpy: "JPY",
  /** Kenyan shilling */
  Kes: "KES",
  /** Kyrgyzstani som */
  Kgs: "KGS",
  /** Cambodian riel */
  Khr: "KHR",
  /** Comoro franc */
  Kmf: "KMF",
  /** North Korean won */
  Kpw: "KPW",
  /** South Korean won */
  Krw: "KRW",
  /** Kuwaiti dinar */
  Kwd: "KWD",
  /** Cayman Islands dollar */
  Kyd: "KYD",
  /** Kazakhstani tenge */
  Kzt: "KZT",
  /** Lao kip */
  Lak: "LAK",
  /** Lebanese pound */
  Lbp: "LBP",
  /** Sri Lankan rupee */
  Lkr: "LKR",
  /** Liberian dollar */
  Lrd: "LRD",
  /** Lesotho loti */
  Lsl: "LSL",
  /** Lithuanian litas */
  Ltl: "LTL",
  /** Latvian lats */
  Lvl: "LVL",
  /** Libyan dinar */
  Lyd: "LYD",
  /** Moroccan dirham */
  Mad: "MAD",
  /** Moldovan leu */
  Mdl: "MDL",
  /** Malagasy ariary */
  Mga: "MGA",
  /** Macedonian denar */
  Mkd: "MKD",
  /** Myanmar kyat */
  Mmk: "MMK",
  /** Mongolian tögrög */
  Mnt: "MNT",
  /** Macanese pataca */
  Mop: "MOP",
  /** Mauritanian ouguiya */
  Mro: "MRO",
  /** Mauritian rupee */
  Mur: "MUR",
  /** Maldivian rufiyaa */
  Mvr: "MVR",
  /** Malawian kwacha */
  Mwk: "MWK",
  /** Mexican peso */
  Mxn: "MXN",
  /** Mexican Unidad de Inversion */
  Mxv: "MXV",
  /** Malaysian ringgit */
  Myr: "MYR",
  /** Mozambican metical */
  Mzn: "MZN",
  /** Namibian dollar */
  Nad: "NAD",
  /** Nigerian naira */
  Ngn: "NGN",
  /** Nicaraguan córdoba */
  Nio: "NIO",
  /** Norwegian krone */
  Nok: "NOK",
  /** Nepalese rupee */
  Npr: "NPR",
  /** New Zealand dollar */
  Nzd: "NZD",
  /** Omani rial */
  Omr: "OMR",
  /** Panamanian balboa */
  Pab: "PAB",
  /** Peruvian sol */
  Pen: "PEN",
  /** Papua New Guinean kina */
  Pgk: "PGK",
  /** Philippine peso */
  Php: "PHP",
  /** Pakistani rupee */
  Pkr: "PKR",
  /** Polish złoty */
  Pln: "PLN",
  /** Paraguayan guaraní */
  Pyg: "PYG",
  /** Qatari riyal */
  Qar: "QAR",
  /** Romanian leu */
  Ron: "RON",
  /** Serbian dinar */
  Rsd: "RSD",
  /** Russian ruble */
  Rub: "RUB",
  /** Rwandan franc */
  Rwf: "RWF",
  /** Saudi riyal */
  Sar: "SAR",
  /** Solomon Islands dollar */
  Sbd: "SBD",
  /** Seychelles rupee */
  Scr: "SCR",
  /** Sudanese pound */
  Sdg: "SDG",
  /** Swedish krona */
  Sek: "SEK",
  /** Singapore dollar */
  Sgd: "SGD",
  /** Saint Helena pound */
  Shp: "SHP",
  /** Sierra Leonean first leone */
  Sll: "SLL",
  /** Sierra Leonean second leone */
  Sle: "SLE",
  /** Somali shilling */
  Sos: "SOS",
  /** Surinamese dollar */
  Srd: "SRD",
  /** South Sudanese pound */
  Ssp: "SSP",
  /** São Tomé and Príncipe dobra */
  Std: "STD",
  /** Salvadoran colón */
  Svc: "SVC",
  /** Syrian pound */
  Syp: "SYP",
  /** Swazi lilangeni */
  Szl: "SZL",
  /** Thai baht */
  Thb: "THB",
  /** Tajikstani somoni */
  Tjs: "TJS",
  /** Turkmenistan manat */
  Tmt: "TMT",
  /** Tunisian dinar */
  Tnd: "TND",
  /** Tongan pa'anga */
  Top: "TOP",
  /** Turkish lira */
  Try: "TRY",
  /** Trinidad and Tobago dollar */
  Ttd: "TTD",
  /** New Taiwan dollar */
  Twd: "TWD",
  /** Tanzanian shilling */
  Tzs: "TZS",
  /** Ukrainian hryvnia */
  Uah: "UAH",
  /** Ugandan shilling */
  Ugx: "UGX",
  /** United States dollar */
  Usd: "USD",
  /** United States dollar (next day) */
  Usn: "USN",
  /** United States dollar (same day) */
  Uss: "USS",
  /** Uruguay Peso en Unidedades Indexadas */
  Uyi: "UYI",
  /** Uruguyan peso */
  Uyu: "UYU",
  /** Uzbekistan som */
  Uzs: "UZS",
  /** Venezuelan bolívar soberano */
  Vef: "VEF",
  /** Vietnamese đồng */
  Vnd: "VND",
  /** Vanuatu vatu */
  Vuv: "VUV",
  /** Samoan tala */
  Wst: "WST",
  /** CFA franc BEAC */
  Xaf: "XAF",
  /** Silver */
  Xag: "XAG",
  /** Gold */
  Xau: "XAU",
  /** European Composite Unit */
  Xba: "XBA",
  /** European Monetary Unit */
  Xbb: "XBB",
  /** European Unit of Account 9 */
  Xbc: "XBC",
  /** European Unit of Account 17 */
  Xbd: "XBD",
  /** East Caribbean dollar */
  Xcd: "XCD",
  /** Special drawing rights (International Monetary Fund) */
  Xdr: "XDR",
  /** CFA franc BCEAO */
  Xof: "XOF",
  /** Palladium */
  Xpd: "XPD",
  /** CFP franc */
  Xpf: "XPF",
  /** Platinum */
  Xpt: "XPT",
  /** Code reserved for testing */
  Xts: "XTS",
  /** No currency */
  Xxx: "XXX",
  /** Yemeni rial */
  Yer: "YER",
  /** South African rand */
  Zar: "ZAR",
  /** Zambian kwacha */
  Zmk: "ZMK",
  /** Zambian kwacha */
  Zmw: "ZMW",
  /** Bitcoin */
  Btc: "BTC",
  /** USD Coin */
  Xus: "XUS",
} as const;
export type Currency = (typeof Currency)[keyof typeof Currency] | (string & {});

export const currencySchema: EnumSchema<Currency> = s.enumOf<Currency>(Currency);
