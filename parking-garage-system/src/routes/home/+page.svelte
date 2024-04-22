<script>
	import { _submit, load } from './+page';
	import SlotBookingForm from '../../components/slotBookingForm/SlotBookingForm.svelte';
	import SlotRemovingForm from '../../components/slotRemovingForm/SlotRemovingForm.svelte';
	export let data;
	let showBookingForm = false;
	let showRemovingForm = false;
	const userName = data.res?.data?.user?.userName;
	let available = data.res?.data?.garage.availableSlots;
	let occupied = data.res?.data?.garage.totalSlots - data.res?.data?.garage.availableSlots;

	const handleUpdate = (event) => {
		data = event.detail;
		available = data.res?.data?.garage.availableSlots;
		occupied = data.res?.data?.garage.totalSlots - data.res?.data?.garage.availableSlots;
	};
</script>

<div class="mt-[73px]">
	<div class="m-10">
		<button
			class="bg-red-700 text-white font-bold tracking-widest px-3 py-2 rounded-md float-end hover:bg-red-900"
			>Logout</button
		>
		<br />
		<div class="flex flex-row h-full">
			<div class="flex flex-col gap-12 justify-center w-7/12">
				<div class="flex flex-row gap-2 items-center justify-start">
					<h1 class="text-3xl font-thin tracking-widest">Hello,</h1>
					<h1 class="text-5xl font-extrabold font-mono text-red-700 tracking-tighter">
						{userName}
					</h1>
				</div>
				<div>
					<h1 class="text-5xl font-extrabold text-orange-700">
						Welcome to our <span class="text-yellow-600 font-extrabold font-sans underline"
							>Parking Garage</span
						>
					</h1>
				</div>
				<div class="flex flex-col gap-1">
					<div class="flex flex-col gap-3 w-[19rem]">
						<h1 class="text-xl font-semibold text-orange-600 tracking-widest font-sans">
							Want to park your vehicle ?
						</h1>
						<button
							on:click={() => {
								showBookingForm = true;
								showRemovingForm = false;
							}}
							class="bg-blue-500 font-bold text-white px-5 py-3 rounded-lg hover:bg-blue-700"
							>Book a Slot</button
						>
					</div>
					<div class="flex flex-col gap-3 w-[19rem]">
						<h1 class="text-xl font-semibold text-orange-600 tracking-widest font-sans">
							Want to unpark your vehicle ?
						</h1>
						<button
							on:click={() => {
								showRemovingForm = true;
								showBookingForm = false;
							}}
							class="bg-rose-500 font-bold text-white px-5 py-3 rounded-lg hover:bg-rose-600"
							>Remove Slot</button
						>
					</div>
				</div>
				<div class="flex flex-col gap-5">
					<h1 class="text-lg font-semibold text-rose-700 tracking-widest font-mono">
						Available Slots: <span class="text-2xl">{available}</span>
					</h1>
					<h1 class="text-lg font-semibold text-orange-600 tracking-widest font-mono">
						Occupied Slots: <span class="text-2xl">{occupied}</span>
					</h1>
				</div>
			</div>
			<div class="flex flex-col gap-5 ml-auto justify-center items-center w-5/12">
				{#if showBookingForm}
					<SlotBookingForm {_submit} {load} on:update={handleUpdate} />
				{/if}
				{#if showRemovingForm}
					<SlotRemovingForm />
				{/if}
			</div>
		</div>
	</div>
</div>
