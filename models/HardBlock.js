module.exports = (sequelize, DataTypes) => {
    const HardBlock = sequelize.define("HardBlock",
        {
            end_date: {
                type: DataTypes.STRING,
            },
            start_date: {
                type: DataTypes.STRING,
            },
            project: {
                type: DataTypes.STRING,
            },
        })
    HardBlock.associate = (models) => {
        HardBlock.belongsTo(models.AssociateProfile, {
            foreignKey: "AssociateProfileId"
        })
    }

    return HardBlock;
}