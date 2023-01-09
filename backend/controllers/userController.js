const bcrypt = require("bcrypt");
const userModel = require("../model/user");


const express = require("express");
const router = express.Router();

exports.registerUser = async (req, res) => {
	try {
		const { username, email, password } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);

		const confirmEmail = await userModel.findOne({ email: email });
		if (confirmEmail) {
			return res.status(400).json({
				message: 'User ' + req.body.username + ' already exists!',
			});
		}
		const newUser = await userModel.create({
			username,
			email,
			password: hashedPassword,
		});

		return res.status(201).json({
			message: 'Congratulations, Registration Successful!', user: newUser,
			user: newUser,
		});
	} catch (err) {
		console.error(err.message);
		return res
			.status(500)
			.json({ message: "An error occurred, please contact Admin" });
	}
};

exports.loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;
		const confirmUser = await userModel.findOne({ email: email });
		if (!confirmUser) {
			return res
				.status(404)
				.json({ message: "Invalid Email or Password" });
		}

		const passMatch = await bcrypt.compare(password, confirmUser.password);
		if (!passMatch) {
			return res
				.status(404)
				.json({ message: "Invalid Email or Password" });
		}

		return res
			.status(200)
			.json({ message: "You Have Successfully Logged In", user: confirmUser });
	} catch (err) {
		console.log(err.message);
		return res
			.status(500)
			.json({ message: "An error occurred, please contact Admin" });
	}
};