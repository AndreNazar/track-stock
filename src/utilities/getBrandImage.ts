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
  import chanel from "../assets/imgs/brands/Chanel-logo.svg"
  import christian_dior from "../assets/imgs/brands/christian-dior.png"
  import chrome_hearts from "../assets/imgs/brands/chrome-hearts.png"
  import coach from "../assets/imgs/brands/coach.png"
  import converse from "../assets/imgs/brands/Converse-logo.svg"
  import diadora from "../assets/imgs/brands/diadora.png"
  import diesel from "../assets/imgs/brands/diesel.png"
  import dr_martens from "../assets/imgs/brands/dr-martens.png"
  import free_basics from "../assets/imgs/brands/Free-Basics-logo.svg"
  import gucci from "../assets/imgs/brands/Gucci-logo.svg"
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
  import reebok from "../assets/imgs/brands/Reebok-logo.svg"
  import rick_owens from "../assets/imgs/brands/rick-owens.png"
  import stone_island from "../assets/imgs/brands/stone-island.png"
  import supreme from "../assets/imgs/brands/supreme.png"
  import tnf from "../assets/imgs/brands/the-north-face.png"
  import tiffany from "../assets/imgs/brands/Tiffany__Co.-Logo.svg"
  import tom_ford from "../assets/imgs/brands/tom-ford.png"
  import ugg from "../assets/imgs/brands/ugg.png"
  import valentino from "../assets/imgs/brands/valentino.png"
  import vans from "../assets/imgs/brands/vans.png"
  import native from "../assets/imgs/brands/native.png"
  import goyard from "../assets/imgs/brands/goyard.png"
  import vancleef from "../assets/imgs/brands/van_cleef.png"
  import longchamp from "../assets/imgs/brands/longchamp_logo.png"
  import rhode from "../assets/imgs/brands/rhode.webp"
  import loropiana from "../assets/imgs/brands/loropiana.png"
  import kaws from "../assets/imgs/brands/kaws.png"
  import bearbrick from "../assets/imgs/brands/BEARBRICK.webp"
  import off_white from "../assets/imgs/brands/off-white.png"
  import saint_laurent from "../assets/imgs/brands/saint-laurent.png"
  import jacquemus from "../assets/imgs/brands/jacquemus.png"
  import travis_scott from "../assets/imgs/brands/travis-scott.png"
  import cactus_jack from "../assets/imgs/brands/cactus_jack.svg"
  import kiton from "../assets/imgs/brands/kiton_logo.png"
  import stefano_ricci from "../assets/imgs/brands/stefano_ricci.png"
  import zilli from "../assets/imgs/brands/zilli.png"
  import mastermind from "../assets/imgs/brands/mastermind.png"
  import gosha_rubchinskiy from "../assets/imgs/brands/gosha.png"

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
      case eBrandKeys.balenciaga:
        return balenciaga_logo
      case eBrandKeys.bottega_veneta:
        return bottega_veneta
      case eBrandKeys.brioni:
        return brioni
      case eBrandKeys.brown_university:
        return brown_university
      case eBrandKeys.brunello_cucinelli:
        return brunello_cucinelli
      case eBrandKeys.burberry:
        return burberry
      case eBrandKeys.c_p_company:
        return c_p_company
      case eBrandKeys.cartier:
        return cartier
      case eBrandKeys.celine:
        return celine
      case eBrandKeys.chanel:
        return chanel
      case eBrandKeys.christian_dior:
        return christian_dior
      case eBrandKeys.chrome_hearts:
        return chrome_hearts
      case eBrandKeys.coach:
        return coach
      case eBrandKeys.converse:
        return converse
      case eBrandKeys.diadora:
        return diadora
      case eBrandKeys.diesel:
        return diesel
      case eBrandKeys.dr_martens:
        return dr_martens
      case eBrandKeys.free_basics:
        return free_basics
      case eBrandKeys.gucci:
        return gucci
      case eBrandKeys.hermes:
        return hermes
      case eBrandKeys.louis_vuitton:
        return louis_vuitton
      case eBrandKeys.mcq:
        return mcq
      case eBrandKeys.miu_miu:
        return miu_miu
      case eBrandKeys.palace:
        return palace
      case eBrandKeys.palm_angels:
        return palm_angels
      case eBrandKeys.pinko:
        return pinko
      case eBrandKeys.prada:
        return prada
      case eBrandKeys.puma:
        return puma
      case eBrandKeys.ralph_lauren:
        return ralph_lauren
      case eBrandKeys.reebok:
        return reebok
      case eBrandKeys.rick_owens:
        return rick_owens
      case eBrandKeys.stone_island:
        return stone_island
      case eBrandKeys.supreme:
        return supreme
      case eBrandKeys.tnf:
        return tnf
      case eBrandKeys.tiffany:
        return tiffany
      case eBrandKeys.tom_ford:
        return tom_ford
      case eBrandKeys.ugg:
        return ugg
      case eBrandKeys.valentino:
        return valentino
      case eBrandKeys.vans:
        return vans
      case eBrandKeys.native:
        return native
      case eBrandKeys.goyard:
        return goyard
      case eBrandKeys.vancleef:
        return vancleef
      case eBrandKeys.longchamp:
        return longchamp
      case eBrandKeys.rhode:
        return rhode
      case eBrandKeys.loropiana:
        return loropiana
      case eBrandKeys.kaws:
        return kaws
      case eBrandKeys.bearbrick:
        return bearbrick
      case eBrandKeys.off_white:
        return off_white
      case eBrandKeys.saint_laurent:
        return saint_laurent
      case eBrandKeys.jacquemus:
        return jacquemus
      case eBrandKeys.travis_scott:
        return travis_scott
      case eBrandKeys.cactus_jack:
        return cactus_jack
      case eBrandKeys.kiton:
        return kiton
      case eBrandKeys.stefano_ricci:
        return stefano_ricci
      case eBrandKeys.zilli:
        return zilli
      case eBrandKeys.mastermind:
        return mastermind
      case eBrandKeys.gosha_rubchinskiy:
        return gosha_rubchinskiy
      default:
        return no_logo
    }
  }