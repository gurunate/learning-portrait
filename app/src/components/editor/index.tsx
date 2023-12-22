import {
    Editor as TinyEditor,
    IAllProps as TinyEditorProps
} from '@tinymce/tinymce-react';

import React from 'react';

export type EditorProps = TinyEditorProps & {
    defaultValue?: string;
};

const API_KEY = 'hqonybajv3lv4wbbc3xmjm1uhfv3fmj6l1rc4vsbpqcs6psq';

/**
 * @param {EditorProps} props
 * @returns {JSX.Element}
 */
const Editor: React.FC<EditorProps> = ({
    defaultValue,
    ...props
}: EditorProps): JSX.Element => (
    <TinyEditor
        {...props}
        apiKey={API_KEY}
        init={{
            height: '100%',
            menubar: false,
            statusbar: false,
            toolbar: true
            // plugins: 'code image link lists',
            // toolbar:
            //     'undo redo | styles | bold italic underline forecolor backcolor | link image code | align | bullist numlist'
        }}
        initialValue={defaultValue}
    />
);

export default React.memo(Editor);
