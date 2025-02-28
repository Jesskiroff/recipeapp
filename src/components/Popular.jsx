import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
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
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=16`
    );
    const data = await api.json();
    setPopular(data.recipes);
    console.log(data.recipes);
  };

  return (
    <div>
      
  
          <Wrapper>
            <h3>Popular Picks</h3>
            <Splide 
            options={{
                perPage: 4,
                arrows: false,
                pagination:false,
                drag: "free",
                gap: "5rem"
            }}>
            {popular.map((recipe) => {
              return (
                <SplideSlide>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt=""></img>
                  <Gradient/>
                </Card>
                </SplideSlide>
              );
            })}
            </Splide>
          </Wrapper>
    </div>
  );
}
const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
    min-height: 25rem;
    border-radius: 22rem;
    overflow: hidden;
    position: relative;


  img{
    border-radius: 2rem
    position: absolute;
    left:0;
    width:100%
    height: 100%
    object:fit: cover;
  }

  p{
    position: absolute,
    z-index:10;
    left:50%;
    bottom:0%;
    transform:translate(-50, 0%);
    color: black;
    width:100%
    text-align:center;
    font-weight: 600;
    font-size:1rem;
    height:40%
    display: flex;
    justify-content:center;
    align-items: center;
  }

    `;

const Gradient = styled.div`
z-index: 3;
position: absolute;
width:100%;
height:100%;
background:linear-gradient(rgba(0,0,0,0))
`;

export default Popular;
