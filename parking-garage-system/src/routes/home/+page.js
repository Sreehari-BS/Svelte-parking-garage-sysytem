import axios from 'axios';

export const load = async () => {
	try {
		const res = await axios.get("http://localhost:5173/api/home", {
			withCredentials: true
		});
		return { res };
	} catch (error) {
		console.log(error.stack);
		return { message: error.message }, { status: 500 };
	}
};

export const _submit = async (typeOfVehicle, vehicleNumber) => {
	try {
		const res = await axios.post("http://localhost:5173/api/home", {
			typeOfVehicle,
			vehicleNumber
		},{
			headers: { 'Content-Type': 'application/json' },
			withCredentials: true
		})
		return {res}
	} catch (error) {
		console.log(error.stack);
		return { message: error.message }, { status: 500 };
	}
}