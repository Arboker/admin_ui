import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SupportTable from '../components/SupportTabel'
import Card from '@mui/material/Card';

const Support = (props) => {
    return (
        <Box component="main" sx={{ width: "100%" }}>
            <Box>
                <Toolbar />
                <Box className="header_content_box">
                    <Typography
                        variant="h5"
                        component="div"
                        style={{ fontWeight: 600, color: "white" }}
                        className="header_padding"
                    >
                        Suport
                    </Typography>
                </Box>
                {!props.state.loading ? (
                    <div className="support_box">
                        <span className="support_title">Cauta utilizator:</span>
                        <div class="support_text_fields">
                            <TextField
                                id="standard-multiline-flexible"
                                label="INDP"
                                multiline
                                maxRows={4}
                                value={props.state.idnp}
                                onChange={e => props.handleChangeInput(e, "idnp")}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    className: "support_input"
                                }}
                                variant="standard"
                            />
                            <TextField
                                id="standard-multiline-flexible"
                                label="Nr. telefon"
                                multiline
                                maxRows={4}
                                value={props.state.phone}
                                onChange={e => props.handleChangeInput(e, "phone")}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="standard"
                            />
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DesktopDatePicker
                                    label="Date desktop"
                                    inputFormat="dd.MM.yyyy"
                                    value={props.state.date}
                                    onChange={props.handleChangeDate}
                                    renderInput={(params) => <TextField {...params}
                                        InputLabelProps={{
                                            shrink: true
                                        }}
                                        variant="standard"
                                    />}
                                />
                            </LocalizationProvider>
                            <Button
                                variant="contained"
                                className="mui_button"
                                sx={{ background: "#7ba63d" }}
                                onClick={props.search}
                            >Cauta</Button>
                        </div>

                        <div className="support_box_table">
                            <span className="support_title">Rezultate cautare: John</span>

                            <SupportTable data={props.state.data} />
                        </div>
                    </div>
                ) : (
                    <div className="support_box">
                        <Card className="card_loader support_box_loader">
                            <div className="loader"></div>
                        </Card >
                    </div>
                )}
            </Box >
        </Box >
    )
}

export default Support;