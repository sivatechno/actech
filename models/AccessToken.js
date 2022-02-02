// const { Users } = require("../models");
// const Users = require('./Users')
module.exports = (sequelize, DataTypes) => {
    const AccessToken = sequelize.define("AccessToken",
        {
            // person_id: {
            //     type: DataTypes.STRING,
            // },
            accesstoken: {
                type: DataTypes.STRING,
            },

        })

    AccessToken.associate = (models) => {
        AccessToken.belongsTo(models.Users,{
            foreignKey:"UserId"
        })
    }

    return AccessToken;
}