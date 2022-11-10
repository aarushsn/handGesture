//https://teachablemachine.withgoogle.com/models/nymL6zElq/

Webcam.set({
width:350,
height:300,
image_format :'png',
png_quality :100
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
});
}

console.log('ml5 version:', ml5.verision);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/nymL6zElq/model.json',modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!!!!!!!!!!!!!!!!!!!!!!');
}

function speak(){
    var synth =window.SpeechSynthesis;
    speak1="The first prediction is"+prediction1;
    speak2="And the second prediction is"+prediction2;
    var utterThis= new SpeechSynthesisUtterance(speak1+speak2);
    synth.speak(utterThis);
}