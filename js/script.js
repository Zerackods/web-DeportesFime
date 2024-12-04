swal("Bienvenido a la mejora de César Octavio Delgado Silva",
 "Voy a estar actualizando el proceso de inscripción a Deportes de la Facultad de Ingeniería Mecánica y eléctrica",
 "success");
 document.querySelector("#open-popup").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
  });
  document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
  });