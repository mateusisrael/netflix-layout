let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    
    if(document.documentElement.scrollTop > 200) {
        console.log('1');
        header.style = 'background: black;'

        
    }

    if(document.documentElement.scrollTop < 200) {
        header.style = 'background: linear-gradient(black, transparent);'

    }
})