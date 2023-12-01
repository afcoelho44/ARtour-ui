import FormRegister from "../../painel/components/FormEstablishment/FormRegister";

import { EstablishmentProvider } from "../../Providers/EstablishmentContext";
// import { saveEstablishmentApi } from "../";

export default function CreateEstablishment() {
 
  return (
    <div>
      <h1>Adicionando um Estabelecimento</h1>
      <EstablishmentProvider>
        <FormRegister/>
        </EstablishmentProvider>
    </div>
  );
}
