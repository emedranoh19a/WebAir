import React from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "layouts/admin";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
// import AirHeadquarters from "views/admin/AirHeadquarters";
// import AirStores from "views/admin/AirStores";

// import MainDashboard from "views/admin/default";
// import AirHeadquarter from "views/admin/AirHeadquarter/AirHeadquarter";
import routes from "routes";
import Login from "pages/Login";

// Fade transition!!!! this will be awesome!
//
//
//.log()
// TODO implement client side pagination with react table.
// Info todas las rutas son definibles dentro de route.js
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ThemeEditorProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="headquarters" />} />
              {/* // Info: items go to the sidebar, subitems don't (detailds page)  */}
              {routes.map((route, key) => {
                return (
                  <React.Fragment key={key}>
                    {route.children &&
                      route.children.map((childRoute, childIndex) => (
                        <Route
                          key={childIndex}
                          path={childRoute.path}
                          element={childRoute.component}
                        />
                      ))}
                    <Route path={route.path} element={route.component} />
                  </React.Fragment>
                );
              })}
            </Route>
            <Route path="login" element={<Login />} />
          </Routes>
          {/* 
              
             
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />

              <Route path="checkin/:bookingId" element={<Checkin />} />
              <Route path="cabins" element={<Cabins />} />
              <Route path="users" element={<Users />} />
              <Route path="settings" element={<Settings />} />
              <Route path="account" element={<Account />} />
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          
              
              */}
        </BrowserRouter>
      </ThemeEditorProvider>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);

//--------------------------------DOING-----------------------------
// Question: Peticiones de API.
//-------API de 本部:

// Todo: Unas tablas con datos falsos. Luego ordenas el routing.
//Datos relevantes de "tiendas":

// Brainstorm: Custom Hook que obtenga datos relevantes de. Users. Hqs.
//Query keys: userId, StoreCd, y por supuesto storeCd. Los datos ya deberían estar en el cache.
//UserStores: UserId, HqCd, StoreCd, CreatedBy, CreatedAt.(?)

//Stores: StoreCd, HqCd, StoreName, email, ftpUser, ftpPass, Disabled, CreatedBy, CreatedAt, ModifiedBy, ModifiedAt.
//Ordered: StoreCd, StoreName, HqCd, email
// TODO Reemplazar el copyright (puede que no sea correcto, pero nadie nos va a delatar)
// TODO  Hacer una lista de tiendas
// Todo organizar los datos de Stores por relevancia.
// Todo hacer un mockup peque de las tiendas.
// Todo hacer un esqueleto de Horizon, destinado a la página.
// Todo que cobre vida con magia negra de Chakra y Horizon.

//-------------------------------------------------------------

//TODO Read about the useDisclosure hook.
//TODO Read about ChakraUI hooks.

//TODO research about React-Hook-Form with ChakraUI (or HorizonUI)

//TODO implementación de la página de Login

//--------------------HEADQUARTERS

//--------------------STORES
//datos de una tienda: StoreCd, HqCd, StoreName, email, ftpUser, FtpPass, Disabled, CreatedBy, CreatedAt, ModifiedBy,
// TODO  Hacer una lista de tiendas
// Todo organizar los datos de Stores por relevancia.
// Todo hacer un mockup peque de las tiendas.
// Todo hacer magia con Chakra

// Brainstorm Hacer un componente de los detalles de una tienda
// Info: Registrar una tienda a partir de storeCd, hqCd, storeName, email, ftpUser, ftpPassword, disabled
// Info: Editar una tienda correspondiente con la técnica de Schmedtmann: CreateEdit...
//Info: Eliminar una tienda.
//Eliminar tiendaS por headQuarter, por user.
// Info: Al buscar una tienda, queremos ver:
//información de registro, detalles de la tienda, Información de billing, y datos (?)

// NOTE: funcionalidades de MOS.
//Se pueden buscar las tiendas 「移動中」　「停止中」
//El botón de búsqueda es demasiado. El fetch debería ser automático. Piensa, al entrar a la página "/stores", qué es lo que el usuario quiere ver?
//Las tiendasabstracting pueden ser visualizadas en:
// a. Una lista bonita. Un elemento de la lista nos redirecciona a:店舗情報
// b. Una tabla detallada. (la tabla probablemente es reduntante.) Un elemento de la tabla nos redirecciona a:店舗情報 (redundance!)

//Store details page(?): It shows even less information than the ugly table.

//Store details page (actions available)
//Redirect to comany's information.
//Redirect to aggregation data. (earnings, and so on...)
// Edit page.

