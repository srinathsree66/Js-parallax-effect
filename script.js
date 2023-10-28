// window.addEventListener('mousemove', ({ clientX, clientY }) => {
//   console.log(clientX, clientY);
// });

document.addEventListener('mousemove', ({ clientX, clientY }) => {
  document.querySelectorAll('div').forEach((ele) => {
    const position = ele.getAttribute('data-value');

    const x = (window.innerWidth - clientX * position) / 100;
    const y = (window.innerHeight - clientY * position) / 100;

    ele.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});
