export const navLinks = {
  roles: ["ADMIN", "PATIENT", "INSURANCE_STAFF"],
  ADMIN: {
    name: "Administrator",
    availableLinks: ["dashboard", "users", "logs", "createUser"],
  },
  PATIENT: {
    name: "Patient",
    availableLinks: ["dashboard", "appointment", "diagnosis", "viewUserById"],
  },
  INSURANCE_STAFF: {  
    name: "Insurance Staff",
    availableLinks: ["dashboard", "viewClaims", "viewPolicies", "coverages"]
  },
  links: {
    dashboard: {
      name: "Dashboard",
      url: "/dashboard",
    },
    coverages: {
      name: "Coverages",
      url: "/coverages"
    },
    viewClaims: {
      name: "View Claims",
      url: "/viewClaims"
    },
    createPolicy: {
      name: "Create Policy",
      url: "/createPolicy"
    },
    viewPolicies: {
      name: "View Policies",
      url: "/viewPolicies"
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
  },
};
