  import adidas_logo from "../assets/imgs/brands/adidas.png"
  import nike_logo from "../assets/imgs/brands/nike.png"
  import newbalance_logo from "../assets/imgs/brands/newbalance.png"
  import jordan_logo from "../assets/imgs/brands/jordan.png"
  import asics_logo from "../assets/imgs/brands/asics.png"
  import balenciaga_logo from "../assets/imgs/brands/Balenciaga-logo.svg"
  import bottega_veneta from "../assets/imgs/brands/bottega-veneta.png"
  import brioni from "../assets/imgs/brands/brioni.png"
  import brown_university from "../assets/imgs/brands/brown-university.png"
  import brunello_cucinelli from "../assets/imgs/brands/brunello-cucinelli.png"
  import burberry from "../assets/imgs/brands/Burberry-logo.svg"
  import c_p_company from "../assets/imgs/brands/c-p-company.png"
  import cartier from "../assets/imgs/brands/Cartier-logo.svg"
  import celine from "../assets/imgs/brands/celine.png"
  import Chanel from "../assets/imgs/brands/Chanel-logo.svg"
  import christian_dior from "../assets/imgs/brands/christian-dior.png"
  import chrome_hearts from "../assets/imgs/brands/chrome-hearts.png"
  import coach from "../assets/imgs/brands/coach.png"
  import Converse from "../assets/imgs/brands/Converse-logo.svg"
  import diadora from "../assets/imgs/brands/diadora.png"
  import diesel from "../assets/imgs/brands/diesel.png"
  import dr_martens from "../assets/imgs/brands/dr-martens.png"
  import free_basics from "../assets/imgs/brands/Free-Basics-logo.svg"
  import Gucci from "../assets/imgs/brands/Gucci-logo.svg"
  import hermes from "../assets/imgs/brands/hermes.png"
  import louis_vuitton from "../assets/imgs/brands/Louis-Vuitton-logo.svg"
  import mcq from "../assets/imgs/brands/mcq-alexander-mcqueen.png"
  import miu_miu from "../assets/imgs/brands/Miu-Miu-logo.svg"
  import palace from "../assets/imgs/brands/palace.png"
  import palm_angels from "../assets/imgs/brands/palm-angels.png"
  import pinko from "../assets/imgs/brands/pinko.png"
  import prada from "../assets/imgs/brands/prada.png"
  import puma from "../assets/imgs/brands/puma.png"
  import ralph_lauren from "../assets/imgs/brands/ralph-lauren.png"
  import Reebok from "../assets/imgs/brands/Reebok-logo.svg"
  import rick_owens from "../assets/imgs/brands/rick-owens.png"
  import stone_island from "../assets/imgs/brands/stone-island.png"
  import supreme from "../assets/imgs/brands/supreme.png"
  import tnf from "../assets/imgs/brands/the-north-face.png"
  import tiffany from "../assets/imgs/brands/Tiffany__Co.-Logo.svg"
  import tom_ford from "../assets/imgs/brands/tom-ford.png"
  import ugg from "../assets/imgs/brands/ugg.png"
  import valentino from "../assets/imgs/brands/valentino.png"
  import vans from "../assets/imgs/brands/vans.png"
  import no_logo from "../assets/imgs/brands/nologo.png"
import { eBrandKeys, TBrandKeys } from "../types/types"
  
  export default function getBrandImage(name: TBrandKeys):string {
    switch(name) {
      case eBrandKeys.adidas:
        return adidas_logo
      case eBrandKeys.nike:
        return nike_logo
      case eBrandKeys.nike:
        return newbalance_logo
      case eBrandKeys.newbalance:
        return jordan_logo
      case eBrandKeys.asics:
        return asics_logo
      default:
        return no_logo
    }
  }