import {
  useState,
  useEffect,
  useCallback,
  useRef,
  MutableRefObject,
  RefObject,
} from 'react';
import { keyCodes } from 'utils';

// TODO: add touch method
export type InputMethod = 'keyboard' | 'mouse';

let prevInputMethod: InputMethod;

function handleKeyDown(event: KeyboardEvent): void {
  if (event.which === keyCodes.TAB) {
    prevInputMethod = 'keyboard';
  }
}

function handleMouseDown(): void {
  prevInputMethod = 'mouse';
}

function handleTouchStart(): void {
  prevInputMethod = 'mouse';
}

function addGlobalListeners(): void {
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('mousedown', handleMouseDown);
  document.addEventListener('touchstart', handleTouchStart);
}

export function useFocus<T extends HTMLElement>(
  inputMethod?: InputMethod,
): [MutableRefObject<T> | RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [focus, setFocus] = useState(false);

  const handleFocus = useCallback(() => {
    if (!inputMethod || inputMethod === prevInputMethod) {
      setFocus(true);
    }
  }, [inputMethod]);

  const handleBlur = useCallback(() => {
    setFocus(false);
  }, []);

  useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener('focusin', handleFocus);
      node.addEventListener('focusout', handleBlur);
    }

    return () => {
      if (node) {
        node.removeEventListener('focusin', handleFocus);
        node.removeEventListener('focusout', handleBlur);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleBlur, handleFocus, ref.current]);

  useEffect(addGlobalListeners, []);

  return [ref, focus];
}
