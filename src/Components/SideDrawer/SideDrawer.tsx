import React from 'react';

import { Button, Drawer } from '@material-ui/core'
import { Dehaze } from '@material-ui/icons'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function SideDrawer() {
    const [ isOpen, setIsOpen ] = useState(false);

    const links = [
        {
            "name": "Dashboard",
            "href": "/"
        },
        {
            "name": "Rooms",
            "href": "/rooms"
        },
    ];

    return(
        <div>
            <Button onClick={ () => setIsOpen(true) } variant="text" color="secondary">
                <Dehaze />
            </Button>

            <Drawer
                anchor='left'
                open={ isOpen }
                onClose={ () => setIsOpen(false) }
                >

                {links.map((item) => {
                    return(
                        <div>
                            <Link to={item.href}>

                                <Button style={{
                                        width: '100%',
                                        justifyContent: 'left',
                                    }}>
                                    {item.name}
                                </Button>
                            </Link>
                        </div>
                    );
                })}
            </Drawer>
        </div>
    );
}
