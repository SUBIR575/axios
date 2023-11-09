import React, { useEffect, useState } from "react";
import { Modal, Form, CloseButton, Button } from "react-bootstrap";
import closeIcon from "../../assets/images/close.svg";
import { trimString } from "../helper";
import searchIcon from "../../assets/images/search-icon.svg";
import DownArrow from "../../assets/images/downArrow.png";
// add below code in side parent component
const Style = {
  caretColor: "rgba(0,0,0,0)",
  cursor: "pointer",
};
export function MultiSelectModal(props) {
  const {
    onValueChange,
    dataBack,
    optionLabel,
    showPlaceholder,
    selectOption,
    optionValue,
    showAllSelectButton,
  } = props;
  const setPageData = props.setSelectedDivision;
  const pageData = props.selectedValue;
  const [showModal, setShowModal] = useState(false);
  const [code, setCode] = useState([]);
  const [str, setStr] = useState("");
  console.log(pageData);

  const [selectedValue, setSelectedDivision] = useState(pageData);

  return (
    <>
      <div className="position-relative">
        <Form.Control
          placeholder={showPlaceholder}
          type="text"
          style={Style}
          disabled={selectOption[0] ? false : true}
          onClick={() => {
            if (selectOption[0]) {
              setShowModal(true);
            }
          }}
          value={pageData[0] ? pageData.map((e) => e[optionLabel]) : ""}
        />
        {pageData[0] ? (
          <button
            className="suffixIcon"
            onClick={() => {
              setSelectedDivision([]);
              setCode([]);
              setStr([]);
              onValueChange(dataBack, []);
            }}
          >
            <img src={closeIcon} alt="clear" />
          </button>
        ) : (
          <button
            disabled={selectOption[0] ? false : true}
            onClick={() => setShowModal(true)}
            className="suffixIcon"
          >
            <img src={DownArrow} alt="search" />
          </button>
        )}
      </div>
      <DivisionModal
        showModal={showModal}
        setShowModal={setShowModal}
        ///  {...props}
        setCode={setCode}
        code={code}
        setStr={setStr}
        selectedValue={selectedValue}
        setSelectedDivision={setSelectedDivision}
        showPlaceholder={showPlaceholder}
        optionValue={optionValue}
        optionLabel={optionLabel}
        dataBack={dataBack}
        onValueChange={onValueChange}
        selectOption={selectOption}
        setPageData={setPageData}
        pageData={pageData}
        str={str}
        showAllSelectButton={showAllSelectButton}
      />
    </>
  );
}

function DivisionModal(props) {
  const {
    onValueChange,
    showModal,
    setShowModal,
    selectOption,
    selectedValue,
    dataBack,
    optionLabel,
    showPlaceholder,
    setSelectedDivision,
    optionValue,
    code,
    setCode,
    setStr,
    setPageData,
    str,
    showAllSelectButton = true,
    pageData = [],
  } = props;

  const [data, setData] = useState(selectOption);

  const onHide = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setData(selectOption);
    setSelectedDivision(pageData);
    let arr = [];
    if (pageData[0] ?? false) {
      pageData.map((el) => arr.push(el[optionValue]));
    }
    setCode(arr);
  }, [selectOption, showModal]);

  useEffect(() => {
    setCode([]);
    setStr([]);

    setSelectedDivision([]);
    if (selectOption.length === 1) {
      setStr([selectOption[0]]);
      setCode([selectOption[0][optionValue]]);
      setSelectedDivision([selectOption[0]]);
      onValueChange(dataBack, [selectOption[0]]);
    }
    console.log(selectOption ?? [0][optionValue]);
  }, [selectOption]);

  function onSearch(e) {
    const filter = selectOption.filter((value, i) => {
      return value[optionLabel].toLowerCase().includes(e.toLowerCase());
    });
    setData(filter);
  }
  const handleChange = (e, option) => {
    console.log(e, "e.target.checked");
    if (e.target.checked === true) {
      setSelectedDivision([...selectedValue, option]);

      const arr = [...selectedValue, option].map((el) => el[optionValue]);

      setCode(arr);
    } else {
      const filter = selectedValue.filter(
        (el) => el[optionValue] !== option[optionValue]
      );
      setSelectedDivision(filter);

      const array = [];
      filter.map((el) => array.push(el[optionValue]));

      setCode(array);
    }
  };
  const handleSubmit = () => {
    setPageData(selectedValue);
    onValueChange(dataBack, selectedValue);
    setStr(selectedValue);
    setShowModal(false);
  };
  // function isChecked(code = []) {
  //   const arr = new Array();
  //   data.map((e) => arr.push(e[optionValue]));

  //   if (arr.sort().join() === code.sort().join()) {
  //     setCheckBox(true);
  //   } else {
  //     setCheckBox(false);
  //   }
  // }
  return (
    <Modal
      id="doctor_modal"
      show={showModal}
      size="lg"
      backdrop="static"
      onHide={onHide}
      scrollable
    >
      <Modal.Header closeButton>
        <Modal.Title>{showPlaceholder}</Modal.Title>
      </Modal.Header>

      {selectOption[0] ? (
        <>
          <div className="position-relative m-3 mb-0">
            <Form.Control
              className="col-12 mb-3 "
              placeholder="Search .."
              type="text"
              onChange={(e) => onSearch(e.target.value)}
            />
            <button className="suffixIcon text-muted" disabled>
              <img src={searchIcon} alt="search" />
            </button>
          </div>
        </>
      ) : null}
      {console.log()}
      {data[0] && data.length === selectOption.length ? (
        showAllSelectButton ? (
          <div className="list-group-item list-group-item-action cursor-pointer">
            <Form.Check
              onChange={(e) => {
                // setCheckBox(e.target.checked);
                if (e.target.checked) {
                  setSelectedDivision(data);
                  const array = [];
                  data.map((el) => array.push(el[optionValue]));
                  setCode(array);
                } else {
                  setSelectedDivision([]);
                  setCode([]);
                  //setStr([]);
                }
              }}
              checked={data.length === code.length}
              type="checkbox"
              label={`Select All`}
            />
          </div>
        ) : null
      ) : null}
      <Modal.Body id="doctor_body">
        <div className="position-relative"></div>
        <div className="border-bottom"></div>
        <div className="col-12" id="doctor_list">
          <ul className="list-group list-unstyled">
            {data.length === 0 && (
              <li key={"-1"}>
                <center>No records available</center>
              </li>
            )}
            {data.map((option, index) => (
              <li
                key={index}
                className="list-group-item list-group-item-action cursor-pointer"
              >
                <Form.Check
                  onChange={(e) => handleChange(e, option)}
                  type="checkbox"
                  inline={true}
                  label={option[optionLabel]}
                  checked={code.includes(option[optionValue])}
                />
              </li>
            ))}
          </ul>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {data[0] ? (
          <Button variant="outline-primary" onClick={handleSubmit}>
            Apply
          </Button>
        ) : null}
      </Modal.Footer>
    </Modal>
  );
}
