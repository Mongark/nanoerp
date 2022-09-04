import { Button, Drawer, Link } from '@material-ui/core'
import { Dehaze } from '@material-ui/icons'
import React, { useState } from 'react'

export default function SideDrawer() {
    const [ isOpen, setIsOpen ] = useState(false);

    const links = [
        {
            "name": "Dashboard",
            "href": "/"
        },
        {
            "name": "Bookings",
            "href": "/bookings"
        },
        {
            "name": "Rooms",
            "href": "/rooms"
        },
        {
            "name": "Accommodations",
            "href": "/accommodations"
        },
        {
            "name": "Guests",
            "href": "/guests"
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
                            <Link
                                href={item.href}
                                component="button"
                                variant="body2"
                                >

                                <Button>
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
