import { getDocs, collection, addDoc } from "firebase/firestore";
import RoomInterface from "src/Interfaces/RoomInterface";

import { db } from './Firebase';

const getRooms = () => {
    return getDocs( collection( db, 'rooms' ));
}

const addRoom = ( room: RoomInterface ) => {
    return addDoc( collection( db, 'rooms' ), room );
}

export {
    getRooms,
    addRoom,
};