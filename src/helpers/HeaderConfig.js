import Appointments from "../components/General/Appointments/Appointments";

export const navLinks = {
  roles: ["ADMIN", "PATIENT", "INSURANCE_STAFF", "LAB_STAFF"],
  ADMIN: {
    name: "Administrator",
    availableLinks: ["dashboard", "users", "logs", "createUser"],
  },
  PATIENT: {
    name: "Patient",
    availableLinks: [
      "dashboard",
      "appointment",
      "diagnosis",
      "viewUserById",
      "createAClaim",
    ],
  },
  DOCTOR: {
    name: "Doctor",
    availableLinks: [
      "dashboard",
      "appointment",
      "diagnosis"
    ]
  },
  LAB_STAFF: {
    name: "Lab Staff",
    availableLinks: ["dashboard", "labTestReports", "labTests", "diagnosis"],
  },
  INSURANCE_STAFF: {
    name: "Insurance Staff",
    availableLinks: ["dashboard", "viewClaims", "viewPolicies", "coverages"],
  },
  HOSPITAL_STAFF: {
    name: "Hospital Staff",
    availableLinks: ["dashboard", "appointment", "users", "createUser"]
  },
  links: {
    dashboard: {
      name: "Dashboard",
      url: "/",
    },
    coverages: {
      name: "Coverages",
      url: "/coverages",
    },
    createAClaim: {
      name: "Raise a Claim",
      url: "/raiseClaim",
    },
    viewClaims: {
      name: "View Claims",
      url: "/viewClaims",
    },
    createPolicy: {
      name: "Create Policy",
      url: "/createPolicy",
    },
    viewPolicies: {
      name: "View Policies",
      url: "/viewPolicies",
    },
    users: {
      name: "Users",
      url: "/users",
    },
    logs: {
      name: "Logs",
      url: "/logs",
    },
    appointment: {
      name: "Appointments",
      url: "/appointments",
    },
    diagnosis: {
      name: "Diagnosis",
      url: "/diagnosis",
    },
    viewUserById: {
      name: "View user",
      url: "/viewUserById",
    },
    createUser: {
      name: "Create user",
      url: "/createUser",
    },
    labTestReports: {
      name: "Lab Test Reports",
      url: "/labTestReports",
    },
    labTests: {
      name: "Lab Tests",
      url: "/labTests",
    },
    userData: {
      name: "Patient Records",
      url: "/userData"
    }
  },
};
