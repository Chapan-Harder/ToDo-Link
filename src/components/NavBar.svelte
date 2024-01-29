<script>
	import LL from '@/i18n/i18n-svelte';
	import Language from '@/lib/icons/Language.svelte';
	import language, { setLanguage } from '@/stores/lang';

	let showMenu = false;

	function toggleNavbar() {
		showMenu = !showMenu;
	}
</script>

<div class="bg-slate-950/80 w-full">
	<nav class="container mx-auto md:flex">
		<div class="flex px-6 py-4 items-center justify-between">
			<a
				class="text-xl font-sans font-bold text-gray-100 md:text-2xl hover:text-blue-400"
				href="../"
				>{$LL.TODO()}
			</a>
			<!-- Mobile menu button -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div on:click={toggleNavbar} class="flex md:hidden">
				<button
					type="button"
					class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			</div>
		</div>

		<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
		<div
			class="flex-col justify-end px-6 py-4 w-full space-y-4 md:flex md:space-y-0 gap-6 md:flex-row md:items-center md:space-x-10 md:mt-0 max-sm:fixed max-sm:bg-slate-950/80 {showMenu
				? 'flex'
				: 'hidden'}"
		>
			<a class="text-gray-100 font-sans font-normal hover:text-blue-400" href="../">{$LL.Home()}</a>
			<a class="text-gray-100 font-sans font-normal hover:text-blue-400" href="about"
				>{$LL.About()}</a
			>
			<button on:click={() => setLanguage($language === 'en' ? 'fa' : 'en')}
				><Language class="fill-teal-50 size-7 hover:fill-blue-400" /></button
			>
			<div class="space-y-2"></div>
		</div>
	</nav>
</div>
