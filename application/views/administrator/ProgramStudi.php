<!-- Begin Page Content -->
<div class="container-fluid">
	<div class="flash-data" data-flashdata="<?= $this->session->flashdata('pesan'); ?>"></div>
	<!-- Page Heading -->
	<h1 class="h3 mb-2 text-gray-800"><?= $judul; ?></h1>
          <p class="mb-4">Halaman ini akan membantu anda mengelola data program studi</a>.</p>
          <!-- DataTales Example -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <div class="row">
                <div class="col-sm-12 col-md-6">
                  <h6 class="m-0 font-weight-bold text-primary">Tabel Data Program Studi</h6>
                </div>

              </div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
				  	<tr>
					  	<th>No</th>
						<th>Kode Fakultas</th>
						<th>Kode Prodi</th>
						<th>Nama Program Studi</th>
						<th>Action</th>
					</tr>
                  </thead>

                  <tbody>
				  <?php if (empty($prodi)) : ?>
						<tr>
							<td colspan="12">
								<div class="alert alert-danger" role="alert">
									Data not found!
								</div>
							</td>
						</tr>
					<?php endif; ?>
					<?php $no = 1; ?>
					<?php foreach ($prodi as $p) : ?>
						<tr>
							<th scope="row"><?= ++$start; ?></th>
							<td><?= $p['kode_fak']; ?></td>
							<td><?= $p['kode_prodi']; ?></td>
							<td><?= $p['prodi']; ?></td>
							<td>
								<a href="" class="btn btn-success btn-sm" data-toggle="modal" data-target="#prodiEdit<?= $p['kode_prodi'] ?>"><i class="fa fa-fw fa-edit"></i>Edit</a>
								<a href="<?= base_url('administrator/deleteProdi/' . $p['kode_prodi']) ?>" data-nama="<?= $p['prodi']; ?>" class="btn btn-danger btn-sm deletePro"><i class="fa fa-fw fa-trash"></i>Delete</a>
							</td>
						</tr>
						<?php $no++; ?>
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


<!-- Modal -->
<!-- Modal Tambah Prodi -->
<div class="modal fade" id="prodiBaru" tabindex="-1" role="dialog" aria-labelledby="prodiBaruLabel" aria-hidden="true">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="prodiBaruLabel">Tambah Prodi Baru</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>

			<form action="<?= base_url('administrator/ProgramStudi'); ?>" method="POST" class="needs-validation" novalidate>
				<div class="modal-body">
					<div class="form-group">
						<select name="kodefak" id="kodefak" class="form-control" required>
							<option value="">- Pilih Fakultas -</option>
							<?php foreach ($fakultas as $f) : ?>
								<option value="<?= $f['kode_fak']; ?>"><?= $f['fakultas']; ?></option>
							<?php endforeach; ?>
						</select>
					</div>
					<div class="form-group">
						<input type="text" class="form-control" name="kodeprodi" id="kodeprodi" placeholder="Kode Program Studi" required>
						<div class="invalid-feedback">
							Masukan Kode Prodi
						</div>
					</div>
					<div class="form-group">
						<input type="text" class="form-control" name="prodi" id="prodi" placeholder="Nama Program Studi" required>
						<div class="invalid-feedback">
							Masukan Nama Prodi
						</div>
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

<!-- Modal Edit Prodi -->
<?php foreach ($prodi as $p) : ?>
	<div class="modal fade" id="prodiEdit<?= $p['kode_prodi'] ?>" tabindex="-1" role="dialog" aria-labelledby="prodiEditLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="prodiEditLabel">Edit Menu</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<form action="<?= base_url('administrator/updateProdi/' . $p['kode_prodi']); ?>" method="POST">
					<div class="modal-body">
						<div class="form-group">
							<input type="text" class="form-control" name="prodiU" id="prodiU" value="<?= $p['prodi'] ?>">
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
						<button type="submit" class="btn btn-primary">Edit</button>
					</div>
				</form>
			</div>
		</div>
	</div>

<?php endforeach; ?>