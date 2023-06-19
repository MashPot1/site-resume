import React from "react";
import Block from "./Block";
import styles from "./ConverterCurrencies.module.scss";

const ConverterCurrencies = () => {
  const [fromCurrency, setFromCurrency] = React.useState("RUB");
  const [toCurrency, setToCurrency] = React.useState("USD");
  const [fromValue, setFromValue] = React.useState(0);
  const [toValue, setToValue] = React.useState(1);
  const [isMounted, setIsMounted] = React.useState(false);
  const ratesRef = React.useRef({});
  const itemsRef = React.useRef([]);

  React.useEffect(() => {
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
      .then((res) => res.json())
      .then((json) => {
        json = JSON.stringify(json.Valute);
        json = json.substring(0, json.length - 1);
        json += ',"RUB": { "Nominal": 1, "Value": 1 }}';
        ratesRef.current = JSON.parse(json);
        onChangeToCurrency(toValue);

        Object.keys(ratesRef.current).forEach((key) => {
          itemsRef.current.push({ label: `${key}`, key: `${key}` });
        });
      })
      .catch((err) => console.warn(err));
  }, []);

  const onChangeFromCurrency = (value) => {
    const result =
      (value / ratesRef.current[toCurrency].Value) *
      (ratesRef.current[toCurrency].Nominal /
        ratesRef.current[fromCurrency].Nominal) *
      ratesRef.current[fromCurrency].Value;
    setFromValue(value);
    setToValue(Math.trunc(result * 100) / 100);
  };

  const onChangeToCurrency = (value) => {
    const result =
      (value / ratesRef.current[fromCurrency].Value) *
      (ratesRef.current[fromCurrency].Nominal /
        ratesRef.current[toCurrency].Nominal) *
      ratesRef.current[toCurrency].Value;
    setToValue(value);
    setFromValue(Math.trunc(result * 100) / 100);
  };

  React.useEffect(() => {
    if (isMounted) {
      onChangeFromCurrency(fromValue);
      onChangeToCurrency(toValue);
    } else setIsMounted(true);
  }, [fromCurrency, toCurrency]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Block
        value={fromValue}
        allCurrencies={itemsRef.current}
        onChangeCurrency={setFromCurrency}
        onChangeValue={onChangeFromCurrency}
        cur={"RUB"}
      />
      <svg
        width="48px"
        height="48px"
        viewBox="0 0 612.017 612.017"
        className={styles.doubleArrow}
      >
        <g>
          <g id="_x34_">
            <g>
              <path d="M606.521,291.429l-113.23-113.555c-7.495-7.515-19.656-7.515-27.15,0c-7.495,7.514-7.189,20.42-7.189,32.828v57.361     H153.027v-57.361c0-12.408,0.306-25.314-7.189-32.828c-7.495-7.515-19.656-7.515-27.151,0L5.457,291.429     c-3.996,4.015-5.698,9.331-5.43,14.57c-0.268,5.258,1.434,10.573,5.43,14.589l113.249,113.555c7.495,7.515,19.656,7.515,27.151,0     c7.495-7.514,7.189-24.722,7.189-32.236v-57.361h305.924v57.361c0,12.408-0.307,24.722,7.188,32.236s19.656,7.515,27.151,0     L606.56,320.587c3.996-4.015,5.697-9.331,5.43-14.589C612.218,300.759,610.518,295.443,606.521,291.429z" />
            </g>
          </g>
        </g>
      </svg>
      <Block
        value={toValue}
        allCurrencies={itemsRef.current}
        onChangeCurrency={setToCurrency}
        onChangeValue={onChangeToCurrency}
        cur={"USD"}
      />
    </div>
  );
};

export default ConverterCurrencies;
