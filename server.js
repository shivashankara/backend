// import express from "express";

// const app = express();
// const port = 3000;
// app.get("/", (req, res) => {
//   res.send("Application is working ");
// });
// app.listen(5000, () => {
//   console.log("application run in 5000 port ");
// });

import express from "express";
import { Suspense } from "react";

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Application is working ");
});
app.listen(5000, () => {
  console.log(`application run in  ${port}`);
});

useEffect(() => {
  // data fetch
  const userInformation = axios.get("users");

  // cclean up
  return () => {};
}, []);

// HOC
function loadingComponent(component) {
  return function wrapperComponent(props) {
    if (props.isLoading) return <h1>Loadding..</h1>;
    return <component {...props} />;
  };
}

// React memo
const MyComponent = React.memo(({ name }) => {
  return <div> {name}</div>;
});

function fetchData() {
  return async (dispatch) => {
    const response = await fetch("url");
    dispatch({ type: "Success", payload: response.payload });
  };
}

// code splitting
const Othercomponent = React.lazy(() => import("../OtherComponent"));

function App() {
  return (
    <Suspense fallback={"...loading"}>
      <Othercomponent />
    </Suspense>
  );
}

//  handly security and vulnerability
const innerHtml = `<h1>Safe HTML</h1>`;
<div dangerouslySetInnerHTML={{ __html, innerHtml }}></div>;
