const Sequelize = require("sequelize");

const sequelize = new Sequelize("atelier_sequelize", "root", "jeereq", {
	dialect: "mysql",
	host: "localhost"
});

module.exports = sequelize;
