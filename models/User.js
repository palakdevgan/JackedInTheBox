const { Model, DataTypes } = require("sequelize");
const connection = require("../config/connection");
const bcrypt = require("bcrypt");

// create our User model
class User extends Model {
    // set up method to run on instance data (per user) to check password
    checkPassword(loginPassword) {
        return bcrypt.compareSync(loginPassword, this.password);
    }
}

// create fields/columns for User model
User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4],
        },
    },
    // workoutype: is the user a runner, bodybuilder, crossfit, calithetics,
    // we want at least 1, but preferrable 2!
    workoutType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    weight: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    height: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
}, {
    hooks: {
        // set up beforeCreate lifecycle "hook" functionality
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 12);
            return newUserData;
        },

        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(
                updatedUserData.password,
                12
            );
            return updatedUserData;
        },
    },
    sequelize: connection,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
});

module.exports = User;