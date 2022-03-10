<div class="container-fluid">
	<h2>Registro de Alumno</h2><br>
	<button type="button" class="btn btn-success" data-toggle="modal" data-target="#AlumnoModal">
		<i class="fa fas fa-solid fa-user-plus"></i>
	</button><br><br>
	<!--Filtrar por Alumno-->
	<select id="mat_id" onchange="filtrarMateria()">
		
	</select>
	<br><br>
	<!--Aquí se listan las Alumno.-->
	<div class="table-responsive-sm">
		<table id="Alumno" class="display table table-hover select-filter" style="width: 100%;">
			<thead class="thead-dark">
				<tr>
					<th>Id</th>
					<th>Codigo </th>
					<th>Nombre</th>
					<th>Edad</th>
					<th>Sexo</th>
					<th>Observación</th>
					<th>Accion</th>
				</tr>
			</thead>

		</table>
	</div>
	<!--Aqui termina la lista de tabla de Alumno-->

</div>