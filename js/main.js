let ids = '';

function ids1 () {
    ids = 'servicios.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'servicios.html';

};

function ids2 () {
    ids = 'agenda.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'agenda.html';

};



window.addEventListener('popstate', e => {
    backweb();
    
});

function backarriba(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });       
};

function backweb() {
   
    if (contador==1) {
        document.getElementById("screen1").style.display = "block";
        document.getElementById("screen2").style.display = "none";
        document.getElementById("screen3").style.display = "none";
        document.getElementById("psicologia").style.display = "none";
        document.getElementById("ozonoterapia").style.display = "none";
        document.getElementById("examenes").style.display = "none";
        document.getElementById("side").style.display = "none";
        document.getElementById("sharelink").style.display = "none";
        conta=0;
        backarriba();
        history.back();

    }
    else if(contador==2){
        document.getElementById("screen2").style.display = "block";
        document.getElementById("psicologia").style.display = "none";
        document.getElementById("screen3").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("side").style.display = "none";
        document.getElementById("ozonoterapia").style.display = "none";
        document.getElementById("examenes").style.display = "none";
        document.getElementById("sharelink").style.display = "none";
        contador=1;
        backarriba();
        ids1();

    }

    } 


function inicio() {
    document.getElementById("screen1").style.display = "block";	
    document.getElementById("screen2").style.display = "none";
    document.getElementById("back").style.display = "none";
    document.getElementById("screen3").style.display = "none";
    document.getElementById("psicologia").style.display = "none";
    document.getElementById("ozonoterapia").style.display = "none";
    document.getElementById("examenes").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    document.getElementById("side").style.display = "none";
    conta=0;
    contador=1;
    backweb();
    
}




var btn = document.getElementById("inicio"),
    informacion = document.getElementById("screen1"),
    contador=0;


function servicios() {


    document.getElementById("screen1").style.display = "none";
    document.getElementById("screen2").style.display = "block";
    document.getElementById("psicologia").style.display = "none";
    document.getElementById("ozonoterapia").style.display = "none";
    document.getElementById("examenes").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=1;
    ids1();
   
}


function screen3() {
    document.getElementById("screen3").style.display = "block";
    document.getElementById("screen2").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=2; 
    ids2();  
    
}

function psicologia() {
    document.getElementById("psicologia").style.display = "block";
    document.getElementById("screen2").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=2;
    ids2();   
    
}

function ozonoterapia() {
    document.getElementById("ozonoterapia").style.display = "block";
    document.getElementById("screen2").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=2; 
    ids2();  
    
}

function examenes() {
    document.getElementById("examenes").style.display = "block";
    document.getElementById("ozonoterapia").style.display = "none";
    document.getElementById("psicologia").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("screen3").style.display = "none";
    document.getElementById("screen2").style.display = "none";
    document.getElementById("screen1").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=2;  
    ids2(); 
    
}


function screen4() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("screen2").style.display = "none";
    document.getElementById("screen3").style.display = "none"; 
    document.getElementById("psicologia").style.display = "none"; 
    document.getElementById("screen1").style.display = "none";
    document.getElementById("examenes").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("ozonoterapia").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=2;  
    ids2(); 
    
}

function sharetj() {
    document.getElementById("sharelink").style.display = "block";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("screen2").style.display = "none";
    document.getElementById("screen3").style.display = "none"; 
    document.getElementById("psicologia").style.display = "none"; 
    document.getElementById("screen1").style.display = "none";
    document.getElementById("examenes").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("ozonoterapia").style.display = "none";
    conta=0;
    contador=1;
    ids1();    
       
}


