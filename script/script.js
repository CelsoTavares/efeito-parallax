AOS.init({easing: 'ease-in-out',
              duration: 600,
              offset: 100,
      
    });

function writeText(elemento){
  const textArray = elemento.innerHTML.split('')
  elemento.innerHTML = '';
     
  textArray.forEach((letra, i) => {
  setTimeout(() => elemento.innerHTML += letra, 100 * i)
  })
}
  const write = document.getElementById('text')
  writeText(write)