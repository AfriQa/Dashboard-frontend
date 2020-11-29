import React, { useState, useEffect } from "react";
import moment from "moment";
import { v4 as uuid } from "uuid";
import PerfectScrollbar from "react-perfect-scrollbar";
import Tooltip from "@material-ui/core/Tooltip";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import CustomerDetails from "../CustomerListView/customerDetails";
import "./orders.css";
import { getContent } from "../../resolvers/Order/OrderState"
import { getCustomer } from "../../resolvers/Customer/CustomerState"
import { getProductStrings } from "../../resolvers/Product/ProductState"
import { connect } from "react-redux"

const data = [
  {
    id: uuid(),
    ref: "CDD1049",
    amount: 30.5,
    customer: {
      name: "Ekaterina Tankova",
    },
    createdAt: 1555016400000,
    status: "pending",
    items: "this item and this item and this item ",
  },
  {
    id: uuid(),
    ref: "CDD1048",
    amount: 25.1,
    customer: {
      name: "Cao Yu",
    },
    createdAt: 1555016400000,
    status: "delivered",
    items: "this item and this item and this item ",
  },
  {
    id: uuid(),
    ref: "CDD1047",
    amount: 10.99,
    customer: {
      name: "Alexa Richardson",
    },
    createdAt: 1554930000000,
    status: "refunded",
    items: "this item and this item and this item ",
  },
  {
    id: uuid(),
    ref: "CDD1046",
    amount: 96.43,
    customer: {
      name: "Anje Keizer",
    },
    createdAt: 1554757200000,
    status: "pending",
    items: "this item and this item and this item ",
  },
  {
    id: uuid(),
    ref: "CDD1045",
    amount: 32.54,
    customer: {
      name: "Clarke Gillebert",
    },
    createdAt: 1554670800000,
    status: "delivered",
    items: "this item and this item and this item ",
  },
  {
    id: uuid(),
    ref: "CDD1044",
    amount: 16.76,
    customer: {
      name: "Adam Denisov",
    },
    createdAt: 1554670800000,
    status: "delivered",
    items: "this item and this item and this item ",
  },
];

const LatestOrders = ({ className, getContent, rootState }) => {
  const [orders] = useState(data);

  const [content, setContent] = useState({
    orders: [],
  })

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    const content = getContent()
    setContent(content)

    
  }, [getContent])

  return (
    <Card className="root">
      <CardHeader title="Latest Orders" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order Ref</TableCell>
                <TableCell>Customer</TableCell>
                <TableCell>Items</TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip enterDelay={300} title="Sort">
                    <TableSortLabel active direction="desc">
                      Date
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Customer Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {content.orders.map((order) => (
                <TableRow hover key={order.id}>
                  <TableCell>{order.ref}</TableCell>
                  <TableCell>{getCustomer(rootState, order.customer).name}</TableCell>
                  <TableCell>{getProductStrings(rootState, order.items)}</TableCell>
                  <TableCell>
                    {moment(order.createdAt).format("DD/MM/YYYY")}
                  </TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>
                    <CustomerDetails customer={getCustomer(rootState, order.customer)}/>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>

      <TablePagination
        component="div"
        count={data.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

const mapStateToProps = state => ({
  getContent: () => getContent(state),
  rootState: state
})

export default connect(mapStateToProps)(LatestOrders);