import {DataTypes} from "sequelize"
import connection from "../sequelize-connection.js";
import Comment from "./Comment.js";

const Student = connection.define("Student", {
    name: {
        type: DataTypes.STRING
    },
    ku_id: {
        type: DataTypes.STRING
    }, 
    phone_number: {
        type: DataTypes.STRING
    },
    ku_email: {
        type: DataTypes.STRING
    }, 
    DOB: {
        type: DataTypes.DATE
    },
    comment_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Comment,
            key: 'id'
        }
    },
    class_standing: {
        type: DataTypes.ENUM('Freshman', 'Sophomore', 'Junior', 'Senior')
    }
}, {
    tableName: 'students',
    timestamps: false
})

export default Student;