import React, { useEffect, useState } from "react";
import {Modal,Select, MenuItem} from "@material-ui/core";

function Compare(){
    let firstPlanetName = '';
    let secondPlanetName = '';

    return(
        <div>
            <label> Select Planets to compare</label>
            <br></br>
            <Select
             inputProps={{
                name: 'age',
                id: 'filled-age-native-simple',
              }}>
                <MenuItem disabled value=""> <em>Planet 1</em></MenuItem>
                <MenuItem>Earth</MenuItem>
                <MenuItem>Mercury</MenuItem>
                <MenuItem>Mars</MenuItem>
                <MenuItem>Jupiter</MenuItem>
                <MenuItem>Venus</MenuItem>
                <MenuItem>Neptune</MenuItem>
                <MenuItem>Saturn</MenuItem>
                <MenuItem>Uranus</MenuItem>
            </Select>
            vs
            <Select>
                <MenuItem>Earth</MenuItem>
                <MenuItem>Mercury</MenuItem>
                <MenuItem>Mars</MenuItem>
                <MenuItem>Jupiter</MenuItem>
                <MenuItem>Venus</MenuItem>
                <MenuItem>Neptune</MenuItem>
                <MenuItem>Saturn</MenuItem>
                <MenuItem>Uranus</MenuItem>
            </Select>
        </div>
    )
}

export default Compare;