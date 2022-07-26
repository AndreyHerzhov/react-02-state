import Counter from "./Counter/Counter";

export const App = () => {
  return (
    <div
        style={{
           
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101'
        }}
      >
        <h1>Состояние компонента</h1>
        <Counter initialValue={23}/>
    </div>
  );
};
