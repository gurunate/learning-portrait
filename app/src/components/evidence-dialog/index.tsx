import {
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogProps,
    DialogTitle,
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    TextField,
    Tooltip,
    Typography
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import { Editor } from '@tinymce/tinymce-react';
import ImageIcon from '@mui/icons-material/Image';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import React from 'react';
import { Course as TCourse } from '@/types/course';
import { Objective as TObjective } from '@/types/objective';

export type EvidenceDialogProps = DialogProps & {
    courses: TCourse[];
    initialValue?: string;
    objectives: TObjective[];
    uploadedOn?: string;
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250
        }
    }
};

/**
 *
 * @param {EvidenceDialogProps} props
 * @returns {JSX.Element}
 */
const EvidenceDialog: React.FC<EvidenceDialogProps> = ({
    courses: coursesProp,
    initialValue,
    objectives: objectivesProp,
    onClose,
    open,
    uploadedOn
}: EvidenceDialogProps): JSX.Element => {
    const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
        // @ts-ignore
        onClose(event);
    };

    const [courses, setCourses] = React.useState<string[]>([]);

    const handleCoursesChange = (event: SelectChangeEvent<typeof courses>) => {
        const {
            target: { value }
        } = event;
        console.log({ value });

        setCourses(typeof value === 'string' ? value.split(',') : value);
    };

    const [objectives, setObjectives] = React.useState<string[]>([]);

    const handleObjectivesChange = (
        event: SelectChangeEvent<typeof objectives>
    ) => {
        const {
            target: { value }
        } = event;

        setObjectives(typeof value === 'string' ? value.split(',') : value);
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="lg">
            <Box p={2}>
                <DialogTitle>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography variant="h3">Evidence</Typography>
                        <Tooltip title="Close">
                            <IconButton
                                aria-label="close"
                                onClick={handleClose}
                            >
                                <CloseIcon sx={{ width: 30, height: 30 }} />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </DialogTitle>
                <DialogContent>
                    <Grid container direction="row" spacing={4}>
                        <Grid
                            item
                            sm={4}
                            container
                            direction="column"
                            justifyContent="flex-start"
                            alignItems="stretch"
                            spacing={2}
                        >
                            <Grid item>
                                <Card sx={{ backgroundColor: 'edge.light' }}>
                                    <CardContent>
                                        <Stack
                                            direction="column"
                                            spacing={4}
                                            m={4}
                                        >
                                            <Stack
                                                direction="column"
                                                justifyContent="center"
                                                alignItems="center"
                                                spacing={1}
                                            >
                                                <ImageIcon
                                                    sx={{
                                                        width: 45,
                                                        height: 45,
                                                        color: 'edge.dark'
                                                    }}
                                                />
                                                <Typography
                                                    variant="h6"
                                                    color="textSecondary"
                                                >
                                                    Choose a file
                                                </Typography>
                                            </Stack>
                                            <Button
                                                variant="outlined"
                                                size="small"
                                                sx={{
                                                    borderColor: 'edge.dark',
                                                    backgroundColor:
                                                        'background.default'
                                                }}
                                                color="inherit"
                                            >
                                                Upload
                                            </Button>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item container spacing={2}>
                                <Grid item sm={12}>
                                    <TextField
                                        label="Evidence Name"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item sm={12}>
                                    <InputLabel id="course-label">
                                        Course
                                    </InputLabel>
                                    <FormControl fullWidth>
                                        <Select
                                            labelId="course-label"
                                            id="course"
                                            multiple
                                            value={courses}
                                            onChange={handleCoursesChange}
                                            renderValue={selected => (
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexWrap: 'wrap',
                                                        gap: 0.5
                                                    }}
                                                >
                                                    {selected.map(value => (
                                                        <Chip
                                                            key={value}
                                                            label={
                                                                coursesProp.find(
                                                                    ({ id }) =>
                                                                        id ===
                                                                        value
                                                                )?.name
                                                            }
                                                        />
                                                    ))}
                                                </Box>
                                            )}
                                            MenuProps={MenuProps}
                                        >
                                            {coursesProp.map(({ id, name }) => (
                                                <MenuItem key={id} value={id}>
                                                    {name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item sm={12}>
                                    <InputLabel id="objective-label">
                                        Objective
                                    </InputLabel>
                                    <FormControl fullWidth>
                                        <Select
                                            labelId="objective-label"
                                            id="objective"
                                            multiple
                                            value={objectives}
                                            onChange={handleObjectivesChange}
                                            renderValue={selected => (
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexWrap: 'wrap',
                                                        gap: 0.5
                                                    }}
                                                >
                                                    {selected.map(value => (
                                                        <Chip
                                                            key={value}
                                                            label={
                                                                objectivesProp.find(
                                                                    ({ id }) =>
                                                                        id ===
                                                                        value
                                                                )?.name
                                                            }
                                                        />
                                                    ))}
                                                </Box>
                                            )}
                                            MenuProps={MenuProps}
                                        >
                                            {objectivesProp.map(
                                                ({ id, name }) => (
                                                    <MenuItem
                                                        key={id}
                                                        value={id}
                                                    >
                                                        {name}
                                                    </MenuItem>
                                                )
                                            )}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                {uploadedOn && (
                                    <Grid item sm={12} mt={2}>
                                        <Typography
                                            variant="h6"
                                            color="textSecondary"
                                        >
                                            <Stack
                                                direction="row"
                                                // justifyContent="center"
                                                alignItems="center"
                                                spacing={2}
                                            >
                                                <InsertInvitationIcon
                                                    sx={{
                                                        color: 'text.secondary'
                                                    }}
                                                />
                                                <span>
                                                    Uploaded on {uploadedOn}
                                                </span>
                                            </Stack>
                                        </Typography>
                                    </Grid>
                                )}
                            </Grid>
                        </Grid>
                        <Grid item sm={8}>
                            <Editor
                                apiKey="hqonybajv3lv4wbbc3xmjm1uhfv3fmj6l1rc4vsbpqcs6psq"
                                init={{
                                    height: '100%',
                                    menubar: false,
                                    statusbar: false,
                                    toolbar: true
                                }}
                                initialValue={initialValue}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" onClick={handleClose}>
                        Save Draft
                    </Button>
                    <Button variant="contained" onClick={handleClose}>
                        Publish
                    </Button>
                </DialogActions>
            </Box>
        </Dialog>
    );
};

export default EvidenceDialog;
