// Copyright (c) 2023, Mortaza Aghtar and contributors
// For license information, please see license.txt

frappe.ui.form.on('Gym Locker Room', {
	refresh: function(frm) {
		frm.add_custom_button(__('Book Locker'), function(){
			
			frappe.call({
				method: 'gym_management.gym_management.doctype.gym_locker_room.gym_locker_room.book_locker',
				args: {
					'is_booked': frm.doc.is_booked
				},
				callback: function(r) {
					frm.set_value("is_booked", r.message)
					frm.save()
					console.log(r.message)
				}
			});
			
		});
	}
});
