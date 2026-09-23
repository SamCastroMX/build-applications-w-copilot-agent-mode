"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamsRouter = void 0;
const Team_js_1 = require("../models/Team.js");
const modelRouter_js_1 = require("./modelRouter.js");
exports.teamsRouter = (0, modelRouter_js_1.createModelRouter)(Team_js_1.Team);
