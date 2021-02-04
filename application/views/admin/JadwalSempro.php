<!-- Begin Page Content -->
<script type="text/javascript" src="<?= base_url('assets/'); ?>js/admin.js"></script>
<!-- belum diperbaiki skripnya -->
<div class="container-fluid">
	<div class="flash-data" data-flashdata="<?= $this->session->flashdata('pesan'); ?>"></div>
	<!-- Page Heading -->

	<h1 class="h3 mb-2 text-gray-800"><?= $judul; ?></h1>
          <p class="mb-4">Halaman ini akan membantu anda mengelola penjadwalan seminar proposal</a>.</p>
          <!-- DataTales Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <div class="row">
                <div class="col-sm-12 col-md-6">
                  <h6 class="m-0 font-weight-bold text-primary">Tabel Jadwal Seminar Proposal</h6>
                </div>

              </div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
						<th>No</th>
						<th>Judul Skripsi</th>
						<th>Tanggal Sidang</th>
						<th>Waktu</th>
						<th>Periode</th>
						<th>Penguji 1</th>
						<th>Penguji 2</th>
						<th>Penguji 3</th>
						<th>Ruangan</th>
						<th>Action</th>
                    </tr>
                  </thead>

                  <tbody>

				  <?php if (empty($JSemp)) : ?>
						<tr>
							<td colspan="12">
								<div class="alert alert-danger" role="alert">
									Data not found!
								</div>
							</td>
						</tr>
					<?php endif;
							foreach ($JSemp as $u) : ?>
						<tr>
							<th scope="row"><?= ++$start; ?></th>
							<td><?= $u['judul']; ?></td>
							<td><?= $u['tanggal']; ?></td>
							<td><?= $u['waktu']; ?></td>
							<td><?= $u['periode']; ?></td>
							<td><?= $u['penguji1']; ?></td>
							<td><?= $u['penguji2']; ?></td>
							<td><?= $u['penguji3']; ?></td>
							<td><?= $u['ruangan']; ?></td>
							<td>
								<a href="" data-toggle="modal" data-target="#JadwalSemproEdit<?= $u['id'] ?>" class="btn btn-success btn-sm"><i class="fa fa-fw fa-edit"></i>Edit</a>
								<a href="<?= base_url() . 'admin/deleteJadwalSempro/' . $u['id'] ?>" data-nama="<?= $u['judul']; ?>" class="btn btn-danger btn-sm deleteJS"><i class="fa fa-fw fa-trash"></i>Delete</a>
							</td>
						</tr>
					<?php endforeach; ?>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
        <!-- /.container-fluid -->

        </div>
        <!-- End of Main Content -->

<?php foreach ($JSemp as $u) : $id=$u['id'];?>
	<!-- Modal Edit -->
	<div class="modal fade" id="JadwalSemproEdit<?= $u['id'] ?>" tabindex="-1" role="dialog" aria-labelledby="JadwalSemproEditLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="JadwalSemproEditLabel">Edit Jadwal Sempro</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<form action="<?= base_url('admin/EditJadwalSempro/' . $u['id']); ?>" method="POST">
					<div class="modal-body">
						<div class="form-group">
							<div class="name mb-3">Judul Skripsi</div>
							<select class="form-control value" name="judul2" id="judul2" disabled>
								<option value="<?= $u['id']; ?>"><?= $u['judul'];?></option>
							</select>
							<input type="hidden" class="form-control" id="judul" name="judul" value="<?= $u['id_skripsi']; ?>">
						</div>
						<div class="form-group">
							<label for="Tgl">Tanggal Sidang</label>
							<input type="date" class="form-control" id="tanggal" name="tanggal" value="<?= $u['tanggal']; ?>">
							<?= form_error('tanggal', '<div class="alert-danger" role="alert">', '</div>'); ?>
						</div>
						<div class="form-group">
							<label for="waktu">Waktu Sidang</label>
							<input type="text" class="form-control" id="waktu" name="waktu" value="<?= $u['waktu']; ?>">
							<?= form_error('waktu', '<div class="alert-danger" role="alert">', '</div>'); ?>
						</div>
						<div class="form-group">
							<label for="periode">Periode</label>
							<input type="text" class="form-control" id="periode" name="periode" value="<?= $u['periode']; ?>">
							<?= form_error('periode', '<div class="alert-danger" role="alert">', '</div>'); ?>
						</div>
						
						<div class="form-group">
							<select name="penguji1" id="tpenguji1<?= $id; ?>" class="form-control" onchange="penguji('tpenguji1<?= $id; ?>','tpenguji2<?= $id; ?>','tpenguji3<?= $id; ?>','tdosen<?= $u['id_skripsi']; ?>')">
								<option value="">- Pilih Dosen Penguji -</option>
								<?php foreach ($dosen as $f) : 
									if ($f['nip']==$u['nip1']){?>
										<option value="<?= $f['nip']; ?>" selected><?= $f['nama']; ?></option>
									<?php }else { ?>
										<option value="<?= $f['nip']; ?>" ><?= $f['nama']; ?></option>
								<?php } endforeach; ?>
							</select>
						</div>
						<div class="form-group">
							<select name="penguji2" id="tpenguji2<?= $id; ?>" class="form-control" onchange="penguji('tpenguji1<?= $id; ?>','tpenguji2<?= $id; ?>','tpenguji3<?= $id; ?>','tdosen<?= $u['id_skripsi']; ?>')">
								<option value="">- Pilih Dosen Penguji -</option>
								<?php foreach ($dosen as $f) : 
									if ($f['nip']==$u['nip2']){?>
										<option value="<?= $f['nip']; ?>" selected><?= $f['nama']; ?></option>
									<?php }else { ?>
										<option value="<?= $f['nip']; ?>"><?= $f['nama']; ?></option>
								<?php } endforeach; ?>
							</select>
						</div>
						<div class="form-group">
							<select name="penguji3" id="tpenguji3<?= $id; ?>" class="form-control" onchange="penguji('tpenguji1<?= $id; ?>','tpenguji2<?= $id; ?>','tpenguji3<?= $id; ?>','tdosen<?= $u['id_skripsi']; ?>')">
								<option value="">- Pilih Dosen Penguji -</option>
								<?php foreach ($dosen as $f) : 
									if ($f['nip']==$u['nip3']){?>
										<option value="<?= $f['nip']; ?>" selected><?= $f['nama']; ?></option>
									<?php }else { ?>
										<option value="<?= $f['nip']; ?>"><?= $f['nama']; ?></option>
								<?php } endforeach; ?>
							</select>
						</div>
						<div class="form-group">
							<label for="ruangan">Ruangan Sidang</label>
							<input type="text" class="form-control" id="ruangan" name="ruangan" value="<?= $u['ruangan']; ?>">
							<?= form_error('ruangan', '<div class="alert-danger" role="alert">', '</div>'); ?>
						</div>
					</div>
					<!-- Dosbing 1-2 -->
					<!-- penguji 1-3 -->

					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
						<button type="submit" class="btn btn-primary">Edit</button>
					</div>
				</form>
			</div>
		</div>
	</div>


