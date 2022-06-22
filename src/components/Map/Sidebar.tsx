import React, {useEffect, useState} from "react";
import "../Map/Css/Sidebar.css";
import devices from "../Map/data/devices.json";

function Sidebar() {

  const [devicesSelected, setDevicesSelected] = useState<number[]>([]);

  useEffect(() => {
    window.addEventListener('storage', () => {
      console.log("New Device was Selected!");
      let tempTextDevices = (localStorage.getItem("device_selected_list") || "") 
      let tempArrDevices = tempTextDevices.split(',').map(Number)
      // console.log(tempArrDevices)
      setDevicesSelected(tempArrDevices)
    })
  }, [])

  return (
    
    <div className="sidebar">
      {devices.data.filter(device => devicesSelected.find(x => x === device.id)).map((data) => {
          return (
            <li className="li" key={data.id}>
            หมายเลขอุปกรณ์ <br />
            <input className="textbox" type="text" name="name" value={data.id + " " + data.name} readOnly/>
            <br />
            ที่่อยู่ที่ตั้ง <br />
            <input className="textbox" type="text" name="name" value={data.position[0] + " " + data.position[1]} readOnly/>
            <br />
            อัตราการใช้น้ำ
            <br />
            <input className="textbox" type="text" name="name" />
            <br />
            อัตราการไหล
            <br />
            <input className="textbox" type="text" name="name" />
            <br />
            สถานะอุปกรณ์
            <br />
            <input className="textbox" type="text" name="name" />
            <br />
            แบตเตอรี่
            <br />
            <input className="textbox" type="text" name="name" />
            <br />
          </li>
          )
      })}

      
    </div>
  );
}

export default Sidebar;
