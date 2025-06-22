interface ModalProps {
    isActive: boolean;
    children?: React.ReactNode;
}

function ModalComponent(props: ModalProps) {
    if(props.isActive) {
        return(
            <div className="addroom-modal">
                <div className="addroom-modal-card" children={props.children}>
                    
                </div>
            </div>
        );
    }

    return(<></>);
}

export default ModalComponent;