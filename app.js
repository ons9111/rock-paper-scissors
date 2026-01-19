const oyuncupuan = document.getElementById("oyuncupuan")
const bilgisayarpuan = document.getElementById("bilgisayarpuan")
const tas = document.getElementById("tas")
const kagit = document.getElementById("kagit")
const makas = document.getElementById("makas")
const oyuncusec = document.getElementById("oyuncusec")
const bilgisec = document.getElementById("bilgisec")
const mesaj = document.getElementById("mesaj")

let oyuncu = 0
let bilgisayar = 0

function bilgisayarsecti(){
    const secim = ["tas","kagit","makas"]
    const random = Math.floor(Math.random()*3)
    bilgisec.setAttribute("src", `images/${secim[random]}.png`)
    return secim[random]
}
tas.addEventListener("click",() =>{
    oyuncusec.setAttribute("src", `images/tas.png`)
    let bilrandom = bilgisayarsecti()
    sonuc("tas",bilrandom)
})
kagit.addEventListener("click", () => {
    oyuncusec.setAttribute("src",`images/kagit.png`)
    let bilrandom = bilgisayarsecti()
    sonuc("kagit",bilrandom)
})
makas.addEventListener("click",() => {
    oyuncusec.setAttribute("src", `images/makas.png`)
    let bilrandom = bilgisayarsecti()
    sonuc("makas",bilrandom)
})
function sonuc (gamer,computer) {
    if (gamer+computer === "tasmakas"){
        kazan()
    }else if(gamer+computer === "kagittas"){
        kazan()
    }else if(gamer+computer === "makaskagit"){
        kazan()
    }else if(gamer === computer){
        berabere()
    }else{
        kaybet()
    }
}
function kazan(){
    oyuncu = oyuncu+1
    mesaj.innerHTML = "tebrikler kazandınız"
    oyuncupuan.innerHTML = oyuncu.toString()
}
function kaybet(){
    bilgisayar = bilgisayar+1
    mesaj.innerHTML = "bilgisayar kazandı"
    bilgisayarpuan.innerHTML = bilgisayar.toString()
}
function berabere(){
    mesaj.innerText = "berabere"
}