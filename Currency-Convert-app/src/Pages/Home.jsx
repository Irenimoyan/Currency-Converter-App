import CurrencyConverter from "../components/CurrencyConverter";
import { addConversionEntry } from "../services/ConversionService";

export default function Home() {
  return (
    <section>
      <CurrencyConverter onConverted={addConversionEntry} />
    </section>
  );
}
