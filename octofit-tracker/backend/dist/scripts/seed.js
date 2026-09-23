"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_js_1 = require("../config/database.js");
const Activity_js_1 = require("../models/Activity.js");
const LeaderboardEntry_js_1 = require("../models/LeaderboardEntry.js");
const Team_js_1 = require("../models/Team.js");
const User_js_1 = require("../models/User.js");
const Workout_js_1 = require("../models/Workout.js");
/**
 * Seed the octofit_db database with test data.
 */
async function seedDatabase() {
    try {
        await (0, database_js_1.connectDatabase)();
        await Promise.all([
            User_js_1.User.deleteMany({}),
            Team_js_1.Team.deleteMany({}),
            Activity_js_1.Activity.deleteMany({}),
            LeaderboardEntry_js_1.LeaderboardEntry.deleteMany({}),
            Workout_js_1.Workout.deleteMany({}),
        ]);
        const users = await User_js_1.User.create([
            { name: 'Maya Chen', email: 'maya@example.com', goal: 'Build endurance' },
            { name: 'Jordan Rivera', email: 'jordan@example.com', goal: 'Increase strength' },
            { name: 'Sam Okafor', email: 'sam@example.com', goal: 'Stay consistent' },
        ]);
        await Team_js_1.Team.create([
            { name: 'Trail Blazers', motto: 'Every step counts', members: [users[0]._id, users[2]._id] },
            { name: 'Power Pack', motto: 'Stronger together', members: [users[1]._id] },
        ]);
        await Activity_js_1.Activity.create([
            { user: users[0]._id, type: 'Run', durationMinutes: 35, calories: 320, completedAt: new Date('2026-09-21') },
            { user: users[1]._id, type: 'Strength training', durationMinutes: 45, calories: 280, completedAt: new Date('2026-09-22') },
            { user: users[2]._id, type: 'Cycling', durationMinutes: 50, calories: 410, completedAt: new Date('2026-09-20') },
        ]);
        await LeaderboardEntry_js_1.LeaderboardEntry.create([
            { user: users[0]._id, points: 860, rank: 1, streakDays: 12 },
            { user: users[1]._id, points: 740, rank: 2, streakDays: 8 },
            { user: users[2]._id, points: 615, rank: 3, streakDays: 6 },
        ]);
        await Workout_js_1.Workout.create([
            { title: 'Energizing 20-minute circuit', focus: 'Full body', difficulty: 'beginner', durationMinutes: 20, exercises: ['Bodyweight squats', 'Push-ups', 'Mountain climbers'] },
            { title: 'Core and balance builder', focus: 'Core', difficulty: 'intermediate', durationMinutes: 30, exercises: ['Plank', 'Dead bug', 'Single-leg balance'] },
            { title: 'Strength endurance challenge', focus: 'Strength', difficulty: 'advanced', durationMinutes: 45, exercises: ['Lunges', 'Burpees', 'Pike push-ups'] },
        ]);
        console.log('Connected to octofit_db');
        console.log('Database seeding complete');
    }
    catch (error) {
        console.error('Error seeding octofit_db:', error);
        process.exitCode = 1;
    }
    finally {
        await (0, database_js_1.disconnectDatabase)();
    }
}
seedDatabase();
