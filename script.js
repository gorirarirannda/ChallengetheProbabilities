var Plife = 0;
var Ppower = 0;
var Pguard = 0;
var PCRI = 0;
var Elife = 0;
var Epower = 0;
var Eguard = 0;
var ECRI = 0;
function mkstats(){
    Plife = Math.floor(Math.random()*5001);/*Player life */
    Ppower = Math.floor(Math.random()*3001);/*Player power */
    Pguard = Math.floor(Math.random()*3001);/*Player guard */
    PCRI = Math.floor(Math.random()*101);/*Player critical */
    Elife = Math.floor(Math.random()*5001);/*Enemy life */
    Epower = Math.floor(Math.random()*3001);/*Enemy power */
    Eguard = Math.floor(Math.random()*3001);/*Enemy guard */
    ECRI = Math.floor(Math.random()*101);/*Enemy critical */
    
    var htmlPlife = document.getElementById("Plife");
    htmlPlife.innerHTML = Plife;
    var htmlPpower = document.getElementById("Ppower");
    htmlPpower.innerHTML = Ppower;
    var htmlPguard = document.getElementById("Pguard");
    htmlPguard.innerHTML = Pguard;
    var htmlPCRI = document.getElementById("PCRI");
    htmlPCRI.innerHTML = PCRI;

    var htmlElife = document.getElementById("Elife");
    htmlElife.innerHTML = Elife;
    var htmlEpower = document.getElementById("Epower");
    htmlEpower.innerHTML = Epower;
    var htmlEguard = document.getElementById("Eguard");
    htmlEguard.innerHTML = Eguard;
    var htmlECRI = document.getElementById("ECRI");
    htmlECRI.innerHTML = ECRI;

    var fightbutton = document.getElementById("fight");
    fightbutton.innerHTML = `<button onclick="fight()" id="button_fight">Fight!</button>`;
}
var new_log = null;
let log_element = document.getElementById("fightlog");
function fight(){
    var randomstats = document.getElementById("randomstats");
    randomstats.innerHTML = `<button></button>`;
    /*クリティカル発動の有無 */
    var PCRIstat = false;
    var random = Math.floor(Math.random()*101);
    if (random == 0){
        random = 1;
    }
    if (PCRI >= random){
        PCRIstat = true;
    }else{
        PCRIstat = false;
    }
    var ECRIstat = false;
    random = Math.floor(Math.random()*101);
    if (random == 0){
        random = 1;
    }
    if (ECRI >= random){
        ECRIstat = true;
    }else{
        ECRIstat = false;
    }
    /*与ダメージの計算 */
    var PATK = 0;
    if (PCRIstat == true){
        PATK = (Ppower)*2 - Eguard;
    }else{
        PATK = Ppower - Eguard;
    }
    if (PATK < 0){
        PATK = 0
    }
    var EATK = 0;
    if(ECRIstat == true){
        EATK = (Epower)*2 - Pguard;
    }else{
        EATK = Epower - Pguard;
    }
    if (EATK < 0){
        EATK = 0
    }
    /*ライフの計算 */
    var Plife_fighting = Plife;
    Plife = Plife_fighting - EATK;
    var Elife_fighting = Elife;
    Elife = Elife_fighting - PATK;
    var Pdead = false;
    var Edead = false;
    if (Plife <= 0){
        Pdead = true;
    }
    if (Elife <= 0){
        Edead = true;
    }
    /*fightlogの出力 */
    if(PCRIstat == true){
        new_log = document.createElement("p");
        new_log.textContent = "プレイヤーのクリティカル攻撃"+PATK;
        log_element.appendChild(new_log);
    }else{
        new_log = document.createElement("p");
        new_log.textContent = "プレイヤーの攻撃"+PATK;
        log_element.appendChild(new_log);
    }
    new_log = document.createElement("p");
    new_log.textContent = "敵の体力"+Elife;
    log_element.appendChild(new_log);
    if(ECRIstat == true){
        new_log = document.createElement("p");
        new_log.textContent = "敵のクリティカル攻撃"+EATK;
        log_element.appendChild(new_log);
    }else{
        new_log = document.createElement("p");
        new_log.textContent = "敵の攻撃"+EATK;
        log_element.appendChild(new_log);
    }
    new_log = document.createElement("p");
    new_log.textContent = "プレイヤーの体力"+Plife;
    log_element.appendChild(new_log);
    if(Pdead == true){
        new_log = document.createElement("p");
        new_log.textContent = "プレイヤーは倒れた。";
        log_element.appendChild(new_log);
    }
    if (Edead == true){
        new_log = document.createElement("p");
        new_log.textContent = "敵は倒れた。";
        log_element.appendChild(new_log);
    }
}
function miku(){
    window.location.href = "miku.html"
}
function reload(){
    window.location.reload(true);
}
