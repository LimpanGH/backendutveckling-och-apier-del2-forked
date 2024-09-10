import mongoose from 'mongoose';

async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb+srv://fredriklindroth:x3p19ohcIfSdYkFA@cluster0.x4lmd.mongodb.net/bookStore');
        console.log('Connected to the database');
    } catch (error) {
        console.error('Failed to connect to the database:', error);
    }
}

export default connectToDatabase;