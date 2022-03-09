export const navLinks = {
	"roles": ["ADMIN", "PATIENT"],
	"ADMIN": {
		"name": "Administrator",
		"availableLinks": ["users", "logs"]
	},
	"PATIENT": {
		"name": "Patient",
		"availableLinks": ["appointment", "diagnosis", "viewUserById"]
	},
	"links": {
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
			"url": "diagnosis"
		},
		"viewUserById": {
			"name": "View user",
			"url": "ViewUserById"
		}
    }
}