//validación de campos con la librería de jquery.validate
$(function() {
    $("#GradoCreateForm").validate({
        rules: {
            grd_nombre: { required: true, minlength: 3, maxlength: 250, alfaOespacio: true }
        },
        messages: {
            grd_nombre: { required: 'El campo de nombre es requerido', alfaOespacio: 'S\u00f3lo letras o espacios.', minlength: 'El mínimo permitido son 3 caracteres', maxlength: 'El máximo permitido son 250 caracteres' }
        }
    });
});
//limpia imput y select resetea la validación y remueve la clase del modal 
function limpiarGrado() {
    $('#GradoModal').modal('hide');
    $('#GradoCreateForm').trigger("reset");
    var validaGrado = $("#GradoCreateForm").validate();
    validaGrado.resetForm();
    $('.form-control').removeClass('is-valid is-invalid');
    $('.custom-select').removeClass('is-valid is-invalid');
    $('#Grado').DataTable().ajax.reload(null, false);
}

// LETRAS Y ESPACIOS
jQuery.validator.addMethod("alfaOespacio", function(value, element) {
    return this.optional(element) || /^[ a-záéíóúüñ]*$/i.test(value);
});