import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://fredriklindroth:password@cluster0.x4lmd.mongodb.net/bookStore');
        console.log('Connected to the database');
    } catch (error) {
        console.error('Failed to connect to the database:', error);
    }
}

export default connect;