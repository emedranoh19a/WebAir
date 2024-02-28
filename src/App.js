import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
import AppLayout from "layouts/admin";
import Login from "pages/Login";
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import routes from "routes";

export default function App() {
  return (
    <React.StrictMode>
      <ThemeEditorProvider>
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            {/* TODO vamos a implementar la autenticación de Google como una simple API.
   
        */}
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to="headquarters" />} />

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

            {/* CODIGO DE SCHMEDTMANN
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
            <Route path="*" element={<PageNotFound />} /> */}
          </BrowserRouter>
        </ChakraProvider>
      </ThemeEditorProvider>
    </React.StrictMode>
  );
}
//TODO get the Query provider working
