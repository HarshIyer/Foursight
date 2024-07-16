export function emailRegex(email: string) {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
}

export function usernameRegex(username: string) {
  return /^[a-zA-Z0-9._-]{3,}$/.test(username);
}
