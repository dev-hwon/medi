// import React, { useEffect, useReducer, useState, useCallback } from "react";
// import TodosReducer from "./TodosReducer";

// function useFetch(url, objName) {
//   const [datas, dispatch] = useReducer(TodosReducer, {
//     loading: true,
//     errorMessage: "",
//     todos: [],
//     categorys: [],
//     authors: [],
//   });
//   const getData = useCallback(
//     async () => await fetch(url).then((res) => res.json())
//   );
//   useEffect(() => {
//     getData()
//       .then((res) => {
//         const data = res;
//         dispatch({ type: "TODOS_SUCCESS", data, objName });
//       })
//       .catch(() => {
//         dispatch({ type: "TODOS_ERROR" });
//       });
//   }, []);
//   return datas;
// }

// export default useFetch;

// import { useEffect, useState } from "react";

// export default function useFetch(url) {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);

//   return data;
// }

// import React, { useEffect, useReducer, useState, useCallback } from "react";
// import TodosReducer from "./TodosReducer";

// function useFetch(url, objName) {
//   const [datas, dispatch] = useReducer(TodosReducer, {
//     loading: true,
//     errorMessage: "",
//     todos: [],
//     categorys: [],
//     authors: [],
//   });
//   const getData = useCallback(
//     async () => await fetch(url).then((res) => res.json())
//   );
//   useEffect(() => {
//     getData()
//       .then((res) => {
//         const data = res;
//         dispatch({ type: "TODOS_SUCCESS", data, objName });
//       })
//       .catch(() => {
//         dispatch({ type: "TODOS_ERROR" });
//       });
//   }, []);
//   return datas;
// }

// export default useFetch;

// import { useEffect, useState, useCallback } from "react";
// export default function useFetch(url) {
//     const [data, setData] = useState([]);
//     const fnFetch = useCallback (() => {
//         fetch(url)
//         .then(res =>{
//             return res.json()
//         })
//         .then(data=> {
//             setData(data);
//         })
//     },[data])

//     useEffect(() => {
//         fnFetch();
//     },[])

//     return data;
// }
