let header = document.querySelector('header');
let user_cont = document.querySelector('#user-cont');
let change_user = document.querySelector('#change-user');


window.addEventListener('scroll', () => {
    
    if(document.documentElement.scrollTop > 70) {
        console.log('1');
        header.style = 'background: black;'

        
    }

    if(document.documentElement.scrollTop < 70) {
        header.style = 'background: linear-gradient(black, transparent);'

    }
})


user_cont.addEventListener("mouseover", () => {
    console.log("over");
    change_user.style = "display: block;"
});

user_cont.addEventListener("mouseout", () => {
        console.log("out");
        change_user.style = "display: none;"
});