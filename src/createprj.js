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

export default createNewProject();