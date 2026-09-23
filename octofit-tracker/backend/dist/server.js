"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_js_1 = require("./config.js");
const activities_js_1 = require("./routes/activities.js");
const leaderboard_js_1 = require("./routes/leaderboard.js");
const teams_js_1 = require("./routes/teams.js");
const users_js_1 = require("./routes/users.js");
const workouts_js_1 = require("./routes/workouts.js");
const database_js_1 = require("./config/database.js");
const app = (0, express_1.default)();
const port = 8000;
app.use(express_1.default.json());
app.get('/api/health', (_request, response) => {
    response.json({ status: 'ok', apiBaseUrl: config_js_1.apiBaseUrl });
});
app.use('/api/users', users_js_1.usersRouter);
app.use('/api/teams', teams_js_1.teamsRouter);
app.use('/api/activities', activities_js_1.activitiesRouter);
app.use('/api/leaderboard', leaderboard_js_1.leaderboardRouter);
app.use('/api/workouts', workouts_js_1.workoutsRouter);
async function startServer() {
    await (0, database_js_1.connectDatabase)();
    app.listen(port, () => {
        console.log(`OctoFit Tracker API listening at ${config_js_1.apiBaseUrl}`);
    });
}
startServer().catch((error) => {
    console.error('Failed to start OctoFit Tracker API', error);
    process.exitCode = 1;
});
