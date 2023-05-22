
import React, { useState } from "react";
import "../styles/AddCar.css";
import axios from "axios";
import { Link ,useNavigate} from 'react-router-dom';


function AddCar() { 
    const navigate=useNavigate();
    const [image, setImage] = useState();
    const [url, setUrl] = useState("");
    const [formdata, setFormdata] = useState({
        carname: "",
        type: "",
        model: "",
        milage: "",
        perkm: "",
        image: '',
        availablefrom: "",
        availabletill: "",
        description: "",
        cardetails: "",
        details: "",
    });
    const HandleChange = (e) => {
        const { name, value } = e.target;
        setFormdata({
            ...formdata,
            [name]: value,
        });
    };
    const HandleImage = () => {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "carImage");
        data.append("cloud_name", "dpndik2sj");
        fetch("https://api.cloudinary.com/v1_1/dpndik2sj/image/upload",
            {
                method: "post",
                body: data
            })
            .then((res) => res.json())
            .then((data) => {
                setFormdata({
                ...formdata,
                image: data.url
                })
                console.log(data.url)
               
            })
            .catch((err) => {
                console.log(err)
            });
    };
    const Submitdata = () => {
        axios.post("http://localhost:8080/api/v1/addcar", (formdata))
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                console.log(formdata);
                console.log(url)
                setUrl(data.url);
                setFormdata({
                    ...formdata,
                    image: data.url
                });
                navigate("/admin")
            })
            .catch((err) => {
                console.log(err);
            });
       
    };


    return (<>

        <h3 >ADD CAR DETAILS</h3>
        <div className="dividor">
            <div className="sec1">
                <div className="CN">
                    <label >Car Name</label>
                    <input type="text"
                        placeholder="Name"
                        name="carname"
                        onChange={HandleChange} ></input>
                </div>
                <div className="dev1">
                    <div className="devv">
                        <label for="cartype">Type </label>
                        <input
                            type="text"
                            name="type"
                            className="inp-type"
                            onChange={HandleChange}
                        />
                    </div>

                    <div className="dev">
                        <label for="model">Model </label>
                        <input
                            type="text"
                            name="model"
                            className="inp-model"
                            onChange={HandleChange}
                        />
                    </div>
                </div>

                <div className="dev2">
                    <div className="devv">
                        <label for="milage">Milage </label>
                        <input
                            type="number"
                            name="milage"
                            className="inp-milage"
                            onChange={HandleChange}
                        />
                    </div>

                    <div className="dev">
                        <label for="perkm">perKM </label>
                        <input type="number"
                            id="perkm"
                            placeholder="0000"
                            name="perkm"
                            onChange={HandleChange}
                        ></input>

                    </div>
                </div>

                <div className="dev3">
                    <div className="devv">
                        <label>Available from </label>
                        <label>
                            <input type="date"
                            onChange={(e) => setFormdata({...formdata, availablefrom: e.target.value})}
                        ></input>
                        </label>
                    </div>

                    <div className="dev">
                        <label for="dt">Available till </label>
                        <label>
                            <input type="date"
                            onChange={(e) => setFormdata({...formdata, availabletill: e.target.value})}
                        ></input>
                        </label>

                    </div>

                </div>
                <div className="dev4">
                    <div className="CN">
                        <label for="desc">Description </label>
                        <textarea id="cd" rows="4" colums="100"
                            name="description"
                            onChange={HandleChange}
                        ></textarea>

                    </div>
                </div>
                <Link to="/admin"><button id="cancel" >Cancel</button></Link>
            </div>
            <div className="sec2">
                <div className="dev">
                    <div id="dev1"><label>Images </label><button className="addimg" onClick={HandleImage}>ADD</button></div>

                    <input type="file"
                        name="image"
                        className="image"
                        onChange={(e) => {
                            setImage(e.target.files[0])
                        }}></input>
                </div>


                <div className="dev5">
                    <label for="cd">Car details </label>
                    <textarea id="cd" rows="4" colums="100"
                        name="cardetails"
                        onChange={HandleChange}></textarea>

                    <label for="details">Details </label>
                    <textarea id="details" rows="4" colums="100"
                        name="details"
                        onChange={HandleChange}></textarea>
                </div>
                <div>
                    <Link to="/admin"><button className="add"
                    onClick={Submitdata}>Add </button></Link>
                    
                    
                    </div>
            </div>
        </div>
    </>

    )
}


export default AddCar;





