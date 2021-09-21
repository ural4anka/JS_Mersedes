const btns = document.querySelectorAll('.feature__link');
const lists = document.querySelectorAll('.feature-sub');

// btn.addEventListener('click', function(){
//   alert('click');
// })
// btn.addEventListener('click', () =>console.log('1'))
// btns.addEventListener('click',() => {
//   console.log('2')
//   console.log('3')
// })

// for(let i = 0; i < btns.length; i++){
//   btns[i].addEventListener('click', () =>console.log(btns[i]));
// }

btns.forEach((btnItem, index) => {
  btnItem.addEventListener('click', () =>{
    btns.forEach((btnItem, index) => {
      btnItem.classList.remove('feature__link_active')
    })

    btnItem.classList.add('feature__link_active');

    lists.forEach((listItem, index) => {
      listItem.classList.add('hidden')
    })

    lists[index].classList.remove('hidden');

    console.dir(btnItem);
  });
})