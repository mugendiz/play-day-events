module.exports = function (sequelize, DataTypes) {
    var events = sequelize.define("events", {
      Event_Name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 15]
            }
        },
        Event_Location: {
            type: DataTypes.TEXT,
            allowNull: false
            validate: {
                len: [1, 15]
            }
        },

        Event_Image: {
           type: DataTypes.
        }

        Event_Date: {
            type: DataTypes.INTEGER,
            defaultValue: "mm-dd-yyyy",
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

    return Comment;
};
