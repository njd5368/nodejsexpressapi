const user = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING_TYPE,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        password: {
            type: DataTypes.STRING_TYPE,
            unique: false,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        creation_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        creation_time: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        last_access_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        last_access_time: {
            type: DataTypes.TIME,
            allowNull: false,
        },
    });
    return User;
};

export default user;