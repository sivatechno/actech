module.exports = (sequelize , DataTypes) => {
    const Users = sequelize.define("Users",
    {
        username:{
            type: DataTypes.STRING,
                       
        },
        password:{
            type: DataTypes.STRING,
           
        },
        email:{
            type: DataTypes.STRING,
           
        },

    });
    
    return Users;
}