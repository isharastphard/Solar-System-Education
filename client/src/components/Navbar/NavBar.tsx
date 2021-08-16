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
import QuizInfo from "components/Quizzes/Quizinfo";
import ClickHere from "components/ClickHere/clickHere";

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
        <Typography variant="h6" noWrap>
          <div
            className="help"
            onClick={() => {
              setModalContent(<ClickHere />);
              setShowModal(true);
            }}
          >
            CLICK HERE!
          </div>
        </Typography>
        <Typography
          variant="h6"
          noWrap
          onClick={(e) => {
            setPlanetDropDown(e.currentTarget);
          }}
        >
          <div className="planets">System-Info</div>
        </Typography>

        <Menu
          anchorEl={planetDropDown}
          id="planets-menu"
          keepMounted
          open={Boolean(planetDropDown)}
          onClose={() => setPlanetDropDown(null)}
        >
          <MenuItem
            onClick={() => {
              setModalContent(<PlanetsInfo name={"Jupiter"} />);
              setShowModal(true);
            }}
          >
            Jupiter
          </MenuItem>
          <MenuItem
            onClick={() => {
              setModalContent(<PlanetsInfo name={"Earth"} />);
              setShowModal(true);
            }}
          >
            Earth
          </MenuItem>
          <MenuItem
            onClick={() => {
              setModalContent(<PlanetsInfo name={"Mars"} />);
              setShowModal(true);
            }}
          >
            Mars
          </MenuItem>
          <MenuItem
            onClick={() => {
              setModalContent(<PlanetsInfo name={"Neptune"} />);
              setShowModal(true);
            }}
          >
            Neptune
          </MenuItem>
          <MenuItem
            onClick={() => {
              setModalContent(<PlanetsInfo name={"Venus"} />);
              setShowModal(true);
            }}
          >
            Venus{" "}
          </MenuItem>
          <MenuItem
            onClick={() => {
              setModalContent(<PlanetsInfo name={"Mercury"} />);
              setShowModal(true);
            }}
          >
            Mercury{" "}
          </MenuItem>
          <MenuItem
            onClick={() => {
              setModalContent(<PlanetsInfo name={"Saturn"} />);
              setShowModal(true);
            }}
          >
            Saturn{" "}
          </MenuItem>
          <MenuItem
            onClick={() => {
              setModalContent(<PlanetsInfo name={"Uranus"} />);
              setShowModal(true);
            }}
          >
            Uranus{" "}
          </MenuItem>
          <MenuItem
            onClick={() => {
              setModalContent(<PlanetsInfo name={"Sun"} />);
              setShowModal(true);
            }}
          >
            {" "}
            Sun{" "}
          </MenuItem>
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
          <MenuItem
            onClick={() => {
              setModalContent(<QuizInfo quizName={"Jupiter"} />);
              setShowModal(true);
            }}
          >
            Jupiter Quiz
          </MenuItem>
          <MenuItem
            onClick={() => {
              setModalContent(<QuizInfo quizName={"Earth"} />);
              setShowModal(true);
            }}
          >
            Earth Quiz
          </MenuItem>
          <MenuItem
            onClick={() => {
              setModalContent(<QuizInfo quizName={"Mars"} />);
              setShowModal(true);
            }}
          >
            Mars Quiz
          </MenuItem>
          <MenuItem
            onClick={() => {
              setModalContent(<QuizInfo quizName={"Neptune"} />);
              setShowModal(true);
            }}
          >
            Neptune Quiz
          </MenuItem>
          <MenuItem
            onClick={() => {
              setModalContent(<QuizInfo quizName={"Venus"} />);
              setShowModal(true);
            }}
          >
            Venus Quiz
          </MenuItem>
          <MenuItem
            onClick={() => {
              setModalContent(<QuizInfo quizName={"Mercury"} />);
              setShowModal(true);
            }}
          >
            Mercury Quiz
          </MenuItem>
          <MenuItem
            onClick={() => {
              setModalContent(<QuizInfo quizName={"Saturn"} />);
              setShowModal(true);
            }}
          >
            Saturn Quiz
          </MenuItem>
          <MenuItem
            onClick={() => {
              setModalContent(<QuizInfo quizName={"Uranus"} />);
              setShowModal(true);
            }}
          >
            Uranus Quiz
          </MenuItem>
          <MenuItem
            onClick={() => {
              setModalContent(<QuizInfo quizName={"Sun"} />);
              setShowModal(true);
            }}
          >
            Sun Quiz
          </MenuItem>
          <MenuItem
            onClick={() => {
              setModalContent(<QuizInfo quizName={"General"} />);
              setShowModal(true);
            }}
          >
            General Quiz
          </MenuItem>
        </Menu>
      </Toolbar>
      <Modal open={showModal}>
        <div>
          <div className="modal-container">
            {modalContent}
            <span className="close-button topright">
              <Button
                className="closeModal"
                onClick={() => setShowModal(false)}
              >
                <div className="close">x</div>
              </Button>
            </span>
          </div>
        </div>
      </Modal>
    </AppBar>
  );
}
export default NavBar;
