import React, { useState, useRef } from "react";
import "./../../assets/NavBar.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Modal,
  Menu,
  MenuItem,
  Button
} from "@material-ui/core";
import Earth from "components/PlanetsInfo/Earth";
import "./../../assets/ModalStyle.css";
function NavBar() {
  const [modalContent, setModalContent] = useState(
    <React.Fragment></React.Fragment>
  );
  const [showModal, setShowModal] = useState(false);
  const [dropDown, SetDropDown] = useState<HTMLElement | null>(null);
  return (
    <AppBar className="nav-container"  style={{ background: '#2E3B55' }}>
      <Toolbar>
        <Typography variant="h4" noWrap>
          Solar System
        </Typography>
        <Typography
          variant="h6"
          noWrap
          onClick={() => {
            setModalContent(<Earth />);
            setShowModal(true);
          }}
        ><div className='planets'>
          Earth
          </div>
        </Typography>

        <Typography
          variant="h6"
          noWrap
          onClick={(e) => {
            SetDropDown(e.currentTarget);
          }}
        >
          <div className='quiz'>  
          Quiz
          </div>
        </Typography>
        <Menu
          anchorEl={dropDown}
          id="simple-menu"
          keepMounted
          open={Boolean(dropDown)}
          onClose = {() => SetDropDown(null)}
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
          <div className='compare'>
             Compare
          </div>
        </Typography>
      </Toolbar>
      <Modal open={showModal}>
        <div className="modal-container">{modalContent}
                <Button onClick={()=> setShowModal(false)}>X</Button>
        </div>
      </Modal>
    </AppBar>
  );
}
export default NavBar;
