import styled from 'styled-components';

export const AdminRight = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 40px;
`;

export const AdminTitle = styled.h1`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 15px;
`;

export const SortContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin-bottom: 40px;
`;

export const SortRadioContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const AdminTable = styled.table`
    width: 100%;
    border: 1px solid black;
`;

export const SectionHeader = styled.h2`
    font-size: 28px;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 20px;
`;

export const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #bbb;
    }

    &:hover {
        background-color: #fff;
        cursor: pointer;
    }
`;

export const TableHeader = styled.th`
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`;

export const TableCell = styled.td`
    font-size: 18px;
    border: 1px solid black;
    border-collapse: collapse;
    padding: 0 3px;
`;