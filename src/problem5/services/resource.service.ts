import ResourceModel, {
  ResourceDocument,
  TResourceModel,
} from "../db/resource.model";

class ResourceService {
  private ResourceModel: TResourceModel = ResourceModel;

  async create(name: string, description: string): Promise<ResourceDocument> {    
    return await this.ResourceModel.create({ name, description });
  }

  async findAll(
    name: string,
    description: string
  ): Promise<ResourceDocument[]> {
    const filter: any = {};
    if (name) {
      filter.name = new RegExp(name as string, "i");
    }
    if (description) {
      filter.description = new RegExp(description as string, "i");
    }
    return await this.ResourceModel.find(filter);
  }

  async findOne(id: string): Promise<ResourceDocument | null> {
    return await this.ResourceModel.findById(id);
  }

  async update(
    id: string,
    name: string,
    description: string
  ): Promise<ResourceDocument | null> {
    return await this.ResourceModel.findByIdAndUpdate(id, {
      name,
      description,
    });
  }

  async delete(id: string): Promise<ResourceDocument | null> {
    return await this.ResourceModel.findByIdAndDelete(id);
  }
}

export default new ResourceService();
