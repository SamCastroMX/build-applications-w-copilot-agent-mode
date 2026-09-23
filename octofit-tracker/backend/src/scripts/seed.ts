import { connectDatabase, disconnectDatabase } from '../config/database.js'
import { Activity } from '../models/Activity.js'
import { LeaderboardEntry } from '../models/LeaderboardEntry.js'
import { Team } from '../models/Team.js'
import { User } from '../models/User.js'
import { Workout } from '../models/Workout.js'

/**
 * Seed the octofit_db database with test data.
 */
async function seedDatabase() {
  try {
    await connectDatabase()
    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ])

    const users = await User.create([
      { name: 'Maya Chen', email: 'maya@example.com', goal: 'Build endurance' },
      { name: 'Jordan Rivera', email: 'jordan@example.com', goal: 'Increase strength' },
      { name: 'Sam Okafor', email: 'sam@example.com', goal: 'Stay consistent' },
    ])

    await Team.create([
      { name: 'Trail Blazers', motto: 'Every step counts', members: [users[0]._id, users[2]._id] },
      { name: 'Power Pack', motto: 'Stronger together', members: [users[1]._id] },
    ])

    await Activity.create([
      { user: users[0]._id, type: 'Run', durationMinutes: 35, calories: 320, completedAt: new Date('2026-09-21') },
      { user: users[1]._id, type: 'Strength training', durationMinutes: 45, calories: 280, completedAt: new Date('2026-09-22') },
      { user: users[2]._id, type: 'Cycling', durationMinutes: 50, calories: 410, completedAt: new Date('2026-09-20') },
    ])

    await LeaderboardEntry.create([
      { user: users[0]._id, points: 860, rank: 1, streakDays: 12 },
      { user: users[1]._id, points: 740, rank: 2, streakDays: 8 },
      { user: users[2]._id, points: 615, rank: 3, streakDays: 6 },
    ])

    await Workout.create([
      { title: 'Energizing 20-minute circuit', focus: 'Full body', difficulty: 'beginner', durationMinutes: 20, exercises: ['Bodyweight squats', 'Push-ups', 'Mountain climbers'] },
      { title: 'Core and balance builder', focus: 'Core', difficulty: 'intermediate', durationMinutes: 30, exercises: ['Plank', 'Dead bug', 'Single-leg balance'] },
      { title: 'Strength endurance challenge', focus: 'Strength', difficulty: 'advanced', durationMinutes: 45, exercises: ['Lunges', 'Burpees', 'Pike push-ups'] },
    ])

    console.log('Connected to octofit_db')
    console.log('Database seeding complete')
  } catch (error) {
    console.error('Error seeding octofit_db:', error)
    process.exitCode = 1
  } finally {
    await disconnectDatabase()
  }
}

seedDatabase()
