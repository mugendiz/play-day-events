module.exports = function (sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 15]
            }
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        zip: {
            type: DataTypes.INTEGER,
            defaultValue: "20001",
            validate:{
                isNumeric: true,
                len: [5]
            }
        }
    });



    Comment.associate = function (models) {
        // We're saying that a Post should belong to an Name
        // A Post can't be created without a Name due to the foreign key constraint
        Comment.belongsTo(models.Name, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Name;
};
