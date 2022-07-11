import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Modal from "react-modal";
import DirectionReveal from "direction-reveal";
import ModalOneContent from "./modal/ModalOneContent";
import ModalTwoContent from "./modal/ModalTwoContent";
import ModalThreeContent from "./modal/ModalThreeContent";
import ModalFourContent from "./modal/ModalFourContent";
import ModalFiveContent from "./modal/ModalFiveContent";
import ModalSixContent from "./modal/ModalSixContent";
import ModalSevenContent from "./modal/ModalSevenContent";
import ModalEightContent from "./modal/ModalEightContent";
import ModalNineContent from "./modal/ModalNineContent";

const PortfolioLight = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalFive() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalSix() {
    setIsOpen6(!isOpen6);
  }
  function toggleModalSeven() {
    setIsOpen7(!isOpen7);
  }
  function toggleModalEight() {
    setIsOpen8(!isOpen8);
  }
  function toggleModalNine() {
    setIsOpen9(!isOpen9);
  }

  useEffect(() => {
    // Init with default setup
    DirectionReveal();

    // Init with all options at default setting
    DirectionReveal({
      selector: ".direction-reveal",
      itemSelector: ".direction-reveal__card",
      animationName: "slide",
      animationPostfixEnter: "enter",
      animationPostfixLeave: "leave",
      touchThreshold: 500,
    });
  }, []);

  return (
    <Tabs>
      <TabList className="portfolio-tab-list">
        <Tab>ALL</Tab>
        <Tab>Applications</Tab>
        <Tab>Websites</Tab>
        {/* <Tab>Graphic Design</Tab> */}
        {/* <Tab>Logo</Tab> */}
      </TabList>

      <div className="portfolio-tab-content">
        <TabPanel>
          <ul className="row grid">
            {/* <!-- Portfolio NubiaEMR Starts --> */}
            <li className="direction-reveal">
              <figure className="direction-reveal__card" onClick={toggleModalOne}>
                <img src="img/projects/nubiaemr.jpg" alt="Portolio" />
                <div className=" direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title">Medical Record System (Hospital)</span>
                </div>
              </figure>

              {/* <!-- Portfolio Item Starts --> */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="custom-modal dark green"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalOneContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalOneContent */}
            </li>
            {/* <!-- Portfolio NubiaEMR Ends --> */}

            {/* <!-- Portfolio NubiaPortal Starts --> */}
            <li className="direction-reveal">
              <figure className="direction-reveal__card" onClick={toggleModalTwo}>
                <img src="img/projects/nubiaportal.jpg" alt="Portolio" />
                <div className=" direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title">Medical Record System (Patient) </span>
                </div>
              </figure>

              {/* Start ModalTwoContent */}
              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="custom-modal dark green"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalTwoContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalTwoContent */}
            </li>
            {/* <!-- Portfolio NubiaPortal Ends --> */}

            {/* <!-- Portfolio Sronu Starts --> */}
            <li className="direction-reveal">
              <figure className="direction-reveal__card" onClick={toggleModalThree}>
                <img src="img/projects/sronu.jpg" alt="Portolio" />
                <div className=" direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title">School Management System</span>
                </div>
              </figure>

              {/* Start ModalThreeContent */}
              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="custom-modal dark green"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalThreeContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalThreeContent */}
            </li>
            {/* <!-- Portfolio Sronu Ends --> */}

            {/* <!-- Portfolio Biwad Starts --> */}
            <li className="direction-reveal">
              <figure className="direction-reveal__card" onClick={toggleModalFour}>
                <img src="img/projects/biwad.jpg" alt="Portolio" />
                <div className="direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title">Biwad Group Website</span>
                </div>
              </figure>

              {/* Start ModalFourContent */}
              <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="My dialog"
                className="custom-modal dark green"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFour}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalFourContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalFourContent */}
            </li>
            {/* <!-- Portfolio Biwad Ends --> */}

            {/* <!-- Portfolio penda Starts --> */}
            <li className="direction-reveal">
              <figure className="direction-reveal__card" onClick={toggleModalFive}>
                <img src="img/projects/penda_real_estate.jpg" alt="Portolio" />
                <div className="direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title"> Penda Real Estate website</span>
                </div>
              </figure>

              {/* Start ModalFiveContent */}
              <Modal
                isOpen={isOpen5}
                onRequestClose={toggleModalFive}
                contentLabel="My dialog"
                className="custom-modal dark green"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFive}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalFiveContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalFiveContent */}
            </li>
            {/* <!-- Portfolio penda Ends --> */}

            {/* <!-- Portfolio biwad_real_estate Starts --> */}
            <li className="direction-reveal">
              <figure className="direction-reveal__card" onClick={toggleModalSix}>
                <img src="img/projects/real_estate.bwadgroup.jpg" alt="Portolio" />
                <div className=" direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title">Biwad Group Real Estate website</span>
                </div>
              </figure>

              {/* Start ModalSixContent */}
              <Modal
                isOpen={isOpen6}
                onRequestClose={toggleModalSix}
                contentLabel="My dialog"
                className="custom-modal dark green"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalSix}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalSixContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalSixContent */}
            </li>
            {/* <!-- Portfolio biwad_real_estate Ends --> */}

            {/* <!-- Portfolio biwad_shop Starts --> */}
            <li className="direction-reveal">
              <figure className="direction-reveal__card" onClick={toggleModalSeven}>
                <img src="img/projects/shop.biwadgroup.jpg" alt="Portolio" />
                <div className=" direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title"> Biwad Group Shop Website</span>
                </div>
              </figure>

              {/* Start ModalSevenContent */}
              <Modal
                isOpen={isOpen7}
                onRequestClose={toggleModalSeven}
                contentLabel="My dialog"
                className="custom-modal dark green"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalSeven}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalSevenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalSevenContent */}
            </li>
            {/* <!-- Portfolio biwad_shop Ends --> */}

            {/* <!-- Portfolio stay_withbels Starts --> */}
            <li className="direction-reveal">
              <figure className="direction-reveal__card" onClick={toggleModalEight}>
                <img src="img/projects/stayswithbels.jpg" alt="Portolio" />
                <div className="direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title">StayWithBels website</span>
                </div>
                {/* Start ModalEightContent */}
                <Modal
                  isOpen={isOpen8}
                  onRequestClose={toggleModalEight}
                  contentLabel="My dialog"
                  className="custom-modal dark green"
                  overlayClassName="custom-overlay"
                  closeTimeoutMS={500}
                >
                  <div>
                    <button className="close-modal" onClick={toggleModalEight}>
                      <img src="/img/cancel.svg" alt="close icon" />
                    </button>
                    {/* End close icon */}

                    <div className="box_inner portfolio">
                      <ModalEightContent />
                    </div>
                  </div>
                </Modal>
                {/* End  ModalEightContent */}
              </figure>
            </li>
            {/* <!-- Portfolio stay_withbels Ends --> */}

            {/* <!-- Portfolio Item Starts --> */}
            <li className="direction-reveal">
              <figure className="direction-reveal__card" onClick={toggleModalNine}>
                <img src="img/projects/9.jpg" alt="Portolio" />
                <div className="direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title">Behance Project</span>
                </div>
              </figure>

              {/* Start ModalNineContent */}
              <Modal
                isOpen={isOpen9}
                onRequestClose={toggleModalNine}
                contentLabel="My dialog"
                className="custom-modal dark green"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalNine}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalNineContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalNineContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}
          </ul>
        </TabPanel> 
        {/* End All Project */}
        <TabPanel>
          <ul className="row grid justify-content-center">
            {/* <!-- Portfolio NubiaEMR Starts --> */}
            <li className="direction-reveal">
              <figure className="direction-reveal__card" onClick={toggleModalOne}>
                <img src="img/projects/nubiaemr.jpg" alt="Portolio" />
                <div className=" direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title">Medical Record System (Hospital)</span>
                </div>
              </figure>

              {/* <!-- Portfolio Item Starts --> */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="custom-modal dark green"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalOneContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalOneContent */}
            </li>
            {/* <!-- Portfolio NubiaEMR Ends --> */}

            {/* <!-- Portfolio NubiaPortal Starts --> */}
            <li className="direction-reveal">
              <figure className="direction-reveal__card" onClick={toggleModalTwo}>
                <img src="img/projects/nubiaportal.jpg" alt="Portolio" />
                <div className=" direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title">Medical Record System (Patient) </span>
                </div>
              </figure>

              {/* Start ModalTwoContent */}
              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="custom-modal dark green"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalTwoContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalTwoContent */}
            </li>
            {/* <!-- Portfolio NubiaPortal Ends --> */}

            {/* <!-- Portfolio Sronu Starts --> */}
            <li className="direction-reveal">
              <figure className="direction-reveal__card" onClick={toggleModalThree}>
                <img src="img/projects/sronu.jpg" alt="Portolio" />
                <div className=" direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title">School Management System</span>
                </div>
              </figure>

              {/* Start ModalThreeContent */}
              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="custom-modal dark green"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalThreeContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalThreeContent */}
            </li>
            {/* <!-- Portfolio Sronu Ends --> */}
          </ul>
        </TabPanel>
        {/* End Logo Project */}
        <TabPanel>
          <ul className="row grid justify-content-center">
            {/* <!-- Portfolio Biwad Starts --> */}
            <li className="direction-reveal">
              <figure className="direction-reveal__card" onClick={toggleModalFour}>
                <img src="img/projects/biwad.jpg" alt="Portolio" />
                <div className="direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title">Biwad Group Website</span>
                </div>
              </figure>

              {/* Start ModalFourContent */}
              <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="My dialog"
                className="custom-modal dark green"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFour}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalFourContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalFourContent */}
            </li>
            {/* <!-- Portfolio Biwad Ends --> */}

            {/* <!-- Portfolio penda Starts --> */}
            <li className="direction-reveal">
              <figure className="direction-reveal__card" onClick={toggleModalFive}>
                <img src="img/projects/penda_real_estate.jpg" alt="Portolio" />
                <div className="direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title"> Penda Real Estate website</span>
                </div>
              </figure>

              {/* Start ModalFiveContent */}
              <Modal
                isOpen={isOpen5}
                onRequestClose={toggleModalFive}
                contentLabel="My dialog"
                className="custom-modal dark green"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFive}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalFiveContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalFiveContent */}
            </li>
            {/* <!-- Portfolio penda Ends --> */}

            {/* <!-- Portfolio biwad_real_estate Starts --> */}
            <li className="direction-reveal">
              <figure className="direction-reveal__card" onClick={toggleModalSix}>
                <img src="img/projects/real_estate.bwadgroup.jpg" alt="Portolio" />
                <div className=" direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title">Biwad Group Real Estate website</span>
                </div>
              </figure>

              {/* Start ModalSixContent */}
              <Modal
                isOpen={isOpen6}
                onRequestClose={toggleModalSix}
                contentLabel="My dialog"
                className="custom-modal dark green"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalSix}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalSixContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalSixContent */}
            </li>
            {/* <!-- Portfolio biwad_real_estate Ends --> */}

            {/* <!-- Portfolio biwad_shop Starts --> */}
            <li className="direction-reveal">
              <figure className="direction-reveal__card" onClick={toggleModalSeven}>
                <img src="img/projects/shop.biwadgroup.jpg" alt="Portolio" />
                <div className=" direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title"> Biwad Group Shop Website</span>
                </div>
              </figure>

              {/* Start ModalSevenContent */}
              <Modal
                isOpen={isOpen7}
                onRequestClose={toggleModalSeven}
                contentLabel="My dialog"
                className="custom-modal dark green"
                overlayClassName="custom-overlay"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalSeven}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalSevenContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalSevenContent */}
            </li>
            {/* <!-- Portfolio biwad_shop Ends --> */}

            {/* <!-- Portfolio stay_withbels Starts --> */}
            <li className="direction-reveal">
              <figure className="direction-reveal__card" onClick={toggleModalEight}>
                <img src="img/projects/stayswithbels.jpg" alt="Portolio" />
                <div className="direction-reveal__overlay direction-reveal__anim--enter">
                  <span className="direction-reveal__title">StayWithBels website</span>
                </div>
                {/* Start ModalEightContent */}
                <Modal
                  isOpen={isOpen8}
                  onRequestClose={toggleModalEight}
                  contentLabel="My dialog"
                  className="custom-modal dark green"
                  overlayClassName="custom-overlay"
                  closeTimeoutMS={500}
                >
                  <div>
                    <button className="close-modal" onClick={toggleModalEight}>
                      <img src="/img/cancel.svg" alt="close icon" />
                    </button>
                    {/* End close icon */}

                    <div className="box_inner portfolio">
                      <ModalEightContent />
                    </div>
                  </div>
                </Modal>
                {/* End  ModalEightContent */}
              </figure>
            </li>
            {/* <!-- Portfolio stay_withbels Ends --> */}
          </ul>
        </TabPanel>
        {/* End Logo Project */}
        <TabPanel>
          <ul className="row grid justify-content-center">

          </ul>
        </TabPanel>
        {/* End Logo Project */}
        <TabPanel>
          <ul className="row grid justify-content-center">

          </ul>
        </TabPanel>
        {/* End MOCKUP Project */}
      </div>
    </Tabs>
  );
};

export default PortfolioLight;
