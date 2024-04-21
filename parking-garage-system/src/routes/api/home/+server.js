import { json } from '@sveltejs/kit';
import User from '../../../lib/server/models/userModel';
import connectDB from '../../../lib/utils';
import cookie from 'cookie';

export const GET = async ( {request} ) => {
    try {
        connectDB();

        if (request && request.headers) {
            const allCookies = request.headers.get("cookie")
            const cookies = cookie.parse(allCookies);
            const userId = cookies['userId'];

            const user = await User.findById(userId);
            return json(user);
        } else {
            throw new Error('No cookies found');
        }
    } catch (error) {
        console.log(error.message);
        return json({ message: error.message }, { status: 500 });
    }
};

