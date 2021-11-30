import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TabPanel from '../components/TabPanel'
import Button from '@mui/material/Button';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Dashboard = (props) => {
    return (
        <Box component="main" sx={{ width: "100%" }}>
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
            <TabPanel value={props.state.tabValue} index={0}>
            </TabPanel>
            <TabPanel value={props.state.tabValue} index={1}>
            </TabPanel>
        </Box>
    )
}

export default Dashboard;