// Add interactivity to the projects section
const projectsList = document.getElementById('projects-list');
const projectItems = projectsList.getElementsByTagName('li');

for (let i = 0; i < projectItems.length; i++) {
  projectItems[i].addEventListener('click', function() {
    this.classList.toggle('active');
  });
}
