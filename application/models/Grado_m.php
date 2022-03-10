<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Grado_m extends CI_Model
{
	// result_array devuelve datos de tipo de matriz asociativa. 
	public function mostrarGrado()
	{
		$this->db->select('*');
		$this->db->from('grd_grado');
		$datos = $this->db->get();
		return $datos->result_array();
	}

	// Datos de Grado por id
	public function idDatosGrado($where)
	{
		$query = $this->db->select('*')->from('grd_grado')->where($where)->get();
		return $query->row_array();
	}

	// Insertar Grado
	public function insertGrado($data)
	{
		if ($this->db->insert('grd_grado', $data)) {
			return true;
		} else {
			return false;
		}
	}

	// Actualizar Grado
	public function actualizarGrado($tablename, $data, $where)
	{
		$query = $this->db->update($tablename, $data, $where);
		return $query;
	}


	//Obtener Grado Id
	public function obtenGradoId($where)
	{
		$query = $this->db->select('*')
			->from('grd_grado')
			->where($where)
			->get();
		return $query->row_array();
	}

	//Eliminar Grado
	function EliminarGrado($id)
	{
		$this->db->where('grd_id', $id);
		$this->db->delete('grd_grado');
		if ($this->db->affected_rows() > 0) {
			return true;
		} else {
			return false;
		}
	}

	
}
