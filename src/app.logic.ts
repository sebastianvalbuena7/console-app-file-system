import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';

console.log(yarg);

const { b: base, l: limit, s: showTable } = yarg;

const headerMessage = `
=========================
        Tabla del ${base}
=========================\n
`;

// outputMessage = headerMessage + outputMessage;

const outputPath = `outputs`;

// Crear carpeta si no existe
fs.mkdirSync(outputPath, { recursive: true });

// Crear archivo
// fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);