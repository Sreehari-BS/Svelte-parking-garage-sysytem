<script>
	import '../app.css';
	import Footer from '../components/footer/Footer.svelte';
  import Header from '../components/header/Header.svelte';
</script>

<div class="min-h-screen bg-red-50 relative flex flex-col">
  <Header />
  <slot />
  <Footer />
</div>
