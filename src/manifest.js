require('dotenv/config');

const manifest = {
  id: 'org.yourname.synopsis.translator',
  version: '1.0.0',
  name: 'Synopsis Translator (Gemini)',
  description: 'Tradução automática de sinopses via Gemini',
  resources: ['meta'],
  types: ['movie', 'series'],
  idPrefixes: ['tt'],
  catalogs: [],
  config: [
    {
      key: 'lang',
      title: 'Idioma da sinopse',
      type: 'select',
      options: ['pt-BR','pt-PT','es-ES','en-US','fr-FR'],
      default: 'pt-BR',
      required: true
    },
    {
      key: 'tone',
      title: 'Tom do texto',
      type: 'select',
      options: ['natural','formal','neutro'],
      default: 'natural',
      required: false
    }
  ],
  behaviorHints: {
    configurable: true,
    configurationRequired: false
  },
  background: null,
  logo: 'https://stremio-addon-traducao-ptbr-js1r.onrender.com/logo.png',
  };

module.exports = manifest;
