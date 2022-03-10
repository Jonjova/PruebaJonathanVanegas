<!-- Aqui comienza el modal de editar -->
<div class="modal fade" id="editAlumno" aria-hidden="true">
    <div class="modal-dialog " role="document">
        <div class="modal-content" style="opacity: 0.90;background-color: #eee;">
            <div class="modal-header">
                <h5 class="modal-title">Editar información de Alumno</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form id="AlumnoEditForm" enctype="multipart/form-data" class="needs-validation">
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm">
                            <label>Codigo</label>
                            <input hidden name="alm_id" id="alm_id">
                            <input type="text" placeholder="Ingrese Codigo" id="alm_codigo_" name="alm_codigo" class="form-control mb-2 mr-sm-2 " id-data="validationCustom01" required>
                        </div>
                        <div class="col-sm">
                            <label>Nombre</label>
                            <input type="text" placeholder="Ingrese Nombre" id="alm_nombre_" name="alm_nombre" class="form-control mb-2 mr-sm-2 " id-data="validationCustom02" required>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm">
                            <label>Edad</label>
                            <input type="text" placeholder="Ingrese Edad" id="alm_edad_" name="alm_edad" class="form-control mb-2 mr-sm-2 " id-data="validationCustom02" required>
                        </div>

                        <div class="col-sm">
                            <label>Sexo</label>
                            <select name="alm_sexo" id="alm_sexo_" class="custom-select" required>
                                <option value="0" disabled>Seleccione..</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Femenino">Femenino</option>
                            </select>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm">
                            <label>Grado</label>
                            <select name="alm_id_grd" id="alm_id_grd_" class="custom-select" required>
                            </select>
                        </div>

                        <div class="col-sm">
                            <label>Observación</label>
                            <textarea id="alm_observacion_" placeholder="Ingrese Direccion" name="alm_observacion" rows="2" cols="10" class="form-control mb-2 mr-sm-2 " required></textarea>
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