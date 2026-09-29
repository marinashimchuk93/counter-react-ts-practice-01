import './App.css'
import {useEffect, useState} from "react";
import {CounterDisplay} from "./components/CounterDisplay/CounterDisplay.tsx";
import {Button} from "./components/Button/Button.tsx";
import {SettingInputs} from "./components/SettingInputs/SettingInputs.tsx";


export const App = () => {
  const [maxValue, setMaxValue] = useState<number>(() =>
    Number(localStorage.getItem("counterMaxValue")) || 5
  )
  const [startValue, setStartValue] = useState<number>(() =>
    Number(localStorage.getItem("counterStartValue")) || 0
  )
  const [count, setCount] = useState<number>(() =>
    Number(localStorage.getItem("counterValue")) || 0
  )

  useEffect(() => {
    localStorage.setItem("counterValue", String(count))
  }, [count])

  const [isSettingsMode, setIsSettingsMode] = useState<boolean>(false)

  const isError = startValue < 0 || maxValue <= startValue

  const onSetClickHandler = () => {
    if (!isSettingsMode) {
      setIsSettingsMode(true)
    } else {
      if (!isError) {
        localStorage.setItem("counterMaxValue", String(maxValue))
        localStorage.setItem("counterStartValue", String(startValue))
        setCount(startValue)
        setIsSettingsMode(false)
      }
    }
  }

  const onIncrement = () => count < maxValue && setCount(count + 1)
  const onReset = () => setCount(startValue)


  return (
    <div className={"app"}>
      <div className={"topWrapper"}>
        {isSettingsMode ? (
          <SettingInputs
            maxValue={maxValue}
            startValue={startValue}
            setMaxValue={setMaxValue}
            setStartValue={setStartValue}
            isError={isError}
          />
        ) : (
          <CounterDisplay
            count={count}
            maxValue={maxValue}
          />
        )}
      </div>
      <div className={"buttonWrapper"}>
        {isSettingsMode ? (
          <Button
            onClick={onSetClickHandler}
            disabled={isError}
          >
            set
          </Button>
        ) : (
          <>
            <Button
              onClick={onIncrement}
              disabled={count === maxValue}
            >
              inc
            </Button>

            <Button
              onClick={onReset}
              disabled={count === startValue}
            >
              reset
            </Button>

            <Button
              onClick={onSetClickHandler}
            >
              set
            </Button>
          </>
        )}
      </div>
    </div>
  );
};