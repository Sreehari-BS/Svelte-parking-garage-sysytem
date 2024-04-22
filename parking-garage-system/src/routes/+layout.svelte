<script>
	import '../app.css';
	import Footer from '../components/footer/Footer.svelte';
  import Header from '../components/header/Header.svelte';
</script>

<div class="flex flex-col">
  <Header />
  <slot />
  <Footer />
</div>
