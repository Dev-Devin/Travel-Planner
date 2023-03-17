const { Model, DataTypes } = require("sequelize");
const sequelize = require("./config/connection.js");

class Trips extends Model {}

Trips.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    trip_budget: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    traveller_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    traveller_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "traveller",
        key: "id",
      },
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "location",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "trips",
  }
);

module.exports = Trips;
