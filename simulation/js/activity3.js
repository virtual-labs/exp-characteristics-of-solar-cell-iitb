let img1;
function activity3() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    pp.showtitle(`<p id="exp-title">Simulation with the Experimental Setup</p>`, 3);
    let left_panel_text = `
    <div style='position: absolute; font-size: 1.5vw !important;' >

        <div style='position: absolute; width: 57vw; left: 16vw; top: 27vw;'>
            <label for="">Distance Between Solar Cell and Source of Light (cm)</label>
            <input onchange="load_values();" oninput="load_values();" type="range" id="inp1" min="1" max="15" step="1" value="1">
            <input disabled id="show-range-inp" type="text">
        </div>

        <div style='position: absolute; left: 35vw; width: 20vw;'>
            <label for="">Irradiance (W/m<sup>2</sup>)</label>
            <input disabled class='form-control' type="text" id="inp2" style='background-color: black; color: white;' >
        </div>

        <div style='position: absolute; left: 65vw; width: 20vw;'>
            <label for="">Current (&mu;A)</label>
            <input disabled class='form-control' type="text" id="inp3" style='background-color: black; color: white;' >
        </div>

        <div style='position: absolute; left: 5vw; width: 20vw;'>
            <label for="">Voltage (mV)</label>
            <input disabled class='form-control' type="text" id="inp4" style='background-color: black; color: white;' >
        </div>

        <div style='position: absolute; left: 5vw; top: 38vw; width: 10vw;'>
            <input style='display: none;' class='btn btn-primary' type="button" id="btn_to_act5" value="Next" onclick="activity4(); style='font-size: 1.5vw;'"> 
        </div>
    </div>
    `;
    pp.addtoleftpannel(left_panel_text);
    pp.addcanvas('mycanvas');
    canvas = pp.canvas;
    context = canvas.getContext('2d');
    // add rect and scene
    canvas.style.cursor = "crosshair";
    rect = canvas.getBoundingClientRect();
    scene = new Scene();
    img1 = new Chemistry.Custome_image(solar_cell, new Chemistry.Point(470, 500), 200, 200, canvas);
    scene.add(img1);
    let img3 = new Chemistry.Custome_image(meter_stick, new Chemistry.Point(900, 500), 1600, 277, canvas);
    scene.add(img3);
    // add canvas sizing
    window.onload = a2_windowresize;
    window.onresize = a2_windowresize;
    a2_windowresize();
    let right_panel_text = `
    <h4>Move the slider to see the current and irradiance values</h4>
    `;
    pp.showdescription(right_panel_text, 3);
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
    if (img1) {
        img1.stpt.x = 370 + (80 * parseInt(slider.value));
        scene.draw();
    }
    let btn = document.getElementById('btn_to_act5');
    btn.style.display = 'block';
}
function a2_windowresize() {
    //canvas size
    a2_canvas_size();
    //draw scene
    scene.draw();
}
function a2_canvas_size() {
    canvas.width = window.innerWidth * 0.91;
    canvas.height = canvas.width * 1080.0 / 1920 * 0.85;
    lscale = canvas.width / 1920.0;
    document.getElementById('leftpannel').style.height = (canvas.height + 5) + "px";
    document.getElementById('leftpannel').style.margin = '0';
    context.translate(0, canvas.height);
    context.scale(1, -1);
}
//# sourceMappingURL=activity3.js.map