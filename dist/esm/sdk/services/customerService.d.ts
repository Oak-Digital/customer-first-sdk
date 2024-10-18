import { CustomerContent, CustomerUpdateBody } from "../types/customer";
import { BaseAPI } from "./BaseApi";
declare class CustomerService extends BaseAPI {
    searchCustomerByEmail(email: string): Promise<{
        content?: {
            readonly id?: number | undefined;
            readonly storeid?: number | undefined;
            readonly createddate?: string | null | undefined;
            name?: string | null | undefined;
            phone?: string | null | undefined;
            readonly phone_e164?: string | null | undefined;
            country?: string | null | undefined;
            email?: string | null | undefined;
            address?: string | null | undefined;
            city?: string | null | undefined;
            zipcode?: string | null | undefined;
            addr_country?: string | null | undefined;
            readonly lat?: number | null | undefined;
            readonly lng?: number | null | undefined;
            birthdate?: string | null | undefined;
            ean?: string | null | undefined;
            vat?: string | null | undefined;
            customerno?: string | null | undefined;
            economic_customernumber?: number | null | undefined;
            economic_balance?: number | null | undefined;
            balance?: number | null | undefined;
            note?: string | null | undefined;
            draft?: number | undefined;
            readonly deleted?: number | undefined;
            tags?: {
                title: string;
                id?: number | null | undefined;
                handle?: string | null | undefined;
            }[] | undefined;
            permission_marketing?: string | null | undefined;
            updated_at?: string | null | undefined;
            deleted_at?: string | null | undefined;
            readonly loyaltypointsbalance?: number | null | undefined;
            readonly loyalty_member_since?: string | null | undefined;
            readonly store?: {
                readonly id?: number | undefined;
                readonly title?: string | undefined;
            } | undefined;
        }[] | undefined;
        count?: number | null | undefined;
        hasMore?: boolean | undefined;
    }>;
    createCustomer(customerData: CustomerContent): Promise<{
        content?: {
            readonly id?: number | undefined;
            readonly storeid?: number | undefined;
            readonly createddate?: string | null | undefined;
            name?: string | null | undefined;
            phone?: string | null | undefined;
            readonly phone_e164?: string | null | undefined;
            country?: string | null | undefined;
            email?: string | null | undefined;
            address?: string | null | undefined;
            city?: string | null | undefined;
            zipcode?: string | null | undefined;
            addr_country?: string | null | undefined;
            readonly lat?: number | null | undefined;
            readonly lng?: number | null | undefined;
            birthdate?: string | null | undefined;
            ean?: string | null | undefined;
            vat?: string | null | undefined;
            customerno?: string | null | undefined;
            economic_customernumber?: number | null | undefined;
            economic_balance?: number | null | undefined;
            balance?: number | null | undefined;
            note?: string | null | undefined;
            draft?: number | undefined;
            readonly deleted?: number | undefined;
            tags?: {
                title: string;
                id?: number | null | undefined;
                handle?: string | null | undefined;
            }[] | undefined;
            permission_marketing?: string | null | undefined;
            updated_at?: string | null | undefined;
            deleted_at?: string | null | undefined;
            readonly loyaltypointsbalance?: number | null | undefined;
            readonly loyalty_member_since?: string | null | undefined;
            readonly store?: {
                readonly id?: number | undefined;
                readonly title?: string | undefined;
            } | undefined;
        } | undefined;
    }>;
    replaceCustomer(customerId: number, customerData: CustomerContent): Promise<{
        content?: {
            readonly id?: number | undefined;
            readonly storeid?: number | undefined;
            readonly createddate?: string | null | undefined;
            name?: string | null | undefined;
            phone?: string | null | undefined;
            readonly phone_e164?: string | null | undefined;
            country?: string | null | undefined;
            email?: string | null | undefined;
            address?: string | null | undefined;
            city?: string | null | undefined;
            zipcode?: string | null | undefined;
            addr_country?: string | null | undefined;
            readonly lat?: number | null | undefined;
            readonly lng?: number | null | undefined;
            birthdate?: string | null | undefined;
            ean?: string | null | undefined;
            vat?: string | null | undefined;
            customerno?: string | null | undefined;
            economic_customernumber?: number | null | undefined;
            economic_balance?: number | null | undefined;
            balance?: number | null | undefined;
            note?: string | null | undefined;
            draft?: number | undefined;
            readonly deleted?: number | undefined;
            tags?: {
                title: string;
                id?: number | null | undefined;
                handle?: string | null | undefined;
            }[] | undefined;
            permission_marketing?: string | null | undefined;
            updated_at?: string | null | undefined;
            deleted_at?: string | null | undefined;
            readonly loyaltypointsbalance?: number | null | undefined;
            readonly loyalty_member_since?: string | null | undefined;
            readonly store?: {
                readonly id?: number | undefined;
                readonly title?: string | undefined;
            } | undefined;
        } | undefined;
    }>;
    getOrCreateCustomer(customerData: CustomerContent): Promise<{
        readonly id?: number | undefined;
        readonly storeid?: number | undefined;
        readonly createddate?: string | null | undefined;
        name?: string | null | undefined;
        phone?: string | null | undefined;
        readonly phone_e164?: string | null | undefined;
        country?: string | null | undefined;
        email?: string | null | undefined;
        address?: string | null | undefined;
        city?: string | null | undefined;
        zipcode?: string | null | undefined;
        addr_country?: string | null | undefined;
        readonly lat?: number | null | undefined;
        readonly lng?: number | null | undefined;
        birthdate?: string | null | undefined;
        ean?: string | null | undefined;
        vat?: string | null | undefined;
        customerno?: string | null | undefined;
        economic_customernumber?: number | null | undefined;
        economic_balance?: number | null | undefined;
        balance?: number | null | undefined;
        note?: string | null | undefined;
        draft?: number | undefined;
        readonly deleted?: number | undefined;
        tags?: {
            title: string;
            id?: number | null | undefined;
            handle?: string | null | undefined;
        }[] | undefined;
        permission_marketing?: string | null | undefined;
        updated_at?: string | null | undefined;
        deleted_at?: string | null | undefined;
        readonly loyaltypointsbalance?: number | null | undefined;
        readonly loyalty_member_since?: string | null | undefined;
        readonly store?: {
            readonly id?: number | undefined;
            readonly title?: string | undefined;
        } | undefined;
    } | undefined>;
    createOrReplace(customerData: CustomerUpdateBody): Promise<{
        content?: {
            readonly id?: number | undefined;
            readonly storeid?: number | undefined;
            readonly createddate?: string | null | undefined;
            name?: string | null | undefined;
            phone?: string | null | undefined;
            readonly phone_e164?: string | null | undefined;
            country?: string | null | undefined;
            email?: string | null | undefined;
            address?: string | null | undefined;
            city?: string | null | undefined;
            zipcode?: string | null | undefined;
            addr_country?: string | null | undefined;
            readonly lat?: number | null | undefined;
            readonly lng?: number | null | undefined;
            birthdate?: string | null | undefined;
            ean?: string | null | undefined;
            vat?: string | null | undefined;
            customerno?: string | null | undefined;
            economic_customernumber?: number | null | undefined;
            economic_balance?: number | null | undefined;
            balance?: number | null | undefined;
            note?: string | null | undefined;
            draft?: number | undefined;
            readonly deleted?: number | undefined;
            tags?: {
                title: string;
                id?: number | null | undefined;
                handle?: string | null | undefined;
            }[] | undefined;
            permission_marketing?: string | null | undefined;
            updated_at?: string | null | undefined;
            deleted_at?: string | null | undefined;
            readonly loyaltypointsbalance?: number | null | undefined;
            readonly loyalty_member_since?: string | null | undefined;
            readonly store?: {
                readonly id?: number | undefined;
                readonly title?: string | undefined;
            } | undefined;
        } | undefined;
    }>;
}
export default CustomerService;
//# sourceMappingURL=customerService.d.ts.map