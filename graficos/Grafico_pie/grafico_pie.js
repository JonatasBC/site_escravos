let ctx = document.getElementById('grafico_pie')

// Configuração do gráfico 

// Chart.defaults.backgroundColor = '#abd8f5'
Chart.defaults.borderColor = 'white'
Chart.defaults.color = 'white'
Chart.defaults.font.size = 16
Chart.defaults.font.family = 'sans-serif'
Chart.defaults.font.weight = 'bold'


// https://www.chartjs.org/docs/latest/general/colors.html

const labels = ['Parda','Preta','Branca','Amarela','Indigena']

const data = {
    labels,
    datasets: [{
        data: [3066, 1.169, 882, 271, 28],
        label: 'Raça',
        backgroundColor: ['rgb(170,140,123)','rgb(85,60,60)','rgb(233,193,193)','rgb(229,212,167)','brown'],
        borderColor: 'white',
        borderWidth: 3
    }],
}

const config = {
    type: 'pie',
    data,

}

const graph = new Chart(ctx, config)