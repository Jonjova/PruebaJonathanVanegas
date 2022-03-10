<!--Aquí comienza el modal de nuevo tipo de cliente -->
<div>
    <form id="MateriaCreateForm" method="post" enctype="multipart/form-data" class="needs-validation">
        <div class="modal fade " id="MateriaModal" aria-hidden="true">
            <div class="modal-dialog  modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Nueva Materia</h5>
                        
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm">
                                <label>Nombre</label>
                                <input type="text" placeholder="Ingrese Nombre" id="mat_nombre" name="mat_nombre" class="form-control mb-2 mr-sm-2 " id-data="validationCustom02" required>
                            </div>
                        </div>
                                     
                    </div>
                    <div class="modal-footer">

                        <button type="button" class="btn btn-secondary pull-left btn-sm" data-dismiss="modal" onclick="limpiarAlumno()">Cerrar</button>
                        <button type="submit"  class="btn btn-success btn-sm">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    </form>

    <!--Aquí termina el modal de nuevo tipo de alumno -->