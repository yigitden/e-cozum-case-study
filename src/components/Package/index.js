import { Card, Divider, Col, Row } from "antd";
import React from "react";
import { getAllPackages } from "../../features/PackageSlice";
import PackageCard from "./Card";
import PackageFooter from "./Footer";
import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../store";

const Package = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllPackages());
  }, [dispatch]);

  const allPackages = useAppSelector((state) => state.package.data);
  console.log(allPackages);

  return (
    <Card className="packageList">
      <Row span={24} gutter={[32, 24]}>
        {allPackages.map((card) => (
          <Col span={12} key={card.id}>
            <PackageCard card={card} />
          </Col>
        ))}
      </Row>

      <Divider />
      <PackageFooter />
    </Card>
  );
};

export default Package;
