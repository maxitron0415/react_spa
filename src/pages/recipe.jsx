import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";
import { Preloader } from "../components/preloader";

function Recipe() {
    const [recipe, setRecipe] = useState({});
    const { id } = useParams();
    const navigte = useNavigate();
    const goBack = () => navigte(-1);

    useEffect(() => {
        getMealById(id).then((data) => setRecipe(data.meals[0]));
    }, [id]);

    return (
        <>
            {!recipe.idMeal ? (
                <Preloader />
            ) : (
                <div className="recipe">
                    <div className="first-recipe-row">
                        <div>
                            <h1>{recipe.strMeal}</h1>
                            <h6>Category: {recipe.strCategory}</h6>
                            {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
                        </div>
                        <img className="big-image-recipe" src={recipe.strMealThumb} alt={recipe.strMeal} />
                    </div>
                    <p>{recipe.strInstructions}</p>
                    <table className="centered">
                        <thead>
                            <tr>
                                <th>Ingredients</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(recipe).map((key) => {
                                if (key.includes("Ingredient") && recipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>
                    {recipe.strYoutube ? (
                        <div className="row video-YT-block">
                            <h4 style={{ margin: "2rem 0 1.5rem" }}>Video Recipe</h4>
                            <iframe
                                title={id}
                                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                                allowFullScreen
                                className="YT-frame-video"
                            />
                        </div>
                    ): null}
                </div>
            )}
            <div className="btn-block">
                <button className="btn" onClick={goBack}>Go Back</button>
            </div>
        </>
    );
}

export { Recipe };