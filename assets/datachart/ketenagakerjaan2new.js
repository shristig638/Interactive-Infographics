$(function () {
    // Create the chart
    Highcharts.chart('ketenagakerjaan2', {
        chart: {
            type: 'column',
            backgroundColor: '#E8FFD1'
        },
        title: {
            text: 'Jumlah Penganggur Indonesia Menurut Tingkat Pendidikan (2015)'
        },
        subtitle: {
            text: 'Sumber: Website BPS'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Jumlah Penganggur'
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: false,
                    format: '{point.y:.2f} ribu jiwa'
                }
            }
        },
        tooltip: {
            useHTML: true,
            formatter: function () {
                var text = '';
                if (this.point.name === 'Belum/Tidak Pernah Sekolah' || this.point.name === 'Belum/Tidak Tamat SD') {
                    text = '<img src="assets/img/uneducated.png" title="" alt="" border="0" height="50" width="50"><br/>'
                            + 'Pendidikan: <b>' + this.point.name + '</b><br>'
                            + 'Jumlah Penganggur: ' + Highcharts.numberFormat(this.point.y, 2) + ' ribu jiwa';
                } else if (this.point.name === 'Diploma/Akademi' || this.point.name === 'Universitas') {
                    text = '<img src="assets/img/graduate.png" title="" alt="" border="0" height="50" width="50"><br/>'
                            + 'Pendidikan: <b>' + this.point.name + '</b><br>'
                            + 'Jumlah Penganggur: ' + Highcharts.numberFormat(this.point.y, 2) + ' ribu jiwa';
                } else {
                    text = '<img src="assets/img/books.png" title="" alt="" border="0" height="50" width="50"><br/>'
                            + 'Pendidikan: <b>' + this.point.name + '</b><br>'
                            + 'Jumlah Penganggur: ' + Highcharts.numberFormat(this.point.y, 2) + ' ribu jiwa';
                }
                return text;
            },
        },
        series: [{
                colorByPoint: true,
                data: [{
                        name: 'Belum/Tidak Pernah Sekolah',
                        y: 59.35,
                    }, {
                        name: 'Belum/Tidak Tamat SD',
                        y: 384.07,
                    }, {
                        name: 'SD',
                        y: 1035.73,
                    }, {
                        name: 'SMP',
                        y: 1294.48,
                    }, {
                        name: 'SMA (Umum)',
                        y: 1950.63,
                    }, {
                        name: 'SMK (Kejuruan)',
                        y: 1520.55,
                    }, {
                        name: 'Diploma/Akademi',
                        y: 219.74,
                    }, {
                        name: 'Universitas',
                        y: 567.24,
                    },
                ]
            }],
    });
});