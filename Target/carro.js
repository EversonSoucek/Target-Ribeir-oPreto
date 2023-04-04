const distancia = 100; 


const velocidadeCarro = 110; 
const velocidadeCaminhao = 80; 


const tempoCarro = (distancia / velocidadeCarro) * 60; 
const tempoCaminhao = (distancia / velocidadeCaminhao) * 60; 


const tempoPedagios = 5 * 2; 
const tempoCaminhaoComPedagios = tempoCaminhao + tempoPedagios;

if (tempoCarro < tempoCaminhaoComPedagios) {
  console.log("O carro está mais próximo de Ribeirão Preto.");
} else {
  console.log("O caminhão está mais próximo de Ribeirão Preto.");
}
