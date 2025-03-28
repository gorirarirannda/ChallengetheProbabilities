function mkstats(){
    var Plife = Math.floor(Math.random()*5001);/*Player life */
    var Ppower = Math.floor(Math.random()*3001);/*Player power */
    var Pguard = Math.floor(Math.random()*3001);/*Player guard */
    var PCRI = Math.floor(Math.random()*101);/*Player critical */
    var Elife = Math.floor(Math.random()*5001);/*Enemy life */
    var Epower = Math.floor(Math.random()*3001);/*Enemy power */
    var Eguard = Math.floor(Math.random()*3001);/*Enemy guard */
    var ECRI = Math.floor(Math.random()*101);/*Enemy critical */
    
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
}
function fight(){
    /*クリティカル発動の有無 */
    var PCRIstat = true;
    var random = Math.floor(Math.random()*101);
    if (random == 0){
        random = 1;
    }
    if (PCRI <= random){
        PCRIstat = true;
    }else{
        PCRIstat = false;
    }
    var ECRIstat = true;
    random = Math.floor(Math.random()*101);
    if (random == 0){
        random = 1;
    }
    if (ECRI <= random){
        ECRIstat = true;
    }else{
        ECRIstat = false;
    }
    /*与ダメージの計算 */
    var PATK = 0;
    if (PCRIstat == true){
        PATK = Ppower*2 - Eguard;
    }else{
        PATK = Ppower - Eguard;
    }
    var EATK = 0;
    if(ECRIstat == true){
        EATK = Epower*2 - Pguard;
    }else{
        EATK = Epower - Pguard;
    }
    /*ライフの計算 */
    var Plife_fighting = Plife;

}