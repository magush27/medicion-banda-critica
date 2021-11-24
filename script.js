window.onload = function () {
    draw();
    draw2();
    draw3();
}



// create web audio api context
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

//crea analizador de forma de onda
var analyser = audioCtx.createAnalyser();
analyser.fftSize = 256;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);

//crea analizador de forma de onda 2
var analyser2 = audioCtx.createAnalyser();
analyser2.fftSize = 256;
var bufferLength2 = analyser2.frequencyBinCount;
var dataArray2 = new Uint8Array(bufferLength2);
analyser2.getByteTimeDomainData(dataArray2);

//crea analizador de forma de onda 3
var analyser3 = audioCtx.createAnalyser();
analyser3.fftSize = 256;
var bufferLength3 = analyser3.frequencyBinCount;
var dataArray3 = new Uint8Array(bufferLength3);
analyser3.getByteTimeDomainData(dataArray3);


// create Oscillator node
const oscillator = audioCtx.createOscillator();
oscillator.type = 'sine';
oscillator.start();

// create Oscillator node 2
const oscillator2 = audioCtx.createOscillator();
oscillator2.type = 'sine';
oscillator2.start();

// create Oscillator node 3
const oscillator3 = audioCtx.createOscillator();
oscillator3.type = 'sine';
oscillator3.start();


//Elementos de pausa
function stopElement() {
    oscillator.disconnect(audioCtx.destination);
    oscillator.disconnect(analyser);
    oscillator2.disconnect(audioCtx.destination);
    oscillator2.disconnect(analyser);
}

function stopElement2() {
    oscillator.disconnect(audioCtx.destination);
    oscillator.disconnect(analyser2);
    oscillator2.disconnect(audioCtx.destination);
    oscillator2.disconnect(analyser2);

}
function stopElement3() {
    oscillator.disconnect(audioCtx.destination);
    oscillator.disconnect(analyser3);
    oscillator2.disconnect(audioCtx.destination);
    oscillator2.disconnect(analyser3);

}

//Rangos
const reproducir_200 = document.getElementById('reproducir-200');

const reproducir_400 = document.getElementById('reproducir-400');

const reproducir_100 = document.getElementById('reproducir-100');



// Get a canvas defined with ID "oscilloscope"
var canvas = document.getElementById("onda1");
var canvasCtx = canvas.getContext("2d");

var canvas2 = document.getElementById("onda2");
var canvasCtx2 = canvas2.getContext("2d");

var canvas3 = document.getElementById("onda3");
var canvasCtx3 = canvas3.getContext("2d");

var WIDTH = canvas.width;
var HEIGHT = canvas.height;
var WIDTH2 = canvas2.width;
var HEIGHT2 = canvas2.height;
var WIDTH3 = canvas3.width;
var HEIGHT3 = canvas3.height;

    function draw() {
      drawVisual = requestAnimationFrame(draw);

      analyser.getByteFrequencyData(dataArray);

      canvasCtx.fillStyle = 'rgb(0, 0, 0)';
      canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
    
        var barWidth = (WIDTH / bufferLength) * 1.5;
        var barHeight;
        var x = 0;
        
    for(var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i]/2;

        canvasCtx.fillStyle = 'rgb(' + (barHeight+100) + ',50,50)';
        canvasCtx.fillRect(x,HEIGHT-barHeight/2,barWidth,barHeight);

        x += barWidth + 1;
    }
};
   
function draw2() {
      drawVisual2 = requestAnimationFrame(draw2);

      analyser2.getByteFrequencyData(dataArray2);

      canvasCtx2.fillStyle = 'rgb(0, 0, 0)';
      canvasCtx2.fillRect(0, 0, WIDTH2, HEIGHT2);
    
        var barWidth2 = (WIDTH2 / bufferLength2) * 1.5;
        var barHeight2;
        var x2 = 0;
        
    for(var i2 = 0; i2 < bufferLength2; i2++) {
        barHeight2 = dataArray2[i2]/2;

        canvasCtx2.fillStyle = 'rgb(' + (barHeight2+100) + ',50,50)';
        canvasCtx2.fillRect(x2,HEIGHT2-barHeight2/2,barWidth2,barHeight2);

        x2 += barWidth2 + 1;
      }
};
    
function draw3() {
      drawVisual3 = requestAnimationFrame(draw3);

      analyser3.getByteFrequencyData(dataArray3);

      canvasCtx3.fillStyle = 'rgb(0, 0, 0)';
      canvasCtx3.fillRect(0, 0, WIDTH3, HEIGHT3);
    
        var barWidth3 = (WIDTH3 / bufferLength3) * 1.5;
        var barHeight3;
        var x3 = 0;
        
    for(var i3 = 0; i3 < bufferLength3; i3++) {
        barHeight3 = dataArray3[i3]/2;

        canvasCtx3.fillStyle = 'rgb(' + (barHeight3+100) + ',50,50)';
        canvasCtx3.fillRect(x3,HEIGHT3-barHeight3/2,barWidth3,barHeight3);

        x3 += barWidth3 + 1;
      }
    };


// 200Hz osciladores
reproducir_200.addEventListener('click', () => {


    oscillator.connect(analyser);
    oscillator.connect(audioCtx.destination);
    oscillator2.connect(analyser);
    oscillator2.connect(audioCtx.destination);

    oscillator.frequency.setValueAtTime(200, audioCtx.currentTime);
    oscillator2.frequency.setValueAtTime(150, audioCtx.currentTime);
    oscillator2.frequency.linearRampToValueAtTime(267, audioCtx.currentTime + 60);

});



// 4000Hz osciladores

reproducir_400.addEventListener('click', () => {


    oscillator.connect(analyser2);
    oscillator.connect(audioCtx.destination);
    oscillator2.connect(analyser2);
    oscillator2.connect(audioCtx.destination);



    oscillator.frequency.setValueAtTime(4000, audioCtx.currentTime);
    oscillator2.frequency.setValueAtTime(3000, audioCtx.currentTime);
    oscillator2.frequency.linearRampToValueAtTime(5333, audioCtx.currentTime + 60);



});

// 10000Hz osciladores

reproducir_100.addEventListener('click', () => {


    oscillator.connect(analyser3);
    oscillator.connect(audioCtx.destination);
    oscillator2.connect(analyser3);
    oscillator2.connect(audioCtx.destination);

    oscillator.frequency.setValueAtTime(10000, audioCtx.currentTime);
    oscillator2.frequency.setValueAtTime(7500, audioCtx.currentTime);
    oscillator2.frequency.linearRampToValueAtTime(13333, audioCtx.currentTime + 60);

});
