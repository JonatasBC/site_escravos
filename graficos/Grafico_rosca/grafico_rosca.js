let ctx = document.getElementById('grafico_pie')

// Configuração do gráfico 

// Chart.defaults.backgroundColor = '#abd8f5'
Chart.defaults.borderColor = 'white'
Chart.defaults.color = 'white'
Chart.defaults.font.size = 16
Chart.defaults.font.family = 'sans-serif'
Chart.defaults.font.weight = 'bold'


// https://www.chartjs.org/docs/latest/general/colors.html

const labels = ['5° Incompleto','6° ao 9° Incompleto', 'Analfabeto','EM Completo','Fundamental','EM incompleto','5° Completo']

const data = {
    labels,
    datasets: [{
        data: [3234, 1843, 1188, 867, 838, 782, 600],
        label: 'Escolaridade',
        backgroundColor: ['orange','purple','yellow','green','darkblue', 'red', 'blue'],
        borderColor: 'white',
        borderWidth: 3
    }],
}

const config = {
    type: 'doughnut',
    data,

}

const graph = new Chart(ctx, config)