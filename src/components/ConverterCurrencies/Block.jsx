import React from "react";
import { Dropdown, message, Space } from "antd";
import styles from "./ConverterCurrencies.module.scss";

const Block = ({
  value,
  allCurrencies,
  onChangeValue,
  onChangeCurrency,
  cur,
}) => {
  const [activeCur, setActiveCur] = React.useState(cur);
  const items = allCurrencies;

  const onClick = ({ key }) => {
    message.info(`Выбрана валюта ${key}`);
    onChangeCurrency(key);
    setActiveCur(key);
  };

  return (
    <div className={styles.block}>
      <ul className={styles.currencies}>
        <li>{activeCur}</li>
        <li>
          <Dropdown
            menu={{
              items,
              onClick,
            }}
            trigger={"click"}
          >
            <a href="/" onClick={(e) => e.preventDefault()}>
              <Space>
                <svg height="50px" viewBox="0 0 50 50" width="50px">
                  <rect fill="none" height="50" width="50" />
                  <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
                </svg>
              </Space>
            </a>
          </Dropdown>
        </li>
      </ul>
      <input
        onChange={(e) => onChangeValue(e.target.value)}
        value={value}
        type="number"
        placeholder={0}
      />
    </div>
  );
};

export default Block;
