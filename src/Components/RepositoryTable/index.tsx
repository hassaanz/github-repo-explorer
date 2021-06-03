import React, {FC} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export type Repository = {
    name: string;
    forks: number ;
    url: string;
    stars: number;
}

type RepositoryTableProps = {
    repositories: Repository[]
}

const RepositoryTable: FC<RepositoryTableProps> = ({repositories}) => {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Name </TableCell>
                        <TableCell align="left">Stars ⭐</TableCell>
                        <TableCell align="left">Forks 🍴</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {repositories.map((repository) => (
                        <TableRow key={repository.name}>
                            <TableCell component="th" scope="row">{repository.name}</TableCell>
                            <TableCell align="left">{repository.stars} ⭐</TableCell>
                            <TableCell align="left">{repository.forks} 🍴</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default RepositoryTable
