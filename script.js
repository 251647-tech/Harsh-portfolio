function filterProjects(type){
  const projects = document.querySelectorAll('.project');
  projects.forEach(p=>{
    if(type==='all' || p.classList.contains(type)){
      p.style.display='block';
    }else{
      p.style.display='none';
    }
  });
}
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json"
      }
    });

    if (response.ok) {
      status.textContent = "✅ Message sent successfully!";
      status.style.color = "green";
      form.reset();
    } else {
      status.textContent = "❌ Something went wrong. Try again.";
      status.style.color = "red";
    }
  } catch (error) {
    status.textContent = "❌ Network error. Try later.";
    status.style.color = "red";
  }
});
function askBot() {
  const input = document.getElementById("botInput").value.toLowerCase();
  const output = document.getElementById("botOutput");

  if (input.includes("skill")) {
    output.innerText = "I know HTML, CSS, JavaScript, Python, C/C++, Git & GitHub.";
  } 
  else if (input.includes("project")) {
    output.innerText = "I have built a Portfolio Website, AI Calculator, Mood Recommender, and Data Analysis projects.";
  } 
  else if (input.includes("contact")) {
    output.innerText = "You can contact me using the Contact Me form or via LinkedIn & GitHub.";
  } 
  else {
    output.innerText = "🤔 Sorry, I didn’t understand. Try asking about skills, projects, or contact.";
  }
}