function back() {

    if (contador==1) {
        document.getElementById("screen1").style.display = "block";
        document.getElementById("screen2").style.display = "none";
        document.getElementById("screen3").style.display = "none";
        document.getElementById("psicologia").style.display = "none";
        document.getElementById("ozonoterapia").style.display = "none";
        document.getElementById("examenes").style.display = "none";
        document.getElementById("side").style.display = "none";
        conta=0;
        backarriba();
        history.back();

    }
    else if(contador==2){
        document.getElementById("screen2").style.display = "block";
        document.getElementById("psicologia").style.display = "none";
        document.getElementById("screen3").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("side").style.display = "none";
        document.getElementById("ozonoterapia").style.display = "none";
        document.getElementById("examenes").style.display = "none";
        contador=1;
        backarriba();
        ids1();

    }

    } 

                 //    menu laterl 

                 var btns = document.getElementById("inicio"),
                 informacion = document.getElementById("infomacion"),
                 conta=0;
             
                 function sidebar()  {
             
                     if (conta==0) {
                         document.getElementById("side").style.display = "block";
                         conta=1;
                     }
                     else{
                         document.getElementById("side").style.display = "none";
                         conta=0;
                     }
                     }
             
                     function cerrarside() {
                         document.getElementById("side").style.display = "none";
                         conta=0;
                         
                     } 
   // llevar cerrar side automatico

   document.querySelector('.tarjeta').addEventListener('click',()=>{
    document.getElementById("side").style.display = "none";
    conta=0;
    });

    document.querySelector("#submit").addEventListener("click", e => {
        e.preventDefault();
      
        //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
        let telefono = "593962901655";
      
        let cliente = document.querySelector("#cliente").value;
        let edad = document.querySelector("#edad").value;
        let fecha = document.querySelector("#fecha").value;
        let hora = document.querySelector("#hora").value;
        let modulos = document.querySelector("#modulos").value;
        let resp = document.querySelector("#respuesta");
      
        resp.classList.remove("fail");
        resp.classList.remove("send");
      
        let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
              *Neuro Zone*%0A
              *Datos de la Consulta*%0A
              *Nombre*%0A
              ${cliente}%0A
              *Edad*%0A
              ${edad}%0A
              *Fecha de la Consulta*%0A
              ${fecha}%0A
              *Hora*%0A
              ${hora}%0A
              *Servicio*%0A
              ${modulos}*%0AInformación%0AEnviada%0Adesde%0Ala%0AApp%0Ade%0ACliconline%0Ahttps://n9.cl/cliconline%0A`;
      
        if (cliente === "" || edad === "" || fecha === "" || hora === "") {
          resp.classList.add("fail");
          resp.innerHTML = `Espera, ${cliente} faltan algunos Datos `;
          return false;
        }
        resp.classList.remove("fail");
        resp.classList.add("send");
        resp.innerHTML = `Tu Cita fue enviada, ${cliente}`;
      
        window.open(url);
      });
      

//alertas de la tarjeta

function save(){
    let url = `https://drive.google.com/u/0/uc?id=1LHfeDI68_oEc-ifl6le1PPuZ9AtzOzFq&export=download`;
    location.href=(url); 
   }
  
  function savecontacto() {
      Swal.fire({
          title: 'Neuro Zone',
          text: 'Especialistas en Afecciones Neurológicas.',
          imageUrl: 'img/LogoNeurozone.png',
          imageWidth: 100,
          confirmButtonText: 'Añadir a Contactos',
          showCloseButton: 'true',
          showCancelButton: true,
      
        }).then((result) => {
          if (result.isConfirmed) {
            save();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Descarga Correcta',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
  
   
  };
  
//alertas 2                      
  function msj2() {
    Swal.fire({
      icon: 'info',
      title: 'Opción Disponible',
      text: 'Próximamente',
      footer: 'Neuro Zone'
    });
  
   
  }

   //ALERTAS>
   function save(){
    let url = `https://drive.google.com/u/0/uc?id=1VVSTlUODTMNHCKxJUVCxXnqyZcBFl6AC&export=download`;
    window.open(url); 
   };
  
  
  function abrirpagos(){
    let urla = `https://neurozoneuio.blogspot.com/p/opciones-de-pago.html`;
    window.open(urla); 
   };


   function verpagos(){
    let urlsp = `https://neurozoneuio.blogspot.com/p/opciones-de-pago.html`;
    window.open(urlsp); 
   };


  function msjpagos() {
    Swal.fire({
        title: 'Opciones de Pago',
        icon: 'success',
        html:
       '<a href="https://api.whatsapp.com//send?text=Enviado%20desde%20la%20App%20de%20Cliconline%20Ver%20Opciones%20de%20Pago%20https://neurozoneuio.blogspot.com/p/opciones-de-pago.html" class="botonp" ><span class="fa fa-share-alt"></span >&nbsp;Compartir nro. Cuenta</a>',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ver nro. Cuenta',
      })
      .then((result) => {
        if (result.isConfirmed) {
          verpagos();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Información ',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  
   
  };
  

const $content = document.getElementById('textareacopy');
  $btncopy = document.getElementById ('btcopi');
  $title = document.getElementById ('titlelink')

  $btncopy.addEventListener('click', e => {
    $content.select();
    document.execCommand('copy')
    msj2();
  });

