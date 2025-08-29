import CurrencyConverter from "../Components/CurrencyConverter"
import { addConversionEntry } from "../services/ConversionService";

export default function Home() {
  return (
    <section>
      <CurrencyConverter onConverted={addConversionEntry} />
    </section>
  );
}