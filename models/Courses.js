module.exports = (sequelize, DataTypes) => {
    const Courses = sequelize.define("Courses",
        {
           
            coursename: {
                type: DataTypes.STRING,

            },
            coursedescription: {
                type: DataTypes.STRING,

            },
            status: {
                type: DataTypes.STRING,

            },
            

        })
    return Courses;
}