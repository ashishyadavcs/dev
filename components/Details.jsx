import React from "react";
import styled from "styled-components";

const Details = ({ data }) => {
    return (
        <TableStyled>
            <thead>
                <th>Name</th>
                <th>details</th>
            </thead>
            <tbody>
                <tr>
                    <td>{data.country}</td>
                    <td>{JSON.stringify(data.cities)}</td>
                </tr>
            </tbody>
        </TableStyled>
    );
};

export default Details;
const TableStyled = styled.table`
    border-collapse: collapse;
    tr,
    td,
    th {
        padding: 5px 10px;
        border: 1px solid;
    }
`;
