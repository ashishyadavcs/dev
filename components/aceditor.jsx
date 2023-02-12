import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
const Editor = ({ setdata, value, mode, name }) => {
  return (
    <AceEditor
      setOptions={{
        indentedSoftWrap: false,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
      }}
      mode={mode}
      enableLiveAutocompletion={true}
      theme="monokai"
      placeholder={`Write your ${name} here...`}
      wrapEnabled
      value={JSON.parse(JSON.stringify(new String(value)), null, 4)}
      onChange={(value) => setdata((prev) => ({ ...prev, [name]: value }))}
      fontSize={16}
      width={`100%`}
      name="editor"
      className={`textareas ${name != "html" ? "d-none" : ""}`}
      editorProps={{ $blockScrolling: true }}
    />
  );
};

export default Editor;
