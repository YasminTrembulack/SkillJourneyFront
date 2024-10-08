import styled from "styled-components";

export const Table = styled.table`
    width: 50%;
    border-collapse: collapse;
    margin: 20px auto;
    border: 1px solid slategray;
    border-radius: 5px;
`;

export const TableHeader = styled.tr`
    background-color: #6b50e6;
`;

export const TableHead = styled.th`
    padding: 10px;
    color: #ffffff;
    font-weight: bold;  
    border: 1px solid slategray;
`;

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #d8d8d8;
    }
`;

export const TableData = styled.td`
    padding: 10px;
    border: 1px solid slategray;
    color: grey;
    font-weight: bolder;
`;

export const MainContent = styled.div`
  width: 100%;
  min-height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;