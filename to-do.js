function addToDo() {
    const newToDo = document.createElement('li');
    let str = document.getElementById('task-input').value;
    // newToDo.innerText = str;
    const inp = document.createElement('input');
    inp.classList.add('form-control');
    inp.value = str;
    newToDo.append(inp);
    newToDo.classList.add('list-group-item');
    const deleteButton = document.createElement('button');
    // const editButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger');
    // editButton.classList.add('btn', 'btn-success');
    const trash = document.createElement('i');
    // const pencil = document.createElement('i');
    trash.classList.add('fa-solid', 'fa-trash-can');
    // pencil.classList.add('fa-solid', 'fa-pencil');
    deleteButton.appendChild(trash);
    // editButton.appendChild(pencil);
    // editButton.classList.add('butter');
    const spain = document.createElement('span');
    spain.append(deleteButton);
    // spain.append(editButton);
    spain.classList.add('righty');
    newToDo.append(spain);
    const ull = document.querySelector(".list-group");
    ull.append(newToDo);
    deleteButton.addEventListener("click", function () {
        newToDo.remove();
    });
    // editButton.addEventListener("click", function () {
    // const inp = document.createElement('input');
    // inp.classList.add('form-control');
    // newToDo.append(inp);
    //     newToDo.innerText = inp.value;
    //     inp.remove();
    // });
    document.getElementById('task-input').value = '';

}




const butt = document.querySelector("#grenade");
butt.addEventListener("click", addToDo);

// const dells = document.getElementsByClassName('btn-danger');

// for (let dell of dells) {
//     dell.addEventListener("click", dellFunction);
// }

// function dellFunction() {
//     const lee = this.parentElement.parentElement;
//     (lee.parentElement).removeChild(lee);
// }



    //goes in dell function maybe
    // const deltoid = document.querySelector('.btn-danger');





// window.addEventListener("DOMContentLoaded", (event) => {
//     const butt = document.querySelector(".btn btn-dark");
//     if (butt) {
//         butt.addEventListener("click", addToDo);
//     }
// });





// let q_or_do = false;
// let list = [];
// while (!q_or_do) {
//     let to_do = prompt("What would you like to do?");
//     if (to_do.toLowerCase() === "quit") {
//         q_or_do = true;
//         alert("Ok goodbye!!!");
//     } else if (to_do.toLowerCase() === "add") {
//         let add = prompt("What would you like to add?");
//         list.push(add);
//     } else if (to_do.toLowerCase() === "delete") {
//         let del = parseInt(prompt("State the index of the item that you would like to delete?"));
//         list.splice(del, 1);
//     } else if (to_do.toLowerCase() === "list") {
//         console.log('**************');
//         for (let i = 0; i < list.length; i++) {
//             console.log(i + '. ' + list[i]);
//         }
//         console.log('**************');
//     } else {
//         alert("that's not a valid answer!!!!");

//     }
// }

// let square = function sq(side) {
//     return side * side;

// }