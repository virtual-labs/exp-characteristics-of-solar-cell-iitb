

function activity4() {
    pp.clearleftpannel();
    pp.clearrightpannel();

    pp.addoffcanvas(3);

    pp.showtitle('To Study The Characteristics Of Solar Cell', 3);

    let left_panel_text = `
    <div style='position: absolute;'>
    <div style='position: absolute; left: 50vw; width: 30vw; top: 2vw; font-size: 2vw;'>
        <label for="">Distance Between Solar Cell and Source of Light (cm)</label>
        <select onchange="change_distance();" class="form-select" id="distance-dd" style='font-size: 2vw;'>
            <option value="">--Select--</option>
        </select>
    </div>

    <div style='position: absolute; left: 18vw; width: 7vw; top: 4.2vw;'>
        <select onchange="change_lr();" id="load-resistance-dd" style='display: none; background-color: inherit; border: none; font-size: 2.3vw; font-family: myfont;'>
            <option value="">--Select--</option>
        </select>
    </div>


    <div style='position: absolute; left: 19.7vw; width: 9vw; top: 29vw;'>
        <input disabled class='form-control' type="text" id="inp1" style='background-color: inherit; border: none; font-size: 2vw; font-family: myfont;'>
    </div>

    <div style='position: absolute; left: 37.8vw; width: 9vw; top: 29vw;'>
        <input disabled class='form-control' type="text" id="inp2" style='background-color: inherit; border: none; font-size: 2vw; font-family: myfont;'>
    </div>

    <div style='position: absolute; top: 38vw; left: 80vw;'>
        <input disabled class='btn btn-primary' value="Next" type="button" onclick="activity4_5();" id='a4-btn'>
    </div>

    `;

    pp.addtoleftpannel(left_panel_text);

    for(let i=5; i<=15; i++){
        document.getElementById('distance-dd').innerHTML += `<option value='d${i}'>${i}</option>
        `;
    }

    for(let i=0; i<rl.length; i++) {
        document.getElementById('load-resistance-dd').innerHTML += `<option value='${i}'>${rl[i]} &#8486; </option>`;
    }


    pp.addcanvas('mycanvas');

    
    canvas = pp.canvas;
    context = canvas.getContext('2d');


    // add rect and scene
    canvas.style.cursor="crosshair";
    rect=canvas.getBoundingClientRect();
    scene = new Scene();

    img1 = new Chemistry.Custome_image(assembly, new Chemistry.Point(1000, 450), 1300, 885, canvas);
    scene.add(img1);


    // add canvas sizing
    window.onload=a3_windowresize;
    window.onresize=a3_windowresize;
    a3_windowresize();

    let right_panel_text = `
    <h4>- Select the distance from the drop and then load resistance</h4>

    <h4>- Note down the current and voltage values </h4>

    <h4>- Then click next </h4>

    `;

    pp.showdescription(right_panel_text, 3);


}

function change_distance() {
    let distance: HTMLSelectElement = <HTMLSelectElement> document.getElementById('distance-dd');
    let enable: HTMLSelectElement = <HTMLSelectElement> document.getElementById('load-resistance-dd');
    selected_index = distance.value;
    table2 = data2[0][distance.value]; 
    // add std deviation here

    if(distance.value) {
        enable.style.display = 'block';
    }

    add_std_deviation();

    
}

function change_lr() {
    let load_resistance: HTMLSelectElement = <HTMLSelectElement> document.getElementById('load-resistance-dd');
    let btn: HTMLButtonElement = <HTMLButtonElement> document.getElementById('a4-btn');

    let current: HTMLInputElement = <HTMLInputElement> document.getElementById('inp1');
    let voltage: HTMLInputElement = <HTMLInputElement> document.getElementById('inp2');

    current.value = table2[parseInt(load_resistance.value)][0].toFixed(1);
    voltage.value = table2[parseInt(load_resistance.value)][1].toFixed(1);

    if(load_resistance.value) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }

}


function add_std_deviation() {
    for(let i=0; i<table2.length; i++) {
        table2[i][0] = std_deviation(table2[i][0]);
        table2[i][1] = std_deviation(table2[i][1]);

    }
}

function a3_windowresize() {
    //canvas size
    a3_canvas_size();

   //draw scene
    scene.draw();
}

function a3_canvas_size() {
    canvas.width=window.innerWidth*0.91;
    canvas.height=canvas.width*1080.0/1920*0.85;
    lscale=canvas.width/1920.0;
    document.getElementById('leftpannel').style.height = (canvas.height + 5) + "px";
    document.getElementById('leftpannel').style.margin = '0';


    context.translate(0,canvas.height);
    context.scale(1,-1);
}

