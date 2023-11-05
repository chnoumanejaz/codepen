import { javascript } from '@codemirror/lang-javascript';
import CodeMirror from '@uiw/react-codemirror';

function CodeEditor({ onChange, value }) {
  return (
    <div className="w-full px-2">
      <CodeMirror
        value={value}
        height="400px"
        theme="dark"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
    </div>
  );
}

export default CodeEditor;
