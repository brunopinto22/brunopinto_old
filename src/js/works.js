fetch("./src/data/work.json")
    .then((response) => response.json())
    .then((data) => generateHTML(data));

// Function to generate the HTML for each item
function generateHTML(data) {
  const workContainer = document.getElementById("work-container");

  data.forEach((item) => {
    const workCard = document.createElement("a");
    workCard.classList.add("work-card");
    workCard.href = item.link || "./src/pages/404.html";
    if (item.target) {
      workCard.setAttribute("target", "_blank");
    }

    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundImage = `url(./src/assets/img/projects/${item.img})`;

    const contentDiv = document.createElement("div");

    const nomeH2 = document.createElement("h2");
    nomeH2.classList.add("main-font");
    nomeH2.textContent = item.nome;
    contentDiv.appendChild(nomeH2);

    item.maintag.forEach((tag) => {
      const mainTagH3 = document.createElement("h3");
      mainTagH3.classList.add("label", getColorClass(tag.color));
      mainTagH3.textContent = tag.name;
      contentDiv.appendChild(mainTagH3);
    });

    contentDiv.appendChild(document.createElement("br"));

    item.sctag.forEach((tag) => {
      const scTagH3 = document.createElement("h3");
      scTagH3.classList.add("label", "label-light", getSecColorClass(tag.color));
      scTagH3.textContent = tag.name;
      contentDiv.appendChild(scTagH3);
    });

    card.appendChild(contentDiv);
    workCard.appendChild(card);
    workContainer.appendChild(workCard);
  });

  const workObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        workObs.unobserve(entry.target);
      }
    });
  });
  
  document.querySelectorAll('.work-card').forEach(boxElement => {
    workObs.observe(boxElement);
  });

}

// Function to return class based on color attribute
function getColorClass(color) {

  if (!color) {
    return "default";
  }

  switch (color) {
    case "red":
      return "red";
    case "blue":
      return "blue";
    case "green":
      return "green";
    case "purple":
      return "purple";
    case "light-blue":
      return "light-blue";
    // Add more cases for other colors as needed
    default:
      return "default";
  }
}

function getSecColorClass(color) {

  if (!color) {
    return "default";
  }

  switch (color) {
    case "red":
      return "red-light";
    case "blue":
      return "blue-light";
    case "green":
      return "green-light";
    case "purple":
      return "purple-light";
    case "light-blue":
      return "light-blue-light";
    // Add more cases for other colors as needed
    default:
      return "default";
  }
}


