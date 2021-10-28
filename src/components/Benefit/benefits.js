import React from 'react'
import { LocalShippingOutlined } from "@material-ui/icons";
import { SportsSoccerOutlined } from '@material-ui/icons';
import { Replay30Outlined } from '@material-ui/icons';

const benefits = [
    {
        id: '1',
        icon: <LocalShippingOutlined />,
        title: 'FREE SHIPPING',
        details: 'Free shipping on all US order or order above $100'
    },
    {
        id: '2',
        icon: <SportsSoccerOutlined />,
        title: 'SUPPORT 24/7',
        details: 'Contact us 24 hours a day, 7 days a week'
    },
    {
        id: '3',
        icon: <Replay30Outlined />,
        title: 'CASH ON DELIVERY',
        details: 'Simply return it within  30 days for an exchange'
    },
    {
        id: '4',
        icon: <Replay30Outlined />,
        title: '100% PAYMENT SECURE',
        details: 'We ensure secure payment with PEV'
    }
]

export default benefits