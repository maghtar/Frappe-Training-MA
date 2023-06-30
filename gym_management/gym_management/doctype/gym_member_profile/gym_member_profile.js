// Copyright (c) 2023, Mortaza Aghtar and contributors
// For license information, please see license.txt

frappe.ui.form.on('Gym Member Profile', {
	// refresh: function(frm) {

	// }
});

frappe.ui.form.on("Gym Class List", "booked", function(frm, cdt, cdn){
	let selectedField = locals[cdt][cdn];
	console.log(selectedField)
});
