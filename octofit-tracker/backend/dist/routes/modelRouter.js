"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createModelRouter = createModelRouter;
const express_1 = require("express");
function createModelRouter(resourceModel) {
    const router = (0, express_1.Router)();
    router.get('/', async (_request, response, next) => {
        try {
            const records = await resourceModel.find().lean();
            response.json(records);
        }
        catch (error) {
            next(error);
        }
    });
    return router;
}
