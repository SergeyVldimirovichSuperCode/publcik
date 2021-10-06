let now = new Date().toLocaleDateString();;
let datatime = document.getElementsByClassName('data_time');

let add = document.getElementsByClassName('add');
datatime[0].textContent = now;
let header = document.getElementsByClassName('header');
let add_panel = document.getElementsByClassName('add_panel');
let to_do_list = document.getElementsByClassName('to-do_list');
let name_work = document.getElementsByName('name_work');
let calendar = document.getElementsByName('calendar');

let add_buttont_add = document.getElementsByClassName('add_buttont_add');
    document.querySelector('.add').addEventListener('click', function(){
        
            header[0].textContent = "Новая задача";
            add_panel[0].classList.toggle('activ');
            to_do_list[0].classList.add('noactiv');
          

            

    });
    document.querySelector('.add_buttont_add').addEventListener('click', function(e){
        e.preventDefault();
    });


document.querySelector('.close').addEventListener('click', function(){
    header[0].textContent = "Спиок дел";
    add_panel[0].classList.remove('activ');
    to_do_list[0].classList.remove('noactiv');
   
});
let authorization_page = document.getElementsByClassName('authorization_page');
let entrance =  document.getElementsByClassName('entrance');
let registration = document.getElementsByClassName('registration');
let panel = document.getElementsByClassName('panel');
let close_avtorization = document.getElementsByClassName('close_avtorization');
let avtorization_list = document.getElementsByClassName('avtorization_list');
let main = document.getElementsByClassName('main');
document.querySelector('.authorization').addEventListener('click', function(){
    close_avtorization[0].classList.add('activ_close_avtorization');
    registration[0].classList.add('activ_registration');
    entrance[0].classList.add('activ_entrance');
    authorization_page[0].classList.add('activ_authorization_page');
    authorization_page[0].classList.remove('authorization_page');
    panel[0].classList.add('activ_panel');
    avtorization_list[0].classList.add('activ_avtorization_list');
    main[0].classList.add('block');

});

document.querySelector('.close_avtorization ').addEventListener('click', function(){
      authorization_pagee = document.getElementsByClassName('activ_authorization_page');
      main[0].classList.remove('block');

      authorization_pagee[0].classList.add('authorization_page');
        authorization_pagee[0].classList.remove("activ_authorization_page")


});
