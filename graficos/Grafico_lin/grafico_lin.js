let ctx = document.getElementById('grafico_linha')

// Configuração do gráfico 

// Chart.defaults.backgroundColor = '#abd8f5'
Chart.defaults.borderColor = 'red'
Chart.defaults.color = '#fff'
Chart.defaults.font.size = 22
Chart.defaults.font.family = 'sans-serif'
Chart.defaults.font.weight = 'bold'


// https://www.chartjs.org/docs/latest/general/colors.html

const labels = ['Cultivo de Café','Cana-de-açucar','Construção','Produção Florestal','Cultivo geral']

const data = {
    labels,
    datasets: [{
        data: [1455, 1352, 820, 775, 600],
        label: 'Setores econômicos mais envolvidos',
        fill: false,
        backgroundColor: 'red',
        borderColor: '#fff',
        borderWidth: 3,
        tension: 0.2
    }],
}

const config = {
    type: 'line',
    data,
    options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        color: 'white',
        pointBackgroundColor: 'black',
        pointBorderColor: 'black',
      },
}

const graph = new Chart(ctx, config)