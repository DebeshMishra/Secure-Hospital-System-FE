export const navLinks = {
	"roles": ["ADMIN", "PATIENT", "LAB_STAFF"],
	"ADMIN": {
		"name": "Administrator",
		"availableLinks": ["dashboard", "users", "logs"]
	},
	"PATIENT": {
		"name": "Patient",
		"availableLinks": ["dashboard", "appointment", "diagnosis", "viewUserById"]
	},
	"LAB_STAFF": {
		"name": "Lab_Staff",
		"availableLinks": ["dashboard", "labTestReports", "labTestRequests" , "diagnosis"]
	},
	"links": {
		"dashboard": {
			"name": "Dashboard",
			"url": "/dashboard"
		},
		"users": {
			"name": "Users",
			"url": "/users"
		},
		"logs": {
			"name": "Logs",
			"url": "/logs"
		},
		"appointment": {
			"name": "Appointments",
			"url": "/appointments"
		},
		"diagnosis": {
			"name": "Diagnosis",
			"url": "/diagnosis"
		},
		"viewUserById": {
			"name": "View user",
			"url": "/viewUserById"
		},
		"labTestReports": {
			"name": "Lab Test Reports",
			"url": "/labTestReports"
		},
		"labTestRequests": {
			"name": "Lab Test Requests",
			"url": "/labTestRequests"
		},
    }
}