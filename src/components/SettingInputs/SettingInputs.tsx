import s from "./SettingInputs.module.css"

type SettingInputsProps = {
  maxValue: number
  startValue: number
  setMaxValue: (value: number) => void
  setStartValue: (value: number) => void
  isError: boolean
};

export const SettingInputs = (props: SettingInputsProps) => {
  const {maxValue, startValue, setMaxValue, setStartValue, isError} = props
  return (
    <div className={s.inputsContainer}>
      <div className={s.inputBlock}>
        <span>max value:</span>
        <input
          type="number"
          value={maxValue}
          onChange={(e) => setMaxValue(Number(e.currentTarget.value))}
          className={isError ? s.errorInput : ''}
        />
      </div>
      <div className={s.inputBlock}>
        <span>start value:</span>
        <input
          type="number"
          value={startValue}
          onChange={(e) => setStartValue(Number(e.currentTarget.value))}
          className={isError ? s.errorInput : ''}
        />
      </div>
    </div>
  );
};