<?php endforeach;?>

<!-- Modal Tambah Jadwal -->
<div class="modal fade" id="JadwalSemproBaru" tabindex="-1" role="dialog" aria-labelledby="JadwalSemproBaruLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="JadwalSemproBaruLabel">Tambah JadwalSempro</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<form action="<?= base_url('admin/JadwalSempro'); ?>" method="POST" class="needs-validation" novalidate>
				<div class="modal-body">
					<div class="form-group">
						<div class="name mb-3">Judul Skripsi</div>
						<select class="form-control value" name="judul" id="juduls" onchange="tambah('tpenguji1','tpenguji2','tpenguji3','tdosen')" required>
							<option value="">- Pilih Judul -</option>
							<?php foreach ($skripsi as $s) :
								if ($s['status']=='1'){?>
								<option value="<?= $s['id']; ?>"><?= $s['judul']; ?></option>
								<?php } endforeach; ?>
						</select>
					</div>
					<div class="form-group">
						<input type="date" class="form-control" name="tanggal" id="tanggal" placeholder="Tanggal Sidang Sempro" required>
						<div class="invalid-feedback">
							Masukan Tanggal Sempro
						</div>
					</div>
					<div class="form-group">
						<input type="text" class="form-control" name="waktu" id="waktu" placeholder="Waktu Sidang Sempro" required>
						<div class="invalid-feedback">
							Masukan Waktu Sempro
						</div>
					</div>
					<div class="form-group">
						<input type="text" class="form-control" name="periode" id="periode" placeholder="Periode" required>
						<div class="invalid-feedback">
							Masukan Periode Sempro
						</div>
					</div>
					<div class="form-group">
						<select name="penguji1" id="tpenguji1" class="form-control" onchange="tambah('tpenguji1','tpenguji2','tpenguji3','tdosen')" required>
							<option value="">- Pilih Dosen Penguji -</option>
							<?php foreach ($dosen as $f) : ?>
								<option value="<?= $f['nip']; ?>"><?= $f['nama']; ?></option>
							<?php endforeach; ?>
						</select>
					</div>
					<div class="form-group">
						<select name="penguji2" id="tpenguji2" class="form-control" onchange="tambah('tpenguji1','tpenguji2','tpenguji3','tdosen')" required>
							<option value="">- Pilih Dosen Penguji -</option>
							<?php foreach ($dosen as $f) : ?>
								<option value="<?= $f['nip']; ?>"><?= $f['nama']; ?></option>
							<?php endforeach; ?>
						</select>
					</div>
					<div class="form-group">
						<select name="penguji3" id="tpenguji3" class="form-control" onchange="tambah('tpenguji1','tpenguji2','tpenguji3','tdosen')" required>
							<option value="">- Pilih Dosen Penguji -</option>
							<?php foreach ($dosen as $f) : ?>
								<option value="<?= $f['nip']; ?>"><?= $f['nama']; ?></option>
							<?php endforeach; ?>
						</select>
					</div>
					<div class="form-group">
						<input type="text" class="form-control" name="ruangan" id="ruangan" placeholder="Ruangan Sidang Sempro" required>
						<div class="invalid-feedback">
							Masukan Ruangan Sempro
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
						<button type="submit" class="btn btn-primary">Tambah</button>
					</div>
			</form>

		</div>
	</div>
</div>
<span style="display : none">
	<div class="form-group">
		<select type="hidden" name="dosen" id="tdosen" class="form-control">
			<option value="">- Pilih Dosen Penguji -</option>
			<?php foreach ($dosen as $f) : ?>
				<option value="<?= $f['nip']; ?>"><?= $f['nama']; ?></option>
			<?php endforeach; ?>
		</select>
	</div>
</span>
<?php foreach ($skripsi as $sk){ ?>
	<span style="display : none">
		<div class="form-group">
			<select type="hidden" name="dosen" id="tdosen<?= $sk['id']; ?>" class="form-control">
				<option value="">- Pilih Dosen Penguji -</option>
				<?php foreach ($dosen as $f) : 
					if ($sk['dosbing_1']==$f['nip'] || $sk['dosbing_2']==$f['nip']){} else{ ?>
					<option value="<?= $f['nip']; ?>"><?= $f['nama']; ?></option>
				<?php } endforeach; ?>
			</select>
		</div>
	</span>
<?php } ?>