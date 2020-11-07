import React, { useState } from "react";
import moment from "moment";
import PerfectScrollbar from "react-perfect-scrollbar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TablePagination from "@material-ui/core/TablePagination";
import Card from "@material-ui/core/Card";
import Checkbox from "@material-ui/core/Checkbox";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import getInitials from "../../utils/getInitials";
import CustomerDetails from "./customerDetails";

const Results = ({ customers, orders }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(1)
      );
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card className="resultsRoot">
      <PerfectScrollbar>
        <Table className="table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedCustomerIds.length === customers.length}
                  color="secondary"
                  indeterminate={
                    selectedCustomerIds.length > 0 &&
                    selectedCustomerIds.length < customers.length
                  }
                  onChange={handleSelectAll}
                />
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Registration date</TableCell>
              <TableCell>More Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.slice(0, limit).map((customer) => (
              <TableRow
                hover
                key={customer.id}
                selected={selectedCustomerIds.indexOf(customer.id) !== -1}
              >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                    onChange={(event) => handleSelectOne(event, customer.id)}
                    value="true"
                  />
                </TableCell>
                <TableCell>
                  <Box className="tableBox">
                    <Avatar
                      // toggle={viewCustomerDetails}
                      // onClick={() =>
                      //   viewCustomerDetails('openModal')}
                      className="avatar"
                      src={customer.avatarUrl}
                    >
                      {getInitials(customer.name)}
                    </Avatar>
                    <Typography color="textPrimary" variant="body1">
                      {customer.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>
                  {/* {`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`} */}
                  {customer.location}
                </TableCell>
                <TableCell>{customer.phone}</TableCell>
                <TableCell>
                  {moment(customer.createdAt).format("DD/MM/YYYY")}
                </TableCell>
                <TableCell>
                  <CustomerDetails customer={customer} orders={orders} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={customers.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

export default Results;
