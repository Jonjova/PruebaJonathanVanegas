<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Grado extends CI_Controller
{
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Grado_m', 'gm', true);
	}

	public function index()
	{
		//Encabezado 
		$data = array('title' => 'Grado' );
		$this->load->view('layout/header',$data);
		$this->load->view('layout/nav');
		//Body
		$this->load->view('Grado/Mostrar_Grado');
		$this->load->view('Grado/Registrar_Grado');
		$this->load->view('Grado/Actualizar_Grado');
		//Pie de pagina
		$this->load->view('layout/footer');
	}

    // Obtener datos de un Grado
	public function obtenerDatosGrado($id){
		
		$resultado = $this->gm->idDatosGrado(array('grd_id' =>$id));
		echo json_encode($resultado);
	}

	//Mostrar con ajax y datatable
	public function MostrarGrado()
	{

		$resultList = $this->gm->mostrarGrado();

		$result = array();
		$editar = '';
		$i = 1;
		if (!empty($resultList)) {

			foreach ($resultList as $key => $value) {
				//boton de editar con el que obtenemos un id
				$editar = '<a onclick="obtenIdGrado('.$value['grd_id'].')" > <i class="fas fa-edit fa-lg"></i></a> ';
				$eliminar = '<a onclick="eliminarGrado('.$value['grd_id'].')"  > <i class="fas fa-user-times fa-lg"></i></a> ';

				$result['data'][] = array(
					$i++,
					$value['grd_nombre'],
					$editar .'  '. $eliminar,

				);
			}
		} else {
			$result['data'] = array();
		}

		echo json_encode($result);
	}


	// Guardar Grado
	public function Guardar()
	{
		date_default_timezone_set("America/El_Salvador"); // ZONA HORARIA
		$insert = $this->gm->insertGrado($_POST);

		if ($insert == TRUE) {
			echo "true";
		}
	}

	//Actualizar Grado
	public function Actualizar()
	{
		//date_default_timezone_set("America/El_Salvador"); // ZONA HORARIA
		$whereGrado = $this->input->post('grd_id');
		
		 $actualizarGrado = $this->gm->actualizarGrado('grd_grado', $_POST, array('grd_id' => $whereGrado));
		
		if ($actualizarGrado == TRUE)
		{
			echo json_encode('Datos actualizados!');
        }
        else
        {
            echo json_encode('Error al actualizar!');
		}

	}

	//Obtener el id un Grado 
	public function obtenerIdGrado($idGrado)
	{
		$resultData = $this->gm->obtenGradoId(array('grd_id'=>$idGrado ));
		//Codificamos a json par aobtener la respuesta. 
		echo json_encode($resultData);
	}

	//Metodo Eliminar Grado
	public function Eliminar($id)
	{
		return $this->gm->EliminarGrado($id);
	}

}
