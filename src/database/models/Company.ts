import mongoose, { Schema, Document } from "mongoose";

interface CompanyDoc extends Document {
  name: string;
  catchPhrase: string;
  bs: string;
  code: string;
}

const CompanySchema = new mongoose.Schema(
  {
    name: { type: String },
    catchPhrase: { type: String },
    bs: { type: String },
    code: { type: String, required: true },
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

const Company = mongoose.model<CompanyDoc>("Company", CompanySchema);

export { Company, CompanyDoc };
