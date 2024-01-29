<script lang="ts">
	import LL from '@/i18n/i18n-svelte';
	import MePicture from '@/lib/pictures/Me.jpg';
</script>

<h1 class="text-center text-teal-50 text-5xl font-sans font-black capitalize mt-11 mb-16">
	{$LL.About()}
</h1>

<section class="flex justify-center">
	<img
		src={MePicture}
		alt="Me_Picture"
		class="max-md:hidden h-96 shadow-md shadow-[#dcb9cd] rounded-tl-2xl rounded-br-2xl"
	/>

	<div class="justify-center px-10 md:w-[460px] max-md:px-0">
		<p class="text-slate-400 font-sans font-normal text-base max-md:text-center">
			<span class="text-xl">{$LL.The_Title_Text()}</span>.<br />{$LL.The_Long_Text()}
		</p>
		<a
			href="https://github.com/Chapan-Harder"
			class="flex justify-center text-teal-50 pt-6 text-2xl font-sans font-black capitalize transition ease-in-out hover:scale-110 hover:text-[#f1d5b2]"
			>{$LL.The_Github_Link()}</a
		>
	</div>
</section>
