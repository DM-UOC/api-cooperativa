import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

// path al archivo yml...
var rootPath = `${path.dirname(path.dirname(path.dirname(__dirname)))}`;

// constante captura archivo yml...
const yamlConf: any = yaml.load(
  fs.readFileSync(`${rootPath}/libs/config/config.yml`, 'utf-8')
);

// environment...
const environment: any = process.env.NODE_ENV;

// exportando objeto...
export default () => {
  return yamlConf[environment];
}