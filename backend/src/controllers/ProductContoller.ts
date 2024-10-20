import { Request, Response } from "express";
import { ProductService } from "../services/ProductService";

export class ProductController {
  private productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  // Get All Products
  async getAllProducts(req: Request, res: Response): Promise<Response> {
    try {
      const products = await this.productService.getAllProducts();
      return res.json(products);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error fetching products", error });
    }
  }

  // Get Product By ID
  async getProductById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const product = await this.productService.getProductById(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      return res.json(product);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching product", error });
    }
  }

  // Create a new Product
  async createProduct(req: Request, res: Response): Promise<Response> {
    try {
      const newProduct = await this.productService.createProduct(req.body);
      return res.status(201).json(newProduct);
    } catch (error) {
      return res.status(500).json({ message: "Error creating product", error });
    }
  }

  // Update a Product
  async updateProduct(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const updatedProduct = await this.productService.updateProduct(
        id,
        req.body
      );
      if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
      return res.json(updatedProduct);
    } catch (error) {
      return res.status(500).json({ message: "Error updating product", error });
    }
  }

  // Delete a Product By ID
  async deleteProduct(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    try {
      const result = await this.productService.deleteProduct(id);
      if (!result) {
        return res.status(404).json({ message: "Product not found" });
      }
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: "Error deleting product", error });
    }
  }
}
