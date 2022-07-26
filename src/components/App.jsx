import Counter from "./Counter/Counter";
import Dropdown from "./Dropdown/Dropdown"
import ColorPicker from "./ColorPicker/ColorPicker"

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

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
        <Counter initialValue={0}/>
        <Dropdown/>
        <ColorPicker options={colorPickerOptions}/>
    </div>
  );
};
