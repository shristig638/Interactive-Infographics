Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: '"Segoe UI", "Open Sans", serif'
        }
    }
});
$(function () {
    Highcharts.chart('kemiskinan3', {
        chart: {
            type: 'line',
            backgroundColor: '#E8FFD1'
        },
        title: {
            text: 'Indeks Kedalaman dan Keparahan Kemiskinan Indonesia 2011-2015',
        },
        subtitle: {
            text: 'Sumber: Website BPS'
        },
        xAxis: {
            labels: {
                overflow: 'justify'
            },
            categories: ['2011', '2012', '2013', '2014', '2015']
        },
        yAxis: {
            title: {
                text: 'Indeks Kedalaman/Keparahan'
            },
            tickInterval: 0.5,
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            alternateGridColor: null,
        },
        tooltip: {
            shared: false,
            useHTML: true,
            formatter: function () {
                var text = '';
                if (this.series.name === 'Kedalaman') {
                    text = '<img src="assets/img/depth.png" title="" alt="" border="0" height="50" width="50"><br/>'
                            + '<b>' + this.series.name + '</b><br>'
                            + 'Tahun: ' + this.x + '<br>'
                            + 'Kedalaman Kemiskinan: ' + this.y + '';
                } else {
                    text = '<img src="assets/img/severity.png" title="" alt="" border="0" height="50" width="50"><br/>'
                            + '<b>' + this.series.name + '</b><br>'
                            + 'Tahun: ' + this.x + '<br>'
                            + 'Keparahan Kemiskinan: ' + this.y + '';
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
                name: 'Kedalaman',
                color: 'black',
                data: [2.08, 1.88, 1.75, 1.75, 1.97]

            }, {
                name: 'Keparahan',
                color: 'red',
                data: [0.55, 0.47, 0.43, 0.44, 0.54]
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
