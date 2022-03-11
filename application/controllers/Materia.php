<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Materia extends CI_Controller
{
	public function __construct()
	{
		parent::__construct();
		// la "am" es un alias para poder hacer mas corto el nombre del modelo 
		$this->load->model('Materia_m', 'mm', true);
	}

	public function index()
	{
		//Encabezado 
		$data = array('title' => 'Materia' );
		$this->load->view('layout/header',$data);
		$this->load->view('layout/nav');
		//Body
		$this->load->view('Materia/Mostrar_Materia');
		$this->load->view('Materia/Registrar_Materia');
		$this->load->view('Materia/Actualizar_Materia');
		//Pie de pagina
		$this->load->view('layout/footer');
	}

    // Obtener datos de un Materia
	public function obtenerDatosMateria($id){
		
		$resultado = $this->mm->idDatosMateria(array('mat_id' =>$id));
		echo json_encode($resultado);
	}

	//Mostrar con ajax y datatable
	public function MostrarMateria()
	{

		$resultList = $this->mm->mostrarMateria();

		$result = array();
		$editar = '';
		$i = 1;
		if (!empty($resultList)) {

			foreach ($resultList as $key => $value) {
				//boton de editar con el que obtenemos un id
				$editar = '<a onclick="obtenIdMateria('.$value['mat_id'].')" > <i class="fas fa-edit fa-lg"></i></a> ';
				$eliminar = '<a onclick="eliminarMateria('.$value['mat_id'].')"  > <i class="fas fa fa-solid fa-eraser fa-lg"></i></a> ';

				$result['data'][] = array(
					$i++,
					$value['mat_nombre'],
					$editar .'  '. $eliminar,

				);
			}
		} else {
			$result['data'] = array();
		}

		echo json_encode($result);
	}


	// Guardar Materias
	public function Guardar()
	{
		date_default_timezone_set("America/El_Salvador"); // ZONA HORARIA
		$insert = $this->mm->insertMateria($_POST);

		if ($insert == TRUE) {
			echo "true";
		}
	}

	//Actualizar Materias
	public function Actualizar()
	{
		//date_default_timezone_set("America/El_Salvador"); // ZONA HORARIA
		$whereMateria = $this->input->post('mat_id');
		
		 $actualizarMateria = $this->mm->actualizarMateria('mat_materia', $_POST, array('mat_id' => $whereMateria));
		
		if ($actualizarMateria == TRUE)
		{
			echo json_encode('Datos actualizados!');
        }
        else
        {
            echo json_encode('Error al actualizar!');
		}

	}

	//Obtener el id un Alumno 
	public function obtenerIdMateria($idMateria)
	{
		$resultData = $this->mm->obtenMateriaId(array('mat_id'=>$idMateria ));
		//Codificamos a json par aobtener la respuesta. 
		echo json_encode($resultData);
	}

	//Metodo Eliminar 
	public function Eliminar($id)
	{
		return $this->mm->EliminarMateria($id);
	}

}
