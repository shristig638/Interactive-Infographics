$(function () {
    Highcharts.chart('populasi3', {
        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy',
            height: 800,
        },
        legend: {
            enabled: false
        },
        title: {
            text: 'Sebaran Penduduk Perkotaan Indonesia'
        },
        subtitle: {
            text: 'Source: <a href="http://www.bps.go.id/">BPS</a>'
        },
        xAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Persentase Penduduk Perkotaan'
            },
            labels: {
                format: '{value} %'
            },
            plotLines: [{
                    color: 'black',
                    dashStyle: 'dot',
                    width: 3,
                    value: 75,
                    label: {
                        rotation: 0,
                        y: 15,
                        style: {
                            fontStyle: 'italic'
                        },
                        text: 'Banyak Penduduk Perkotaan 75%'
                    },
                    zIndex: 3
                }]
        },
        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: 'Persentase Terhadap Jumlah Penduduk Indonesia'
            },
            labels: {
                format: '{value} %'
            },
            tickInterval: 10,
            maxPadding: 0.2,
            plotLines: [{
                    color: 'black',
                    dashStyle: 'dot',
                    width: 3,
                    value: 10,
                    label: {
                        align: 'right',
                        style: {
                            fontStyle: 'italic'
                        },
                        text: 'Persentase Terhadap Luas Indonesia 10%',
                        x: -10
                    },
                    zIndex: 3
                }]
        },
//        tooltip: {
//            useHTML: true,
//            headerFormat: '<table>',
//            pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
//                    '<tr><th>Jumlah Penduduk:</th><td>{point.z} juta</td></tr>' +
//                    '<tr><th>Persentase Terhadap Indonesia:</th><td>{point.y} %</td></tr>' +
//                    '<tr><th>Persentase Penduduk Perkotaan:</th><td>{point.x} %</td></tr>',
//            footerFormat: '</table>',
//            followPointer: true
//        },
        tooltip: {
            useHTML: true,
            formatter: function () {
                var x = '<table>'
                        + '<tr><td><img src="assets/img/world.png" style="vertical-align:middle;" alt="" border="0" height="17" width="17"></td><th style="text-transform: uppercase;" valign="bottom">'+this.point.country+'</th></tr>'
                        + '<tr><td><img src="assets/img/people.png" style="vertical-align:middle;" alt="" border="0" height="17" width="17"></td><th>Jumlah Penduduk:</th><td>'+this.point.z+' juta</td></tr>'
                        + '<tr><td><img src="assets/img/percentage.png" style="vertical-align:middle;" alt="" border="0" height="17" width="17"></td><th>Persentase Terhadap Indonesia:</th><td>'+this.point.y+' %</td></tr>'
                        + '<tr><td><img src="assets/img/building.png" style="vertical-align:middle;" alt="" border="0" height="17" width="17"></td><th>Persentase Penduduk Perkotaan:</th><td>'+this.point.x+' %</td></tr>'
                        + '</table>';                
                return x;
            },
        },
                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: true,
                            format: '{point.name}'
                        }
                    }
                },
        series: [{
                data: [
                    {z: 4.91, y: 1.95, x: 30.50, name: 'Aceh', country: 'D.I. Aceh'},
                    {z: 13.77, y: 5.46, x: 52.60, name: 'Sumut', country: 'Sumatera Utara'},
                    {z: 5.13, y: 2.04, x: 44.20, name: 'Sumbar', country: 'Sumatera Barat'},
                    {z: 6.19, y: 2.45, x: 39.60, name: 'Riau', country: 'Riau'},
                    {z: 3.34, y: 1.33, x: 32, name: 'Jambi', country: 'Jambi'},
                    {z: 7.94, y: 3.15, x: 36.50, name: 'Sumsel', country: 'Sumatera Selatan'},
                    {z: 1.84, y: 0.73, x: 31.70, name: 'Bkl', country: 'Bengkulu'},
                    {z: 8.03, y: 3.18, x: 28.30, name: 'Lampung', country: 'Lampung'},
                    {z: 1.34, y: 0.53, x: 52.50, name: 'Babel', country: 'Kep Bangka Belitung'},
                    {z: 1.92, y: 0.76, x: 83.00, name: 'Kepri', country: 'Kep. Riau'},
                    {z: 10.08, y: 4.00, x: 100.00, name: 'Jakarta', country: 'DKI Jakarta'},
                    {z: 46.03, y: 18.25, x: 72.90, name: 'Jabar', country: 'Jawa Barat'},
                    {z: 33.52, y: 13.29, x: 48.40, name: 'Jateng', country: 'Jawa Tengah'},
                    {z: 3.64, y: 1.44, x: 70.50, name: 'DIY', country: 'D.I. Yogyakarta'},
                    {z: 38.61, y: 15.31, x: 51.10, name: 'Jatim', country: 'Jawa Timur'},
                    {z: 11.70, y: 4.64, x: 67.70, name: 'Banten', country: 'Banten'},
                    {z: 4.10, y: 1.63, x: 65.50, name: 'Bali', country: 'Bali'},
                    {z: 4.77, y: 1.89, x: 45.40, name: 'NTT', country: 'Nusa Tenggara Timur'},
                    {z: 5.04, y: 2.00, x: 21.60, name: 'NTB', country: 'Nusa Tenggara Barat'},
                    {z: 4.72, y: 1.87, x: 33.10, name: 'Kalbar', country: 'Kalimantan Barat'},
                    {z: 2.44, y: 0.97, x: 36.60, name: 'Kalteng', country: 'Kalimantan Tengah'},
                    {z: 3.92, y: 1.56, x: 45.10, name: 'Kalsel', country: 'Kalimantan Selatan'},
                    {z: 3.97, y: 1.33, x: 66.00, name: 'Kaltim', country: 'Kalimantan Timur'},
                    {z: 2.38, y: 0.95, x: 49.80, name: 'Sulut', country: 'Sulawesi Utara'},
                    {z: 2.83, y: 1.12, x: 27.20, name: 'Sulteng', country: 'Sulawesi Tengah'},
                    {z: 8.43, y: 3.34, x: 40.60, name: 'Sulsel', country: 'Sulawesi Selatan'},
                    {z: 2.45, y: 0.97, x: 31.20, name: 'Sultra', country: 'Sulawesi Tenggara'},
                    {z: 1.11, y: 0.44, x: 39.00, name: 'Gorontalo', country: 'Gorontalo'},
                    {z: 1.26, y: 1.50, x: 22.90, name: 'Sulbar', country: 'Sulawesi Barat'},
                    {z: 1.66, y: 0.66, x: 38.00, name: 'Maluku', country: 'Maluku'},
                    {z: 1.14, y: 0.45, x: 27.80, name: 'Malut', country: 'Maluku Utara'},
                    {z: 0.85, y: 0.34, x: 32.30, name: 'Papua Barat', country: 'Papua Barat'},
                    {z: 3.09, y: 1.23, x: 28.40, name: 'Papua', country: 'Papua'},
                ],
                marker: {
                    fillColor: {
                        radialGradient: {cx: 0.4, cy: 0.3, r: 0.7},
                        stops: [
                            [0, 'rgba(255,255,255,0.5)'],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[3]).setOpacity(0.5).get('rgba')]
                        ]
                    }
                },
            }],
        credits: {
            enabled: false
        },
    });
});