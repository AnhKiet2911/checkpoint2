const homeContainer = document.querySelector('.container');

fetch('https://6584392b4d1ee97c6bcf4612.mockapi.io/product/projects', {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(projects => {
  // Do something with the list of tasks
  console.log(projects);
  projects.forEach(
    (project) => {
        const projectItem = document.createElement('div');
        projectItem.classList.add("project-Item");
        projectItem.innerHTML =
        `
            <img src='${project.image}'></img>
            <p>${project.title}</p>
            <p>${project.price}$</p>

        `
        homeContainer.appendChild(projectItem);
        console.log(project);
  });
}).catch(error => {
  // handle error
})