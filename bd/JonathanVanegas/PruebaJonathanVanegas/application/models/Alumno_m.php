<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Alumno_m extends CI_Model
{
	// result_array devuelve datos de tipo de matriz asociativa. 
	public function mostrarAlumnos()
	{
		$this->db->select('*');
		$this->db->from('alm_alumno');
		$datos = $this->db->get();
		return $datos->result_array();
	}

    // Datos de alumnos por id
	public function idDatosAlumno($where){
		$query = $this->db->select('*')->from('alm_alumno')->where($where)->get();
	     return $query->row_array();
	}

	// Insertar Alumno
	public function insertAlumno($data)
	{
		if ($this->db->insert('alm_alumno',$data))
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	// Actualizar Alumno
	public function actualizarAlumno($tablename,$data,$where)
	{
		$query = $this->db->update($tablename, $data, $where);
		return $query;
	}

    //llenado Select Grados
	public function obtGradoRows()
	{
		$datos = $this->db->get('grd_grado');
		return $datos->result_array();
	}

	//llenado Select Materias
	public function obtMateriaRows()
	{
		$datos = $this->db->get('mat_materia');
		return $datos->result_array();
	}

}
