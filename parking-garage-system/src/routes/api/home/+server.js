import { json } from '@sveltejs/kit';
import User from '../../../lib/server/models/userModel';
import connectDB from '../../../lib/utils';
import cookie from 'cookie';
import Garage from '../../../lib/server/models/garageModel';
import Vehicle from '../../../lib/server/models/vehicleModel';

export const GET = async ({ request }) => {
	try {
		connectDB();

		if (request && request.headers) {
			const allCookies = request.headers.get('cookie');
			const cookies = cookie.parse(allCookies);
			const userId = cookies['userId'];

			const user = await User.findById(userId);
			const garage = await Garage.find();
			return json({ user, garage: garage[0] });
		} else {
			throw new Error('No cookies found');
		}
	} catch (error) {
		console.log(error.message);
		return json({ message: error.message }, { status: 500 });
	}
};

export const POST = async ({ request }) => {
	try {
		connectDB();

		const allCookies = request.headers.get('cookie');
		const cookies = cookie.parse(allCookies);
		const userId = cookies['userId'];

		const body = await request.json();
		const { typeOfVehicle, vehicleNumber } = body;

		const existingUser = await Vehicle.findOne({ userId });
		if (existingUser !== null) {
			return json({ message: 'Only one Vechicle per person is alowed!!', error: true });
		}

		const existingVehicle = await Vehicle.findOne({ vehicleNumber });
		if (existingVehicle !== null) {
			return json({ message: 'Vechicle already exists!!', error: true });
		}

		const garage = await Garage.find();

		if (garage[0]?.availableSlots > 0) {
			const newVehicle = new Vehicle({
				userId,
				typeOfVehicle,
				vehicleNumber
			});
			await newVehicle.save();
			garage[0].availableSlots--;
			await garage[0].save();
		} else {
			return json({ message: 'No more slots available!!', error: true });
		}

		return json({ message: 'Successfully Booked a slot for your vehicle.', success: true });
	} catch (error) {
		console.log(error.message);
		return json({ message: error.message }, { status: 500 });
	}
};
