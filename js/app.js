const modules=[
['Dasar Bug Hunting','Pemula','Etika, scope, reconnaissance pasif, HTTP, DNS, browser DevTools, pencatatan bukti, dan alur responsible disclosure.'],
['XSS','Menengah','Reflected, stored, dan DOM XSS; konteks HTML/atribut/JavaScript; encoding; CSP; validasi di lab lokal; dampak dan mitigasi.'],
['SQL Injection','Menengah','Konsep query, parameterisasi, prepared statement, error handling, blind SQLi secara konseptual, dan pengujian aman tanpa mengambil data.'],
['Broken Link Checking','Pemula','Memeriksa tautan rusak, redirect, resource yang sudah dihapus, ownership, scope, dan cara membedakan misconfiguration dengan takeover yang valid.'],
['Social Media Username Takeover','Menengah','Konsep dangling profile/username, verifikasi kepemilikan, bukti non-invasif, pencegahan klaim palsu, dan pelaporan tanpa mengambil alih akun.'],
['IDOR & Access Control','Menengah','Otorisasi objek, horizontal/vertical privilege, matriks akses, pengujian dengan akun uji, dan perbaikan server-side.'],
['CSRF & Session Security','Menengah','Token anti-CSRF, SameSite, cookie flags, session rotation, logout, dan pengujian di lingkungan sendiri.'],
['SSRF & File Upload','Lanjutan','Model ancaman, allowlist, egress filtering, validasi tipe file, penyimpanan di luar web root, dan risiko metadata.'],
['API Security','Menengah','REST, GraphQL, rate limit, autentikasi, authorization, schema validation, pagination, dan logging.'],
['Laporan Profesional','Semua level','Judul, ringkasan, langkah reproduksi minimal, dampak, bukti yang disensor, severity berbasis dampak, dan rekomendasi.'],
['Metodologi & Checklist','Semua level','Persiapan, pemetaan aset, pengujian prioritas, retest, komunikasi, dan dokumentasi timeline.'],
['Karier & Portofolio','Pemula','Membangun lab legal, menulis write-up yang aman, menjaga privasi, dan berkomunikasi dengan tim keamanan.']
];
const extra={
'XSS':['Gunakan payload hanya di aplikasi latihan milik sendiri. Pelajari konteks output dan mengapa encoding berbeda untuk HTML, atribut, URL, dan JavaScript. Mitigasi utama: output encoding kontekstual, templating aman, sanitasi tepercaya, CSP sebagai lapisan tambahan.'],
'SQL Injection':['Jangan menguji sistem tanpa izin. Fokuskan pembelajaran pada prepared statements, parameter binding, least privilege, dan pengujian unit. Hindari ekstraksi data nyata.'],
'Broken Link Checking':['Validasi status HTTP, redirect chain, dan apakah resource benar-benar berada dalam scope. Jangan mendaftarkan ulang layanan atau username yang tidak jelas kepemilikannya tanpa izin eksplisit.'],
'Social Media Username Takeover':['Temuan yang valid memerlukan bukti hubungan antara aset organisasi dan username/akun yang dapat diklaim. Jangan mengubah profil, memposting, mengirim pesan, atau mengakses data. Laporkan indikasi dengan bukti pasif.']};
const cards=document.querySelector('#cards');function render(list=modules){cards.innerHTML=list.map((m,i)=>`<article class="card"><div class="tag">${m[1]}</div><h3>${m[0]}</h3><p>${m[2]}</p><button data-i="${i}">Buka ringkasan</button><div class="details" id="d${i}"><p>${extra[m[0]]||'Pelajari konsep, buat catatan, gunakan aplikasi latihan lokal, lalu dokumentasikan hasil tanpa menyentuh data pihak lain.'}</p><p><b>Checklist:</b> pahami konsep → siapkan lab → uji kasus positif/negatif → catat bukti → rekomendasikan mitigasi.</p></div></article>`).join('');cards.querySelectorAll('button').forEach(b=>b.onclick=()=>document.querySelector('#d'+b.dataset.i).classList.toggle('open'))}render();
document.querySelector('#search').oninput=e=>render(modules.filter(m=>m.join(' ').toLowerCase().includes(e.target.value.toLowerCase())));
document.querySelector('#run').onclick=()=>{const v=document.querySelector('#labInput').value;document.querySelector('#output').textContent='SIMULASI AMAN\nInput diterima sebagai teks biasa:\n'+v+'\n\nTidak ada kode yang dieksekusi dan tidak ada request jaringan.'};
const notes=document.querySelector('#notes');notes.value=localStorage.getItem('bh-notes')||'';document.querySelector('#save').onclick=()=>{localStorage.setItem('bh-notes',notes.value);document.querySelector('#saved').textContent='Tersimpan.'};
