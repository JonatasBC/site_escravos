let ctx = document.getElementById('grafico_barras')

// Configuração do gráfico 

// Chart.defaults.backgroundColor = '#abd8f5'
Chart.defaults.borderColor = 'white'
Chart.defaults.color = 'white'
Chart.defaults.font.size = 16
Chart.defaults.font.family = 'sans-serif'
Chart.defaults.font.weight = 'bold'


// https://www.chartjs.org/docs/latest/general/colors.html

const labels = ['1985','1996','2002','2004','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022']

const data = {
    labels,
    datasets: [{
        data: [46, 24, 19, 87, 425, 233, 427, 511, 407, 226, 446, 196, 225, 221, 165, 142, 266, 440, 351, 765, 1012],
        label: 'Escravos Resgatados MG',
        backgroundColor: 'red',
        borderColor: 'white',
        borderWidth: 3
    }],
}

const config = {
    type: 'bar',
    data,
    options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        color: 'white',
        pointBackgroundColor: 'white',
        pointBorderColor: 'white',
      },
}

const graph = new Chart(ctx, config)



