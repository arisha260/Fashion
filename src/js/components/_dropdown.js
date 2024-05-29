const btn = document.querySelectorAll('.filters-btn');

btn.forEach(e => {
  e.addEventListener('click', (event) =>{
    // const attribute = document.querySelectorAll('[data-btn]');
    const dropdownId = event.target.getAttribute('data-btn');
    console.log(dropdownId);
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle('active-menu');
  })
})

// document.addEventListener('click', (e) => {
//   if (!e.target.matches('.filters-btn')){
//     const dropdown = document.querySelectorAll('.filters-menu');
//     dropdown.forEach(e => {
//       if (e.classList.contains('active-menu')){
//         e.classList.remove('active-menu');
//       }
//     })
//   }
// })
