function proximoNumA() {
    let num = 7;
    for (let i = 1; i <= 5; i++) {
      num += 2;
    }
    console.log(num); // 9
  }
  
  function proximoNumB() {
    let num = 2;
    for (let i = 1; i <= 6; i++) {
      num *= 2;
    }
    console.log(num); // 128
  }
  
  function proximoNumC() {
    let num = 0;
    for (let i = 0; i < 7; i++) {
      num = i ** 2;
      console.log(num);
    }
  }
  
  function proximoNumD() {
    let num = 9;
    for (let i = 1; i <= 3; i++) {
      num += 20;
    }
    console.log(num); // 64
  }
  
  function proximoNumE() {
    let num1 = 1;
    let num2 = 1;
    let proximoNum;
    for (let i = 3; i <= 7; i++) {
      proximoNum = num1 + num2;
      num1 = num2;
      num2 = proximoNum;
    }
    console.log(proximoNum); // 13
  }
  
  function proximoNumF() {
    let num = 2;
    for (let i = 1; i <= 6; i++) {
      num += 2 ** i;
    }
    num += 1;
    console.log(num); // 35
  }
  
  // chamando as funções
  proximoNumA();
  proximoNumB();
  proximoNumC();
  proximoNumD();
  proximoNumE();
  proximoNumF();
  