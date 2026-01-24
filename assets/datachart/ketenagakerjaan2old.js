$(function () {
    Highcharts.chart('ketenagakerjaan2', {
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            height: 800
        },
        title: {
            text: 'Perbandingan Jumlah Pekerja dan Penganggur Indonesia (2015)'
        },
        subtitle: {
            text: 'Sumber: Website BPS'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Penganggur'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: ' juta pekerja'
            }
        },
        legend: {
            enabled: false,
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: '{point.x} juta yang menganggur, {point.y} juta yang bekerja'
                }
            }
        },
        series: [
            {
                name: 'D.I. Aceh',
                color: 'rgba(119, 152, 191, .5)',
                data:
                        [0.43,18.15],
            },
            {
                name: 'Sumatera Barat',
                color: 'rgba(119, 152, 191, .5)',
                data:
                        [1.04,31.81],
            },
            {
                name: 'Riau',
                color: 'rgba(119, 152, 191, .5)',
                data:
                        [1.29,21.36],
            },
            {
                name: 'Jambi',
                color: 'rgba(119, 152, 191, .5)',
                data:
                        [1.95,20.41],
            },
            {
                name: 'Sumatera Selatan',
                color: 'rgba(119, 152, 191, .5)',
                data:
                        [1.52,12.17],
            },
            {
                name: 'Bengkulu',
                color: 'rgba(119, 152, 191, .5)',
                data:
                        [0.22,3.42],
            },
            {
                name: 'Lampung',
                color: 'rgba(119, 152, 191, .5)',
                data:
                        [0.57,11.09],
            }            
            ]
    });
});

