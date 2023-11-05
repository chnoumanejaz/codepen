import { useEffect, useState } from 'react';
import SplitPane from 'react-split-pane';
import CodeOutput from './CodeOutput';
import EditorHeader from './EditorHeader';
import NewProjectHeader from './NewProjectHeader';
import { AnimatePresence } from 'framer-motion';

function NewProjectLayout() {
  const [html, setHtml] = useState(`<h3>CodePen! Clone by Nouman Ejaz
  <a href="https://www.linkedin.com/in/chnoumanejaz/" target="_blank"> 
    About me
  </a>
</h3>
  `);
  const [css, setCss] = useState(`body{
  background-color: #d1fae5;
  display: flex;
  justify-content: center;
}
h3{
  background-color: #059669;
  font-family: "monospace";
  padding: 1rem;
  border-radius: .5rem;
  color: #eee;
}`);
  const [js, setJs] = useState("console.log('Welcome to Codepen!')");
  const [output, setOutput] = useState('');

  useEffect(() => {
    const updateOutput = () => {
      const combinedOutput = `
        <html>
          <head>
            <style>${css}</style>
          </head>
          <body>
              ${html}
              <script>${js}</script>
          </body>
        </html>
      `;
      setOutput(combinedOutput);
    };
    updateOutput();
  }, [html, css, js]);

  return (
    <div className="w-screen h-screen flex flex-col items-start justify-start overflow-hidden">
      {/* header section */}
      <NewProjectHeader html={html} css={css} js={js} output={output} />

      {/* coding section */}
      <div>
        {/* horizontal split */}
        <SplitPane split="horizontal" defaultSize="60%">
          {/* top coding section */}
          <SplitPane split="vertical" defaultSize="33%">
            {/* html code */}
            <EditorHeader
              editor="html"
              html={html}
              setHtml={setHtml}
              key="html"
            />
            <SplitPane split="vertical" defaultSize="45%">
              {/* css code */}
              <EditorHeader editor="css" css={css} setCss={setCss} key="css" />
              {/* js code */}
              <EditorHeader
                editor="js"
                js={js}
                setJs={setJs}
                key="javascript"
              />
            </SplitPane>
          </SplitPane>
          {/* bottom result section */}
          <CodeOutput output={output} />
        </SplitPane>
      </div>
    </div>
  );
}

export default NewProjectLayout;
