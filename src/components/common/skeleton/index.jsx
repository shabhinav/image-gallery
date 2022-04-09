import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SkeletonLoader from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { skeletonBox } from "../../../Resources/constant";
import { Card } from "../../../theme/styled-components";
import "./style.scss";

const CardSkeleton = () => {
  return (
    <div className='skeleton_container'>
      <Container>
        <Card>
          <Row>
            {skeletonBox?.map((item) => (
              <Col sm={12} md={6} lg={4} xl={4}>
                <SkeletonLoader height={"250px"} />
              </Col>
            ))}
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default CardSkeleton;
