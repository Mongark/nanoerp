import { getDocs, collection } from "firebase/firestore";

import { db } from './Firebase';

const getRooms = () => {
    return getDocs( collection( db, 'rooms' ));
}

export {
    getRooms,
};