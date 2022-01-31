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
            type: DataTypes.INTEGER,
                       
        },
        phonenumber:{
            type: DataTypes.INTEGER,
           
        },
        university:{
            type: DataTypes.STRING,
           
        },
        college:{
            type: DataTypes.STRING,
           
        },
        passedoutyear:{
            type: DataTypes.INTEGER,
           
        },
        degree:{
            type: DataTypes.STRING,
           
        },
        cgpa:{
            type: DataTypes.INTEGER,
           
        },
        qualification:{
            type: DataTypes.STRING,
    
        },
        company:{
            type: DataTypes.STRING,
           
        },
        sslcboard:{
            type: DataTypes.STRING,
           
        },
        sslcschoolname:{
            type: DataTypes.STRING,
           
        },
        sslcyearpassedout:{
            type: DataTypes.INTEGER,
           
        },
        sslcmark:{
            type: DataTypes.INTEGER,
           
        },
        hscboard:{
            type: DataTypes.STRING,
           
        },
        hscschoolname:{
            type: DataTypes.STRING,
           
        },
        hscyearpassedout:{
            type: DataTypes.INTEGER,
           
        },
        hscmark:{
            type: DataTypes.INTEGER,
           
        },
        educationinputlist:{
           type: DataTypes.STRING,
        },
        university:{
            type: DataTypes.STRING,
           
        },
        college:{
            type: DataTypes.STRING,
           
        },
        passedoutyear:{
            type: DataTypes.INTEGER,
           
        },
        degree:{
            type: DataTypes.STRING,
           
        },
        cgpa:{
            type: DataTypes.INTEGER,
           
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
            type: DataTypes.INTEGER,
           
        },
        expectsalary:{
            type: DataTypes.INTEGER,
           
        },
        passedoutyear:{
            type: DataTypes.INTEGER,
           
        },
        yearsofexp:{
            type: DataTypes.INTEGER,
           
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
            type: DataTypes.INTEGER,
           
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
        projectduration:{
            type: DataTypes.INTEGER,
        },
        gender:{
            type: DataTypes.STRING,
           
        },
        qualify:{
            type: DataTypes.STRING,
           
        },
        primaryskill:{
            type: DataTypes.STRING,
           
        },
        secondaryskill:{
            type: DataTypes.STRING,
           
        },
    })
    // const AssociateEducation = sequelize.define("AssociateEducation",
    // {
    //     university:{
    //         type: DataTypes.STRING,
           
    //     },
    //     college:{
    //         type: DataTypes.STRING,
           
    //     },
    //     passedoutyear:{
    //         type: DataTypes.INTEGER,
           
    //     },
    //     degree:{
    //         type: DataTypes.STRING,
           
    //     },
    //     cgpa:{
    //         type: DataTypes.INTEGER,
           
    //     },
    //     qualification:{
    //         type: DataTypes.STRING,
    
    //     },
    //     company:{
    //         type: DataTypes.STRING,
           
    //     },
    
    // })
    // AssociateProfile.hasOne(AssociateEducation);
    // AssociateEducation.belongsTo(AssociateProfile);
    
 
    return AssociateProfile;
}
