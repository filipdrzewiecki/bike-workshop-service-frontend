import '../../Css/index.css'
import './body.css'
import React from 'react';
import { Route, Switch } from "react-router-dom";
//Personal bicycles
import PersonalBicycles from '../../Content/Bicycles/Personal/BicycleList.jsx';
import CreateBicycle from '../../Content/Bicycles/createBicycle.jsx';
import PersonalBicycle from '../../Content/Bicycles/Personal/Bicycle.jsx';
import UpdateBicycle from '../../Content/Bicycles/updateBicycle.jsx';
import DeleteBicycle from '../../Content/Bicycles/deleteBicycle.jsx';
import LoginPage from '../Security/LoginPage.jsx'

import BicyclePart from '../../Content/Bicycles/fetchBicyclePart.jsx';
import AddPartToBike from '../../Content/Bicycles/addPartToBicycle.jsx';
import DeleteBicyclePart from '../../Content/Bicycles/deleteBicyclePart.jsx';

//Bicycles
import Bicycles from '../../Content/Bicycles/bicycles.jsx';
//Parts
import OfficialParts from '../../Content/Parts/Official/PartsList.jsx';
import PersonalParts from '../../Content/Parts/Personal/PartsList.jsx';
import FetchPart from '../../Content/Parts/fetchPart.jsx';
import CreatePart from '../../Content/Parts/createPart.jsx';
import AddExistingPartToBicycle from '../../Content/Parts/addExistingPartToBicycle.jsx';


export default () => {
    return (
        <div className="pageBody">
            <Switch>
                {/* LOGIN */}
                <Route path="/login" exact component={LoginPage} />
                
                {/* PERSONAL BICYCLES */}
                <Route path="/" exact component={PersonalBicycles} />
                <Route path="/:user/bicycles" exact component={PersonalBicycles} />
                <Route path="/:user/bicycles/new" exact component={CreateBicycle} />
                <Route path="/:user/bicycles/:bike" exact component={PersonalBicycle} />
                <Route path="/:user/bicycles/:bike/edit" exact component={UpdateBicycle} />
                <Route path="/:user/bicycles/:bike/delete" exact component={DeleteBicycle} />
                <Route path="/:user/bicycles/:bike/:part" exact component={BicyclePart} />
                <Route path="/:user/bicycles/:bike/:part/new" exact component={AddPartToBike} />
                <Route path="/:user/bicycles/:bike/:part/delete" exact component={DeleteBicyclePart} />

                {/* OFFICIAL BICYCLES */}
                <Route path="/bicycles" exact component={Bicycles} />

                {/* OFFICIAL PARTS */}
                <Route path="/:user/parts" exact component={PersonalParts} />


                {/* OFFICIAL PARTS */}
                <Route path="/:user/parts" exact component={PersonalParts} />

                <Route path="/parts" exact component={OfficialParts} />
                <Route path="/parts/:part/new" exact component={CreatePart} />
                <Route path="/parts/:part/:id" exact component={FetchPart} />
                <Route path="/parts/:part/:partId/add" exact component={AddExistingPartToBicycle} />
            </Switch>
        </div>
    );
}