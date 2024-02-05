import { Category } from 'src/app/entities/Category';
import { InputErrorLabel } from 'src/view/components/InputErrorLabel';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'src/view/components/Select';
import { SelectProvider } from 'src/view/components/Select/SelectContext';

interface CategorySelectProps {
  error?: string;
  value?: string;
  categories: Pick<Category, 'id' | 'name'>[]
  onChange?: (value: string) => void;
}

export function CategorySelect({
  error,
  value,
  categories,
  onChange,
}: CategorySelectProps) {
  return (
    <SelectProvider defaultValue={value} onChange={onChange}>
      <Select>
        <SelectTrigger error={error}>
          <SelectValue placeholder="Categoria"  />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem value={category.id} key={category.id}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <InputErrorLabel error={error} />
    </SelectProvider>
  );
}
