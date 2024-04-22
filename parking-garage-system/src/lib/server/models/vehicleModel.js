import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.ObjectId,
			ref: 'User',
			required: true
		},
		typeOfVehicle: {
			type: String,
			required: true,
			enum: ['2wheeler', '3wheeler', '4wheeler']
		},
		vehicleNumber: {
			type: String,
			required: true,
			unique: true,
		}
	},
	{ timestamps: true }
);

const Vehicle = mongoose.models?.Vehicle || mongoose.model('Vehicle', vehicleSchema);
export default Vehicle;
