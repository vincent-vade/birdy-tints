import { createSignal, createEffect } from 'solid-js';
import Values from 'values.js';

import TintsList from '../TintsList/TintsList';
import { buildTintConfig } from '../../helpers/buildTintConfig';

const PickColor = () => {
  const [currentColor, setCurrentColor] = createSignal('');
  const [colorName, setColorName] = createSignal('birdy');
  const [tints, setTints] = createSignal<Values[]>([]);
  const [config, setConfig] = createSignal<Record<string, any>>(null);

  const handlePickColor = (e) => {
    setCurrentColor(e.currentTarget.value);
    setTints(new Values(currentColor()).all(19));
  };

  createEffect(() => {
    setConfig(() => ({
      [colorName()]: buildTintConfig(tints()),
    }));
  });

  return (
    <>
      <div class="brd-wrapper">
        <TintsList tints={tints()} />
      </div>

      <div class="pick-color__config">
        <div class="px-4">
          <div class="mb-20">
            <label for="color">Pick you're color:</label>
            <input
              id="color"
              class="pick-color"
              type="color"
              onChange={handlePickColor}
            />
          </div>
          <div class="mb-20">
            <label for="color-name">Set the color name of this tint:</label>
            <input
              id="color-name"
              value={colorName()}
              onChange={(e) => {
                setColorName(e.currentTarget.value.toLowerCase());
              }}
              class="color-name-field"
            />
          </div>
        </div>

        <div>
          <p>1: Copy and paste inside tailwind config:</p>
          <pre>
            {JSON.stringify(
              {
                colors: {
                  ...config(),
                },
              },
              null,
              2,
            )}
          </pre>
        </div>
      </div>
    </>
  );
};

export default PickColor;
