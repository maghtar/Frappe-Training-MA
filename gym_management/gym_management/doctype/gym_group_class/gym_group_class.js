// Copyright (c) 2023, Mortaza Aghtar and contributors
// For license information, please see license.txt

frappe.ui.form.on('Gym Group Class', {
	refresh: function(frm) {
		frm.add_custom_button(__('Book Class'), function(){
			
			frappe.call({
				method: 'gym_management.gym_management.doctype.gym_group_class.gym_group_class.book_class',
				args: {
					'booked': frm.doc.booked
				},
				callback: function(r) {
					frm.set_value("booked", r.message)
					frm.save()
					console.log(r.message)
				}
			});
			
		});
	}
});
