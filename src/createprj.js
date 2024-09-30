import { Project } from "./projects";

let testProj = new Project("To do list", "Make a to do list for the Odin Project", "11/11/2024", "High");

const projectArray = [testProj];

const createNewProject = () => {
    const projectDialog = document.getElementById('new-project-dialog');
    const projectAddButton = document.querySelector('.project-plus-image');
    projectAddButton.addEventListener('click', () => {
      console.log('add new');
      projectDialog.showModal(); //Display Form
    });
    
    const closeButton = document.getElementById('close');
    closeButton.addEventListener('click', () => {
        dialog.close(); //Close Form
    });

}

function displayProjects(){
  const allProjectContainer = document.getElementById('project-panel');
  allProjectContainer.innerHTML = '';
  
  myLibrary.forEach((project, index) => {
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('book');

    const title = document.createElement('p');
    title.classList.add("bookTitle");
    title.textContent = `${project.title}`;

    const author = document.createElement('p');

    author.textContent = `Author: ${project.description}`;

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${project.dueDate}`;

    const isRead = document.createElement('p');
    isRead.textContent = `Read: ${book.priority}`;

    const bookButton = document.createElement("button");
    bookButton.classList.add("bookButton");
    bookButton.textContent = "Read";

    const removeButton = document.createElement("button");
    removeButton.classList.add("removeButton");
    removeButton.textContent = "Delete";

    bookButton.addEventListener('click', () => {
      myLibrary[index].toggleRead(); // Toggle the read status of the book
      displayBooks(); // Re-display the books to update the UI
    });

    removeButton.addEventListener('click', () => {
      myLibrary.splice(index, 1); // Remove book from the library
      displayBooks(); // Re-display the updated library
    });

    bookContainer.appendChild(title);
    bookContainer.appendChild(author);
    bookContainer.appendChild(pages);
    bookContainer.appendChild(isRead);
    bookContainer.appendChild(bookButton);
    bookContainer.appendChild(removeButton);

    libraryContainer.appendChild(bookContainer);
  })
}




export default createNewProject();