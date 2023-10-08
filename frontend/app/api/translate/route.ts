const { Translate } = require('@google-cloud/translate').v2;
const translate = new Translate();
export async function POST(req: Request, res: Response) {
  const { text, target } = req.body()
  // Translates the text into the target language. "text" can be a string for
  // translating a single piece of text, or an array of strings for translating
  // multiple texts.
  let [translations] = await translate.translate(text, target);
  translations = Array.isArray(translations) ? translations : [translations];
  console.log('Translations:');
  translations.forEach((translation, i) => {
    console.log(`${text[i]} => (${target}) ${translation}`);
  });

  return translations
}