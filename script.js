const click = document.querySelectorAll("#click")
const home = document.querySelector("#home")
const aboutMe = document.querySelector("#aboutMe")
const projects = document.getElementById("projects")
const skills = document.getElementById("skills")
const contacts = document.getElementById("contacts")

const menuHambuguer = document.querySelector(".menuHambuguer")
const nav = document.querySelector("nav")

const btnArrow = document.getElementById("arrow")


click.forEach((e) => {

  e.addEventListener("click", (e) => {

    switch (e.target.className) {

      case "headerHome":
        home.scrollIntoView({ behavior: "smooth" })
        console.log("ok")
        break
      case "headerAboutMe":
        aboutMe.scrollIntoView({ behavior: "smooth" })
        break
      case "headerProjects":
        projects.scrollIntoView({ behavior: "smooth" })
        break
      case "headerSkills":
        skills.scrollIntoView({ behavior: "smooth" })
        break
      case "headerContact":
        contacts.scrollIntoView({ behavior: "smooth" })
        break
      default: 
        break
    }

  })


})


menuHambuguer.addEventListener("click", () => {

  nav.classList.toggle("showNav")
  
  setInterval(() => {
    nav.classList.remove("showNav")
  }, 4000)
})


window.addEventListener("scroll", () => {
  const winScroll = document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  
  let scrolled = (winScroll / height) * 100
  document.getElementById("progress").style.width = scrolled + "%";
  
  if(scrolled > 85){
    document.getElementById("arrow").classList.add("fixedBtn")
  }else {
    document.getElementById("arrow").classList.remove("fixedBtn")
  }
})


btnArrow.addEventListener("click", () => {

  window.scrollTo({top: 0, behavior: "smooth"})

})


