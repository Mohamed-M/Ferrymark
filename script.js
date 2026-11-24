"use strict";
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('loaded...');
    const selectElement = document.getElementById('role');
    selectElement.addEventListener('change', (event) => {
        const selectedRole = event.currentTarget;
        const executorsContent = document.querySelectorAll('.executors');
        const margaretContent = document.querySelectorAll('.margaret');
        if (selectedRole.value === 'margaret') {
            executorsContent.forEach((element) => {
                element.classList.add('none');
            });
            margaretContent.forEach((element) => {
                element.classList.remove('none');
            });
        }
        else {
            executorsContent.forEach((element) => {
                element.classList.remove('none');
            });
            margaretContent.forEach((element) => {
                element.classList.add('none');
            });
        }
    });
});
