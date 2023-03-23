import React from "react";
import TuitStats from "./tuit-stats";
import "../../index.css";
import { useDispatch } from "react-redux";
import { deleteTuit } from "./tuits-reducer";


const TuitItem = (
    { tuit }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <li className="list-group-item">
            <div className="mb-3">
                <img src={`/images/${tuit.image}`} alt={tuit.userName} className="tuit-avatar-icon" />
                <div className="fw-bold">{tuit.userName}&nbsp;&nbsp;
                    <span className="fw-normal handle-text">{tuit.handle}&nbsp;{tuit.time}</span>
                </div>
                <div className="tuit-text">
                    {tuit.tuit}
                </div>
                <i className="bi bi-x-lg float-end"
                    onClick={() => deleteTuitHandler(tuit._id)}></i>
            </div>
            <TuitStats key={tuit._id}
                tuit={tuit} />
        </li>
    );
};
export default TuitItem;