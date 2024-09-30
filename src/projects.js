function Project(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  
    this.info = function(){
      return(this.title, this.description, this.dueDate, this.priority);
    }
}

export { Project };