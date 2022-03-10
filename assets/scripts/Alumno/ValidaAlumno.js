//efecto en los input de la case needs-validation
jQuery.validator.setDefaults({
    debug: true,
    success: "valid",
    onfocusout: function(e) {
        this.element(e);
    },
    onkeyup: false,

    highlight: function(element) {
        jQuery(element).closest('.form-control').addClass('is-invalid');
        jQuery(element).closest('.custom-select').addClass('is-invalid');
    },
    unhighlight: function(element) {
        jQuery(element).closest('.form-control').removeClass('is-invalid');
        jQuery(element).closest('.form-control').addClass('is-valid');
        jQuery(element).closest('.custom-select').removeClass('is-invalid');
        jQuery(element).closest('.custom-select').addClass('is-valid');
    },

    errorElement: 'div',
    errorClass: 'invalid-feedback',
    errorPlacement: function(error, element) {
        if (element.parent('.input-group-prepend').length) {
            $(element).siblings(".invalid-feedback").append(error);
            //error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }
});

//validación de campos con la librería de jquery.validate
$(function() {
    $("#AlumnoCreateForm").validate({
        rules: {
            alm_codigo: { required: true, minlength: 6, maxlength: 100 },
            alm_nombre: { required: true, minlength: 8, maxlength: 250, alfaOespacio: true },
            alm_edad: { required: true },
            alm_sexo: { required: true },
            alm_id_grd: { required: true },
            alm_observacion: { required: true }
        },
        messages: {
            alm_codigo: { required: 'El campo de código es requerido', minlength: 'El mínimo permitido son 6 caracteres', maxlength: 'El máximo permitido son 100 caracteres' },
            alm_nombre: { required: 'El campo de nombre es requerido', alfaOespacio: 'S\u00f3lo letras o espacios.', minlength: 'El mínimo permitido son 8 caracteres', maxlength: 'El máximo permitido son 250 caracteres' },
            alm_edad: { required: 'El campo de edad es requerido' },
            alm_sexo: { required: 'El campo de sexo es requerido' },
            alm_id_grd: { required: 'El campo de grado es requerido' },
            alm_observacion: { required: 'El campo de observación es requerido' }
        }
    });
});
//limpia imput y select resetea la validación y remueve la clase del modal 
function limpiarAlumno() {
    $('#AlumnoModal').modal('hide');
    $('#AlumnoCreateForm').trigger("reset");
    var valida = $("#AlumnoCreateForm").validate();
    valida.resetForm();
    $('.form-control').removeClass('is-valid is-invalid');
    $('.custom-select').removeClass('is-valid is-invalid');
    $('#Alumno').DataTable().ajax.reload(null, false);
}

//validación de campos con la libreria de jquery.mask
$('#alm_edad').mask('999');

//validación ingresar solo numeros
$('#alm_edad').keyup(function(e) {
    if (/\D/g.test(this.value)) {
        // Filter non-digits from input value.
        this.value = this.value.replace(/\D/g, '');
    }
});

// LETRAS Y ESPACIOS
jQuery.validator.addMethod("alfaOespacio", function(value, element) {
    return this.optional(element) || /^[ a-záéíóúüñ]*$/i.test(value);
});