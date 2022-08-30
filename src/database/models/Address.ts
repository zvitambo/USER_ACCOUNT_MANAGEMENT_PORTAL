import mongoose, { Schema, Document } from "mongoose";

interface AddressDoc extends Document {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  lat: number;
  lng: number;

  
}

const AddressSchema = new mongoose.Schema(
  {
    street: { type: String, required: true },
    suite: { type: String, required: true },
    city: { type: String },
    zipcode: { type: String },
    lat: { type: String },
    lng: { type: String },
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;
      },
    },
    timestamps: true,
  }
);

const Address = mongoose.model<AddressDoc>("Address", AddressSchema);

export { Address, AddressDoc };
