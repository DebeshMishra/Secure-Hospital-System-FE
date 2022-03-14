export const navLinks = {
	"roles": ["ADMIN", "PATIENT"],
	"ADMIN": {
		"name": "Administrator",
		"availableLinks": ["dashboard", "users", "logs"]
	},
	"PATIENT": {
		"name": "Patient",
		"availableLinks": ["dashboard", "patient_appointment", "diagnosis", "viewUserById"]
	},
	"HOSPITAL_STAFF": {
		"name": "Hospital Staff",
		"availableLinks": ["dashboard", "hs_appointments"]
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
		"patient_appointment": {
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
		"hs_appointments":{
			"name": "View Appointments",
			"url": "/hs_appointments"
		}
    }
}