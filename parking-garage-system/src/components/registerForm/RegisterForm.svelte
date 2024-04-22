<script>
	export let userName;
	export let email;
	export let password;
	export let confirmPassword;

	export let form;
</script>

<div class="flex flex-col items-center justify-center flex-1 p-24 min-h-screen">
	<form method="POST" class="flex flex-col gap-5 w-[400px] max-w-[100%] mx-auto">
		<h2 class="text-5xl font-bold text-center text-red-800 tracking-widest">Register</h2>
		{#if form?.error}
			<p class="text-center text-orange-600 font-bold text-lg">{form?.message || ''}</p>
		{/if}
		<label class="relative border border-solid border-red-700 rounded-md">
			<input
				class="w-[100%] border-none bg-transparent px-2 py-3 text-lg"
				bind:value={userName}
				name="userName"
				type="text"
				placeholder="Enter Name"
				required
			/>
		</label>
		<label class="relative border border-solid border-red-700 rounded-md">
			<input
				class="w-[100%] border-none bg-transparent px-2 py-3 text-lg"
				bind:value={email}
				name="email"
				type="email"
				placeholder="Enter Email"
				required
			/>
		</label>
		<label class="relative border border-solid border-red-700 rounded-md">
			<input
				class="w-[100%] border-none bg-transparent px-2 py-3 text-lg"
				bind:value={password}
				name="password"
				type="password"
				placeholder="Enter Password"
				required
			/>
		</label>
		<label class="relative border border-solid border-red-700 rounded-md">
			<input
				class="w-[100%] border-none bg-transparent px-2 py-3 text-lg"
				bind:value={confirmPassword}
				name="confirmPassword"
				type="password"
				placeholder="Confirm Password"
				required
			/>
		</label>
		<button
			type="submit"
			class="bg-red-300 hover:bg-red-700 hover:text-white rounded-md font-bold text-red-800 py-3 px-0 text-lg tracking-widest"
			>Submit</button
		>
	</form>
	<p class="my-3 text-gray-600">
		Already have an account? <a class="tracking-widest text-orange-500 text-md font-bold" href="/"
			>Login</a
		>
	</p>
</div>
