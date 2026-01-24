$(function () {
    Highcharts.chart('kemiskinan1', {
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
            text: 'Garis Kemiskinan Perkotaan dan Perdesaan Indonesia (2015)'
        },
        subtitle: {
            text: 'Sumber: Website BPS'
        },
        xAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Garis Kemiskinan Perkotaan'
            },
            labels: {
                format: 'Rp {value},-'
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
                        text: 'Garis Kemiskinan Perkotaan: Rp100.000,-'
                    },
                    zIndex: 3
                }]
        },
        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: 'Garis Kemiskinan Perdesaan'
            },
            labels: {
                format: 'Rp {value},-'
            },
            tickInterval: 100000,
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
                        text: 'Garis Kemiskinan Perdesaan: Rp100.000,-',
                    },
                    zIndex: 3
                }]
        },
        tooltip: {
            useHTML: true,
            formatter: function () {
                var x = '<table>'
                        + '<tr><td><img src="assets/img/world.png" style="vertical-align:middle;" alt="" border="0" height="17" width="17"></td><th style="text-transform: uppercase;" valign="bottom">'+this.point.country+'</th></tr>'
                        + '<tr><td><img src="assets/img/building.png" style="vertical-align:middle;" alt="" border="0" height="17" width="17"></td><th>Garis Kemiskinan Perkotaan:</th><td>Rp'+this.point.x+',-</td></tr>'
                        + '<tr><td><img src="assets/img/village.png" style="vertical-align:middle;" alt="" border="0" height="17" width="17"></td><th>Garis Kemiskinan Perdesaan:</th><td>Rp'+this.point.y+',-</td></tr>'
                        + '<tr><td><img src="assets/img/begging.png" style="vertical-align:middle;" alt="" border="0" height="17" width="17"></td><th>Jumlah Penduduk Miskin:</th><td>'+this.point.z+' ribu jiwa</td></tr>'
                        + '</table>';                
                return x;
            }
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
                    {x: 420324, y: 394419, z: 859.41, name: '	Aceh	', country: '	Aceh	'},
                    {x: 379898, y: 352637, z: 1508.14, name: '	Sumut	', country: '	Sumatera Utara	'},
                    {x: 423339, y: 391178, z: 349.53, name: '	Sumbar	', country: '	Sumatera Barat	'},
                    {x: 417768, y: 416780, z: 562.92, name: '	Riau	', country: '	Riau	'},
                    {x: 423855, y: 329895, z: 311.56, name: '	Jambi	', country: '	Jambi	'},
                    {x: 378739, y: 319994, z: 1112.53, name: '	Sumsel	', country: '	Sumatera Selatan	'},
                    {x: 425642, y: 404179, z: 322.83, name: '	Bkl	', country: '	Bengkulu	'},
                    {x: 386728, y: 346088, z: 1100.68, name: '	Lampung	', country: '	Lampung	'},
                    {x: 516835, y: 542732, z: 66.62, name: '	Babel	', country: '	Kep. Bangka Belitung	'},
                    {x: 485496, y: 456933, z: 114.83, name: '	Kepri	', country: '	Kep. Riau	'},
                    {x: 503038, y: 0, z: 368.67, name: '	Jkt	', country: '	Dki Jakarta	'},
                    {x: 318297, y: 319228, z: 4485.65, name: '	Jabar	', country: '	Jawa Barat	'},
                    {x: 308163, y: 310295, z: 4505.78, name: '	Jateng	', country: '	Jawa Tengah	'},
                    {x: 359470, y: 324386, z: 485.56, name: '	DIY	', country: '	Di Yogyakarta	'},
                    {x: 314320, y: 318443, z: 4775.97, name: '	Jatim	', country: '	Jawa Timur	'},
                    {x: 365672, y: 336592, z: 690.67, name: '	Banten	', country: '	Banten	'},
                    {x: 341554, y: 314218, z: 218.79, name: '	Bali	', country: '	Bali	'},
                    {x: 335284, y: 313466, z: 802.29, name: '	NTB	', country: '	Nusa Tenggara Barat	'},
                    {x: 374355, y: 290363, z: 1160.53, name: '	NTT	', country: '	Nusa Tenggara Timur	'},
                    {x: 347516, y: 337288, z: 405.51, name: '	Kalbar	', country: '	Kalimantan Barat	'},
                    {x: 339239, y: 374938, z: 148.13, name: '	Kalteng	', country: '	Kalimantan Tengah	'},
                    {x: 371793, y: 352972, z: 189.16, name: '	Kalsel	', country: '	Kalimantan Selatan	'},
                    {x: 504551, y: 476614, z: 209.99, name: '	Kaltim	', country: '	Kalimantan Timur	'},
                    {x: 505262, y: 477645, z: 40.93, name: '	Kaltara	', country: '	Kalimantan Utara	'},
                    {x: 302378, y: 311068, z: 217.15, name: '	Sulut	', country: '	Sulawesi Utara	'},
                    {x: 376496, y: 353080, z: 406.34, name: '	Sulteng	', country: '	Sulawesi Tengah	'},
                    {x: 274140, y: 254524, z: 864.51, name: '	Sulsel	', country: '	Sulawesi Selatan	'},
                    {x: 282230, y: 264371, z: 345.02, name: '	Sultra	', country: '	Sulawesi Tenggara	'},
                    {x: 274581, y: 275163, z: 206.51, name: '	Gorontalo	', country: '	Gorontalo	'},
                    {x: 269080, y: 279594, z: 153.21, name: '	Sulbar	', country: '	Sulawesi Barat	'},
                    {x: 404929, y: 405502, z: 327.78, name: '	Maluku	', country: '	Maluku	'},
                    {x: 378538, y: 356325, z: 72.65, name: '	Malut	', country: '	Maluku Utara	'},
                    {x: 478699, y: 457222, z: 225.54, name: '	Papua Barat	', country: '	Papua Barat	'},
                    {x: 445057, y: 392446, z: 898.21, name: '	Papua	', country: '	Papua	'},
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
        ],
        credits: {
            enabled: false
        },
    });
});