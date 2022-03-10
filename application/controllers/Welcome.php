<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Welcome extends CI_Controller
{

	public function index()
	{

		//Encabezado 
		$data = array('title' => 'Inicio');
		$this->load->view('layout/header', $data);
		$this->load->view('layout/nav');
		//Body
		$this->load->view('welcome_message');
		//Pie de pagina
		$this->load->view('layout/footer');
	}
}
