import React from 'react';
import BedrockTable from './Table';

import type { Props } from './Table.types';

export default {
  title: 'Table',
  component: BedrockTable,
  argTypes: {
    fixed: {
      control: { type: 'boolean' },
    },
  },
  args: {
    fixed: false,
  },
};

const rows = [
  { firstName: 'John', lastName: 'Smith', email: 'john.smith@example.com', status: 'Active' },
  { firstName: 'Jane', lastName: 'Jones', email: 'jane.jones@example.com', status: 'Inactive' },
  { firstName: 'Phil', lastName: 'Wolf', email: 'phil.wolf@example.com', status: 'Inactive' },
  { firstName: 'Derek', lastName: 'Rose', email: 'derek.rose@example.com', status: 'Active' },
];

export const Table = (props: Props) => (
  <BedrockTable {...props}>
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
  </BedrockTable>
);
