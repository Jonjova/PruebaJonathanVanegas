<!--Aquí comienza el modal de nuevo tipo de Grado -->
<div>
    <form id="GradoCreateForm" method="post" enctype="multipart/form-data" class="needs-validation">
        <div class="modal fade " id="GradoModal" aria-hidden="true">
            <div class="modal-dialog  modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Nuevo Grado</h5>
                        
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm">
                                <label>Grado</label>
                                <input type="text" placeholder="Ingrese Nombre" id="grd_nombre" name="grd_nombre" class="form-control mb-2 mr-sm-2 " id-data="validationCustom02" required>
                            </div>
                        </div>
                                     
                    </div>
                    <div class="modal-footer">

                        <button type="button" class="btn btn-secondary pull-left btn-sm" data-dismiss="modal" onclick="limpiarGrado()">Cerrar</button>
                        <button type="submit"  class="btn btn-success btn-sm">Guardar</button>
                    </div>
                </div>
            </div>
        </div>
    </form>

    <!--Aquí termina el modal de nuevo tipo de Grado -->