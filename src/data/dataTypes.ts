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
