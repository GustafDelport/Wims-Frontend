import { Table, Pagination, Tag, IconButton, Button, Modal, Placeholder } from 'rsuite';

import CollaspedOutlineIcon from '@rsuite/icons/CollaspedOutline';
import ExpandOutlineIcon from '@rsuite/icons/ExpandOutline';
import EditIcon from '@rsuite/icons/Edit';
import TrashIcon from '@rsuite/icons/Trash';

import React from 'react';
import mockProduct from './MockProducts';

const { Column, HeaderCell, Cell } = Table;
const defaultData = mockProduct;
const rowKey = 'id';

const ExpandCell = ({ rowData, dataKey, expandedRowKeys, onChange, ...props }) => (
    <Cell {...props} style={{ padding: 5 }}>
      <IconButton
        appearance="subtle"
        onClick={() => {
          onChange(rowData);
        }}
        icon={
          expandedRowKeys.some(key => key === rowData[rowKey]) ? (
            <CollaspedOutlineIcon />
          ) : (
            <ExpandOutlineIcon />
          )
        }
      />
    </Cell>
  );

const renderRowExpanded = rowData => {
    return (
      <div>
        <div
          style={{
            width: 60,
            height: 60,
            float: 'left',
            marginRight: 10,
            background: '#eee'
          }}
        >
          <img src={rowData.avatar} style={{ width: 60 }} />
        </div>
        <p>{rowData.category.name}</p>
        <p>{rowData.category.description}</p>
      </div>
    )
  }

function ProductTable(){
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const [expandedRowKeys, setExpandedRowKeys] = React.useState([]);

  const handleExpanded = (rowData, dataKey) => {
    let open = false;
    const nextExpandedRowKeys = [];

    expandedRowKeys.forEach(key => {
        if (key === rowData[rowKey]) {
          open = true;
        } else {
          nextExpandedRowKeys.push(key);
        }
      });
  
      if (!open) {
        nextExpandedRowKeys.push(rowData[rowKey]);
      }
  
      setExpandedRowKeys(nextExpandedRowKeys);
    };

  const handleChangeLimit = dataKey => {
    setPage(1);
    setLimit(dataKey);
  };

  const data = defaultData.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });

  return (
    <div>
      <Table 
        height={380} 
        data={data}
        shouldUpdateScroll={true}
        rowKey={rowKey}
        expandedRowKeys={expandedRowKeys}
        
        renderRowExpanded={renderRowExpanded}
        >
        
        <Column width={50} align="center">
          <HeaderCell>#</HeaderCell>
          <ExpandCell dataKey="id" expandedRowKeys={expandedRowKeys} onChange={handleExpanded} />
        </Column>
      
        <Column width={200} flexGrow={1}>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column width={350} flexGrow={1}>
          <HeaderCell>Description</HeaderCell>
          <Cell dataKey="description" />
        </Column>

        <Column width={50} flexGrow={1}>
          <HeaderCell>Selling Price</HeaderCell>
          <Cell dataKey="sellingPrice" />
        </Column>

        <Column width={50} flexGrow={1}>
          <HeaderCell>Cost Price</HeaderCell>
          <Cell dataKey="costPrice" />
        </Column>

        <Column width={50} flexGrow={1}>
          <HeaderCell>Quantity in Stock</HeaderCell>
          <Cell dataKey="qtyInStock" />
        </Column>

        <Column width={50} flexGrow={1}>
          <HeaderCell>Minimum Threshold</HeaderCell>
          <Cell dataKey="minThreshold" />
        </Column>

        <Column width={50} flexGrow={1}>
          <HeaderCell></HeaderCell>
          <Cell style={{padding: 5, marginLeft: '45%'}}>
            <IconButton style={{marginRight: 5}} icon={<EditIcon/>} onClick={() => console.log('Open')}/>
            <IconButton icon={<TrashIcon/>} onClick={() => console.log('Trash')}/>
          </Cell>
        </Column>

      </Table>
      <div style={{ padding: 20 }}>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          maxButtons={10}
          size="xs"
          layout={['total', '-', 'limit', '|', 'pager', 'skip']}
          total={defaultData.length}
          limitOptions={[10, 30, 50]}
          limit={limit}
          activePage={page}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
        />
      </div>
    </div>
  )
}

export default ProductTable