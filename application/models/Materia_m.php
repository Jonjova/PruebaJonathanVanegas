<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Materia_m extends CI_Model
{
	// result_array devuelve datos de tipo de matriz asociativa. 
	public function mostrarMateria()
	{
		$this->db->select('*');
		$this->db->from('mat_materia');
		$datos = $this->db->get();
		return $datos->result_array();
	}

	// Datos de Materia por id
	public function idDatosMateria($where)
	{
		$query = $this->db->select('*')->from('mat_materia')->where($where)->get();
		return $query->row_array();
	}

	// Insertar Materia
	public function insertMateria($data)
	{
		if ($this->db->insert('mat_materia', $data)) {
			return true;
		} else {
			return false;
		}
	}

	// Actualizar Materia
	public function actualizarMateria($tablename, $data, $where)
	{
		$query = $this->db->update($tablename, $data, $where);
		return $query;
	}


	//Obtener Materia Id
	public function obtenMateriaId($where)
	{
		$query = $this->db->select('*')
			->from('mat_materia')
			->where($where)
			->get();
		return $query->row_array();
	}

	//Eliminar alumno
	function EliminarMateria($id)
	{
		$this->db->where('mat_id', $id);
		$this->db->delete('mat_materia');
		if ($this->db->affected_rows() > 0) {
			return true;
		} else {
			return false;
		}
	}

	
}
