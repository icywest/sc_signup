import {Sequelize} from "sequelize";

const connection = new Sequelize("softwareClub_members", "root", "", { //dbname, user, password
    host: "localhost",
    port: 3306,
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