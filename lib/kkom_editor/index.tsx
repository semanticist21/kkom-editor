import "./index.css";

// editor
import { useEditor, EditorContent, Editor, BubbleMenu } from "@tiptap/react";

// extensions
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";

const KkomEditor = () => {
  const editor = useEditor({
    extensions: [Document, Paragraph, Text],
  });

  return <div className="tw-text-red-500">반갑소춘배요</div>;
};

export default KkomEditor;
