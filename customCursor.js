const Main = document.getElementById('Main');
const Cursor = document.querySelector('.cursor');
Main.addEventListener('mousemove', (e) => { 
    Cursor.style.left = e.x + 'px';
    Cursor.style.top = e.y + 'px';
})