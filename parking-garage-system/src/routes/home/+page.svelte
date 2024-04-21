<script>
	export let data;
	const userName = data.res?.data?.userName;
	const available = 10;
	const occupied = 2;
</script>

<div
	class="mt-[73px] bg-orange-100 m-3 rounded-lg shadow-xl absolute top-1 right-0 bottom-0 left-0"
>
	<div class="m-10">
		<button
			class="bg-red-700 text-white font-bold tracking-widest px-3 py-2 rounded-md float-end hover:bg-red-900"
			>Logout</button
		>
		<br /><br />
		<div class="flex flex-row">
			<div class="flex flex-col gap-12">
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
				<div class="flex flex-col gap-6 w-[19rem]">
					<h1 class="text-xl font-semibold text-orange-600 tracking-widest font-sans">
						Want to park your vehicle ?
					</h1>
					<button class="bg-blue-500 font-bold text-white px-5 py-3 rounded-lg hover:bg-blue-700"
						>Book a Slot</button
					>
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
            <div class="flex float-end">
                <h3>form</h3>
            </div>
		</div>
	</div>
</div>
