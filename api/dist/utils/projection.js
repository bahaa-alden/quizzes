"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectedFields = void 0;
const selectedFields = (fields = '') => {
    const fieldsObject = {};
    fields.split(',').forEach((field) => {
        fieldsObject[field] = 1;
    });
    fieldsObject['createdAt'] = 1;
    fieldsObject['updatedAt'] = 1;
    return fieldsObject;
};
exports.selectedFields = selectedFields;
//# sourceMappingURL=projection.js.map