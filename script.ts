document.addEventListener('DOMContentLoaded', (event) => {
  console.log('loaded...');

  const selectElement = document.getElementById('role') as HTMLSelectElement;

  selectElement.addEventListener('change', (event) => {
    const selected = event.currentTarget as HTMLSelectElement;
    console.log(selected.value);

    
  })
});