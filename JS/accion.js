
const submit = document.querySelector('.form-submit');



    let array = [];
    function Generador(e){
        e.preventDefault();

        const numero = document.querySelector('.form-input').value;

          if(numero > 1){

            for(let i = 1; i <= numero; i++){
     
                let contador = 0;

                for(let j = 1; j <= i; j++){
        
                    if(i % j == 0){
                        contador ++;
                    }
                }
        
                if(contador == 2){

                    array.push(i);
                }
        
            }
            document.querySelector('.form-area').innerHTML = `Los números primos menores a ${numero} son ${JSON.stringify(array)}`
         
          }else{
            document.querySelector('.form-area').innerHTML = `El numero ${numero} no es valido`;
        }
        }
  

submit.addEventListener('click', Generador);