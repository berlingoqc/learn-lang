export class Config {
    learningLang: string;
    originLang: string;
}
export class User {
  uid?: string;

  email?: string;
  displayName?: string;
  phoneNumber?: string;
  photoURL?: string;
  providerId?: string;

  config?: Config;
}
