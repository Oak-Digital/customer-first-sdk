import { BaseAPI } from "./BaseApi";
declare class UsersService extends BaseAPI {
    getUsers(): Promise<{
        content?: {
            readonly id?: number | undefined;
            name?: string | undefined;
            email?: string | null | undefined;
            amount?: number | undefined;
            shopuser?: 0 | 1 | undefined;
            apiuser?: 0 | 1 | undefined;
            readonly hasPasscode?: number | undefined;
            readonly hasPassword?: number | undefined;
            readonly apitoken?: string | null | undefined;
            restrictions?: ("POSBalanceModule" | "POSBalanceRead" | "OverviewModule" | "SettingsModule" | "StatisticsModule" | "ProductModule" | "POSModule" | "CustomerModule" | "AdminModule" | "CustomerEdit" | "CustomerDelete" | "CustomerArticleBulk" | "CustomerBulk" | "ProductCreate" | "ProductEdit" | "ProductDelete" | "ProductEditBulk" | "ProductEditStock" | "ProductEditCostprice" | "TaskModule" | "TaskCreate" | "TaskDelete" | "TaskEdit" | "SettingsUserRestrictions" | "ViewCostprice" | "GiftCardModule" | "GiftCardDelete" | "EditLoyaltyConfigs" | "AdjustLoyaltyBalance" | "OrderingProductsDeleteAll" | "PromotionsModule")[] | null | undefined;
            readonly deleted?: number | undefined;
            readonly mainuser?: number | undefined;
            showincalendar?: number | null | undefined;
            newauthuser?: number | null | undefined;
        }[] | undefined;
    }>;
}
export default UsersService;
//# sourceMappingURL=UsersService.d.ts.map