<!-- Begin Page Content -->
<div class="container-fluid">
	<div class="flash-data" data-flashdata="<?= $this->session->flashdata('pesan'); ?>"></div>
	<!-- Page Heading -->

	<h1 class="h3 mb-2 text-gray-800"><?= $judul; ?></h1>
          <p class="mb-4">Halaman ini akan membantu anda mengelola skripsi mahasiswa</a>.</p>
          <!-- DataTales Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <div class="row">
                <div class="col-sm-12 col-md-6">
                  <h6 class="m-0 font-weight-bold text-primary">Tabel Daftar Skripsi</h6>
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
						<th>Nama Mahasiswa</th>
						<th>NIM</th>
						<th>Dosbing 1</th>
						<th>Dosbing 2</th>
						<th>Program Studi</th>
						<th>Nilai</th>
						<th>Action</th>
					</tr>
                  </thead>

                  <tbody>
				  <?php if (empty($skripsi)) : ?>
						<tr>
							<td colspan="12">
								<div class="alert alert-danger" role="alert">
									Data not found!
								</div>
							</td>
						</tr>
					<?php endif; ?>
					<?php foreach ($skripsi as $u) : ?>
						<tr>
							<th scope="row"><?= ++$start; ?></th>
							<td><?= $u['judul']; ?></td>
							<td><?= $u['nama']; ?></td>
							<td><?= $u['nim']; ?></td>
							<td><?= $u['dosbing1']; ?></td>
							<td><?= $u['dosbing2']; ?></td>
							<td><?= $u['prodi']; ?></td>
							<?php if ($u['nilai'] != 0) : ?>
								<td><?= $u['nilai']; ?></td>
							<?php else : ?>
								<td>N/A</td>
							<?php endif; ?>
							<td>
								<a href="" data-toggle="modal" data-target="#pelamarEdit<?= $u['id'] ?>" class="btn btn-success btn-sm"><i class="fa fa-fw fa-edit"></i>Edit</a>
								<a href="<?= base_url() . 'admin/deleteSkripsi/' . $u['id'] ?>" data-nama="<?= $u['nama']; ?>" class="btn btn-danger btn-sm deleteSkrp"><i class="fa fa-fw fa-trash"></i>Delete</a>
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

<?php foreach ($skripsi as $u) : ?>
	<!-- Modal Edit -->
	<div class="modal fade" id="pelamarEdit<?= $u['id'] ?>" tabindex="-1" role="dialog" aria-labelledby="pelamarEditLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="pelamarEditLabel">Edit Data Skripsi</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<form action="<?= base_url('admin/updateSkripsi/' . $u['nim']); ?>" method="POST" class="needs-validation" novalidate>
					<div class="modal-body">
						<div class="form-group">
							<label for="nip">Judul Skripsi</label>
							<input type="text" class="form-control" id="judul" name="judul" value="<?= $u['judul']; ?>" required>
							<?= form_error('judul', '<div class="alert-danger" role="alert">', '</div>'); ?>
							<div class="invalid-feedback">
								Masukan Nama Skripsi
							</div>
						</div>
						<div class="form-group">
							<label for="nip">NIM</label>
							<input type="text" class="form-control" id="nim" name="nim" value="<?= $u['nim']; ?>" disabled>
							<?= form_error('nip', '<div class="alert-danger" role="alert">', '</div>'); ?>
						</div>
						<div class="form-group">
							<label for="nama">Nama</label>
							<input type="text" class="form-control" id="nama" name="nama" value="<?= $u['nama']; ?>" disabled>
							<?= form_error('nama', '<div class="alert-danger" role="alert">', '</div>'); ?>
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


<?php endforeach; ?>
<!-- Modal Tambah Prodi -->
<div class="modal fade" id="dosenBaru" tabindex="-1" role="dialog" aria-labelledby="dosenBaruLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="dosenBaruLabel">Tambah Dosen</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>

			<form action="<?= base_url('administrator/daftarDosen'); ?>" method="POST">
				<div class="modal-body">
					<div class="form-group">
						<input type="text" class="form-control" name="nip" id="nip" placeholder="NIP Dosen">
					</div>
					<div class="form-group">
						<input type="text" class="form-control" name="nama" id="nama" placeholder="Nama Dosen">
					</div>
					<div class="form-group">
						<select name="prodi" id="prodi" class="form-control">
							<option value="">- Pilih Prodi -</option>
							<?php foreach ($prodi as $f) : ?>
								<option value="<?= $f['kode_prodi']; ?>"><?= $f['prodi']; ?></option>
							<?php endforeach; ?>
						</select>
					</div>
					<div class="form-group">
						<select name="username" id="username" class="form-control">
							<option value="">- Pilih Username -</option>
							<?php foreach ($username as $f) : ?>
								<option value="<?= $f['id']; ?>"><?= $f['username']; ?> <?= '=> ' ?><?= $f['nama']; ?> </option>
							<?php endforeach; ?>
						</select>
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
<!-- Modal tambah penguji -->
<?php foreach ($skripsi as $u) : ?>
	<!-- Modal Tambah Penguji1 -->
	<div class="modal fade" id="penguji1<?= $u['id'] ?>" tabindex="-1" role="dialog" aria-labelledby="pengujiLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="pengujiLabel">Tentukan Penguji</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>

				<form action="<?= base_url('admin/updatePenguji/') . $u['id']; ?>" method="POST">
					<div class="modal-body">
						<div class="form-group">
							<select name="penguji1" id="penguji1" class="form-control">
								<option value="">- Pilih Penguji 1 -</option>
								<?php foreach ($penguji as $p) : ?>
									<option value="<?= $p['nip']; ?>"><?= $p['nama']; ?> </option>
								<?php endforeach; ?>
							</select>
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
	<!-- Modal Tambah Penguji2 -->
	<div class="modal fade" id="penguji2<?= $u['id'] ?>" tabindex="-1" role="dialog" aria-labelledby="pengujiLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="pengujiLabel">Tentukan Penguji</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>

				<form action="<?= base_url('admin/updatePenguji/') . $u['id']; ?>" method="POST">
					<div class="modal-body">
						<div class="form-group">
							<select name="penguji2" id="penguji2" class="form-control">
								<option value="">- Pilih Penguji 2 -</option>
								<?php foreach ($penguji as $p) : ?>
									<option value="<?= $p['nip']; ?>"><?= $p['nama']; ?> </option>
								<?php endforeach; ?>
							</select>
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
	<!-- Modal Tambah Penguji3 -->
	<div class="modal fade" id="penguji3<?= $u['id'] ?>" tabindex="-1" role="dialog" aria-labelledby="pengujiLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="pengujiLabel">Tentukan Penguji</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>

				<form action="<?= base_url('admin/updatePenguji/') . $u['id']; ?>" method="POST">
					<div class="modal-body">
						<div class="form-group">
							<select name="penguji3" id="penguji3" class="form-control">
								<option value="">- Pilih Penguji 3 -</option>
								<?php foreach ($penguji as $p) : ?>
									<option value="<?= $p['nip']; ?>"><?= $p['nama']; ?> </option>
								<?php endforeach; ?>
							</select>
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
<?php endforeach; ?>