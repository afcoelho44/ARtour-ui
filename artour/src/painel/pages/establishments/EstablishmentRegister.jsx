import FormRegister from "../../components/FormEstablishment/FormRegister";

import { EstablishmentProvider } from "../../../Providers/EstablishmentContext";

export default function EstablishmentRegister() {
  return (
    <div>
      <h1>Adicionando um Estabelecimento</h1>
      <EstablishmentProvider>
        <FormRegister/>
        </EstablishmentProvider>
    </div>
  );
}
