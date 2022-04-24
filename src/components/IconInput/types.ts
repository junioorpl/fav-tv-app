import {Dispatch, SetStateAction} from 'react';

export interface IconInputProps {
  icon?: JSX.Element;
  placeholder?: string;
  label?: string;
  onTextChange: Dispatch<SetStateAction<string>>;
  onIconPress?: () => void;
}
