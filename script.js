'use strict';

window.addEventListener('DOMContentLoaded', ()=> {
   
    let count = 0;
    const value = document.querySelector('#value'),
          btns = document.querySelectorAll('.btn');

    btns.forEach(btn =>{
        btn.addEventListener('click', (e)=>{
            const styles = e.currentTarget.classList;

            if(styles.contains('decr')) {
                count--;
            } else if( styles.contains('incr')) {
                count++;
            } else {
                count = 0;
            }

            if(count < 0) {
                value.style.color = 'red';
            }
            
            if(count > 0) {
                value.style.color = 'green';
            }

            if(count === 0) {
                value.style.color = '';
            }

            value.textContent = count
        });
    });
});