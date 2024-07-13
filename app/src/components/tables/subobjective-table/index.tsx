import {
    Box,
    Button,
    Collapse,
    Grid,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
    Typography
} from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Rating from '@/components/rating';
import RatingSelect from '@/components/rating-select';
import { Objective as TObjective } from '@/types';
import { evidenceList } from '@/lib/fixtures';
import { faker } from '@faker-js/faker';
import { useState } from 'react';

export type SubObjectivesTableProps = {
    subObjectives: TObjective[];
};

const uploaded = new Date();
const studentRating = faker.helpers.arrayElement(['T', 'M', 'A', 'E']);
const teacherRating = faker.helpers.arrayElement(['T', 'M', 'A', 'E']);

export const COLOR_MAP: { [key: string]: { color: 'error' | 'success' | 'info' | 'warning' | 'default' | 'primary' | 'secondary'; label: string } } = {
        'T': {
            color: 'error',
            label: 'Needs help',
        },
        'M': {
            color: 'success',
            label: 'Mastery',
        },
        'A': {
            color: 'info',
            label: 'Approaching',
        },
        'E': {
            color: 'warning',
            label: 'Not yet',
        }
    };

const Row = (props: { row: any }) => {
    const evidence = evidenceList(3);  
    const { row } = props;
    const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell sx={{borderTop: 'none'}}>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          <Typography variant='body1'>{row.uploaded?.toLocaleDateString()}</Typography>
        </TableCell>
        <TableCell variant='head' align='left'>
            <Typography variant='body1' sx={{ fontWeight: 600 }}>{row.name}</Typography>
            <Typography variant='body1'>{row.description}</Typography>
        </TableCell>
        <TableCell align='left'>
            <Rating label={COLOR_MAP[studentRating].label} variant='filled' color={COLOR_MAP[studentRating].color}  />
        </TableCell>
        <TableCell align='left'>
            <RatingSelect defaultValue={COLOR_MAP[teacherRating].label} />
        </TableCell>
        <TableCell align='right' />
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 0 }}>
              <Table size='small' aria-label='purchases'>
                <TableBody>
                  {evidence.map((evidence) => (
                    <TableRow key={evidence.name}>
                        <TableCell component='th' scope='row' width={150} />
                        <TableCell align='left' component='th' scope='row'>
                            {evidence.name} - {uploaded.toLocaleDateString()}
                        </TableCell>
                        <TableCell width={100}>
                            <Rating label={COLOR_MAP[studentRating].label} variant='outlined' color={COLOR_MAP[studentRating].color}  />
                        </TableCell>
                        <TableCell width={100}>
                            <RatingSelect defaultValue={COLOR_MAP[teacherRating].label} />
                        </TableCell>
                        <TableCell width={100} />
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

/**
 * @param {SubObjectivesTableProps} props
 * @returns {JSX.Element}
 */
const SubObjectivesTable: React.FC<SubObjectivesTableProps> = ({
    subObjectives
}: SubObjectivesTableProps): JSX.Element => (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Table sx={{ minWidth: 650 }} aria-label='objectives table'>
                <TableHead>
                        <TableRow>
                            <TableCell align='right' width={150}>
                                <Typography variant='subtitle1'>Last Updated</Typography>
                            </TableCell>
                            <TableCell align='left'>
                                <Typography variant='subtitle1'>Subobjective</Typography>
                            </TableCell>
                            <TableCell width={100}>
                                <Typography variant='subtitle1'>Student</Typography>
                            </TableCell>
                            <TableCell width={100}>
                                <Typography variant='subtitle1'>Teacher</Typography>
                            </TableCell>
                            <TableCell width={100} />
                        </TableRow>
                    </TableHead>
                <TableBody>
                    {subObjectives.map((subojective) => (
                        <Row key={subojective.id} row={subojective} />
                    ))}
                </TableBody>
            </Table>
        </Grid>
    </Grid>
);

export default SubObjectivesTable;
