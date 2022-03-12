//validación de campos con la librería de jquery.validate
//Valida al insertar
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
//Valida al insertar
$(function() {
    $("#MateriaEditForm").validate({
        rules: {
            mat_nombre: { required: true, minlength: 8, maxlength: 250, alfaOespacio: true }
        },
        messages: {
            mat_nombre: { required: 'El campo de nombre es requerido', alfaOespacio: 'S\u00f3lo letras o espacios.', minlength: 'El mínimo permitido son 8 caracteres', maxlength: 'El máximo permitido son 250 caracteres' }
        }
    });
});
//limpia imput y select resetea la validación y remueve la clase del modal 
//Limpia al insertar
function limpiarMateria() {
    $('#MateriaModal').modal('hide');
    $('#MateriaCreateForm').trigger("reset");
    var validaMa = $("#MateriaCreateForm").validate();
    validaMa.resetForm();
    $('.form-control').removeClass('is-valid is-invalid');
    $('.custom-select').removeClass('is-valid is-invalid');
    $('#Materia').DataTable().ajax.reload(null, false);
}

//Limpia al actualizar
function LimpiarMateriaEdit() {
    $('#editMateria').modal('hide');
    var validaMaEdit = $("#MateriaEditForm").validate();
    validaMaEdit.resetForm();
    console.log();
    $('.form-control').removeClass('is-valid is-invalid');
    $('#Materia').DataTable().ajax.reload(null, false);
}
// Recarga la funcion limpar Materia al actualizar
function cargarUpdateMateria() {
    var contar = 0;
    for (var i = 0; i < 2; i++) {
        contar = (contar + setTimeout(LimpiarMateriaEdit, 1000));
    }
    console.log()
}
// LETRAS Y ESPACIOS
jQuery.validator.addMethod("alfaOespacio", function(value, element) {
    return this.optional(element) || /^[ a-záéíóúüñ]*$/i.test(value);
});