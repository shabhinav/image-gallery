import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { MyContext } from "../../Context/Provider";
import { searchImages } from "../../services/search";
import "./style.scss";

const Navbar = () => {
  const { setData, setLoading, page } = useContext(MyContext);
  const [text, setText] = useState();

  //uncomment it for Applying debouncing

  // React.useEffect(() => {
  //   const timer = setTimeout(() => {
  //     searchApiHandler();
  //   }, 1000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [text]);

  useEffect(() => {
    searchApiHandler();
  }, [page]);

  const searchApiHandler = async () => {
    setLoading(true);
    try {
      let { data } = await searchImages(text, page);
      await setData(data.photos);
    } catch (err) {
      setData(err);
      setLoading(false);
    }
  };

  const onClickHandler = () => {
    searchApiHandler();
  };

  return (
    <div className='navbar'>
      <div class='input-group '>
        <Row className='navbar_row'>
          <Col xs={12} md={{ offset: 4 }} xl={{ offset: 4, span: 4 }}>
            <div className='search_container'>
              <input
                onChange={(e) => setText(e.target.value)}
                type='text'
                value={text}
                className='form-control'
                placeholder='Search'
                aria-describedby='basic-addon1'
              />
              <button
                onClick={onClickHandler}
                className='btn btn-secondary ml-2'
              >
                Search
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Navbar;
