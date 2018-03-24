module.exports = function (sequelize, DataTypes) {
    var Name = sequelize.define("Name", {
        // Giving the Name model a name of type STRING
        name: DataTypes.STRING
    });

    Name.associate = function (models) {
        // Associating Name with Posts
        // When a Name is deleted, also delete any associated Posts
        Name.hasMany(models.events, {
            onDelete: "cascade"
        });
    };

    return Name;
};
