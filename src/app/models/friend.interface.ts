export interface Friend {
  name: string;
  status: string;
  bio: string;
  passions: string[];
  reputation: string;
  age: () => string;
  imageUrl: string;
}
