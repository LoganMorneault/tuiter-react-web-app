import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply, faHeart, faRetweet, faShare } from "@fortawesome/free-solid-svg-icons";
import { updateTuitThunk } from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    return (
        <div className="row">
            <div className="col handle-text">
                <FontAwesomeIcon icon={faReply} />
                &nbsp;&nbsp;{tuit.replies}
            </div>
            <div className="col handle-text">
                <FontAwesomeIcon icon={faRetweet} />
                &nbsp;&nbsp;{tuit.retuits}
            </div>
            <div className="col handle-text">
                <FontAwesomeIcon icon={faHeart} color={tuit.liked ? "crimson" : ""} onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1
                }))} />
                &nbsp;{tuit.likes}
            </div>
            <div className="col handle-text">
                <FontAwesomeIcon icon={faShare} />
            </div>
        </div>
    );
};
export default TuitStats;