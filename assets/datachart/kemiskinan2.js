$(function () {

    // Prepare demo data
    var data = [
        {
            "hc-key": "id-3700",
            "value": 0
        },
        {
            "hc-key": "id-ac", //aceh
            "value": 17.11
        },
        {
            "hc-key": "id-ki", //kaltim
            "value": 6.10
        },
        {
            "hc-key": "id-jt", //jateng
            "value": 13.32
        },
        {
            "hc-key": "id-be", //bengkulu
            "value": 17.16
        },
        {
            "hc-key": "id-bt", //banten
            "value": 5.75
        },
        {
            "hc-key": "id-kb", //kalbar
            "value": 8.44
        },
        {
            "hc-key": "id-bb", //babel
            "value": 4.83
        },
        {
            "hc-key": "id-ba", //bali
            "value": 5.25
        },
        {
            "hc-key": "id-ji", //jatim
            "value": 12.28
        },
        {
            "hc-key": "id-ks", //kalsel
            "value": 4.72
        },
        {
            "hc-key": "id-nt", //ntt
            "value": 22.58
        },
        {
            "hc-key": "id-se", //sulsel
            "value": 10.12
        },
        {
            "hc-key": "id-kr", //kepri
            "value": 5.78
        },
        {
            "hc-key": "id-ib", //papua barat
            "value": 25.73
        },
        {
            "hc-key": "id-su", //sumut
            "value": 10.79
        },
        {
            "hc-key": "id-ri", //riau
            "value": 8.82
        },
        {
            "hc-key": "id-sw", //sulut
            "value": 8.98
        },
        {
            "hc-key": "id-la", //malut
            "value": 6.22
        },
        {
            "hc-key": "id-sb", //sumbar
            "value": 6.71
        },
        {
            "hc-key": "id-ma", //maluku
            "value": 19.38
        },
        {
            "hc-key": "id-nb", //ntb
            "value": 22.58
        },
        {
            "hc-key": "id-sg", //sultra
            "value": 13.74
        },
        {
            "hc-key": "id-st", //sulteng
            "value": 14.07
        },
        {
            "hc-key": "id-pa", //papua
            "value": 28.40
        },
        {
            "hc-key": "id-jr", //jabar
            "value": 9.57
        },
        {
            "hc-key": "id-1024", //lampung
            "value": 13.53
        },
        {
            "hc-key": "id-jk", //jakarta
            "value": 3.61
        },
        {
            "hc-key": "id-go", //gorontalo
            "value": 18.16
        },
        {
            "hc-key": "id-yo", //jogja
            "value": 13.16
        },
        {
            "hc-key": "id-kt", //kalteng
            "value": 5.91
        },
        {
            "hc-key": "id-sl", //sumsel
            "value": 13.77
        },
        {
            "hc-key": "id-sr", //sulbar
            "value": 11.90
        },
        {
            "hc-key": "id-ja", //jambi
            "value": 9.12
        }
    ];

    // Initiate the chart
    $('#kemiskinan2').highcharts('Map', {
        title: {
            text: 'Persentase Penduduk Miskin Indonesia (2015)'
        },
        chart:{
            backgroundColor:'#E8FFD1'
        },
        subtitle: {
            text: 'Sumber: Website BPS'
        },
        tooltip: {
            useHTML: true,
            formatter: function () {
                var s = '<img src="assets/img/begging.png" title="" alt="" border="0" height="50" width="50"><br/>'
                        + '<b>' + this.series.name + '</b><br>'
                        + 'Provinsi: ' + this.point.name + '<br>'
                        + 'Penduduk Miskin: ' + this.point.value + ' %';
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
            min: 3,
            max: 25,
            tickInterval: 3,
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
                name: 'Persentase Penduduk Miskin',
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
