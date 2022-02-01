module.exports = (sequelize , DataTypes) => {
    const AddExam = sequelize.define("AddExam",
    {
        coursename:{
            type: DataTypes.STRING,
                       
        },
        courseid:{
            type: DataTypes.STRING,
                       
        },
        examdesc:{
            type: DataTypes.STRING,
                       
        },
        examduration:{
            type: DataTypes.STRING,
           
        },
        examstartdate:{
            type: DataTypes.STRING,
           
        },
        examenddate:{
            type: DataTypes.STRING,
           
        },
        status:{
            type: DataTypes.STRING,
           
        },
        
        

    })
    return AddExam;
}