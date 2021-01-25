export interface Login {
  message: string;
  roles: [any];
  token: string;
  user: User;
  code: number;
  companyProfileList: [CompanyProfile];
}

export interface User {
  email: string;
  id: number;
}
export interface CompanyProfile {
  address: string;
  classification: string;
  companyName: string;
  // dateCreated: {year: 2020, month: 6, day: 11}
  dateOfIncorporation: string;
  id: number;
  missionAndVisionStatement: string;
  userId: number;
  website: string;
  whatWeDo: string;
}
