import { useEffect } from "react";

function Popular() {

    useEffect(() => {
        getPopular();
    }, []); //An empty dependency array 
            //means that the effect does not depend on any values from the component scope. 
            //Therefore, it should only run once after the initial render and not on any subsequent renders.
    const getPopular = async () => {
        const api = await fetch(
            `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
        );
        const data = await api.json();
        console.log(data);
    };
    return <div>Popular</div>;
    }

export default Popular;
