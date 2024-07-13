function cekKhodam(event){
    event.preventDefault();
    let nama = $('search').val();
    if (nama === ''){
        alert('Masukkan nama terlebih dahulu!');
    } else {
        let status = [
            'isi',
            'kosong',
        ]
        const randomStatus = Math.floor(Math.random() * status.length);
        if (randomStatus === 0){
            let khodam = [
                'Kucing Pilek',
                'Gajah Ngompol',
                'Ayam Nyeker',
                'Zebra Keseleo',
                'Jerapah Ngedance',
                'Udang Melongo',
                'Serigala Nyasar',
                'Bebek Joget',
                'Burung Kentut',
                'Anjing Ngiler',
                'Babi Kepo',
                'Kadal Nyengir',
                'Ikan Ngorok',
                'Ular Kegelian'
            ];
            const random = Math.floor(Math.random() * khodam.length);
            $('#hasil').html('${nama.toUpperCase()} - Khodam Diri Kamu (${khodam[random]})');
            $('#search').val('');
        }
        else {
            $('#hasil').html('${nama.toUpperCase()} - KOSONG');
            $('#search').val('');
        }
    }
}

$(document).ready(function(){
    $('#btn-search').click(cekKhodam);
});