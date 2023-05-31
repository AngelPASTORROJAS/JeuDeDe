import { useReducer } from "react";

const initialState = {
  nbDe: 5,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "updateDe":
      return { ...state, nbDe: action.value };
  }
};

const HomePage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p style={{ color: "white" }}>
        Nombre de dé(s)
        <input
          onChange={(e) =>
            dispatch({ type: "updateDe", value: e.target.value })
          }
          type="number"
          value={state.nbDe}
          min="1"
        />
      </p>
      <p style={{ color: "white" }}>{state.nbDe}</p>
      <p style={{ color: "white" }}>
        Nombre d'expérience(s)
        <input type="number" min="1" value={state.nbExperience} />
      </p>
      <button>lancer</button>
      <a style={{ textDecoration: "none" }} href="/statistic">
        <p style={{ color: "white", fontSize: "2em" }}>Resultat</p>
      </a>
    </>
  );
};
export default HomePage;
