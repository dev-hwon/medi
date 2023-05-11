import { AuthContext } from "@/src/auth/JwtContext";
import { verify, sign } from "jsonwebtoken";
import cookie from "cookie";
import { PATH_API } from "@/src/routes/paths";
import axios from "axios";
import { JWT_SECRET, JWT_EXPIRES_IN } from "@/src/auth/jwt";

const Login = async(req, res) => {

    // 세션이 있으면 그냥 pass
    // 쿠키만 있으면 api 호출 후 처리
    // 쿠키 없으면 bye~

    // return 값  const { accessToken, user } = response.data;

    // jsonwebtoken > sign : jwt 토큰생성

    // 쿠키를 이용해서 accessToken 을 발급 받아야함
    // 쿠키 유효시간 8시간 ( 스토어/기공 )

    const cookies = cookie.parse(req.headers.cookie);
    if(cookies['medivalue_web']) {

        const medi_cookie = cookies['medivalue_web'];
 
        const api_url = PATH_API.member;

        const formData = new FormData();
        formData.append('hash', medi_cookie);

        const response = await axios.post(api_url, formData);

        if(response.data.success) {
            
            const user = {
                member_type: response.data.data.member_type,
                medi_nm: response.data.data.medi_nm,
                clinic_yn: response.data.data.clinic_yn,
                id: response.data.data.id,
                medi_addr: response.data.data.medi_addr,
            };

            const accessToken = sign(
                user,
                JWT_SECRET,
                {
                    expiresIn: JWT_EXPIRES_IN,
                }
            )
            res.status(200).json({ accessToken, user });

        } else {
            res.status(401).json({ message: "로그인에 실패했습니다"}); 
        }
    } else {
        res.status(401).json({ message: "Cookie empty"});
    }

    
   
}

export default Login;