//--------------------USERS
// Brainstorm
//Hacer una lista de usuarios
// Hacer una lista de los detalles de un usuario.
// Info: Deseos de Kawamura
//Registrar a partir de: userId, loginId, passWord, username, observations (備考), group, companyName, email, disabled.
// Info: Editar un usuario correspondiente con la técnica de Schmedtmann. CreateEdit...
// Question: Qué es group en este caso?

// Brainstorm La tabla de usuarios debe ser reusable para que
// los mismos puedan ser buscados por headQuarter, por tienda y demás
// Client Side Filtering vs Server side Filtering
// Una barra de Search para buscar usuarios por cualquier campo que sea insertado.
// Link hacia los datos especificos del usuario.
// Link para descargar un PDF, o un excel, y asi.
// Los usuarios pueden ser modificables: Drawer por la derecha.
// (Implementar CreateEditSession)

// Question (?)
//Services vs. Billing vs. Price
// Info: Queremos Buscar tiendas y usuarios (Por servicio usado)
// Refactor: (Huele a que lo podemos hacer chido sin la necesidad de una página)
//Ejemplo: Queremos buscar las tiendas que usen Tanaoroshi.
//Ejemplo 2: Queremos buscar las tiendas que usen Tanafuda.. y así.

//--------------------FACTURACIONES
// Brainstorm Hacer una lista de facturaciones
// Brainstorm Hacer una página con los detalles de una factura.

//Headquarters: Buscar y leer, Registrar, Facturar, Eliminar
// TODO Registrar un nuevo hq: hqCd, hqName, email, disabled:
// TODO Actualizar un hq. Dos en uno con la técnica de CreateEdit de Schmedtmann
// Info: Hacer una maniobra con: firstFee, standardFee, hqCd, userId, ServiceId, price (?), disabled.
// Question: Qué es price y cómo difiere de las cuotas mensuales?

//Idea podemos usar un drawer por la derecha en la página correspondiente.
//IDEA Cook a toaster for feedback, then invalidate the fetched data.
//Stores: Buscar y leer, registrar, facturar y eliminar.

//Users: Buscar y leer, registrar, facturar y eliminar.

//--------------------DATA
// Question Qué rayos es Data? es demasiado ambiguo!
// Data: Buscar y leer, registrar, facturar y eliminar

// Facturar : Buscar y leer, ( registrar factura), (eliminar factura)
// Question Cómo se van a emitir las facturas?
//Voy a obtenerlas de una base de datos?
//Cada cuando va a estar disponible una factura?
//En qué formatos se puede exportar una facutra?
//Qué operaciones se pueden hacer con las facturas?
//Crear, Actualizar????, Eliminar????
//Lógicamente se puede alterar la información de las facturas?

// Info: Kawamura quiere Buscar por:
//HqCd, HqName, StoreCd, StoreName, userId, username, group, companyName, date (Undetermined Slice)

// Question: Qué es group???

// Question: necesito mas información de la p. 9 del PowerPoint:

//--------------------DATA
// Question: Qué es 関係マスタ？
// Info: quiere que lo haga por: userId, hqId, storeId, disabled (????)
// Info: Show the status of the data: Was it succesfully sent already? (WHUT?)

// Note All of the following are just thought. Not relevant for this case.
//The app is meant to be used by WebSpace users only!

// Show real time inventory operations.
// Show real time inventory product status.
// Show a dashboard with a timely activity.
// Display Tanaoroshi of the last 10 days.
// Display the activity of the last 45 days.
// Display if there is something in the selected shelf.
// Sort the items by recent activity. (Aren't this items forgotten in this shelf?)
// Insertion of JAN (WHUT?)

// Note: The following specs are just ideas, nothing is prioritized, for now.
// -----------------------EXTRA information:
//additional things to consider according to Mr. Kawamura:
// Maintenance specifications
// Start procedure (?)
// End procedure (?)

//Search fields: hqCd, storeCd, storeName, loginId, password, ftpAddress, passWord
//loginHistory, usage (either showing display, inventory or Shelf, configuration...),
//permissions, data (有無、送信結果一覧), list of facturations.
// info loginHistory is something new! (customer activity or WebSpace activity? or both?)

// settings 棚卸し先付１０日、過去４５日、ゴンドラ棚段の表示の有無 (The app is not for the user at the moment)

// Note: What are my proposals?
// Fast visualization of what to do next. Because I love to tackle TODO lists in order.
// Maybe adding quick actions in the dashboard, with undone tasks.
//(Maybe sending automatic bills, maybe checking upcoming ending subscriptions.
// Maybe exporting a report of all the users, made just for WebSpace)
//me estoy pudriendo en mi lugar
