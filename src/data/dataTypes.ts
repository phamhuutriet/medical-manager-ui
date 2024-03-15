export interface Treatment {
  id: string;
  data: any;
  template: any;
  record: string;
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
