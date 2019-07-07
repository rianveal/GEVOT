$(document).ready(function(e){

  $('#tablaCampana').DataTable({
    "pagingType": "full_numbers",
    "responsive": true,
    "dom": "Bfrtip",
    buttons:[
      "excelHtml5",
      "csvHtml5",
      "pdfHtml5"
    ]
  });

  $('.buttons-excel').addClass('btn waves-effect waves-light indigo darken-1');
  $('.buttons-csv').addClass('btn waves-effect waves-light indigo darken-1');
  $('.buttons-pdf').addClass('btn waves-effect waves-light indigo darken-1');

  $('#btnActualizarPersonaCampana').on('click', function(){
    if($('#nombre').val() === ''){
      $('#nombre').focus();
      M.toast({html: 'Campo NOMBRE no puede ser vacío.', classes: 'rounded'});
      return false;
    }
  })

  $('#btnValidarPersona').on('click', function(){
    if($('#cedula').val() === ''){
      $('#cedula').focus();
      M.toast({html: 'Campo DOCUMENTO no puede ser vacío.', classes: 'rounded'});
      return false;
    }
  });

  $('#btnAgregarPersona').on('click', function(){
    if($('#cedula').val() === ''){
      $('#cedula').focus();
      M.toast({html: 'Campo DOCUMENTO no puede ser vacío.', classes: 'rounded'});
      return false;
    }else if($('#tipoDocumento').val() === null){
      $('#tipoDocumento').focus();
      M.toast({html: 'Debe seleccionar el TIPO DE DOCUMENTO.', classes: 'rounded'});
      return false;
    }else if( $('#primerNombre').val() === '' ){
      $('#primerNombre').focus();
      M.toast({html: 'Campo PRIMER NOMBRE no puede ser vacío.', classes: 'rounded'});
      return false;
    }else if( $('#primerApellido').val() === '' ){
      $('#primerApellido').focus();
      M.toast({html: 'Campo PRIMER APELLIDO no puede ser vacío.', classes: 'rounded'});
      return false;
    }else if( $('#cargo').val() === null ){
      $('#cargo').focus();
      M.toast({html: 'Debe seleccionar el CARGO.', classes: 'rounded'});
      return false;
    }else if( $('#barrio').val() === '' ){
      $('#barrio').focus();
      M.toast({html: 'Campo BARRIO no puede ser vacío.', classes: 'rounded'});
      return false;
    }else if( $('#direccion').val() === '' ){
      $('#direccion').focus();
      M.toast({html: 'Campo DIRECCIÓN no puede ser vacío.', classes: 'rounded'});
      return false;
    }else{
      return true;
    }
  });

  $('#btnActualizarCampana').on('click', function(){
    if($('#descripcion').val() === ''){
      $('#descripcion').focus();
      M.toast({html: 'Campo DESCRIPCIÓN no puede ser vacío.', classes: 'rounded'});
      return false;
    }else{
      return true;
    }
  });

  $('#btnSubirArchivo').on('click', function(){
    if($('#documentoSubir').val() === null){
      M.toast({html: 'Campo ARCHIVO no puede ser vacío.', classes: 'rounded'});
      return false;
    }else{
      return true;
    }
  });

});
