<?php
defined('BASEPATH') or exit('No direct script access allowed');

class dosen_model extends CI_Model
{
    public function getDosen()
    {
        $query ="SELECT d.nip, d.nama, u.username, p.prodi FROM dosen d, prodi p, user u WHERE d.prodi = p.kode_prodi and d.username = u.id";
        return $this->db->query($query)->result_array();
    }
    public function DosenProdi($id)
    {
        $query ="SELECT d.nip, d.nama, u.username, p.prodi FROM dosen d, prodi p, user u WHERE d.prodi = p.kode_prodi and d.username = u.id and d.prodi = $id";
        return $this->db->query($query)->result_array();
    }
}
