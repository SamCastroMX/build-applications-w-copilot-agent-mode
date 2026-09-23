"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const User_js_1 = require("../models/User.js");
const modelRouter_js_1 = require("./modelRouter.js");
exports.usersRouter = (0, modelRouter_js_1.createModelRouter)(User_js_1.User);
