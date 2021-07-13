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
    let x = document.getElementsByTagName("h1")[0];
    x.innerHTML = "Title has been change";
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
    console.log(x)
}
ex16();