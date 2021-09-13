var Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const studentinfo = sequelize.define(
    "studentinfo",
    {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: Sequelize.STRING,
      register_number: Sequelize.INTEGER,
      email: Sequelize.STRING,
      department: Sequelize.STRING,
      phone_number: Sequelize.INTEGER,
      father_name: Sequelize.STRING,
    },
    {
      timestamps: false,
    }
  );
  return studentinfo;
};
