import type { Translation } from '../i18n-types'

const fa = {
	// this is an example Translation, just rename or delete this folder if you want
	TODO: 'وظایف', // In NavBar.svelte
	Home: 'خانه', // In NavBar.svelte
	About: 'درباره', // In NavBar.svelte
	The_Title_Text: 'سلام من محسن حیدری (چپن هاردر) هستم', // In NavBar.svelte
	The_Long_Text: 'خلاقیت و اجرای فنی محسن در انواع فناوری های توسعه وب از جمله HTML، CSS، جاوا اسکریپت و Svelet مهارت دارد. او همچنین یک بازی‌ساز باتجربه با درک قوی از موتورهای بازی مانند Bevy Engine است. محسن مشتاق به اشتراک گذاشتن دانش خود و کمک به موفقیت دیگران است. او ..', // In NavBar.svelte
	The_Github_Link: 'آدرس سایت گیت‌هاب', // In NavBar.svelte 

	ToDoTitle: 'لیست وظایف',
	ToDo_list: 'لیست کارها', // In +page.svelte
	enter_your_to_do_here: 'وظایفت را یادداشت کن', // In +page.svelte
	Add_ToDo: 'یادداشتت را اضافه کن', // In +page.svelte
	add: 'اضافه', // In +page.svelte

	save: 'ذخیره', // In ToDo.svelte
	edit: 'تغییر', // In ToDo.svelte
	delete: 'پاک', // In ToDo.svelte
} satisfies Translation

export default fa
