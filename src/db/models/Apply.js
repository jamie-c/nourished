import mongoose from 'mongoose';

const ApplySchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    intro: { type: String, required: true },
    uncover_the_problem: { type: String, required: true },
    more_about_problems: { type: String, required: true },
    solutions_tried: { type: String, required: true },
    future_state: { type: String, required: true },
    beliefs: { type: String, required: true },
    commitment: { type: String, required: true },
    why_you: { type: String, required: true },
    thank_you: { type: String, required: false },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Apply ||
  mongoose.model("Apply", ApplySchema, "apply");