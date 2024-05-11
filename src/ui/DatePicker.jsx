import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import styled from "styled-components";

const StyledDiv = styled.div``;

function DatePicker() {
  return (
    <StyledDiv>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-in">
        <DateRangePicker
          localeText={{ start: "Start-date", end: "End-date" }}
          sx={{ width: "80%" }}
        />
      </LocalizationProvider>
    </StyledDiv>
  );
}

export default DatePicker;
