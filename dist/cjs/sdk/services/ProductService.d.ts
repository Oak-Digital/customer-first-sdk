import { listProducts, listProductsQueryParams, patchProductRequestBody, searchProducts } from "../types/product";
import { BaseAPI } from "./BaseApi";
declare class ProductService extends BaseAPI {
    searchProducts(queryParams?: listProductsQueryParams): Promise<searchProducts>;
    listProducts(queryParams?: listProductsQueryParams): Promise<listProducts>;
    getProduct(productId: number): Promise<{
        content?: {
            readonly id?: number | null | undefined;
            title?: string | undefined;
            productno?: string | undefined;
            barcode?: string | null | undefined;
            alternativebarcode?: string | null | undefined;
            serieno?: string | null | undefined;
            price?: number | null | undefined;
            readonly pricewithoutvat?: number | null | undefined;
            costprice?: number | null | undefined;
            recommendedretailprice?: number | null | undefined;
            stockno?: number | null | undefined;
            readonly previousstockno?: number | null | undefined;
            readonly stocknochangetype?: "absolute" | "relative" | null | undefined;
            stockmin?: number | null | undefined;
            stockmax?: number | null | undefined;
            readonly suppliername?: string | null | undefined;
            suppliers?: {
                readonly id?: number | null | undefined;
                name?: string | undefined;
                email?: string | null | undefined;
                customerno?: string | null | undefined;
                address?: string | null | undefined;
                city?: string | null | undefined;
                zipcode?: string | null | undefined;
                note?: string | null | undefined;
                handle?: string | null | undefined;
                accountnumber?: number | null | undefined;
            }[] | null | undefined;
            color?: string | null | undefined;
            styleno?: string | null | undefined;
            size?: string | null | undefined;
            brand?: string | null | undefined;
            vat?: number | null | undefined;
            readonly lastordered?: string | null | undefined;
            tags?: {
                title?: string | undefined;
                id?: number | null | undefined;
                accountno?: number | null | undefined;
                promotionfilter?: {
                    amount?: number | null | undefined;
                    date?: {
                        start?: string | null | undefined;
                        end?: string | null | undefined;
                    } | null | undefined;
                } | null | undefined;
                handle?: string | null | undefined;
                position?: number | null | undefined;
                positionafterid?: number | null | undefined;
                positionbeforeid?: number | null | undefined;
            }[] | undefined;
            customfield1?: string | null | undefined;
            customfield2?: string | null | undefined;
            customfield3?: string | null | undefined;
            customfield4?: string | null | undefined;
            readonly created?: string | null | undefined;
            readonly reservedstock?: number | null | undefined;
            readonly totalstock?: number | null | undefined;
            readonly totalavailablestock?: number | null | undefined;
            readonly tobeordered?: number | null | undefined;
            readonly onshoppinglist?: number | null | undefined;
            readonly ordered?: number | null | undefined;
            readonly needsordering?: number | null | undefined;
            discountprice?: number | null | undefined;
            readonly calculcatedvat?: number | null | undefined;
            webshopurl?: string | null | undefined;
            vatmode?: "normal" | "second_hand" | undefined;
            updated_at?: string | null | undefined;
            readonly storeid?: number | null | undefined;
            readonly image?: {
                readonly blurhash?: string | null | undefined;
                readonly preview_url?: string | undefined;
                readonly full_url?: string | undefined;
            } | undefined;
            availabletoorder?: number | undefined;
            syncproductdatawebshop?: boolean | null | undefined;
        } | undefined;
        allow_edit_productno_and_serieno?: boolean | null | undefined;
    }>;
    patchProduct(productId: number, body: patchProductRequestBody): Promise<{
        content?: {
            readonly id?: number | null | undefined;
            title?: string | undefined;
            productno?: string | undefined;
            barcode?: string | null | undefined;
            alternativebarcode?: string | null | undefined;
            serieno?: string | null | undefined;
            price?: number | null | undefined;
            readonly pricewithoutvat?: number | null | undefined;
            costprice?: number | null | undefined;
            recommendedretailprice?: number | null | undefined;
            stockno?: number | null | undefined;
            readonly previousstockno?: number | null | undefined;
            readonly stocknochangetype?: "absolute" | "relative" | null | undefined;
            stockmin?: number | null | undefined;
            stockmax?: number | null | undefined;
            readonly suppliername?: string | null | undefined;
            suppliers?: {
                readonly id?: number | null | undefined;
                name?: string | undefined;
                email?: string | null | undefined;
                customerno?: string | null | undefined;
                address?: string | null | undefined;
                city?: string | null | undefined;
                zipcode?: string | null | undefined;
                note?: string | null | undefined;
                handle?: string | null | undefined;
                accountnumber?: number | null | undefined;
            }[] | null | undefined;
            color?: string | null | undefined;
            styleno?: string | null | undefined;
            size?: string | null | undefined;
            brand?: string | null | undefined;
            vat?: number | null | undefined;
            readonly lastordered?: string | null | undefined;
            tags?: {
                title?: string | undefined;
                id?: number | null | undefined;
                accountno?: number | null | undefined;
                promotionfilter?: {
                    amount?: number | null | undefined;
                    date?: {
                        start?: string | null | undefined;
                        end?: string | null | undefined;
                    } | null | undefined;
                } | null | undefined;
                handle?: string | null | undefined;
                position?: number | null | undefined;
                positionafterid?: number | null | undefined;
                positionbeforeid?: number | null | undefined;
            }[] | undefined;
            customfield1?: string | null | undefined;
            customfield2?: string | null | undefined;
            customfield3?: string | null | undefined;
            customfield4?: string | null | undefined;
            readonly created?: string | null | undefined;
            readonly reservedstock?: number | null | undefined;
            readonly totalstock?: number | null | undefined;
            readonly totalavailablestock?: number | null | undefined;
            readonly tobeordered?: number | null | undefined;
            readonly onshoppinglist?: number | null | undefined;
            readonly ordered?: number | null | undefined;
            readonly needsordering?: number | null | undefined;
            discountprice?: number | null | undefined;
            readonly calculcatedvat?: number | null | undefined;
            webshopurl?: string | null | undefined;
            vatmode?: "normal" | "second_hand" | undefined;
            updated_at?: string | null | undefined;
            readonly storeid?: number | null | undefined;
            readonly image?: {
                readonly blurhash?: string | null | undefined;
                readonly preview_url?: string | undefined;
                readonly full_url?: string | undefined;
            } | undefined;
            availabletoorder?: number | undefined;
            syncproductdatawebshop?: boolean | null | undefined;
        } | undefined;
        allow_edit_productno_and_serieno?: boolean | null | undefined;
    }>;
}
export default ProductService;
//# sourceMappingURL=ProductService.d.ts.map