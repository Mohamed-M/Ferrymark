"use strict";
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('loaded...');
    const selectElement = document.getElementById('role');
    selectElement.addEventListener('change', (event) => {
        const selected = event.currentTarget;
        console.log(selected.value);
    });
});
