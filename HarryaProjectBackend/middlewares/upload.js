import multer from "multer";
import path from "path";
<<<<<<< HEAD


import fs from "fs";
const uploadDir = path.join("D:/SweetHome/backend-sweethome/uploads");
=======
import fs from "fs";

const uploadDir = path.join("/tmp", "uploads");

>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
<<<<<<< HEAD
    cb(null, "uploads/"); // Save to the "uploads" folder
=======
    cb(null, uploadDir); // use the resolved path
>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

export default upload;
