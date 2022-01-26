const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let weight = document.getElementById('weightInput').value;
    let height = document.getElementById('heightInput').value;
    let finalBMI = Math.round(weight / Math.pow(height, 2) * 10000);
    document.getElementById('bmiOutput').value = finalBMI;

})