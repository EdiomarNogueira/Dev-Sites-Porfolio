var x = document.getElementById('banner1');
var y = document.getElementById('banner2');

function anterior () {
        
    if (x.style.display ==='none') {
        x.style.display ='flex';
        y.style.display ='none';
    } else if (y.style.display ='none'){
        x.style.display ='none';
        y.style.display ='flex';
    };
};
function proximo () {
       
    if (x.style.display ==='none') {      
        x.style.display ='flex';
        y.style.display ='none';
    } else {
        x.style.display ='none';
        y.style.display ='flex';
    };
};

window.setTimeout('anterior ()', 5000);
window.setInterval('proximo()', 5000);