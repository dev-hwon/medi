import { ROOTS_CLINIC } from "../routes/paths";

const getOption = {
    method: "GET",
    headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": ROOTS_CLINIC,
    },
};

export { getOption };

