

function App() {


  return (
    <>
      <div className="mt-32 ml-32 mr-32 bg-pink-400  rounded-2xl ">
         <h1 className='text-center text-white font-extrabold text-[50px]'>Learn ReactJs Desing Patterns </h1>
      </div>

      <div className="m-5 p-5 bg-yellow-400  ml-32 mr-32 rounded-2xl ">
         <h1 className='text-center text-white font-extrabold text-[20px]'>Advantages of Desing Patterns in Programming </h1>
         <ul className="">
          <li className="ttext-center text-purple-800 m-2"> <span className="font-extrabold ">1{")"}</span> Component Reusability: Encourages modular components that can be reused across the app.</li>
          <li className="ttext-center text-purple-800 m-2"> <span className="font-extrabold ">2{")"}</span> State Management Patterns: Helps with efficient state handling using hooks or Redux.</li>
          <li className="ttext-center text-purple-800 m-2"><span className="font-extrabold ">3{")"}</span>Container/Presentational Components: Separates logic and UI for cleaner code.</li>
          <li className="ttext-center text-purple-800 m-2"><span className="font-extrabold ">4{")"}</span>Higher-Order Components (HOCs): Allows code reuse across components for additional functionality</li>
          <li className="ttext-center text-purple-800 m-2"><span className="font-extrabold ">5{")"}</span>Lazy Loading & Code Splitting: Optimizes performance by loading only necessary components.</li>
          <li className="ttext-center text-purple-800 m-2"><span className="font-extrabold ">6{")"}</span>Functional Programming Principles: Promotes declarative and functional approaches for managing state and behavior.</li>
          <li className="ttext-center text-purple-800 m-2"><span className="font-extrabold ">7{")"}</span>Declarative UI Rendering: Simplifies UI updates based on state changes without manual DOM manipulation.</li>
          <li className="ttext-center text-purple-800 m-2"><span className="font-extrabold ">8{")"}</span>Error Boundaries: Catches and handles errors gracefully in the component tree.</li>
          <li className="ttext-center text-purple-800 m-2"><span className="font-extrabold ">9{")"}</span>Atomic Design: Breaks components into smaller, reusable pieces (atoms, molecules, organisms).</li>
          <li className="ttext-center text-purple-800 m-2"><span className="font-extrabold ">10{")"}</span>Testability: Ensures components are easy to test by maintaining separation of concerns.</li>
         </ul>
      </div>
    </>
  );
}

export default App
