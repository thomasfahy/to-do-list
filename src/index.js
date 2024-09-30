import "./styles.css";
import { test } from "./test";
import createNewProject from "./createprj";
import { Project} from "./projects";
import { displayProjects, createNewProject } from "./createprj";

console.log(test);

createNewProject();

const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  let formData = new FormData(form);

  const formTitle = formData.get('title');
  const formAuthor = formData.get('author');
  const formPages = formData.get('pages');
  let formReadStatus = formData.get('read');

  console.log('Title:', formTitle);
  console.log('Author:', formAuthor);
  console.log('Pages:', formPages);
  console.log('Read Status:', formReadStatus);
  let formRead = "yes";
  if(formReadStatus = "read"){
    formRead = "Yes";
  } else{
    formRead = "No";
  }
  
  const newBook = new Book(formTitle, formAuthor, formPages, formReadStatus)
  addBookToLibrary(newBook);
  console.log(myLibrary);
  bookDialog.close();
  displayBooks();
})

