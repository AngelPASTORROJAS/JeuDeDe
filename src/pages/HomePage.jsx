import { useReducer } from "react";

const initialState = {
  nbDe: 5,
  nbExperience: 1,
  messageErrorDe: "",
  messageErrorExperience: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "updateNbDe":
      return {
        ...state,
        messageErrorDe:
          isNaN(action.value) || action.value < 3
            ? "Le nombre de dé(s) doit être un entier supérieur à 3."
            : "",
        nbDe: action.value,
      };
    case "updateNbExperience":
      return {
        ...state,
        messageErrorExperience:
          isNaN(action.value) || action.value < 1
            ? "Le nombre d'experience(s) doit être un entier supérieur à 1."
            : "",
        nbExperience: action.value,
      };
  }
};

const HomePage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p style={{ color: "red" }}>{state.messageErrorDe}</p>
      <p style={{ color: "white" }}>
        Nombre de dé(s)
        <input
          onChange={(e) =>
            dispatch({ type: "updateNbDe", value: e.target.value })
          }
          type="number"
          value={state.nbDe}
          min="3"
        />
      </p>
      <p style={{ color: "red" }}>{state.messageErrorExperience}</p>
      <p style={{ color: "white" }}>
        Nombre d'expérience(s)
        <input
          onChange={(e) =>
            dispatch({ type: "updateNbExperience", value: e.target.value })
          }
          type="number"
          min="1"
          value={state.nbExperience}
        />
      </p>
      <button>lancer</button>
      <a style={{ textDecoration: "none" }} href="/statistic">
        <p style={{ color: "white", fontSize: "2em" }}>Resultat</p>
      </a>
    </>
  );
};
export default HomePage;
