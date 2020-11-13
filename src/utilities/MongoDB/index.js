const mongoose = require("mongoose");
const { mongoError } = require("../Globals");
const { MONGO_CONNECTION: CONNECTION_STRING } = process.env;

mongoose.connect(
	CONNECTION_STRING,
	{
		useUnifiedTopology: true,
		useNewUrlParser: true,
	},
	() => {
		mongoError.value = true;
	}
);
