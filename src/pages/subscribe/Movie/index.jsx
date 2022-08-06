import React from "react";
import SubscribeList from "@/pages/subscribe/components/SubscribeList";
import {Helmet} from "react-helmet-async";
import {Typography} from "@mui/material";

const MovieIndex = () => {
    return (
        <>
            <Helmet title="我订阅的电影"/>
            <Typography variant="h3" gutterBottom>
                我订阅的电影
            </Typography>
            <SubscribeList mediaType="Movie"/>
        </>
    );
}
export default MovieIndex;