import React, { useState, useRef } from "react";
import "./../../assets/NavBar.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Modal,
  Menu,
  MenuItem,
  Button,
} from "@material-ui/core";
import PlanetsInfo from "components/PlanetsInfo/PlanetsInfo";
import "./../../assets/ModalStyle.css";
function NavBar() {
  const [modalContent, setModalContent] = useState(
    <React.Fragment></React.Fragment>
  );
  const [showModal, setShowModal] = useState(false);
  const [dropDown, SetDropDown] = useState<HTMLElement | null>(null);
  const [planetDropDown, setPlanetDropDown] = useState<HTMLElement | null>(
    null
  );
  return (
    <AppBar style={{ background: "#2E3B55" }}>
      <Toolbar>
        <Typography variant="h4" noWrap>
          <div className="title">Solar System</div>
        </Typography>
        <Typography
          variant="h6"
          noWrap
          onClick={(e) => {
            setPlanetDropDown(e.currentTarget);
          }}
        >
          <div className="planets">Planets</div>
        </Typography>
        <Menu
          anchorEl={planetDropDown}
          id="planets-menu"
          keepMounted
          open={Boolean(planetDropDown)}
          onClose={() => setPlanetDropDown(null)}
        >
          <MenuItem>Jupiter</MenuItem>
          <MenuItem
            onClick={() => {
              setModalContent(<PlanetsInfo name={'Earth'}/>);
              setShowModal(true);
            }}
          >Earth</MenuItem>
          <MenuItem onClick={() => {setModalContent(<PlanetsInfo name = {'Mars'}/>);setShowModal(true);}}>Mars</MenuItem>
          <MenuItem onClick={() => {setModalContent(<PlanetsInfo name = {'Neptune'}/>);setShowModal(true);}}>Neptune</MenuItem>
          <MenuItem onClick={() => {setModalContent(<PlanetsInfo name = {'Venus'}/>);setShowModal(true);}}>Venus </MenuItem>
          <MenuItem>Mercury </MenuItem>
          <MenuItem>Saturn </MenuItem>
          <MenuItem>Uranus </MenuItem>
        </Menu>
        <Typography
          variant="h6"
          noWrap
          onClick={(e) => {
            SetDropDown(e.currentTarget);
          }}
        >
          <div className="quiz">Quiz</div>
        </Typography>
        <Menu
          anchorEl={dropDown}
          id="quiz-menu"
          keepMounted
          open={Boolean(dropDown)}
          onClose={() => SetDropDown(null)}
        >
          <MenuItem>Jupiter Quiz</MenuItem>
          <MenuItem>Earth Quiz</MenuItem>
          <MenuItem>Mars Quiz</MenuItem>
          <MenuItem>Neptune Quiz</MenuItem>
          <MenuItem>Venus Quiz</MenuItem>
          <MenuItem>Mercury Quiz</MenuItem>
          <MenuItem>Saturn Quiz</MenuItem>
          <MenuItem>Uranus Quiz</MenuItem>
        </Menu>
        <Typography variant="h6" noWrap>
          <div className="compare">Compare</div>
        </Typography>
      </Toolbar>
      <Modal open={showModal}>
        <div className="modal-container">
          {modalContent}
          <Button className="closeModal" onClick={() => setShowModal(false)}>
            <div className='close'>x</div>
          </Button>
        </div>
      </Modal>
    </AppBar>
  );
}
export default NavBar;
