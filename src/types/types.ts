export interface IBrand{
    id: number,
    img: string,
    link: string,
}
export interface IProducts{
    id: number,
    images: string[],
    link: string,
    name: string,
    size: string,
    color: string,
    brand: string,
    article: string,
    release_date: string,
    price: number,
    price_stockX: string | null,
    price_goat: string | null,
    price_outofstock: string | null,
    price_poison: string | null,
}