export interface IBrand {
  id: number
  img: string
  link: string
}
export interface IProducts {
  id: number
  image: string | null
  name: string
  color: string
  brand: string
  article: string
  avg_price: string
  price_stockX: string | null
  price_goat: string | null
  price_poison: string | null
  priceBuy: number | null
  priceSale: number | null
  dateBuy: string
  dateSale: string
  condition: string
  sizeUS: string
  sizeUK: string
  sizeEU: string
  city: string
  placeOfTransaction: string
  checkedFitting: boolean
  inStore: boolean
  isSale: boolean
}

export enum eBrandKeys {
    id = "id",
    image = "image",
    name = "name",
    color = "color",
    brand = "brand",
    article = "article",
    price_stockX = "price_stockX",
    price_goat = "price_goat",
    price_poison = "price_poison",
    priceBuy = "priceBuy",
    priceSale = "priceSale",
    dateBuy = "dateBuy",
    condition = "condition",
    sizeUS = "sizeUS",
    sizeUK = "sizeUK",
    sizeEU = "sizeEU",
    city = "city",
    placeOfTransaction = "placeOfTransaction",
    checkedFitting = "checkedFitting",
    
}

export interface ISearchProducts {
  id: number
  name: string
  image: string
  link: string
  article: string
}

export interface InfoList {
  title: string
  value: string | number | null
  img: string
}
export interface CardList {
  title: string
  value: string | number | null
}
export interface IProductSalesTab {
  type: string
  title: string
  active: boolean
}

export interface ICard {
  number: string
  date: string
}

export interface IServiceBlock {
  onClick: () => void
  isSelect: boolean
  img: string
  title: string
  text: string
}

export interface IBrandsSelect {
  id: number
  name: string
  selected: boolean
}

export interface IDataSelect {
  id: number
  name: string
  selected: boolean
}


export interface SneakersLot {
  id?: number
  brand: string;
  city: string;
  place: string;
  condition: string;
  uk_size: number;
  us_size: number;
  eu_size: number;
  price: number;
  fitting: boolean;
  article: string;
  purchase_price: number;
  purchase_date: string;
}

export interface IAccount {
  name: string
  lastname: string
  nickname: string
  email: string
  vk_link: string
  showVK: boolean
  showTG: boolean
}

export enum eContextMenuType {
  profit = "profit",
  analysisSize = "analysisSize",
  brands = "brands",
  statuses = "statuses",
  tg = "tg",
  vk = "vk",
  account = "account",
  country = "country",
  city = "city",
  sort = "sort",
}

export type ContextMenuType = keyof typeof eContextMenuType

export interface IContextBlock {
  title: string
  list: string[]
  top: number
  left: number
  width: number
  firstClick: boolean
  type: ContextMenuType
}
export interface ICalendarData {
  date: string
  isOpen: boolean
}

export type MenuType = "/inventory" | "/statistic" | "/account"
export type IStatus = "success" | "warning" | "error" | "info"

export enum eBrandKeys {
  adidas = "adidas",
  nike = "nike",
  newbalance = "newbalance",
  jordan = "jordan",
  asics = "asics",
  balenciaga = "balenciaga",
  bottega_veneta = "bottega_veneta",
  brioni = "brioni",
  brown_university = "brown_university",
  brunello_cucinelli = "brunello_cucinelli",
  burberry = "burberry",
  c_p_company = "c_p_company",
  cartier = "cartier",
  celine = "celine",
  chanel = "chanel",
  christian_dior = "christian_dior",
  chrome_hearts = "chrome_hearts",
  coach = "coach",
  converse = "converse",
  diadora = "diadora",
  diesel = "diesel",
  dr_martens = "dr_martens",
  free_basics = "free_basics",
  gucci = "gucci",
  hermes = "hermes",
  louis_vuitton = "louis_vuitton",
  miu_miu = "miu_miu",
  mcq = "mcq",
  palace = "palace",
  prada = "prada",
  ralph_lauren = "ralph_lauren",
  reebok = "reebok",
  puma = "puma",
  pinko = "pinko",
  palm_angels = "palm_angels",
  rick_owens = "rick_owens",
  stone_island = "stone_island",
  supreme = "supreme",
  tnf = "tnf",
  tiffany = "tiffany",
  tom_ford = "tom_ford",
  ugg = "ugg",
  valentino = "valentino",
  vans = "vans",
  noname = "noname",
  native = "native",
  goyard = "goyard",
  vancleef = "vancleef",
  longchamp = "longchamp",
  rhode = "rhode",
  loropiana = "loropiana",
  kaws = "kaws",
  bearbrick = "bearbrick",
  off_white = "off_white",
  saint_laurent = "saint_laurent",
  jacquemus = "jacquemus",
  travis_scott = "travis_scott",
  cactus_jack = "cactus_jack",
  kiton = "kiton",
  stefano_ricci = "stefano_ricci",
  zilli = "zilli",
  mastermind = "mastermind",
  gosha_rubchinskiy = "gosha_rubchinskiy",
}

export type TBrandKeys = keyof typeof eBrandKeys

export enum eLocalTab{
  inventory = "inventory",
  sales = "sales"
}
export type ILocalTab = "inventory" | "sales"