// Import mongoose
import mongoose from 'mongoose';

// Define a schema for storing email addresses
const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true // Ensure each email is unique
  }
});

// Create a model based on the schema
const Subscriber = mongoose.model('Subscriber', subscriberSchema);

// Export the model
export default Subscriber;
