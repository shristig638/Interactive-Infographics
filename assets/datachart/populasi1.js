Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: '"Segoe UI", "Open Sans", serif'
        }
    }
});
$(function () {
    Highcharts.chart('populasi1', {
        chart: {
            type: 'line',
            backgroundColor: '#E8FFD1'
        },
        title: {
            text: 'Proyeksi Penduduk Menurut Jenis Kelamin (juta jiwa)',
        },
        subtitle: {
            text: 'Sumber: Proyeksi Penduduk 2010-2035'
        },
        xAxis: {
            title: {
                text: 'Tahun'
            },
            labels: {
                overflow: 'justify'
            },
            categories: ['2010', '2015', '2020', '2025', '2030', '2035']
        },
        yAxis: {
            title: {
                text: 'Jumlah Penduduk'
            },
            tickInterval: 5,
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            alternateGridColor: null,
        },
        tooltip: {
            shared: false,
            useHTML: true,
            formatter: function () {
                var text = '';
                if (this.series.name === 'Perempuan') {
                    text = '<img src="assets/img/girl.png" title="" alt="" border="0" height="50" width="50"><br/>'
                            + '<b>' + this.series.name + '</b><br>'
                            + 'Tahun: ' + this.x + '<br>'
                            + 'Populasi: ' + this.y + ' juta';
                } else {
                    text = '<img src="assets/img/boy.png" title="" alt="" border="0" height="50" width="50"><br/>'
                            + '<b>' + this.series.name + '</b><br>'
                            + 'Tahun: ' + this.x + '<br>'
                            + 'Populasi: ' + this.y + ' juta';
                }
                return text;
            }
        },
        plotOptions: {
            spline: {
                lineWidth: 4,
                states: {
                    hover: {
                        lineWidth: 5
                    }
                },
                marker: {
                    enabled: false
                },
            }
        },
        series: [{
                name: 'Laki-laki',
                color: '#0066FF',
                data: [119.8, 129.0, 136.1, 142.9, 148.6, 153.0]

            }, {
                name: 'Perempuan',
                color: '#FF007F',
                data: [118.7, 127.1, 134.9, 141.9, 147.6, 152.7]
            }],
        credits: {
            enabled: false
        },
        navigation: {
            menuItemStyle: {
                fontSize: '10px'
            }
        }
    });
});
