export const navLinks = {
  roles: ["ADMIN", "PATIENT", "INSURANCE_STAFF", "LAB_STAFF"],
  ADMIN: {
    name: "Administrator",
    availableLinks: ["dashboard", "users", "logs", "createUser", "transactions"],
  },
  PATIENT: {
    name: "Patient",
    availableLinks: ["dashboard", "appointments", "diagnoses", "viewUserById", "createAClaim",],
  },
  LAB_STAFF: {
    name: "Lab Staff",
    availableLinks: ["dashboard", "labTestReports", "labTests", "diagnoses"],
  },
  INSURANCE_STAFF: {
    name: "Insurance Staff",
    availableLinks: ["dashboard", "viewClaims", "viewPolicies", "coverages"],
  },
  HOSPITAL_STAFF: {
    name: "Hospital Staff",
    availableLinks: ["dashboard", "appointments", "records", "editUser", "diagnoses", "prescriptions", "labTestReports", "transactions",],
  },
  links: {
    dashboard: {
      name: "Dashboard",
      url: "/dashboard",
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
    appointments: {
      name: "Appointments",
      url: "/appointments",
    },
    diagnoses: {
      name: "Diagnoses",
      url: "/diagnoses",
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
    records: {
      name: "Patient Records",
      url: "/records",
    },
    editUser: {
      name: "Edit User",
      url: "/editUser",
    },
    prescriptions: {
      name: "View Prescriptions",
      url: "/prescriptions",
    },
    transactions: {
      name: "Transactions",
      url: "/transactions",
    },
  },
};
