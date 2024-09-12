import {DataTypes} from "sequelize"
import connection from "../sequelize-connection.js";

const Student = connection.define('Student', {
    first_name: {
        type: DataTypes.STRING
    },
    last_name: {
        type: DataTypes.STRING
    }, 
    ku_id: {
        type: DataTypes.STRING
    }, 
    phone_number: {
        type: DataTypes.STRING
    },
    class_status: {
        type: DataTypes.ENUM('Freshman', 'Sophomore', 'Junior', 'Senior')
    }
}, {
    tableName: 'students',
    timestamps: false
})

export default Student;