//alert('Olá mundo!');
var video= document.getElementById("videoUno");
// ----------------------INICIO DOS CONTROLADORES DO VIDEO 
function iniciar() {
    //video.src="../../videos/y2mate.com - isla_de_pascua_sau_sau_con_grupo_kari_kari_5HxpJbfIZOY_360p.mp4";
    video.play();
}
function pausar() {
    video.pause();
}
function parar() {
    video.pause();
    video.currentTime = 0;
    //video.src="img/renaultPoster.jpg";
}

var volumeVal = document.getElementById('porcentagem');
var volVideo = document.getElementById('inputVideo');

function volumen() {
    var vol= (parseFloat(volVideo.value)*100).toFixed(2);
    video.volume= volVideo.value;
    porcentagem.innerHTML = vol+"%";
}

function silenciar() {
    if (video.muted == false) {
        video.muted=true;
    } else {
        video.muted = false;
    }
}

function full() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    }
}

// time line -------
var duracao= document.getElementById("tempo");
duracao.addEventListener("change", function() {
    var tempo = video.duration * (duracao.value / 100);
    video.currentTime = tempo;
    console.log("tempo", video.currentTime);
});

//alterar o valor do video quando executa o play 

video.addEventListener("timeupdate", function() {
    // calcular o tempo q vai
    var valor = (100 / video.duration) * video.currentTime;
    // valor do tempo na tela 
    duracao.value = valor;
    tempoVal.innerHTML = duracao.value;
    console.log(duracao.value);
});
// ----------------------//////////////////////////////////////////////////////////////////////FIM DOS CONTROLES DO VIDEO um
var videoD= document.getElementById("videoDos");

function iniciarVd() {
    //video.src="../../videos/y2mate.com - isla_de_pascua_sau_sau_con_grupo_kari_kari_5HxpJbfIZOY_360p.mp4";
    videoD.play();
}
function pausarVd() {
    videoD.pause();
}
function pararVd() {
    videoD.pause();
    videoD.currentTime = 0;
    //video.src="img/renaultPoster.jpg";
}

var volumeValD = document.getElementById('porcentagemVd');
var volVideoD = document.getElementById('inputVideoD');

function volumenVd() {
    var vol= (parseFloat(volVideoD.value)*100).toFixed(2);
    videoD.volume= volVideoD.value;
    volumeValD.innerHTML = vol+"%";
}

function silenciarVd() {
    if (videoD.muted == false) {
        videoD.muted=true;
    } else {
        videoD.muted = false;
    }
}

function fullVd() {
    if (videoD.requestFullscreen) {
        videoD.requestFullscreen();
    }
}

// time line -------
var duracaoVd= document.getElementById("tempoVd");
duracaoVd.addEventListener("change", function() {
    var tempo = videoD.duration * (duracaoVd.value / 100);
    videoD.currentTime = tempo;
    console.log("tempo", videoD.currentTime);
});

//alterar o valor do video quando executa o play 

videoD.addEventListener("timeupdate", function() {
    // calcular o tempo q vai
    var valor = (100 / videoD.duration) * videoD.currentTime;
    // valor do tempo na tela 
    duracaoVd.value = valor;
    tempoValVd.innerHTML = duracaoVd.value;
    console.log(duracaoVd.value);
});


// INICIO DOS CONTROLES DOs AUDIOs ////////////////////////////////////////////////////
var audio1= document.getElementById("audioUno");
var audio2= document.getElementById("audioDos");
var audio3= document.getElementById("audioTres");
var audio4= document.getElementById("audioCuatro");

function iniciarAudio1(){
    audio1.play();
}
function pausarAudio1() {
    audio1.pause();
}
function pararAudio1() {
    audio1.pause();
    audio1.currentTime=0;
}
var volumeValAudio1 = document.getElementById("porcentagemVolAudio1");
var volAudio1 = document.getElementById("volumeInputAudio1");
function volumenAudio1() {
    var volumeAudio1= (parseFloat(volAudio1.value)*100).toFixed(2);
    audio1.volume= volAudio1.value;
    porcentagemVolAudio1.innerHTML = volumeAudio1+"%";
}
function silenciarAudio1() {
    if (audio1.muted == false) {
        audio1.muted=true;
    } else {
        audio1.muted = false;
    }
}
// time line Audio------- 
var duracaoAudio1 = document.getElementById("tempoAudio1");
duracaoAudio1.addEventListener("change", function() {
    var tempAudio1= audio1.duration1 * (duracaoAudio1.value / 100);
    audio1.currentTime = tempAudio1;
    console.log("tempoAudio", video1.currentTime);
});
// alterar o valor do audip quando esxecuta o play
audio1.addEventListener("timeupdate", function() {
    var valorA1 = (100 / audio1.duration) * audio1.currentTime;
    duracaoAudio1.value = valorA1;
    tempoValAudio1.innerHTML = duracaoAudio1.value;
    console.log(duracaoAudio1.value);
});
///////////////////////////////////////////////////////////////////////////////

