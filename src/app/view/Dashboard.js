import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TabPanel from '../components/TabPanel'
import Button from '@mui/material/Button';
import { DateRangePicker } from 'react-date-range';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { formatDate } from '../../helpers/main';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Dashboard = (props) => {
    return (
        <Box component="main" sx={{ width: "100%" }} className="dashboard_box">
            <Box className="header_content_box">
                <Toolbar />
                <Typography
                    variant="h5"
                    component="div"
                    style={{ fontWeight: 600, color: "white" }}
                    className="header_padding"
                >
                    Dashboard
                </Typography>
                <Divider />
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="header_tabs_box">
                    <Tabs
                        value={props.state.tabValue}
                        onChange={props.handleChangeTab}
                        TabIndicatorProps={{ style: { background: 'white' } }}
                    >
                        <Tab label={<span className="tab_element">Chart</span>} {...a11yProps(0)} />
                        <Tab label={<span className="tab_element">Report</span>} {...a11yProps(1)} />
                    </Tabs>
                </Box>
            </Box>
            <TabPanel value={props.state.tabValue} index={0} className="dashboard_panel_calendar">
                <Button variant="contained" className="mui_button" sx={{ background: "#7ba63d" }}>Configura raport</Button>
                <div className="range_picker_container">
                    <div className="range_picker_result" onClick={() => props.toggleDD(!props.state.open)}>
                        <div className="range_picker_result_content">
                            <span>{formatDate(props.state.dateRange.startDate)}</span>
                            <span> - </span>
                            <span>{formatDate(props.state.dateRange.endDate)}</span>
                        </div>
                        <ArrowDropDownIcon />
                    </div>
                    {props.state.open ? (
                        <div className="range_picker">
                            <DateRangePicker
                                ranges={[props.state.dateRange]}
                                onChange={props.handleSelect}
                                rangeColors={["#7ba63d"]}
                                showDateDisplay={false}
                            />
                        </div>
                    ) : ""}
                </div>
            </TabPanel>
            <TabPanel value={props.state.tabValue} index={1}>
            </TabPanel>
        </Box>
    )
}

export default Dashboard;