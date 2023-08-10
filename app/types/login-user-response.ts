export interface LoginUserResponse {
  loginUser: {
    token: string;
    user: User;
  };
}
export interface User {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  role: string;
}
