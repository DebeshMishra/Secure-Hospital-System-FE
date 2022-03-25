import { useTable } from "react-table"

function Table({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({ columns, data });


    return (
        <table {...getTableProps()}>
            <thead
                style={{ padding: '200px', border: 'solid 2px Black', }}>

                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}
                    >
                        {headerGroup.headers.map(column => (
                            <th
                                style={{
                                    padding: '10px', border: 'solid 2px Black',
                                }}
                                {...column.getHeaderProps()}>{column.render("Header")}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td style={{ padding: '10px', border: 'solid 2px Black', maxWidth: '800px' }}
                                    {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Table 