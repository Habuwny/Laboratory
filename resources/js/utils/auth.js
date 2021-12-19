export const isLoggedIn = () => {
  return localStorage.getItem("isLoggedIn") === "true";
};

export const logIn = () => {
  localStorage.setItem("isLoggedIn", true);
};
export const logOut = () => {
  localStorage.setItem("isLoggedIn", false);
};
