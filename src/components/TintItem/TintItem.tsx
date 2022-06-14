import { Component, createSignal, Show } from 'solid-js';
import Values from 'values.js';
import Tooltip from '../Tooltip/Tooltip';

type TintItemProps = {
  tint: Values;
};

const TintItem: Component<TintItemProps> = (props) => {
  const [isCopied, setIsCopied] = createSignal(false);

  const [position, setPosition] = createSignal({ x: 0, y: 0 });

  const tintStr = props.tint.hexString();

  const handleClick = async (e) => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(tintStr);
      setIsCopied(true);
      setPosition({ x: e.clientX, y: e.clientY });
    }
  };

  return (
    <>
      <section
        class="brd-tint"
        style={{ background: `rgb(${props.tint.rgb})`, flex: 1 }}
        onClick={handleClick}
        title={tintStr}
      >
        <div class="brd-tint__content">
          <p class="brd-tint__text">{tintStr}</p>

          <Tooltip
            show={isCopied()}
            position={position()}
            onClear={() => setIsCopied((isCopied) => !isCopied)}
          />
        </div>
      </section>
    </>
  );
};

export default TintItem;
