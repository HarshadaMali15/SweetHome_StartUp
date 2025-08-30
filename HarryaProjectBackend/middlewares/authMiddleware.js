import jwt from "jsonwebtoken"
import Seller from "../models/Seller.js";
export const protect = async (req, res, next) => {
  try {
<<<<<<< HEAD
    const token = req.cookies.token;
=======
    const token = req.cookies.seller_token;

>>>>>>> 3ed0f0d1565ba25ce12b5f66732b9be9ed1bbe5f
    if (!token) return res.status(401).json({ message: "Not authorized, no token" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.seller = await Seller.findById(decoded.id).select("-password");

    next();
  } catch (error) {
    res.status(401).json({ message: "Not authorized" });
  }
};
