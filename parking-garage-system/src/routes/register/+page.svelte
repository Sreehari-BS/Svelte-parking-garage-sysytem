<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import RegisterForm from '../../components/registerForm/RegisterForm.svelte';
    
	let userName = '';
	let email = '';
	let password = '';
	let confirmPassword = '';

	export let form;

	onMount(() => {
		if (form?.error === false) {
			goto('/');
		}
	});
</script>

<RegisterForm {form} {userName} {email} {password} {confirmPassword} />
