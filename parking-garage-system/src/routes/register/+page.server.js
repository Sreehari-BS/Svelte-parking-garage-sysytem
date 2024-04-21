import User from '../../lib/server/models/userModel';
import connectDB from '../../lib/utils';
import bcrypt from 'bcrypt';

export const actions = {
    //for the registration of new users
	default: async ({ request, cookies }) => {
		const data = await request.formData();
		const userName = data.get('userName');
		const email = data.get('email');
		const password = data.get('password');
		const confirmPassword = data.get('confirmPassword');

		if (!userName || !email || !password || !confirmPassword) {
			return { message: 'Fill all the fields!!', error: true };
		}
		if (password !== confirmPassword) {
			return { message: 'Passwords do not match!', error: true };
		}

		try {
			connectDB();

			const user = await User.findOne({ email });
			if (user) {
				return { message: 'Email already exists!', error: true };
			}

			const salt = await bcrypt.genSalt(10);
			const hashedPassword = await bcrypt.hash(password, salt);

			const newUser = new User({
				userName,
				email,
				password: hashedPassword
			});
			await newUser.save();

			return { message: 'Registration successful', error: false };
		} catch (error) {
			console.log(error);
			return { message: 'Something went wrong!', error: true };
		}
	}
};
