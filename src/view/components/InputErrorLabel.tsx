import { CrossCircledIcon } from '@radix-ui/react-icons';

interface InputErrorLabelProps {
  error: string | undefined;
}

export function InputErrorLabel({ error }: InputErrorLabelProps) {
  if (!error) return null;

  return (
    <small className="text-red-900 text-xs mt-2 flex gap-2 items-center">
      <CrossCircledIcon />
      {error}
    </small>
  );
}
