import { Grid, Heading, Table } from '@bedrock-ui/core';
import { CodeHighlight } from 'components/CodeHighlight';
import { DocSection } from 'components/DocSection';

const CODE = `
import { Table } from '@bedrock-ui/core';
`.trim();

const TABLE_CODE = `
<Tabs>
  <Tabs.Tab active={active === 0} onClick={() => setActive(0)}>
    Lorem ipsum
  </Tabs.Tab>

  <Tabs.Tab active={active === 1} onClick={() => setActive(1)}>
    dolor sit amet
  </Tabs.Tab>

  <Tabs.Tab active={active === 2} onClick={() => setActive(2)}>
    consectetur adipiscing elit
  </Tabs.Tab>
</Tabs>
`.trim();

const rows = [
  { firstName: 'John', lastName: 'Smith', email: 'john.smith@example.com', status: 'Active' },
  { firstName: 'Jane', lastName: 'Jones', email: 'jane.jones@example.com', status: 'Inactive' },
  { firstName: 'Phil', lastName: 'Wolf', email: 'phil.wolf@example.com', status: 'Inactive' },
  { firstName: 'Derek', lastName: 'Rose', email: 'derek.rose@example.com', status: 'Active' },
];

function ComponentsTable() {
  return (
    <DocSection name="Table">
      <CodeHighlight>{CODE}</CodeHighlight>

      <Grid style={{ marginTop: 64, marginBottom: 64 }}>
        <Grid.Col span={12}>
          <Heading level={3}>Default</Heading>
        </Grid.Col>

        <Grid.Col span={12}>
          <CodeHighlight>{TABLE_CODE}</CodeHighlight>
        </Grid.Col>

        <Grid.Col span={12}>
          <Table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td>{row.firstName}</td>
                  <td>{row.lastName}</td>
                  <td>{row.email}</td>
                  <td>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Grid.Col>
      </Grid>
    </DocSection>
  );
}

export default ComponentsTable;
