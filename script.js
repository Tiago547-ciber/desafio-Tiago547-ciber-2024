
 const tipo = [
                 "carnivoro", 
                 "herbivoro"
                 ];
   
   const habitat = [
                 "savana", 
                 "floresta",
                 "rio"
                 ];

   var savana = {
       "totalVagas": 10,
       "leao": 0,
       "leopardo": 0,
       "macaco": 3,
       "crocodilo": 0,
       "hipopotamo": 0,       
       "gazela": 0
   };
   var savana2 = {
       "totalVagas": 9,
       "leao": 1,
       "leopardo": 0,
       "macaco": 0,
       "crocodilo": 0,
       "hipopotamo": 0,       
       "gazela": 0
   };
   var savanaErio= {
       "totalVagas": 7,
       "leao": 0,
       "leopardo": 0,
       "macaco": 0,
       "crocodilo": 0,
       "hipopotamo": 0,
       "gazela": 1
       
   };

   var floresta = {
       "totalVagas": 5,
       "leao": 0,
       "leopardo": 0,
       "macaco": 0,
       "crocodilo": 0,
       "hipopotamo": 0,       
       "gazela": 0
   };
   var rio = {
       "totalVagas": 8,
       "leao": 0,
       "leopardo": 0,
       "crocodilo": 0,
       "hipopotamo": 0,
       "macaco": 0,
       "gazela": 0
   };
   
    
