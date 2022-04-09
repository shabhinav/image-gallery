import React from "react";
import { useContext } from "react";
import { MyContext } from "../../Context/Provider";
import "./style.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { imageUrlBuider } from "../../Utils";
import { Card } from "../../theme/styled-components";
import Skeleton from "../common/skeleton";

const Gallery = () => {
  const { data, loading, setPagination, page } = useContext(MyContext);

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div className='Gallery_container'>
      <Container>
        <Row>
          {data?.photo?.map((item) => (
            <Col sm={12} md={6} lg={4} xl={4}>
              <div className='gallery_card'>
                <Card>
                  <img
                    alt='gallery'
                    src={imageUrlBuider(item?.server, item?.id, item?.secret)}
                  />
                </Card>
              </div>
            </Col>
          ))}
        </Row>
        <div className='d-flex justify-content-end pb-5'>
          <button
            onClick={() => {
              if (page > 1 && data?.pages !== 1) setPagination(data?.page - 1);
            }}
            className='btn btn-success'
          >
            Prev
          </button>
          <button
            className='btn btn-primary next_button'
            onClick={() => {
              if (page <= data?.pages) setPagination(data?.page + 1);
            }}
          >
            Next
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Gallery;
