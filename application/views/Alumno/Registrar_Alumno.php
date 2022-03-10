<!--Aquí comienza el modal de nuevo tipo de cliente -->
<div>
    <form id="AlumnoCreateForm" method="post" enctype="multipart/form-data" class="needs-validation">
        <div class="modal fade " id="AlumnoModal" aria-hidden="true">
            <div class="modal-dialog  modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Nuevo Alumno</h5>
                        <div id="msg"></div>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm">
                                <label>Codigo</label>
                                <input type="text" placeholder="Ingrese Codigo" id="alm_codigo" name="alm_codigo" class="form-control mb-2 mr-sm-2 " id-data="validationCustom01" required>
                            </div>
                            <div class="col-sm">
                                <label>Nombre</label>
                                <input type="text" placeholder="Ingrese Nombre" id="alm_nombre" name="alm_nombre" class="form-control mb-2 mr-sm-2 " id-data="validationCustom02" required>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm">
                                <label>Edad</label>
                                <input type="text" placeholder="Ingrese Edad" id="alm_edad" name="alm_edad" class="form-control mb-2 mr-sm-2 " id-data="validationCustom02" required>
                            </div>

                            <div class="col-sm">
                                <label>Sexo</label>
                                <select name="alm_sexo" id="alm_sexo" class="custom-select" required>
                                    <option  value="0" disabled>Seleccione..</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                </select>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm">
                                <label>Grado</label>
                                <select name="alm_id_grd" id="alm_id_grd" class="custom-select" required>
                                </select>
                            </div>

                            <div class="col-sm">
                                <label>Observación</label>
                                <textarea id="alm_observacion" placeholder="Ingrese Direccion" name="alm_observacion" rows="2" cols="10" class="form-control mb-2 mr-sm-2 " required></textarea>
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