module.exports = (sequelize , DataTypes) => {
    const AssociateProfile = sequelize.define("AssociateProfile",
    {
        user_id:{
            type: DataTypes.STRING,
                       
        },
        firstname:{
            type: DataTypes.STRING,
           
        },
        lastname:{
            type: DataTypes.STRING,
           
        },
        email:{
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
        postalcode:{
            type: DataTypes.STRING,
           
        },
        dob:{
            type: DataTypes.STRING,
                       
        },
        phonenumber:{
            type: DataTypes.STRING,
           
        },
        sslcboard:{
            type: DataTypes.STRING,
           
        },
        sslcschoolname:{
            type: DataTypes.STRING,
           
        },
        sslcyearpassedout:{
            type: DataTypes.STRING,
           
        },
        sslcmark:{
            type: DataTypes.STRING,
           
        },
        hscboard:{
            type: DataTypes.STRING,
           
        },
        hscschoolname:{
            type: DataTypes.STRING,
           
        },
        hscyearpassedout:{
            type: DataTypes.STRING,
           
        },
        hscmark:{
            type: DataTypes.STRING,
           
        },
        university:{
            type: DataTypes.STRING,
           
        },
        college:{
            type: DataTypes.STRING,
           
        },
        passedoutyear:{
            type: DataTypes.STRING,
           
        },
        degree:{
            type: DataTypes.STRING,
           
        },
        cgpa:{
            type: DataTypes.STRING,
           
        },
        qualification:{
            type: DataTypes.STRING,

        },
        company:{
            type: DataTypes.STRING,
           
        },
        designation:{
            type: DataTypes.STRING,
           
        },
        currentsalary:{
            type: DataTypes.STRING,
           
        },
        expectsalary:{
            type: DataTypes.STRING,
           
        },
        passedoutyear:{
            type: DataTypes.STRING,
           
        },
        yearsofexp:{
            type: DataTypes.STRING,
           
        },
        expcertificate:{
            type: DataTypes.STRING,
           
        },
        companyaddress:{
            type: DataTypes.STRING,

        },
        institutename:{
            type: DataTypes.STRING,

        },
        coursename:{
            type: DataTypes.STRING,
           
        },
        duration:{
            type: DataTypes.STRING,
           
        },
        coursecertificate:{
            type: DataTypes.STRING,
           
        },
        instituteaddress:{
            type: DataTypes.STRING,
           
        },
        project:{
            type: DataTypes.STRING,
           
        },
        female:{
            type: DataTypes.STRING,
           
        },
        male:{
            type: DataTypes.STRING,
           
        },
        experience:{
            type: DataTypes.STRING,

        },
        fresher:{
            type: DataTypes.STRING,
           
        },
        primaryskill:{
            type: DataTypes.STRING,
           
        },
        secondaryskill:{
            type: DataTypes.STRING,
           
        },
    })
    
    return AssociateProfile;
}