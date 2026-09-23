"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leaderboardRouter = void 0;
const LeaderboardEntry_js_1 = require("../models/LeaderboardEntry.js");
const modelRouter_js_1 = require("./modelRouter.js");
exports.leaderboardRouter = (0, modelRouter_js_1.createModelRouter)(LeaderboardEntry_js_1.LeaderboardEntry);
