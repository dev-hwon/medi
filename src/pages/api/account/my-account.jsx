import { JWT_SECRET, verify } from "@/src/auth/jwt";
import cookie from "cookie";

const MyAccount = async (req, res) => {
    try {
        const accessToken = req.query.token;
         if (!accessToken) {
            res.status(401).json({ message: "Authorization token missing" });
        }
        const user = verify(accessToken, JWT_SECRET);
        if (!user) {
            res.status(401).json({ message: "Invalid authorization token" });
        }
        const cookies = cookie.parse(req.headers.cookie);
        if (!cookies || !cookies['medivalue_web']) {
            localStorage.removeItem("accessToken");
            res.status(401).json({ message: "Invalid authorization cookie" });
        }
        res.status(200).json({ user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export default MyAccount;