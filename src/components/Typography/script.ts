import { mapPropsToStyles } from '../../utils/mapPropsToStyles';

export let as: TypographyAs = 'span';
export let color: TypographyColor;
export let variant: TypographyVariant = 'primary-body';
export let weight: TypographyWeight = 'regular';
export let isTruncate = false;

let className = '';

$: { if (!color && (variant === 'label' || variant === 'label-small')) {
    color = 'text-secondary';
  }

  className = mapPropsToStyles({ ...$$props, color });
}

// TYPES
type TypographyVariant = 'label-primary' |
  'label' |
  'label-small' |
  'subtitle' |
  'primary-body' |
  'body-semibold' |
  'title';
type TypographyAs = 'span' | 'div';
type TypographyColor = 'white' | 'text-secondary' | 'btn-disabled';
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
