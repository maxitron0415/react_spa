import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilteredCategory } from "../api";

import { Preloader } from "../components/preloader";
import { MealList } from "../components/mealList";
import Arrow from "../imgs/fi-br-arrow-small-left.svg";

function Category() {
    const { name } = useParams();
    const [ meals, setMeals ] = useState([]);
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));
    }, [name]);

    return (
        <>
            <button className="btn arrow-btn" onClick={goBack}><img src={ Arrow }/></button>
            {!meals.length ? <Preloader /> : <MealList meals={meals} />}
            <div className="btn-block">
                <button className="btn" onClick={goBack}>Go back</button>
            </div>
        </>
    );
}

export { Category };