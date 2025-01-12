// const profil = document.querySelector('.profil');

// const user = document.querySelector('.user');

// const dark = document.querySelector('#btn-dark')

// const searchbar = document.querySelector('.search-bar'); 



// document.addEventListener('DOMContentLoaded', () => {

//     console.log('le doc est chargé')

// });

// // profil.addEventListener('click', () => {

// //     user.classList.toggle('active');
// // });


// dark.addEventListener('click', () =>{

//     document.body.classList.toggle('dark')

// })

// document.addEventListener('keydown', (e)=>{

//     if(e.ctrlKey && e.key === 'k'){
//         searchbar.classList.toggle('active')
//     }

// })


// sidebar

document.querySelector('.toggle-btn').addEventListener('click', ()=>{
    document.querySelector('.sidebar').classList.toggle('active')
})

// password

document.querySelector('button').addEventListener('click', ()=>{
    let password = document.querySelector('#password')

    if(password.type == 'password'){
        password.type = 'text'
    }else{
        password.type = 'password'
    }
})
