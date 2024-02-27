// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://172.31.7.42:8085/api/", //your api URL
// });

// //JWT es el largo, y el access TOKEN es el pequeño.
// const jwt =
//   "eyJhbGciOiJSUzI1NiIsImtpZCI6ImU0YWRmYjQzNmI5ZTE5N2UyZTExMDZhZjJjODQyMjg0ZTQ5ODZhZmYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMzg0OTM5ODE2MTQ2LTNoOWJqbnRicWZncW1tZ2lnYzRubG1kajIxNjI5am9uLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMzg0OTM5ODE2MTQ2LTNoOWJqbnRicWZncW1tZ2lnYzRubG1kajIxNjI5am9uLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAwNjkwNzY4ODQ3OTM4OTkxMjI4IiwiaGQiOiJ3cy1zb2wuY28uanAiLCJlbWFpbCI6ImUtbWVkcmFub0B3cy1zb2wuY28uanAiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IjRjRVVMVVF2MUtKNkJkMGY5d3NfQmciLCJuYmYiOjE3MDE4MjQ2NzgsIm5hbWUiOiJFcmljIE1lZHJhbm8iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSnEwbW91Z0pvdXE2WWFCOXlhLXZkcldDaGV0RVlhaXJnaWpzeDRIUG5LY1E9czk2LWMiLCJnaXZlbl9uYW1lIjoiRXJpYyIsImZhbWlseV9uYW1lIjoiTWVkcmFubyIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNzAxODI0OTc4LCJleHAiOjE3MDE4Mjg1NzgsImp0aSI6IjVhNTcxYzRkMjRmNWEyYzU1OWZiOWIzOGQyZWRlZjA5MmI5MDRhYWIifQ.DU6u2bXffwDKo5Ub7cF-AJUkeDqWkZvThPZgy1ZOS4LNTb7vgYMaEiOZVJhIJp6M9lLJjDCOAWau0RHv-i_rbtviTHd6SIKQtn0C9Z6g2TbWwI1AcHU1TcIJsNbUp64l6BCLMkJaddCBTc1rTTiF_dELSywcMqFXb7IKwJ7RjvSgzp45wt2wP5jPXZBFhHA8jO76WQGkmkMfQne4nSV70vsGWK-H3xiuIOI5FH4cHYr-gsQRD7d1ILKmsS2-xjaRZ5BJ7TEFfj1uFvvPmMsizIxg8umBOHMBmeUrLsEpGeRQyg5xXYesSossffzIiVbLL-CIt5In7bwhvR0Snngoxg";
// const token = "83cdf9a3-548d-4e12-8093-1d7495186112";
// const config = {
//   headers: { Authorization: `Bearer ${token}` },
// };
// axios
//   .get("/api/users", config)
//   .then((res) => console.log(res.data))
//   .catch((err) => console.error(err));

// export default api;
// // https://rapidapi.com/guides/axios-tokens-cookies-auth
// //Información super útil para autenticación.

// // primero se genera el token:
// // 1. generar token con ayuda de jwt.

// //Luego, el token va
