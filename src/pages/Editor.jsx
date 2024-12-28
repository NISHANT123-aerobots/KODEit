import React, { useState } from 'react';
import EditorNavbar from '../components/EditorNavbar';
// Import the Monaco editor or other editor library
import Editor from '@monaco-editor/react';

const EditorComponent = () => {
  const [activeTab, setActiveTab] = useState('HTML');
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  const tabs = ['HTML', 'CSS', 'JavaScript'];

  const generateSrcDoc = () => `
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

  return (
    <>
      <EditorNavbar />

      <div className="flex min-h-screen">
    
        <div className="left w-1/2 p-5 bg-gray-800 text-white">
        
          <div className="flex items-center gap-2 bg-[#1A1919] p-2 rounded-md">
            {tabs.map((tab) => (
              <div
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`tab cursor-pointer px-4 py-2 rounded-md ${
                  activeTab === tab
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                }`}
              >
                {tab}
              </div>
            ))}
          </div>

         
          <div className="mt-5">
            {activeTab === 'HTML' && (
              <Editor
                height="90vh"
                defaultLanguage="html"
                value={html}
                onChange={(value) => setHtml(value || '')}
              />
            )}
            {activeTab === 'CSS' && (
              <Editor
                height="90vh"
                defaultLanguage="css"
                value={css}
                onChange={(value) => setCss(value || '')}
              />
            )}
            {activeTab === 'JavaScript' && (
              <Editor
                height="90vh"
                defaultLanguage="javascript"
                value={js}
                onChange={(value) => setJs(value || '')}
              />
            )}
          </div>
        </div>

        
        <iframe
          className="w-1/2 min-h-screen"
          title="Preview"
          srcDoc={generateSrcDoc()}
          frameBorder="0"
          sandbox="allow-scripts"
        ></iframe>
      </div>
    </>
  );
};

export default EditorComponent;
