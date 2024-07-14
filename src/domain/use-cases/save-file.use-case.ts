import fs from 'fs';

export interface SaveFileUseCase {
    exexute: (options: SaveFileOptions) => boolean;
}

export interface SaveFileOptions {
    fileContent: string;
    fileDestination?: string;
    fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
    constructor() { };

    exexute({
        fileContent,
        fileName = 'table',
        fileDestination = 'outputs'
    }: SaveFileOptions): boolean {
        // Crear carpeta si no existe
        fs.mkdirSync(fileDestination, { recursive: true });

        // Crear archivo
        fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent);

        return true;
    }
}