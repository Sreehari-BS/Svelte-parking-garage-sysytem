import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
	const userId = cookies.get('userId');
	if (!userId) {
		throw redirect(307, '/');
	}
};
