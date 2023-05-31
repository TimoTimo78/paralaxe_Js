const img = document.querySelectorAll('img');

window.addEventListener('scroll', function(e){ 

    for (let i=0; i<img.length; i++) {
        img[i].style.left = (Math.floor(window.scrollY / 10)) + '%';               
    }
});


// Avec la boucle foreach

    // img.forEach(element => {
    //     element.style.left = (Math.floor(window.scrollY / 10)) + '%';
    // })