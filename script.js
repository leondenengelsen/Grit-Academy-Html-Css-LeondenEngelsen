console.log('hello worldasdasd');


const mobileMenuButton = document.querySelector('.phone-menu button');

        mobileMenuButton.addEventListener('click', function() {
            const mobilemenuwrapper = document.querySelector('.phone-menu nav');
            mobilemenuwrapper.classList.toggle('menu-open');
            console.log(mobileMenuButton)
            console.log(mobilemenuwrapper)
        });



/*

console.log('hello world');

const mobileMenuButton = document.querySelector('.mobile-menu-button button');

mobileMenuButton.addEventListener('click', function() {
    const mobilemenuwrapper = document.querySelector('.mobile-menu-wrapper');
    mobilemenuwrapper.classList.toggle('menu-open');
    console.log(mobileMenuButton)
});


*/