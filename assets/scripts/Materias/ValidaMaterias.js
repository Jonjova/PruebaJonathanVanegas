//validación de campos con la librería de jquery.validate
$(function() {
    $("#MateriaCreateForm").validate({
        rules: {
            mat_nombre: { required: true, minlength: 8, maxlength: 250, alfaOespacio: true }
        },
        messages: {
            mat_nombre: { required: 'El campo de nombre es requerido', alfaOespacio: 'S\u00f3lo letras o espacios.', minlength: 'El mínimo permitido son 8 caracteres', maxlength: 'El máximo permitido son 250 caracteres' }
        }
    });
});
//limpia imput y select resetea la validación y remueve la clase del modal 
function limpiarMateria() {
    $('#MateriaModal').modal('hide');
    $('#MateriaCreateForm').trigger("reset");
    var valida = $("#MateriaCreateForm").validate();
    valida.resetForm();
    $('.form-control').removeClass('is-valid is-invalid');
    $('.custom-select').removeClass('is-valid is-invalid');
    $('#Materia').DataTable().ajax.reload(null, false);
}


// LETRAS Y ESPACIOS
jQuery.validator.addMethod("alfaOespacio", function(value, element) {
    return this.optional(element) || /^[ a-záéíóúüñ]*$/i.test(value);
});