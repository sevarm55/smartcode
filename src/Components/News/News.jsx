import Button from "../Button/Button";
import "./News.css";

const News = () => {
    return (
        <div className="news-sec">
            <div className="news">
                <div className="news_left">
                    <h2>Միացե՛ք մեր տեղեկագրին</h2>
                    <span>Ստացեք բացառիկ առաջարկություններ </span>
                </div>
                <div className="news_right">
                    <div className="inputBox">
                        <input type="text" placeholder="Էլեկտրոնային հասցե" />
                        <Button text="բաժանորդագրվել" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
