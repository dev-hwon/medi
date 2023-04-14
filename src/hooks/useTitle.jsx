import { useEffect } from "react";

function useTitle(title) {
    useEffect(() => {
        document.title = '클리닉관리 - ' + title;
    }, [title]);
}

export default useTitle;