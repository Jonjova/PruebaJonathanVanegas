<!-- Aqui comienza el modal de editar -->
<div class="modal fade" id="editGrado" aria-hidden="true">
    <div class="modal-dialog " role="document">
        <div class="modal-content" style="opacity: 0.90;background-color: #eee;">
            <div class="modal-header">
                <h5 class="modal-title">Editar información de Grado</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="GradoEditForm" enctype="multipart/form-data" class="needs-validation">
                <div class="modal-body">
                    <div class="row">
                      
                        <div class="col-sm">
                            <label>Grado</label>
                            <input hidden name="grd_id" id="grd_id">
                            <input type="text" placeholder="Ingrese Nombre" id="grd_nombre_" name="grd_nombre" class="form-control mb-2 mr-sm-2 " id-data="validationCustom02" required>
                        </div>
                    </div>
                   
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary pull-left btn-sm" data-dismiss="modal">cerrar</button>
                    <button type="submit" class="btn btn-primary btn-sm">Actualizar</button>
                </div>
            </form>
        </div>
    </div>
</div>