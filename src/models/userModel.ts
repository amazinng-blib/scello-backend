import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../db/DB';

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
  MARKETER = 'MARKETER',
}
type UserType = {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
  createdAt?: Date;
};

interface UserAttributes extends Optional<UserType, 'id' | 'createdAt'> {}

class User extends Model<UserType, UserAttributes> implements UserType {
  public id?: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public password!: string;
  public role!: Role;
  public createdAt?: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    role: {
      type: DataTypes.ENUM(...Object.values(Role)),
      allowNull: false,
      defaultValue: Role.USER,
    },
  },
  {
    sequelize,
    tableName: 'users',
    modelName: 'User',
    timestamps: false,
    underscored: false,
  }
);

export default User;
