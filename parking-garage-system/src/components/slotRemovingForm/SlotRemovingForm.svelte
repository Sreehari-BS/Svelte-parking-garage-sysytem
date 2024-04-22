<script>
	import { createEventDispatcher } from 'svelte';

	export let _unparkVehicle;
	export let load;

	let vehicleNumber = '';
	let response;

	const dispath = createEventDispatcher();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			response = await _unparkVehicle(vehicleNumber);
			if (response) {
				const updatedData = await load();
				dispath('update', updatedData);
				vehicleNumber = '';
			}
		} catch (error) {
			console.log(error.stack);
			vehicleNumber = '';
		}
	};
</script>

<div class="flex flex-col items-center justify-center flex-1 p-24">
	<form on:submit={handleSubmit} class="flex flex-col gap-5 w-[400px] max-w-[100%] mx-auto">
		<h2 class="text-xl font-sans font-extrabold underline text-center text-red-800 tracking-widest">
			Unpark your vehicle ?
		</h2>
		{#if response?.res?.data?.error}
			<p class="text-center text-orange-600 font-bold text-lg">
				{response?.res?.data?.message || ''}
			</p>
		{/if}
		{#if response?.res?.data?.success}
			<p class="text-center text-green-600 font-bold text-lg">
				{response?.res?.data?.message || ''}
			</p>
		{/if}
		<label class="relative border border-solid border-red-700 rounded-md">
			<input
				class="w-[100%] border-none bg-transparent px-2 py-4 text-lg font-semibold"
				type="text"
				name="vehicleNumber"
				bind:value={vehicleNumber}
				placeholder="Enter Vehicle Number"
				required
			/>
		</label>
		<button
			type="submit"
			class="bg-red-300 hover:bg-red-700 hover:text-white rounded-md font-bold text-red-800 py-3 px-0 text-lg tracking-widest"
		>
			Submit
		</button>
	</form>
</div>
