function somaArray(x) {
  var resposta = 0;

  //console.log ("\nX = ", x);
  var aux = x.shift();
  //console.log ("X = ", x);
  //console.log("\n-",aux,"Eh um array?");
  if (aux == null){
      return 0;
  } else if (Array.isArray(aux) == true){
      //console.log("\nSim");
      resposta = resposta + somaArray(aux);
      //console.log("Resposta = ", resposta);
  } else if (Array.isArray(aux) == false){
      //console.log("\nNao");
      resposta = resposta + aux;
      //console.log("Resposta = ", resposta);
      return resposta + somaArray(x);
  }
  return resposta;
};

var array = [1,[2,3,[4,5]]];
console.log("\nSoma do array = ", somaArray(array));
