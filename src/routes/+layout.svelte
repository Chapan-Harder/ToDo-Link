<script>
	import '../app.css';
	import _ from '@/stores/lang';

	import SideBar from '@/components/NavBar.svelte';
</script>

<section class="flex bg-slate-900 relative h-screen">
	<SideBar />
	<div class="flex flex-grow justify-center mx-auto">
		<main class="flex flex-col min-h-full p-5 w-[360px] sm:w-[640px] md:w-[768px]">
			<slot />
		</main>
	</div>
</section>
