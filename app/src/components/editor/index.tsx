import {
    MenuButtonBold,
    MenuButtonItalic,
    MenuControlsContainer,
    MenuDivider,
    MenuSelectHeading,
    RichTextEditorProvider,
    RichTextField
} from 'mui-tiptap';

import React from 'react';
import StarterKit from '@tiptap/starter-kit';
import { useEditor } from '@tiptap/react';

export type EditorProps = {
    defaultValue?: string;
    placeholder?: string;
};

/**
 * @param {EditorProps} props
 * @returns {JSX.Element}
 */
const Editor: React.FC<EditorProps> = ({
    defaultValue,
    placeholder,
    ...props
}: EditorProps): JSX.Element => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: defaultValue
    });

    return (
        <RichTextEditorProvider editor={editor}>
            <RichTextField
                controls={
                    <MenuControlsContainer>
                        <MenuSelectHeading />
                        <MenuDivider />
                        <MenuButtonBold />
                        <MenuButtonItalic />
                        {/* Add more controls of your choosing here */}
                    </MenuControlsContainer>
                }
            />
        </RichTextEditorProvider>
    );
};

export default React.memo(Editor);
