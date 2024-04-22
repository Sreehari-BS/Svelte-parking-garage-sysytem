<script>
	let vehicleNumber = '';
</script>

<div class="flex flex-col items-center justify-center flex-1 p-24">
    <form class="flex flex-col gap-5 w-[400px] max-w-[100%] mx-auto">
        <h2 class="text-xl font-sans font-extrabold underline text-center text-red-800 tracking-widest">
            Unpark your vehicle ?
        </h2>
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