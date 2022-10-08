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

  var input = document.getElementsByName('rad')
var i = 0
setInterval(() =>{
   
    i++
    if(i > 4){
      i=0
      input[0].checked = true
    }else{
      input[i].checked = true
}
},3000 )