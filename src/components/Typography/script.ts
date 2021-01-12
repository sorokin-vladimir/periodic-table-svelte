import { mapPropsToStyles } from '../../utils/mapPropsToStyles';

export let el: TypographyEl = 'span';
export let color: TypographyColor;
export let variant: TypographyVariant = 'primary-body';
export let weight: TypographyWeight = 'regular';
export let isTruncate = false;
export let className = '';

let cls = '';

$: { if (!color && (variant === 'label' || variant === 'label-small')) {
    color = 'text-secondary';
  }

  cls = mapPropsToStyles({ ...$$props, color });
}

// TYPES
type TypographyVariant = 'label-primary' |
  'label' |
  'label-small' |
  'subtitle' |
  'primary-body' |
  'body-semibold' |
  'title';
type TypographyEl = 'span' | 'div';
type TypographyColor = 'text-primary' | 'white' | 'text-secondary' | 'btn-disabled';
type TypographyWeight = 'extra-light' |
  'light' |
  'regular' |
  'medium' |
  'semibold' |
  'bold' |
  'extra-bold';

// type Typography = {
//   // children: ReactNode;
//   variant?: TypographyVariant;
//   as?: TypographyAs;
//   color?: TypographyColor;
//   weight?: TypographyWeight;
//   isTruncate?: boolean;
// };
