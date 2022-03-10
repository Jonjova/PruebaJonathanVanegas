</div>
</main>
<section class="copy legal">
	<p>
		<span class="small">
			Jonathan Vanegas <br />
			<a href="#">&copy; <?php echo date('Y'); ?> </a>
			&amp;
			<a href="#">
				Derechos Reservados
			</a>
		</span>
	</p>
</section>
<!-- DATATABLES PAPA BUSQUEDA Y PAGINACION AL MOSTRAR LOS DATOS JS -->
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/dataTables.bootstrap4.min.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/dataTables.buttons.min.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/dataTables.responsive.min.js"></script>

<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/idiomaDatatable.js"></script>

<!-- Validaciones de campos-->
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/jquery.validate.min.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/additional-methods.min.js"></script>


<!--Mantenimiento de Base de datos Registro -->
<!--Tabla Alumnos -->
<script type="text/javascript" src="<?php echo base_url(); ?>assets/scripts/Alumno/CrudAlumno.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/scripts/Alumno/ValidaAlumno.js"></script>

<!--Tabla Materia-->
<script type="text/javascript" src="<?php echo base_url(); ?>assets/scripts/Materias/CrudMateria.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/scripts/Materias/ValidaMaterias.js"></script>

<!--Recursos Diseño y alertas -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>assets/js/sweetalert2.js"></script>
<script src="<?php echo base_url(); ?>assets/js/estilo.js"></script>

<!--Importante base_url() es un complementa a la url que hagamos en ajax -->
<script type="text/javascript">
	var url = '<?php echo base_url(); ?>';
</script>

</html>