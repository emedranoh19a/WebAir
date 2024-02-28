import axios from "axios";

const token = "83cdf9a3-548d-4e12-8093-1d7495186112";
// TODO tenemos primero que generar un token con la ayuda de un JWT.

const config = {
  // Probablemente necesitemos:
  headers: {
    "Content-Type": "application/json; charset=UTF8",
    "X-AccessToken": `${token}`,
  },
};

export async function test() {
  try {
    const response = await axios.get(`/api/headquarters/53`, config);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export async function getHeadquarters() {
  const params = { page: 1, row: 0 };
  try {
    const response = await axios.get(`/api/headquarters/search`, {
      ...config,
      params,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
// TODO agregar parámetros donde sea necesario.
// TODO la prueba de fuego es /api/headquarters/search
// Note: Informacion util
// // https://rapidapi.com/guides/axios-tokens-cookies-auth

// // primero se genera el token:
// // 1. generar token con ayuda de jwt.

// //Luego, el token va en todos los requests

// Info: Version que me enseñaron: Axios + CORS for CRA.
// https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually
// Revisar setupProxy.js el target debería ser el url proveido.
// Axios, por otra parte, debe empezar con /api. Luego, nos metemos con otras cosas
// En realidad, tenía que leer cuidadosamente las especificaciones. Los headers no estaban bien definidos.
//Solucion de paginación...
//Crear el UI. con react table
