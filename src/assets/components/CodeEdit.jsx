import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { EditorView } from "@codemirror/view";

const CodeEdit = () => {
  const value = `<!-- Hello and welcome to mochibun.me! -->
<!-- Cookies help me deliver the best experience on my webpage. By using my webpage, you agree to the use of cookies. -->
<!-- This is a fully functional markdown text editor with code highlighting ;) -->
<!-- Scroll down to continue -->
`;

  const extensions = [
    markdown({
      base: markdownLanguage,
      codeLanguages: languages,
    }),
    EditorView.lineWrapping,
  ];

  return <CodeMirror value={value} extensions={extensions} theme={dracula} />;
};

export default CodeEdit;
