import { FaChevronDown, FaCss3, FaHtml5, FaJs } from 'react-icons/fa6';
import { FcSettings } from 'react-icons/fc';
import CodeEditor from './CodeEditor';

function EditorHeader({ editor, js, setJs, html, setHtml, css, setCss }) {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start overflow-y-scroll">
      <div className="w-full flex items-center justify-between ">
        <div className="bg-secondary px-3 py-1 border-t-2 flex items-center justify-center gap-3 border-t-gray-500">
          {editor === 'html' && <FaHtml5 className="text-xl text-red-500" />}
          {editor === 'css' && <FaCss3 className="text-xl text-sky-500" />}
          {editor === 'js' && <FaJs className="text-xl text-yellow-500" />}
          <p className="text-primaryText font-medium capitalize">{editor}</p>
        </div>

        {/* icons */}
        <div className="cursor-pointer flex items-center justify-center gap-5 px-4">
          <FcSettings className="text-xl" />
          <FaChevronDown className="text-xl text-primaryText" />
        </div>
      </div>

      <CodeEditor
        value={editor === 'js' ? js : editor === 'css' ? css : html}
        onChange={(value, viewUpdate) => {
          if (editor === 'js') {
            setJs(value);
          } else if (editor === 'css') {
            setCss(value);
          } else {
            setHtml(value);
          }
        }}
      />
    </div>
  );
}

export default EditorHeader;
