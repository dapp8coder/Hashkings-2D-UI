import React, {useContext} from "react";
import { Redirect } from 'react-router';
import {StateContext} from "../App";
import Divider from '@material-ui/core/Divider';
import EconomyDashboard from './GardenPage/EconomyDashboard'
import GardenActions from './GardenPage/GardenActions.js';
import GrowJournal from './GardenPage/GrowJournal';
import Trading from './GardenPage/Trading';
import DumbDivider from './DumbDivider.js';
 
export const GardenPage = () => {
  const {username} = useContext(StateContext);
  if (username) {
    return (
      <div className="card-blank-green-1">
      <EconomyDashboard />
      <Divider />
      <GrowJournal />
      <DumbDivider />
      <Trading />
      <GardenActions />
      </div>
    );
  } else {
    return (
    <Redirect to='/login'/>
    );
  }
};
