<script lang="ts">
	import type { FormEventHandler } from 'svelte/elements';
	import ToDo from '../components/ToDo.svelte';
	import LL from '@/i18n/i18n-svelte';

	let ToDoList: any = [];
	let textInput: string = '';
	function addToDo(): void {
		if (textInput !== '') {
			ToDoList = [...ToDoList, { content: textInput, editing: false, checked: false }];
		}

		textInput = '';
	}
</script>

<svelte:head>
	<title>{$LL.ToDoTitle()}</title>
</svelte:head>

<h1 class="text-center text-teal-50 text-5xl font-sans font-black capitalize mt-11 mb-12">
	{$LL.ToDo_list()}
</h1>

<p class="text-lg text-slate-400 font-sans font-normal capitalize mb-4">
	{$LL.enter_your_to_do_here()}
</p>
<form class="flex justify-center gap-2 mb-7" on:submit={addToDo}>
	<input
		placeholder={$LL.Add_ToDo()}
		class="flex flex-auto bg-white/5 border-teal50 p-2 border-white/20 border-2 font-sans font-normal rounded-md text-white"
		type="text"
		bind:value={textInput}
	/>
	<button
		class="bg-cyan-600 rounded-md text-white font-sans font-normal capitalize h-11 w-auto p-2"
		type="submit">{$LL.add()}</button
	>
</form>

<div class="relative flex-grow pt-2">
	<div class="absolute inset-0 overflow-y-scroll">
		<ToDo {addToDo} {ToDoList} />
	</div>
</div>
