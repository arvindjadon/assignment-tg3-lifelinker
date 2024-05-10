import styled from "styled-components";
import Heading from "./Heading";

const StyledTable = styled.div`
  background-color: var(--color-white);
  padding: 2rem;
  border-radius: var(--border-radius-md);
  overflow-y: scroll;
`;

function Table() {
  return (
    <StyledTable>
      <Heading as="h2">Areas</Heading>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Rajouri Garden</th>
            <th>Patel Nagar</th>
            <th>Vasant Kunj</th>
            <th>Tilak Nagar</th>
            <th>Rohini</th>
            <th>Lajpat Nagar</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>Mar</th>
            <td>70000</td>
            <td>70000</td>
            <td>70000</td>
            <td>70000</td>
            <td>70000</td>
            <td>70000</td>
          </tr>
          <tr>
            <th>Feb</th>
            <td>6000</td>
            <td>6000</td>
            <td>6000</td>
            <td>6000</td>
            <td>6000</td>
            <td>6000</td>
          </tr>
          <tr>
            <th>Jan</th>
            <td>6500</td>
            <td>6500</td>
            <td>6500</td>
            <td>6500</td>
            <td>6500</td>
            <td>6500</td>
          </tr>
          <tr>
            <th>Dec</th>
            <td>6800</td>
            <td>6800</td>
            <td>6800</td>
            <td>6800</td>
            <td>6800</td>
            <td>6800</td>
          </tr>
          <tr>
            <th>Nov</th>
            <td>5900</td>
            <td>5900</td>
            <td>5900</td>
            <td>5900</td>
            <td>5900</td>
            <td>5900</td>
          </tr>
          <tr>
            <th>Oct</th>
            <td>6800</td>
            <td>6800</td>
            <td>6800</td>
            <td>6800</td>
            <td>6800</td>
            <td>6800</td>
          </tr>
        </tbody>
      </table>
    </StyledTable>
  );
}

export default Table;
