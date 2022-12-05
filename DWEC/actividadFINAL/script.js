let main = document.getElementById("main");
let form = document.getElementById("form");
let up = document.getElementsByClassName("fa-solid fa-pen");
//let formUp= document.getElementById("formUp");

let elems = document.getElementsByClassName("name");
let mails = document.getElementsByClassName("mail");
let upbu = document.getElementsByClassName("update");

const url = "https://reqres.in/api/users/";

const getAll = async () => {
    console.log("Hola estoy siendo invocado ")
    try {
        let res = await fetch(url);
        let json = await res.json();
        console.log(res);
        console.log(json);
        json.data.forEach(e => {

            let id = e.id;
            let divUser = document.createElement("div");
            divUser.setAttribute("class", "user");


            let name = document.createElement("p");
            name.setAttribute("class", "name");
            name.setAttribute("contentEditable", "false");
            name.textContent = e.first_name;


            let mail = document.createElement("p");
            mail.setAttribute("class", "mail");
            mail.setAttribute("contentEditable", "false");
            mail.textContent = e.email;


            let img = document.createElement("img");
            img.setAttribute("src", e.avatar);

            let divIcon = document.createElement("div");
            divIcon.setAttribute('class', 'icons');

            let iconDelete = document.createElement("button");
            let iconUpdate = document.createElement("button");

            let iDelete = document.createElement("i");
            iDelete.setAttribute("class", "fa-solid fa-trash");
            let iUpdate = document.createElement("i");
            iUpdate.setAttribute("class", "fa-solid fa-pen");

            iconDelete.setAttribute("class", "delete");
            iconDelete.setAttribute("id", id);
            iconUpdate.setAttribute("class", "update");
            iconUpdate.setAttribute("id", id);

            iconDelete.append(iDelete);
            iconUpdate.append(iUpdate);

            divIcon.append(iconDelete, iconUpdate);


            divUser.append(name);

            divUser.append(mail);

            divUser.append(img);

            divUser.append(divIcon);

            main.append(divUser);

            // console.log(divUser);

        })

    } catch (error) {

    }

    //update();
    //patch
    //PARA HACER EL UPDATE//
        for( let j =0;j<upbu.length;j++){
        upbu[j].addEventListener("click",  e  =>{
            console.log("update")
            alert("Click on the name or the mail to update!")
            for (let i=0; i < elems.length; i++) {

                  if(e.target.classList.contains("update")){



                      elems[i].contentEditable="true";
                      mails[i].contentEditable="true";
                  }

            }

        });


    }
}


// let update = async () => {

//     // try {
//     //     let options = {
//     //         method: "PATCH",
//     //         headers: {
//     //             "Content-type": "application/json ; charset=utf-8"
//     //         },
//     //         body: JSON.stringify({
//     //             first_name: e.target.name.value,
//     //             mail: e.target.mail.value,

//     //         })

//     //     };
//     //     let res = await fetch(url, options);
//     //     let json = await res.json();

//     for (let j = 0; j < upbu.length; j++) {
//         upbu[j].addEventListener("click", e => {
//             console.log("update")
//             alert("Click on the name or the mail to update!")
//             for (let i = 0; i < elems.length; i++) {

//                 if (e.target.classList.contains("update")) {



//                     elems[i].contentEditable = "true";
//                     mails[i].contentEditable = "true";

//                 }

//             }

//         });

//         // }
//         //     }catch{

//         //     }

//     }
// };



document.addEventListener("DOMContentLoaded", getAll);



document.addEventListener("submit", async e => {

    console.log("Hola");
    if (e.target === form) {
        e.preventDefault();
        if (!e.target.id.value) {

            try {
                let options = {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json ; charset=utf-8"
                    },
                    body: JSON.stringify({
                        first_name: e.target.name.value,
                        mail: e.target.mail.value,
                        avatar: e.target.img.value

                    })

                };
                let res = await fetch(url, options);
                let json = await res.json();

                let id = e.id;
                let divUser = document.createElement("div");
                divUser.setAttribute("class", "user");


                let name = document.createElement("p");
                name.setAttribute("class", "name")
                name.setAttribute("contentEditable", "false");
                name.textContent = e.target.name.value;

                let mail = document.createElement("p");
                mail.setAttribute("class", "mail");
                mail.setAttribute("contentEditable", "false");
                mail.textContent = e.target.mail.value;


                let img = document.createElement("img");
                img.setAttribute("src", e.target.img.value);

                let divIcon = document.createElement("div");
                divIcon.setAttribute('class', 'icons');

                let iconDelete = document.createElement("button");
                let iconUpdate = document.createElement("button");

                let iDelete = document.createElement("i");
                iDelete.setAttribute("class", "fa-solid fa-trash");
                let iUpdate = document.createElement("i");
                iUpdate.setAttribute("class", "fa-solid fa-pen");

                iconDelete.setAttribute("class", "delete");
                iconDelete.setAttribute("id", id);
                iconUpdate.setAttribute("class", "update");
                iconUpdate.setAttribute("id", id);

                iconDelete.append(iDelete);
                iconUpdate.append(iUpdate);

                divIcon.append(iconDelete, iconUpdate);


                divUser.append(name);

                divUser.append(mail);

                divUser.append(img);

                divUser.append(divIcon);

                main.append(divUser);



            } catch (error) {

            }

        }
    }
});



// document.addEventListener("click", async e => {
//     if (e.target.classList.contains("delete")) {

//             try {

//                 let options = {
//                     method: "DELETE",
//                     headers: {
//                         "Content-type": "application/json"
//                     }
//                 }

//                 let elemento = document.getElementById(`${e.target.id}`)
//                 let res = await fetch(`https://reqres.in/api/users/${e.target.id}`, options)

//                     .then(() => elemento.parentElement.innerHTML = 'Deleted')
                
//                 console.log(res);
//                 let name = document.getElementsByClassName(`${e.target.name}`)
//                 name.textContent="null"


//             } catch (error) {
//                 console.log(error);
            
//         }

//     }
// });

