interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "157s31938",
        user: {
          name: "Saulo do Vale",
          email: "bispov.oliveira@lprs.com",
        },
      });
    }, 2000);
  });
}
