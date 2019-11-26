ken.onclick = function(e){
    character_box.style.backgroundImage = "url('http://www.pngall.com/wp-content/uploads/2016/05/Burger-Free-Download-PNG.png')";
    price_box.textContent = "2490";
    total_box.textContent = "125";
    var audio = document.getElementById("ken-audio");
    audio.play();
  }
  
  ryu.onclick = function(e){
    character_box.style.backgroundImage = "url('http://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4134.png')";
    price_box.textContent = "1990";
    total_box.textContent = "100";
    var audio = document.getElementById("ryu-audio");
    audio.play();
  }
  
  iori.onclick = function(e){
    character_box.style.backgroundImage = "url('https://rustlersonline.com/wp-content/uploads/XL-Pepperoni.png')";
    price_box.textContent = "2990";
    total_box.textContent = "150";
    var audio = document.getElementById("iori-audio");
    audio.play();
  }
  
  terry.onclick = function(e){
    character_box.style.backgroundImage = "url('https://www.freepngimg.com/thumb/bacon/77405-king-whopper-sandwich-hamburger-big-cheeseburger-burger.png')";
    price_box.textContent = "2990";
    total_box.textContent = "150";
    var audio = document.getElementById("terry-audio");
    audio.play();
  }
  
  filia.onclick = function(e){
    character_box.style.backgroundImage = "url('http://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4142.png')";
    price_box.textContent = "1990";
    total_box.textContent = "100";
    var audio = document.getElementById("filia-audio");
    audio.play();
  }
  
  valentine.onclick = function(e){
    character_box.style.backgroundImage = "url('https://hueyburger.com/wp-content/uploads/2016/04/oldetimea1.png')";
    price_box.textContent = "3490";
    total_box.textContent = "175";
    var audio = document.getElementById("valentine-audio");
    audio.play();
  }
  
  sf.onclick = function(e){
    character_box.style.backgroundImage = "url('https://www.entornointeligente.com/wp-content/uploads/2019/01/Nuevos_Combos_Familiares_de_BURGER_KING____para_tu_encuentro_familiar.png')";
    price_box.textContent = "12990";
    total_box.textContent = "650";
    var audio = document.getElementById("sf-audio");
    audio.play();
  }
  
  kof.onclick = function(e){
    character_box.style.backgroundImage = "url('https://diariodeavisos.elespanol.com/wp-content/uploads/2016/07/hamburguesas.png')";
    price_box.textContent = "7990";
    total_box.textContent = "400";
    var audio = document.getElementById("kof-audio");
    audio.play();
  }
  
  sg.onclick = function(e){
    character_box.style.backgroundImage = "url('https://www.wendys.cl/wp-content/uploads/2016/10/230x132.png')";
    price_box.textContent = "8990";
    total_box.textContent = "450";
    var audio = document.getElementById("skullgirls-audio");
    audio.play();
  }
  
  //Calculadora interna
  //Declaramos variables
  var operandoa;
  var operandob;
  var operacion;
  
  function init(){
    //variables
    var price_box = document.getElementById('price_box');
    var suma = document.getElementById('suma');
    var total = document.getElementById('total');
    var ken = document.getElementById('ken');
    var ryu = document.getElementById('ryu');
    var sf = document.getElementById('sf');
    var iori = document.getElementById('iori');
    var terry = document.getElementById('terry');
    var kof = document.getElementById('kof');
    var valentine = document.getElementById('valentine');
    var filia = document.getElementById('filia');
    var skullgirls = document.getElementById('skullgirls');
  }
  
  //Eventos de click
  
  suma.onclick = function(e){
    operandoa = price_box.textContent;
    operacion = "+";
    limpiar();
  }
  
  total.onclick = function(e){
    operandob = price_box.textContent;
    resolver();
  }
  
  function limpiar(){
    price_box.textContent = "";
  }
  function resetear(){
    price_box.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }
  
  function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
    }
    resetear();
    price_box.textContent = '$'+res;
    total_box.textContent = (res*0.05)+' ptos.';
  }