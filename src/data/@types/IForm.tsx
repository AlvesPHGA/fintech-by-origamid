import React from 'react';

export interface DataInputProps extends React.ComponentProps<'input'> {
   id: string;
   legend: string;
}
