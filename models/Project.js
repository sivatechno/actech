module.exports = (sequelize , DataTypes) => {
    const Project = sequelize.define("Project",
    {
        
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
        

    })
    
    return Project;
}