function enviar() {
    const leao = {
     "nome": "Leão",
     "tipo": "carnivoro",
     "habitat": "savana"
   };
   

   const leopardo = {
     "nome": "Leopardo",
     "tipo": "carnivoro",
     "habitat": "savana"
   };
   

   const crocodilo = {
     "nome": "Crocodilo",
     "tipo": "carnivoro",
     "habitat": "rio"
   };
   

   const macaco = {
     "nome": "Macaco",
     "tipo": "herbivoro",
     "habitat": "floresta"
   };
   

   const gazela = {
     "nome": "Gazela",
     "tipo": "herbivoro",
     "habitat": "floresta"
   };
   

   const hipopotamo = {
     "nome": "Hipopotamo",
     "tipo": "herbivoro",
     "habitat": "rio"
   };
  const nome = document.getElementById('input1');
  const quant = document.getElementById("b");
  
  if (nome.value == leao.nome) {
      
    document.getElementById("tela").innerHTML = 'Especie: '+leao.nome;
    document.getElementById("tela3").innerHTML = 'Quantidade de vagas no habitat: '+savana.totalVagas;
    document.getElementById("tela2").innerHTML = 'O animal é do tipo: '+ leao.tipo;
    document.getElementById("tela4").innerHTML = 'Habitat ideal: '+ leao.habitat;  
    if (savana.totalVagas > 0) {
        savana.leao += Number(quant.value);
        savana.totalVagas -= Number(quant.value);
        document.getElementById("tela5").innerHTML = 'No habitat savana temos: '+savana.leao+' leões e '+savana.leopardo+' leopardos';
    }
    if (savana.totalVagas < 1){
        document.getElementById("tela3").innerHTML = 'Habitat cheio.';
    }
  }
    else if (nome.value == leopardo.nome) {

    document.getElementById("tela").innerHTML = 'Especie: '+leopardo.nome;
    document.getElementById("tela3").innerHTML = 'Quantidade de vagas no habitat: '+savana.totalVagas;
    document.getElementById("tela2").innerHTML = 'O animal é do tipo: '+ leopardo.tipo;
    document.getElementById("tela4").innerHTML = 'Habitat ideal: '+ leopardo.habitat;   
    if (savana.totalVagas > 0) {
        savana.leopardo += Number(quant.value);
        savana.totalVagas -= Number(quant.value);
        document.getElementById("tela5").innerHTML = 'No habitat savana temos: '+savana.leao+' leões e '+savana.leopardo+' leopardos';
    }
    if (savana.totalVagas < 1){
        document.getElementById("tela3").innerHTML = 'Habitat cheio.';
    }
  }
    
    
    else if (nome.value == macaco.nome) {
    
    document.getElementById("tela").innerHTML = 'Especie: '+macaco.nome;
    document.getElementById("tela3").innerHTML = 'Quantidade de vagas no habitat: '+floresta.totalVagas;
    document.getElementById("tela2").innerHTML = 'O animal é do tipo: '+ macaco.tipo;
    document.getElementById("tela4").innerHTML = 'Habitat ideal: '+ macaco.habitat;
    if (floresta.totalVagas > 0) {
        floresta.macaco += Number(quant.value);
        floresta.totalVagas -= Number(quant.value);
        document.getElementById("tela5").innerHTML = 'No habitat floresta temos: '+ floresta.macaco+' macacos e '+floresta.gazela+' gazelas';
    }
                    
    if (floresta.totalVagas < 1){
        document.getElementById("tela3").innerHTML = 'habitat cheio!';
    }
  }
    else if (nome.value == gazela.nome) {
    
    document.getElementById("tela").innerHTML = 'Especie: '+gazela.nome;
    document.getElementById("tela3").innerHTML = 'Quantidade de vagas no habitat: '+floresta.totalVagas;
    document.getElementById("tela2").innerHTML = 'O animal é do tipo: '+ gazela.tipo;
    document.getElementById("tela4").innerHTML = 'Habitat ideal: '+ gazela.habitat;
    document.getElementById("tela5").innerHTML = 'No habitat floresta temos: '+ floresta.macaco+' macacos e '+floresta.gazela+' gazelas';
    if (floresta.totalVagas > 0) {
        floresta.gazela += Number(quant.value);
        floresta.totalVagas -= Number(quant.value);
        document.getElementById("tela5").innerHTML = 'No habitat floresta temos: '+ floresta.macaco+' macacos e '+floresta.gazela+' gazelas';
    }
    if (floresta.totalVagas < 1){
        document.getElementById("tela3").innerHTML = 'Habitat cheio.';
    }
  }
    else if (nome.value == crocodilo.nome) {

    document.getElementById("tela").innerHTML = 'Especie: '+ crocodilo.nome;
    document.getElementById("tela3").innerHTML = 'Quantidade de vagas no habitat: '+rio.totalVagas;
    document.getElementById("tela2").innerHTML = 'O animal é do tipo: '+ crocodilo.tipo;
    document.getElementById("tela4").innerHTML = 'Habitat ideal: '+ crocodilo.habitat;
    if (rio.totalVagas > 0) {
        rio.crocodilo += Number(quant.value);
        rio.totalVagas -= Number(quant.value);
        document.getElementById("tela5").innerHTML = 'No habitat rio temos: '+ rio.crocodilo+' crocodilos e '+rio.hipopotamo+' hipopotamos.';
    }
    if (floresta.totalVagas < 1){
        document.getElementById("tela3").innerHTML = 'Habitat cheio.';
    }
  }
    else if (nome.value == hipopotamo.nome) {
    
    document.getElementById("tela").innerHTML = 'Especie: '+ hipopotamo.nome;
    document.getElementById("tela3").innerHTML = 'Quantidade de vagas no habitat: '+rio.totalVagas;
    document.getElementById("tela2").innerHTML = 'O animal é do tipo: '+ hipopotamo.tipo;
    document.getElementById("tela4").innerHTML = 'Habitat ideal: '+ hipopotamo.habitat;
    if (rio.totalVagas > 0) {
        rio.crocodilo += Number(quant.value);
        rio.totalVagas -= Number(quant.value);
        document.getElementById("tela5").innerHTML = 'No habitat rio temos: '+ rio.crocodilo+' crocodilos e '+rio.hipopotamo+' hipopotamos.';
    }        
    if (floresta.totalVagas < 1){
        document.getElementById("tela3").innerHTML = 'Habitat cheio.';
    }
  }
    
    else {
        window.alert("erro.");
    }
}

