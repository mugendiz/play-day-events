module.exports = function(sequelize, DataTypes) {
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
            allowNull: false,
            validate: {
              len: [1, 15]
            }
          },

          Event_Date: {
<<<<<<< HEAD:models/comment.js
            type: DataTypes.INTEGER,
            defaultValue: "mm-dd-yyyy",
            validate: {
              isNumeric: true,
              len: [5]
              }
            },
=======
            type: DataTypes.DATE,
            defaultValue: sequelize.NOW,
          },
>>>>>>> 2cb1fbf75ac63c24edd4cf1b66548583c37309b7:models/events.js

            Event_Time: {
              type: DataTypes.INTEGER,
              timeValue: "HH:MM:SS",
              validate: {
                isNumeric: true,
                len: [6]
<<<<<<< HEAD:models/comment.js
                }
              },

              Post_Date: {
                type: DataTypes.INTEGER,
                defaultValue: "mm-dd-yyyy",
                validate: {
                  isNumeric: true,
                  len: [5]
              }




          }
=======
              }
            },
              Post_Date: {
                type: DataTypes.DATE,
                defaultValue: sequelize.NOW,
              }
>>>>>>> 2cb1fbf75ac63c24edd4cf1b66548583c37309b7:models/events.js
            });


          events.associate = function(models) {
            // We're saying that a Post should belong to an Name
            // A Post can't be created without a Name due to the foreign key constraint
            events.belongsTo(models.Name, {
              foreignKey: {
                allowNull: false
              }
            });
          };

          return events;
        };
