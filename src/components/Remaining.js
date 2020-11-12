import React from 'react';
import { connect } from 'react-redux';


import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Box, Columns, Container, Heading, Table } from 'react-bulma-components';

const Remaining = ({ remaining }) => {

  const remainingNumbers = remaining.map(row => {
    return Object.entries(row).map(([key, value]) => {
      return <tr key={key}>
        <td>{key}</td>
        <td>{value}</td>
      </tr>
    })
  })

  return (
    <Container>
      <Columns>
        <Columns.Column>
        </Columns.Column>
        <Columns.Column size={5}>
          <Box>
            <Heading subtitle heading size={5}>Remaining Occurences</Heading>
            <Table>
              <thead>
                <tr>
                  <th>Number</th>
                  <th>Remaining</th>
                </tr>
              </thead>
              <tbody>
                {remainingNumbers}
              </tbody>
            </Table>
          </Box>
        </Columns.Column>
        <Columns.Column>
        </Columns.Column>
      </Columns>
    </Container>
  )
}

const mapStateToProps = ({ remaining }) => {
  return {
    remaining
  }
}

export default connect(mapStateToProps, null)(Remaining);