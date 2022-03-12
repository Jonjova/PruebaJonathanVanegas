/****************************************************************************
                        Mostrar Grado
****************************************************************************/
//Versión datatable y ajax.
$(document).ready(function() {

    //Mostrar elementos de la tabla Alumno.
    $('#Grado').DataTable({
        "ajax": url + "Grado/MostrarGrado",
        responsive: true,
        "order": [],
        "language": idioma_espanol
    });


});


/****************************************************************************
                        Acción de Insertar Grado.
****************************************************************************/
$(function() {
    $("#GradoCreateForm").submit(function(event) {

        if (!$(this).valid()) {
            Swal.fire({
                icon: 'error',
                allowEscapeKey: false,
                allowOutsideClick: false,
                confirmButtonColor: "#343a40",
                text: 'Campos vac\u00edos o inv\u00e1lidos!',
                title: '<p style="color: #343a40; font-size: 1.072em; font-weight: 600; line-height: unset; margin: 0;">Error de inserci\u00f3n</p>'
            });
        } else {
            $.ajax({
                url: url + 'Grado/Guardar',
                data: $("#GradoCreateForm").serialize(),
                type: "post",
                async: true,
                dataType: 'json',
                success: function(response) {

                    if (response !== '') {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Datos guardados correctamente',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        limpiarGrado();

                    }
                }
            });
            event.preventDefault();
        }
    });

});

/****************************************************************************
                        Acción de Actualizar Grado.
****************************************************************************/

$("#GradoEditForm").submit(function(event) {
    event.preventDefault();
    if (!$(this).valid()) {
        Swal.fire({
            icon: 'error',
            allowEscapeKey: false,
            allowOutsideClick: false,
            confirmButtonColor: "#343a40",
            text: 'Campos vac\u00edos o inv\u00e1lidos!',
            title: '<p style="color: #343a40; font-size: 1.072em; font-weight: 600; line-height: unset; margin: 0;">Error de inserci\u00f3n</p>'
        });

    } else {
        $.ajax({
            url: url + 'Grado/Actualizar',
            data: $("#GradoEditForm").serialize(),
            type: "post",
            async: false,
            dataType: 'json',
            success: function(response) {
                $('#Grado').DataTable().ajax.reload(null, false);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Actualizado correctamente',
                    showConfirmButton: false,
                    timer: 1500
                });
                $('#editGrado').modal('hide');
                cargarUpdateGrado();
            },

        });
    }
});


/****************************************************************************
                       Obtener un id de Grado.
****************************************************************************/

function obtenIdGrado(idGrado, data) {
    $.ajax({
        url: url + 'Grado/obtenerIdGrado/' + idGrado,
        method: "post",
        data: JSON.stringify({ idGrado: idGrado }),
        dataType: "json",
        success: function(response) {
            $('#grd_id').val(response.grd_id);
            $('#grd_nombre_').val(response.grd_nombre);
            $('#editGrado').modal({
                backdrop: "static",
                keyboard: false
            });
        }
    })
}


/****************************************************************************
                        Acción de Eliminar Grado.
****************************************************************************/
function eliminarGrado(idGrado) {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Está seguro que desea eliminar este registro?',
        text: "Se eliminará permanentemente!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, eliminarlo!   ',
        cancelButtonText: '     Cancelar',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: url + 'Grado/Eliminar/' + idGrado,
                type: "POST",
                data: { idGrado: idGrado },
                success: function(respuesta) {
                    $('#Grado').DataTable().ajax.reload(null, false);

                    swalWithBootstrapButtons.fire(
                        'Eliminado!',
                        'El registro ha sido eliminado.',
                        'success'
                    )
                }
            });

        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelado',
                'Tu registro está a salvo :)',
                'error'
            )
        }
    })

}