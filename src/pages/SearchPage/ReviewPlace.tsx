import React from "react";
import styled from "styled-components";

import ReviewHeader from "../../components/forSearchPage/ReviewHeader/ReviewHeader";
import ReviewDetails from "../../components/forSearchPage/ReviewDetails/ReviewDetails";
import Modal from "../../components/forSearchPage/Modal/Modal";

export default function ReviewPlace() {

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  function handleClick(isModalOpen: boolean) {
    setIsModalOpen(isModalOpen);
  };

  return (
    <>
      {!isModalOpen && <>
        <ReviewWrapper>
          <ReviewHeader />
          <ReviewDetails updateisModalOpen={handleClick} />
        </ReviewWrapper>
      </>}
      {isModalOpen && <Modal updateisModalOpen={handleClick} />}
    </>
  );
};

const ReviewWrapper = styled.div`
  background: linear-gradient(180deg, #5175FF 0%, #CFDAE6 100%);
`;