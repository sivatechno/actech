module.exports = (sequelize, DataTypes) => {
    const AssociateEducation = sequelize.define("AssociateEducation",
        {
            university: {
                type: DataTypes.STRING,

            },
            college: {
                type: DataTypes.STRING,

            },
            passedoutyear: {
                type: DataTypes.STRING,

            },
            degree: {
                type: DataTypes.STRING,

            },
            cgpa: {
                type: DataTypes.STRING,

            },
            qualification: {
                type: DataTypes.STRING,

            },           
        })
        // AssociateEducation.associate = (models) => {
        //     AssociateEducation.belongsTo(models.AssociateProfile, {
        //         foreignKey: "AssociateProfileId"
        //     })
        // }
    
    return AssociateEducation;
}