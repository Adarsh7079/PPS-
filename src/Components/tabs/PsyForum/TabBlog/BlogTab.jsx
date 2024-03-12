import React from 'react';
import { Tabs, Tab } from './Tabs';
import AllCards from './AllCards';
import IpsEducation from './IpsEducation';

const BlogTab = () => {
  return (
    <div className='w-full  flex mx-auto'>
      <Tabs  className="w-2/3" >
        <Tab label="All" >
          <AllCards/>
        </Tab>
        <Tab label="IPS Education Blog">
          <IpsEducation/>
        </Tab>
      </Tabs>
    </div>
  );
};

export default BlogTab;