    $(document).ready(function() {
  var menu = $('#div_menu');
  var contenedor = $('#div_menu-contenedor');
  var cont_offset = contenedor.offset();
  // Cada vez que se haga scroll en la p�gina
  // haremos un chequeo del estado del men�
  // y lo vamos a alternar entre 'fixed' y 'static'.

  $(window).on('scroll', function() {
  	 //alert($(window).scrollTop());
    if($(window).scrollTop() > cont_offset.top) {
      menu.addClass('div-fijo');
	 // alert("agraga class");
    } else {
      menu.removeClass('div-fijo');
	  //alert("elimina class");
    }
  });
});