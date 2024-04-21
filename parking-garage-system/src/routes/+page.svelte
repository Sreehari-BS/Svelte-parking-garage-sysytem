<script>
    import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
    import LoginForm from "../components/loginForm/LoginForm.svelte"

	let email = '';
	let password = '';

	export let form;

	onMount(() => {
		if (form?.error === false) {
			goto('/home');
		}
	});
</script>

<LoginForm {form} {email} {password} />