let dateNow = new Date()
console.log(dateNow)

document.getElementById('screen').innerHTML=dateNow

giorno = [ "domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];
let data = dateNow.toLocaleDateString('it-IT')
let ore = dateNow.toLocaleTimeString()
document.getElementById('screenIt').innerHTML=`${giorno[dateNow.getDay()]} ${data} alle ${ore}`

function btnSpain() {
    let dateNow = new Date()
    let hours = dateNow.toLocaleTimeString('it-IT',{timeZone: "Europe/Lisbon"})
    document.getElementById('westEUtime').innerHTML=`${hours}`
}
