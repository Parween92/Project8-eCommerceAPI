import { z } from "zod/v4";

const validateSchema = (Schema) => (req, res, next) => {
  const { error, data } = Schema.safeParse(req.body);
  if (error) {
    const prettifyErrorMessage = z.prettifyError(error);
    throw new error(prettifyErrorMessage, { cause: 400 });
  }
  next();
};
export default validateSchema;

// if (error) {
//   const formatted = error.format();
//   res.status(400).json({ error: formatted });
//   return;
// }

//safeParse prüft, ob die Daten gültig sind, und gibt ein Erfolgsergebnis zurück – ohne dass das Programm abstürzt

// error.errors:  Array von Fehlern mit Informationen zu jeder Stelle, wo etwas falsch war
//  error.format(): gibt strukturierteres Objekt zurück und die Struktur ist nach Feldern gruppiert, sodass in Frontend einfacher anzuzeigen
// formst () ist ----> zod eingebaute Methode
