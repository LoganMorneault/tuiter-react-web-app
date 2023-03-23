import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply, faHeart, faRetweet, faShare } from "@fortawesome/free-solid-svg-icons";

const TuitStats = ({ tuit }) => {
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
                <FontAwesomeIcon icon={faHeart} color={tuit.liked ? "crimson" : ""} />
                &nbsp;{tuit.likes}
            </div>
            <div className="col handle-text">
                <FontAwesomeIcon icon={faShare} />
            </div>
        </div>
    );
};
export default TuitStats;