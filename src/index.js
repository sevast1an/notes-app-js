import { createNote } from './notes'
import { setFilters} from './filters'
import  { renderNotes } from './views' 

renderNotes();

//Create a note
document.querySelector('#create-note').addEventListener('click', (e) => {
	const id = createNote();
	location.assign(`/edit.html#${id}`);
});

// Set filter search text
document.querySelector('#search-text').addEventListener('input', (e) => { 
	setFilters({
		searchText: e.target.value
	})
	renderNotes();
});

// Filter by select
document.querySelector('#filter-by').addEventListener('change', (e) => {
	setFilters({
		sortBy: e.target.value
	})
	renderNotes();
});

window.addEventListener('storage', (e) => {
	if (e.key === 'notes'){
		renderNotes();
	}
})



// const birthday = moment('1991 September 17');
// console.log(birthday.format('MMM Do, YYYY'));