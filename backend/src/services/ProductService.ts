import { AppDataSource } from "../config/database.config";
import { Product } from "../models/Product";
import { Repository } from "typeorm";

export class ProductService {
  private productRepository: Repository<Product>;

  constructor() {
    // Initialize the repository using the singleton DataSource
    this.productRepository = AppDataSource.getRepository(Product);
  }

  // Get all products
  async getAllProducts() {
    return await this.productRepository.find({
      relations: ["category", "brand", "images", "promotions", "tags"],
    });
  }

  // Get a single product by ID
  async getProductById(id: string) {
    return await this.productRepository.findOne({
      where: { id },
      relations: ["category", "brand", "images", "promotions", "tags"],
    });
  }

  // Create a new product
  async createProduct(productData: Partial<Product>) {
    const newProduct = this.productRepository.create(productData);
    return await this.productRepository.save(newProduct);
  }

  // Update an existing product by ID
  async updateProduct(id: string, updateData: Partial<Product>) {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      return null;
    }
    this.productRepository.merge(product, updateData);
    return await this.productRepository.save(product);
  }

  // Delete a product by ID
  async deleteProduct(id: string) {
    const result = await this.productRepository.delete(id);
    return result.affected;
  }
}
