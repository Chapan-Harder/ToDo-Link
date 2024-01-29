<script>
	import '../app.css';
	import _ from '@/stores/lang';

	import NavBar from '@/components/NavBar.svelte';
</script>

<section class="flex flex-col bg-slate-900 relative h-screen">
	<NavBar />
	<div class="flex flex-grow justify-center mx-auto">
		<main class="flex flex-col min-h-full p-5 w-[360px] sm:w-[640px] md:w-[768px]">
			<slot />
		</main>
	</div>
</section>
