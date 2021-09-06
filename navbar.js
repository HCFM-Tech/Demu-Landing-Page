const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');

    burger.addEventListener('click', () => {
        //Toggel Animation
        nav.classList.toggle('hidden');
    });
}
const app = () => {
    navSlide();
}

app();