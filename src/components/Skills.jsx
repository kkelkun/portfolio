import React from 'react';

import { Rate, Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';

import styled from 'styled-components';

const Wrapper = styled(Col)`
  padding: 1rem 0;
`;

const Name = styled.div`
  font-size: 1rem;
  font-weight: 400;
`;

const Skill = ({ name, rate }) => (
  <Wrapper span={12}>
    <Col span={12}>
      <Name>{name}</Name>
    </Col>
    <Col span={12}>
      <Rate disabled allowHalf defaultValue={rate} />
    </Col>
  </Wrapper>
);

const Skills = ({ title, data }) => {
  if (data) {
    const skills = data.map(skill => (
      <Skill key={skill.name} name={skill.name} rate={skill.rate} />
    ));
    return (
      <Wrapper>
        <h3>{title}</h3>
        <Divider />
        <Row>{skills}</Row>
      </Wrapper>
    );
  }
};

export default Skills;
