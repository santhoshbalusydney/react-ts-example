import React from 'react';
import './App.css';
import { Counter } from './Counter';
import { ReducerExample } from './ReducerExample';

//Render props
//Counter renders the children

const App: React.FC = () => {
  return (
    <div>
      {/* <Counter>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter> */}
      <ReducerExample></ReducerExample>
    </div>
  );
};

export default App;