function iniciarAudio2(){
    audio2.play();
}
function pausarAudio2() {
    audio2.pause();
}
function pararAudio2() {
    audio2.pause();
    audio2.currentTime=0;
}

var volumeValAudio2 = document.getElementById("porcentagemVolAudio2");
var volAudio2 = document.getElementById("volumeInputAudio2");
function volumenAudio2() {
    var volumeAudio2= (parseFloat(volAudio2.value)*100).toFixed(2);
    audio2.volume= volAudio2.value;
    porcentagemVolAudio2.innerHTML = volumeAudio2+"%";
}
function silenciarAudio2() {
    if (audio2.muted == false) {
        audio2.muted=true;
    } else {
        audio2.muted = false;
    }
}

// time line Audio------- 
var duracaoAudio2 = document.getElementById("tempoAudio2");
duracaoAudio2.addEventListener("change", function() {
    var tempAudio2= audio2.duration * (duracaoAudio2.value / 100);
    audio2.currentTime = tempAudio2;
    console.log("tempoAudio", audio2.currentTime);
});
// alterar o valor do audip quando esxecuta o play
audio2.addEventListener("timeupdate", function() {
    var valorA2 = (100 / audio2.duration) * audio2.currentTime;
    duracaoAudio2.value = valorA2;
    tempoValAudio2.innerHTML = duracaoAudio2.value;
    console.log(duracaoAudio2.value);
});
///////////////////////////////////////////////////////////////////////////////////////
function iniciarAudio3(){
    audio3.play();
}
function pausarAudio3() {
    audio3.pause();
}
function pararAudio3() {
    audio3.pause();
    audio3.currentTime=0;
}

var volumeValAudio3 = document.getElementById("porcentagemVolAudio3");
var volAudio3 = document.getElementById("volumeInputAudio3");
function volumenAudio3() {
    var volumeAudio3= (parseFloat(volAudio3.value)*100).toFixed(2);
    audio3.volume= volAudio3.value;
    porcentagemVolAudio3.innerHTML = volumeAudio3+"%";
}
function silenciarAudio3() {
    if (audio3.muted == false) {
        audio3.muted=true;
    } else {
        audio3.muted = false;
    }
}

// time line Audio------- 
var duracaoAudio3 = document.getElementById("tempoAudio3");
duracaoAudio3.addEventListener("change", function() {
    var tempAudio3= audio3.duration * (duracaoAudio3.value / 100);
    audio3.currentTime = tempAudio3;
    console.log("tempoAudio", audio3.currentTime);
});
// alterar o valor do audip quando esxecuta o play
audio3.addEventListener("timeupdate", function() {
    var valorA3 = (100 / audio3.duration) * audio3.currentTime;
    duracaoAudio3.value = valorA3;
    tempoValAudio3.innerHTML = duracaoAudio3.value;
    console.log(duracaoAudio3.value);
});

/////////////////////////////////////////////////////////////////////////////////////////////
function iniciarAudio4(){
    audio4.play();
}
function pausarAudio4() {
    audio4.pause();
}
function pararAudio4() {
    audio4.pause();
    audio4.currentTime=0;
}

var volumeValAudio4 = document.getElementById("porcentagemVolAudio4");
var volAudio4 = document.getElementById("volumeInputAudio4");
function volumenAudio4() {
    var volumeAudio4= (parseFloat(volAudio4.value)*100).toFixed(2);
    audio4.volume= volAudio4.value;
    porcentagemVolAudio4.innerHTML = volumeAudio4+"%";
}
function silenciarAudio4() {
    if (audio4.muted == false) {
        audio4.muted=true;
    } else {
        audio4.muted = false;
    }
}

// time line Audio------- 
var duracaoAudio4 = document.getElementById("tempoAudio4");
duracaoAudio4.addEventListener("change", function() {
    var tempAudio4= audio4.duration * (duracaoAudio4.value / 100);
    audio4.currentTime = tempAudio4;
    console.log("tempoAudio", video4.currentTime);
});
// alterar o valor do audip quando esxecuta o play
audio4.addEventListener("timeupdate", function() {
    var valorA4 = (100 / audio4.duration) * audio4.currentTime;
    duracaoAudio4.value = valorA4;
    tempoValAudio4.innerHTML = duracaoAudio4.value;
    console.log(duracaoAudio4.value);
});

 //----------------------FIM DOS CONTROLES DO AUDIO 

//Slider 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});
 /*$('.owl-carousel').owlCarousel({
    items:5,
    loop:true,
    margin:10,
    merge:true,
    responsive:{
        678:{
            mergeFit:true
        },
        1000:{
            mergeFit:false
        }
    }
});*/