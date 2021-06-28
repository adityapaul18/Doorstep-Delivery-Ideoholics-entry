import React, { useState } from "react";
import FormBottom from "../FormBottom/FormBottom";
import FormMid from "../FormMid/FormMid";
import FormTop from "../FormTop/FormTop";
import { Button } from "@material-ui/core";
import "./Form.css";
import axios from "axios";

function Form() {
  const [DemandId, setDemandId] = useState("");
  const [Accname, setAccname] = useState("");
  const [RecipName, setRecipName] = useState("");
  const [Ordertype, setOrdertype] = useState("");
  const [DestType, setDestType] = useState("");
  const [ReccCont, setReccCont] = useState("");
  const [PartNum, setPartNum] = useState("");
  const [Messages, setMessages] = useState([]);
  const [Brand, setBrand] = useState("");
  const [PartDesc, setPartDesc] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [DestAdd, setDestAdd] = useState("");
  const [OrderVal, setOrderVal] = useState("");
  const [Comment, setComment] = useState("");
  const [Priority, setPriority] = useState("");
  const [Advancstat, setAdvancstat] = useState("false");

  const handlesubmit = () => {
      if (
        DemandId === "" || !/\S/.test(DemandId) ||
        Accname === "" || !/\S/.test(Accname) ||
        RecipName === "" || !/\S/.test(RecipName) ||
        Ordertype === "" || !/\S/.test(Ordertype) ||
        DestType === "" || !/\S/.test(DestType) ||
        ReccCont === "" || !/\S/.test(ReccCont) ||
        PartNum === "" || !/\S/.test(PartNum) ||
        Messages === "" || !/\S/.test(Messages) ||
        Brand === "" || !/\S/.test(Brand) ||
        PartDesc === "" || !/\S/.test(PartDesc) ||
        Quantity === "" || !/\S/.test(Quantity) ||
        OrderVal === "" || !/\S/.test(OrderVal) ||
        Priority === "" || !/\S/.test(Priority) ||
        Advancstat === "" || !/\S/.test(Advancstat)
      ) {
        alert("plz fill in all the fields");
        return;
      }
      const date = new Date();
      const sendingdata = {
      id: DemandId,
      createDate: date.toLocaleDateString(),
      retailOutletName: "string",
      opsExecName: "string",
      orderType: Ordertype,
      destinationType: DestType,
      destinationIWName: Accname,
      recipientName: RecipName,
      recipientContact: ReccCont,
      partsRequirements:Messages,
      destinationAddress: DestAdd,
      casePriority: Priority,
      orderValue: OrderVal,
      advanceStatus:Advancstat,
      comment: Comment,
    };
    console.log(DemandId,date.toLocaleDateString(),Ordertype,DestType,Accname,RecipName,ReccCont,Messages,DestAdd,Priority,OrderVal,Advancstat,Comment)
    axios.post('http://cloud.ideoholics.com:8006/parts-delivery/delivery-request/create' , sendingdata)
    .then(response => {
        console.log(alert(" request success"))
    }).catch(error => console.log(error.message))

    // console.log(DestAdd, OrderVal, Comment, Priority, Advancstat);
  };
  return (
    <form className="FormContainer">
      <FormTop
        setDemandId={setDemandId}
        setAccname={setAccname}
        setRecipName={setRecipName}
        setOrdertype={setOrdertype}
        setDestType={setDestType}
        setReccCont={setReccCont}
      />
      <FormMid
        Messages={Messages}
        setMessages={setMessages}
        PartNum={PartNum}
        Brand={Brand}
        PartDesc={PartDesc}
        Quantity={Quantity}
        setPartNum={setPartNum}
        setBrand={setBrand}
        setPartDesc={setPartDesc}
        setQuantity={setQuantity}
      />
      <FormBottom
        DestAdd={DestAdd}
        setDestAdd={setDestAdd}
        OrderVal={OrderVal}
        setOrderVal={setOrderVal}
        Comment={Comment}
        setComment={setComment}
        Priority={Priority}
        setPriority={setPriority}
        Advancstat={Advancstat}
        setAdvancstat={setAdvancstat}
      />
      <div className="SaveButtonContainer">
        <Button
          onClick={handlesubmit}
          className="SaveButton"
          variant="contained"
        >
          Save
        </Button>
      </div>
    </form>
  );
}

export default Form;
