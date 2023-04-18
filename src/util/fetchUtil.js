const getOption = {
    method: "GET",
    headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": process.env.NEXT_PUBLIC_HOST,
    },
};

export { getOption };

