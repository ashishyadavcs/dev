import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
const Codeblock = ({ value, mode = "javascript" }) => {
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
      wrapEnabled
      value={JSON.parse(JSON.stringify(new String(value)), null, 4)}
      fontSize={16}
      style={{
        Height:'100px',
        width: "100%",
        margin: "1rem 0",
        padding:'20px 0'
      }}
     
      name="editor"
      editorProps={{ $blockScrolling: true }}
    />
  );
};

export default Codeblock;
