import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
	const userId = cookies.get('userId');
	if (!userId) {
		throw redirect(307, '/');
	}
};

export const actions = {
	logout: async ({ cookies }) => {
		try {
			cookies.set("userId", "", { path: "/" });
			return { message: 'Logout successful', error: false };
		} catch (error) {
			console.log(error);
			return { message: 'Something went wrong!', error: true };
		}
	}
};
