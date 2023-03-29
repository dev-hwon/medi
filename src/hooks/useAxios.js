import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function useAxios() {
    const params = useParams();
    const [lists, setLists] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const GOOGLESHEET = "https://sheets.googleapis.com/v4/spreadsheets"
    const SHEET_ID = "1iARCqkYaPh4RVgzFd0jUDJ5f0X1-xhtYnUlZtRMcGsk"
    const RANGE = params.name;
    const API_KEY = "AIzaSyA-crA0klE95-_kJpv1W13YUOks5Tu7Bz0"
    const API_URL = GOOGLESHEET + "/" + SHEET_ID + "/values/" + RANGE + "?key=" + API_KEY

    const fetchLists = async () => {
        try {
            
            setError(null);
            setLists(null);
            setLoading(true);
            const response = await axios.get(
                API_URL
            )
            setLists(response.data.values);
            
        } catch(e) {
            setError(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchLists();
    },[]);

    if(loading) return <div>로딩중 ... </div>;
    if(error) return <div>에러가 발생했습니다.</div>;
    if(!lists) return null;

    const newArr = [];
    function pushArr(idx) {
        const newLists = {};
        for(let j=0; j<lists[0].length; j++) {
            newLists[lists[0][j]] = lists[idx][j]
        }
        newArr.push(newLists);
    }
    for(let i=1; i<lists.length; i++) {
        pushArr(i);
    }

    return newArr;
}