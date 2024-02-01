import { useDispatch, useSelector } from "react-redux";
import "./BestTeacher.css";
import { selectUsers } from "../../Store/Slices/UsersData/UsersDataSlice";
import { useEffect } from "react";
import { actionFetchUsers } from "../../Store/Slices/UsersData/Action";
const BestTeacher = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectUsers);

    useEffect(() => {
        dispatch(actionFetchUsers());
    }, []);
    console.log(users);

    return (
        <div className="BestTeacher">
            <div className="best-left">
                {users.slice(0).map((el) => {
                    return (
                        <div className="best-card">
                            <img src={el.image} alt="" />
                        </div>
                    );
                })}
            </div>
            <div className="bestright">
                <h1 style={{ color: "#F3B01A", fontSize: "50px" }}>
                    Լավագույն ուսուցիչ
                </h1>
            </div>
        </div>
    );
};

export default BestTeacher;
