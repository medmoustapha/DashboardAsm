import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const myChart = new Chart( 'sales-chart', {
      type: 'line',
      data: {
        labels: [ '2012', '2013', '2014', '2015', '2016', '2017', '2018' ],
        type: 'line',
        defaultFontFamily: 'Montserrat',
        datasets: [ {
          label: 'Foods',
          data: [ 0, 30, 15, 110, 50, 63, 120 ],
          backgroundColor: 'transparent',
          borderColor: 'rgba(220,53,69,0.75)',
          borderWidth: 3,
          pointStyle: 'circle',
          pointRadius: 5,
          pointBorderColor: 'transparent',
          pointBackgroundColor: 'rgba(220,53,69,0.75)',
        }, {
          label: 'Electronics',
          data: [ 0, 50, 40, 80, 35, 99, 80 ],
          backgroundColor: 'transparent',
          borderColor: 'rgba(40,167,69,0.75)',
          borderWidth: 3,
          pointStyle: 'circle',
          pointRadius: 5,
          pointBorderColor: 'transparent',
          pointBackgroundColor: 'rgba(40,167,69,0.75)',
        } , {
          label: 'mbourou',
          data: [ 10, 50, 15, 30, 35, 60, 90 ],
          backgroundColor: 'transparent',
          borderColor: 'rgba(244, 208, 65)',
          borderWidth: 3,
          pointStyle: 'circle',
          pointRadius: 5,
          pointBorderColor: 'transparent',
          pointBackgroundColor: 'rgba(244, 208, 65)',
        } ]
      },
      options: {
        responsive: true,

        tooltips: {
          mode: 'index',
          titleFontSize: 12,
          titleFontColor: '#000',
          bodyFontColor: '#000',
          backgroundColor: '#fff',
          titleFontFamily: 'Montserrat',
          bodyFontFamily: 'Montserrat',
          cornerRadius: 3,
          intersect: false,
        },
        legend: {
          display: false,
          labels: {
            usePointStyle: true,
            fontFamily: 'Montserrat',
          },
        },
        scales: {
          xAxes: [ {
            display: true,
            gridLines: {
              display: false,
              drawBorder: false
            },
            scaleLabel: {
              display: false,
              labelString: 'Month'
            }
          } ],
          yAxes: [ {
            display: true,
            gridLines: {
              display: false,
              drawBorder: false
            },
            scaleLabel: {
              display: true,
              labelString: 'Value'
            }
          } ]
        },
        title: {
          display: false,
          text: 'Normal Legend'
        }
      }
    } );
    this.chart1();

  }
  chart1() {
    const myChart = new Chart( 'team-chart', {
      type: 'line',
      data: {
        labels: [ '2012', '2013', '2014', '2015', '2016', '2017', '2018' ],
        type: 'line',
        defaultFontFamily: 'Montserrat',
        datasets: [ {
          data: [ 0, 7, 3, 5, 2, 8, 6 ],
          label: 'Expense',
          backgroundColor: 'rgba(0,200,155,.35)',
          borderColor: 'rgba(0,200,155,0.60)',
          borderWidth: 3.5,
          pointStyle: 'circle',
          pointRadius: 5,
          pointBorderColor: 'transparent',
          pointBackgroundColor: 'rgba(0,200,155,0.60)',
        },
          {
            data: [ 0, 6, 3, 4, 3, 7, 10 ],
            label: 'Profit',
            backgroundColor: 'rgba(0,194,146,.25)',
            borderColor: 'rgba(0,194,146,0.5)',
            borderWidth: 3.5,
            pointStyle: 'circle',
            pointRadius: 5,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'rgba(0,194,146,0.5)',
          }, ]
      },
      options: {
        responsive: true,
        tooltips: {
          mode: 'index',
          titleFontSize: 12,
          titleFontColor: '#000',
          bodyFontColor: '#000',
          backgroundColor: '#fff',
          titleFontFamily: 'Montserrat',
          bodyFontFamily: 'Montserrat',
          cornerRadius: 3,
          intersect: false,
        },
        legend: {
          display: false,
          position: 'top',
          labels: {
            usePointStyle: true,
            fontFamily: 'Montserrat',
          },


        },
        scales: {
          xAxes: [ {
            display: true,
            gridLines: {
              display: false,
              drawBorder: false
            },
            scaleLabel: {
              display: false,
              labelString: 'Month'
            }
          } ],
          yAxes: [ {
            display: true,
            gridLines: {
              display: false,
              drawBorder: false
            },
            scaleLabel: {
              display: true,
              labelString: 'Value'
            }
          } ]
        },
        title: {
          display: false,
        }
      }
    } );

  }

}
