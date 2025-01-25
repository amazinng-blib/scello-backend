import { Op } from 'sequelize';
import { AppError } from '../middleware/errorHandler';
import Product from '../models/productModel';

type fetchProductQueryType = {
  page: number;
  limit: number;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: string;
};

export async function fetchProductService(payload: fetchProductQueryType) {
  try {
    const {
      category,
      limit,
      maxPrice,
      minPrice,
      page,
      search,
      sortBy,
      sortOrder,
    } = payload;
    const offset = (page - 1) * limit;

    const whereClause: any = {};
    if (category) {
      whereClause.category = category;
    }

    if (search) {
      whereClause.name = { [Op.iLike]: `%${search}%` };
    }

    if (minPrice || maxPrice) {
      if (minPrice && maxPrice) {
        whereClause.price = { [Op.between]: [minPrice, maxPrice] };
      } else if (minPrice) {
        whereClause.price = { [Op.gte]: minPrice };
      } else if (maxPrice) {
        whereClause.price = { [Op.lte]: maxPrice };
      }
    }

    const orderClause: any = [];
    if (sortBy) {
      orderClause.push([sortBy, sortOrder ?? 'ASC']);
    }

    const { count, rows } = await Product.findAndCountAll({
      where: whereClause,
      order: orderClause,
      limit,
      offset,
    });

    return {
      total: count,
      products: rows,
      page: Math.ceil(count / limit),
      currentPage: page,
    };
  } catch (error: any) {
    throw new AppError('Error fetching product: ' + error.message, 500);
  }
}
