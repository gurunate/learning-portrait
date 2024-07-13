import { Button, Card, CardContent, Typography } from '@mui/material';

import ImageIcon from '@mui/icons-material/Image';
import React from 'react';
import { Stack } from '@mui/system';
import { isEmpty } from 'lodash';
import numeral from 'numeral';
import { useDropzone } from 'react-dropzone';

export type FileUploadCardProps = {
    onChange: (files: File[]) => void;
};

/**
 * @param {FileUploadCardProps} props
 * @returns {JSX.Element}
 */
const FileUploadCard: React.FC<FileUploadCardProps> = ({
    onChange
}: FileUploadCardProps): JSX.Element => {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

    // React.useEffect(() => {
    //     onChange(acceptedFiles);
    // }, [acceptedFiles, onChange]);

    return (
        <Card sx={{ backgroundColor: 'edge.light'}} className="container">
            <CardContent {...getRootProps({ className: 'dropzone' })}>
                {!isEmpty(acceptedFiles) && (
                    <ul>
                        {acceptedFiles.map(file => (
                            <li key={file?.name}>
                                {file?.name} &mdash;{' '}
                                <Typography variant="caption">
                                    {numeral(file.size).format('0.00b')}
                                </Typography>
                            </li>
                        ))}
                    </ul>
                )}
                <Stack direction="column" spacing={4} m={2}>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                        sx={{padding: '0px'}}
                    >
                        <input {...getInputProps()} />
                        <Typography variant="h6" color="textSecondary">
                            Drag & Drop or upload files
                        </Typography>
                    </Stack>
                    <Button
                        variant="outlined"
                        size="small"
                        sx={{
                            borderColor: 'edge.dark',
                            backgroundColor: 'background.default'
                        }}
                        color="inherit"
                    >
                        Upload
                    </Button>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default React.memo(FileUploadCard);
