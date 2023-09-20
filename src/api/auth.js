import fetchInstance from "./instance";

export const signUp = async (user) => {
  console.log(user);
  return fetchInstance("auth/signup", { ...user });
};

export const signIn = async (user) => {
  console.log(user);
  return fetchInstance("auth/signin", { ...user });
};
