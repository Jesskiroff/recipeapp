import { useEffect, useState } from 'react';
import styled from 'styled-components';

//use state  is essetially like a var that holds info but its advantage is that it reacts to th ui

function Popular() {
  const [popular, setPopular] = useState([]);

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
    setPopular(data.recipes);
  };

  return (
    <div>
      {popular.map((recipe) => {
        return (
          <Wrapper>
            <h3>Popular Picks</h3>
            {popular.map((recipe) => {
              return (
                <Card>
                  <p>{recipe.title}</p>
                </Card>
              );
            })}
          </Wrapper>
        );
      })}
    </div>
  );
}
const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
    min-height: 25rem
    border-radius: 22rem
    `;
export default Popular;
