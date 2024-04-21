import axios from 'axios';

export const load = async () => {
	try {
		const res = await axios.get('http://localhost:5173/api/home', {
			withCredentials: true
		});

		return { res };
	} catch (error) {
		console.log(error.stack);
		return { message: error.message }, { status: 500 };
	}
};
