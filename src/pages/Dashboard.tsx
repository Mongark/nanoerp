import { useState } from "react";
import ModalComponent from "../components/ModalComponent";

function Dashboard() {
    const [reservationModal, setReservationModal] = useState(false);

    const handleNewReservation = () => {
        setReservationModal(false);
    }

    return(
        <div>
            <ModalComponent isActive={reservationModal}>
                <h1>Add new reservation</h1>

                <form>
                    <label>Name</label> <br />
                    <input required type="text"/> <br />
                    
                    <label>Surname</label> <br />
                    <input required type="text"/> <br />

                    <label>Email</label> <br />
                    <input required type="email"/> <br />

                    <label>Check-In</label> <br />
                    <input required type="date"/> <br />

                    <label>Check-Out</label> <br />
                    <input required type="date"/> <br />

                    <label>Accommodation</label> <br />
                    <select required>
                        <option>Accommodation 1</option>
                        <option>Accommodation 2</option>
                        <option>Accommodation 3</option>
                        <option>Accommodation 4</option>
                        <option>Accommodation 5</option>
                        <option>Accommodation 6</option>
                    </select> <br />

                    <label>Number of Guests</label> <br />
                    <input required type="number"/> <br />

                    <label>Currency</label> <br />
                    <select required>
                        <option>Dollar</option>
                        <option>Euro</option>
                        <option>Brazilian Real</option>
                    </select> <br />

                    <label>Total Pricing</label> <br />
                    <input required type="number"/> <br />

                    <label>Special Requests</label> <br />
                    <input required type="text"/> <br />

                    <label>Payment Status</label> <br />
                    <select required>
                        <option>Pending</option>
                        <option>Paid</option>
                    </select> <br />

                    <label>Source(website, booking.com, etc)</label> <br />
                    <input required type="text"/> <br />

                    <input type="submit" value="Add"/>
                </form>
            </ModalComponent>
            <button onClick={() => setReservationModal(true)}>Add new reservation</button>
        </div>
    );
} export default Dashboard;