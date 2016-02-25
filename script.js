var numero = 123456;
Array.prototype.cambiarValores = function(arrayNumeros, pos1, pos2){
    var i;
    var aux;
    var arrayIndex;
    for (i = 0; i < arrayNumeros.length; i++) {
      if(i === pos1){
        arrayIndex = i;
      }
      if(i === pos2){
        aux = arrayNumeros[i];
      }
    }
    arrayNumeros[arrayIndex] = aux;
    var y;
    var resultado = '';
    for (y = 0; y < arrayNumeros.length; y++) {
      resultado= arrayNumeros.toString();
    }
    console.log(arrayNumeros);
    console.log(resultado);

};
function editarValores(numero,pos1,pos2){
    numero = this.numero;
    var arrayAux = [];
    var i;
    if(typeof numero === 'number'){
      numero = ''+numero;
    }
    for(i = 0; i < numero.length; i++){
      arrayAux.push(numero[i]);
    }
    arrayAux.cambiarValores(arrayAux, pos1, pos2);
}
(function example(numero,pos1,pos2){
  editarValores(numero,pos1,pos2);
})(numero,2,5);
