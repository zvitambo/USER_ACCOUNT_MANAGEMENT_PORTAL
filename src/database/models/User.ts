import mongoose, {Schema, Document } from 'mongoose';


interface UserDoc extends Document {
  password: string;
  email: string;
  phone: string;
  salt: string;

  firstName: string;
  lastName: string;
  userName: string;

  verified: boolean;
  otp: Number;
  otp_expiry: Date;

  address: string; // AddressDoc
  website: string;
  company: string; // CompanyDoc
}


const UserSchema = new mongoose.Schema(
  {
    password: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    salt: { type: String, required: true },

    firstName: { type: String },
    lastName: { type: String },
    userName: { type: String },

    verified: { type: Boolean, required: true, default: false },
    otp: { type: Number },
    otp_expiry: { type: Date },

    address: { type: String }, // AddressDoc
    website: { type: String },
    company: { type: String }, // CompanyDoc
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.salt;
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;
      },
    },
    timestamps: true,
  }
);


const User = mongoose.model<UserDoc>('User', UserSchema);

export {User, UserDoc}