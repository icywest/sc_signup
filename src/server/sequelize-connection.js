import {Sequelize} from "sequelize";

const connection = new Sequelize("sc_members_s25", "root", "patrick18", { //dbname, user, password
    host: "localhost",
    port: 3307,
    dialect: "mysql"
});

const testConnection = async () => {
    try{
        await connection.authenticate();
        console.log("Authenticated Successfully");
    }
    catch(error){
        console.error('Unable to connect to the database:', error)
    }
}

testConnection();

export default connection