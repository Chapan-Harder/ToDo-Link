<script lang="ts">
	export let ToDoList: any = []; // Array Of ToDos
	import LL from '@/i18n/i18n-svelte';

	export const addToDo: Function | null = null;

	function setEdeting(counter: number, isEdeting: boolean) {
		ToDoList[counter].editing = isEdeting; // True Or False
	}

	function deleteToDo(counter: number) {
		ToDoList.splice(counter, 1);
		ToDoList = ToDoList;
	}
</script>

{#each ToDoList as ToDo, counter}
	<section class="flex items-baseline gap-2 w-auto mx-3 mb-2">
		{#if ToDo.editing}
			<input
				class="flex flex-auto bg-white/5 border-teal50 p-2 border-white/20 border-2 font-sans font-normal h-11 rounded-md text-white"
				type="text"
				bind:value={ToDo.content}
			/>
		{:else}
			<input
				class="relative float-left mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none
        before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-['']
        checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem]
        checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-['']
        hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12]
        focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem]
        focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]
        checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem]checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem]
        checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent
        dark:border-white/20 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
				type="checkbox"
				bind:checked={ToDo.checked}
			/>
			<h3 class="flex-grow font-sans font-normal text-teal-50 capitalize">{ToDo.content}</h3>
		{/if}

		<!-- Buttons Start -->
		<div class="flex gap-1">
			{#if ToDo.editing}
				<button
					class="bg-cyan-600 rounded-md text-white font-sans font-normal capitalize h-11 w-auto p-2"
					on:click={() => setEdeting(counter, false)}>{$LL.save()}</button
				>
			{:else}
				<button
					class="bg-cyan-600 rounded-md text-white font-sans font-normal capitalize h-11 w-auto p-2"
					on:click={() => setEdeting(counter, true)}>{$LL.edit()}</button
				>
			{/if}
			<button
				class="bg-cyan-600 rounded-md text-white font-sans font-normal capitalize h-11 w-auto p-2"
				on:click={() => deleteToDo(counter)}>{$LL.delete()}</button
			>
		</div>
		<!-- Buttons End -->
	</section>
{/each}
