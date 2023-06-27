function activity4() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    pp.showtitle('To Study The Characteristics Of Solar Cell', 3);
    let left_panel_text = `
    <div>
    <div style='padding-top: 8%;'>
        <label for="">Distance Between Solar Cell and Source of Light (cm)</label>
        <select onchange="change_distance();" class="form-select" id="distance-dd">
            <option value="">--Select--</option>
        </select>
    </div>

    <div style='padding-top: 8%;'>
        <label for="">Load Resistance (&#8486;)</label>
        <select onchange="change_lr();" class="form-select" id="load-resistance-dd">
            <option value="">--Select--</option>
        </select>
    </div>


    <div style='padding-top: 8%;'>
        <label for="">Current (&mu;A)</label>
        <input disabled class='form-control' type="text" id="inp1">
    </div>

    <div style='padding-top: 8%;'>
        <label for="">Voltage (mV)</label>
        <input disabled class='form-control' type="text" id="inp2">
    </div>

    <div style='padding-top: 8%;'>
        <input class='btn btn-primary' value="Next" type="button" onclick="activity4_5();">
    </div>

    `;
    pp.addtoleftpannel(left_panel_text);
    for (let i = 5; i <= 15; i++) {
        document.getElementById('distance-dd').innerHTML += `<option value='d${i}'>${i}</option>
        `;
    }
    for (let i = 0; i < rl.length; i++) {
        document.getElementById('load-resistance-dd').innerHTML += `<option value='${i}'>${rl[i]}</option>`;
    }
}
function change_distance() {
    let distance = document.getElementById('distance-dd');
    selected_index = distance.value;
    table2 = data2[0][distance.value];
    // add std deviation here
    add_std_deviation();
}
function change_lr() {
    let load_resistance = document.getElementById('load-resistance-dd');
    let current = document.getElementById('inp1');
    let voltage = document.getElementById('inp2');
    current.value = table2[parseInt(load_resistance.value)][0].toFixed(1);
    voltage.value = table2[parseInt(load_resistance.value)][1].toFixed(1);
}
function add_std_deviation() {
    for (let i = 0; i < table2.length; i++) {
        table2[i][0] = std_deviation(table2[i][0]);
        table2[i][1] = std_deviation(table2[i][1]);
    }
}
//# sourceMappingURL=activity4.js.map