module.exports = function(sequelize, DataTypes) {
  var Shelters = sequelize.define("Shelters", {
    // Giving the Author model a name of type STRING
    shelter_id: DataTypes.INT,
    shelter_name: DataTypes.STRING,
    shelter_city: DataTypes.STRING,
    shelter_state: DataTypes.STRING,
    shelter_rating: DataTypes.INT,
    shelter_kill: DataTypes.BOOLEAN
  });

  Shelters.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Author.hasMany(models.Pets, {
      onDelete: "cascade"
    });
  };

  return Shelters;
};