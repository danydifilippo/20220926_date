let dateNow = new Date()
console.log(dateNow)

document.getElementById('screen').innerHTML=dateNow

let giorno = [ "domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
let data = dateNow.toLocaleDateString('it-IT')
let ore = dateNow.toLocaleTimeString()
document.getElementById('screenIt').innerHTML=`${giorno[dateNow.getDay()]} ${data} alle ${ore}`

function btnFlag(timezone_fusorario) {
    let hours = dateNow.toLocaleTimeString('it-IT',{timeZone: timezone_fusorario})
    document.getElementById('EUtime').innerHTML=`${hours}`
}
