$(function () {

    // Prepare demo data
    var data = [
        {
            "hc-key": "id-3700",
            "value": 0
        },
        {
            "hc-key": "id-ac", //aceh
            "value": 5.00
        },
        {
            "hc-key": "id-ki", //kaltim
            "value": 4.07
        },
        {
            "hc-key": "id-jt", //jateng
            "value": 33.77
        },
        {
            "hc-key": "id-be", //bengkulu
            "value": 1.87
        },
        {
            "hc-key": "id-bt", //banten
            "value": 11.96
        },
        {
            "hc-key": "id-kb", //kalbar
            "value": 4.79
        },
        {
            "hc-key": "id-bb", //babel
            "value": 1.37
        },
        {
            "hc-key": "id-ba", //bali
            "value": 4.15
        },
        {
            "hc-key": "id-ji", //jatim
            "value": 38.85
        },
        {
            "hc-key": "id-ks", //kalsel
            "value": 3.99
        },
        {
            "hc-key": "id-nt", //ntt
            "value": 5.12
        },
        {
            "hc-key": "id-se", //sulsel
            "value": 8.52
        },
        {
            "hc-key": "id-kr", //kepri
            "value": 1.97
        },
        {
            "hc-key": "id-ib", //papua barat
            "value": 0.87
        },
        {
            "hc-key": "id-su", //sumut
            "value": 13.94
        },
        {
            "hc-key": "id-ri", //riau
            "value": 6.34
        },
        {
            "hc-key": "id-sw", //sulut
            "value": 2.41
        },
        {
            "hc-key": "id-la", //malut
            "value": 1.17
        },
        {
            "hc-key": "id-sb", //sumbar
            "value": 5.20
        },
        {
            "hc-key": "id-ma", //maluku
            "value": 1.69
        },
        {
            "hc-key": "id-nb", //ntb
            "value": 4.84
        },
        {
            "hc-key": "id-sg", //sultra
            "value": 2.50
        },
        {
            "hc-key": "id-st", //sulteng
            "value": 2.88
        },
        {
            "hc-key": "id-pa", //papua
            "value": 3.15
        },
        {
            "hc-key": "id-jr", //jabar
            "value": 46.71
        },
        {
            "hc-key": "id-1024", //lampung
            "value": 8.12
        },
        {
            "hc-key": "id-jk", //jakarta
            "value": 10.18
        },
        {
            "hc-key": "id-go", //gorontalo
            "value": 1.13
        },
        {
            "hc-key": "id-yo", //jogja
            "value": 3.68
        },
        {
            "hc-key": "id-kt", //kalteng
            "value": 2.50
        },
        {
            "hc-key": "id-sl", //sumsel
            "value": 8.05
        },
        {
            "hc-key": "id-sr", //sulbar
            "value": 1.28
        },
        {
            "hc-key": "id-ja", //jambi
            "value": 3.40
        }
    ];

    // Initiate the chart
    $('#populasi2').highcharts('Map', {
        title: {
            text: 'Distribusi Penduduk (2015)'
        },
        chart: {
            backgroundColor: '#E8FFD1'
        },
        subtitle: {
            text: 'Sumber: Proyeksi Penduduk 2010-2035'
        },
        tooltip: {
            useHTML: true,
            formatter: function () {
                var s = '<img src="assets/img/people.png" title="" alt="" border="0" height="50" width="50"><br/>'
                        + '<b>' + this.series.name + '</b><br>'
                        + 'Provinsi: ' + this.point.name + '<br>'
                        + 'Populasi: ' + this.point.value + ' juta';
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
            min: 1,
            max: 50,
            tickInterval: 5,
            // type: 'logarithmic',
            minColor: '#1E5701',
            maxColor: '#000022',
            stops: [
                [0, '#1E5701'],
                [0.3, '#F5FB2A'],
                [0.7, '#EF9E07'],
                [1, '#CB2400']
            ]
        },
        series: [{
                data: data,
                mapData: Highcharts.maps['countries/id/id-all'],
                joinBy: 'hc-key',
                name: 'Jumlah Penduduk',
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
