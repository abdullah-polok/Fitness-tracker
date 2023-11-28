import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const WeeklySection = () => {
    return (
        <div>
            <div>
                <h3 className="text-3xl text-primary font-semibold mt-4 border-b-8 border-primary">Weekly Schedule</h3>
                <div className='mt-5'>
                    <Tabs>
                        <TabList>
                            <Tab>Monday</Tab>
                            <Tab>Tuesday</Tab>
                            <Tab>Wednesday</Tab>
                            <Tab>Thursday</Tab>
                            <Tab>Friday</Tab>
                        </TabList>
                        <TabPanel>
                            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
                                <button className='btn btn-outline'>Exercise 1</button>
                                <button className='btn btn-outline'>Exercise 2</button>
                                <button className='btn btn-outline'>Exercise 3</button>
                                <button className='btn btn-outline'>Exercise 4</button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
                                <button className='btn btn-outline'>Exercise 1</button>
                                <button className='btn btn-outline'>Exercise 2</button>
                                <button className='btn btn-outline'>Exercise 3</button>
                                <button className='btn btn-outline'>Exercise 4</button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
                                <button className='btn btn-outline'>Exercise 1</button>
                                <button className='btn btn-outline'>Exercise 2</button>
                                <button className='btn btn-outline'>Exercise 3</button>
                                <button className='btn btn-outline'>Exercise 4</button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
                                <button className='btn btn-outline'>Exercise 1</button>
                                <button className='btn btn-outline'>Exercise 2</button>
                                <button className='btn btn-outline'>Exercise 3</button>
                                <button className='btn btn-outline'>Exercise 4</button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
                                <button className='btn btn-outline'>Exercise 1</button>
                                <button className='btn btn-outline'>Exercise 2</button>
                                <button className='btn btn-outline'>Exercise 3</button>
                                <button className='btn btn-outline'>Exercise 4</button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
                                <button className='btn btn-outline'>Exercise 1</button>
                                <button className='btn btn-outline'>Exercise 2</button>
                                <button className='btn btn-outline'>Exercise 3</button>
                                <button className='btn btn-outline'>Exercise 4</button>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
                                <button className='btn btn-outline'>Exercise 1</button>
                                <button className='btn btn-outline'>Exercise 2</button>
                                <button className='btn btn-outline'>Exercise 3</button>
                                <button className='btn btn-outline'>Exercise 4</button>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default WeeklySection;