<?php
defined('BASEPATH') or exit('No direct script access allowed');

class user_model extends CI_Model
{
    public function getUsers($limit, $start, $keyword = null, $user)
    {
        //administrator
        if ($user == 1) {
            if ($keyword !== null) {
                $query =
                    "
			SELECT u.id,  u.username, u.level_id, l.level as level FROM user u, user_level l WHERE u.level_id = l.id and (u.username LIKE '%$keyword%' OR l.level LIKE '%$keyword%') limit $start, $limit
		";
            } else {
                $query =
                    "
			SELECT u.id,  u.username, u.level_id, l.level as level FROM user u, user_level l WHERE u.level_id = l.id limit $start, $limit
		";
            }
        }
        //admin prodi
        if (($user == 2)) {
            if ($keyword !== null) {
                $query =
                    "
			SELECT u.id,  u.username, u.level_id, l.level as level FROM user u, user_level l WHERE u.level_id = l.id AND u.level_id != '1' AND u.level_id != '2' and (u.username LIKE '%$keyword%' OR l.level LIKE '%$keyword%') limit $start, $limit
		";
            } else {
                $query =
                    "
			SELECT u.id,  u.username, u.level_id, l.level as level FROM user u, user_level l WHERE u.level_id != '1' AND u.level_id != '2' AND u.level_id = l.id limit $start, $limit
		";
            }
        }
        return $this->db->query($query, $limit, $start, $keyword)->result_array();
    }
    public function getUserByLv($lvl1='null',$lvl2='null',$lvl3='null',$lvl4='null' ){
        $query ="SELECT u.id,  u.username, u.level_id, l.level as level FROM user u, user_level l WHERE u.level_id = l.id and
        (u.level_id=$lvl1 OR u.level_id=$lvl2 OR u.level_id=$lvl3 OR u.level_id=$lvl4)";
        return $this->db->query($query)->result_array();
    }
    public function getUserByProdi($level, $prodi){
        if ($level==3){
            $query ="SELECT u.id,  u.username, u.level_id, l.level as level FROM user u, user_level l, dosen d WHERE u.level_id = l.id AND d.username = u.id AND d.prodi=$prodi AND u.level_id=$level  
            ORDER BY `u`.`username` ASC";
        }
        if ($level==4){
            $query ="SELECT u.id,  u.username, u.level_id, l.level as level FROM user u, user_level l, mahasiswa m WHERE u.level_id = l.id AND m.username = u.id AND m.prodi=$prodi AND u.level_id=$level  
            ORDER BY `u`.`username` ASC";
        }
        return $this->db->query($query)->result_array();
    }
}
