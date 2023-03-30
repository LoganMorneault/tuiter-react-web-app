import React, { useEffect } from "react";
import { useDispatch, useSelector }
    from "react-redux";
import TuitItem from "./tuit-item";
import { findTuitsThunk }
    from "../../services/tuits-thunks";

const TuitsList = () => {
    const { tuitsData, loading } = useSelector(
        state => {
            return state.tuitsData;
        })

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [dispatch])
    return (
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                tuitsData.map(tuit =>
                    <TuitItem
                        key={tuit._id}
                        tuit={tuit} />)
            }
        </ul>
    );
};
export default TuitsList;