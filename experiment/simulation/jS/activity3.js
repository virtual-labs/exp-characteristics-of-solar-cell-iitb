function activity3() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    pp.showtitle('To Study The Characteristics Of Solar Cell', 3);
    let left_panel_text = `
    <div>
    <div style='padding-top: 8%;'>
        <label for="">Distance Between Solar Cell and Source of Light (cm)</label>
        <input onchange="load_values();" oninput="load_values();" type="range" id="inp1" min="1" max="15" step="1" value="1">
        <input disabled id="show-range-inp" type="text">
    </div>

    <div style='padding-top: 8%;'>
        <label for="">Irradiance (W/m<sup>2</sup>)</label>
        <input disabled class='form-control' type="text" id="inp2">
    </div>

    <div style='padding-top: 8%;'>
        <label for="">Current (&mu;A)</label>
        <input disabled class='form-control' type="text" id="inp3">
    </div>

    <div style='padding-top: 8%;'>
        <label for="">Voltage (mV)</label>
        <input disabled class='form-control' type="text" id="inp4">
    </div>

    <div style='padding-top: 8%;'>
        <input class='btn btn-primary' style="width: 20%;" type="button" id="btn_to_act5" value="Next" onclick="activity4();"> 
    </div>
    </div>
    `;
    pp.addtoleftpannel(left_panel_text);
}
function load_values() {
    let slider = document.getElementById('inp1');
    let show_range = document.getElementById('show-range-inp');
    let val1 = document.getElementById('inp2');
    let val2 = document.getElementById('inp3');
    let val3 = document.getElementById('inp4');
    show_range.value = slider.value;
    for (let i = 0; i < table1.length; i++) {
        if (parseInt(show_range.value) == table1[i][0]) {
            val1.value = table1[i][1].toFixed(2);
            val2.value = table1[i][2];
            val3.value = table1[i][3];
            break;
        }
    }
}
activity3();
//# sourceMappingURL=activity3.js.map