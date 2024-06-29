import Column from "../atom/Column";
import IntroFirstCol from "../molecule/IntroFirstCol";
import IntroSecondCol from "../molecule/IntroSecondCol";

export default function Intro() {
  return (
    <div className="">
      <Column col1={<IntroFirstCol />} col2={<IntroSecondCol />} />
    </div>
  );
}
