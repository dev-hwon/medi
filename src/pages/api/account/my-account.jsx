import { JWT_SECRET, verify } from "@/src/auth/jwt";

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
        res.status(200).json({ user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export default MyAccount;