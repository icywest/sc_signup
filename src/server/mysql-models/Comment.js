import {DataTypes} from "sequelize"
import connection from "../sequelize-connection.js";

const Comment = connection.define("Comment", {
    content: {
        type: DataTypes.STRING
    }
}, {
    tableName: "comments",
    timestamps: false
 
})

export default Comment;