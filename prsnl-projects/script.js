// const parent = document.querySelector('.parent')
// console.log(parent);
// console.log(parent.children);
// // console.log(parent.children[1].innerHTML);

// for (let i = 0; i < parent.children.length; i++) {
//     const element = parent.children[i].innerHTML;
//     console.log(element);
//     parent.children[i].style.color="blue";
    
// }
// const div = document.createElement('div');
// div.className= "main";
// div.id = Math.round(Math.random() * 10 + 1);
// div.setAttribute("title", "Generated Title");
// div.style.backgroundColor = "orange";
// div.style.padding = "10px";
// // div.innertext="Yo";
// const addText = document.createTextNode("Yo")
// div.appendChild(addText)
// document.body.appendChild(div)
// console.log(div);


// const li = document.createElement('li')
// const ul = document.querySelector('ul')
// const add = document.getElementById('create')

// function addLi(){
//     li.innerText="Rust"
//     document.querySelector('.language').appendChild(li)
// }
// add.addEventListener('click',function (item) {
//     addLi(item)
// })

// function addLanguage(language){
//     const li = document.createElement('li');
//     li.innerHTML = `${language}`
//     document.querySelector('.language').appendChild(li)
// }

// const add = document.getElementById('create');
// const inputText = document.getElementById('addText')


// add.addEventListener('click',function (){
//     console.log(inputText.value);
//     addLanguage(inputText.value)
// })

const user = {
    username: "Yash Yeager",
    loginCount: 10,
    isLoggedIn: true
}
console.log(user["username"]);
