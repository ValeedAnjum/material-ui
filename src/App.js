import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";

function App() {
  return (
    <Grid container justify="center">
      <Grid item sm={8}>
        <TableContainer component={Paper} style={{ margin: "10px" }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat (g)</TableCell>
                <TableCell align="right">Carbs (g)</TableCell>
                <TableCell align="right">Protein (g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Anjum</TableCell>
                <TableCell align="right">40</TableCell>
                <TableCell align="right">32.3</TableCell>
                <TableCell align="right">54</TableCell>
                <TableCell align="right">3</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default App;
