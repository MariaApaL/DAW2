 console.log("Hola estoy siendo invocado ")
    try{
        let res= await fetch(url);
        let json = await res.json();
        console.log(res);
        console.log(json);
       json.data.forEach(e =>{
        let name= document.createElement("p");
        name.textContent = e.first_name;

        let mail = document.createElement("p");
        mail.textContent = e.email;

        let img = document.createElement("img");
        img.setAttribute("src",e.avatar);

        let divIcon = document.createElement("div");
        let iconDelete = document.createElement("button");
        let iconUpdate = document.createElement("button");
        iconDelete.setAttribute("class","delete");
        iconUpdate.setAttribute("class","update");
        divIcon.append(iconDelete,iconUpdate);

        main.append(name);
        main.append(mail);
        main.append(img);
        main.append(divIcon);