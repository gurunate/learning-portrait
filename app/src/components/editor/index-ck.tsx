import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React from 'react';

export type EditorProps = unknown;

/**
 * @param {EditorProps} props
 * @returns {JSX.Element}
 */
const Editor: React.FC<EditorProps> = (props: EditorProps): JSX.Element => (
    <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor&nbsp;5!</p>"
        onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
        }}
        onChange={event => {
            console.log(event);
        }}
        onBlur={(event, editor) => {
            console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
            console.log('Focus.', editor);
        }}
    />
);

export default React.memo(Editor);
