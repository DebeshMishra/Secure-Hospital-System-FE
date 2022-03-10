export const navLinks = {
	"roles": ["ADMIN", "PATIENT"],
	"ADMIN": {
		"name": "Administrator",
		"availableLinks": ["dashboard", "users", "logs"]
	},
	"PATIENT": {
		"name": "Patient",
		"availableLinks": ["dashboard", "appointment", "diagnosis", "viewUserById"]
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
		}
    }
}