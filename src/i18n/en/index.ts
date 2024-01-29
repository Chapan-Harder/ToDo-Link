import type { BaseTranslation } from '../i18n-types'

const en = {
	// TODO: your translations go here
	TODO: 'TODO', // In NavBar.svelte
	Home: 'Home', // In NavBar.svelte
	About: 'About', // In NavBar.svelte
	The_Title_Text: 'Hi My name is Mohsen Heidari(Chapan Harder)', // In About 
	The_Long_Text: 'creativity and technical execution. Mohsen is proficient in a variety of web development technologies, including HTML, CSS, JavaScript, and Svelet. He is also an experienced game developer with a strong understanding of game engines such as Bevy Engine. Mohsen is passionate about sharing his knowledge and helping others succeed. He is ..', // In About 
	The_Github_Link: 'the github link', // In NavBar.svelte 

	ToDoTitle: 'Todo List',
	ToDo_list: 'ToDo list', // In +page.svelte
	enter_your_to_do_here: 'enter your to-do here', // In +page.svelte
	Add_ToDo: 'Add ToDo', // In +page.svelte
	add: 'add', // In +page.svelte

	save: 'save', // In ToDo.svelte
	edit: 'edit', // In ToDo.svelte
	delete: 'delete', // In ToDo.svelte
} satisfies BaseTranslation

export default en
