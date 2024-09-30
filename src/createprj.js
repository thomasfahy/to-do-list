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

    const description = document.createElement('p');

    author.textContent = `Description: ${project.description}`;

    const dueDate = document.createElement('p');
    dueDate.textContent = `Due: ${project.dueDate}`;

    const priority = document.createElement('p');
    priority.textContent = `Priority: ${book.priority}`;

    const viewProjectButton = document.createElement("button");
    viewProjectButton.classList.add("view-project");
    viewProjectButton.textContent = "View";


    viewProjectButton.addEventListener('click', () => {
      myLibrary[index].toggleRead(); // Toggle the read status of the book
      displayBooks(); // Re-display the books to update the UI
    });

    bookContainer.appendChild(title);
    bookContainer.appendChild(description);
    bookContainer.appendChild(dueDate);
    bookContainer.appendChild(priority);
    bookContainer.appendChild(viewProjectButton);

    libraryContainer.appendChild(bookContainer);
  })
}




export { createNewProject, displayProjects };