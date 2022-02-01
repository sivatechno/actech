module.exports = (sequelize, DataTypes) => {
    const DefaultProject = sequelize.define("DefaultProject",
        {
            default_projects:
            {
                type: DataTypes.STRING
            }
        })
    return DefaultProject;
}