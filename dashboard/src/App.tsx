import "./App.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { adminApi } from "./infrastructure/api/apiSlice";

function AppFile(){
  const { data: api, isSuccess } = adminApi.useGetVendorsQuery();
  return <div>

<div>{isSuccess ? JSON.stringify(api) : "noting"}</div>
  </div>
}
function App() {
  return (
    <ApiProvider api={adminApi}>
      <AppFile/>
    </ApiProvider>
  );
}

export default App;
