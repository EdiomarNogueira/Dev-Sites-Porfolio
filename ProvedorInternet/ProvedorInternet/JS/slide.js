var x = document.getElementById('banner1');
var y = document.getElementById('banner2');
var z = document.getElementById('banner3');

function anterior () {
        
    if ((x.style.display ==='none') && (y.style.display ==='none')) {
        x.style.display ='flex';
        y.style.display ='none';
        z.style.display ='none';
    } else if ((x.style.display ==='none') && (y.style.display ==='flex')){
        x.style.display ='none';
        y.style.display ='none';
        z.style.display ='flex';
    }else {
        x.style.display ='none';
        y.style.display ='flex';
        z.style.display ='none';
    };
};
function proximo () {
       
    if ((x.style.display ==='none') && (y.style.display ==='none')) {
        x.style.display ='flex';
        y.style.display ='none';
        z.style.display ='none';
    } else if ((x.style.display ==='none') && (y.style.display ==='flex')){
        x.style.display ='none';
        y.style.display ='none';
        z.style.display ='flex';
    }else {
        x.style.display ='none';
        y.style.display ='flex';
        z.style.display ='none';
    };
};

window.setTimeout('anterior ()', 5000);
window.setInterval('proximo()', 5000);