import mongoose from 'mongoose';

const garageSchema = new mongoose.Schema({
	totalSlots: {
		type: Number,
		required: true
	},
	availableSlots: {
		type: Number,
		required: true
	}
});

const Garage = mongoose.models?.Garage || mongoose.model('Garage', garageSchema);
export default Garage;
