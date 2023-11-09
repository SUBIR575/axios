import React from "react";
import { MDBInput, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
const Cocktail = () => {
  return (
    <>
      <MDBContainer sm>
        <MDBRow>
          <MDBCol size="md" style={{display: "flex",justifyContent: "center"}}>
            <div className="searchbox">
            <MDBInput label="Example label" id="form1" type="text" />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Cocktail;
