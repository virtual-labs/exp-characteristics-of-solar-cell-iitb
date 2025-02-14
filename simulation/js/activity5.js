let label = [];
let graph_data = [];
let isc;
let voc;
var first_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="verify_act5();" style="bottom:12.5%;">Verify</button>`;
function activity5() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    pp.showtitle('To Study The Characteristics Of Solar Cell', 3);
    draw_chart();
    calculate_current_voltage();
    let right_panel_text = `
   
   <div>
   Average solar irradiance = 1361 W/m<sup>2</sup> <br>
   Surface area if the cell = 6cm<sup>2</sup>
</div>

<div style='padding-top: 3%;'>
<label for="">Voltage at maximum power (V<sub>MP</sub>)</label>
<input class='form-control' type="text" id="">
</div>

<div style='padding-top: 3%;'>
<label for="">Current at maximum power (I<sub>MP</sub>)</label>
<input class='form-control' type="text" id="">
</div>

<div style='padding-top: 3%;'>
   <label for="">Voltage at open circuit (V<sub>OC</sub>)</label>
   <input class='form-control' type="text" id="voc-inp">
</div>

<div style='padding-top: 3%;'>
   <label for="">Current at short circuit (I<sub>SC</sub>)</label>
   <input class='form-control' type="text" id="isc-inp">
</div>

<div>
   <label for="">$$\\text{Fill factor} =  \\frac{V_{MP} \× I_{MP}}{V_{OC} \× I_{SC}}$$</label>
   <input class='form-control' type="text" id="">

<div>
   <label for="">$$&eta; = \\frac{V_{MP} \× I_{MP}}{\\text{Irradiance} \× \\text{Surface area of the cell}} $$</label>
   <input class='form-control' type="text" id="">
</div>

<button  class="btn btn-primary" onclick="verify_act5();">Verify</button>
 

   `;
    pp.showdescription(right_panel_text, 3);
    // pp.addtorightpannel(first_btn, 3);
    MathJax.typeset();
}
function draw_chart() {
    //document.getElementById('hide_panel3').click();
    pp.clearleftpannel();
    pp.addcanvas('myChart');
    // if(document.getElementById('panel1_btn')) {
    //     document.getElementById("panel1_btn").remove();
    // }
    //pp.addButtonToRightPanel("hello", print_hello, 3);
    label = [];
    graph_data = [];
    for (let i = 0; i < table2.length; i++) {
        label.push(table2[i][1]);
        graph_data.push(table2[i][0]);
    }
    // calculate_y_datapoints();
    var ctx = document.getElementById('myChart');
    ctx.style.backgroundColor = 'white';
    ctx.style.marginTop = '5px';
    ctx.style.marginLeft = '10%';
    ctx.style.padding = '10px';
    ctx.style.borderRadius = '8px';
    if (typeof chart != 'undefined') {
        chart.destroy();
    }
    // let labels = [0.004, 0.007, 0.010, 0.014, 0.020, 0.029, 0.039];
    // let data1=[82.28,96.86,104.07,108.28,112.48,117.68,125.35];//hi_expt
    // let data2=[146.90,183.50,204.11,230.09,256.89,290.83,323.49];//hi_st
    var chart = new Chart(ctx, {
        type: 'scatter',
        data: {
            labels: label,
            datasets: [
                {
                    label: 'Experimental',
                    data: graph_data,
                    fill: false,
                    borderColor: 'blue',
                    tension: 0.5,
                    showLine: true,
                },
            ],
        },
        options: {
            maintainAspectRatio: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Current (μA)',
                        font: { size: 14, weight: 'bold' },
                    },
                },
                x: {
                    title: {
                        display: true,
                        text: 'Voltage (mV)',
                        font: { size: 14, weight: 'bold' },
                    },
                },
            },
            plugins: {
                title: {
                    display: true,
                    text: `Current vs Voltage, Distance : ${selected_index.substring(1)}cm `,
                    font: { size: 18 },
                },
                legend: { labels: { font: { size: 14, weight: 'bold' } } },
            },
        },
    });
}
//   function calculate_y_datapoints() {
//     pol1_data = regression_linear(label, graph_data);
//     graph_data1=  [];
//     // console.log(pol);
//     for(let i=0; i<label.length; i++) {
//       graph_data1.push(pol1_data[0] * label[i] + pol1_data[1]);
//     }
//   }
function calculate_current_voltage() {
    for (let i = 0; i < table2.length; i++) {
        if (table2[i][0] == 0) {
            voc = table2[i][1];
        }
    }
    for (let i = 0; i < table2.length; i++) {
        if (table2[i][1] == 0) {
            isc = table2[i][0];
            break;
        }
    }
}
function verify_act5() {
    let val1 = (document.getElementById(`isc-inp`));
    let val2 = (document.getElementById(`voc-inp`));
    console.log('isc', isc);
    console.log('voc', voc);
    if (!verify_values(parseFloat(val1.value), isc)) {
        alert(`Please check current, Isc value`);
        return;
    }
    if (!verify_values(parseFloat(val2.value), voc)) {
        alert(`Please check voltage, Voc value`);
        return;
    }
    val1.value = isc.toFixed(1);
    val1.disabled = true;
    val2.value = voc.toFixed(1);
    val2.disabled = true;
    alert('All Values are Correct!!');
}
//# sourceMappingURL=activity5.js.map