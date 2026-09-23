"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activitiesRouter = void 0;
const Activity_js_1 = require("../models/Activity.js");
const modelRouter_js_1 = require("./modelRouter.js");
exports.activitiesRouter = (0, modelRouter_js_1.createModelRouter)(Activity_js_1.Activity);
