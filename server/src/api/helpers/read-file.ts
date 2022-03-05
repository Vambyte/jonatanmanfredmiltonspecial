var fs = require('fs');

export function readModuleFile(path: string, callback: any) {
    try {
        var filename = require.resolve(path);
        fs.readFile(filename, callback);
    } catch (e) {
        callback(e);
    }
}