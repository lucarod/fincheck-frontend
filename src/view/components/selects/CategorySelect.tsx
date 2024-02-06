import { Category } from 'src/app/entities/Category';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@components/selects/Select';

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
    <Select defaultValue={value} onChange={onChange} error={error}>
      <SelectTrigger>
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
  );
}
