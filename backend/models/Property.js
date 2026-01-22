import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { 
      type: String, 
      enum: ["Rent", "Sale"], 
      required: true 
    },
    category: { 
      type: String, 
      enum: ["Apartment", "House", "Commercial", "Land"], 
      default: "Apartment" 
    },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String }, // Store the image path
    postedBy: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: "User", 
      required: true 
    },
  },
  { timestamps: true }
);

export default mongoose.model("Property", propertySchema);