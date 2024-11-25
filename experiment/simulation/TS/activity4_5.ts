let act4_5_btn = `<button id="panel1_btn" class="btn btn-primary" onclick="activity5();" style="bottom:12.5%;">Next</button>`;

function activity4_5() {
	pp.clearleftpannel();
	pp.clearrightpannel();

	pp.addoffcanvas(3);

	pp.showtitle('To Study The Characteristics Of Solar Cell', 3);

	let table3 = [];

	for (let i = 0; i < rl.length; i++) {
		table3[i] = [];
		table3[i][0] = i + 1;
		table3[i][1] = rl[i];
		table3[i][2] = table2[i][0].toFixed(1);
		table3[i][3] = table2[i][1].toFixed(1);
	}

	let col_heading = [
		'Sr No.',
		'Load Resistance (RL) (W)',
		'I (mA)',
		'Voltage (mV)',
	];

	let table3_ele = new Table(col_heading, table3);

	pp.addtoleftpannel(table3_ele.template);

	table3_ele.draw();

	pp.addtorightpannel(act4_5_btn, 3);
}
