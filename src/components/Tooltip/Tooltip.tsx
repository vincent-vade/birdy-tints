import './tooltip.css';
import { Component, Show, createEffect } from 'solid-js';

type TooltipProps = {
  show: boolean;
  position: { x: number; y: number };
  onClear: () => void;
};

const Tooltip: Component<TooltipProps> = (props) => {
  createEffect(() => {
    if (props.show) {
      setTimeout(() => {
        props.onClear();
      }, 3000);
    }
  });

  return (
    <Show when={props.show}>
      <div
        class="tooltip"
        style={{ top: props.position.y, left: props.position.x }}
      >
        Copied
      </div>
    </Show>
  );
};

export default Tooltip;
