$(function () {
    Highcharts.chart('ketenagakerjaan2', {
        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy',
            height: 800,
            backgroundColor: '#E8FFD1'
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
                    value: 100000,
                    label: {
                        rotation: 0,
                        y: 15,
                        style: {
                            fontStyle: 'italic'
                        },
                        text: 'Jumlah Penduduk Yang Bekerja 100 ribu orang',
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
            tickInterval: 10000,
            maxPadding: 0.2,
            plotLines: [{
                    color: 'black',
                    dashStyle: 'dot',
                    width: 3,
                    value: 100000,
                    label: {
                        align: 'right',
                        style: {
                            fontStyle: 'italic'
                        },
                        text: 'Jumlah Penduduk Yang Menganggur 100 ribu orang',
                        x: -10
                    },
                    zIndex: 3
                }]
        },
        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
                    '<tr><th>Jumlah Penduduk:</th><td>{point.z} juta</td></tr>' +
                    '<tr><th>Persentase Terhadap Indonesia:</th><td>{point.y} %</td></tr>' +
                    '<tr><th>Persentase Penduduk Perkotaan:</th><td>{point.x} %</td></tr>',
            footerFormat: '</table>',
            followPointer: true
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
                /* Laki2*/
                data: [
                    {x: 1264192, y: 99071, z: 7.27, name: '	Aceh	', country: '	Aceh	'},
                    {x: 3659859, y: 213840, z: 5.52, name: '	Sumut	', country: '	Sumatera Utara	'},
                    {x: 1385655, y: 71776, z: 4.92, name: '	Sumbar	', country: '	Sumatera Barat	'},
                    {x: 1772608, y: 123431, z: 6.51, name: '	Riau	', country: '	Riau	'},
                    {x: 1019712, y: 2999, z: 2.83, name: '	Jambi	', country: '	Jambi	'},
                    {x: 2341341, y: 136327, z: 5.50, name: '	Sumsel	', country: '	Sumatera Selatan	'},
                    {x: 571474, y: 12482, z: 2.14, name: '	Bkl	', country: '	Bengkulu	'},
                    {x: 2495932, y: 68997, z: 2.69, name: '	Lampung	', country: '	Lampung	'},
                    {x: 423931, y: 16475, z: 3.74, name: '	Babel	', country: '	Kep. Bangka Belitung	'},
                    {x: 552313, y: 47866, z: 7.98, name: '	Kepri	', country: '	Kep. Riau	'},
                    {x: 368103, y: 258465, z: 7.77, name: '	Jkt	', country: '	Dki Jakarta	'},
                    {x: 13278262, y: 1198336, z: 8.28, name: '	Jabar	', country: '	Jawa Barat	'},
                    {x: 1023283, y: 538558, z: 5.10, name: '	Jateng	', country: '	Jawa Tengah	'},
                    {x: 1116793, y: 61622, z: 5.23, name: '	DIY	', country: '	Di Yogyakarta	'},
                    {x: 11733972, y: 554385, z: 4.51, name: '	Jatim	', country: '	Jawa Timur	'},
                    {x: 3313261, y: 332781, z: 9.13, name: '	Banten	', country: '	Banten	'},
                    {x: 1316757, y: 18856, z: 1.41, name: '	Bali	', country: '	Bali	'},
                    {x: 1243673, y: 71367, z: 5.43, name: '	NTB	', country: '	Nusa Tenggara Barat	'},
                    {x: 1275466, y: 33048, z: 2.53, name: '	NTT	', country: '	Nusa Tenggara Timur	'},
                    {x: 1349492, y: 80058, z: 5.60, name: '	Kalbar	', country: '	Kalimantan Barat	'},
                    {x: 779222, y: 26577, z: 3.30, name: '	Kalteng	', country: '	Kalimantan Tengah	'},
                    {x: 1177634, y: 62316, z: 5.03, name: '	Kalsel	', country: '	Kalimantan Selatan	'},
                    {x: 101540, y: 73146, z: 6.72, name: '	Kaltim	', country: '	Kalimantan Timur	'},
                    {x: 703336, y: 48199, z: 6.41, name: '	Sulut	', country: '	Sulawesi Utara	'},
                    {x: 865397, y: 27721, z: 3.10, name: '	Sulteng	', country: '	Sulawesi Tengah	'},
                    {x: 220156, y: 149417, z: 6.36, name: '	Sulsel	', country: '	Sulawesi Selatan	'},
                    {x: 668261, y: 21530, z: 3.12, name: '	Sultra	', country: '	Sulawesi Tenggara	'},
                    {x: 320327, y: 8887, z: 2.70, name: '	Gorontalo	', country: '	Gorontalo	'},
                    {x: 369661, y: 6249, z: 1.66, name: '	Sulbar	', country: '	Sulawesi Barat	'},
                    {x: 407801, y: 19890, z: 4.65, name: '	Maluku	', country: '	Maluku	'},
                    {x: 305908, y: 16165, z: 5.02, name: '	Malut	', country: '	Maluku Utara	'},
                    {x: 243989, y: 12656, z: 4.93, name: '	Papua Barat	', country: '	Papua Barat	'},
                    {x: 969243, y: 38971, z: 3.87, name: '	Papua	', country: '	Papua	'},
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
            },
            {
                data: [
                    {x: 822570, y: 75635, z: 8.42, name: '	Aceh	', country: '	Aceh	'},
                    {x: 2511515, y: 207392, z: 7.63, name: '	Sumut	', country: '	Sumatera Utara	'},
                    {x: 946496, y: 76901, z: 7.51, name: '	Sumbar	', country: '	Sumatera Barat	'},
                    {x: 1001637, y: 76338, z: 7.08, name: '	Riau	', country: '	Riau	'},
                    {x: 626468, y: 16538, z: 2.57, name: '	Jambi	', country: '	Jambi	'},
                    {x: 1474302, y: 65892, z: 4.28, name: '	Sumsel	', country: '	Sumatera Selatan	'},
                    {x: 372407, y: 18807, z: 4.81, name: '	Bkl	', country: '	Bengkulu	'},
                    {x: 1425255, y: 70512, z: 4.71, name: '	Lampung	', country: '	Lampung	'},
                    {x: 244823, y: 6699, z: 2.66, name: '	Babel	', country: '	Kep. Bangka Belitung	'},
                    {x: 262114, y: 33150, z: 11.23, name: '	Kepri	', country: '	Kep. Riau	'},
                    {x: 2016426, y: 205440, z: 9.25, name: '	Jkt	', country: '	Dki Jakarta	'},
                    {x: 7178627, y: 677588, z: 8.62, name: '	Jabar	', country: '	Jawa Barat	'},
                    {x: 7298742, y: 432059, z: 5.59, name: '	Jateng	', country: '	Jawa Tengah	'},
                    {x: 895833, y: 23832, z: 2.59, name: '	DIY	', country: '	Di Yogyakarta	'},
                    {x: 8066422, y: 337630, z: 4.02, name: '	Jatim	', country: '	Jawa Timur	'},
                    {x: 1894862, y: 156102, z: 7.61, name: '	Banten	', country: '	Banten	'},
                    {x: 1108416, y: 14755, z: 1.31, name: '	Bali	', country: '	Bali	'},
                    {x: 1047180, y: 48759, z: 4.45, name: '	NTB	', country: '	Nusa Tenggara Barat	'},
                    {x: 1055068, y: 42062, z: 3.83, name: '	NTT	', country: '	Nusa Tenggara Timur	'},
                    {x: 907801, y: 33139, z: 3.52, name: '	Kalbar	', country: '	Kalimantan Barat	'},
                    {x: 468402, y: 13862, z: 2.87, name: '	Kalteng	', country: '	Kalimantan Tengah	'},
                    {x: 790862, y: 37637, z: 4.54, name: '	Kalsel	', country: '	Kalimantan Selatan	'},
                    {x: 515551, y: 45101, z: 8.04, name: '	Kaltim	', country: '	Kalimantan Timur	'},
                    {x: 374329, y: 54403, z: 12.69, name: '	Sulut	', country: '	Sulawesi Utara	'},
                    {x: 518522, y: 14887, z: 2.79, name: '	Sulteng	', country: '	Sulawesi Tengah	'},
                    {x: 336503, y: 68894, z: 4.90, name: '	Sulsel	', country: '	Sulawesi Selatan	'},
                    {x: 1457487, y: 20748, z: 4.34, name: '	Sultra	', country: '	Sulawesi Tenggara	'},
                    {x: 197360, y: 7438, z: 3.63, name: '	Gorontalo	', country: '	Gorontalo	'},
                    {x: 266349, y: 5450, z: 2.01, name: '	Sulbar	', country: '	Sulawesi Barat	'},
                    {x: 255460, y: 27905, z: 9.85, name: '	Maluku	', country: '	Maluku	'},
                    {x: 184244, y: 12665, z: 6.43, name: '	Malut	', country: '	Maluku Utara	'},
                    {x: 145044, y: 6150, z: 4.07, name: '	Papua Barat	', country: '	Papua Barat	'},
                    {x: 676814, y: 24640, z: 3.51, name: '	Papua	', country: '	Papua	'},
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
            }
        ],
        credits: {
            enabled: false
        },
    });
});