import path from 'path';
import fs from 'fs';

export function getJson(filename) {
    const filePath = path.join(process.cwd(), 'src', 'jsons', filename + ".json");
    console.log('PATH', filePath)
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const jsonData = JSON.parse(fileContent);
  return jsonData;
}
