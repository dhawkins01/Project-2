module.exports = function(sequelize, DataTypes) {
  var Pets = sequelize.define("Pets", {
    pet_id:{
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    pet_name: DataTypes.STRING,
    pet_image: DataTypes.STRING,
    pet_species: DataTypes.STRING,
    pet_age: DataTypes.INTEGER,
    pet_gender: DataTypes.BOOLEAN,
    pet_breed: DataTypes.STRING,
    pet_adopted: DataTypes.BOOLEAN,
    createdAt: DataTypes.STRING,
    updatedAt: DataTypes.STRING
  });

  Pets.associate = function(models) {
    Pets.belongsTo(models.Shelters, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Pets;
};

