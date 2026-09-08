import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the country associated with another entity, such as a business. Values are in [ISO
 * 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm).
 */
export const Country = {
  /** Unknown */
  Zz: "ZZ",
  /** Andorra */
  Ad: "AD",
  /** United Arab Emirates */
  Ae: "AE",
  /** Afghanistan */
  Af: "AF",
  /** Antigua and Barbuda */
  Ag: "AG",
  /** Anguilla */
  Ai: "AI",
  /** Albania */
  Al: "AL",
  /** Armenia */
  Am: "AM",
  /** Angola */
  Ao: "AO",
  /** Antartica */
  Aq: "AQ",
  /** Argentina */
  Ar: "AR",
  /** American Samoa */
  As: "AS",
  /** Austria */
  At: "AT",
  /** Australia */
  Au: "AU",
  /** Aruba */
  Aw: "AW",
  /** Åland Islands */
  Ax: "AX",
  /** Azerbaijan */
  Az: "AZ",
  /** Bosnia and Herzegovina */
  Ba: "BA",
  /** Barbados */
  Bb: "BB",
  /** Bangladesh */
  Bd: "BD",
  /** Belgium */
  Be: "BE",
  /** Burkina Faso */
  Bf: "BF",
  /** Bulgaria */
  Bg: "BG",
  /** Bahrain */
  Bh: "BH",
  /** Burundi */
  Bi: "BI",
  /** Benin */
  Bj: "BJ",
  /** Saint Barthélemy */
  Bl: "BL",
  /** Bermuda */
  Bm: "BM",
  /** Brunei */
  Bn: "BN",
  /** Bolivia */
  Bo: "BO",
  /** Bonaire */
  Bq: "BQ",
  /** Brazil */
  Br: "BR",
  /** Bahamas */
  Bs: "BS",
  /** Bhutan */
  Bt: "BT",
  /** Bouvet Island */
  Bv: "BV",
  /** Botswana */
  Bw: "BW",
  /** Belarus */
  By: "BY",
  /** Belize */
  Bz: "BZ",
  /** Canada */
  Ca: "CA",
  /** Cocos Islands */
  Cc: "CC",
  /** Democratic Republic of the Congo */
  Cd: "CD",
  /** Central African Republic */
  Cf: "CF",
  /** Congo */
  Cg: "CG",
  /** Switzerland */
  Ch: "CH",
  /** Ivory Coast */
  Ci: "CI",
  /** Cook Islands */
  Ck: "CK",
  /** Chile */
  Cl: "CL",
  /** Cameroon */
  Cm: "CM",
  /** China */
  Cn: "CN",
  /** Colombia */
  Co: "CO",
  /** Costa Rica */
  Cr: "CR",
  /** Cuba */
  Cu: "CU",
  /** Cabo Verde */
  Cv: "CV",
  /** Curaçao */
  Cw: "CW",
  /** Christmas Island */
  Cx: "CX",
  /** Cyprus */
  Cy: "CY",
  /** Czechia */
  Cz: "CZ",
  /** Germany */
  De: "DE",
  /** Djibouti */
  Dj: "DJ",
  /** Denmark */
  Dk: "DK",
  /** Dominica */
  Dm: "DM",
  /** Dominican Republic */
  Do: "DO",
  /** Algeria */
  Dz: "DZ",
  /** Ecuador */
  Ec: "EC",
  /** Estonia */
  Ee: "EE",
  /** Egypt */
  Eg: "EG",
  /** Western Sahara */
  Eh: "EH",
  /** Eritrea */
  Er: "ER",
  /** Spain */
  Es: "ES",
  /** Ethiopia */
  Et: "ET",
  /** Finland */
  Fi: "FI",
  /** Fiji */
  Fj: "FJ",
  /** Falkland Islands */
  Fk: "FK",
  /** Federated States of Micronesia */
  Fm: "FM",
  /** Faroe Islands */
  Fo: "FO",
  /** France */
  Fr: "FR",
  /** Gabon */
  Ga: "GA",
  /** United Kingdom */
  Gb: "GB",
  /** Grenada */
  Gd: "GD",
  /** Georgia */
  Ge: "GE",
  /** French Guiana */
  Gf: "GF",
  /** Guernsey */
  Gg: "GG",
  /** Ghana */
  Gh: "GH",
  /** Gibraltar */
  Gi: "GI",
  /** Greenland */
  Gl: "GL",
  /** Gambia */
  Gm: "GM",
  /** Guinea */
  Gn: "GN",
  /** Guadeloupe */
  Gp: "GP",
  /** Equatorial Guinea */
  Gq: "GQ",
  /** Greece */
  Gr: "GR",
  /** South Georgia and the South Sandwich Islands */
  Gs: "GS",
  /** Guatemala */
  Gt: "GT",
  /** Guam */
  Gu: "GU",
  /** Guinea-Bissau */
  Gw: "GW",
  /** Guyana */
  Gy: "GY",
  /** Hong Kong */
  Hk: "HK",
  /** Heard Island and McDonald Islands */
  Hm: "HM",
  /** Honduras */
  Hn: "HN",
  /** Croatia */
  Hr: "HR",
  /** Haiti */
  Ht: "HT",
  /** Hungary */
  Hu: "HU",
  /** Indonesia */
  Id: "ID",
  /** Ireland */
  Ie: "IE",
  /** Israel */
  Il: "IL",
  /** Isle of Man */
  Im: "IM",
  /** India */
  In: "IN",
  /** British Indian Ocean Territory */
  Io: "IO",
  /** Iraq */
  Iq: "IQ",
  /** Iran */
  Ir: "IR",
  /** Iceland */
  Is: "IS",
  /** Italy */
  It: "IT",
  /** Jersey */
  Je: "JE",
  /** Jamaica */
  Jm: "JM",
  /** Jordan */
  Jo: "JO",
  /** Japan */
  Jp: "JP",
  /** Kenya */
  Ke: "KE",
  /** Kyrgyzstan */
  Kg: "KG",
  /** Cambodia */
  Kh: "KH",
  /** Kiribati */
  Ki: "KI",
  /** Comoros */
  Km: "KM",
  /** Saint Kitts and Nevis */
  Kn: "KN",
  /** Democratic People's Republic of Korea */
  Kp: "KP",
  /** Republic of Korea */
  Kr: "KR",
  /** Kuwait */
  Kw: "KW",
  /** Cayman Islands */
  Ky: "KY",
  /** Kazakhstan */
  Kz: "KZ",
  /** Lao People's Democratic Republic */
  La: "LA",
  /** Lebanon */
  Lb: "LB",
  /** Saint Lucia */
  Lc: "LC",
  /** Liechtenstein */
  Li: "LI",
  /** Sri Lanka */
  Lk: "LK",
  /** Liberia */
  Lr: "LR",
  /** Lesotho */
  Ls: "LS",
  /** Lithuania */
  Lt: "LT",
  /** Luxembourg */
  Lu: "LU",
  /** Latvia */
  Lv: "LV",
  /** Libya */
  Ly: "LY",
  /** Morocco */
  Ma: "MA",
  /** Monaco */
  Mc: "MC",
  /** Moldova */
  Md: "MD",
  /** Montenegro */
  Me: "ME",
  /** Saint Martin */
  Mf: "MF",
  /** Madagascar */
  Mg: "MG",
  /** Marshall Islands */
  Mh: "MH",
  /** North Macedonia */
  Mk: "MK",
  /** Mali */
  Ml: "ML",
  /** Myanmar */
  Mm: "MM",
  /** Mongolia */
  Mn: "MN",
  /** Macao */
  Mo: "MO",
  /** Northern Mariana Islands */
  Mp: "MP",
  /** Martinique */
  Mq: "MQ",
  /** Mauritania */
  Mr: "MR",
  /** Montserrat */
  Ms: "MS",
  /** Malta */
  Mt: "MT",
  /** Mauritius */
  Mu: "MU",
  /** Maldives */
  Mv: "MV",
  /** Malawi */
  Mw: "MW",
  /** Mexico */
  Mx: "MX",
  /** Malaysia */
  My: "MY",
  /** Mozambique */
  Mz: "MZ",
  /** Namibia */
  Na: "NA",
  /** New Caledonia */
  Nc: "NC",
  /** Niger */
  Ne: "NE",
  /** Norfolk Island */
  Nf: "NF",
  /** Nigeria */
  Ng: "NG",
  /** Nicaragua */
  Ni: "NI",
  /** Netherlands */
  Nl: "NL",
  /** Norway */
  No: "NO",
  /** Nepal */
  Np: "NP",
  /** Nauru */
  Nr: "NR",
  /** Niue */
  Nu: "NU",
  /** New Zealand */
  Nz: "NZ",
  /** Oman */
  Om: "OM",
  /** Panama */
  Pa: "PA",
  /** Peru */
  Pe: "PE",
  /** French Polynesia */
  Pf: "PF",
  /** Papua New Guinea */
  Pg: "PG",
  /** Philippines */
  Ph: "PH",
  /** Pakistan */
  Pk: "PK",
  /** Poland */
  Pl: "PL",
  /** Saint Pierre and Miquelon */
  Pm: "PM",
  /** Pitcairn */
  Pn: "PN",
  /** Puerto Rico */
  Pr: "PR",
  /** Palestine */
  Ps: "PS",
  /** Portugal */
  Pt: "PT",
  /** Palau */
  Pw: "PW",
  /** Paraguay */
  Py: "PY",
  /** Qatar */
  Qa: "QA",
  /** Réunion */
  Re: "RE",
  /** Romania */
  Ro: "RO",
  /** Serbia */
  Rs: "RS",
  /** Russia */
  Ru: "RU",
  /** Rwanda */
  Rw: "RW",
  /** Saudi Arabia */
  Sa: "SA",
  /** Solomon Islands */
  Sb: "SB",
  /** Seychelles */
  Sc: "SC",
  /** Sudan */
  Sd: "SD",
  /** Sweden */
  Se: "SE",
  /** Singapore */
  Sg: "SG",
  /** Saint Helena, Ascension and Tristan da Cunha */
  Sh: "SH",
  /** Slovenia */
  Si: "SI",
  /** Svalbard and Jan Mayen */
  Sj: "SJ",
  /** Slovakia */
  Sk: "SK",
  /** Sierra Leone */
  Sl: "SL",
  /** San Marino */
  Sm: "SM",
  /** Senegal */
  Sn: "SN",
  /** Somalia */
  So: "SO",
  /** Suriname */
  Sr: "SR",
  /** South Sudan */
  Ss: "SS",
  /** Sao Tome and Principe */
  St: "ST",
  /** El Salvador */
  Sv: "SV",
  /** Sint Maarten */
  Sx: "SX",
  /** Syrian Arab Republic */
  Sy: "SY",
  /** Eswatini */
  Sz: "SZ",
  /** Turks and Caicos Islands */
  Tc: "TC",
  /** Chad */
  Td: "TD",
  /** French Southern Territories */
  Tf: "TF",
  /** Togo */
  Tg: "TG",
  /** Thailand */
  Th: "TH",
  /** Tajikistan */
  Tj: "TJ",
  /** Tokelau */
  Tk: "TK",
  /** Timor-Leste */
  Tl: "TL",
  /** Turkmenistan */
  Tm: "TM",
  /** Tunisia */
  Tn: "TN",
  /** Tonga */
  To: "TO",
  /** Turkey */
  Tr: "TR",
  /** Trinidad and Tobago */
  Tt: "TT",
  /** Tuvalu */
  Tv: "TV",
  /** Taiwan */
  Tw: "TW",
  /** Tanzania */
  Tz: "TZ",
  /** Ukraine */
  Ua: "UA",
  /** Uganda */
  Ug: "UG",
  /** United States Minor Outlying Islands */
  Um: "UM",
  /** United States of America */
  Us: "US",
  /** Uruguay */
  Uy: "UY",
  /** Uzbekistan */
  Uz: "UZ",
  /** Vatican City */
  Va: "VA",
  /** Saint Vincent and the Grenadines */
  Vc: "VC",
  /** Venezuela */
  Ve: "VE",
  /** British Virgin Islands */
  Vg: "VG",
  /** U.S. Virgin Islands */
  Vi: "VI",
  /** Vietnam */
  Vn: "VN",
  /** Vanuatu */
  Vu: "VU",
  /** Wallis and Futuna */
  Wf: "WF",
  /** Samoa */
  Ws: "WS",
  /** Yemen */
  Ye: "YE",
  /** Mayotte */
  Yt: "YT",
  /** South Africa */
  Za: "ZA",
  /** Zambia */
  Zm: "ZM",
  /** Zimbabwe */
  Zw: "ZW",
} as const;
export type Country = (typeof Country)[keyof typeof Country] | (string & {});

export const countrySchema: EnumSchema<Country> = s.enumOf<Country>(Country);
