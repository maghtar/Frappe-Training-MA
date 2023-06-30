# Copyright (c) 2023, Mortaza Aghtar and contributors
# For license information, please see license.txt

import frappe
from frappe.website.website_generator import WebsiteGenerator

class GymGroupClass(WebsiteGenerator):
	pass

@frappe.whitelist()
def book_class(booked):
	booked = "Yes"
	return booked
