// const { AccessToken } = require("../models");
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users",
        {
            username: {
                type: DataTypes.STRING,

            },
            password: {
                type: DataTypes.STRING,

            },
            email: {
                type: DataTypes.STRING,

            },

        });

    Users.associate = (models) => {
        Users.hasMany(models.AccessToken, {
            foreignKey: "UserId"
        })
    }



    return Users;
}