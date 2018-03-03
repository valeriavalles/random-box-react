

   // var body = document.getElementById('body');

window.addEventListener('onload',cambiar)
  function cambiar(){
    const list = ['#F00','yellow','tomato','#abc','#cff'];
    const list2 = ['cursive','Arial, Helvetica, sans-serif','sans-serif','Courier New']
    let div = document.getElementById('container');

        div.style.backgroundColor = list[Math.floor(Math.random()*list.length)];
        div.style.fontFamily = list2[Math.floor(Math.random()*list2.length)];

    }
    cambiar();
    

