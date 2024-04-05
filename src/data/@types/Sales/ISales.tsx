import React from 'react';

export interface TRowProps extends React.ComponentProps<'tr'> {
   id: string;
   name: string;
   price: number;
   status: string;
}
