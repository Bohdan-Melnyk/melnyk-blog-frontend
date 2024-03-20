import logo from './logo.svg';
import './App.css';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import BlueFooter from './component/TestComponent';
import GradientHeader from './component/GradientHeader';
import TestForm from './component/TestForm';
import AxiosPost from './component/TestAxiosPost';

function App() {
  return (
    <div className="App">
      <GradientHeader></GradientHeader>
        {/* <Editor></Editor> */}
        <TestForm></TestForm>
        {/* <AxiosPost></AxiosPost> */}
      <BlueFooter></BlueFooter>
    </div>
    
  );
}

export default App;
