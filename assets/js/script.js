var f = ['🔥___________________________________🚒', '🔥__________________________________🚒' , '🔥________________________________🚒', '🔥_______________________________🚒', '🔥______________________________🚒', '🔥_____________________________🚒', '🔥____________________________🚒', '🔥__________________________🚒', '🔥_________________________🚒', '🔥________________________🚒', '🔥_______________________🚒', '🔥______________________🚒', '🔥______________________🚒', '🔥_____________________🚒', '🔥____________________🚒', '🔥___________________🚒', '🔥__________________🚒', '🔥_________________🚒', '🔥_________________🚒', '🔥_________________🚒', '🔥________________🚒', '🔥_______________🚒', '🔥_____________🚒', '🔥____________🚒', '🔥___________🚒', '🔥_________🚒', '🔥________🚒', '🔥_______🚒', '🔥_____🚒', '🔥____🚒', '🔥___🚒', '🔥__🚒', '🔥💧🚒', '🔥💧🚒', '🔥💧🚒', '💧💧🚒', '💧💧🚒', '💧🚒', '💧🚒', '💧🚒', '🚒', '🚒', '🚒', '🔥'];


    function loop() {
        location.hash = f[Math.floor((Date.now()/100)%f.length)];

        setTimeout(loop, 50);
    }

    //loop();





const imagen = document.getElementById("imagen");
const contador = document.getElementById("contador");
var basew = imagen.clientWidth;
var baseh = imagen.clientHeight;
let clicks = 0;

imagen.addEventListener("click", () => {
    clicks++;
    imagen.style.width = `${(imagen.clientWidth)+clicks * 10}px`;
    imagen.style.height = `${(imagen.clientHeight)+clicks * 10}px`;
    if (clicks === 10) {
    
         clicks = 0;
        imagen.style.width = `${basew}px`;
        imagen.style.height = `${baseh}px`;
        // Crear modal con SweetAlert2
        Swal.fire({
            title: '💖💖Happy Valentine💖💖',
            html: `<video  width="400" video src="/assets/img/106751.mp4" autoplay></video>`,
            width: 'auto',
            color: "#716add",
            background: `
            url("/assets/img/a12.jpg")
            left top
          `,
            heightAuto : true,
            loaderHtml: `<div class="spinner-border text-dark"></div>`,
  customClass: {
    loader: 'custom-loader'
  },
            backdrop: true,
            confirmButtonText: "xd",
            allowOutsideClick: false,
            timer: 37000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
              const timer = Swal.getPopup().querySelector("b");
            
            },
            willClose: () => {
              
            }


        });
    }
});

