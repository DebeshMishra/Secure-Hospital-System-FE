import Appointments from "../components/General/Appointments/Appointments";

export const navLinks = {
  roles: [
    "ADMIN",
    "PATIENT",
    "INSURANCE_STAFF",
    "LAB_STAFF",
    "DOCTOR",
    "HOSPITAL_STAFF",
  ],
  ADMIN: {
    name: "Administrator",
    availableLinks: [
      "dashboard",
      "appointments",
      "users",
      "logs",
      "createUser",
      "transactions",
      "viewClaims",
      "viewPolicies",
    ],
  },
  PATIENT: {
    name: "Patient",
    availableLinks: [
      "dashboard",
      "appointments",
      "EnrollinPolicy"
    ],
  },
  DOCTOR: {
    name: "Doctor",
    availableLinks: ["dashboard", "appointments", "users"],
  },
  LAB_STAFF: {
    name: "Lab Staff",
    availableLinks: ["dashboard", "labTestReports", "labTests", "users"],
  },
  INSURANCE_STAFF: {
    name: "Insurance Staff",
    availableLinks: [
      "dashboard",
      "viewClaims",
      "viewPolicies",
      "coverages",
      "users",
    ],
  },
  HOSPITAL_STAFF: {
    name: "Hospital Staff",
    availableLinks: [
      "dashboard",
      "appointments",
      "users",
      "createUser",
      "transactions",
    ],
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
    EnrollinPolicy: {
      name: "Enroll in Policy",
      url: "/takePolicy",
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
    editUser: {
      name: "Edit User",
      url: "/editUser",
    },
    editUserHS: {
      name: "Edit User",
      url: "/editUserHS",
    },
    prescriptions: {
      name: "View Prescriptions",
      url: "/prescriptions",
    },
    transactions: {
      name: "Transactions",
      url: "/transactions",
    },
    userData: {
      name: "Patient Records",
      url: "/userData",
    },
    viewTransactions: {
      name: "Transaction",
      url: "/viewTransaction",
    },
  },
};
