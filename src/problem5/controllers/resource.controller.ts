import { Request, Response } from "express";
import ResourceService from "../services/resource.service";

export default class ResourceController {
  async createResource(req: Request, res: Response) {
    const { name, description } = req.body;
    const result = await ResourceService.create(name, description);
    res.json({ data: { id: result._id, name, description }, message: null });
  }

  async listResources(req: Request, res: Response) {
    const { name, description } = req.query;
    const filteredName = typeof name === "string" ? name : "";
    const filteredDescription =
      typeof description === "string" ? description : "";
    const resources = await ResourceService.findAll(
      filteredName,
      filteredDescription
    );
    res.json({ data: resources, message: null });
  }

  async getResource(req: Request, res: Response) {
    const { id } = req.params;
    const resource = await ResourceService.findOne(id);
    if (resource) {
      res.status(200).json({ data: resource, message: null });
    } else {
      res.status(404).json({ data: null, message: "Resource not found!" });
    }
  }

  async updateResource(req: Request, res: Response) {
    const { id } = req.params;
    const { name, description } = req.body;
    const result = await ResourceService.update(id, name, description);
    if (result) {
      res.status(200).json({ data: { name, description }, message: null });
    } else {
      res.status(404).json({ data: null, message: "Resource not found" });
    }
  }

  async deleteResource(req: Request, res: Response) {
    const { id } = req.params;
    const result = await ResourceService.delete(id);
    if (result) {
      res.status(204).end();
    } else {
      res.status(404).json({ data: null, message: "Resource not found" });
    }
  }
}
