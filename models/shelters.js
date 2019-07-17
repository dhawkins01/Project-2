module.exports = function(sequelize, DataTypes) {
  var Shelters = sequelize.define("Shelters", {
    // Giving the Author model a name of type STRING
    shelter_id:{
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    shelter_name: DataTypes.STRING,
    shelter_city: DataTypes.STRING,
    shelter_state: DataTypes.STRING,
    shelter_rating: DataTypes.INTEGER,
    shelter_kill: DataTypes.BOOLEAN,
    createdAt: DataTypes.STRING,
    updatedAt: DataTypes.STRING
  })

  Shelters.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Shelters.hasMany(models.Pets, {
      onDelete: "cascade"
    });
  };

  return Shelters;
};
