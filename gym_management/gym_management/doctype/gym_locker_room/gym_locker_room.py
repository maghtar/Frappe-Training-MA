# Copyright (c) 2023, Mortaza Aghtar and contributors
# For license information, please see license.txt

import frappe
from frappe.website.website_generator import WebsiteGenerator

class GymLockerRoom(WebsiteGenerator):
	pass

@frappe.whitelist()
def book_locker(is_booked):
    is_booked = "Yes"
    return is_booked
