let tg = window.Telegram.WebApp;

tg.expand();

document.getElementById("test").display = none;
document.getElementById("first_name").innerHTML = tg.initDataUnsafe.user.first_name + ', Superadmin';

let trx_id = document.getElementById("trx_id")
let description = document.getElementById("description")
let attached_file = document.getElementById("attached_file")

let submit = document.getElementById("submit")

submit.addEventListener("click", () => {
    let data = {
        trx_id: trx_id,
        description: description,
        attached_file: attached_file
    }
    tg.sendData(JSON.stringify(data));
    tg.close;
})




