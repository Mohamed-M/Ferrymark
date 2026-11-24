document.addEventListener('DOMContentLoaded', (event) => {
  console.log('loaded...');

  const selectElement = document.getElementById('role') as HTMLSelectElement;

  selectElement.addEventListener('change', (event) => {
    const selectedRole = event.currentTarget as HTMLSelectElement;
    const executorsContent = document.querySelectorAll<HTMLElement>('.executors');
    const margaretContent = document.querySelectorAll<HTMLElement>('.margaret');

    if (selectedRole.value === 'margaret') {
      executorsContent.forEach((element) => {
        element.classList.add('none');
      })
      margaretContent.forEach((element) => {
        element.classList.remove('none')
      })
    } else {
      executorsContent.forEach((element) => {
        element.classList.remove('none');
      })
      margaretContent.forEach((element) => {
          element.classList.add('none')
        })
      }
  })
});