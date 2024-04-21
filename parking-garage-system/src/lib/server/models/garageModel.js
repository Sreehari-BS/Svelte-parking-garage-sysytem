import mongoose from 'mongoose';

const garageSchema = new mongoose.Schema(
	{
		availableSlots: {
			type: Number,
			default: 10
		},
		userId: {
			type: mongoose.Schema.ObjectId,
			ref: 'User',
			required: true
		},
		vehicleNumber: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
);

const Parking = mongoose.models?.Garage || mongoose.model('Garage', garageSchema);
export default Parking;
