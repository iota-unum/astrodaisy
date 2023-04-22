import fs from 'fs';

export default function handler(req, res) {
  const { image } = req.body;
  const filePath = `public/card-images/image.png`;

  try {
    // Remove file if it already exists
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // Create the directory if it doesn't exist
    const dir = 'public/card-images';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    // Write the file to the directory
    fs.writeFileSync(filePath, image.replace(/^data:image\/png;base64,/, ''), 'base64');

    res.status(200).json({ message: 'File saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while saving the file' });
  }
}
