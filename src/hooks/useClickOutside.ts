import { useEffect, RefObject } from 'react';

const MOUSEDOWN = 'mousedown';
const TOUCHSTART = 'touchstart';

type TypeEvents = [typeof MOUSEDOWN, typeof TOUCHSTART];
type TypeEvent = TypeEvents[number];
type TypePossibleEvent = {
  [Type in TypeEvent]: HTMLElementEventMap[Type];
}[TypeEvent];
type TypeCallback = (event: TypePossibleEvent) => void;

const events: TypeEvents = [MOUSEDOWN, TOUCHSTART];

export function useClickOutside(
  ref: RefObject<HTMLElement>,
  callback: TypeCallback,
): void {
  useEffect(() => {
    const listener = (event: TypePossibleEvent): void => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      callback(event);
    };

    events.forEach((event) => {
      document.addEventListener(event, listener);
    });

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, listener);
      });
    };
  });
}
