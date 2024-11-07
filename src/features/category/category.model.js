const { Model, DataTypes, Sequelize } = require("sequelize");

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          field: "createdAt",
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: false,
          field: "updatedAt",
        },
        deletedAt: {
          type: DataTypes.DATE,
          defaultValue: null,
          field: "deletedAt",
        },
      },
      {
        sequelize,
        modelName: "Category",
        tableName: "category",
        timestamps: true,
        paranoid: true,
      }
    );
  }

  static associate(models) {
    // Associações
    this.belongsToMany(models.Task, {
      through: "category_task",
      foreignKey: {
        name: "category_id",
        type: DataTypes.UUID,
      },
      otherKey: {
        name: "task_id",
        type: DataTypes.UUID,
      },
      as: "tasks",
    });
  }
}

module.exports = Category;
