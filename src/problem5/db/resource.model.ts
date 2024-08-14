import { Model, Schema, model, Document, QueryTimestampsConfig } from 'mongoose';

export interface ResourceDTO {
  name: string;
  description: string;
}

export interface ResourceDocument extends ResourceDTO, Document, QueryTimestampsConfig {}

export type TResourceModel = Model<ResourceDocument, {}> & typeof ResourceClass;

const schema = new Schema<ResourceDocument, TResourceModel>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

class ResourceClass extends Model<TResourceModel> {
  static findByEmail(email: string) {
    return this.findOne({ email });
  }
}

schema.loadClass(ResourceClass);

export default model<ResourceDocument, TResourceModel>('Resource', schema);
