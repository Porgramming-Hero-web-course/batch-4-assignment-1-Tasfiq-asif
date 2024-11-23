interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (obj: Profile, partial: Partial<Profile>): Profile => {
  return { ...obj, ...partial };
};
