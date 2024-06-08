var listaTemp = [];
var listaUmd = [];
var lista = []

function teste() {

    for (let i = 0; i <= 200; i++) {
        setTimeout(function () {
            var temp = Math.random() * 2 + 23
            var umid = Math.random() * 9 + 80


            // Arredondamento
            var temperatura = Number(temp.toFixed(0));
            var umidade = Number(umid.toFixed(0));
            listaTemp.push(temperatura);
            listaUmd.push(umidade);
            lista.push(i);
            myChart.update()
            myChart2.update()

            console.log(i, 'Contador', listaTemp[i], 'temperatura', listsUmd[i], 'umidade');
        }, i * 1000);
    }

}
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: lista,
        datasets: [{
            label: 'Temperatura',
            data: listaTemp,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'


            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'


            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            },
            x: {
                title: {
                    label: true

                }
            }
        }
    }
});
let ctx2 = document.getElementById('myChart2').getContext('2d');
let myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: lista,
        datasets: [{
            label: 'Umidade',
            data: listaUmd,
            backgroundColor: [
                'blue'


            ],
            borderColor: [
                'blue'


            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            },
            x: {
                title: {
                    label: true

                }
            }
        }
    }
});

// function exibir(){
//     for(var Contador = 0; Contador <= listaTemp.length; Contador++){
//         result.innerHTML += `Temperatura ${listaTemp[Contador]}, Umidade ${listsUmd[Contador]} <br>`
//     }
// }