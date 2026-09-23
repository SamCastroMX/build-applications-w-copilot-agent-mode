"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workoutsRouter = void 0;
const Workout_js_1 = require("../models/Workout.js");
const modelRouter_js_1 = require("./modelRouter.js");
exports.workoutsRouter = (0, modelRouter_js_1.createModelRouter)(Workout_js_1.Workout);
