import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor } from "react-codemirror2";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import styles from './Editor.module.css';
import { useState } from "react";

const Editor = ({ heading, icons, colors, value, onChange }) => {
  const [isOpen, setClose] = useState(true);

  return (
    <div className={styles.container} style={isOpen ? null : { flexGrow: 0 }}>
      <div className={styles.header}>
        <div className={styles.heading}>
          <span className={styles.icon} style={{ backgroundColor: colors }}>
            {icons}
          </span>
          {heading}
        </div>
        <CloseFullscreenIcon
          fontSize="small"
          style={{ alignSelf: "center", cursor: "pointer" }}
          onClick={() => setClose((prevState) => !prevState)}
        />
      </div>
      <ControlledEditor
        className="controlled-editor"
        value={value}
        onBeforeChange={(editor, data, value) => onChange(value)}
        options={{
          theme: 'material',
          lineNumbers: true,
        }}
      />
    </div>
  );
};

export default Editor;
