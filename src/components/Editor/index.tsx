import React, { useState } from 'react';
import { Row, Col, Card } from 'antd';
import BraftEditor, { EditorState } from 'braft-editor';

import 'braft-editor/dist/index.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';

interface EditProps {
  value?: any;
  onChange?: (value: any) => void;
}

const Editor: React.FC<EditProps> = ({ value = {}, onChange }) => {
  const defaultContent = BraftEditor.createEditorState(value);
  const [editorState, setEditorState] = useState({
    content: defaultContent,
    html: '',
    json: '',
  });

  const handleContentChange = (value: EditorState) => {
    setEditorState((state) => ({
      ...state,
      content: value,
    }));
    onChange?.(value.toHTML());
  };
  return (
    <Card>
      <BraftEditor value={editorState.content} onChange={handleContentChange} />
    </Card>
  );
};

export default Editor;