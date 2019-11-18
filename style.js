let header = document.querySelector('header');
let user_cont = document.querySelector('#user-cont');
let change_user = document.querySelector('#change-user');


window.addEventListener('scroll', () => {
    
    if(document.documentElement.scrollTop > 70) {
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


document.querySelector('#notification-cont').addEventListener("mouseover", () => {
    document.querySelector("#notification-box").style = "display: block;";

});

document.querySelector('#notification-cont').addEventListener("mouseout", () => {
    document.querySelector("#notification-box").style = "display: none;";

});





let search_box_state = 0;
let search_icon = document.querySelector('#search-icon')
search_icon.addEventListener('click', changeSearchBox);


function changeSearchBox() {

    let search_box = document.querySelector('#search-box');
    let search_input = document.querySelector('#search-input');

    if(search_box_state === 0) {
        // Executa se a search_box estiver aberta
        search_input.style = "display: block;";
        search_box.style = "border: 1px solid #fff; background: black;";
        search_box_state = 1

    } else if(search_box_state === 1) {
        // Executa se a search_box estiver fechada
        search_input.style = "display: none;";
        search_box.style = "border: none; background: none;";
        search_box_state = 0;

    }


    
}