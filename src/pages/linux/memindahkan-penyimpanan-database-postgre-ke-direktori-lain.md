---
layout: post
title: Memindahkan Penyimpanan Database Postgre Ke Direktori Lain
modified:
category: linux
excerpt:
tags: [tutorial, linux, psql]
image:
  feature:
author: detik_pw
share: true
comments: true
date: 2017-09-21T17:42:21+07:00
---
> Artikel ini ketika dibuat sempat terpotong 2-3 bulan besar kemungkinan ada kesalahan. Maka saya semakin tidak bertanggung jawab bila database anda hilang, malfunction, atau dicomot kucing.

Sering dapat notifikasi cinta dari om Zorin bahwa direktori root di notebook kantor udah sekarat, ternyata gemuk karena image docker dan postgresql (psql) image docker 15 GB dan psql yang mencapai 30 GB. Image docker tanpa pikir panjang langsung hapus, sebenarnya lumayan sih langsung ada space sekitar 17 GB, tapi penasaran ternyata data psql bisa dipindahkan, nah kebetulan yang bikin nih root sempit karena hdd yang dijadikan root itu SSD 100 GB hasil bagi-bagi, root dapat jatah 67 GB, jadi rencananya mau bikin 1 partisi lagi yang diambil dari hdd yang lain (non SSD 1 TB), karena data psql ini aslinya udah jarang dipake, nampaknya tak masalah jika saya pindahkan ke non ssd.

Yang akan dipelajari:
1. Konfigurasi psql.
2. Konfigurasi auto mount partisi menggunakan fstab.

Yang perlu dipersiapkan:
1. Partisi linux (saya menggunakan ext4).
2. Mengetahui lokasi default data psql.

Langkah-langkah:
1. Masuk ke psql command line

    `sudo -u postgres psql`

2. Lalu gunakan command di bawah ini untuk mengetahui lokasi default data postgre anda, bila sudah ketik `\q` untuk keluar dari cli-nya postgre

    `SHOW data_directory;`
    ```bash
        data_directory
    ------------------------------
    /var/lib/postgresql/9.5/main
    (1 row)
    ```
3. Matikan service postgre anda

    `sudo systemctl stop postgresql`
4. Buat *mount point*

    `sudo mkdir /media/data`

5. Catat uuid pada partisi yang akan anda gunakan

    `sudo blkid`

6. Gunakan editor favorit anda untuk mengubah file /etc/fstab, gunakan uuid yang didapat pada langkah sebelumnya

    `sudo vim /etc/fstab`
    `UUID=0f713ecd-564f-4a14-868b-2aefe36ed2dc /media/data     ext4    defaults        0       2`

7. Pastikan partisi baru anda bisa digunakan, bila sudah salin folder postgre ke partisi yang baru saja dibuat

    `sudo rsync -av /var/lib/postgresql /media/data/psql`

8. Bila sudah selesai backup database

    `sudo mv /var/lib/postgresql/9.5/main /var/lib/postgresql/9.5/main.bak`

9. Lalu ke configurasi postgre ubah nilah data_directory
    `sudo vim /etc/postgresql/9.5/main/postgresql.conf`

    `data_directory = '/media/data/psql/postgresql/9.5/main'`

10. Hidupkan kembali postgre service

    `sudo systemctl start postgresql`

11. Gunakan langkah no.2 untuk cek kembali apakah data_directory sudah mengarah ke partisi baru

Bila iya bisa restart kembali postgre service-nya untuk memastikan. Sekian guide dari saya.
