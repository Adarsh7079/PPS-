import React from 'react';
import { Tabs, Tab } from './Tabs';
import OfficeBearers from './OfficeBearers';
import CouncilMembers from './CouncilMembers';
import ZonalRepresent from './ZonalRepresentatives';
import Committees from './Pagecommittee/Committees';
import Commissions from './Commissions';
import TaskForce from './PageTaskForces/TaskForce';
import Specialty from './Specialty/Specialty';
const CardTab = () => {
  return (
    <div>
      <Tabs>
        <Tab label="Office Bearers">
          <OfficeBearers />
        </Tab>
        <Tab label="Direct Council Members">
          <CouncilMembers />
        </Tab>
        <Tab label="Zonal Representatives">
          <div className="py-4">
            <h2 className="text-lg font-medium mb-2">Tab 3 Content</h2>
            <ZonalRepresent />
          </div>
        </Tab>
        <Tab label="Committees">
          <div className="py-4">
            <Committees />
          </div>
        </Tab>
        <Tab label="Task Forces">
          <div className="py-4">
            <TaskForce />
          </div>
        </Tab>
        <Tab label="Specialty Sections">
          <div className="py-4">
            <Specialty />
          </div>
        </Tab>
        <Tab label="Commissions & Tribunal">
          <div className="py-4">
            <Commissions />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default CardTab;