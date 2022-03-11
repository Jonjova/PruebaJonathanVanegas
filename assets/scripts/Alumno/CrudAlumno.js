/****************************************************************************
                        Mostrar Alumnos
****************************************************************************/
//Versión datatable y ajax.
$(document).ready(function() {
    Materias();
    GradoAlumno();
    var alumno = $("[name='alm_id']").val();
    //var alumno = $('#alm_id').val();
    //var alumno = $("#alm_id option:selected").text();
    var op = llenarTablaAlumno(alumno);
    console.log(op);
    /*$('#alm_id').change(function(e) {
        e.preventDefault();
        alert(alumno);
    });*/
});

$('#alm_id').change(function() {
    $('#Alumno').dataTable().fnDestroy();
    llenarTablaAlumno($(this).val());
});

function llenarTablaAlumno(alumno) {
    //Mostrar elementos de la tabla Alumno.
    $('#Alumno').DataTable({
        "ajax": url + "Alumno/MostrarAlumno/" + alumno,
        responsive: true,
        "order": [],
        "language": idioma_espanol
    });

}

/****************************************************************************
                        Filtrar por Materia
****************************************************************************/

/*function filtrarMateria() {
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

*/
/****************************************************************************
                        llenar select de Grado del Alumno
****************************************************************************/
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

/****************************************************************************
                        llenar select de Materia
****************************************************************************/

function Materias() {
    $.ajax({
        url: url + "Alumno/obtMaterias",
        type: 'post',
        success: function(respuesta) {
            //Insertar
            $('#alm_id').html(respuesta);
            //Actualizar
            $('#mat_id_').html(respuesta);
        }
    })
}

/****************************************************************************
                        Acción de Insertar Alumnos.
****************************************************************************/
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

/****************************************************************************
                        Acción de Actualizar Alumnos.
****************************************************************************/

$("#AlumnoEditForm").submit(function(event) {
    event.preventDefault();
    $.ajax({
        url: url + 'Alumno/Actualizar',
        data: $("#AlumnoEditForm").serialize(),
        type: "post",
        async: false,
        dataType: 'json',
        success: function(response) {
            $('#Alumno').DataTable().ajax.reload(null, false);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Actualizado correctamente',
                showConfirmButton: false,
                timer: 1500
            });
            $('#editAlumno').modal('hide');
            $("mat_id select").val("TODOS").change();
        },
        error: function() {
            alert("error");
        }
    });
});


/****************************************************************************
                       Obtener un id de Alumno.
****************************************************************************/

function obtenIdAlumno(idAlumno, data) {
    $.ajax({
        url: url + 'Alumno/obtenerIdAlumno/' + idAlumno,
        method: "post",
        data: JSON.stringify({ idAlumno: idAlumno }),
        dataType: "json",
        success: function(response) {
            $('#alm_id').val(response.alm_id);
            $('#alm_codigo_').val(response.alm_codigo);
            $('#alm_nombre_').val(response.alm_nombre);
            $('#alm_edad_').val(response.alm_edad);
            $('#alm_sexo_').val(response.alm_sexo);
            $('#alm_id_grd_').val(response.alm_id_grd);
            $('#alm_observacion_').val(response.alm_observacion);
            $('#editAlumno').modal({
                backdrop: "static",
                keyboard: false
            });
        }
    })
}


/****************************************************************************
                        Acción de Eliminar Alumnos.
****************************************************************************/
function eliminarAlumno(idAlumno) {

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
                url: url + '/Alumno/Eliminar/' + idAlumno,
                type: "POST",
                data: { idAlumno: idAlumno },
                success: function(respuesta) {
                    $('#Alumno').DataTable().ajax.reload(null, false);

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