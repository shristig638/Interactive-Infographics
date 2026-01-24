$(function () {

    // Prepare demo data
    var data = [
        {
            "hc-key": "id-3700",
            "value": 0
        },
        {
            "hc-key": "id-ac", //aceh
            "value": 1.74
        },
        {
            "hc-key": "id-ki", //kaltim
            "value": 2.83
        },
        {
            "hc-key": "id-jt", //jateng
            "value": 2.92
        },
        {
            "hc-key": "id-be", //bengkulu
            "value": 1.93
        },
        {
            "hc-key": "id-bt", //banten
            "value": 2.39
        },
        {
            "hc-key": "id-kb", //kalbar
            "value": 1.98
        },
        {
            "hc-key": "id-bb", //babel
            "value": 1.96
        },
        {
            "hc-key": "id-ba", //bali
            "value": 1.93
        },
        {
            "hc-key": "id-ji", //jatim
            "value": 1.61
        },
        {
            "hc-key": "id-ks", //kalsel
            "value": 2.18
        },
        {
            "hc-key": "id-nt", //ntt
            "value": 1.84
        },
        {
            "hc-key": "id-se", //sulsel
            "value": 2.02
        },
        {
            "hc-key": "id-kr", //kepri
            "value": 3.41
        },
        {
            "hc-key": "id-ib", //papua barat
            "value": 2.73
        },
        {
            "hc-key": "id-su", //sumut
            "value": 1.74
        },
        {
            "hc-key": "id-ri", //riau
            "value": 2.10
        },
        {
            "hc-key": "id-sw", //sulut
            "value": 2.18
        },
        {
            "hc-key": "id-la", //malut
            "value": 2.22
        },
        {
            "hc-key": "id-sb", //sumbar
            "value": 1.90
        },
        {
            "hc-key": "id-ma", //maluku
            "value": 2.28
        },
        {
            "hc-key": "id-nb", //ntb
            "value": 1.80
        },
        {
            "hc-key": "id-sg", //sultra
            "value": 2.06
        },
        {
            "hc-key": "id-st", //sulteng
            "value": 1.96
        },
        {
            "hc-key": "id-pa", //papua
            "value": 3.11
        },
        {
            "hc-key": "id-jr", //jabar
            "value": 2.00
        },
        {
            "hc-key": "id-1024", //lampung
            "value": 1.71
        },
        {
            "hc-key": "id-jk", //jakarta
            "value": 2.92
        },
        {
            "hc-key": "id-go", //gorontalo
            "value": 1.73
        },
        {
            "hc-key": "id-yo", //jogja
            "value": 1.74
        },
        {
            "hc-key": "id-kt", //kalteng
            "value": 2.14
        },
        {
            "hc-key": "id-sl", //sumsel
            "value": 1.81
        },
        {
            "hc-key": "id-sr", //sulbar
            "value": 2.05
        },
        {
            "hc-key": "id-ja", //jambi
            "value": 1.86
        }
    ];

    // Initiate the chart
    $('#ketenagakerjaan3').highcharts('Map', {
        chart: {
            backgroundColor: '#E8FFD1'
        },
        title: {
            text: 'Gaji/Upah Buruh/Karyawan di Indonesia (2015)'
        },
        subtitle: {
            text: 'Sumber: Publikasi Keadaan Angkatan Kerja di Indonesia'
        },
        tooltip: {
            useHTML: true,
            formatter: function () {
                var s = '<img src="assets/img/salary.png" title="" alt="" border="0" height="50" width="50"><br/>'
                        + '<b>' + this.series.name + '</b><br>'
                        + 'Provinsi: ' + this.point.name + '<br>'
                        + 'Gaji/Upah: ' + this.point.value + ' juta';
                return s;
            },
        },
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        colors: ['rgba(208, 252, 136,0.05)', 'rgba(19,64,117,0.2)', 'rgba(19,64,117,0.4)',
            'rgba(19,64,117,0.5)', 'rgba(19,64,117,0.6)', 'rgba(19,64,117,0.8)', 'rgba(173, 11, 11,1)'],
        colorAxis: {
            min: 1.5,
            max: 3,
            tickInterval: 0.5,
            // type: 'logarithmic',
            minColor: '#1E5701',
            maxColor: '#000022',
            stops: [
                [0, '#CB2400'],
                [0.7, '#EF9E07'],
                [0.9, '#F5FB2A'],
                [1, '#1E5701']
            ]
        },
        series: [{
                data: data,
                mapData: Highcharts.maps['countries/id/id-all'],
                joinBy: 'hc-key',
                name: 'Gaji/Upah Buruh/Karyawan',
                nullColor: ['#D0FC88', '#CAD373', '#C4AB5E', '#BE8349', '#B85B34', '#B2331F', '#AD0B0B'],
                states: {
                    hover: {
                        color: 'black'
                    }
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }],
        credits: {
            enabled: false
        },
    });
});
