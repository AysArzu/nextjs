const setClock = ()=>{

    hour.innerText = new Date().getHours().toString().padStart(2, "0");
    minute.innerText = new Date().getMinutes().toString().padStart(2, "0");
    second.innerText = new Date().getSeconds().toString().padStart(2, "0");
}

setClock();

setInterval(setClock, 1000);




/*console.log(new Date().toLocaleTimeString());

setInterval(()=>{
    document.querySelector("p").innerText = new Date().toLocaleTimeString();
}, 1000);*/