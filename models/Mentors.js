module.exports = (sequelize , DataTypes) => {
    const Mentors = sequelize.define("Mentors",
    {
        user_id:{
            type: DataTypes.STRING,
                       
        },
        username:{
            type: DataTypes.STRING,
                       
        },
        password:{
            type: DataTypes.STRING,
                       
        },
        role:{
            type: DataTypes.STRING,
           
        },
        email:{
            type: DataTypes.STRING,
           
        },
        first_name:{
            type: DataTypes.STRING,
           
        },
        last_name:{
            type: DataTypes.STRING,
           
        },
        country:{
            type: DataTypes.STRING,
           
        },
        city:{
            type: DataTypes.STRING,
           
        },
        address:{
            type: DataTypes.STRING,
           
        },
        state:{
            type: DataTypes.STRING,
           
        },
        accesstoken:{
            type:DataTypes.STRING,
        },
        

    })
    return Mentors;
}