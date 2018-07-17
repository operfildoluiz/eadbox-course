/**
 * As EADBOX API has CORS protection enabled and wasn't possible (due the challenge), was necessary to use a proxy to acces the server.
 */
export const environment = {
  production: false,
  apiUrl:
    "https://cors-anywhere.herokuapp.com/https://luiz-teste.eadbox.com/api/",
  name: "TestSchool"
};
