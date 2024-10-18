"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartnerPermissionAccess = exports.TicketType = exports.TicketStatus = void 0;
var TicketStatus;
(function (TicketStatus) {
    TicketStatus["New"] = "new";
    TicketStatus["Ready"] = "ready";
    TicketStatus["Done"] = "done";
    TicketStatus["Awaiting"] = "awaiting";
    TicketStatus["Quote"] = "quote";
    TicketStatus["Draft"] = "draft";
})(TicketStatus = exports.TicketStatus || (exports.TicketStatus = {}));
var TicketType;
(function (TicketType) {
    TicketType["Repair"] = "repair";
    TicketType["Sale"] = "sale";
})(TicketType = exports.TicketType || (exports.TicketType = {}));
var PartnerPermissionAccess;
(function (PartnerPermissionAccess) {
    PartnerPermissionAccess["None"] = "none";
    PartnerPermissionAccess["ReadOnly"] = "readonly";
    PartnerPermissionAccess["Full"] = "full";
})(PartnerPermissionAccess = exports.PartnerPermissionAccess || (exports.PartnerPermissionAccess = {}));
//# sourceMappingURL=common.js.map