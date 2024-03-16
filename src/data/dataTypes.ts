export interface Treatment {
  id: string;
  date: string;
  name: string;
  cost: number;
  recordId: string;
  note: string;
  doctor: Doctor;
  isDelete?: boolean;
}

export interface Doctor {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  phoneNumber: string;
}

export interface SignUpData {
  username: string;
  email: string;
  password: string;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface Record {
  id: string;
  patientId: string;
  reasonForVisit: string;
  symptom: string;
  medicalHistory: string;
  vitalSigns: VitalSigns;
  diagnosis: string;
  treatmentPlan: string[];
  treatments: Treatment[];
}

interface VitalSigns {
  temperature: string;
  bloodPressure: string;
  breathRate: string;
  heartRate: string;
}
