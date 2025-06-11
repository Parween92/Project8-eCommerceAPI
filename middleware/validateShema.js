import { z } from "zod/v4";

const validateShema = (Schema) => (req, res, next) => {
  const { error, data } = Schema.safeParse(req.body);

  if (error) {
    const formatted = error.format();
    res.status(400).json({ error: formatted });
    return;
  }
  next();
};
export default validateShema;

// if (error) {
//   const prettifyErrorMessage = z.prettifyError(error);
//   throw new error(prettifyErrorMessage, { cause: 400 });
// } ODER --_>
// error.errors:  Array von Fehlern mit Informationen zu jeder Stelle, wo etwas falsch war
//  error.format(): gibt strukturierteres Objekt zurück und die Struktur ist nach Feldern gruppiert, sodass in Frontend einfacher anzuzeigen
// formst () ist ----> zod eingebaute Methode
