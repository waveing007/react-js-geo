import { useState } from "react";
import "./import-data.css";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import MyVerticallyCenteredModal from './modal'
import axios from 'axios';


const Input = styled('input')({
    display: 'none',
});

export default function ImportDataPage() {
    const [csvFile, setCsvFile] = useState();
    const [csvArray, setCsvArray] = useState([]);
    const [dataUpload, setDataUpload] = useState([]);
    const [modalShow, setModalShow] = React.useState(false);

    const uploadFile = async (obj) => {
        const data = obj;
        await axios.post('http://localhost:4200/upload', data).then((res) => {
            console.log(res.data);
            setModalShow(true)
        })
    }



    const processCSV = (str, delim = ",") => {
        const headers = str.slice(0, str.indexOf("\r")).split(delim);
        const rows = str.slice(str.indexOf("\n") + 1).split("\n");
        const newArray = rows.map((row) => {
            const values = row.split(delim);
            const eachObject = headers.reduce((obj, header, i) => {
                if (values[i] !== undefined && values[i] !== "") {
                    if (header === "year") {
                        if (values[i]) {
                            obj[header] = values[i].split("\r")[0];
                        }
                    } else {
                        obj[header] = values[i];
                    }
                }
                return obj;
            }, {});
            return eachObject;
        });
        uploadFile(newArray);
        setCsvArray(newArray);
    };

    const submit = () => {
        const file = csvFile;
        const reader = new FileReader();
        reader.onload = function (e) {
            const text = e.target.result;
            processCSV(text);
        };
        reader.readAsText(file);
    };

    return (
        <div className="">
            <nav
                className="navbar navbar-light"
                style={{ backgroundColor: "#f3f3fb", height: 80 }}
            >
                <label className="navbar-brand text-header">Import Data</label>
                <form className="form-inline" style={{ columnGap: 20 }}>
                    <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            if (csvFile) submit();
                        }}
                    >
                        Upload
                    </button>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                    <button
                        className="btn btn-outline-danger my-2 my-sm-0"
                        type="submit"
                        onClick={(e) => {
                            setCsvArray([]);
                        }}
                    >
                        Cancel
                    </button>
                </form>
            </nav>
            <form id="csv-form">
                {csvArray.length < 1 ? (
                    <>
                        <div className="bg-import-page">
                            <div className="bg-upload">
                                <div className="container-upload">
                                    <div>
                                        <svg
                                            id="svg3"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="400"
                                            height="200"
                                            viewBox="0 0 278.692 122"
                                        >
                                            <g id="g5" transform="translate(0 121.325)">
                                                <g transform="translate(0 0)" id="g6">
                                                    <path
                                                        style={{ fill: '#263238' }}
                                                        transform="translate(-86.334 -439.568)"
                                                        d="M365.026,439.693c0,.069-62.392.126-139.339.126-76.974,0-139.353-.056-139.353-.126s62.379-.126,139.353-.126C302.634,439.568,365.026,439.624,365.026,439.693Z"
                                                        id="path4"
                                                    ></path>
                                                </g>
                                            </g>
                                            <g transform="translate(10.302 91.219)" id="g7">
                                                <g id="g8" transform="translate(0 0)">
                                                    <g transform="translate(3.338)" id="g9">
                                                        <path
                                                            id="path5"
                                                            transform="translate(-114.589 -377.201)"
                                                            style={{ fill: '#d9d9d9' }}
                                                            d="M116.374,377.2a6.085,6.085,0,0,1,4.241,2.172,10.744,10.744,0,0,1,2.159,4.35c.817,3.053.315,6.655-.556,9.693-3.3-1.181-5.342-4.706-6.264-6.558-1.456-2.928-2.31-9.105.42-9.656"
                                                        ></path>
                                                    </g>
                                                    <g id="g10" transform="translate(14.896 11.16)">
                                                        <path
                                                            transform="translate(-138.532 -400.319)"
                                                            d="M139.358,409.073a5.192,5.192,0,0,1-.243-5.207,6.9,6.9,0,0,1,4.152-3.337,2.9,2.9,0,0,1,2.444.117,2.221,2.221,0,0,1,.854,2.081,4.5,4.5,0,0,1-.95,2.136c-1.607,2.176-3.561,3.986-6.256,4.209"
                                                            id="path6"
                                                            style={{ fill: '#d9d9d9' }}
                                                        ></path>
                                                    </g>
                                                    <g id="g11" transform="translate(15.123 14.849)">
                                                        <path
                                                            id="path7"
                                                            d="M139.965,423.226a3.652,3.652,0,0,1-.148-.634l-.34-1.74a18.221,18.221,0,0,1-.362-5.843,11.153,11.153,0,0,1,2.167-5.415,7.6,7.6,0,0,1,1.254-1.267,4.663,4.663,0,0,1,.393-.282c.092-.061.143-.089.147-.083a11.914,11.914,0,0,0-1.666,1.731,11.516,11.516,0,0,0-2.069,5.348,19.617,19.617,0,0,0,.294,5.784c.118.739.214,1.337.268,1.753A3.442,3.442,0,0,1,139.965,423.226Z"
                                                            transform="translate(-139.003 -407.961)"
                                                            style={{ fill: '#263238' }}
                                                        ></path>
                                                    </g>
                                                    <g transform="translate(6.187 4.646)" id="g12">
                                                        <path
                                                            id="path8"
                                                            style={{ fill: '#263238' }}
                                                            d="M120.493,386.826a1.334,1.334,0,0,1,.133.25l.341.736c.292.641.7,1.573,1.2,2.729,1,2.312,2.326,5.525,3.716,9.106s2.572,6.853,3.4,9.232c.412,1.189.737,2.154.953,2.824l.244.773a1.286,1.286,0,0,1,.07.275,1.352,1.352,0,0,1-.114-.26l-.285-.758-1.021-2.8c-.862-2.364-2.069-5.623-3.457-9.2s-2.695-6.8-3.651-9.126l-1.133-2.756-.3-.753A1.314,1.314,0,0,1,120.493,386.826Z"
                                                            transform="translate(-120.492 -386.826)"
                                                        ></path>
                                                    </g>
                                                    <g transform="translate(0 17.496)" id="g13">
                                                        <path
                                                            d="M119.836,419.314a12.141,12.141,0,0,0-9.424-5.855c-.977-.071-2.152.093-2.587.97s.147,1.919.812,2.64a10.375,10.375,0,0,0,11.235,2.508"
                                                            style={{ fill: '#d9d9d9' }}
                                                            transform="translate(-107.674 -413.445)"
                                                            id="path9"
                                                        ></path>
                                                    </g>
                                                    <g transform="translate(4.226 20.118)" id="g14">
                                                        <path
                                                            style={{ fill: '#263238' }}
                                                            id="path10"
                                                            transform="translate(-116.429 -418.876)"
                                                            d="M116.429,418.884a3.175,3.175,0,0,1,.612.023,5.906,5.906,0,0,1,.713.082c.275.052.6.082.936.176a10.722,10.722,0,0,1,1.113.309,12.056,12.056,0,0,1,1.242.472,13.521,13.521,0,0,1,2.615,1.551,13.233,13.233,0,0,1,2.162,2.139,11.556,11.556,0,0,1,.761,1.089,9.715,9.715,0,0,1,.566,1.008,8.979,8.979,0,0,1,.389.87,5.468,5.468,0,0,1,.243.676,3.174,3.174,0,0,1,.159.591c-.049.017-.284-.827-.935-2.063a10.623,10.623,0,0,0-.583-.98,12.219,12.219,0,0,0-.766-1.059,13.732,13.732,0,0,0-2.137-2.089,14.029,14.029,0,0,0-2.562-1.539,12.594,12.594,0,0,0-1.215-.484,11.361,11.361,0,0,0-1.091-.332C117.3,418.98,116.424,418.933,116.429,418.884Z"
                                                        ></path>
                                                    </g>
                                                </g>
                                            </g>
                                            <g id="g15" transform="translate(41.631 0)">
                                                <g transform="translate(41.704 16.43)" id="g16">
                                                    <path
                                                        transform="translate(-258.968 -222.27)"
                                                        d="M278.272,228.195,261.2,315.954l-2.235,11.488,113.953-.562c5.114-.025,9.646-4.566,11.292-11.313l20.206-82.853c1.249-5.121-1.492-10.448-5.374-10.444l-115.334.121C281.165,222.394,278.939,224.77,278.272,228.195Z"
                                                        id="path11"
                                                        style={{ fill: '#d1d1d1' }}
                                                    ></path>
                                                </g>
                                                <path
                                                    transform="translate(-172.575 -188.235)"
                                                    id="path12"
                                                    style={{ fill: '#e5e5e5' }}
                                                    d="M317.3,292.4l-12.065-97.225a7.652,7.652,0,0,0-7.414-6.943l-26.457.086a7.21,7.21,0,0,0-5.226,2.318l-12.563,13.354-73.58.384c-4.5.023-7.951,4.278-7.355,9.058l11.2,89.861a7.653,7.653,0,0,0,7.4,6.938l128.234-.253c14.282.3,15.646-3.922,15.646-3.922C318.761,309.687,317.3,292.414,317.3,292.4Z"
                                                ></path>
                                                <g
                                                    id="g17"
                                                    transform="translate(51.799 53.715)"
                                                    style={{ opacity: 0.5 }}
                                                >
                                                    <path
                                                        d="M317.514,331.607l-4.325,4.645L279.88,306.287l4.325-4.645Z"
                                                        transform="translate(-279.88 -300.612)"
                                                        id="path13"
                                                        style={{ fill: '#bababa' }}
                                                    ></path>
                                                    <path
                                                        style={{ fill: '#bababa' }}
                                                        id="path14"
                                                        transform="translate(-281.335 -299.509)"
                                                        d="M312.832,299.509l4.78,4.3-30.139,32.37-4.78-4.3Z"
                                                    ></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className='text-not-data'>
                                        No Data Upload
                                    </div>
                                    <div className='detail-text'>
                                        Please select data with .CSV file only !!!
                                    </div>
                                    <div className='btn-upload'>
                                        <label htmlFor="contained-button-file">
                                            <Input
                                                accept='.csv' id="contained-button-file" multiple type="file" onChange={(e) => {
                                                    console.log(e.target.files[0]);
                                                    setCsvFile(e.target.files[0]);
                                                    setDataUpload(e.target.files[0]);
                                                }} />
                                            <Button variant="contained" component="span" id='csvFile' fullWidth={true} size="large">
                                                Upload
                                            </Button>
                                        </label>
                                    </div>
                                    <div className='col-file-upload'>
                                        {dataUpload.name !== undefined ? <>
                                            <label className='text-file-upload'> File Name : {dataUpload.name}</label>
                                            <label className='text-file-upload'> File size : {dataUpload.size} bytes</label>
                                            <label className='text-file-upload'> File type : {dataUpload.type}</label>
                                        </> : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : null}

                {csvArray.length > 0 ? (
                    <>
                        <table className="table table-data">
                            <thead>
                                <tr>
                                    <th scope="col" style={{ width: 100 }}>
                                        #
                                    </th>
                                    <th scope="col" className="col-table">
                                        latitude
                                    </th>
                                    <th scope="col" className="col-table">
                                        longitude
                                    </th>
                                    <th scope="col" className="col-table">
                                        Deep
                                    </th>
                                    <th scope="col" className="col-table">
                                        Year
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {csvArray.map((item, i) => (
                                    <tr key={i}>
                                        <th scope="row">{item.id}</th>
                                        <td>{item.latitude}</td>
                                        <td>{item.longitude}</td>
                                        <td>{item.deep}</td>
                                        <td>{item.year}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                ) : null}
            </form>
        </div>
    );
}
