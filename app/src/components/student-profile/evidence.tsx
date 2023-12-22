import {
    Avatar,
    Checkbox,
    Grid,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
    Typography
} from '@mui/material';

import RatingSelect from '../rating-select';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { Evidence as TEvidence } from '@/types';
import { formatDate } from '@/lib/utils';

export type StudentEvidenceProps = {
    evidence?: TEvidence[];
};

/**
 *
 * @param {StudentEvidenceProps} props
 * @returns {JSX.Element}
 */
const StudentEvidence: React.FC<StudentEvidenceProps> = ({
    evidence = []
}: StudentEvidenceProps): JSX.Element => {
    return (
        <Grid container spacing={4}>
            <Grid item md={12}>
                <Typography variant="h3">Evidence</Typography>
            </Grid>
            <Grid item md={6} display="flex">
                <Table
                    sx={{ minWidth: 700 }}
                    aria-label="student evidence table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" width={300}>
                                Name
                            </TableCell>
                            <TableCell align="left" width={150}>
                                Uploaded
                            </TableCell>
                            <TableCell align="center" width={150}>
                                Teacher Rating
                            </TableCell>
                            <TableCell align="center" width={150}>
                                Student Rating
                            </TableCell>
                            <TableCell width={100} />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {evidence?.map(
                            ({
                                id,
                                name,
                                uploaded,
                                teacherRating,
                                studentRating,
                                starred
                            }) => (
                                <TableRow key={id}>
                                    <TableCell variant="head" align="left">
                                        <Stack
                                            direction="row"
                                            spacing={2}
                                            alignItems="center"
                                        >
                                            <Avatar> </Avatar>
                                            <Typography>{name}</Typography>
                                        </Stack>
                                    </TableCell>
                                    <TableCell align="left">
                                        {uploaded && (
                                            <Typography>
                                                {formatDate(uploaded)}
                                            </Typography>
                                        )}
                                    </TableCell>
                                    <TableCell align="center">
                                        <RatingSelect
                                            defaultValue={teacherRating}
                                        />
                                    </TableCell>
                                    <TableCell align="center">
                                        <RatingSelect
                                            defaultValue={studentRating}
                                        />
                                    </TableCell>
                                    <TableCell align="right">
                                        <Tooltip
                                            title={
                                                starred
                                                    ? 'Starred'
                                                    : 'Not starred'
                                            }
                                        >
                                            <Checkbox
                                                defaultChecked={starred}
                                                icon={
                                                    <StarBorderIcon
                                                        fontSize="small"
                                                        sx={{
                                                            color: 'primary.main'
                                                        }}
                                                    />
                                                }
                                                checkedIcon={
                                                    <StarIcon
                                                        fontSize="small"
                                                        sx={{
                                                            color: 'primary.main'
                                                        }}
                                                    />
                                                }
                                            />
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            )
                        )}
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    );
};

export default StudentEvidence;
