const drawArea = document.getElementById('drawArea');
const ctx = drawArea.getContext('2d');

ctx.beginPath();
ctx.arc(200, 205, 150, 0, Math.PI * 2, true);
ctx.stroke();
ctx.beginPath();


// star inside the circle

ctx.moveTo(200, 100);
ctx.lineTo(240, 180);
ctx.lineTo(330, 180);
ctx.lineTo(260, 250);
ctx.lineTo(280, 320);
ctx.lineTo(200, 250);
ctx.lineTo(100, 310);
ctx.lineTo(120, 230);
ctx.lineTo(60, 180);
ctx.lineTo(160, 180);
ctx.lineTo(200, 100);

ctx.stroke();