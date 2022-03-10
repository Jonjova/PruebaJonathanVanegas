//Versión datatable y ajax.
$(document).ready(function() {
    Materias();
    GradoAlumno();
    //Mostrar elementos de la tabla Alumno.
    var myTable = $('#Alumno').DataTable({
        "ajax": url + "Alumno/MostrarAlumno",
        responsive: true,
        "order": [],
        "language": idioma_espanol
    });
    // $("#mat_id option: selected").text('TODOS');
    $('#mat_id option:selected').value('TODOS');

});

//filtrar por Materia 
function filtrarMateria() {
    $('#Alumno').DataTable().draw();

}

$(document).ready(function() {
    $.fn.dataTable.ext.search.push(
        function(settings, data, dataIndex) { //'data' contiene los datos de la fila
            //En la columna 1 estamos mostrando la materia
            let materiaColumnaDatos = data[1] || 0;
            if (!filtrarPorMateria(materiaColumnaDatos)) {
                return false;
            }
            return true;
        }
    );
});

function filtrarPorMateria(materiaColumnaDatos) {
    let materiaSeleccionada = $('#mat_id').val();
    //Si la opción seleccionada es 'TODOS', devolvemos 'true' para que pinte la fila
    if (materiaSeleccionada === "TODOS") {
        return true;
    }
    //La fila sólo se va a pintar si el valor de la columna coincide con el del filtro seleccionado
    return materiaColumnaDatos === materiaSeleccionada;
}

//llenar select de Grado del Alumno	
function GradoAlumno() {
    $.ajax({
        url: url + "Alumno/obtGrado",
        type: 'post',
        success: function(respuesta) {
            //Insertar
            $('#alm_id_grd').html(respuesta);
            //Actualizar
            $('#alm_id_grd_').html(respuesta);
        }
    })
}

//llenar select de Materia	
function Materias() {
    $.ajax({
        url: url + "Alumno/obtMaterias",
        type: 'post',
        success: function(respuesta) {
            //Insertar
            $('#mat_id').html(respuesta);
            //Actualizar
            $('#mat_id_').html(respuesta);
        }
    })
}


// Acción de Insertar Alumnos.
$(function() {
    $("#AlumnoCreateForm").submit(function(event) {

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
                url: url + '/Alumno/Guardar',
                data: $("#AlumnoCreateForm").serialize(),
                type: "post",
                async: true,
                dataType: 'json',
                success: function(response) {

                    if (response !== '') {

                        //alert('Datos guardados correctamente');
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Datos guardados correctamente',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        limpiarAlumno();

                    }
                }
            });
            event.preventDefault();
        }
    });

});

// Acción de Actualizar especialidades.
$("#editForm").submit(function(event) {
    event.preventDefault();
    $.ajax({
        url: url + 'Ajax/Actualizar',
        data: $("#editForm").serialize(),
        type: "post",
        async: false,
        dataType: 'json',
        success: function(response) {

            if (response == 1) {
                $('#Cliente').DataTable().ajax.reload(null, false);
                //alert('Actualizado correctamente');
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Actualizado correctamente',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else {
                alert('ocurrio un error al Actualizar');
            }

        },
        error: function() {
            alert("error");
        }
    });
});


// Obtener un id de Alumno.
function obtenIdCliente(idCliente, data) {
    $.ajax({
        url: url + 'Ajax/obtenerIdCliente/' + idCliente,
        method: "post",
        data: JSON.stringify({ idCliente: idCliente }),
        dataType: "json",
        success: function(response) {

            $('#idCliente').val(response.idCliente);
            $('#nombre_').val(response.nombre);
            $('#apellido_').val(response.apellido);
            $('#idSexo_').val(response.idSexo);
            $('#fechaNac_').val(response.fechaNac);
            $('#direccion_').val(response.direccion);
            $('#telefono_').val(response.telefono);
            $('#email_').val(response.email);
            $('#estado_').val(response.estado);
            $('#editModal').modal({
                backdrop: "static",
                keyboard: false
            });
        }
    })
}


//Eliminar 
function eliminar(idCliente) {

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
        cancelButtonText: 'Cancelar',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: url + 'Ajax/Eliminar/' + idCliente,
                type: "POST",
                data: { idCliente: idCliente },
                success: function(respuesta) {
                    $('#Cliente').DataTable().ajax.reload(null, false);

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