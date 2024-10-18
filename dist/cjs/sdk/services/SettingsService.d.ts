import { BaseAPI } from "./BaseApi";
declare class SettingsService extends BaseAPI {
    getStore(): Promise<{
        store?: {
            readonly id?: number | undefined;
            title?: string | undefined;
            cityname?: string | null | undefined;
            zipcode?: string | null | undefined;
            streetname?: string | null | undefined;
            streetno?: string | null | undefined;
            phone?: string | null | undefined;
            email?: string | null | undefined;
            readonly created?: string | undefined;
            countrydata?: {
                readonly code?: string | undefined;
                readonly currency?: string | undefined;
                readonly smsprice_dkk?: number | undefined;
                readonly smsprice_eur?: number | undefined;
                readonly eu?: boolean | undefined;
            } | undefined;
        } | undefined;
        readonly storeTimezone?: string | undefined;
        configs?: {
            key?: string | undefined;
            value?: string | null | undefined;
            description?: string | null | undefined;
        }[] | undefined;
        printDesk?: {
            derivedDevices?: {
                ip?: string | null | undefined;
                derivedStatus?: "active" | "disconnected" | null | undefined;
                deviceid?: string | null | undefined;
                port?: number | null | undefined;
                name?: string | null | undefined;
                ts?: string | null | undefined;
                platform?: "darwin" | "win32" | "linux" | null | undefined;
                printers?: {
                    name?: string | null | undefined;
                    description?: string | null | undefined;
                    id?: string | null | undefined;
                    status?: "active" | "unknown" | null | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
        appConfigs?: {
            economic_appPublicToken?: string | null | undefined;
            ReePayPublicKey?: string | null | undefined;
        } | undefined;
        customFields?: {
            key?: string | undefined;
            config?: string | undefined;
            requiredCustomerArticle?: boolean | undefined;
            label?: string | undefined;
        }[] | undefined;
        featureFlags?: {
            key?: string | undefined;
            value?: boolean | undefined;
        }[] | undefined;
        partners?: {
            viewstock?: {
                readonly id?: number | undefined;
                title?: string | undefined;
                cityname?: string | null | undefined;
                zipcode?: string | null | undefined;
                streetname?: string | null | undefined;
                streetno?: string | null | undefined;
                phone?: string | null | undefined;
                email?: string | null | undefined;
                readonly created?: string | undefined;
                countrydata?: {
                    readonly code?: string | undefined;
                    readonly currency?: string | undefined;
                    readonly smsprice_dkk?: number | undefined;
                    readonly smsprice_eur?: number | undefined;
                    readonly eu?: boolean | undefined;
                } | undefined;
            }[] | undefined;
            saveproduct?: {
                readonly id?: number | undefined;
                title?: string | undefined;
                cityname?: string | null | undefined;
                zipcode?: string | null | undefined;
                streetname?: string | null | undefined;
                streetno?: string | null | undefined;
                phone?: string | null | undefined;
                email?: string | null | undefined;
                readonly created?: string | undefined;
                countrydata?: {
                    readonly code?: string | undefined;
                    readonly currency?: string | undefined;
                    readonly smsprice_dkk?: number | undefined;
                    readonly smsprice_eur?: number | undefined;
                    readonly eu?: boolean | undefined;
                } | undefined;
            }[] | undefined;
            sharecustomer?: {
                readonly id?: number | undefined;
                title?: string | undefined;
                cityname?: string | null | undefined;
                zipcode?: string | null | undefined;
                streetname?: string | null | undefined;
                streetno?: string | null | undefined;
                phone?: string | null | undefined;
                email?: string | null | undefined;
                readonly created?: string | undefined;
                countrydata?: {
                    readonly code?: string | undefined;
                    readonly currency?: string | undefined;
                    readonly smsprice_dkk?: number | undefined;
                    readonly smsprice_eur?: number | undefined;
                    readonly eu?: boolean | undefined;
                } | undefined;
            }[] | undefined;
            inventorymove?: {
                readonly id?: number | undefined;
                title?: string | undefined;
                cityname?: string | null | undefined;
                zipcode?: string | null | undefined;
                streetname?: string | null | undefined;
                streetno?: string | null | undefined;
                phone?: string | null | undefined;
                email?: string | null | undefined;
                readonly created?: string | undefined;
                countrydata?: {
                    readonly code?: string | undefined;
                    readonly currency?: string | undefined;
                    readonly smsprice_dkk?: number | undefined;
                    readonly smsprice_eur?: number | undefined;
                    readonly eu?: boolean | undefined;
                } | undefined;
            }[] | undefined;
            sharecustomerarticle?: {
                readonly id?: number | undefined;
                title?: string | undefined;
                cityname?: string | null | undefined;
                zipcode?: string | null | undefined;
                streetname?: string | null | undefined;
                streetno?: string | null | undefined;
                phone?: string | null | undefined;
                email?: string | null | undefined;
                readonly created?: string | undefined;
                countrydata?: {
                    readonly code?: string | undefined;
                    readonly currency?: string | undefined;
                    readonly smsprice_dkk?: number | undefined;
                    readonly smsprice_eur?: number | undefined;
                    readonly eu?: boolean | undefined;
                } | undefined;
            }[] | undefined;
        } | undefined;
        shouldShowWebshopCheckbox?: boolean | undefined;
    }>;
}
export default SettingsService;
//# sourceMappingURL=SettingsService.d.ts.map