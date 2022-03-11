<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Alumno extends CI_Controller
{
	public function __construct()
	{
		parent::__construct();
		// la "am" es un alias para poder hacer mas corto el nombre del modelo 
		$this->load->model('Alumno_m', 'am', true);
	}

	public function index()
	{
		//Encabezado 
		$data = array('title' => 'Alumnos' );
		$this->load->view('layout/header',$data);
		$this->load->view('layout/nav');
		//Body
		$this->load->view('Alumno/Mostrar_Alumno');
		$this->load->view('Alumno/Registrar_Alumno');
		$this->load->view('Alumno/Actualizar_Alumno');
		//Pie de pagina
		$this->load->view('layout/footer');
	}

	// Obtener datos de un alumno
	public function obtenerDatosAlumno($id){
		
		$resultado = $this->am->idDatosAlumno(array('alm_id' =>$id));
		echo json_encode($resultado);
	}

	//Mostrar con ajax y datatable
	public function MostrarAlumno($alumnos)
	{

		$resultList = $this->am->mostrarAlumnos($alumnos);

		$result = array();
		$editar = '';
		$i = 1;
		if (!empty($resultList)) {

			foreach ($resultList as $key => $value) {
				//boton de editar con el que obtenemos un id
				$editar = '<a onclick="obtenIdAlumno('.$value['alm_id'].')" > <i class="fas fa-edit fa-lg"></i></a> ';
				$eliminar = '<a onclick="eliminarAlumno('.$value['alm_id'].')"  > <i class="fas fa-user-times fa-lg"></i></a> ';

				$result['data'][] = array(
					$i++,
					$value['alm_codigo'],
					$value['alm_nombre'],
					$value['alm_edad'],
					$value['alm_sexo'],
					$value['alm_observacion'],
					$editar .'  '. $eliminar,

				);
			}
		} else {
			$result['data'] = array();
		}

		echo json_encode($result);
	}

	//LLenar select con ajax 
	public function obtGrado()
	{
		$datos = $this->am->obtGradoRows();
		echo "<option selected disabled value=''>Seleccione..</option>";
		foreach ($datos as $s) {
			echo "<option value='".$s['grd_id']."'>".$s['grd_nombre']."</option>";
		}
	}

	//LLenar select con ajax 
	public function obtMaterias()
	{
		$datos = $this->am->obtMateriaRows();
		echo "<option selected disabled value=''>Seleccione..</option>";
		echo "<option value='TODOS' selected>TODOS</option>";
		foreach ($datos as $s) {
			echo "<option value='".$s['alm_id']."'>".$s['alm_nombre']."</option>";
		}
	}

	// Guardar Alumnos
	public function Guardar()
	{
		//date_default_timezone_set("America/El_Salvador"); // ZONA HORARIA

		$insert = $this->am->insertAlumno($_POST);
		//var_dump($insert);
		if ($insert == TRUE) {
			echo "true";
		}
	}

	//Actualizar Alumnos
	public function Actualizar()
	{
		date_default_timezone_set("America/El_Salvador"); // ZONA HORARIA
		$whereAlumno = $this->input->post('alm_id');
		//echo json_encode($whereAlumno);
		 $actualizarProyecto = $this->am->actualizarAlumno('alm_alumno', $_POST, array('alm_id' => $whereAlumno));
		
		if ($actualizarProyecto == TRUE)
		{
			echo json_encode('Datos actualizados!');
        }
        else
        {
            echo json_encode('Error al actualizar!');
		}

	}

	//Obtener el id un Alumno 
	public function obtenerIdAlumno($idAlumno)
	{
		$resultData = $this->am->obtenAlumnoId(array('alm_id'=>$idAlumno ));
		//Codificamos a json par aobtener la respuesta. 
		echo json_encode($resultData);
	}

	//Metodo Eliminar 
	public function Eliminar($id)
	{
		return $this->am->EliminarAlumno($id);
	}

}
