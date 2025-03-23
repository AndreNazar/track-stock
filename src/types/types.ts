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
  priceBuy: number
  priceSale: number
  dateBuy: string
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
  value: string | null
  img: string
}
export interface CardList {
  title: string
  value: string | null
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

export enum eContextMenuType {
  profit = "profit",
  analysisSize = "analysis-size",
  brands = "brands",
  statuses = "statuses",
  tg = "tg",
  vk = "vk",
  account = "account",
  country = "country",
  city = "city",
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

export type MenuType = "/inventory" | "/statistic" | "/account"

export enum eBrandKeys {
  adidas = "adidas",
  nike = "nike",
  newbalance = "newbalance",
  jordan = "jordan",
  asics = "asics",
  noname = "noname",
}

export type TBrandKeys = keyof typeof eBrandKeys

export enum eLocalTab{
  inventory = "inventory",
  sales = "sales"
}
export type ILocalTab = "inventory" | "sales"