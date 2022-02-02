module.exports = (sequelize, DataTypes) =>{
    const Clientprofile = Sequelize.define("Clientprofile",
    {
        user_id:{
            type: Datatypes.STRING,
        },
        Client_Name:{
            type:DataTypes.STRING,
        },
        Company_Name:{
            type:DataTypes.STRING,
        },
        Client_email:{
            type:DataTypes.STRING,
        },
        Contact:{
            type:DataTypes.STRING,
        },
        Adddress:{
            type:DataTypes.STRING,
        },
        Country:{
            type:DataTypes.STRING,
        },
        State:{
            type:DataTypes.STRING,
        },
        City:{
            type:DataTypes.STRING,
        },
        Start_Date:{
            type:DataTypes.STRING,
        },
        End_Date:{
            
        }



    })
}       
