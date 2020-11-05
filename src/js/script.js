function sleep(x){
    return new Promise((resolve) => setTimeout(resolve, x));
}

function foo(){
    document.querySelector("#send").style.animation = "sweep 2s linear 1";

    sleep(2050).then( () => {
        document.querySelector("#form-info").innerHTML = "Email  sent!";
    })
}