/****************************************************************************
                        Mostrar Materia
****************************************************************************/
//Versión datatable y ajax.
$(document).ready(function() {

    //Mostrar elementos de la tabla Alumno.
    $('#Materia').DataTable({
        "ajax": url + "Materia/MostrarMateria",
        responsive: true,
        "order": [],
        "language": idioma_espanol
    });


});


/****************************************************************************
                        Acción de Insertar Materia.
****************************************************************************/
$(function() {
    $("#MateriaCreateForm").submit(function(event) {

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
                url: url + 'Materia/Guardar',
                data: $("#MateriaCreateForm").serialize(),
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
                        limpiarMateria();

                    }
                }
            });
            event.preventDefault();
        }
    });

});

/****************************************************************************
                        Acción de Actualizar Alumnos.
****************************************************************************/

$("#MateriaEditForm").submit(function(event) {
    event.preventDefault();
    $.ajax({
        url: url + 'Materia/Actualizar',
        data: $("#MateriaEditForm").serialize(),
        type: "post",
        async: false,
        dataType: 'json',
        success: function(response) {
            $('#Materia').DataTable().ajax.reload(null, false);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Actualizado correctamente',
                showConfirmButton: false,
                timer: 1500
            });
            $('#editMateria').modal('hide');
        },
        error: function() {
            alert("error");
        }
    });
});


/****************************************************************************
                       Obtener un id de Materias.
****************************************************************************/

function obtenIdMateria(idMateria, data) {
    $.ajax({
        url: url + 'Materia/obtenerIdMateria/' + idMateria,
        method: "post",
        data: JSON.stringify({ idMateria: idMateria }),
        dataType: "json",
        success: function(response) {
            $('#mat_id').val(response.mat_id);
            $('#mat_nombre_').val(response.mat_nombre);
            $('#editMateria').modal({
                backdrop: "static",
                keyboard: false
            });
        }
    })
}


/****************************************************************************
                        Acción de Eliminar Materias.
****************************************************************************/
function eliminarMateria(idMateria) {

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
                url: url + 'Materia/Eliminar/' + idMateria,
                type: "POST",
                data: { idMateria: idMateria },
                success: function(respuesta) {
                    $('#Materia').DataTable().ajax.reload(null, false);

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