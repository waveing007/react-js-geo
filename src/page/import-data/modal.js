import Modal from 'react-bootstrap/Modal'
import "./import-data.css";

export default function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
                <div className='modal-success'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="62.427" height="62.427" viewBox="0 0 62.427 62.427"><defs>
                    </defs><g transform="translate(-926 -394)">
                            <circle style={{ fill: '#32ba7c' }} cx="31.213" cy="31.213" r="31.213" transform="translate(926 394)" />
                            <path style={{ fill: '#0aa06e' }} d="M188.8,178.585l16.05,16.05a31.193,31.193,0,0,0,23.139-30.13v-.886L215.386,152Z" transform="translate(760.438 260.709)" />
                            <g transform="translate(936.487 409.409)">
                                <path style={{ fill: '#fff' }} d="M106.715,213.237a3.687,3.687,0,0,1,0,5.12l-2.855,2.855a3.687,3.687,0,0,1-5.12,0l-12.505-12.6a3.687,3.687,0,0,1,0-5.12l2.855-2.855a3.687,3.687,0,0,1,5.12,0Z" transform="translate(-85.2 -190.443)" />
                                <path style={{ fill: '#fff' }} d="M187.1,126.234a3.687,3.687,0,0,1,5.12,0l2.855,2.855a3.687,3.687,0,0,1,0,5.12L173.41,155.773a3.687,3.687,0,0,1-5.12,0l-2.855-2.855a3.687,3.687,0,0,1,0-5.12Z" transform="translate(-154.652 -125.2)" />
                            </g>
                        </g>
                    </svg>
                    <label className='text-header-modal'> Successful !</label>
                    <label className='text-content-modal'> Your data has been saved</label>
                    <button className='btn btn-outline-success' onClick={props.onHide}>Close</button>
                </div>

            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}