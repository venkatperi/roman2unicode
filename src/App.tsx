import React, { useEffect, useState } from "react";
import { Input, Select } from "antd";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import { roman2unicode, UNICODE_BLOCKS } from "./utils/transliterate";

const { TextArea } = Input;
const { Option } = Select;

const App = () => {
  const [roman, setRoman] = useState<string>("");
  const [target, setTarget] = useState(UNICODE_BLOCKS.telugu);

  return (
    <>
      <Row>
        <Col span={12}>Roman</Col>
        <Col span={12}>
          <Select
            defaultValue={UNICODE_BLOCKS.telugu}
            style={{ width: 120 }}
            onChange={(x) => setTarget(x)}
          >
            <Option value={UNICODE_BLOCKS.devanagari}>Devanagari</Option>
            <Option value={UNICODE_BLOCKS.telugu}>Telugu</Option>
          </Select>
        </Col>
      </Row>
      <Row className="height100">
        <Col span={12} className="height100">
          <TextArea
            className="height100"
            onChange={(x) => setRoman(x.target.value)}
          />
        </Col>
        <Col span={12}>
          <TextArea
            className="height100"
            readOnly
            value={roman2unicode(roman, target)}
          />
        </Col>
      </Row>
    </>
  );
};

export default App;
