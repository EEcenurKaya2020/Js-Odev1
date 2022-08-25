let name = prompt("Adınızı Giriniz: ")
let change = document.querySelector("#info")
change.innerHTML = `${name}`

let days=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
function clockFunc(){
    let tarih = new Date();
    let d = days[tarih.getDay()];
    let h = tarih.getHours();
    let m = tarih.getMinutes();
    let s = tarih.getSeconds();
    let saat = document.querySelector("#clock")
    saat.innerHTML = `${h}:${m}:${s} ${d}`
}

setInterval(clockFunc, 1000);