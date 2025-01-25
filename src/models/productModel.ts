import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../db/DB';

type ProductAttributes = {
  id?: number;
  name: string;
  price: number;
  description: string;
  stockQuantity: number;
  category: string;
  createdAt?: Date;
};

/*
Below ensures type safety --- The Optional is a utility type from sequelize that allows to make certian fields optional
*/
interface ProductAttributeInterface
  extends Optional<ProductAttributes, 'id' | 'createdAt'> {}

class Product
  extends Model<ProductAttributes, ProductAttributeInterface>
  implements ProductAttributes
{
  public id?: number;
  public name!: string;
  public price!: number;
  public description!: string;
  public stockQuantity!: number;
  public category!: string;
  public createdAt?: Date;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    stockQuantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'products',
    modelName: 'Product',
    timestamps: false,
    underscored: false,
  }
);

export default Product;
