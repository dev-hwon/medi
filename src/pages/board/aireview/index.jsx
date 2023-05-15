import React from "react";
import MainLayout from "@/src/layouts/main/MainLayout";

// ----------------------------------------------------------------------
AIReview.getLayout = (page) => <MainLayout> {page} </MainLayout>;
// ----------------------------------------------------------------------

export default function AIReview() {

    return (
        <>
            <h1>AI Review</h1>
        </>
    )
}