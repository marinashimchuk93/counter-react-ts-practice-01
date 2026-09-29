import s from "./CounterDisplay.module.css"

type CounterDisplayProps = {
  count: number
  maxValue: number
};

export const CounterDisplay = (props: CounterDisplayProps) => {
  const {count, maxValue} = props

  const isMaxReached = count === maxValue

  const displayClassName = `${s.display} ${isMaxReached ? s.errorText : s.normalText}`


  return (
    <div className={displayClassName}>
      {count}
    </div>
  );
};