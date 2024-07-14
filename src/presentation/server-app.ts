import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    fileName: string;
    fileDestination: string;
}

export class ServerApp {
    static run({ base, limit, showTable, fileDestination, fileName }: RunOptions) {
        console.log('Server runing...');

        const table = new CreateTable().execute({ base, limit });

        const wasSaved = new SaveFile().exexute({ fileContent: table, fileName, fileDestination });

        if (showTable) console.log(table);

        (wasSaved)
            ? console.log('File created')
            : console.log('File not created');
    }
}