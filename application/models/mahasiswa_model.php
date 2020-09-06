<?php
defined('BASEPATH') or exit('No direct script access allowed');

class mahasiswa_model extends CI_Model
{
    public function getMahasiswa()
    {
        $query ="SELECT m.nim, m.nama, u.username, p.prodi FROM mahasiswa m, prodi p, user u WHERE m.prodi = p.kode_prodi and m.username = u.id";
        return $this->db->query($query)->result_array();
    }
}
