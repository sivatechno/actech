module.exports = (sequelize , DataTypes) => {
    const Project = sequelize.define("Project",
    {
        user_id:{
            type: DataTypes.STRING,
                       
        },
        Client_Name:{
            type:DataTypes.STRING,
        },
        Project_Name:{
            type:DataTypes.STRING,
        },
        Client_email:{
            type:DataTypes.STRING,
        },
        Start_Date:{
            type:DataTypes.STRING,
        },
        End_Date:{
            type:DataTypes.STRING,
        },
        Project_Status:{
            type:DataTypes.STRING,
        },
        Billing_Status: {
            type: DataTypes.STRING,
        },
        

    })
    
    return Project;
}