// arrival.forEach(el =>
//   el.addEventListener('mouseenter', function (e) {
//     e.target.classList.add('active');
//   })
// );
// arrival.forEach(el =>
//   el.addEventListener('mouseout', function (e) {
//     e.target.classList.remove('active');
//   })
// );
// newArrivals.addEventListener('mouseover', function (e) {
//   if (e.target.classList.contains('arrival')) {
//     const link = e.target;
//     const siblings = link.closest('new_arrival').querySelectorAll('arrival');

//     siblings.forEach(el => {
//       if (el !== link) el.classList.add('active');
//     });
//   }
// });

const onSale = document.querySelector('#sale');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.btn_close--modal');

const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const nextSale = document.querySelector('#next-sale');
const prevSale = document.querySelector('#prev-sale');

nextSale.addEventListener('click', function () {
  const container = document.querySelector('.products_on_sale');
  container.scrollTo({ left: container.scrollLeft + 200, behavior: 'smooth' });
});
prevSale.addEventListener('click', function () {
  const container = document.querySelector('.products_on_sale');
  container.scrollTo({ left: container.scrollLeft - 200, behavior: 'smooth' });
});

next.addEventListener('click', function () {
  const container = document.querySelector('.ratings-container');

  container.scrollTo({ left: container.scrollLeft + 200, behavior: 'smooth' });
});

prev.addEventListener('click', function () {
  const container = document.querySelector('.ratings-container');

  container.scrollTo({ left: container.scrollLeft + -200, behavior: 'smooth' });
});

onSale.addEventListener('click', function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

closeModal.addEventListener('click', function (e) {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

// links.forEach(el =>
//   el.addEventListener('mouseover', function (e) {
//     if (e.target.classList.contains('primary_links')) {
//       const link = e.target;
//       const sibling = link.closest('nav').querySelectorAll('.primary_links');

//       sibling.forEach(el => {
//         if (el !== link) el.style.opacity = 0.5;
//       });
//     }
//   })
// );
// links.forEach(el =>
//   el.addEventListener('mouseout', function (e) {
//     if (e.target.classList.contains('primary_links')) {
//       const link = e.target;
//       const sibling = link.closest('nav').querySelectorAll('.primary_links');

//       sibling.forEach(el => {
//         if (el !== link) el.style.opacity = 1;
//       });
//     }
//   })
// );
// const handleHover = function (e) {
//   if (e.target.classList.contains('primary_links')) {
//     const link = e.target;
//     const siblings = link.closest('nav').querySelectorAll('.primary_links');

//     siblings.forEach(el => {
//       if (el !== link) el.style.opacity = e;
//     });
//   }
// };
