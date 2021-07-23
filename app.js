const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");

const sequelize = require("./util/datBase");
const Post = require("./models/post");
const User = require("./models/user");

const app = express();

const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
	User.findAll({ where: { id: 1 } })
		.then(([user]) => {
			req.user = user;
			next();
		})
		.catch((res) => console.log(res));
});

app.use(shopRoutes);

app.use(errorController.get404);

//Post.belongsTo(User, { contraints: true, onDelete: "CASCADE" });
User.hasMany(Post);

sequelize
	.sync()
	.then(() => {
		return User.findAll({ where: { id: 1 } });
	})
	.then(([user]) => {
		if (!user)
			return User.create({ name: "jeereq", email: "mingandajeere@gmil.com" });
		return user;
	})
	.then(() => {
		app.listen(4000);
	})
	.catch((err) => console.log(err));
