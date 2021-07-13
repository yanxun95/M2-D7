//Ex11
const ex11 = () => {
    let x = document.getElementsByClassName("nav d-flex")[0];
    let newLink = document.createElement("a")
    newLink.setAttribute("class", "p-2 text-muted");
    newLink.setAttribute("href", "https://www.google.com");
    newLink.innerHTML = "Google";
    x.appendChild(newLink);
}
ex11();

const ex12 = () => {
    // let x = document.getElementsByTagName("h1")[0];
    // x.innerHTML = "Title has been change";
    let y = document.querySelector("h1");
    y.innerHTML = "Title has been change";
}
ex12();

const ex13 = () => {
    let x = document.getElementsByClassName("jumbotron p-4 p-md-5 text-white rounded bg-dark")[0];
    x.classList.add("bgGrey");
}
ex13();

const ex14 = () => {
    let x = document.getElementsByClassName("list-unstyled")[1];
    x.innerHTML = "";
}
ex14();

const ex15 = () => {
    let x = document.getElementsByTagName("h1")[0];
    x.classList.add("columnsize");
}
ex15();

const ex16 = () => {
    let x = document.getElementsByClassName("col-4 d-flex justify-content-end align-items-center")[0].children[0].children[0];
    x.remove();
}
ex16();

const ex17 = () => {
    let x = document.getElementsByClassName("blog-post");
    for (let i = 0; i < x.length; i++){
        let y = x[i].children[2].innerText.split(" ").join("");
        let newText = y.slice(0,50)
         x[i].children[2].innerText = newText;
    }
}
ex17();

const ex18 = () => {
    //let x = document.querySelector(".col-md-8 .blog-main")
    let x = document.getElementsByClassName("col-md-8 blog-main");
    let div = document.createElement("div");
    let tittle = document.createElement("tittle");
    tittle.innerHTML = "NewDiv";
    div.appendChild(tittle)
    console.log(div)
    x.appendChild(div)
}

const ex20 = () => {
    let x = document.querySelectorAll(".blog-post-meta a");
    for (let i of x){
        i.addEventListener("mouseenter", alertFunction)
    }
}

const alertFunction = (event) => {
  alert(event.target.innerText);
}
ex20();
    