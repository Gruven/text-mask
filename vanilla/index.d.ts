// Type definitions for vanilla-text-mask-legacy 5.2
// Project: https://github.com/Gruven/text-mask/tree/master/react
// Definitions by: Alexander Kupriyanov <https://github.com/Gruven>
// Minimum TypeScript Version: 3.9

export type MaskedInputInstance = {
  destroy: () => void;
};

export interface PipeConfig {
  placeholder: string;
  placeholderChar: string;
  currentCaretPosition: number;
  keepCharPositions: boolean;
  rawValue: string;
  guide: boolean | undefined;
  previousConformedValue: string | undefined;
}

export type MaskArray = Array<string | RegExp>;
export type Mask = MaskArray | ((value: string) => MaskArray | false) | false;
export type Pipe = (
  conformedValue: string,
  config: PipeConfig,
) => false | string | { value: string; indexesOfPipedChars: number[] };

export type MaskedInputOptions = {
  inputElement: HTMLElement;
  mask: Mask | {
    mask: Mask,
    pipe: Pipe,
  };
  guide?: boolean;
  placeholderChar?: string;
  keepCharPositions?: boolean;
  pipe?: Pipe;
  showMask?: boolean;
}

export default function maskInput(textMaskConfig: MaskedInputOptions): MaskedInputInstance;

export type ConformToMaskOptions = {
  guide?: boolean;
  previousConformedValue?: string,
  placeholderChar?: string;
  placeholder?: string;
  currentCaretPosition?: number;
  keepCharPositions?: boolean;
}

export interface ConformToMaskResult {
  conformedValue: string;
  meta: {
    someCharsRejected: boolean;
  };
}

export function conformToMask(
  text: string,
  mask: Mask,
  config?: ConformToMaskOptions,
): ConformToMaskResult;
