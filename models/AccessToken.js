module.exports = (sequelize , DataTypes) => {
    const AccessToken = sequelize.define("AccessToken",
    {
        person_id:{
            type:DataTypes.STRING,
        },
        accesstoken:{
            type:DataTypes.STRING,
        },

    })
    
    return AccessToken;
}