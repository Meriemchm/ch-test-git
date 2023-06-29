import React from "react";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-red-100 flex justify-center items-center">
        Hello world!
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4">
        <div className="bg-blue-200 flex flex-col ">
          <h2>title</h2>
          <p>description</p>
          <p>sousdescription</p>
          <img src="localstorage.JPG" alt="oui" />
          <img src="localstorage.JPG" alt="oui" />
        </div>
      </div>
    </>
  );
};

export default App;
