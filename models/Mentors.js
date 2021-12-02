module.exports = (sequelize, DataTypes) => {
    const Mentors = sequelize.define("Mentors",
        {
            user_id: {
                type: DataTypes.STRING,

            },
            username: {
                type: DataTypes.STRING,

            },
            password: {
                type: DataTypes.STRING,

            },
            role: {
                type: DataTypes.STRING,

            },
            email: {
                type: DataTypes.STRING,

            },
            firstname: {
                type: DataTypes.STRING,

            },
            lastname: {
                type: DataTypes.STRING,

            },
            country: {
                type: DataTypes.STRING,

            },
            city: {
                type: DataTypes.STRING,

            },
            address: {
                type: DataTypes.STRING,

            },
            state: {
                type: DataTypes.STRING,

            },
            postalcode: {
                type: DataTypes.STRING,

            },
            phonenumber: {
                type: DataTypes.STRING,

            },


        })
    return Mentors;
}