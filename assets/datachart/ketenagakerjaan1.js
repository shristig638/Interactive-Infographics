$(function () {
    Highcharts.chart('ketenagakerjaan1', {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            },
            backgroundColor: '#E8FFD1'
        },
        colors: ['#2F842F', '#5CCC3E', '#FFD966', '#E85E5C', '#D42424', '#C301C4', '#69005E', '#0C61E0'],
        title: {
            text: 'Apa Pekerjaan 255 Juta Orang?'
        },
        subtitle: {
            text: 'Sumber: SAKERNAS Agustus'
        },
        tooltip: {
            useHTML: true,
//            formatter: function () {
//                var s = '<img src="assets/img/salary.png" title="" alt="" border="0" height="50" width="50"><br/>'
//                        + '<b>' + this.point.name + '</b><br>'
//                        + 'Sebanyak: ' + Highcharts.numberFormat(this.point.y,2) + ' juta jiwa';
//                return s;
//            },
            formatter: function () {
                var text = '';
                if (this.point.name === 'Pertanian') {
                    text = '<img src="assets/img/pertanian.png" title="" alt="" border="0" height="50" width="50"><br/>'
                            + '<b>' + this.point.name + '</b><br>'
                            + 'Sebanyak: ' + Highcharts.numberFormat(this.point.y, 2) + ' juta jiwa';
                } else if (this.point.name === 'Perdagangan') {
                    text = '<img src="assets/img/perdagangan.png" title="" alt="" border="0" height="50" width="50"><br/>'
                            + '<b>' + this.point.name + '</b><br>'
                            + 'Sebanyak: ' + Highcharts.numberFormat(this.point.y, 2) + ' juta jiwa';
                } else if (this.point.name === 'Jasa') {
                    text = '<img src="assets/img/jasa.png" title="" alt="" border="0" height="50" width="50"><br/>'
                            + '<b>' + this.point.name + '</b><br>'
                            + 'Sebanyak: ' + Highcharts.numberFormat(this.point.y, 2) + ' juta jiwa';
                } else if (this.point.name === 'Industri Pengolahan') {
                    text = '<img src="assets/img/industri.png" title="" alt="" border="0" height="50" width="50"><br/>'
                            + '<b>' + this.point.name + '</b><br>'
                            + 'Sebanyak: ' + Highcharts.numberFormat(this.point.y, 2) + ' juta jiwa';
                } else if (this.point.name === 'Konstruksi') {
                    text = '<img src="assets/img/konstruksi.png" title="" alt="" border="0" height="50" width="50"><br/>'
                            + '<b>' + this.point.name + '</b><br>'
                            + 'Sebanyak: ' + Highcharts.numberFormat(this.point.y, 2) + ' juta jiwa';
                } else if (this.point.name === 'Sektor Lainnya') {
                    text = '<img src="assets/img/lain.png" title="" alt="" border="0" height="50" width="50"><br/>'
                            + '<b>' + this.point.name + '</b><br>'
                            + 'Sebanyak: ' + Highcharts.numberFormat(this.point.y, 2) + ' juta jiwa';
                } else if (this.point.name === 'Penganggur') {
                    text = '<img src="assets/img/penganggur.png" title="" alt="" border="0" height="50" width="50"><br/>'
                            + '<b>' + this.point.name + '</b><br>'
                            + 'Sebanyak: ' + Highcharts.numberFormat(this.point.y, 2) + ' juta jiwa';
                } else {
                    text = '<img src="assets/img/bukan.png" title="" alt="" border="0" height="50" width="50"><br/>'
                            + '<b>' + this.point.name + '</b><br>'
                            + 'Sebanyak: ' + Highcharts.numberFormat(this.point.y, 2) + ' juta jiwa';
                }

                return text;
            }
        },
        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45
            }
        },
        series: [{
                name: 'Sebanyak',
                data: [
                    ['Pertanian', 37.7],
                    ['Perdagangan', 25.7],
                    ['Jasa', 17.9],
                    ['Industri Pengolahan', 17.9],
                    ['Konstruksi', 7.5],
                    ['Sektor Lainnya', 9.9],
                    ['Penganggur', 7.5],
                    ['Bukan Usia Kerja\n(0-15 tahun)', 133],
                ]
            }]
    });
});