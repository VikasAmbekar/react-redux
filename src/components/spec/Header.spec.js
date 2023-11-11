import React from 'react';
import { render, screen } from '@testing-library/react';
import {Header}from '../Header';

it('should render the header with the shop name passed as a prop', () => {
    render(<Header shopName="My Shop" />);
    expect(screen.getByText('My Shop')).toMatchSnapshot('My Shop');
});

