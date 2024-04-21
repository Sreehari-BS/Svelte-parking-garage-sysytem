import User from '../lib/server/models/userModel';
import connectDB from '../lib/utils';
import bcrypt from 'bcrypt';
import dotenv from "dotenv"
dotenv.config()

export const actions = {
	//for the authentication of new user
	default: async ({ request, cookies, ur }) => {
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		if (!email || !password) {
			return { message: 'Fill all the fields!!', error: true };
		}

		try {
			connectDB();

			const user = await User.findOne({ email })
			if (!user) {
				return { message: 'Wrong Credentials', error: true };
			}

			const checkPassword = await bcrypt.compare(password, user.password);
			if (!checkPassword) {
				return { message: 'Wrong Credentials', error: true };
			}

			cookies.set("userId", user._id, { path: "/" });
			return { message: 'login successful', error: false };
		} catch (error) {
			console.log(error);
			return { message: 'Something went wrong!', error: true };
		}
	}
};
